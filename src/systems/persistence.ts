import { actionDefinitions } from "../data/actions";
import { combatClassIds, combatEnemyIds, combatLocationIds } from "../data/combat";
import { cookingRecipeIds } from "../data/cooking";
import { toolDefinitions } from "../data/craftables";
import { resourceOrder, wholeCountResourceIds } from "../data/resources";
import {
  createEmptyBuildingCounts,
  createEmptyCombatClassProgressMap,
  createEmptyInventory,
  createEmptyResourceCounts,
  createEmptyTools,
  createInitialCharacterNeeds,
  createInitialCharacterCombatStats,
  createInitialCookingState,
  createInitialCombatState,
  createInitialState
} from "../state/createInitialState";
import type {
  ActionId,
  ActionLoop,
  ActionLoopAdvanceMode,
  ActionLoopAdvanceRule,
  ActionLoopResourceScope,
  CharacterLocationId,
  CharacterCombatStats,
  CharacterNeeds,
  CombatClassId,
  CombatClassProgress,
  CombatClassProgressMap,
  CombatEncounter,
  CombatLocationId,
  CombatLogEntry,
  CombatState,
  CombatUnit,
  CombatUnitKind,
  CookingQueueEntry,
  CookingRecipeId,
  CookingState,
  CookingStationId,
  EnemyId,
  GameState,
  Inventory,
  LocationId,
  OwnedBuildingCounts,
  OwnedBuildings,
  OwnedTools,
  ResourceId,
  ResourceCounts,
  RunningAction,
  ToolId,
  ToolState
} from "../types";
import { syncPopulationWithHousing } from "./camp";
import { normalizeInventory } from "./inventory";
import { normalizeSkills } from "./skills";

const SAVE_KEY = "idle-town:first-survival-slice:v1";
const CURRENT_SAVE_VERSION = 11;
const LEGACY_CAMPFIRE_DURATION_MS = 15 * 60 * 1000;
const WHOLE_RESOURCE_AVERAGE_WEIGHTS: Partial<Record<ResourceId, number>> = {
  minnow: 1,
  stoneLoach: 2,
  mudskipper: 3,
  brookStickleback: 1.25,
  pebblePerch: 4.75,
  rabbit: 3.5,
  squirrel: 1.25
};

export function loadGame(): GameState {
  const saved = window.localStorage.getItem(SAVE_KEY);
  if (!saved) {
    return createInitialState();
  }

  try {
    const parsed = JSON.parse(saved) as Partial<GameState>;
    const fallback = createInitialState();
    const buildings = {
      ...fallback.buildings,
      ...(parsed.buildings ?? {})
    };
    const selectedCharacterId =
      typeof parsed.selectedCharacterId === "string" ? parsed.selectedCharacterId : fallback.selectedCharacterId;
    const characters = normalizeCharacters(
      parsed.characters,
      fallback.characters,
      parsed.characterInventory,
      parsed.characterResourceCounts,
      selectedCharacterId
    );
    const currentActions = normalizeCurrentActions(parsed.currentActions, parsed.currentAction);
    const actionLoops = normalizeActionLoops(parsed.actionLoops, parsed.currentAction, fallback.actionLoops);
    const state: GameState = {
      ...fallback,
      ...parsed,
      selectedCharacterId,
      inventory: {
        ...createEmptyInventory(),
        ...(parsed.inventory ?? {})
      },
      characterInventory: {
        ...createEmptyInventory(),
        ...(parsed.characterInventory ?? {})
      },
      resourceCounts: {
        ...createEmptyResourceCounts(),
        ...(parsed.resourceCounts ?? {})
      },
      characterResourceCounts: {
        ...createEmptyResourceCounts(),
        ...(parsed.characterResourceCounts ?? {})
      },
      tools: normalizeTools(parsed.tools),
      buildings,
      buildingCounts: normalizeBuildingCounts(parsed.buildingCounts, buildings, fallback.buildingCounts),
      campfireExpiresAt: typeof parsed.campfireExpiresAt === "number" ? parsed.campfireExpiresAt : fallback.campfireExpiresAt,
      characters,
      seenResources: parsed.seenResources?.length ? parsed.seenResources : fallback.seenResources,
      skills: normalizeSkills(parsed.skills),
      cooking: normalizeCookingState(parsed.cooking, fallback.cooking),
      combat: normalizeCombatState(parsed.combat, fallback.combat, characters),
      actionLoops,
      currentActions,
      currentAction: currentActions.find((action) => action.characterId === selectedCharacterId) ?? currentActions[0] ?? null,
      log: parsed.log?.length ? parsed.log : fallback.log,
      version: CURRENT_SAVE_VERSION
    };
    const savedVersion = typeof parsed.version === "number" ? parsed.version : 1;
    migrateLegacyForageResources(state, savedVersion);
    migrateLegacyAnimalCounts(state, savedVersion);
    migrateWholeResourceCounts(state, savedVersion);
    migrateCampfireTimer(state, savedVersion);
    syncPopulationWithHousing(state);
    normalizeInventory(state);
    return state;
  } catch {
    return createInitialState();
  }
}

