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
    id: "flaxFiber",
    label: "Flax Fiber",
    group: "resources",
    blurb: "Pale plant fiber for future cordage and cloth."
  },
  {
    id: "mushroom",
    label: "Mushroom",
    group: "resources",
    blurb: "Soft meadow caps gathered for later meals."
  },
  {
    id: "berry",
    label: "Berry",
    group: "resources",
    blurb: "Bright handfuls from low meadow brambles."
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
    blurb: "Fresh rabbit meat that wants fire soon."
  },
  {
    id: "squirrelMeat",
    label: "Squirrel Meat",
    group: "hunted",
    blurb: "Fresh squirrel meat that wants fire soon."
  },
  {
    id: "cookedRabbitMeat",
    label: "Cooked Rabbit Meat",
    group: "crafted",
    blurb: "A small cooked rabbit ration."
  },
  {
    id: "cookedSquirrelMeat",
    label: "Cooked Squirrel Meat",
    group: "crafted",
    blurb: "A small cooked squirrel ration."
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
  }
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
  return resourceDefinitions.find((resource) => resource.id === id)?.label ?? id;
}

function formatTenths(amount: number): string {
  const rounded = Math.round(amount * 10) / 10;
  return Number.isInteger(rounded) ? `${rounded}` : rounded.toFixed(1);
}
