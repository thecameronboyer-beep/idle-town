import { baseVisibleResources, resourceOrder } from "../data/resources";
import { toolDefinitions } from "../data/craftables";
import { createEmptySkills } from "../systems/skills";
import type {
  ActionLoop,
  GameState,
  Inventory,
  OwnedBuildingCounts,
  OwnedBuildings,
  OwnedTools,
  ResourceCounts
} from "../types";

export function createEmptyInventory(): Inventory {
  return Object.fromEntries(resourceOrder.map((id) => [id, 0])) as Inventory;
}

export function createEmptyResourceCounts(): ResourceCounts {
  return Object.fromEntries(resourceOrder.map((id) => [id, 0])) as ResourceCounts;
}

export function createEmptyTools(): OwnedTools {
  return Object.fromEntries(
    toolDefinitions.map((tool) => [tool.id, { owned: false, durability: 0, quantity: 0 }])
  ) as OwnedTools;
}

export function createEmptyBuildingCounts(): OwnedBuildingCounts {
  return {
    campfire: 0,
    tanningRack: 0,
    hideTent: 0,
    crudeStoneFurnace: 0,
    primitiveSpinningWheel: 0
  };
}

export function createStarterActionLoop(now = Date.now()): ActionLoop {
  return {
    id: "loop-forage-sticks",
    name: "Forage Sticks",
    actionIds: ["gatherSticks"],
    locationIds: ["meadow"],
    createdAt: now,
    updatedAt: now
  };
}

export function createInitialState(now = Date.now()): GameState {
  return {
    version: 7,
    createdAt: now,
    updatedAt: now,
    lastSimulatedAt: now,
    selectedCharacterId: "cameron",
    characters: [
      {
        id: "cameron",
        name: "Cameron",
        epithet: "Alone at the treeline",
        condition: "resting",
        locationId: "camp",
        inventory: createEmptyInventory(),
        resourceCounts: createEmptyResourceCounts(),
        actionLoopId: "loop-forage-sticks"
      }
    ],
    inventory: createEmptyInventory(),
    characterInventory: createEmptyInventory(),
    resourceCounts: createEmptyResourceCounts(),
    characterResourceCounts: createEmptyResourceCounts(),
    tools: createEmptyTools(),
    buildings: {
      campfire: false,
      tanningRack: false,
      hideTent: false,
      crudeStoneFurnace: false,
      primitiveSpinningWheel: false
    } satisfies OwnedBuildings,
    buildingCounts: createEmptyBuildingCounts(),
    campfireExpiresAt: null,
    seenResources: [...baseVisibleResources],
    skills: createEmptySkills(),
    actionLoops: [createStarterActionLoop(now)],
    currentActions: [],
    currentAction: null,
    log: [
      {
        id: `${now}-start`,
        time: now,
        text: "Cameron wakes beneath cold branches with empty hands.",
        tone: "muted",
        scope: "camp"
      }
    ]
  };
}
