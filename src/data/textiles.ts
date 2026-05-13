import type { ActionId, BuildingId, Cost, ResourceId } from "../types";

export type TextileRecipeKind = "retting" | "fiber" | "spinning" | "weaving" | "tooling" | "sewing";

export interface TextileRecipeDefinition {
  actionId: ActionId;
  label: string;
  verb: string;
  kind: TextileRecipeKind;
  durationMs: number;
  cost: Cost;
  output: Cost;
  blurb: string;
  unlockHint: string;
  requiredBuildings?: BuildingId[];
  requiredSeenResources?: ResourceId[];
  requiredAnyResources?: ResourceId[];
}

export const textileRecipeDefinitions: TextileRecipeDefinition[] = [];

export const textileActionIds: ActionId[] = textileRecipeDefinitions.map((recipe) => recipe.actionId);

export function getTextileRecipe(actionId: string): TextileRecipeDefinition | undefined {
  return textileRecipeDefinitions.find((recipe) => recipe.actionId === actionId);
}

export function isTextileActionId(actionId: string): actionId is ActionId {
  return textileRecipeDefinitions.some((recipe) => recipe.actionId === actionId);
}
