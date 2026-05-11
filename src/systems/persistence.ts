import { toolDefinitions } from "../data/craftables";
import { wholeCountResourceIds } from "../data/resources";
import {
  createEmptyInventory,
  createEmptyResourceCounts,
  createEmptyTools,
  createInitialState
} from "../state/createInitialState";
import type { GameState, OwnedTools, ResourceId, ToolId, ToolState } from "../types";
import { normalizeInventory } from "./inventory";

const SAVE_KEY = "idle-town:first-survival-slice:v1";
const CURRENT_SAVE_VERSION = 4;
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
    const state: GameState = {
      ...fallback,
      ...parsed,
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
      buildings: {
        ...fallback.buildings,
        ...(parsed.buildings ?? {})
      },
      campfireExpiresAt: typeof parsed.campfireExpiresAt === "number" ? parsed.campfireExpiresAt : fallback.campfireExpiresAt,
      characters: parsed.characters?.length ? parsed.characters : fallback.characters,
      seenResources: parsed.seenResources?.length ? parsed.seenResources : fallback.seenResources,
      log: parsed.log?.length ? parsed.log : fallback.log,
      version: CURRENT_SAVE_VERSION
    };
    const savedVersion = typeof parsed.version === "number" ? parsed.version : 1;
    migrateLegacyAnimalCounts(state, savedVersion);
    migrateWholeResourceCounts(state, savedVersion);
    migrateCampfireTimer(state, savedVersion);
    normalizeInventory(state);
    return state;
  } catch {
    return createInitialState();
  }
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
  }
}

function inferWholeResourceCount(resourceId: ResourceId, totalWeight: number): number {
  if (totalWeight <= 0) {
    return 0;
  }

  const averageWeight = WHOLE_RESOURCE_AVERAGE_WEIGHTS[resourceId] ?? 1;
  return Math.max(1, Math.round(totalWeight / averageWeight));
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
