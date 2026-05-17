import { baseVisibleResources, resourceOrder } from "../data/resources";
import { combatClassIds } from "../data/combat";
import { toolDefinitions } from "../data/craftables";
import { createEmptySkills } from "../systems/skills";
import type {
  ActionLoop,
  CharacterCombatStats,
  CharacterNeeds,
  CombatClassProgress,
  CombatClassProgressMap,
  CombatState,
  CookingState,
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
    primitiveSpinningWheel: 0,
    primitiveLoom: 0
  };
}

export function createStarterActionLoop(now = Date.now()): ActionLoop {
  return {
    id: "loop-forage-sticks",
    name: "Forage Sticks",
    actionIds: ["gatherSticks"],
    locationIds: ["meadow"],
    advanceRules: [{ mode: "smart" }],
    createdAt: now,
    updatedAt: now
  };
}

export function createInitialCharacterCombatStats(): CharacterCombatStats {
  return {
    hp: 34,
    maxHp: 34,
    mana: 10,
    maxMana: 10
  };
}

export function createInitialCharacterNeeds(): CharacterNeeds {
  return {
    hunger: 100,
    maxHunger: 100
  };
}

export function createInitialCombatClassProgress(): CombatClassProgress {
  return {
    level: 1,
    xp: 0,
    totalXp: 0
  };
}

export function createEmptyCombatClassProgressMap(): CombatClassProgressMap {
  return Object.fromEntries(
    combatClassIds.map((classId) => [classId, createInitialCombatClassProgress()])
  ) as CombatClassProgressMap;
}

export function createInitialCombatState(): CombatState {
  return {
    selectedLocationId: "ruins",
    encounter: null,
    log: []
  };
}

export function createInitialCookingState(): CookingState {
  return {
    queue: [],
    knownRecipeIds: [],
    completedRecipeCounts: {}
  };
}

export function createInitialState(now = Date.now()): GameState {
  return {
    version: 11,
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
        combat: createInitialCharacterCombatStats(),
        needs: createInitialCharacterNeeds(),
        classProgress: createEmptyCombatClassProgressMap(),
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
      primitiveSpinningWheel: false,
      primitiveLoom: false
    } satisfies OwnedBuildings,
    buildingCounts: createEmptyBuildingCounts(),
    campfireExpiresAt: null,
    seenResources: [...baseVisibleResources],
    skills: createEmptySkills(),
    cooking: createInitialCookingState(),
    combat: createInitialCombatState(),
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
