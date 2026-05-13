import { getCombatEnemyDefinition, getCombatLocationDefinition } from "../data/combat";
import { createInitialCombatState } from "../state/createInitialState";
import type { CombatEncounter, CombatLocationId, CombatUnit, GameState } from "../types";
import {
  addCombatClassXp,
  getCharacterCombatLoadout,
  syncCharacterCombatStats
} from "./combatClasses";

const COMBAT_STEP_MS = 1000;
const MAX_COMBAT_STEPS = 120;
const COMBAT_LOG_LIMIT = 24;
const HIT_XP = 5;
const DEFEAT_XP = 22;

export function dispatchCharacterToCombat(
  state: GameState,
  characterId = state.selectedCharacterId,
  locationId: CombatLocationId = "ruins",
  now = Date.now()
): boolean {
  ensureCombatState(state);
  const character = state.characters.find((candidate) => candidate.id === characterId);
  if (!character || isCharacterDispatched(state, characterId) || isCharacterBusyWithAction(state, characterId)) {
    return false;
  }

  const location = getCombatLocationDefinition(locationId);
  const encounter = ensureCombatEncounter(state, locationId, now);
  const loadout = getCharacterCombatLoadout(state, characterId);
  const stats = syncCharacterCombatStats(state, characterId);
  if (stats.hp <= 0) {
    stats.hp = stats.maxHp;
  }
  if (stats.mana <= 0 && stats.maxMana > 0) {
    stats.mana = Math.ceil(stats.maxMana * 0.5);
  }

  const position = getOpenPartyPosition(encounter);
  encounter.units.push({
    id: `party-${character.id}`,
    kind: "party",
    characterId: character.id,
    name: character.name,
    hp: stats.hp,
    maxHp: stats.maxHp,
    mana: stats.mana,
    maxMana: stats.maxMana,
    x: position.x,
    y: position.y,
    damage: getClassScaledDamage(state, character.id, loadout.damage),
    attackRange: loadout.attackRange,
    actEveryMs: getPartyActDelay(loadout.speed),
    nextActAt: now + getPartyActDelay(loadout.speed),
    classId: loadout.classId,
    weaponId: loadout.weaponId ?? undefined
  });

  character.condition = "working";
  state.combat.selectedLocationId = locationId;
  encounter.message = `${character.name} enters ${location.label}.`;
  addCombatLog(state, encounter.message, "muted", now);
  ensureEnemyWave(encounter, now);
  touchCombat(state, now);
  return true;
}

export function recallCharacterFromCombat(
  state: GameState,
  characterId = state.selectedCharacterId,
  now = Date.now()
): boolean {
  ensureCombatState(state);
  const encounter = state.combat.encounter;
  if (!encounter) {
    return false;
  }

  const unit = getCombatUnitForCharacter(state, characterId);
  if (!unit) {
    return false;
  }

  syncCharacterFromUnit(state, unit);
  encounter.units = encounter.units.filter((candidate) => candidate.id !== unit.id);
  const character = state.characters.find((candidate) => candidate.id === characterId);
  if (character && !isCharacterBusyWithAction(state, characterId)) {
    character.condition = "resting";
  }

  addCombatLog(state, `${unit.name} withdraws from The Ruins.`, "warning", now);
  if (!getLivingPartyUnits(encounter).length) {
    state.combat.encounter = null;
  } else {
    encounter.updatedAt = now;
    encounter.message = `${unit.name} withdraws.`;
  }
  touchCombat(state, now);
  return true;
}

export function simulateCombatUntil(state: GameState, targetTime = Date.now()): void {
  ensureCombatState(state);
  let encounter = state.combat.encounter;
  if (!encounter) {
    return;
  }

  let steps = 0;
  while (encounter && encounter.updatedAt + COMBAT_STEP_MS <= targetTime && steps < MAX_COMBAT_STEPS) {
    const now = encounter.updatedAt + COMBAT_STEP_MS;
    processCombatStep(state, encounter, now);
    encounter = state.combat.encounter;
    if (encounter) {
      encounter.updatedAt = now;
    }
    steps += 1;
  }

  if (steps > 0) {
    touchCombat(state, Math.min(targetTime, state.combat.encounter?.updatedAt ?? targetTime));
  }
}

export function isCharacterDispatched(state: GameState, characterId: string): boolean {
  return Boolean(getCombatUnitForCharacter(state, characterId));
}

export function getCombatUnitForCharacter(state: GameState, characterId: string): CombatUnit | null {
  return (
    state.combat?.encounter?.units.find((unit) => unit.kind === "party" && unit.characterId === characterId) ?? null
  );
}

export function getLivingPartyUnits(encounter: CombatEncounter | null): CombatUnit[] {
  return encounter?.units.filter((unit) => unit.kind === "party" && unit.hp > 0) ?? [];
}

export function getLivingEnemyUnits(encounter: CombatEncounter | null): CombatUnit[] {
  return encounter?.units.filter((unit) => unit.kind === "enemy" && unit.hp > 0) ?? [];
}