function normalizeBuildingCounts(
  savedCounts: unknown,
  buildings: OwnedBuildings,
  fallbackCounts: OwnedBuildingCounts
): OwnedBuildingCounts {
  const counts = {
    ...createEmptyBuildingCounts(),
    ...fallbackCounts
  };

  if (savedCounts && typeof savedCounts === "object") {
    const rawCounts = savedCounts as Partial<Record<keyof OwnedBuildingCounts, number>>;
    for (const buildingId of Object.keys(counts) as Array<keyof OwnedBuildingCounts>) {
      counts[buildingId] = Math.max(0, Math.floor(Number(rawCounts[buildingId] ?? counts[buildingId])));
    }
  }

  for (const buildingId of Object.keys(buildings) as Array<keyof OwnedBuildings>) {
    if (buildings[buildingId] && counts[buildingId] <= 0) {
      counts[buildingId] = 1;
    }
  }

  return counts;
}

function normalizeCharacters(
  savedCharacters: unknown,
  fallbackCharacters: GameState["characters"],
  legacyInventory: unknown,
  legacyResourceCounts: unknown,
  selectedCharacterId: string
): GameState["characters"] {
  if (!Array.isArray(savedCharacters) || !savedCharacters.length) {
    return fallbackCharacters;
  }

  return savedCharacters.map((savedCharacter, index) => {
    const fallbackCharacter = fallbackCharacters[index] ?? fallbackCharacters[0];
    if (!savedCharacter || typeof savedCharacter !== "object") {
      return fallbackCharacter;
    }

    const candidate = savedCharacter as Partial<GameState["characters"][number]>;
    const shouldUseLegacyInventory =
      candidate.id === selectedCharacterId && !candidate.inventory && legacyInventory && typeof legacyInventory === "object";
    const inventory = normalizeInventoryRecord(shouldUseLegacyInventory ? legacyInventory : candidate.inventory);
    const resourceCounts = normalizeResourceCountsRecord(
      inventory,
      shouldUseLegacyInventory ? legacyResourceCounts : candidate.resourceCounts
    );
    return {
      ...fallbackCharacter,
      ...candidate,
      locationId: isCharacterLocationId(candidate.locationId) ? candidate.locationId : fallbackCharacter.locationId,
      combat: normalizeCharacterCombat(candidate.combat, fallbackCharacter.combat),
      needs: normalizeCharacterNeeds(candidate.needs, fallbackCharacter.needs),
      classProgress: normalizeCombatClassProgressMap(candidate.classProgress),
      inventory,
      resourceCounts,
      actionLoopId: typeof candidate.actionLoopId === "string" ? candidate.actionLoopId : fallbackCharacter.actionLoopId
    };
  });
}

function normalizeCharacterNeeds(
  rawNeeds: unknown,
  fallbackNeeds: CharacterNeeds = createInitialCharacterNeeds()
): CharacterNeeds {
  if (!rawNeeds || typeof rawNeeds !== "object") {
    return fallbackNeeds;
  }

  const candidate = rawNeeds as Partial<CharacterNeeds>;
  const maxHunger = clampNumber(candidate.maxHunger, 1, 999);
  return {
    maxHunger,
    hunger: clampNumber(candidate.hunger, 0, maxHunger)
  };
}

