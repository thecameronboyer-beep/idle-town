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
    id: "copperPickaxe",
    label: "Copper Pickaxe",
    recipe: { copperBar: 3, stick: 1, flaxFiber: 1 },
    blurb: "A softer metal pick with better balance than stone.",
    maxDurability: 24
  },
  {
    id: "copperHatchet",
    label: "Copper Hatchet",
    recipe: { copperBar: 2, stick: 1, flaxFiber: 1 },
    blurb: "A compact copper chopping head lashed to a handle.",
    maxDurability: 22
  },
  {
    id: "copperKnife",
    label: "Copper Knife",
    recipe: { copperBar: 1, stick: 1, flaxFiber: 1 },
    blurb: "A sharper, longer-lasting knife for camp work.",
    maxDurability: 30
  },
  {
    id: "bronzePickaxe",
    label: "Bronze Pickaxe",
    recipe: { bronzeBar: 3, stick: 1, flaxFiber: 1 },
    blurb: "A sturdy bronze mining tool with a harder edge.",
    maxDurability: 42
  },
  {
    id: "bronzeHatchet",
    label: "Bronze Hatchet",
    recipe: { bronzeBar: 2, stick: 1, flaxFiber: 1 },
    blurb: "A bronze chopping tool that holds its bite.",
    maxDurability: 38
  },
  {
    id: "bronzeKnife",
    label: "Bronze Knife",
    recipe: { bronzeBar: 1, stick: 1, flaxFiber: 1 },
    blurb: "A reliable bronze edge for finer butchering.",
    maxDurability: 48
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
  },
  {
    id: "primitiveSpinningWheel",
    label: "Primitive Spinning Wheel",
    recipe: { wood: 8, stick: 6, linenThread: 2 },
    blurb: "A simple frame, spindle, and wheel for turning flax fiber into thread faster."
  }
];
