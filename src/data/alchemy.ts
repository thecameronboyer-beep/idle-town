import type { Cost } from "../types";

export const alchemyActionIds = ["craftGlassVial", "brewHealthPotion", "brewManaPotion"] as const;

export type AlchemyActionId = (typeof alchemyActionIds)[number];
export type AlchemyPanelId = "brewing" | "transmutation" | "decomposition";
export type AlchemyRecipeKind = "vessel" | "potion";

export interface AlchemyRecipeDefinition {
  actionId: AlchemyActionId;
  label: string;
  verb: string;
  panel: AlchemyPanelId;
  kind: AlchemyRecipeKind;
  durationMs: number;
  cost: Cost;
  output: Cost;
  blurb: string;
  unlockHint: string;
}

export const alchemyRecipeDefinitions: AlchemyRecipeDefinition[] = [
  {
    actionId: "craftGlassVial",
    label: "Craft Glass Vial",
    verb: "firing glass vials",
    panel: "brewing",
    kind: "vessel",
    durationMs: 18000,
    cost: { sand: 3, coal: 1 },
    output: { glassVial: 2 },
    blurb: "Fire clean desert sand into small potion vessels.",
    unlockHint: "Build Stone Furnace"
  },
  {
    actionId: "brewHealthPotion",
    label: "Brew Health Potion",
    verb: "brewing a health potion",
    panel: "brewing",
    kind: "potion",
    durationMs: 26000,
    cost: { glassVial: 1, water: 1, yarrow: 1, plantainLeaf: 1 },
    output: { healthPotion: 1 },
    blurb: "Steep meadow medicines into a vial for future healing.",
    unlockHint: "Craft Glass Vial and find Meadow Ingredients"
  },
  {
    actionId: "brewManaPotion",
    label: "Brew Mana Potion",
    verb: "brewing a mana potion",
    panel: "brewing",
    kind: "potion",
    durationMs: 26000,
    cost: { glassVial: 1, water: 1, riverMint: 1, silverleafHerb: 1 },
    output: { manaPotion: 1 },
    blurb: "Steep river herbs into a vial for future mana recovery.",
    unlockHint: "Craft Glass Vial and find River Ingredients"
  }
];

export const brewingActionIds = alchemyRecipeDefinitions
  .filter((recipe) => recipe.panel === "brewing")
  .map((recipe) => recipe.actionId);

export function getAlchemyRecipe(actionId: string): AlchemyRecipeDefinition | undefined {
  return alchemyRecipeDefinitions.find((recipe) => recipe.actionId === actionId);
}

export function isAlchemyActionId(actionId: string): actionId is AlchemyActionId {
  return alchemyActionIds.some((id) => id === actionId);
}