function normalizeCharacterCombat(
  rawCombat: unknown,
  fallbackCombat: CharacterCombatStats = createInitialCharacterCombatStats()
): CharacterCombatStats {
  if (!rawCombat || typeof rawCombat !== "object") {
    return fallbackCombat;
  }

  const candidate = rawCombat as Partial<CharacterCombatStats>;
  const maxHp = clampNumber(candidate.maxHp, 1, 999);
  const maxMana = clampNumber(candidate.maxMana, 0, 999);
  return {
    maxHp,
    hp: clampNumber(candidate.hp, 0, maxHp),
    maxMana,
    mana: clampNumber(candidate.mana, 0, maxMana)
  };
}

function normalizeCombatClassProgressMap(rawProgress: unknown): CombatClassProgressMap {
  const progress = createEmptyCombatClassProgressMap();
  if (!rawProgress || typeof rawProgress !== "object") {
    return progress;
  }

  const savedProgress = rawProgress as Partial<Record<CombatClassId, Partial<CombatClassProgress>>>;
  for (const classId of combatClassIds) {
    progress[classId] = normalizeCombatClassProgress(savedProgress[classId]);
  }
  return progress;
}

function normalizeCombatClassProgress(rawProgress: Partial<CombatClassProgress> | undefined): CombatClassProgress {
  if (!rawProgress || typeof rawProgress !== "object") {
    return {
      level: 1,
      xp: 0,
      totalXp: 0
    };
  }

  const xp = clampNumber(rawProgress.xp, 0, Number.MAX_SAFE_INTEGER);
  return {
    level: clampNumber(rawProgress.level, 1, 1000),
    xp,
    totalXp: Math.max(xp, clampNumber(rawProgress.totalXp, 0, Number.MAX_SAFE_INTEGER))
  };
}

function normalizeCombatState(
  rawCombat: unknown,
  fallbackCombat: CombatState = createInitialCombatState(),
  characters: GameState["characters"]
): CombatState {
  if (!rawCombat || typeof rawCombat !== "object") {
    return fallbackCombat;
  }

  const candidate = rawCombat as Partial<CombatState>;
  return {
    selectedLocationId: isCombatLocationId(candidate.selectedLocationId)
      ? candidate.selectedLocationId
      : fallbackCombat.selectedLocationId,
    encounter: normalizeCombatEncounter(candidate.encounter, characters),
    log: normalizeCombatLog(candidate.log)
  };
}

function normalizeCombatEncounter(
  rawEncounter: unknown,
  characters: GameState["characters"]
): CombatEncounter | null {
  if (!rawEncounter || typeof rawEncounter !== "object") {
    return null;
  }

  const candidate = rawEncounter as Partial<CombatEncounter>;
  if (!isCombatLocationId(candidate.locationId) || typeof candidate.id !== "string") {
    return null;
  }

  const units = Array.isArray(candidate.units)
    ? candidate.units
        .map((unit) => normalizeCombatUnit(unit, characters))
        .filter((unit): unit is CombatUnit => Boolean(unit))
    : [];

  return {
    id: candidate.id,
    locationId: candidate.locationId,
    startedAt: clampNumber(candidate.startedAt, 0, Number.MAX_SAFE_INTEGER),
    updatedAt: clampNumber(candidate.updatedAt, 0, Number.MAX_SAFE_INTEGER),
    wave: clampNumber(candidate.wave, 1, 999),
    defeatedEnemies: clampNumber(candidate.defeatedEnemies, 0, Number.MAX_SAFE_INTEGER),
    units,
    message: typeof candidate.message === "string" ? candidate.message : ""
  };
}

