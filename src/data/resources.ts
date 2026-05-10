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
    id: "flaxFiber",
    label: "Flax Fiber",
    group: "resources",
    blurb: "Pale plant fiber for future cordage and cloth."
  },
  {
    id: "wood",
    label: "Wood",
    group: "resources",
    blurb: "Usable lengths from felled trees."
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

export function getResourceLabel(id: ResourceId): string {
  return resourceDefinitions.find((resource) => resource.id === id)?.label ?? id;
}
