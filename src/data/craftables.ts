import type { BuildingId, CraftableDefinition, ToolId } from "../types";

export interface ToolDefinition extends CraftableDefinition<ToolId> {
  maxDurability: number;
}

export const toolDefinitions: ToolDefinition[] = [
  {
    id: "stoneKnife",
    label: "Stone Knife",
    recipe: { stick: 1, stone: 2 },
    blurb: "Unlocks hide and bone recovery while butchering.",
    maxDurability: 18
  },
  {
    id: "stoneAxe",
    label: "Stone Axe",
    recipe: { stick: 3, stone: 4 },
    blurb: "Heavy enough to bite into small trees.",
    maxDurability: 12
  },
  {
    id: "stoneSpear",
    label: "Stone Spear",
    recipe: { stick: 4, stone: 3 },
    blurb: "A reach weapon for rabbits and squirrels.",
    maxDurability: 10
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
  }
];