function processCombatStep(state: GameState, encounter: CombatEncounter, now: number): void {
  const livingParty = getLivingPartyUnits(encounter);
  if (!livingParty.length) {
    finishDefeat(state, encounter, now);
    return;
  }

  if (!getLivingEnemyUnits(encounter).length) {
    ensureEnemyWave(encounter, now);
    return;
  }

  const actingUnits = encounter.units
    .filter((unit) => unit.hp > 0 && unit.nextActAt <= now)
    .sort((left, right) => left.nextActAt - right.nextActAt);

  for (const unit of actingUnits) {
    if (unit.hp <= 0 || state.combat.encounter !== encounter) {
      continue;
    }

    const targets = unit.kind === "party" ? getLivingEnemyUnits(encounter) : getLivingPartyUnits(encounter);
    if (!targets.length) {
      continue;
    }

    const target = getNearestUnit(unit, targets);
    if (!target) {
      continue;
    }

    if (getDistance(unit, target) <= unit.attackRange) {
      attackUnit(state, encounter, unit, target, now);
    } else {
      moveUnitToward(encounter, unit, target);
      encounter.message = `${unit.name} moves closer.`;
    }
    unit.nextActAt = now + getActDelay(unit);
  }

  encounter.units = encounter.units.filter((unit) => unit.kind === "party" || unit.hp > 0);
  syncPartyStatsFromEncounter(state, encounter);

  if (!getLivingPartyUnits(encounter).length) {
    finishDefeat(state, encounter, now);
    return;
  }

  if (!getLivingEnemyUnits(encounter).length) {
    encounter.wave += 1;
    ensureEnemyWave(encounter, now);
  }
}

function attackUnit(
  state: GameState,
  encounter: CombatEncounter,
  attacker: CombatUnit,
  target: CombatUnit,
  now: number
): void {
  const damage = Math.max(1, Math.round(attacker.damage));
  target.hp = Math.max(0, target.hp - damage);
  encounter.message = `${attacker.name} hits ${target.name} for ${damage}.`;

  if (attacker.kind === "party" && attacker.characterId && attacker.classId) {
    addCombatClassXp(state, attacker.characterId, attacker.classId, target.hp <= 0 ? HIT_XP + DEFEAT_XP : HIT_XP, now);
  }

  if (target.kind === "enemy" && target.hp <= 0) {
    encounter.defeatedEnemies += 1;
    addCombatLog(state, `${attacker.name} defeats ${target.name}.`, "gain", now);
    return;
  }

  if (target.kind === "party" && target.hp <= 0) {
    syncCharacterFromUnit(state, target);
    addCombatLog(state, `${target.name} is forced back from the fight.`, "warning", now);
  }
}

function ensureEnemyWave(encounter: CombatEncounter, now: number): void {
  if (getLivingEnemyUnits(encounter).length || !getLivingPartyUnits(encounter).length) {
    return;
  }

  const count = Math.min(3, 1 + Math.floor((encounter.wave - 1) / 2));
  for (let index = 0; index < count; index += 1) {
    encounter.units.push(createEnemyUnit(encounter, index, now));
  }
  encounter.message = `Goblin wave ${encounter.wave} enters The Ruins.`;
  encounter.updatedAt = now;
}

function createEnemyUnit(encounter: CombatEncounter, index: number, now: number): CombatUnit {
  const location = getCombatLocationDefinition(encounter.locationId);
  const enemy = getCombatEnemyDefinition("goblin");
  const position = getOpenEnemyPosition(encounter, index);
  return {
    id: `goblin-${encounter.wave}-${index + 1}-${now}`,
    kind: "enemy",
    enemyId: enemy.id,
    name: enemy.label,
    hp: enemy.maxHp,
    maxHp: enemy.maxHp,
    mana: enemy.maxMana,
    maxMana: enemy.maxMana,
    x: Math.min(location.gridWidth - 1, position.x),
    y: Math.min(location.gridHeight - 1, position.y),
    damage: enemy.damage,
    attackRange: enemy.attackRange,
    actEveryMs: enemy.actEveryMs,
    nextActAt: now + enemy.actEveryMs
  };
}

function ensureCombatEncounter(state: GameState, locationId: CombatLocationId, now: number): CombatEncounter {
  if (state.combat.encounter?.locationId === locationId) {
    return state.combat.encounter;
  }

  state.combat.encounter = {
    id: `combat-${locationId}-${now}`,
    locationId,
    startedAt: now,
    updatedAt: now,
    wave: 1,
    defeatedEnemies: 0,
    units: [],
    message: "The Ruins are quiet."
  };
  return state.combat.encounter;
}

function finishDefeat(state: GameState, encounter: CombatEncounter, now: number): void {
  syncPartyStatsFromEncounter(state, encounter);
  for (const unit of encounter.units.filter((candidate) => candidate.kind === "party")) {
    const character = unit.characterId
      ? state.characters.find((candidate) => candidate.id === unit.characterId)
      : null;
    if (character && !isCharacterBusyWithAction(state, character.id)) {
      character.condition = "resting";
    }
  }

  addCombatLog(state, "The party withdraws from The Ruins to recover.", "warning", now);
  state.combat.encounter = null;
  touchCombat(state, now);
}

