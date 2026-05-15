import {
  cookingRecipeDefinitions,
  getCookingRecipe,
  getCookingRecipeCost,
  getCookingRecipeOutputs
} from "../data/cooking";
import { getResourceLabel } from "../data/resources";
import type { CookingQueueEntry, CookingRecipeDefinition, CookingRecipeId, Cost, GameState, ResourceId } from "../types";
import { getActiveCampfireExpiresAt, isCampfireLit } from "./buildings";
import { addResources, describeCost, hasCost, payCost } from "./inventory";
import { addLog, addStackedLog } from "./log";
import { addCookingSkillXp } from "./skills";

export function queueCookingRecipe(state: GameState, recipeId: CookingRecipeId, now = Date.now()): boolean {
  const recipe = getCookingRecipe(recipeId);
  if (!recipe || !canQueueCookingRecipe(state, recipe, now)) {
    return false;
  }

  payCost(state, getCookingRecipeCost(recipe));
  state.cooking.queue.push({
    id: `${now}-${recipe.id}-${state.cooking.queue.length + 1}`,
    recipeId: recipe.id,
    stationId: recipe.station,
    queuedAt: now,
    startedAt: null,
    endsAt: null
  });
  rememberKnownRecipe(state, recipe.id);
  startNextCookingEntry(state, now);
  touch(state, now);
  return true;
}

export function simulateCookingUntil(state: GameState, now = Date.now()): void {
  startNextCookingEntry(state, now);

  let completed = 0;
  while (completed < 100) {
    const active = getActiveCookingEntry(state);
    if (!active) {
      break;
    }

    const fireExpiresAt = getActiveCampfireExpiresAt(state);
    if (!fireExpiresAt || fireExpiresAt <= now) {
      pauseActiveCooking(state, now);
      break;
    }

    if (!active.endsAt || active.endsAt > now) {
      break;
    }

    completeCookingEntry(state, active, active.endsAt);
    completed += 1;
    startNextCookingEntry(state, active.endsAt);
  }
}

export function getActiveCookingEntry(state: GameState): CookingQueueEntry | null {
  return state.cooking.queue.find((entry) => entry.startedAt !== null && entry.endsAt !== null) ?? null;
}

export function getCookingProgress(entry: CookingQueueEntry, now = Date.now()): number {
  if (entry.startedAt === null || entry.endsAt === null) {
    return 0;
  }

  const total = entry.endsAt - entry.startedAt;
  return total <= 0 ? 1 : Math.max(0, Math.min(1, (now - entry.startedAt) / total));
}

export function getAvailableCookingRecipes(_state: GameState): CookingRecipeDefinition[] {
  return [...cookingRecipeDefinitions].sort((left, right) => {
    return left.levelRequirement - right.levelRequirement || left.name.localeCompare(right.name);
  });
}

export function discoverCookingRecipes(state: GameState): CookingRecipeId[] {
  const discovered = cookingRecipeDefinitions
    .filter((recipe) => isCookingRecipeDiscoverable(state, recipe))
    .map((recipe) => recipe.id);

  for (const recipeId of discovered) {
    rememberKnownRecipe(state, recipeId);
  }

  return discovered;
}

export function canQueueCookingRecipe(
  state: GameState,
  recipeOrId: CookingRecipeDefinition | CookingRecipeId,
  now = Date.now()
): boolean {
  const recipe = typeof recipeOrId === "string" ? getCookingRecipe(recipeOrId) : recipeOrId;
  return Boolean(recipe && !getCookingRecipeLockReason(state, recipe, now));
}

export function getCookingRecipeLockReason(
  state: GameState,
  recipeOrId: CookingRecipeDefinition | CookingRecipeId,
  now = Date.now()
): string {
  const recipe = typeof recipeOrId === "string" ? getCookingRecipe(recipeOrId) : recipeOrId;
  if (!recipe) {
    return "Unknown recipe";
  }

  const cookingSkill = state.skills.cooking;
  if (cookingSkill.level < recipe.levelRequirement) {
    return `Needs Cooking Lv ${recipe.levelRequirement}`;
  }

  if (!isCampfireLit(state, now)) {
    return "Needs Lit Campfire";
  }

  const selectedCharacter = state.characters.find((character) => character.id === state.selectedCharacterId);
  if (selectedCharacter?.locationId !== "camp") {
    return "Needs cook at camp";
  }

  const missing = getMissingCookingRequirements(state, recipe);
  return missing.length ? `Needs ${missing.join(", ")}` : "";
}