function normalizeCombatUnit(rawUnit: unknown, characters: GameState["characters"]): CombatUnit | null {
  if (!rawUnit || typeof rawUnit !== "object") {
    return null;
  }

  const candidate = rawUnit as Partial<CombatUnit>;
  if (!isCombatUnitKind(candidate.kind) || typeof candidate.id !== "string" || typeof candidate.name !== "string") {
    return null;
  }

  if (candidate.kind === "party" && !characters.some((character) => character.id === candidate.characterId)) {
    return null;
  }

  if (candidate.kind === "enemy" && !isEnemyId(candidate.enemyId)) {
    return null;
  }

  const maxHp = clampNumber(candidate.maxHp, 1, 999);
  const maxMana = clampNumber(candidate.maxMana, 0, 999);
  return {
    id: candidate.id,
    kind: candidate.kind,
    name: candidate.name,
    hp: clampNumber(candidate.hp, 0, maxHp),
    maxHp,
    mana: clampNumber(candidate.mana, 0, maxMana),
    maxMana,
    x: clampNumber(candidate.x, 0, 99),
    y: clampNumber(candidate.y, 0, 99),
    damage: clampNumber(candidate.damage, 0, 999),
    attackRange: clampNumber(candidate.attackRange, 1, 99),
    actEveryMs: clampNumber(candidate.actEveryMs, 500, 60_000),
    nextActAt: clampNumber(candidate.nextActAt, 0, Number.MAX_SAFE_INTEGER),
    characterId: typeof candidate.characterId === "string" ? candidate.characterId : undefined,
    enemyId: isEnemyId(candidate.enemyId) ? candidate.enemyId : undefined,
    classId: isCombatClassId(candidate.classId) ? candidate.classId : undefined,
    weaponId: candidate.weaponId
  };
}

function normalizeCombatLog(rawLog: unknown): CombatLogEntry[] {
  if (!Array.isArray(rawLog)) {
    return [];
  }

  return rawLog
    .filter((entry): entry is Partial<CombatLogEntry> => Boolean(entry && typeof entry === "object"))
    .map((entry, index) => ({
      id: typeof entry.id === "string" ? entry.id : `combat-log-${index + 1}`,
      time: clampNumber(entry.time, 0, Number.MAX_SAFE_INTEGER),
      text: typeof entry.text === "string" ? entry.text : "",
      tone: isCombatLogTone(entry.tone) ? entry.tone : "muted"
    }))
    .filter((entry) => entry.text)
    .slice(0, 20);
}

function normalizeActionLoops(
  savedLoops: unknown,
  legacyCurrentAction: unknown,
  fallbackLoops: ActionLoop[]
): ActionLoop[] {
  if (Array.isArray(savedLoops)) {
    const loops = savedLoops
      .map((loop, index) => normalizeActionLoop(loop, index))
      .filter((loop): loop is ActionLoop => Boolean(loop));
    if (loops.length) {
      return loops;
    }
  }

  const legacyLoop = normalizeLegacyActionLoop(legacyCurrentAction);
  return legacyLoop ? [legacyLoop] : fallbackLoops;
}

function normalizeActionLoop(savedLoop: unknown, index: number): ActionLoop | null {
  if (!savedLoop || typeof savedLoop !== "object") {
    return null;
  }

  const candidate = savedLoop as Partial<ActionLoop>;
  const actionIds = Array.isArray(candidate.actionIds)
    ? candidate.actionIds
        .map((actionId) => normalizeSavedActionId(actionId))
        .filter((actionId): actionId is ActionId => Boolean(actionId))
    : [];
  if (!actionIds.length) {
    return null;
  }

  return {
    id: typeof candidate.id === "string" && candidate.id ? candidate.id : `loop-${index + 1}`,
    name: typeof candidate.name === "string" && candidate.name ? candidate.name : `Loop ${index + 1}`,
    actionIds,
    locationIds: normalizeLoopLocations(actionIds, candidate.locationIds),
    advanceRules: normalizeLoopAdvanceRules(actionIds, candidate.advanceRules),
    createdAt: typeof candidate.createdAt === "number" ? candidate.createdAt : Date.now(),
    updatedAt: typeof candidate.updatedAt === "number" ? candidate.updatedAt : Date.now()
  };
}

