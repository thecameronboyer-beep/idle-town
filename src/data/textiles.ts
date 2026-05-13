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

export const textileRecipeDefinitions: TextileRecipeDefinition[] = [
  {
    actionId: "retFlax",
    label: "Ret Flax",
    verb: "retting flax",
    kind: "retting",
    durationMs: 60000,
    cost: { flaxPlant: 3 },
    output: { rettedFlax: 3 },
    blurb: "Soak and wait out whole flax stalks until the fibers loosen from the woody stem.",
    unlockHint: "Gather Flax Plant",
    requiredSeenResources: ["flaxPlant"]
  }
];

export const textileActionIds: ActionId[] = textileRecipeDefinitions.map((recipe) => recipe.actionId);

export function getTextileRecipe(actionId: string): TextileRecipeDefinition | undefined {
  return textileRecipeDefinitions.find((recipe) => recipe.actionId === actionId);
}

export function isTextileActionId(actionId: string): actionId is ActionId {
  return textileRecipeDefinitions.some((recipe) => recipe.actionId === actionId);
}
