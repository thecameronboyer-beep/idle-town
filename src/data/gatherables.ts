import type {
  ActionId,
  ForageCategoryName,
  ForageIngredientActionId,
  ForageLocationName,
  ForageResourceActionId,
  IngredientCategory,
  ItemRarity,
  LocationId,
  ResourceDefinition,
  ResourceId,
  ResourceNutrition
} from "../types";

export type GatherableIngredientCategory = Exclude<IngredientCategory, "meat">;

export interface GatherableDefinition {
  id: ResourceId;
  displayName: string;
  category: GatherableIngredientCategory;
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
  category: GatherableIngredientCategory;
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
  categories: GatherableIngredientCategory[];
  entries: GatherableLootEntry[];
  seasonalTags: string[];
  biomeTags: string[];
}

export interface ForageIngredientActionDefinition {
  actionId: ForageIngredientActionId;
  locationId: LocationId;
  category: GatherableIngredientCategory;
  label: string;
  verb: string;
  durationMs: number;
  blurb: string;
  xp: number;
}

export interface ForageResourceActionDefinition {
  actionId: ForageResourceActionId;
  locationId: LocationId;
  category: GatherableIngredientCategory;
  resourceId: ResourceId;
  resourceLabel: string;
  tags: string[];
  label: string;
  verb: string;
  durationMs: number;
  blurb: string;
  minAmount: number;
  maxAmount: number;
  xp: number;
}

export interface LocationGatherableDefinition extends GatherableDefinition {
  locationId: LocationId;
}

const forageCategoryDefinitions: Array<{
  category: GatherableIngredientCategory;
  actionName: ForageCategoryName;
  label: string;
  verbNoun: string;
  summary: string;
}> = [
  { category: "herb", actionName: "Herbs", label: "Herbs", verbNoun: "herbs", summary: "leafy herbs" },
  { category: "flower", actionName: "Flowers", label: "Flowers", verbNoun: "flowers", summary: "edible and useful flowers" },
  { category: "berry", actionName: "Berries", label: "Berries", verbNoun: "berries", summary: "berries" },
  { category: "root", actionName: "Roots", label: "Roots/Tubers", verbNoun: "roots and tubers", summary: "roots and tubers" },
  {
    category: "vegetable",
    actionName: "Vegetables",
    label: "Vegetables/Hearty Plants",
    verbNoun: "hearty plants",
    summary: "vegetables and hearty plants"
  },
  {
    category: "seasoning",
    actionName: "Seasonings",
    label: "Seasoning/Aromatics",
    verbNoun: "seasonings and aromatics",
    summary: "seasonings and aromatics"
  }
];

export const gatherableIngredientCategories: GatherableIngredientCategory[] = forageCategoryDefinitions.map(
  (definition) => definition.category
);

const forageLocationDefinitions: Array<{
  locationId: LocationId;
  actionName: ForageLocationName;
  label: string;
  baseDurationMs: number;
  baseXp: number;
}> = [
  { locationId: "meadow", actionName: "Meadow", label: "Meadow", baseDurationMs: 12000, baseXp: 120 },
  { locationId: "forest", actionName: "Forest", label: "Forest", baseDurationMs: 14000, baseXp: 140 },
  { locationId: "river", actionName: "River", label: "River", baseDurationMs: 13500, baseXp: 135 },
  { locationId: "mine", actionName: "Mine", label: "Mine", baseDurationMs: 17000, baseXp: 170 },
  { locationId: "desert", actionName: "Desert", label: "Desert", baseDurationMs: 18000, baseXp: 180 }
];

export const forageIngredientActionDefinitions: ForageIngredientActionDefinition[] = forageLocationDefinitions.flatMap(
  (location) =>
    forageCategoryDefinitions.map((category) => ({
      actionId: getForageIngredientActionId(location.actionName, category.actionName),
      locationId: location.locationId,
      category: category.category,
      label: `Gather ${location.label} ${category.label}`,
      verb: `gathering ${location.label.toLowerCase()} ${category.verbNoun}`,
      durationMs: Math.round(location.baseDurationMs * getCategoryGatherTimeModifier(category.category)),
      blurb: `Search the ${location.label.toLowerCase()} for ${category.summary}.`,
      xp: Math.round(location.baseXp * getCategoryGatherTimeModifier(category.category))
    }))
);