function normalizeLegacyActionLoop(legacyCurrentAction: unknown): ActionLoop | null {
  if (!legacyCurrentAction || typeof legacyCurrentAction !== "object") {
    return null;
  }

  const running = legacyCurrentAction as Partial<RunningAction>;
  const actionIds = Array.isArray(running.loopActionIds)
    ? running.loopActionIds
        .map((actionId) => normalizeSavedActionId(actionId))
        .filter((actionId): actionId is ActionId => Boolean(actionId))
    : normalizeSavedActionId(running.actionId)
      ? [normalizeSavedActionId(running.actionId) as ActionId]
      : [];
  if (!actionIds.length) {
    return null;
  }

  const now = Date.now();
  return {
    id: "loop-saved-work",
    name: "Saved Work Loop",
    actionIds,
    locationIds: normalizeLoopLocations(actionIds, running.loopLocationIds),
    advanceRules: actionIds.map((actionId) => createDefaultLoopAdvanceRule(actionId)),
    createdAt: now,
    updatedAt: now
  };
}

function normalizeLoopLocations(actionIds: ActionId[], savedLocations: unknown): Array<LocationId | null> {
  const locations = Array.isArray(savedLocations) ? savedLocations : [];
  return actionIds.map((_, index) => {
    const locationId = locations[index];
    return isLocationId(locationId) ? locationId : null;
  });
}

function normalizeLoopAdvanceRules(actionIds: ActionId[], savedRules: unknown): ActionLoopAdvanceRule[] {
  const rules = Array.isArray(savedRules) ? savedRules : [];
  return actionIds.map((actionId, index) => normalizeLoopAdvanceRule(actionId, rules[index]));
}

function normalizeLoopAdvanceRule(actionId: ActionId, savedRule: unknown): ActionLoopAdvanceRule {
  if (!savedRule || typeof savedRule !== "object") {
    return createDefaultLoopAdvanceRule(actionId);
  }

  const candidate = savedRule as Partial<ActionLoopAdvanceRule>;
  const mode = isActionLoopAdvanceMode(candidate.mode) ? candidate.mode : createDefaultLoopAdvanceRule(actionId).mode;
  if (mode !== "whenResourceAtLeast") {
    return { mode };
  }

  return {
    mode,
    resourceId: isResourceId(candidate.resourceId) ? candidate.resourceId : undefined,
    amount: clampNumber(candidate.amount, 1, 999999),
    scope: isActionLoopResourceScope(candidate.scope) ? candidate.scope : "camp"
  };
}

function createDefaultLoopAdvanceRule(_actionId: ActionId): ActionLoopAdvanceRule {
  return { mode: "smart" };
}

function normalizeCurrentActions(savedActions: unknown, legacyCurrentAction: unknown): RunningAction[] {
  const source = Array.isArray(savedActions) ? savedActions : legacyCurrentAction ? [legacyCurrentAction] : [];
  return source
    .map((action) => normalizeRunningAction(action))
    .filter((action): action is RunningAction => Boolean(action));
}

function normalizeRunningAction(action: unknown): RunningAction | null {
  if (!action || typeof action !== "object") {
    return null;
  }

  const candidate = action as Partial<RunningAction>;
  const actionId = normalizeSavedActionId(candidate.actionId);
  if (
    !actionId ||
    typeof candidate.characterId !== "string" ||
    !isRunningActionPhase(candidate.phase) ||
    typeof candidate.startedAt !== "number" ||
    typeof candidate.endsAt !== "number"
  ) {
    return null;
  }

  const loopActionIds = Array.isArray(candidate.loopActionIds)
    ? candidate.loopActionIds
        .map((entry) => normalizeSavedActionId(entry))
        .filter((entry): entry is ActionId => Boolean(entry))
    : undefined;
  const followUpActionId = normalizeSavedActionId(candidate.followUpActionId);

  return {
    ...candidate,
    actionId,
    characterId: candidate.characterId,
    phase: candidate.phase,
    loopActionIds,
    followUpActionId: followUpActionId ?? undefined,
    startedAt: candidate.startedAt,
    endsAt: candidate.endsAt,
    repeat: Boolean(candidate.repeat)
  };
}

