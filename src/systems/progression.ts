import { fishResourceIds } from "../data/resources";
import type { ActionId, BuildingId, GameState } from "../types";
import { hasUsableTool } from "./tools";

function hasSeenMeat(state: GameState): boolean {
  return state.seenResources.includes("rabbitMeat") || state.seenResources.includes("squirrelMeat");
}

function hasSeenFish(state: GameState): boolean {
  return fishResourceIds.some((fishId) => {
    return state.seenResources.includes(fishId) || state.characterInventory[fishId] > 0 || state.inventory[fishId] > 0;
  });
}

export function isActionUnlocked(state: GameState, actionId: ActionId): boolean {
  switch (actionId) {
    case "gatherSticks":
    case "gatherStones":
    case "gatherFlaxFibers":
    case "fishRiver":
    case "craftStoneKnife":
    case "craftStoneAxe":
    case "craftStoneSpear":
      return true;
    case "chopTrees":
      return hasUsableTool(state, "stoneAxe");
    case "huntSmallAnimals":
      return hasUsableTool(state, "stoneSpear");
    case "butcherFish":
      return hasSeenFish(state);
    case "butcherRabbit":
      return state.seenResources.includes("rabbit");
    case "butcherSquirrel":
      return state.seenResources.includes("squirrel");
    case "cookRabbitMeat":
      return state.buildings.campfire && state.seenResources.includes("rabbitMeat");
    case "cookSquirrelMeat":
      return state.buildings.campfire && state.seenResources.includes("squirrelMeat");
    case "tanHide":
      return state.buildings.tanningRack && state.seenResources.includes("hide");
  }
}

export function getActionLockReason(state: GameState, actionId: ActionId): string {
  switch (actionId) {
    case "chopTrees":
      return "Needs Stone Axe";
    case "huntSmallAnimals":
      return "Needs Stone Spear";
    case "butcherFish":
      return "Needs Carried Fish";
    case "butcherRabbit":
      return "Needs Rabbit";
    case "butcherSquirrel":
      return "Needs Squirrel";
    case "cookRabbitMeat":
      return state.buildings.campfire ? "Needs Rabbit Meat" : "Needs Campfire";
    case "cookSquirrelMeat":
      return state.buildings.campfire ? "Needs Squirrel Meat" : "Needs Campfire";
    case "tanHide":
      return state.buildings.tanningRack ? "Needs Hide" : "Needs Tanning Rack";
    default:
      return "";
  }
}

export function isBuildingVisible(state: GameState, buildingId: BuildingId): boolean {
  switch (buildingId) {
    case "campfire":
      return state.buildings.campfire || hasSeenMeat(state);
    case "tanningRack":
      return state.buildings.tanningRack || state.seenResources.includes("hide");
  }
}