export const forageIngredientActionIds: ForageIngredientActionId[] = forageIngredientActionDefinitions.map(
  (definition) => definition.actionId
);

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
    "fungus",
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

export const forestGatherableDefinitions: GatherableDefinition[] = [
  forestGatherable("blackberries", "Blackberries", "berry", 10, ["fruit", "sweet"]),
  forestGatherable("juniperBerries", "Juniper Berries", "berry", 6, ["resinous", "aromatic"]),
  forestGatherable("woodViolets", "Wood Violets", "flower", 7, ["floral", "shade"]),
  forestGatherable("trilliumBlossoms", "Trillium Blossoms", "flower", 4, ["floral", "rare"]),
  forestGatherable("pineNeedles", "Pine Needles", "seasoning", 10, ["resinous", "evergreen"]),
  forestGatherable("birchBark", "Birch Bark", "seasoning", 8, ["woody", "bitter"]),
  forestGatherable("acorns", "Acorns", "vegetable", 9, ["nut", "earthy"]),
  forestGatherable("hazelnuts", "Hazelnuts", "vegetable", 7, ["nut", "rich"]),
  forestGatherable("burdockRoots", "Burdock Roots", "root", 7, ["root", "earthy"]),
  forestGatherable("fernrootTubers", "Fernroot Tubers", "root", 5, ["tuber", "starchy"]),
  forestGatherable("nettles", "Nettles", "herb", 9, ["leafy", "stinging"]),
  forestGatherable("mossHerbs", "Moss Herbs", "herb", 8, ["moss", "damp"]),
  forestGatherable("bloodleaf", "Bloodleaf", "herb", 4, ["medicinal", "red"]),
  forestGatherable("shadowThyme", "Shadow Thyme", "seasoning", 5, ["aromatic", "shade"]),
  forestGatherable("wildSage", "Wild Sage", "seasoning", 6, ["aromatic", "savory"]),
  forestGatherable("crowcapMushrooms", "Crowcap Mushrooms", "herb", 5, ["fungus", "dark"]),
  forestGatherable("emberFern", "Ember Fern", "herb", 4, ["warm", "fern"]),
  forestGatherable("treeSapResin", "Tree Sap Resin", "seasoning", 5, ["resin", "sticky"])
];

export const riverGatherableDefinitions: GatherableDefinition[] = [
  riverGatherable("watercress", "Watercress", "vegetable", 11, ["leafy", "peppery"]),
  riverGatherable("riverMint", "River Mint", "herb", 8, ["cooling", "aromatic"]),
  riverGatherable("waterLilies", "Water Lilies", "flower", 5, ["floral", "calming"]),
  riverGatherable("marshIris", "Marsh Iris", "flower", 4, ["floral", "wetland"]),
  riverGatherable("cattailShoots", "Cattail Shoots", "vegetable", 9, ["shoot", "marsh"]),
  riverGatherable("reedGrass", "Reed Grass", "herb", 10, ["grass", "fibrous"]),
  riverGatherable("marshParsley", "Marsh Parsley", "seasoning", 7, ["aromatic", "green"]),
  riverGatherable("frogroot", "Frogroot", "root", 6, ["root", "marsh"]),
  riverGatherable("lotusSeeds", "Lotus Seeds", "seasoning", 5, ["seed", "calming"]),
  riverGatherable("swampOnion", "Swamp Onion", "vegetable", 7, ["allium", "pungent"]),
  riverGatherable("mudGinger", "Mud Ginger", "root", 5, ["warming", "spice"]),
  riverGatherable("algaeClumps", "Algae Clumps", "herb", 9, ["algae", "wet"]),
  riverGatherable("riverKelp", "River Kelp", "vegetable", 6, ["kelp", "briny"]),
  riverGatherable("cranberries", "Cranberries", "berry", 5, ["fruit", "tart"]),
  riverGatherable("wildRice", "Wild Rice", "vegetable", 4, ["grain", "marsh"]),
  riverGatherable("silverleafHerb", "Silverleaf Herb", "herb", 4, ["mana", "silver"]),
  riverGatherable("driftwoodFungus", "Driftwood Fungus", "herb", 5, ["fungus", "wood"])
];

