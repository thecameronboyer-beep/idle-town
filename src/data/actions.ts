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