function isActionId(value: unknown): value is ActionId {
  return typeof value === "string" && actionDefinitions.some((action) => action.id === value);
}

function normalizeSavedActionId(value: unknown): ActionId | null {
  if (value === "gatherMushrooms" || value === "gatherBerries") {
    return "gatherMeadowIngredients";
  }

  return isActionId(value) ? value : null;
}

function isRunningActionPhase(value: unknown): value is RunningAction["phase"] {
  return value === "travelingTo" || value === "working" || value === "followUp" || value === "travelingBack";
}

function isCharacterLocationId(value: unknown): value is CharacterLocationId {
  return (
    value === "camp" ||
    value === "meadow" ||
    value === "river" ||
    value === "beach" ||
    value === "forest" ||
    value === "mine" ||
    value === "desert"
  );
}

function isLocationId(value: unknown): value is LocationId {
  return value === "meadow" || value === "river" || value === "beach" || value === "forest" || value === "mine" || value === "desert";
}

function isResourceId(value: unknown): value is ResourceId {
  return typeof value === "string" && resourceOrder.includes(value);
}

function isActionLoopAdvanceMode(value: unknown): value is ActionLoopAdvanceMode {
  return (
    value === "smart" ||
    value === "afterCompletion" ||
    value === "whenInventoryFull" ||
    value === "whenResourceAtLeast" ||
    value === "whenCannotStart" ||
    value === "manual"
  );
}

function isActionLoopResourceScope(value: unknown): value is ActionLoopResourceScope {
  return value === "camp" || value === "character";
}

function isCombatLocationId(value: unknown): value is CombatLocationId {
  return typeof value === "string" && combatLocationIds.some((locationId) => locationId === value);
}

function isEnemyId(value: unknown): value is EnemyId {
  return typeof value === "string" && combatEnemyIds.some((enemyId) => enemyId === value);
}

function isCombatClassId(value: unknown): value is CombatClassId {
  return typeof value === "string" && combatClassIds.some((classId) => classId === value);
}

function isCombatUnitKind(value: unknown): value is CombatUnitKind {
  return value === "party" || value === "enemy";
}

function isCombatLogTone(value: unknown): value is CombatLogEntry["tone"] {
  return value === "muted" || value === "gain" || value === "warning";
}

function migrateCampfireTimer(state: GameState, savedVersion: number): void {
  const now = Date.now();
  if (!state.buildings.campfire) {
    state.campfireExpiresAt = null;
    return;
  }

  if (savedVersion < 4 && !state.campfireExpiresAt) {
    state.campfireExpiresAt = now + LEGACY_CAMPFIRE_DURATION_MS;
  }

  if (typeof state.campfireExpiresAt !== "number" || state.campfireExpiresAt <= now) {
    state.buildings.campfire = false;
    state.campfireExpiresAt = null;
  }
}

function migrateLegacyAnimalCounts(state: GameState, savedVersion: number): void {
  if (savedVersion >= 2) {
    return;
  }

  state.inventory.rabbit *= WHOLE_RESOURCE_AVERAGE_WEIGHTS.rabbit ?? 1;
  state.characterInventory.rabbit *= WHOLE_RESOURCE_AVERAGE_WEIGHTS.rabbit ?? 1;
  state.inventory.squirrel *= WHOLE_RESOURCE_AVERAGE_WEIGHTS.squirrel ?? 1;
  state.characterInventory.squirrel *= WHOLE_RESOURCE_AVERAGE_WEIGHTS.squirrel ?? 1;
  for (const character of state.characters) {
    character.inventory.rabbit *= WHOLE_RESOURCE_AVERAGE_WEIGHTS.rabbit ?? 1;
    character.inventory.squirrel *= WHOLE_RESOURCE_AVERAGE_WEIGHTS.squirrel ?? 1;
  }
}