export const mineGatherableDefinitions: GatherableDefinition[] = [
  mineGatherable("glimmerberries", "Glimmerberries", "berry", 5, ["fruit", "glowing"]),
  mineGatherable("caveCurrants", "Cave Currants", "berry", 4, ["fruit", "tart"]),
  mineGatherable("palecapFlowers", "Palecap Flowers", "flower", 5, ["floral", "pale"]),
  mineGatherable("crystalBlooms", "Crystal Blooms", "flower", 3, ["floral", "mineral"]),
  mineGatherable("glowcaps", "Glowcaps", "herb", 6, ["fungus", "glowing"]),
  mineGatherable("crystalMoss", "Crystal Moss", "herb", 5, ["moss", "mineral"]),
  mineGatherable("stoneTruffle", "Stone Truffle", "root", 5, ["fungus", "earthy"]),
  mineGatherable("batMint", "Bat Mint", "herb", 7, ["cooling", "cave"]),
  mineGatherable("sulfurHerb", "Sulfur Herb", "herb", 5, ["sulfur", "sharp"]),
  mineGatherable("ironroot", "Ironroot", "root", 6, ["root", "mineral"]),
  mineGatherable("deepFungus", "Deep Fungus", "herb", 6, ["fungus", "deep"]),
  mineGatherable("blindrootTubers", "Blindroot Tubers", "root", 5, ["tuber", "dark"]),
  mineGatherable("caveGarlic", "Cave Garlic", "vegetable", 6, ["allium", "pungent"]),
  mineGatherable("saltCrystals", "Salt Crystals", "seasoning", 7, ["salt", "mineral"]),
  mineGatherable("mineralLichen", "Mineral Lichen", "herb", 7, ["lichen", "mineral"]),
  mineGatherable("ashCaps", "Ash Caps", "herb", 5, ["fungus", "ash"]),
  mineGatherable("ghostMushrooms", "Ghost Mushrooms", "herb", 4, ["fungus", "pale"]),
  mineGatherable("emberSpores", "Ember Spores", "seasoning", 4, ["spore", "warm"])
];

export const desertGatherableDefinitions: GatherableDefinition[] = [
  desertGatherable("pricklyPear", "Prickly Pear", "berry", 9, ["fruit", "cactus"]),
  desertGatherable("agaveHearts", "Agave Hearts", "vegetable", 7, ["sweet", "succulent"]),
  desertGatherable("desertSage", "Desert Sage", "seasoning", 7, ["aromatic", "dry"]),
  desertGatherable("sandThyme", "Sand Thyme", "seasoning", 6, ["aromatic", "dry"]),
  desertGatherable("sunleafHerb", "Sunleaf Herb", "herb", 6, ["sun", "leafy"]),
  desertGatherable("dustMint", "Dust Mint", "herb", 6, ["cooling", "dust"]),
  desertGatherable("aloeLeaves", "Aloe Leaves", "herb", 8, ["succulent", "soothing"]),
  desertGatherable("dryrootTubers", "Dryroot Tubers", "root", 7, ["tuber", "dry"]),
  desertGatherable("fireBlossom", "Fire Blossom", "flower", 4, ["flower", "warm"]),
  desertGatherable("saltbrush", "Saltbrush", "herb", 7, ["salty", "brush"]),
  desertGatherable("bitterYucca", "Bitter Yucca", "vegetable", 6, ["bitter", "succulent"]),
  desertGatherable("cactusFruit", "Cactus Fruit", "berry", 8, ["fruit", "cactus"]),
  desertGatherable("redNeedleHerb", "Red Needle Herb", "herb", 5, ["needle", "red"]),
  desertGatherable("scorchleaf", "Scorchleaf", "herb", 4, ["heat", "leafy"]),
  desertGatherable("sandOnion", "Sand Onion", "vegetable", 6, ["allium", "pungent"]),
  desertGatherable("duneFennel", "Dune Fennel", "seasoning", 5, ["aromatic", "sweet"]),
  desertGatherable("ironThornPods", "Iron Thorn Pods", "vegetable", 4, ["pod", "thorn"]),
  desertGatherable("wildMesquiteBeans", "Wild Mesquite Beans", "vegetable", 6, ["bean", "sweet"]),
  desertGatherable("sunbloomPetals", "Sunbloom Petals", "flower", 4, ["floral", "sun"]),
  desertGatherable("sandcaps", "Sandcaps", "herb", 5, ["fungus", "sand"]),
  desertGatherable("dustmorels", "Dustmorels", "herb", 4, ["fungus", "dust"]),
  desertGatherable("drygillMushrooms", "Drygill Mushrooms", "herb", 4, ["fungus", "dry"]),
  desertGatherable("suncrackFungus", "Suncrack Fungus", "herb", 3, ["fungus", "sun"]),
  desertGatherable("cavePuffballs", "Cave Puffballs", "herb", 4, ["fungus", "puffball"]),
  desertGatherable("bonecapMushrooms", "Bonecap Mushrooms", "herb", 3, ["fungus", "bone"])
];

