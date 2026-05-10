import { toolDefinitions } from "../data/craftables";
import { createEmptyInventory, createEmptyTools, createInitialState } from "../state/createInitialState";
import type { GameState, OwnedTools, ToolId, ToolState } from "../types";
import { normalizeInventory } from "./inventory";

const SAVE_KEY = "idle-town:first-survival-slice:v1";
const CURRENT_SAVE_VERSION = 2;
const LEGACY_AVERAGE_WEIGHTS = {
  rabbit: 3.5,
  squirrel: 1.25
} as const;

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
      tools: normalizeTools(parsed.tools),
      buildings: {
        ...fallback.buildings,
        ...(parsed.buildings ?? {})
      },
      characters: parsed.characters?.length ? parsed.characters : fallback.characters,
      seenResources: parsed.seenResources?.length ? parsed.seenResources : fallback.seenResources,
      log: parsed.log?.length ? parsed.log : fallback.log,
      version: CURRENT_SAVE_VERSION
    };
    migrateLegacyAnimalCounts(state, parsed.version);
    normalizeInventory(state);
    return state;
  } catch {
    return createInitialState();
  }
}

function migrateLegacyAnimalCounts(state: GameState, savedVersion: unknown): void {
  if (savedVersion === CURRENT_SAVE_VERSION) {
    return;
  }

  state.inventory.rabbit *= LEGACY_AVERAGE_WEIGHTS.rabbit;
  state.characterInventory.rabbit *= LEGACY_AVERAGE_WEIGHTS.rabbit;
  state.inventory.squirrel *= LEGACY_AVERAGE_WEIGHTS.squirrel;
  state.characterInventory.squirrel *= LEGACY_AVERAGE_WEIGHTS.squirrel;
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
