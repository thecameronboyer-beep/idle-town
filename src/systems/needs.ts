import { getResourceDefinition, getResourceLabel, isEdibleResource } from "../data/resources";
import type { GameState, ResourceId } from "../types";
import { hasCost, payCost } from "./inventory";
import { addLog } from "./log";

export interface FoodEffectPreview {
  hunger: number;
}

export function getFoodEffectPreview(resourceId: ResourceId): FoodEffectPreview {
  const nutrition = getResourceDefinition(resourceId)?.nutrition;
  return {
    hunger: Math.max(0, Math.floor(nutrition?.hunger ?? 0))
  };
}

export function canEatFood(state: GameState, resourceId: ResourceId): boolean {
  return !getEatFoodLockReason(state, resourceId);
}

export function getEatFoodLockReason(state: GameState, resourceId: ResourceId): string {
  const effect = getFoodEffectPreview(resourceId);
  if (effect.hunger <= 0) {
    return "Not edible";
  }

  if (!hasCost(state, { [resourceId]: 1 })) {
    return `Needs ${getResourceLabel(resourceId)}`;
  }

  if (isStewFood(resourceId) && !hasCost(state, { woodenSpoon: 1 })) {
    return "Needs Wooden Spoon";
  }

  const character = state.characters.find((entry) => entry.id === state.selectedCharacterId);
  if (!character) {
    return "No character";
  }

  if (character.needs.hunger >= character.needs.maxHunger) {
    return "Hunger full";
  }

  return "";
}

export function eatFood(state: GameState, resourceId: ResourceId, now = Date.now()): boolean {
  if (!canEatFood(state, resourceId)) {
    return false;
  }

  const character = state.characters.find((entry) => entry.id === state.selectedCharacterId);
  if (!character) {
    return false;
  }

  const effect = getFoodEffectPreview(resourceId);
  payCost(state, { [resourceId]: 1 });
  character.needs.hunger = Math.min(character.needs.maxHunger, character.needs.hunger + effect.hunger);
  addLog(
    state,
    `${character.name} eats ${getResourceLabel(resourceId).toLowerCase()} and restores ${effect.hunger} hunger.`,
    "gain",
    now,
    "camp"
  );
  state.updatedAt = now;
  return true;
}

export function isEdibleFood(resourceId: ResourceId): boolean {
  return isEdibleResource(resourceId);
}

function isStewFood(resourceId: ResourceId): boolean {
  return getResourceDefinition(resourceId)?.cooking?.tags.includes("stew") ?? false;
}