export const allGatherableDefinitions: GatherableDefinition[] = [
  ...meadowGatherableDefinitions,
  ...forestGatherableDefinitions,
  ...riverGatherableDefinitions,
  ...mineGatherableDefinitions,
  ...desertGatherableDefinitions
];

export const allLocationGatherableDefinitions: LocationGatherableDefinition[] = [
  ...withLocation("meadow", meadowGatherableDefinitions),
  ...withLocation("forest", forestGatherableDefinitions),
  ...withLocation("river", riverGatherableDefinitions),
  ...withLocation("mine", mineGatherableDefinitions),
  ...withLocation("desert", desertGatherableDefinitions)
];

export const forageResourceActionDefinitions: ForageResourceActionDefinition[] = allLocationGatherableDefinitions.map(
  (entry) => {
    const location = getForageLocationDefinition(entry.locationId);
    return {
      actionId: getForageResourceActionId(entry.id),
      locationId: entry.locationId,
      category: entry.category,
      resourceId: entry.id,
      resourceLabel: entry.displayName,
      tags: entry.tags,
      label: `Gather ${entry.displayName}`,
      verb: `gathering ${entry.displayName.toLowerCase()}`,
      durationMs: Math.round(location.baseDurationMs * entry.gatherTimeModifier),
      blurb: entry.description,
      minAmount: getGatherableMinAmount(entry.category),
      maxAmount: getGatherableMaxAmount(entry.category),
      xp: Math.round(location.baseXp * entry.gatherTimeModifier)
    };
  }
);

export const forageResourceActionIds: ForageResourceActionId[] = forageResourceActionDefinitions.map(
  (definition) => definition.actionId
);

export const meadowIngredientIds: ResourceId[] = meadowGatherableDefinitions.map((entry) => entry.id);
export const forestIngredientIds: ResourceId[] = forestGatherableDefinitions.map((entry) => entry.id);
export const riverIngredientIds: ResourceId[] = riverGatherableDefinitions.map((entry) => entry.id);
export const mineIngredientIds: ResourceId[] = mineGatherableDefinitions.map((entry) => entry.id);
export const desertIngredientIds: ResourceId[] = desertGatherableDefinitions.map((entry) => entry.id);

export const meadowGatheringTable = createGatheringTable(
  "meadow",
  "Meadow Ingredients",
  meadowGatherableDefinitions,
  ["spring", "summer", "autumn-ready"],
  ["meadow", "grassland", "edge"]
);

export const forestGatheringTable = createGatheringTable(
  "forest",
  "Forest Forage",
  forestGatherableDefinitions,
  ["spring", "summer", "autumn-ready"],
  ["forest", "canopy", "old-growth"]
);

