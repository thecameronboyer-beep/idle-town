import { baseVisibleResources, resourceOrder } from "../data/resources";
import { toolDefinitions } from "../data/craftables";
import type { GameState, Inventory, OwnedBuildings, OwnedTools } from "../types";

export function createEmptyInventory(): Inventory {
  return Object.fromEntries(resourceOrder.map((id) => [id, 0])) as Inventory;
}

export function createEmptyTools(): OwnedTools {
  return Object.fromEntries(
    toolDefinitions.map((tool) => [tool.id, { owned: false, durability: 0, quantity: 0 }])
  ) as OwnedTools;
}

export function createInitialState(now = Date.now()): GameState {
  return {
    version: 1,
    createdAt: now,
    updatedAt: now,
    lastSimulatedAt: now,
    selectedCharacterId: "cameron",
    characters: [
      {
        id: "cameron",
        name: "Cameron",
        epithet: "Alone at the treeline",
        condition: "resting"
      }
    ],
    inventory: createEmptyInventory(),
    characterInventory: createEmptyInventory(),
    tools: createEmptyTools(),
    buildings: {
      campfire: false,
      tanningRack: false
    } satisfies OwnedBuildings,
    seenResources: [...baseVisibleResources],
    currentAction: null,
    log: [
      {
        id: `${now}-start`,
        time: now,
        text: "Cameron wakes beneath cold branches with empty hands.",
        tone: "muted"
      }
    ]
  };
}
