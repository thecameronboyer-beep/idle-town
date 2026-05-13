import { combatClassDefinitions, getCombatClassDefinition, weaponCombatClasses } from "../data/combat";
import { toolDefinitions } from "../data/craftables";
import {
  createEmptyCombatClassProgressMap,
  createInitialCharacterCombatStats
} from "../state/createInitialState";
import type {
  CharacterCombatStats,
  CombatClassId,
  CombatClassProgress,
  CombatClassProgressMap,
  GameState,
  ToolId,
  WeaponRange
} from "../types";
import { formatSkillXp, getTotalXpForSkillLevel, MAX_SKILL_LEVEL } from "./skills";
import { getToolDefinition, hasUsableTool } from "./tools";

export interface CombatLoadout {
  classId: CombatClassId;
  classLabel: string;
  weaponId: ToolId | null;
  weaponLabel: string;
  damage: number;
  speed: number;
  range: WeaponRange;
  attackRange: number;
  maxHp: number;
  maxMana: number;
}

export interface CombatClassProgressView {
  currentLevelXp: number;
  nextLevelXp: number;
  xpIntoLevel: number;
  xpForLevel: number;
  ratio: number;
  atCap: boolean;
}

const UNARMED_DAMAGE = 1.4;
const UNARMED_SPEED = 0.8;

export function getBestCombatWeaponId(state: GameState): ToolId | null {
  const usableWeapons = toolDefinitions.filter((tool) => tool.weapon && hasUsableTool(state, tool.id));
  usableWeapons.sort((left, right) => getWeaponScore(right.id) - getWeaponScore(left.id));
  return usableWeapons[0]?.id ?? null;
}

export function getCombatClassForWeapon(toolId: ToolId | null): CombatClassId {
  if (!toolId) {
    return "fighter";
  }

  return weaponCombatClasses[toolId] ?? "fighter";
}

export function getCharacterCombatLoadout(state: GameState, _characterId = state.selectedCharacterId): CombatLoadout {
  const weaponId = getBestCombatWeaponId(state);
  const definition = weaponId ? getToolDefinition(weaponId) : null;
  const classId = getCombatClassForWeapon(weaponId);
  const classDefinition = getCombatClassDefinition(classId);
  const weapon = definition?.weapon;
  return {
    classId,
    classLabel: classDefinition.label,
    weaponId,
    weaponLabel: definition?.label ?? "Unarmed",
    damage: weapon?.damage ?? UNARMED_DAMAGE,
    speed: weapon?.speed ?? UNARMED_SPEED,
    range: weapon?.range ?? classDefinition.range,
    attackRange: getAttackRangeForWeapon(weapon?.range ?? classDefinition.range),
    maxHp: classDefinition.maxHp,
    maxMana: classDefinition.maxMana
  };
}

export function syncCharacterCombatStats(state: GameState, characterId = state.selectedCharacterId): CharacterCombatStats {
  const character = state.characters.find((candidate) => candidate.id === characterId);
  if (!character) {
    return createInitialCharacterCombatStats();
  }

  const loadout = getCharacterCombatLoadout(state, characterId);
  const current = character.combat ?? createInitialCharacterCombatStats();
  const nextMaxHp = loadout.maxHp;
  const nextMaxMana = loadout.maxMana;
  const hpRatio = current.maxHp > 0 ? current.hp / current.maxHp : 1;
  const manaRatio = current.maxMana > 0 ? current.mana / current.maxMana : 1;
  character.combat = {
    maxHp: nextMaxHp,
    hp: current.hp <= 0 ? 0 : clampNumber(Math.round(nextMaxHp * hpRatio), 1, nextMaxHp),
    maxMana: nextMaxMana,
    mana: nextMaxMana <= 0 ? 0 : clampNumber(Math.round(nextMaxMana * manaRatio), 0, nextMaxMana)
  };
  return character.combat;
}

export function ensureCombatClassProgress(
  character: GameState["characters"][number]
): CombatClassProgressMap {
  const normalized = createEmptyCombatClassProgressMap();
  const saved = character.classProgress;
  if (saved) {
    for (const definition of combatClassDefinitions) {
      normalized[definition.id] = {
        ...normalized[definition.id],
        ...(saved[definition.id] ?? {})
      };
    }
  }
  character.classProgress = normalized;
  return normalized;
}

export function addCombatClassXp(
  state: GameState,
  characterId: string,
  classId: CombatClassId,
  amount: number,
  now = Date.now()
): void {
  const gained = Math.max(0, Math.floor(amount));
  if (gained <= 0) {
    return;
  }

  const character = state.characters.find((candidate) => candidate.id === characterId);
  if (!character) {
    return;
  }

  const progress = ensureCombatClassProgress(character)[classId];
  progress.totalXp += gained;
  progress.xp = Math.min(getTotalXpForSkillLevel(MAX_SKILL_LEVEL), progress.xp + gained);
  progress.level = getCombatClassLevelForXp(progress.xp);
  state.updatedAt = now;
  state.lastSimulatedAt = now;
}

export function getCombatClassProgressView(progress: CombatClassProgress): CombatClassProgressView {
  const currentLevelXp = getTotalXpForSkillLevel(progress.level);
  const nextLevelXp =
    progress.level >= MAX_SKILL_LEVEL ? currentLevelXp : getTotalXpForSkillLevel(progress.level + 1);
  const xpForLevel = Math.max(0, nextLevelXp - currentLevelXp);
  const xpIntoLevel = Math.max(0, Math.min(progress.xp - currentLevelXp, xpForLevel));
  return {
    currentLevelXp,
    nextLevelXp,
    xpIntoLevel,
    xpForLevel,
    ratio: xpForLevel <= 0 ? 1 : xpIntoLevel / xpForLevel,
    atCap: progress.level >= MAX_SKILL_LEVEL
  };
}

export function formatCombatClassXp(value: number): string {
  return formatSkillXp(value);
}

function getAttackRangeForWeapon(range: WeaponRange): number {
  if (range === "ranged") {
    return 3;
  }

  if (range === "focus") {
    return 2;
  }

  return 1;
}

function getWeaponScore(toolId: ToolId): number {
  const weapon = getToolDefinition(toolId)?.weapon;
  if (!weapon) {
    return 0;
  }

  const rangeBonus = weapon.range === "ranged" ? 0.35 : weapon.range === "focus" ? 0.2 : 0;
  return weapon.damage * weapon.speed + rangeBonus;
}

function getCombatClassLevelForXp(xp: number): number {
  let level = 1;
  while (level < MAX_SKILL_LEVEL && xp >= getTotalXpForSkillLevel(level + 1)) {
    level += 1;
  }
  return level;
}

function clampNumber(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) {
    return min;
  }

  return Math.min(max, Math.max(min, value));
}
