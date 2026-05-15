import { cookingFoodResourceDefinitions } from "./cooking";
import { gatherableResourceDefinitions } from "./gatherables";
import type { ResourceDefinition, ResourceId } from "../types";

export const resourceDefinitions: ResourceDefinition[] = [
  {
    id: "stick",
    label: "Stick",
    group: "resources",
    blurb: "Dry kindling and crude handles."
  },
  {
    id: "stone",
    label: "Stone",
    group: "resources",
    blurb: "Weight, edge, and spark."
  },
  {
    id: "flaxPlant",
    label: "Flax Plant",
    group: "resources",
    blurb: "Fresh flax stalks that need retting before useful fiber can be combed free."
  },
  {
    id: "rettedFlax",
    label: "Retted Flax",
    group: "resources",
    blurb: "Soaked and loosened flax stems ready for breaking and combing."
  },
  {
    id: "flaxFiber",
    label: "Flax Fiber",
    group: "resources",
    blurb: "Pale plant fiber for future cordage and cloth."
  },
  {
    id: "linenThread",
    label: "Linen Thread",
    group: "crafted",
    blurb: "Twisted flax fiber ready for weaving, stitching, and more precise craft."
  },
  {
    id: "linenCloth",
    label: "Linen Cloth",
    group: "crafted",
    blurb: "Woven linen panels ready for sewing into useful camp goods."
  },
  {
    id: "wood",
    label: "Wood",
    group: "resources",
    blurb: "Usable lengths from felled trees."
  },
  {
    id: "coal",
    label: "Coal",
    group: "resources",
    blurb: "Dark fuel chipped from the mine."
  },
  {
    id: "copper",
    label: "Copper",
    group: "resources",
    blurb: "Soft reddish ore for future metalwork."
  },
  {
    id: "tin",
    label: "Tin",
    group: "resources",
    blurb: "Pale ore that will matter once bronze is possible."
  },
  {
    id: "copperBar",
    label: "Copper Bar",
    group: "crafted",
    blurb: "A worked bar ready for first metal tools."
  },
  {
    id: "bronzeBar",
    label: "Bronze Bar",
    group: "crafted",
    blurb: "A harder alloy bar for sturdier tools."
  },
  {
    id: "copperNeedle",
    label: "Copper Needle",
    group: "crafted",
    blurb: "A simple metal needle for first linen sewing."
  },
  {
    id: "bronzeNeedle",
    label: "Bronze Needle",
    group: "crafted",
    blurb: "A stronger needle for steady linen sewing work."
  },
  {
    id: "clothWrap",
    label: "Cloth Wrap",
    group: "crafted",
    blurb: "A simple folded linen wrap for bundling small supplies."
  },
  {
    id: "linenBandage",
    label: "Linen Bandage",
    group: "crafted",
    blurb: "Clean linen strips prepared for future medical use."
  },
  {
    id: "simplePouch",
    label: "Simple Pouch",
    group: "crafted",
    blurb: "A small sewn linen pouch for organizing camp goods."
  },
  {
    id: "linenHood",
    label: "Linen Hood",
    group: "crafted",
    blurb: "A simple sewn hood for future clothing systems."
  },
  {
    id: "linenShirt",
    label: "Linen Shirt",
    group: "crafted",
    blurb: "A plain linen shirt, ready for later equipment and quality systems."
  },
  {
    id: "pot",
    label: "Pot",
    group: "crafted",
    blurb: "A simple worked vessel for holding heat and liquid."
  },
  {
    id: "ladle",
    label: "Ladle",
    group: "crafted",
    blurb: "A small handled tool for moving hot metal safely."
  },
  {
    id: "water",
    label: "Water",
    group: "liquids",
    blurb: "Clean enough river water stored for camp cooking.",
    stackSize: 50,
    weight: 1,
    value: 1,
    rarity: "common",
    nutrition: { hydration: 8 },
    spoilage: { perishable: false },
    quality: { enabled: false, baseQuality: 1 },
    cooking: { tags: ["water", "liquid", "stew-base"], compatibility: ["stew", "brew"] }
  },
  {
    id: "crudeBowl",
    label: "Crude Bowl",
    group: "utensils",
    blurb: "A rough camp bowl. Clay will be better later, but this holds stew for now.",
    stackSize: 20,
    weight: 0.5,
    value: 3,
    rarity: "common",
    spoilage: { perishable: false },
    quality: { enabled: false, baseQuality: 1 },
    cooking: { tags: ["bowl", "vessel", "primitive"], compatibility: ["stew"] }
  },
  {
    id: "dirtyBowl",
    label: "Dirty Bowl",
    group: "utensils",
    blurb: "A used bowl with stew clinging to the inside. Washing can come later.",
    stackSize: 20,
    weight: 0.5,
    value: 1,
    rarity: "common",
    spoilage: { perishable: false },
    quality: { enabled: false, baseQuality: 1 },
    cooking: { tags: ["bowl", "dirty", "reuse-hook"], compatibility: ["washing"] }
  },
  {
    id: "crudeWoodenSpoon",
    label: "Crude Wooden Spoon",
    group: "utensils",
    blurb: "A small carved spoon for eating hot stew without burning fingers.",
    stackSize: 20,
    weight: 0.2,
    value: 2,
    rarity: "common",
    spoilage: { perishable: false },
    quality: { enabled: false, baseQuality: 1 },
    cooking: { tags: ["spoon", "utensil", "primitive"], compatibility: ["eat-stew"] }
  },
  {
    id: "minnow",
    label: "Minnow",
    group: "fish",
    blurb: "Tiny river fish, quick to smoke or stew."
  },
  {
    id: "stoneLoach",
    label: "Stone Loach",
    group: "fish",
    blurb: "Bottom-feeding fish from cold stones."
  },
  {
    id: "mudskipper",
    label: "Mudskipper",
    group: "fish",
    blurb: "A stubborn shore fish pulled from muddy shallows."
  },
  {
    id: "brookStickleback",
    label: "Brook Stickleback",
    group: "fish",
    blurb: "Small, sharp-backed fish from fast water."
  },
  {
    id: "pebblePerch",
    label: "Pebble Perch",
    group: "fish",
    blurb: "A broad little perch hiding under river stones."
  },
  {
    id: "minnowFilet",
    label: "Minnow Filet",
    group: "fish",
    blurb: "Cleaned minnow meat, lighter after butchering."
  },
  {
    id: "stoneLoachFilet",
    label: "Stone Loach Filet",
    group: "fish",
    blurb: "Cleaned stone loach meat, lighter after butchering."
  },
  {
    id: "mudskipperFilet",
    label: "Mudskipper Filet",
    group: "fish",
    blurb: "Cleaned mudskipper meat, lighter after butchering."
  },
  {
    id: "brookSticklebackFilet",
    label: "Brook Stickleback Filet",
    group: "fish",
    blurb: "Cleaned brook stickleback meat, lighter after butchering."
  },
  {
    id: "pebblePerchFilet",
    label: "Pebble Perch Filet",
    group: "fish",
    blurb: "Cleaned pebble perch meat, lighter after butchering."
  },
  {
    id: "rabbit",
    label: "Rabbit",
    group: "animals",
    blurb: "Whole small game, ready for butchering."
  },
  {
    id: "squirrel",
    label: "Squirrel",
    group: "animals",
    blurb: "Whole small game, ready for butchering."
  },
  {
    id: "rabbitMeat",
    label: "Rabbit Meat",
    group: "hunted",
    blurb: "Fresh rabbit meat that wants fire soon.",
    weight: 0.5,
    value: 4,
    rarity: "common",
    nutrition: { hunger: 8 },
    spoilage: { perishable: true },
    quality: { enabled: false, baseQuality: 1 },
    cooking: { ingredientCategory: "meat", tags: ["meat", "small-game", "rabbit"], compatibility: ["stew", "roast"] }
  },
  {
    id: "squirrelMeat",
    label: "Squirrel Meat",
    group: "hunted",
    blurb: "Fresh squirrel meat that wants fire soon.",
    weight: 0.4,
    value: 3,
    rarity: "common",
    nutrition: { hunger: 6 },
    spoilage: { perishable: true },
    quality: { enabled: false, baseQuality: 1 },
    cooking: { ingredientCategory: "meat", tags: ["meat", "small-game", "squirrel"], compatibility: ["stew", "roast"] }
  },
  {
    id: "cookedRabbitMeat",
    label: "Cooked Rabbit Meat",
    group: "crafted",
    blurb: "A small cooked rabbit ration.",
    weight: 0.5,
    value: 5,
    rarity: "common",
    nutrition: { hunger: 12 },
    spoilage: { perishable: true },
    quality: { enabled: false, baseQuality: 1 },
    cooking: { tags: ["cooked", "meat", "rabbit"], compatibility: ["eat", "stew-addition"] }
  },
  {
    id: "cookedSquirrelMeat",
    label: "Cooked Squirrel Meat",
    group: "crafted",
    blurb: "A small cooked squirrel ration.",
    weight: 0.4,
    value: 4,
    rarity: "common",
    nutrition: { hunger: 9 },
    spoilage: { perishable: true },
    quality: { enabled: false, baseQuality: 1 },
    cooking: { tags: ["cooked", "meat", "squirrel"], compatibility: ["eat", "stew-addition"] }
  },
  {
    id: "hide",
    label: "Hide",
    group: "resources",
    blurb: "Rough animal hide, ready for scraping."
  },
  {
    id: "bone",
    label: "Bone",
    group: "resources",
    blurb: "Hard scraps for later craft."
  },
  {
    id: "leather",
    label: "Leather",
    group: "crafted",
    blurb: "Worked hide for future bags and armor."
  },
  ...gatherableResourceDefinitions,
  ...cookingFoodResourceDefinitions
];