function migrateWholeResourceCounts(state: GameState, savedVersion: number): void {
  if (savedVersion >= CURRENT_SAVE_VERSION) {
    return;
  }

  for (const resourceId of wholeCountResourceIds) {
    state.resourceCounts[resourceId] = inferWholeResourceCount(resourceId, state.inventory[resourceId]);
    state.characterResourceCounts[resourceId] = inferWholeResourceCount(
      resourceId,
      state.characterInventory[resourceId]
    );
    for (const character of state.characters) {
      character.resourceCounts[resourceId] = inferWholeResourceCount(resourceId, character.inventory[resourceId]);
    }
  }
}

function migrateLegacyForageResources(state: GameState, savedVersion: number): void {
  if (savedVersion >= 10) {
    return;
  }

  moveLegacyResource(state.inventory, "mushroom", "hearthcap");
  moveLegacyResource(state.characterInventory, "mushroom", "hearthcap");
  moveLegacyResource(state.inventory, "berry", "blueberries");
  moveLegacyResource(state.characterInventory, "berry", "blueberries");
  for (const character of state.characters) {
    moveLegacyResource(character.inventory, "mushroom", "hearthcap");
    moveLegacyResource(character.inventory, "berry", "blueberries");
  }

  state.seenResources = state.seenResources
    .map((resourceId) => {
      if (resourceId === "mushroom") {
        return "hearthcap";
      }
      if (resourceId === "berry") {
        return "blueberries";
      }
      return resourceId;
    })
    .filter((resourceId, index, resources) => resources.indexOf(resourceId) === index);
}

function moveLegacyResource(inventory: Inventory, from: ResourceId, to: ResourceId): void {
  const amount = Number(inventory[from] ?? 0);
  if (amount > 0) {
    inventory[to] = Number(inventory[to] ?? 0) + amount;
  }
  delete inventory[from];
}

function normalizeCookingState(rawCooking: unknown, fallbackCooking: CookingState = createInitialCookingState()): CookingState {
  if (!rawCooking || typeof rawCooking !== "object") {
    return fallbackCooking;
  }

  const candidate = rawCooking as Partial<CookingState>;
  const queue = Array.isArray(candidate.queue)
    ? candidate.queue
        .map((entry) => normalizeCookingQueueEntry(entry))
        .filter((entry): entry is CookingQueueEntry => Boolean(entry))
    : [];
  let activeSeen = false;

  return {
    queue: queue.map((entry) => {
      const isActive = entry.startedAt !== null && entry.endsAt !== null;
      if (!isActive || !activeSeen) {
        activeSeen = activeSeen || isActive;
        return entry;
      }
      return {
        ...entry,
        startedAt: null,
        endsAt: null
      };
    }),
    knownRecipeIds: normalizeCookingRecipeIds(candidate.knownRecipeIds),
    completedRecipeCounts: normalizeCompletedRecipeCounts(candidate.completedRecipeCounts)
  };
}

function normalizeCookingQueueEntry(rawEntry: unknown): CookingQueueEntry | null {
  if (!rawEntry || typeof rawEntry !== "object") {
    return null;
  }

  const candidate = rawEntry as Partial<CookingQueueEntry>;
  if (typeof candidate.id !== "string" || !isCookingRecipeId(candidate.recipeId)) {
    return null;
  }

  return {
    id: candidate.id,
    recipeId: candidate.recipeId,
    stationId: normalizeCookingStationId(candidate.stationId),
    queuedAt: clampNumber(candidate.queuedAt, 0, Number.MAX_SAFE_INTEGER),
    startedAt: typeof candidate.startedAt === "number" ? clampNumber(candidate.startedAt, 0, Number.MAX_SAFE_INTEGER) : null,
    endsAt: typeof candidate.endsAt === "number" ? clampNumber(candidate.endsAt, 0, Number.MAX_SAFE_INTEGER) : null
  };
}

function normalizeCookingRecipeIds(rawRecipeIds: unknown): CookingRecipeId[] {
  if (!Array.isArray(rawRecipeIds)) {
    return [];
  }

  return rawRecipeIds
    .filter((recipeId): recipeId is CookingRecipeId => isCookingRecipeId(recipeId))
    .filter((recipeId, index, recipeIds) => recipeIds.indexOf(recipeId) === index);
}

