import type {
  IngredientCategory,
  ItemRarity,
  LocationId,
  ResourceDefinition,
  ResourceId,
  ResourceNutrition
} from "../types";

export interface GatherableDefinition {
  id: ResourceId;
  displayName: string;
  category: IngredientCategory;
  description: string;
  gatherWeight: number;
  gatherTimeModifier: number;
  tags: string[];
  value: number;
  rarity: ItemRarity;
  nutrition?: ResourceNutrition;
}

export interface GatherableLootEntry {
  id: ResourceId;
  category: IngredientCategory;
  weight: number;
  minAmount: number;
  maxAmount: number;
  gatherTimeModifier: number;
  tags: string[];
  rarity: ItemRarity;
}

export interface LocationGatheringTable {
  locationId: LocationId;
  label: string;
  categories: IngredientCategory[];
  entries: GatherableLootEntry[];
  seasonalTags: string[];
  biomeTags: string[];
}

export const meadowGatherableDefinitions: GatherableDefinition[] = [
  meadowHerb("wildGarlic", "Wild Garlic", "Sharp green shoots with a clean bite. Good for waking up thin broth.", 9, [
    "allium",
    "pungent",
    "meadow"
  ]),
  meadowHerb("dandelionGreens", "Dandelion Greens", "Bitter young leaves that soften in hot water.", 13, [
    "bitter",
    "leafy",
    "meadow"
  ]),
  meadowHerb("clover", "Clover", "Tender meadow clover with a mild grassy sweetness.", 11, [
    "leafy",
    "mild",
    "meadow"
  ]),
  meadowFlower("chamomile", "Chamomile", "Small pale flowers with a warm apple scent.", 7, ["calming", "floral", "meadow"]),
  meadowFlower("yarrow", "Yarrow", "Feathery leaves and tight flower heads with a resin edge.", 6, [
    "bitter",
    "medicinal",
    "meadow"
  ]),
  meadowHerb("wildOnion", "Wild Onion", "Slender onion bulbs and greens pulled from loose soil.", 8, [
    "allium",
    "pungent",
    "meadow"
  ]),
  meadowHerb("sorrel", "Sorrel", "Sour leaves that cut through fatty meat.", 8, ["sour", "leafy", "meadow"]),
  meadowHerb("plantainLeaf", "Plantain Leaf", "Broad, sturdy leaves that hold up in a pot.", 10, [
    "leafy",
    "earthy",
    "meadow"
  ]),
  meadowHerb("mint", "Mint", "Cool bright leaves from damp meadow edges.", 6, ["cooling", "aromatic", "meadow"]),
  meadowSeasoning("fennel", "Fennel", "Fine fronds with a sweet anise scent.", 5, ["aromatic", "sweet", "meadow"]),
  meadowFlower("lavender", "Lavender", "Purple flower spikes with a strong dry perfume.", 4, [
    "aromatic",
    "floral",
    "meadow"
  ]),
  meadowSeasoning("hearthcap", "Hearthcap", "Russet caps with a peppery smell when warmed by the fire.", 3, [
    "peppery",
    "savory",
    "meadow"
  ]),
  meadowRoot("sunrootTubers", "Sunroot Tubers", "Knobbly tubers with a nutty bite after boiling.", 6, [
    "starchy",
    "earthy",
    "meadow"
  ]),
  meadowVegetable("wildCarrot", "Wild Carrot", "Thin pale roots with more scent than flesh.", 5, [
    "root",
    "sweet",
    "meadow"
  ]),
  meadowBerry("blueberries", "Blueberries", "Small blue fruit from low bushes along the meadow edge.", 7, [
    "fruit",
    "sweet",
    "meadow"
  ]),
  meadowBerry("strawberries", "Strawberries", "Tiny red berries hiding under leaves.", 5, [
    "fruit",
    "sweet",
    "meadow"
  ]),
  meadowFlower("elderflowers", "Elderflowers", "Creamy flower clusters with a clean green scent.", 4, [
    "floral",
    "sweet",
    "meadow"
  ]),
  meadowBerry("roseHips", "Rose Hips", "Tart red hips that stain the fingers.", 4, ["tart", "fruit", "meadow"])
];

export const meadowIngredientIds: ResourceId[] = meadowGatherableDefinitions.map((entry) => entry.id);

export const meadowGatheringTable: LocationGatheringTable = {
  locationId: "meadow",
  label: "Meadow Ingredients",
  categories: ["herb", "flower", "berry", "root", "vegetable", "seasoning"],
  seasonalTags: ["spring", "summer", "autumn-ready"],
  biomeTags: ["meadow", "grassland", "edge"],
  entries: meadowGatherableDefinitions.map((entry) => ({
    id: entry.id,
    category: entry.category,
    weight: entry.gatherWeight,
    minAmount: getGatherableMinAmount(entry.category),
    maxAmount: getGatherableMaxAmount(entry.category),
    gatherTimeModifier: entry.gatherTimeModifier,
    tags: entry.tags,
    rarity: entry.rarity
  }))
};