export const resourceOrder = resourceDefinitions.map((resource) => resource.id);

export const baseVisibleResources: ResourceId[] = ["stick", "stone"];

export const fishResourceIds: ResourceId[] = [
  "minnow",
  "stoneLoach",
  "mudskipper",
  "brookStickleback",
  "pebblePerch"
];
export const fishFiletResourceIds: ResourceId[] = [
  "minnowFilet",
  "stoneLoachFilet",
  "mudskipperFilet",
  "brookSticklebackFilet",
  "pebblePerchFilet"
];
export const fishFiletByFishId: Partial<Record<ResourceId, ResourceId>> = {
  minnow: "minnowFilet",
  stoneLoach: "stoneLoachFilet",
  mudskipper: "mudskipperFilet",
  brookStickleback: "brookSticklebackFilet",
  pebblePerch: "pebblePerchFilet"
};
export const wholeCountResourceIds: ResourceId[] = [...fishResourceIds, "rabbit", "squirrel"];
export const weightedResourceIds: ResourceId[] = [...fishResourceIds, ...fishFiletResourceIds, "rabbit", "squirrel"];

export function isFishResource(id: ResourceId): boolean {
  return fishResourceIds.includes(id);
}

export function isWeightedResource(id: ResourceId): boolean {
  return weightedResourceIds.includes(id);
}

export function isWholeCountResource(id: ResourceId): boolean {
  return wholeCountResourceIds.includes(id);
}

export function normalizeResourceAmount(id: ResourceId, amount: number): number {
  const safeAmount = Math.max(0, Number.isFinite(amount) ? amount : 0);
  if (!isWeightedResource(id)) {
    return Math.floor(safeAmount);
  }

  return Math.round(safeAmount * 10) / 10;
}

export function formatResourceAmount(id: ResourceId, amount: number): string {
  const normalized = normalizeResourceAmount(id, amount);
  return isWeightedResource(id) ? formatTenths(normalized) : `${normalized}`;
}

export function getResourceLabel(id: ResourceId): string {
  return getResourceDefinition(id)?.label ?? id;
}

export function getResourceDefinition(id: ResourceId): ResourceDefinition | undefined {
  return resourceDefinitions.find((resource) => resource.id === id);
}

function formatTenths(amount: number): string {
  const rounded = Math.round(amount * 10) / 10;
  return Number.isInteger(rounded) ? `${rounded}` : rounded.toFixed(1);
}
