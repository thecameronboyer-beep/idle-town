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
  },
  {
    actionId: "separateFlaxFiber",
    label: "Separate Flax Fiber",
    verb: "breaking flax",
    kind: "fiber",
    durationMs: 30000,
    cost: { rettedFlax: 2 },
    output: { flaxFiber: 3 },
    blurb: "Break, scrape, and comb retted stalks into clean flax fiber.",
    unlockHint: "Ret Flax",
    requiredSeenResources: ["rettedFlax"]
  },
  {
    actionId: "handSpinLinenThread",
    label: "Hand Spin Linen Thread",
    verb: "hand-spinning thread",
    kind: "spinning",
    durationMs: 26000,
    cost: { flaxFiber: 1 },
    output: { linenThread: 1 },
    blurb: "Twist clean flax fiber into usable linen thread by hand.",
    unlockHint: "Separate Flax Fiber",
    requiredSeenResources: ["flaxFiber"]
  },
  {
    actionId: "spinLinenThread",
    label: "Spin Linen Thread",
    verb: "spinning thread",
    kind: "spinning",
    durationMs: 18000,
    cost: { flaxFiber: 5 },
    output: { linenThread: 5 },
    blurb: "Use the spinning wheel to turn a batch of flax fiber into thread more quickly.",
    unlockHint: "Build Primitive Spinning Wheel",
    requiredBuildings: ["primitiveSpinningWheel"],
    requiredSeenResources: ["flaxFiber"]
  }
];

export const textileActionIds: ActionId[] = textileRecipeDefinitions.map((recipe) => recipe.actionId);

export function getTextileRecipe(actionId: string): TextileRecipeDefinition | undefined {
  return textileRecipeDefinitions.find((recipe) => recipe.actionId === actionId);
}

export function isTextileActionId(actionId: string): actionId is ActionId {
  return textileRecipeDefinitions.some((recipe) => recipe.actionId === actionId);
}
