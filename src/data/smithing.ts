import type { Cost, ToolId } from "../types";

export const smithingActionIds = [
  "smeltCopperBar",
  "smeltBronzeBar",
  "craftPot",
  "craftLadle",
  "craftCopperPickaxe",
  "craftCopperHatchet",
  "craftCopperKnife",
  "craftBronzePickaxe",
  "craftBronzeHatchet",
  "craftBronzeKnife"
] as const;

export type SmithingActionId = (typeof smithingActionIds)[number];
export type SmithingRecipeKind = "smelting" | "smithing";

export interface SmithingRecipeDefinition {
  actionId: SmithingActionId;
  label: string;
  verb: string;
  kind: SmithingRecipeKind;
  durationMs: number;
  cost: Cost;
  output?: Cost;
  toolId?: ToolId;
  blurb: string;
  unlockHint: string;
}

export const smithingRecipeDefinitions: SmithingRecipeDefinition[] = [
  {
    actionId: "smeltCopperBar",
    label: "Smelt Copper Bar",
    verb: "smelting copper",
    kind: "smelting",
    durationMs: 22000,
    cost: { copper: 2, coal: 1 },
    output: { copperBar: 1 },
    blurb: "Refine soft copper ore into a first workable bar.",
    unlockHint: "Build Crude Stone Furnace"
  },
  {
    actionId: "smeltBronzeBar",
    label: "Smelt Bronze Bar",
    verb: "smelting bronze",
    kind: "smelting",
    durationMs: 32000,
    cost: { copper: 2, tin: 1, coal: 2 },
    output: { bronzeBar: 1 },
    blurb: "Blend copper and tin into a harder bronze bar.",
    unlockHint: "Craft a Copper Tool"
  },
  {
    actionId: "craftPot",
    label: "Craft Pot",
    verb: "shaping a pot",
    kind: "smithing",
    durationMs: 18000,
    cost: { copperBar: 2 },
    output: { pot: 1 },
    blurb: "Hammer copper into a simple vessel.",
    unlockHint: "Smelt Copper Bar"
  },
  {
    actionId: "craftLadle",
    label: "Craft Ladle",
    verb: "shaping a ladle",
    kind: "smithing",
    durationMs: 14000,
    cost: { copperBar: 1, stick: 1 },
    output: { ladle: 1 },
    blurb: "Rivet a small copper cup to a wooden handle.",
    unlockHint: "Smelt Copper Bar"
  },
  {
    actionId: "craftCopperPickaxe",
    label: "Craft Copper Pickaxe",
    verb: "smithing a copper pickaxe",
    kind: "smithing",
    durationMs: 24000,
    cost: { copperBar: 3, stick: 1, flaxFiber: 1 },
    toolId: "copperPickaxe",
    blurb: "A softer metal pick with better balance than stone.",
    unlockHint: "Craft Pot and Ladle"
  },
  {
    actionId: "craftCopperHatchet",
    label: "Craft Copper Hatchet",
    verb: "smithing a copper hatchet",
    kind: "smithing",
    durationMs: 22000,
    cost: { copperBar: 2, stick: 1, flaxFiber: 1 },
    toolId: "copperHatchet",
    blurb: "A compact copper chopping head lashed to a handle.",
    unlockHint: "Craft Pot and Ladle"
  },
  {
    actionId: "craftCopperKnife",
    label: "Craft Copper Knife",
    verb: "smithing a copper knife",
    kind: "smithing",
    durationMs: 18000,
    cost: { copperBar: 1, stick: 1, flaxFiber: 1 },
    toolId: "copperKnife",
    blurb: "A sharper, longer-lasting knife for camp work.",
    unlockHint: "Craft Pot and Ladle"
  },
  {
    actionId: "craftBronzePickaxe",
    label: "Craft Bronze Pickaxe",
    verb: "smithing a bronze pickaxe",
    kind: "smithing",
    durationMs: 30000,
    cost: { bronzeBar: 3, stick: 1, flaxFiber: 1 },
    toolId: "bronzePickaxe",
    blurb: "A sturdy bronze mining tool with a harder edge.",
    unlockHint: "Smelt Bronze Bar"
  },
  {
    actionId: "craftBronzeHatchet",
    label: "Craft Bronze Hatchet",
    verb: "smithing a bronze hatchet",
    kind: "smithing",
    durationMs: 28000,
    cost: { bronzeBar: 2, stick: 1, flaxFiber: 1 },
    toolId: "bronzeHatchet",
    blurb: "A bronze chopping tool that holds its bite.",
    unlockHint: "Smelt Bronze Bar"
  },
  {
    actionId: "craftBronzeKnife",
    label: "Craft Bronze Knife",
    verb: "smithing a bronze knife",
    kind: "smithing",
    durationMs: 22000,
    cost: { bronzeBar: 1, stick: 1, flaxFiber: 1 },
    toolId: "bronzeKnife",
    blurb: "A reliable bronze edge for finer butchering.",
    unlockHint: "Smelt Bronze Bar"
  }
];

export const smeltingActionIds = smithingRecipeDefinitions
  .filter((recipe) => recipe.kind === "smelting")
  .map((recipe) => recipe.actionId);

export const metalworkingActionIds = smithingRecipeDefinitions
  .filter((recipe) => recipe.kind === "smithing")
  .map((recipe) => recipe.actionId);

export function getSmithingRecipe(actionId: string): SmithingRecipeDefinition | undefined {
  return smithingRecipeDefinitions.find((recipe) => recipe.actionId === actionId);
}

export function isSmithingActionId(actionId: string): actionId is SmithingActionId {
  return smithingActionIds.some((id) => id === actionId);
}
