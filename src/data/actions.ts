import type { ActionDefinition } from "../types";
import { alchemyRecipeDefinitions } from "./alchemy";
import { smithingRecipeDefinitions } from "./smithing";
import { textileRecipeDefinitions } from "./textiles";

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
    id: "gatherFlaxPlants",
    label: "Gather Flax Plants",
    verb: "cutting flax plants",
    durationMs: 11000,
    blurb: "Cut whole flax stalks for later retting and fiber work."
  },
  {
    id: "gatherFlaxFibers",
    label: "Gather Flax Fibers",
    verb: "pulling flax fibers",
    durationMs: 10000,
    blurb: "Thin stalks stripped by hand for future craft."
  },
  {
    id: "gatherMeadowIngredients",
    label: "Gather Meadow Ingredients",
    verb: "gathering meadow ingredients",
    durationMs: 12000,
    blurb: "Search the meadow for herbs, flowers, roots, and small fruit."
  },
  {
    id: "gatherForestIngredients",
    label: "Gather Forest Forage",
    verb: "gathering forest forage",
    durationMs: 14000,
    blurb: "Search the forest floor for berries, herbs, nuts, fungus, and resin."
  },
  {
    id: "gatherRiverIngredients",
    label: "Gather River Forage",
    verb: "gathering river forage",
    durationMs: 13500,
    blurb: "Search the riverbank for wetland herbs, roots, seeds, and fungus."
  },
  {
    id: "gatherMineIngredients",
    label: "Gather Mine Forage",
    verb: "gathering mine forage",
    durationMs: 17000,
    blurb: "Search the mine for cave herbs, fungus, roots, crystals, and lichens."
  },
  {
    id: "gatherDesertIngredients",
    label: "Gather Desert Forage",
    verb: "gathering desert forage",
    durationMs: 18000,
    blurb: "Search the desert scrub for hardy herbs, fruits, roots, flowers, and fungus."
  },
  {
    id: "gatherSand",
    label: "Gather Sand",
    verb: "gathering sand",
    durationMs: 10000,
    blurb: "Collect clean desert sand for furnace glasswork."
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
    id: "gatherWater",
    label: "Gather Water",
    verb: "gathering water",
    durationMs: 9000,
    blurb: "Carry usable river water back for camp cooking."
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
    id: "craftWoodenSpoon",
    label: "Craft Wooden Spoon",
    verb: "carving a wooden spoon",
    durationMs: 10000,
    blurb: "Carve a small wooden spoon for eating hot camp stew."
  },
  {
    id: "craftFishingPole",
    label: "Craft Fishing Pole",
    verb: "crafting a fishing pole",
    durationMs: 15000,
    blurb: "Bind flax line to a flexible stick."
  },
  {
    id: "craftWoodenBowl",
    label: "Craft Wooden Bowl",
    verb: "carving a wooden bowl",
    durationMs: 12000,
    blurb: "Carve a simple camp bowl from usable wood."
  },
  {
    id: "craftStoneKnife",
    label: "Craft Stone Skinning Knife",
    verb: "crafting a stone skinning knife",
    durationMs: 15000,
    blurb: "Shape a scraping edge for hide and bone recovery."
  },
  {
    id: "craftStoneDagger",
    label: "Craft Stone Dagger",
    verb: "crafting a stone dagger",
    durationMs: 15000,
    blurb: "Shape a compact combat blade separate from the skinning knife."
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
    id: "craftWoodenClub",
    label: "Craft Wooden Club",
    verb: "crafting a wooden club",
    durationMs: 16000,
    blurb: "Shape hardwood into a heavier primitive weapon."
  },
  {
    id: "craftWoodenTwoHandedClub",
    label: "Craft Wooden 2H Club",
    verb: "crafting a wooden two-handed club",
    durationMs: 18000,
    blurb: "Shape a larger club for slower, stronger blows."
  },
  {
    id: "craftWoodenSword",
    label: "Craft Wooden Sword",
    verb: "crafting a wooden sword",
    durationMs: 17000,
    blurb: "Harden and bind a wooden blade for controlled combat."
  },
  {
    id: "craftWoodenTwoHandedSword",
    label: "Craft Wooden 2H Sword",
    verb: "crafting a wooden two-handed sword",
    durationMs: 20000,
    blurb: "Shape a long wooden blade that favors power over speed."
  },
  {
    id: "craftShortBow",
    label: "Craft Short Bow",
    verb: "crafting a short bow",
    durationMs: 20000,
    blurb: "Bend wood and flax fiber into a simple ranged weapon."
  },
  {
    id: "craftWoodenTotem",
    label: "Craft Wooden Totem",
    verb: "carving a wooden totem",
    durationMs: 19000,
    blurb: "Carve a wooden focus for steadier primitive combat."
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
  },
  {
    id: "craftLeatherBackpack",
    label: "Craft Leather Backpack",
    verb: "crafting a leather backpack",
    durationMs: 15000,
    blurb: "Knot a crude leather sling pouch with a drawstring."
  },
  ...smithingRecipeDefinitions.map((recipe): ActionDefinition => ({
    id: recipe.actionId,
    label: recipe.label,
    verb: recipe.verb,
    durationMs: recipe.durationMs,
    blurb: recipe.blurb
  })),
  ...alchemyRecipeDefinitions.map((recipe): ActionDefinition => ({
    id: recipe.actionId,
    label: recipe.label,
    verb: recipe.verb,
    durationMs: recipe.durationMs,
    blurb: recipe.blurb
  })),
  ...textileRecipeDefinitions.map((recipe): ActionDefinition => ({
    id: recipe.actionId,
    label: recipe.label,
    verb: recipe.verb,
    durationMs: recipe.durationMs,
    blurb: recipe.blurb
  }))
];

export function getActionDefinition(id: string): ActionDefinition | undefined {
  return actionDefinitions.find((action) => action.id === id);
}