function normalizeCompletedRecipeCounts(rawCounts: unknown): Partial<Record<CookingRecipeId, number>> {
  if (!rawCounts || typeof rawCounts !== "object") {
    return {};
  }

  const normalized: Partial<Record<CookingRecipeId, number>> = {};
  const counts = rawCounts as Partial<Record<CookingRecipeId, number>>;
  for (const [recipeId, count] of Object.entries(counts)) {
    if (isCookingRecipeId(recipeId)) {
      normalized[recipeId] = clampNumber(count, 0, Number.MAX_SAFE_INTEGER);
    }
  }
  return normalized;
}

function isCookingRecipeId(value: unknown): value is CookingRecipeId {
  return typeof value === "string" && cookingRecipeIds.includes(value);
}

function normalizeCookingStationId(value: unknown): CookingStationId {
  return value === "campfire" ? "campfire" : "campfire";
}

function inferWholeResourceCount(resourceId: ResourceId, totalWeight: number): number {
  if (totalWeight <= 0) {
    return 0;
  }

  const averageWeight = WHOLE_RESOURCE_AVERAGE_WEIGHTS[resourceId] ?? 1;
  return Math.max(1, Math.round(totalWeight / averageWeight));
}

function normalizeInventoryRecord(rawInventory: unknown): Inventory {
  const inventory = createEmptyInventory();
  if (!rawInventory || typeof rawInventory !== "object") {
    return inventory;
  }

  const savedInventory = rawInventory as Partial<Record<ResourceId, number>>;
  for (const resourceId of Object.keys(inventory) as ResourceId[]) {
    inventory[resourceId] = Number(savedInventory[resourceId] ?? 0);
  }
  return inventory;
}

function normalizeResourceCountsRecord(inventory: Inventory, rawCounts: unknown): ResourceCounts {
  const counts = createEmptyResourceCounts();
  if (rawCounts && typeof rawCounts === "object") {
    const savedCounts = rawCounts as Partial<Record<ResourceId, number>>;
    for (const resourceId of Object.keys(counts) as ResourceId[]) {
      counts[resourceId] = Math.max(0, Math.floor(Number(savedCounts[resourceId] ?? 0)));
    }
  }

  for (const resourceId of wholeCountResourceIds) {
    if (inventory[resourceId] > 0 && counts[resourceId] <= 0) {
      counts[resourceId] = inferWholeResourceCount(resourceId, inventory[resourceId]);
    }
  }

  return counts;
}

function normalizeTools(savedTools: unknown): OwnedTools {
  const tools = createEmptyTools();
  if (!savedTools || typeof savedTools !== "object") {
    return tools;
  }

  const rawTools = savedTools as Partial<Record<ToolId, boolean | Partial<ToolState>>>;
  for (const definition of toolDefinitions) {
    const rawTool = rawTools[definition.id];
    if (typeof rawTool === "boolean") {
      tools[definition.id] = {
        owned: rawTool,
        durability: rawTool ? definition.maxDurability : 0,
        quantity: 0
      };
      continue;
    }

    if (!rawTool || typeof rawTool !== "object") {
      continue;
    }

    const owned = Boolean(rawTool.owned);
    const durability = Number(rawTool.durability ?? 0);
    const quantity = Number(rawTool.quantity ?? 0);
    tools[definition.id] = {
      owned,
      durability: owned ? Math.min(definition.maxDurability, Math.max(0, Math.floor(durability))) : 0,
      quantity: Math.max(0, Math.floor(quantity))
    };
  }

  return tools;
}

function clampNumber(value: unknown, min: number, max: number): number {
  const numberValue = Number(value ?? min);
  if (!Number.isFinite(numberValue)) {
    return min;
  }

  return Math.min(max, Math.max(min, Math.floor(numberValue)));
}

export function saveGame(state: GameState): void {
  window.localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

export function resetSave(): GameState {
  window.localStorage.removeItem(SAVE_KEY);
  return createInitialState();
}
