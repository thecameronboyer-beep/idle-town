import type { ActionId, BuildingId, Cost, ResourceId } from "../types";

export type TextileRecipeKind = "retting" | "fiber" | "spinning" | "weaving" | "tooling" | "sewing";

export const sewingNeedleResourceIds = ["copperNeedle", "bronzeNeedle"] as const satisfies readonly ResourceId[];

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
  },
  {
    actionId: "weaveLinenCloth",
    label: "Weave Linen Cloth",
    verb: "weaving linen cloth",
    kind: "weaving",
    durationMs: 36000,
    cost: { linenThread: 4 },
    output: { linenCloth: 1 },
    blurb: "Work linen thread across the loom into a sturdy cloth panel.",
    unlockHint: "Build Primitive Loom",
    requiredBuildings: ["primitiveLoom"],
    requiredSeenResources: ["linenThread"]
  },
  {
    actionId: "craftCopperNeedle",
    label: "Craft Copper Needle",
    verb: "crafting a copper needle",
    kind: "tooling",
    durationMs: 12000,
    cost: { copperBar: 1 },
    output: { copperNeedle: 1 },
    blurb: "Draw a soft copper bar into a basic needle for stitching linen.",
    unlockHint: "Smelt Copper Bar",
    requiredSeenResources: ["copperBar"]
  },
  {
    actionId: "craftBronzeNeedle",
    label: "Craft Bronze Needle",
    verb: "crafting a bronze needle",
    kind: "tooling",
    durationMs: 14000,
    cost: { bronzeBar: 1 },
    output: { bronzeNeedle: 1 },
    blurb: "Shape a harder bronze needle for steadier sewing work.",
    unlockHint: "Smelt Bronze Bar",
    requiredSeenResources: ["bronzeBar"]
  },
  {
    actionId: "sewClothWrap",
    label: "Sew Cloth Wrap",
    verb: "sewing a cloth wrap",
    kind: "sewing",
    durationMs: 14000,
    cost: { linenCloth: 1, linenThread: 1 },
    output: { clothWrap: 1 },
    blurb: "Hem a small linen wrap for tying and protecting loose goods.",
    unlockHint: "Craft Copper Needle or Bronze Needle",
    requiredSeenResources: ["linenCloth"],
    requiredAnyResources: [...sewingNeedleResourceIds]
  },
  {
    actionId: "sewLinenBandage",
    label: "Sew Linen Bandage",
    verb: "sewing a linen bandage",
    kind: "sewing",
    durationMs: 12000,
    cost: { linenCloth: 1 },
    output: { linenBandage: 1 },
    blurb: "Cut and stitch clean linen into simple bandage strips.",
    unlockHint: "Craft Copper Needle or Bronze Needle",
    requiredSeenResources: ["linenCloth"],
    requiredAnyResources: [...sewingNeedleResourceIds]
  },
  {
    actionId: "sewSimplePouch",
    label: "Sew Simple Pouch",
    verb: "sewing a simple pouch",
    kind: "sewing",
    durationMs: 22000,
    cost: { linenCloth: 2, linenThread: 2 },
    output: { simplePouch: 1 },
    blurb: "Sew a small pouch with tied corners and a linen drawstring.",
    unlockHint: "Craft Copper Needle or Bronze Needle",
    requiredSeenResources: ["linenCloth"],
    requiredAnyResources: [...sewingNeedleResourceIds]
  },
  {
    actionId: "sewLinenHood",
    label: "Sew Linen Hood",
    verb: "sewing a linen hood",
    kind: "sewing",
    durationMs: 24000,
    cost: { linenCloth: 2, linenThread: 2 },
    output: { linenHood: 1 },
    blurb: "Cut and sew a simple linen hood from woven cloth panels.",
    unlockHint: "Craft Copper Needle or Bronze Needle",
    requiredSeenResources: ["linenCloth"],
    requiredAnyResources: [...sewingNeedleResourceIds]
  },
  {
    actionId: "sewLinenShirt",
    label: "Sew Linen Shirt",
    verb: "sewing a linen shirt",
    kind: "sewing",
    durationMs: 30000,
    cost: { linenCloth: 4, linenThread: 3 },
    output: { linenShirt: 1 },
    blurb: "Stitch linen panels into a simple shirt for future clothing systems.",
    unlockHint: "Craft Copper Needle or Bronze Needle",
    requiredSeenResources: ["linenCloth"],
    requiredAnyResources: [...sewingNeedleResourceIds]
  }
];

export const textileActionIds: ActionId[] = textileRecipeDefinitions.map((recipe) => recipe.actionId);
export const textileRettingActionIds = getTextileActionIdsByKind("retting");
export const textileFiberActionIds = getTextileActionIdsByKind("fiber");
export const textileSpinningActionIds = getTextileActionIdsByKind("spinning");
export const textileWeavingActionIds = getTextileActionIdsByKind("weaving");
export const textileToolingActionIds = getTextileActionIdsByKind("tooling");
export const textileSewingActionIds = getTextileActionIdsByKind("sewing");

export function getTextileRecipe(actionId: string): TextileRecipeDefinition | undefined {
  return textileRecipeDefinitions.find((recipe) => recipe.actionId === actionId);
}

export function isTextileActionId(actionId: string): actionId is ActionId {
  return textileRecipeDefinitions.some((recipe) => recipe.actionId === actionId);
}

function getTextileActionIdsByKind(kind: TextileRecipeKind): ActionId[] {
  return textileRecipeDefinitions.filter((recipe) => recipe.kind === kind).map((recipe) => recipe.actionId);
}
