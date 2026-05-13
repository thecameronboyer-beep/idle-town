import { actionDefinitions } from "../data/actions";
import { toolDefinitions } from "../data/craftables";
import { wholeCountResourceIds } from "../data/resources";
import {
  createEmptyBuildingCounts,
  createEmptyInventory,
  createEmptyResourceCounts,
  createEmptyTools,
  createInitialState
} from "../state/createInitialState";
import type {
  ActionId,
  ActionLoop,
  CharacterLocationId,
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
const CURRENT_SAVE_VERSION = 7;
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
      actionLoops,
      currentActions,
      currentAction: currentActions.find((action) => action.characterId === selectedCharacterId) ?? currentActions[0] ?? null,
      log: parsed.log?.length ? parsed.log : fallback.log,
      version: CURRENT_SAVE_VERSION
    };
    const savedVersion = typeof parsed.version === "number" ? parsed.version : 1;
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
      inventory,
      resourceCounts,
      actionLoopId: typeof candidate.actionLoopId === "string" ? candidate.actionLoopId : fallbackCharacter.actionLoopId
    };
  });
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
    ? candidate.actionIds.filter((actionId): actionId is ActionId => isActionId(actionId))
    : [];
  if (!actionIds.length) {
    return null;
  }

  return {
    id: typeof candidate.id === "string" && candidate.id ? candidate.id : `loop-${index + 1}`,
    name: typeof candidate.name === "string" && candidate.name ? candidate.name : `Loop ${index + 1}`,
    actionIds,
    locationIds: normalizeLoopLocations(actionIds, candidate.locationIds),
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
    ? running.loopActionIds.filter((actionId): actionId is ActionId => isActionId(actionId))
    : isActionId(running.actionId)
      ? [running.actionId]
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

function normalizeCurrentActions(savedActions: unknown, legacyCurrentAction: unknown): RunningAction[] {
  const source = Array.isArray(savedActions) ? savedActions : legacyCurrentAction ? [legacyCurrentAction] : [];
  return source.filter((action): action is RunningAction => isRunningAction(action));
}

function isRunningAction(action: unknown): action is RunningAction {
  if (!action || typeof action !== "object") {
    return false;
  }

  const candidate = action as Partial<RunningAction>;
  return (
    isActionId(candidate.actionId) &&
    typeof candidate.characterId === "string" &&
    isRunningActionPhase(candidate.phase) &&
    typeof candidate.startedAt === "number" &&
    typeof candidate.endsAt === "number"
  );
}

function isActionId(value: unknown): value is ActionId {
  return typeof value === "string" && actionDefinitions.some((action) => action.id === value);
}

function isRunningActionPhase(value: unknown): value is RunningAction["phase"] {
  return value === "travelingTo" || value === "working" || value === "followUp" || value === "travelingBack";
}

function isCharacterLocationId(value: unknown): value is CharacterLocationId {
  return value === "camp" || value === "meadow" || value === "river" || value === "forest" || value === "mine";
}

function isLocationId(value: unknown): value is LocationId {
  return value === "meadow" || value === "river" || value === "forest" || value === "mine";
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

export function saveGame(state: GameState): void {
  window.localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

export function resetSave(): GameState {
  window.localStorage.removeItem(SAVE_KEY);
  return createInitialState();
}
