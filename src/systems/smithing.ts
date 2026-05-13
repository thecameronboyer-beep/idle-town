import { getSmithingRecipe, isSmithingActionId, smeltingActionIds, type SmithingActionId } from "../data/smithing";
import type { GameState, ResourceId } from "../types";

const COPPER_TOOL_IDS = ["copperPickaxe", "copperHatchet", "copperKnife"];

export function hasCrudeStoneFurnace(state: GameState): boolean {
  return Boolean(state.buildings.crudeStoneFurnace);
}

export function getFurnaceFuelStatus(state: GameState): { furnaceBuilt: boolean; coal: number } {
  return {
    furnaceBuilt: hasCrudeStoneFurnace(state),
    coal: Math.max(0, Math.floor(state.inventory.coal ?? 0))
  };
}

export function isSmeltingAction(actionId: string): actionId is SmithingActionId {
  return smeltingActionIds.some((id) => id === actionId);
}

export function isSmithingRecipeUnlocked(state: GameState, actionId: string): boolean {
  if (!isSmithingActionId(actionId)) {
    return false;
  }

  switch (actionId) {
    case "smeltCopperBar":
      return hasCrudeStoneFurnace(state);
    case "craftPot":
    case "craftLadle":
      return hasSeenOrOwnedResource(state, "copperBar");
    case "craftCopperPickaxe":
    case "craftCopperHatchet":
    case "craftCopperKnife":
      return hasPotAndLadle(state);
    case "smeltBronzeBar":
      return hasCrudeStoneFurnace(state) && hasAnyCopperTool(state);
    case "craftBronzePickaxe":
    case "craftBronzeHatchet":
    case "craftBronzeKnife":
      return hasSeenOrOwnedResource(state, "bronzeBar");
  }
}

export function getSmithingRecipeLockReason(state: GameState, actionId: string): string {
  if (!isSmithingActionId(actionId)) {
    return "";
  }

  switch (actionId) {
    case "smeltCopperBar":
      return hasCrudeStoneFurnace(state) ? "" : "Needs Crude Stone Furnace";
    case "craftPot":
    case "craftLadle":
      return hasSeenOrOwnedResource(state, "copperBar") ? "" : "Smelt Copper Bar";
    case "craftCopperPickaxe":
    case "craftCopperHatchet":
    case "craftCopperKnife":
      return hasPotAndLadle(state) ? "" : "Craft Pot and Ladle";
    case "smeltBronzeBar":
      return !hasCrudeStoneFurnace(state)
        ? "Needs Crude Stone Furnace"
        : hasAnyCopperTool(state)
          ? ""
          : "Craft a Copper Tool";
    case "craftBronzePickaxe":
    case "craftBronzeHatchet":
    case "craftBronzeKnife":
      return hasSeenOrOwnedResource(state, "bronzeBar") ? "" : "Smelt Bronze Bar";
  }
}

export function getSmithingRecipeOutputText(actionId: SmithingActionId): string {
  const recipe = getSmithingRecipe(actionId);
  if (!recipe) {
    return "";
  }

  return recipe.label.replace(/^(Craft|Smelt) /, "1 ");
}

function hasPotAndLadle(state: GameState): boolean {
  return hasSeenOrOwnedResource(state, "pot") && hasSeenOrOwnedResource(state, "ladle");
}

function hasSeenOrOwnedResource(state: GameState, resourceId: ResourceId): boolean {
  return state.seenResources.includes(resourceId) || state.inventory[resourceId] > 0;
}

function hasAnyCopperTool(state: GameState): boolean {
  const tools = state.tools as Partial<Record<string, { owned?: boolean; quantity?: number }>>;
  return COPPER_TOOL_IDS.some((toolId) => {
    const tool = tools[toolId];
    return Boolean(tool?.owned || (tool?.quantity ?? 0) > 0);
  });
}
