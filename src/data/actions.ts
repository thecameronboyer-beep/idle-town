import type { ActionDefinition } from "../types";

export const actionDefinitions: ActionDefinition[] = [
  {
    id: "gatherSticks",
    label: "Gather Sticks",
    verb: "gathering sticks",
    durationMs: 7000,
    blurb: "Slow, reliable foraging near camp."
  },
  {
    id: "gatherStones",
    label: "Gather Stones",
    verb: "searching for stones",
    durationMs: 8500,
    blurb: "Cameron checks creek beds and exposed roots."
  },
  {
    id: "gatherFlaxFibers",
    label: "Gather Flax Fibers",
    verb: "pulling flax fibers",
    durationMs: 10000,
    blurb: "Thin stalks stripped by hand for future craft."
  },
  {
    id: "fishRiver",
    label: "Fishing River",
    verb: "fishing the river",
    durationMs: 15000,
    blurb: "Cast into the shallows for small river fish."
  },
  {
    id: "craftStoneKnife",
    label: "Craft Stone Knife",
    verb: "crafting a stone knife",
    durationMs: 15000,
    blurb: "Shape a small edge and bind it to a handle."
  },
  {
    id: "craftStoneAxe",
    label: "Craft Stone Axe",
    verb: "crafting a stone axe",
    durationMs: 15000,
    blurb: "Bind a chopping head to a short haft."
  },
  {
    id: "craftStoneSpear",
    label: "Craft Stone Spear",
    verb: "crafting a stone spear",
    durationMs: 15000,
    blurb: "Lash a stone point to a balanced shaft."
  },
  {
    id: "chopTrees",
    label: "Chop Trees",
    verb: "chopping trees",
    durationMs: 18000,
    blurb: "The first real push beyond loose branches."
  },
  {
    id: "huntSmallAnimals",
    label: "Hunt Small Animals",
    verb: "hunting small animals",
    durationMs: 28000,
    blurb: "Bring back whole rabbits or squirrels for later work."
  },
  {
    id: "butcherFish",
    label: "Butcher Fish",
    verb: "butchering fish",
    durationMs: 15000,
    blurb: "Clean carried fish into matching filets at half weight."
  },
  {
    id: "butcherRabbit",
    label: "Butcher Rabbit",
    verb: "butchering a rabbit",
    durationMs: 18000,
    blurb: "Break down a rabbit into useful parts."
  },
  {
    id: "butcherSquirrel",
    label: "Butcher Squirrel",
    verb: "butchering a squirrel",
    durationMs: 14000,
    blurb: "Break down a squirrel into useful parts."
  },
  {
    id: "cookRabbitMeat",
    label: "Cook Rabbit Meat",
    verb: "cooking rabbit meat",
    durationMs: 16000,
    blurb: "A careful turn over low flame."
  },
  {
    id: "cookSquirrelMeat",
    label: "Cook Squirrel Meat",
    verb: "cooking squirrel meat",
    durationMs: 16000,
    blurb: "A careful turn over low flame."
  },
  {
    id: "tanHide",
    label: "Tan Hide",
    verb: "working hide",
    durationMs: 36000,
    blurb: "Scrape, stretch, wait, repeat."
  }
];

export function getActionDefinition(id: string): ActionDefinition | undefined {
  return actionDefinitions.find((action) => action.id === id);
}
