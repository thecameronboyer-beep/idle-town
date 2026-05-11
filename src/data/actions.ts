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
    id: "gatherMushrooms",
    label: "Gather Mushrooms",
    verb: "gathering mushrooms",
    durationMs: 10000,
    blurb: "Search the meadow shade for small edible caps."
  },
  {
    id: "gatherBerries",
    label: "Gather Berries",
    verb: "gathering berries",
    durationMs: 10000,
    blurb: "Pick careful handfuls from the meadow brambles."
  },
  {
    id: "mineCoal",
    label: "Mine Coal",
    verb: "mining coal",
    durationMs: 30000,
    blurb: "Chip dark fuel from the mine wall."
  },
  {
    id: "mineCopper",
    label: "Mine Copper",
    verb: "mining copper",
    durationMs: 30000,
    blurb: "Break reddish ore from stone seams."
  },
  {
    id: "mineTin",
    label: "Mine Tin",
    verb: "mining tin",
    durationMs: 30000,
    blurb: "Work pale ore from fractured rock."
  },
  {
    id: "fishRiver",
    label: "Fishing River",
    verb: "fishing the river",
    durationMs: 15000,
    blurb: "Cast into the shallows for small river fish."
  },
  {
    id: "craftLowestTool",
    label: "Primitive Tools",
    verb: "balancing tool stock",
    durationMs: 15000,
    blurb: "Craft whichever primitive tool has the lowest current stock."
  },
  {
    id: "craftBasket",
    label: "Craft Basket",
    verb: "crafting a basket",
    durationMs: 15000,
    blurb: "Weave flax fibers around a simple stick frame."
  },
  {
    id: "craftFishingPole",
    label: "Craft Fishing Pole",
    verb: "crafting a fishing pole",
    durationMs: 15000,
    blurb: "Bind flax line to a flexible stick."
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
    id: "craftStonePickAxe",
    label: "Craft Stone Pick Axe",
    verb: "crafting a stone pick axe",
    durationMs: 15000,
    blurb: "Lash a pointed stone head to a sturdy handle."
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
    blurb: "Clean one carried fish into matching filets at half weight."
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