export const riverGatheringTable = createGatheringTable(
  "river",
  "River Forage",
  riverGatherableDefinitions,
  ["spring", "summer", "wetland"],
  ["river", "marsh", "bank"]
);

export const mineGatheringTable = createGatheringTable(
  "mine",
  "Mine Forage",
  mineGatherableDefinitions,
  ["year-round", "underground"],
  ["mine", "cavern", "mineral"]
);

export const desertGatheringTable = createGatheringTable(
  "desert",
  "Desert Forage",
  desertGatherableDefinitions,
  ["dry-season", "sun-baked"],
  ["desert", "dune", "scrub"]
);

export const locationGatheringTables: Partial<Record<LocationId, LocationGatheringTable>> = {
  meadow: meadowGatheringTable,
  forest: forestGatheringTable,
  river: riverGatheringTable,
  mine: mineGatheringTable,
  desert: desertGatheringTable
};

export const gatherableResourceDefinitions: ResourceDefinition[] = allGatherableDefinitions.map((entry) => ({
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
  return allGatherableDefinitions.find((entry) => entry.id === id);
}

export function getLocationGatheringTable(locationId: LocationId): LocationGatheringTable | undefined {
  return locationGatheringTables[locationId];
}

export function getForageIngredientActionDefinition(
  actionId: ActionId
): ForageIngredientActionDefinition | undefined {
  return forageIngredientActionDefinitions.find((definition) => definition.actionId === actionId);
}

export function getForageIngredientActionIdsForLocation(locationId: LocationId): ForageIngredientActionId[] {
  return forageIngredientActionDefinitions
    .filter((definition) => definition.locationId === locationId)
    .map((definition) => definition.actionId);
}

export function getForageResourceActionDefinition(actionId: ActionId): ForageResourceActionDefinition | undefined {
  return forageResourceActionDefinitions.find((definition) => definition.actionId === actionId);
}

export function getForageResourceActionDefinitionsForLocation(
  locationId: LocationId
): ForageResourceActionDefinition[] {
  return forageResourceActionDefinitions.filter((definition) => definition.locationId === locationId);
}

export function getForageResourceActionIdsForLocation(locationId: LocationId): ForageResourceActionId[] {
  return getForageResourceActionDefinitionsForLocation(locationId).map((definition) => definition.actionId);
}

export function isForageIngredientAction(actionId: ActionId): actionId is ForageIngredientActionId {
  return forageIngredientActionIds.includes(actionId as ForageIngredientActionId);
}

export function isForageResourceAction(actionId: ActionId): actionId is ForageResourceActionId {
  return forageResourceActionIds.includes(actionId as ForageResourceActionId);
}

export function getGatherableCategoryLabel(category: GatherableIngredientCategory): string {
  return forageCategoryDefinitions.find((definition) => definition.category === category)?.label ?? category;
}

function getForageIngredientActionId(
  locationName: ForageLocationName,
  categoryName: ForageCategoryName
): ForageIngredientActionId {
  return `gather${locationName}${categoryName}` as ForageIngredientActionId;
}

function getForageResourceActionId(resourceId: ResourceId): ForageResourceActionId {
  return `gatherIngredient:${resourceId}` as ForageResourceActionId;
}

function getForageLocationDefinition(locationId: LocationId): (typeof forageLocationDefinitions)[number] {
  return forageLocationDefinitions.find((definition) => definition.locationId === locationId) ?? forageLocationDefinitions[0];
}

function withLocation(locationId: LocationId, definitions: GatherableDefinition[]): LocationGatherableDefinition[] {
  return definitions.map((definition) => ({ ...definition, locationId }));
}

function createGatheringTable(
  locationId: LocationId,
  label: string,
  definitions: GatherableDefinition[],
  seasonalTags: string[],
  biomeTags: string[]
): LocationGatheringTable {
  return {
    locationId,
    label,
    categories: Array.from(new Set(definitions.map((entry) => entry.category))),
    seasonalTags,
    biomeTags,
    entries: definitions.map((entry) => ({
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
}

function forestGatherable(
  id: ResourceId,
  displayName: string,
  category: GatherableIngredientCategory,
  gatherWeight: number,
  tags: string[]
): GatherableDefinition {
  return biomeGatherable("forest", "forest", id, displayName, category, gatherWeight, tags);
}

function riverGatherable(
  id: ResourceId,
  displayName: string,
  category: GatherableIngredientCategory,
  gatherWeight: number,
  tags: string[]
): GatherableDefinition {
  return biomeGatherable("river", "riverbank", id, displayName, category, gatherWeight, tags);
}

function mineGatherable(
  id: ResourceId,
  displayName: string,
  category: GatherableIngredientCategory,
  gatherWeight: number,
  tags: string[]
): GatherableDefinition {
  return biomeGatherable("mine", "mine", id, displayName, category, gatherWeight, tags);
}

function desertGatherable(
  id: ResourceId,
  displayName: string,
  category: GatherableIngredientCategory,
  gatherWeight: number,
  tags: string[]
): GatherableDefinition {
  return biomeGatherable("desert", "desert", id, displayName, category, gatherWeight, tags);
}

function biomeGatherable(
  locationId: LocationId,
  biomeLabel: string,
  id: ResourceId,
  displayName: string,
  category: GatherableIngredientCategory,
  gatherWeight: number,
  tags: string[]
): GatherableDefinition {
  const rarity = getGatherableRarity(gatherWeight);

  return {
    id,
    displayName,
    category,
    description: `${displayName} gathered from the ${biomeLabel} for cooking, brewing, and camp experiments.`,
    gatherWeight,
    gatherTimeModifier: getCategoryGatherTimeModifier(category) * getBiomeGatherTimeModifier(locationId),
    tags: Array.from(new Set([...tags, locationId, "alchemy"])),
    value: getIngredientValue(category, rarity),
    rarity,
    nutrition: getIngredientNutrition(category)
  };
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

function getGatherableRarity(gatherWeight: number): ItemRarity {
  if (gatherWeight <= 3) {
    return "rare";
  }
  if (gatherWeight <= 6) {
    return "uncommon";
  }
  return "common";
}

function getCategoryGatherTimeModifier(category: GatherableIngredientCategory): number {
  switch (category) {
    case "flower":
      return 1.08;
    case "root":
      return 1.18;
    case "vegetable":
      return 1.14;
    case "seasoning":
      return 1.2;
    case "berry":
      return 1.04;
    default:
      return 1;
  }
}

function getBiomeGatherTimeModifier(locationId: LocationId): number {
  switch (locationId) {
    case "forest":
      return 1.08;
    case "river":
      return 1.06;
    case "mine":
      return 1.18;
    case "desert":
      return 1.16;
    default:
      return 1;
  }
}

function getIngredientValue(category: GatherableIngredientCategory, rarity: ItemRarity): number {
  const rarityBonus = rarity === "rare" ? 3 : rarity === "uncommon" ? 1 : 0;
  switch (category) {
    case "root":
    case "vegetable":
      return 4 + rarityBonus;
    case "seasoning":
      return 5 + rarityBonus;
    case "berry":
      return 3 + rarityBonus;
    default:
      return 2 + rarityBonus;
  }
}

function getIngredientNutrition(category: GatherableIngredientCategory): ResourceNutrition | undefined {
  switch (category) {
    case "berry":
      return { hunger: 2, hydration: 1 };
    case "root":
      return { hunger: 4 };
    case "vegetable":
      return { hunger: 3 };
    default:
      return { hunger: 1 };
  }
}

function getGatherableMinAmount(category: GatherableIngredientCategory): number {
  return category === "berry" ? 2 : 1;
}

function getGatherableMaxAmount(category: GatherableIngredientCategory): number {
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

function getIngredientWeight(category: GatherableIngredientCategory): number {
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

function getIngredientCompatibility(category: GatherableIngredientCategory, tags: string[]): string[] {
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
  if (tags.includes("alchemy") && !compatibility.includes("brew")) {
    compatibility.push("brew");
  }
  return compatibility;
}