function syncPartyStatsFromEncounter(state: GameState, encounter: CombatEncounter): void {
  for (const unit of encounter.units) {
    if (unit.kind === "party") {
      syncCharacterFromUnit(state, unit);
    }
  }
}

function syncCharacterFromUnit(state: GameState, unit: CombatUnit): void {
  if (!unit.characterId) {
    return;
  }

  const character = state.characters.find((candidate) => candidate.id === unit.characterId);
  if (!character) {
    return;
  }

  character.combat = {
    hp: unit.hp,
    maxHp: unit.maxHp,
    mana: unit.mana,
    maxMana: unit.maxMana
  };
}

function moveUnitToward(encounter: CombatEncounter, unit: CombatUnit, target: CombatUnit): void {
  const location = getCombatLocationDefinition(encounter.locationId);
  const occupied = new Set(
    encounter.units
      .filter((candidate) => candidate.hp > 0 && candidate.id !== unit.id)
      .map((candidate) => `${candidate.x},${candidate.y}`)
  );
  const dx = Math.sign(target.x - unit.x);
  const dy = Math.sign(target.y - unit.y);
  const candidates = [
    { x: unit.x + dx, y: unit.y },
    { x: unit.x, y: unit.y + dy },
    { x: unit.x, y: unit.y - dy },
    { x: unit.x - dx, y: unit.y }
  ].filter(
    (position) =>
      position.x >= 0 &&
      position.y >= 0 &&
      position.x < location.gridWidth &&
      position.y < location.gridHeight &&
      !occupied.has(`${position.x},${position.y}`)
  );

  const next = candidates.sort((left, right) => getDistance(left, target) - getDistance(right, target))[0];
  if (next) {
    unit.x = next.x;
    unit.y = next.y;
  }
}

function getOpenPartyPosition(encounter: CombatEncounter): { x: number; y: number } {
  const location = getCombatLocationDefinition(encounter.locationId);
  const rows = [Math.floor(location.gridHeight / 2), 1, location.gridHeight - 2, 0, location.gridHeight - 1];
  return getFirstOpenPosition(encounter, rows.map((y) => ({ x: 0, y }))) ?? { x: 0, y: 0 };
}

function getOpenEnemyPosition(encounter: CombatEncounter, offset: number): { x: number; y: number } {
  const location = getCombatLocationDefinition(encounter.locationId);
  const rows = [Math.floor(location.gridHeight / 2), 1, location.gridHeight - 2, 0, location.gridHeight - 1];
  const positions = rows.flatMap((y) => [
    { x: location.gridWidth - 1, y },
    { x: location.gridWidth - 2, y }
  ]);
  return getFirstOpenPosition(encounter, positions.slice(offset).concat(positions.slice(0, offset))) ?? {
    x: location.gridWidth - 1,
    y: Math.floor(location.gridHeight / 2)
  };
}

function getFirstOpenPosition(
  encounter: CombatEncounter,
  positions: Array<{ x: number; y: number }>
): { x: number; y: number } | null {
  const occupied = new Set(encounter.units.filter((unit) => unit.hp > 0).map((unit) => `${unit.x},${unit.y}`));
  return positions.find((position) => !occupied.has(`${position.x},${position.y}`)) ?? null;
}

function getNearestUnit(unit: CombatUnit, targets: CombatUnit[]): CombatUnit | null {
  return targets.slice().sort((left, right) => getDistance(unit, left) - getDistance(unit, right))[0] ?? null;
}

function getDistance(
  left: Pick<CombatUnit, "x" | "y"> | { x: number; y: number },
  right: Pick<CombatUnit, "x" | "y"> | { x: number; y: number }
): number {
  return Math.abs(left.x - right.x) + Math.abs(left.y - right.y);
}

function getActDelay(unit: CombatUnit): number {
  return Math.max(500, unit.actEveryMs);
}

function getPartyActDelay(speed: number): number {
  return Math.max(900, Math.round(2400 / Math.max(0.4, speed)));
}

function getClassScaledDamage(state: GameState, characterId: string, baseDamage: number): number {
  const character = state.characters.find((candidate) => candidate.id === characterId);
  if (!character) {
    return baseDamage;
  }

  const classId = getCharacterCombatLoadout(state, characterId).classId;
  const level = character.classProgress?.[classId]?.level ?? 1;
  return baseDamage + Math.max(0, level - 1) * 0.08;
}

function isCharacterBusyWithAction(state: GameState, characterId: string): boolean {
  return state.currentActions.some((action) => action.characterId === characterId);
}

function ensureCombatState(state: GameState): void {
  state.combat ??= createInitialCombatState();
}

function addCombatLog(state: GameState, text: string, tone: "muted" | "gain" | "warning", now: number): void {
  state.combat.log = [
    {
      id: `${now}-${state.combat.log.length}-${text.slice(0, 12)}`,
      time: now,
      text,
      tone
    },
    ...state.combat.log
  ].slice(0, COMBAT_LOG_LIMIT);
}

function touchCombat(state: GameState, now: number): void {
  state.updatedAt = now;
  state.lastSimulatedAt = now;
}
