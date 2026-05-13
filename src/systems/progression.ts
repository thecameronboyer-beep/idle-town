import { fishResourceIds } from "../data/resources";
import type { ActionId, BuildingId, GameState } from "../types";
import { isCampfireLit } from "./buildings";
import { hasUsableTool } from "./tools";

function hasSeenMeat(state: GameState): boolean {
  return state.seenResources.includes("rabbitMeat") || state.seenResources.includes("squirrelMeat");
}

function hasSeenFish(state: GameState): boolean {
  return fishResourceIds.some((fishId) => {
    return (
      state.seenResources.includes(fishId) ||
      state.characters.some((character) => {
        return (character.inventory?.[fishId] ?? 0) > 0 || (character.resourceCounts?.[fishId] ?? 0) > 0;
      }) ||
      state.characterInventory[fishId] > 0 ||
      state.inventory[fishId] > 0 ||
      state.characterResourceCounts[fishId] > 0 ||
      state.resourceCounts[fishId] > 0
    );
  });
}

export function isActionUnlocked(state: GameState, actionId: ActionId, now = Date.now()): boolean {
  switch (actionId) {
    case "gatherSticks":
    case "gatherStones":
    case "gatherFlaxFibers":
    case "gatherMushrooms":
    case "gatherBerries":
    case "craftLowestTool":
    case "craftBasket":
    case "craftFishingPole":
    case "craftStoneKnife":
    case "craftStoneAxe":
    case "craftStonePickAxe":
    case "craftStoneSpear":
      return true;
    case "fishRiver":
      return hasUsableTool(state, "fishingPole");
    case "mineCoal":
    case "mineCopper":
    case "mineTin":
      return hasUsableTool(state, "stonePickAxe");
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
      return isCampfireLit(state, now) && state.seenResources.includes("rabbitMeat");
    case "cookSquirrelMeat":
      return isCampfireLit(state, now) && state.seenResources.includes("squirrelMeat");
    case "tanHide":
      return state.buildings.tanningRack && state.seenResources.includes("hide");
    case "craftLeatherBackpack":
      return state.buildings.tanningRack && state.seenResources.includes("leather");
  }
}

export function getActionLockReason(state: GameState, actionId: ActionId): string {
  switch (actionId) {
    case "fishRiver":
      return "Needs Fishing Pole";
    case "mineCoal":
    case "mineCopper":
    case "mineTin":
      return "Needs Stone Pick Axe";
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
      return isCampfireLit(state) ? "Needs Rabbit Meat" : "Needs Lit Campfire";
    case "cookSquirrelMeat":
      return isCampfireLit(state) ? "Needs Squirrel Meat" : "Needs Lit Campfire";
    case "tanHide":
      return state.buildings.tanningRack ? "Needs Hide" : "Needs Tanning Rack";
    case "craftLeatherBackpack":
      return state.buildings.tanningRack ? "Needs Leather" : "Needs Tanning Rack";
    case "craftLowestTool":
      return "Needs Craft Materials";
    default:
      return "";
  }
}

export function isBuildingVisible(_state: GameState, _buildingId: BuildingId, _now = Date.now()): boolean {
  return true;
}

export function isBuildingUnlocked(state: GameState, buildingId: BuildingId, now = Date.now()): boolean {
  switch (buildingId) {
    case "campfire":
      return isCampfireLit(state, now) || hasSeenMeat(state);
    case "tanningRack":
      return state.buildings.tanningRack || state.seenResources.includes("hide");
    case "hideTent":
      return state.buildings.hideTent || state.seenResources.includes("hide");
    case "crudeStoneFurnace":
      return state.buildings.crudeStoneFurnace || state.seenResources.includes("coal") || state.seenResources.includes("copper");
  }
}

export function getBuildingUnlockReason(_state: GameState, buildingId: BuildingId): string {
  switch (buildingId) {
    case "campfire":
      return "See Rabbit Meat or Squirrel Meat";
    case "tanningRack":
    case "hideTent":
      return "See Hide";
    case "crudeStoneFurnace":
      return "See Coal or Copper";
  }
}
