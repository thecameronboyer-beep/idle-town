import { getResourceLabel } from "../data/resources";
import { getTextileRecipe, isTextileActionId, type TextileRecipeDefinition } from "../data/textiles";
import type { BuildingId, GameState, ResourceId } from "../types";

export function isTextileRecipeUnlocked(state: GameState, actionId: string): boolean {
  const recipe = getTextileRecipe(actionId);
  if (!recipe || !isTextileActionId(actionId)) {
    return false;
  }

  return getTextileRecipeLockReason(state, actionId) === "";
}

export function getTextileRecipeLockReason(state: GameState, actionId: string): string {
  const recipe = getTextileRecipe(actionId);
  if (!recipe || !isTextileActionId(actionId)) {
    return "";
  }

  const missingBuilding = recipe.requiredBuildings?.find((buildingId) => !state.buildings[buildingId]);
  if (missingBuilding) {
    return `Needs ${getBuildingLabel(missingBuilding)}`;
  }

  const missingSeenResource = recipe.requiredSeenResources?.find((resourceId) => !hasSeenOrOwnedResource(state, resourceId));
  if (missingSeenResource) {
    return recipe.unlockHint || `Needs ${getResourceLabel(missingSeenResource)}`;
  }

  if (
    recipe.requiredAnyResources?.length &&
    !recipe.requiredAnyResources.some((resourceId) => hasSeenOrOwnedResource(state, resourceId))
  ) {
    return `Needs ${recipe.requiredAnyResources.map((resourceId) => getResourceLabel(resourceId)).join(" or ")}`;
  }

  return "";
}

export function getTextileRecipeOutputText(recipe: TextileRecipeDefinition): string {
  return describeRecipeOutput(recipe.output);
}

export function hasSeenOrOwnedTextileResource(state: GameState, resourceId: ResourceId): boolean {
  return hasSeenOrOwnedResource(state, resourceId);
}

function hasSeenOrOwnedResource(state: GameState, resourceId: ResourceId): boolean {
  return state.seenResources.includes(resourceId) || (state.inventory[resourceId] ?? 0) > 0;
}

function describeRecipeOutput(output: TextileRecipeDefinition["output"]): string {
  return Object.entries(output)
    .map(([resourceId, amount]) => `${amount ?? 0} ${getResourceLabel(resourceId as ResourceId)}`)
    .join(", ");
}

function getBuildingLabel(buildingId: BuildingId): string {
  switch (buildingId) {
    case "campfire":
      return "Campfire";
    case "tanningRack":
      return "Tanning Rack";
    case "hideTent":
      return "Hide Tent";
    case "crudeStoneFurnace":
      return "Crude Stone Furnace";
    case "primitiveSpinningWheel":
      return "Primitive Spinning Wheel";
  }
}