export function getCookingRecipeOutputText(recipe: CookingRecipeDefinition): string {
  return recipe.outputs.map((output) => `${output.amount} ${getResourceLabel(output.resourceId)}`).join(", ");
}

export function getCookingRecipeRequirementText(recipe: CookingRecipeDefinition): string {
  return recipe.ingredients
    .map((ingredient) => {
      if (!ingredient.resourceId) {
        return ingredient.category ?? "Ingredient";
      }
      const label = getResourceLabel(ingredient.resourceId);
      return ingredient.consumed === false ? `${ingredient.amount} ${label} available` : `${ingredient.amount} ${label}`;
    })
    .join(", ");
}

function startNextCookingEntry(state: GameState, now: number): void {
  discoverCookingRecipes(state);
  if (getActiveCookingEntry(state) || !isCampfireLit(state, now)) {
    return;
  }

  const entry = state.cooking.queue.find((candidate) => candidate.startedAt === null && candidate.endsAt === null);
  if (!entry) {
    return;
  }

  const recipe = getCookingRecipe(entry.recipeId);
  if (!recipe) {
    state.cooking.queue = state.cooking.queue.filter((candidate) => candidate.id !== entry.id);
    return;
  }

  entry.startedAt = now;
  entry.endsAt = now + recipe.cookTimeMs;
  touch(state, now);
}

function completeCookingEntry(state: GameState, entry: CookingQueueEntry, now: number): void {
  const recipe = getCookingRecipe(entry.recipeId);
  state.cooking.queue = state.cooking.queue.filter((candidate) => candidate.id !== entry.id);
  if (!recipe) {
    touch(state, now);
    return;
  }

  const outputs = getCookingRecipeOutputs(recipe);
  addResources(state, outputs);
  addCookingSkillXp(state, recipe.xpReward, now);
  state.cooking.completedRecipeCounts[recipe.id] = (state.cooking.completedRecipeCounts[recipe.id] ?? 0) + 1;
  rememberKnownRecipe(state, recipe.id);
  addStackedLog(state, {
    aggregateKey: `cook:${recipe.id}`,
    text: `Cameron cooked ${recipe.name.toLowerCase()}`,
    resources: outputs,
    tone: "craft",
    now,
    scope: "camp"
  });
  touch(state, now);
}

function pauseActiveCooking(state: GameState, now: number): void {
  const active = getActiveCookingEntry(state);
  if (!active) {
    return;
  }

  active.startedAt = null;
  active.endsAt = null;
  addLog(state, "Cooking waits for a lit campfire.", "warning", now, "camp");
  touch(state, now);
}

function getMissingCookingRequirements(state: GameState, recipe: CookingRecipeDefinition): string[] {
  const consumedCost = getCookingRecipeCost(recipe);
  const missing: string[] = [];
  if (!hasCost(state, consumedCost)) {
    const missingCostText = getMissingCostText(state, consumedCost);
    if (missingCostText) {
      missing.push(missingCostText);
    }
  }

  for (const ingredient of recipe.ingredients) {
    if (!ingredient.resourceId || ingredient.consumed !== false) {
      continue;
    }

    if ((state.inventory[ingredient.resourceId] ?? 0) < ingredient.amount) {
      missing.push(`${ingredient.amount} ${getResourceLabel(ingredient.resourceId)}`);
    }
  }

  return missing;
}

function getMissingCostText(state: GameState, cost: Cost): string {
  const missing: Cost = {};
  for (const [resourceId, amount = 0] of Object.entries(cost)) {
    const id = resourceId as ResourceId;
    const missingAmount = Math.max(0, amount - (state.inventory[id] ?? 0));
    if (missingAmount > 0) {
      missing[id] = missingAmount;
    }
  }

  return Object.keys(missing).length ? describeCost(missing) : "";
}

function rememberKnownRecipe(state: GameState, recipeId: CookingRecipeId): void {
  if (!state.cooking.knownRecipeIds.includes(recipeId)) {
    state.cooking.knownRecipeIds.push(recipeId);
  }
}

function isCookingRecipeDiscoverable(state: GameState, recipe: CookingRecipeDefinition): boolean {
  if (state.cooking.knownRecipeIds.includes(recipe.id)) {
    return true;
  }

  if (state.skills.cooking.level < recipe.levelRequirement) {
    return false;
  }

  return recipe.ingredients.some((ingredient) => {
    return Boolean(ingredient.resourceId && state.seenResources.includes(ingredient.resourceId));
  });
}

function touch(state: GameState, now: number): void {
  state.updatedAt = now;
}
