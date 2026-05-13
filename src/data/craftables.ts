import type { BuildingId, CraftableDefinition, ToolId } from "../types";

export interface ToolDefinition extends CraftableDefinition<ToolId> {
  maxDurability: number;
}

export const toolDefinitions: ToolDefinition[] = [
  {
    id: "stoneKnife",
    label: "Stone Knife",
    recipe: { stick: 1, stone: 1, flaxFiber: 1 },
    blurb: "Unlocks hide and bone recovery while butchering.",
    maxDurability: 18
  },
  {
    id: "stoneAxe",
    label: "Stone Axe",
    recipe: { stick: 1, stone: 1, flaxFiber: 1 },
    blurb: "Heavy enough to bite into small trees.",
    maxDurability: 12
  },
  {
    id: "stonePickAxe",
    label: "Stone Pick Axe",
    recipe: { stick: 1, stone: 1, flaxFiber: 1 },
    blurb: "A pointed stone head for breaking stubborn ground.",
    maxDurability: 12
  },
  {
    id: "stoneSpear",
    label: "Stone Spear",
    recipe: { stick: 1, stone: 1, flaxFiber: 1 },
    blurb: "A reach weapon for rabbits and squirrels.",
    maxDurability: 10
  },
  {
    id: "fishingPole",
    label: "Fishing Pole",
    recipe: { stick: 1, flaxFiber: 1 },
    blurb: "A simple line and hook for working the river.",
    maxDurability: 16
  },
  {
    id: "basket",
    label: "Basket",
    recipe: { stick: 1, flaxFiber: 3 },
    blurb: "A one-hand woven carrier for hauling more from the wild.",
    maxDurability: 1
  },
  {
    id: "leatherBackpack",
    label: "Leather Backpack",
    recipe: { leather: 10 },
    blurb: "A crude sling pouch for hauling more from the wild.",
    maxDurability: 1
  }
];

export const buildingDefinitions: CraftableDefinition<BuildingId>[] = [
  {
    id: "campfire",
    label: "Campfire",
    recipe: { stick: 8, stone: 5 },
    blurb: "A fixed fire ring for cooking meat."
  },
  {
    id: "tanningRack",
    label: "Tanning Rack",
    recipe: { stick: 6, wood: 4, stone: 2 },
    blurb: "A rough frame for turning hide into leather."
  },
  {
    id: "hideTent",
    label: "Hide Tent",
    recipe: { wood: 5, hide: 10 },
    blurb: "A hide shelter for holding warmth at camp."
  },
  {
    id: "crudeStoneFurnace",
    label: "Crude Stone Furnace",
    recipe: { stone: 16, stick: 6, wood: 4 },
    blurb: "A low stone furnace hot enough for first smelting."
  }
];