export const locationGatheringTables: Partial<Record<LocationId, LocationGatheringTable>> = {
  meadow: meadowGatheringTable
};

export const gatherableResourceDefinitions: ResourceDefinition[] = meadowGatherableDefinitions.map((entry) => ({
  id: entry.id,
  label: entry.displayName,
  group: "ingredients",
  blurb: entry.description,
  stackSize: 99,
  weight: getIngredientWeight(entry.category),
  value: entry.value,
  rarity: entry.rarity,
  nutrition: entry.nutrition,
  spoilage: { perishable: true },
  quality: { enabled: false, baseQuality: 1 },
  cooking: {
    ingredientCategory: entry.category,
    tags: entry.tags,
    compatibility: getIngredientCompatibility(entry.category, entry.tags)
  }
}));

export function getGatherableDefinition(id: ResourceId): GatherableDefinition | undefined {
  return meadowGatherableDefinitions.find((entry) => entry.id === id);
}

export function getLocationGatheringTable(locationId: LocationId): LocationGatheringTable | undefined {
  return locationGatheringTables[locationId];
}

function meadowHerb(
  id: ResourceId,
  displayName: string,
  description: string,
  gatherWeight: number,
  tags: string[]
): GatherableDefinition {
  return {
    id,
    displayName,
    category: "herb",
    description,
    gatherWeight,
    gatherTimeModifier: 1,
    tags,
    value: 2,
    rarity: gatherWeight <= 6 ? "uncommon" : "common",
    nutrition: { hunger: 1 }
  };
}

function meadowFlower(
  id: ResourceId,
  displayName: string,
  description: string,
  gatherWeight: number,
  tags: string[]
): GatherableDefinition {
  return {
    id,
    displayName,
    category: "flower",
    description,
    gatherWeight,
    gatherTimeModifier: 1.08,
    tags,
    value: 2,
    rarity: gatherWeight <= 4 ? "uncommon" : "common",
    nutrition: { hunger: 1 }
  };
}

function meadowBerry(
  id: ResourceId,
  displayName: string,
  description: string,
  gatherWeight: number,
  tags: string[]
): GatherableDefinition {
  return {
    id,
    displayName,
    category: "berry",
    description,
    gatherWeight,
    gatherTimeModifier: 1.04,
    tags,
    value: 3,
    rarity: gatherWeight <= 4 ? "uncommon" : "common",
    nutrition: { hunger: 2, hydration: 1 }
  };
}

function meadowRoot(
  id: ResourceId,
  displayName: string,
  description: string,
  gatherWeight: number,
  tags: string[]
): GatherableDefinition {
  return {
    id,
    displayName,
    category: "root",
    description,
    gatherWeight,
    gatherTimeModifier: 1.18,
    tags,
    value: 4,
    rarity: "uncommon",
    nutrition: { hunger: 4 }
  };
}

function meadowVegetable(
  id: ResourceId,
  displayName: string,
  description: string,
  gatherWeight: number,
  tags: string[]
): GatherableDefinition {
  return {
    id,
    displayName,
    category: "vegetable",
    description,
    gatherWeight,
    gatherTimeModifier: 1.14,
    tags,
    value: 4,
    rarity: "uncommon",
    nutrition: { hunger: 3 }
  };
}

function meadowSeasoning(
  id: ResourceId,
  displayName: string,
  description: string,
  gatherWeight: number,
  tags: string[]
): GatherableDefinition {
  return {
    id,
    displayName,
    category: "seasoning",
    description,
    gatherWeight,
    gatherTimeModifier: 1.2,
    tags,
    value: 5,
    rarity: "rare",
    nutrition: { hunger: 1 }
  };
}

function getGatherableMinAmount(category: IngredientCategory): number {
  return category === "berry" ? 2 : 1;
}

function getGatherableMaxAmount(category: IngredientCategory): number {
  switch (category) {
    case "berry":
      return 4;
    case "root":
    case "vegetable":
      return 2;
    default:
      return 3;
  }
}

function getIngredientWeight(category: IngredientCategory): number {
  switch (category) {
    case "root":
    case "vegetable":
      return 0.4;
    case "berry":
      return 0.1;
    default:
      return 0.1;
  }
}

function getIngredientCompatibility(category: IngredientCategory, tags: string[]): string[] {
  const compatibility = ["stew", "campfire"];
  if (category === "berry" || tags.includes("sweet")) {
    compatibility.push("preserve", "brew");
  }
  if (category === "seasoning" || tags.includes("aromatic")) {
    compatibility.push("seasoning");
  }
  if (category === "root" || category === "vegetable") {
    compatibility.push("hearty-stew");
  }
  return compatibility;
}
