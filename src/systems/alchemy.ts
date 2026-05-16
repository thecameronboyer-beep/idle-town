import { getAlchemyRecipe, isAlchemyActionId, type AlchemyActionId } from "../data/alchemy";
import { getResourceLabel } from "../data/resources";
import type { GameState, ResourceId } from "../types";
import { hasCrudeStoneFurnace } from "./smithing";

const HEALTH_POTION_INGREDIENTS: ResourceId[] = ["yarrow", "plantainLeaf"];
const MANA_POTION_INGREDIENTS: ResourceId[] = ["silverleafHerb"];

export function getAlchemyStationStatus(state: GameState): { furnaceBuilt: boolean; coal: number; vials: number } {
  return {
    furnaceBuilt: hasCrudeStoneFurnace(state),
    coal: Math.max(0, Math.floor(state.inventory.coal ?? 0)),
    vials: Math.max(0, Math.floor(state.inventory.glassVial ?? 0))
  };
}

export function isAlchemyRecipeUnlocked(state: GameState, actionId: string): boolean {
  if (!isAlchemyActionId(actionId)) {
    return false;
  }

  switch (actionId) {
    case "craftGlassVial":
      return hasCrudeStoneFurnace(state);
    case "brewHealthPotion":
      return hasSeenOrOwnedResource(state, "glassVial") && hasAnySeenOrOwnedResource(state, HEALTH_POTION_INGREDIENTS);
    case "brewManaPotion":
      return hasSeenOrOwnedResource(state, "glassVial") && hasAnySeenOrOwnedResource(state, MANA_POTION_INGREDIENTS);
  }
}

export function getAlchemyRecipeLockReason(state: GameState, actionId: string): string {
  if (!isAlchemyActionId(actionId)) {
    return "";
  }

  switch (actionId) {
    case "craftGlassVial":
      return hasCrudeStoneFurnace(state) ? "" : "Needs Stone Furnace";
    case "brewHealthPotion":
      if (!hasSeenOrOwnedResource(state, "glassVial")) {
        return "Craft Glass Vial";
      }
      return hasAnySeenOrOwnedResource(state, HEALTH_POTION_INGREDIENTS) ? "" : "Find Meadow Ingredients";
    case "brewManaPotion":
      if (!hasSeenOrOwnedResource(state, "glassVial")) {
        return "Craft Glass Vial";
      }
      return hasAnySeenOrOwnedResource(state, MANA_POTION_INGREDIENTS) ? "" : "Find River Ingredients";
  }
}

export function getAlchemyRecipeOutputText(actionId: AlchemyActionId): string {
  const recipe = getAlchemyRecipe(actionId);
  if (!recipe) {
    return "";
  }

  return Object.entries(recipe.output)
    .map(([resourceId, amount]) => `${amount ?? 0} ${getResourceLabel(resourceId)}`)
    .join(", ");
}

function hasAnySeenOrOwnedResource(state: GameState, resourceIds: ResourceId[]): boolean {
  return resourceIds.some((resourceId) => hasSeenOrOwnedResource(state, resourceId));
}

function hasSeenOrOwnedResource(state: GameState, resourceId: ResourceId): boolean {
  return state.seenResources.includes(resourceId) || (state.inventory[resourceId] ?? 0) > 0;
}
