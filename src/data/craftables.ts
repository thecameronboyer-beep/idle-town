import type { ActionId, BuildingId, CraftableDefinition, ToolId, ToolRole, ToolTier, WeaponStats } from "../types";

export interface ToolDefinition extends CraftableDefinition<ToolId> {
  craftActionId?: ActionId;
  maxDurability: number;
  roles: ToolRole[];
  roleTiers?: Partial<Record<ToolRole, number>>;
  tier: ToolTier;
  weapon?: WeaponStats;
  quickCraft?: boolean;
}

export const toolDefinitions: ToolDefinition[] = [
  {
    id: "stoneKnife",
    label: "Stone Skinning Knife",
    craftActionId: "craftStoneKnife",
    recipe: { stick: 1, stone: 1, flaxFiber: 1 },
    blurb: "A dedicated scraping edge for hide and bone recovery while butchering.",
    maxDurability: 18,
    roles: ["butchering"],
    roleTiers: { butchering: 1 },
    tier: "primitive",
    quickCraft: true
  },
  {
    id: "stoneAxe",
    label: "Stone Axe",
    craftActionId: "craftStoneAxe",
    recipe: { stick: 1, stone: 1, flaxFiber: 1 },
    blurb: "Heavy enough to bite into small trees.",
    maxDurability: 12,
    roles: ["woodcutting"],
    roleTiers: { woodcutting: 1 },
    tier: "primitive",
    quickCraft: true
  },
  {
    id: "stonePickAxe",
    label: "Stone Pick Axe",
    craftActionId: "craftStonePickAxe",
    recipe: { stick: 1, stone: 1, flaxFiber: 1 },
    blurb: "A pointed stone head for breaking stubborn ground.",
    maxDurability: 12,
    roles: ["mining"],
    roleTiers: { mining: 1 },
    tier: "primitive",
    quickCraft: true
  },
  {
    id: "stoneSpear",
    label: "Stone Spear",
    craftActionId: "craftStoneSpear",
    recipe: { stick: 1, stone: 1, flaxFiber: 1 },
    blurb: "A reach weapon for rabbits and squirrels.",
    maxDurability: 10,
    roles: ["hunting"],
    tier: "primitive",
    weapon: { damage: 2.4, speed: 0.9, hands: 2, range: "melee" },
    quickCraft: true
  },
  {
    id: "stoneDagger",
    label: "Stone Dagger",
    craftActionId: "craftStoneDagger",
    recipe: { stick: 1, stone: 2, flaxFiber: 1 },
    blurb: "A compact combat blade separate from the skinning knife.",
    maxDurability: 12,
    roles: ["hunting"],
    tier: "primitive",
    weapon: { damage: 2.2, speed: 1.2, hands: 1, range: "melee" },
    quickCraft: true
  },
  {
    id: "woodenClub",
    label: "Wooden Club",
    craftActionId: "craftWoodenClub",
    recipe: { wood: 2 },
    blurb: "A shaped hardwood weapon with more heft than loose branches.",
    maxDurability: 18,
    roles: ["hunting"],
    tier: "primitive",
    weapon: { damage: 3, speed: 0.9, hands: 1, range: "melee" },
    quickCraft: true
  },
  {
    id: "woodenTwoHandedClub",
    label: "Wooden 2H Club",
    craftActionId: "craftWoodenTwoHandedClub",
    recipe: { wood: 4 },
    blurb: "A heavy two-handed cudgel for decisive primitive strikes.",
    maxDurability: 24,
    roles: ["hunting"],
    tier: "primitive",
    weapon: { damage: 4, speed: 0.75, hands: 2, range: "melee" },
    quickCraft: true
  },
  {
    id: "woodenSword",
    label: "Wooden Sword",
    craftActionId: "craftWoodenSword",
    recipe: { wood: 2, flaxFiber: 1 },
    blurb: "A hardened wooden blade for controlled early combat.",
    maxDurability: 20,
    roles: ["hunting"],
    tier: "primitive",
    weapon: { damage: 3.4, speed: 1, hands: 1, range: "melee" },
    quickCraft: true
  },
  {
    id: "woodenTwoHandedSword",
    label: "Wooden 2H Sword",
    craftActionId: "craftWoodenTwoHandedSword",
    recipe: { wood: 4, flaxFiber: 2 },
    blurb: "A long wooden blade that trades speed for stronger blows.",
    maxDurability: 26,
    roles: ["hunting"],
    tier: "primitive",
    weapon: { damage: 4.3, speed: 0.85, hands: 2, range: "melee" },
    quickCraft: true
  },
  {
    id: "shortBow",
    label: "Short Bow",
    craftActionId: "craftShortBow",
    recipe: { wood: 2, flaxFiber: 3 },
    blurb: "A simple bow that brings safer range to small-game hunts.",
    maxDurability: 18,
    roles: ["hunting"],
    tier: "primitive",
    weapon: { damage: 3.8, speed: 1.1, hands: 2, range: "ranged" },
    quickCraft: true
  },
  {
    id: "woodenTotem",
    label: "Wooden Totem",
    craftActionId: "craftWoodenTotem",
    recipe: { wood: 3, flaxFiber: 2 },
    blurb: "A carved focus that steadies the hand during primitive combat.",
    maxDurability: 22,
    roles: ["hunting"],
    tier: "primitive",
    weapon: { damage: 3.2, speed: 0.8, hands: 1, range: "focus" },
    quickCraft: true
  },
  {
    id: "copperPickaxe",
    label: "Copper Pickaxe",
    recipe: { copperBar: 3, stick: 1, flaxFiber: 1 },
    blurb: "A softer metal pick with better balance than stone.",
    maxDurability: 24,
    roles: ["mining"],
    roleTiers: { mining: 2 },
    tier: "copper"
  },
  {
    id: "copperHatchet",
    label: "Copper Hatchet",
    recipe: { copperBar: 2, stick: 1, flaxFiber: 1 },
    blurb: "A compact copper chopping head lashed to a handle.",
    maxDurability: 22,
    roles: ["woodcutting"],
    roleTiers: { woodcutting: 2 },
    tier: "copper"
  },
  {
    id: "copperKnife",
    label: "Copper Knife",
    recipe: { copperBar: 1, stick: 1, flaxFiber: 1 },
    blurb: "A sharper, longer-lasting knife for camp work.",
    maxDurability: 30,
    roles: ["butchering"],
    roleTiers: { butchering: 2 },
    tier: "copper"
  },
  {
    id: "bronzePickaxe",
    label: "Bronze Pickaxe",
    recipe: { bronzeBar: 3, stick: 1, flaxFiber: 1 },
    blurb: "A sturdy bronze mining tool with a harder edge.",
    maxDurability: 42,
    roles: ["mining"],
    roleTiers: { mining: 3 },
    tier: "bronze"
  },
  {
    id: "bronzeHatchet",
    label: "Bronze Hatchet",
    recipe: { bronzeBar: 2, stick: 1, flaxFiber: 1 },
    blurb: "A bronze chopping tool that holds its bite.",
    maxDurability: 38,
    roles: ["woodcutting"],
    roleTiers: { woodcutting: 3 },
    tier: "bronze"
  },
  {
    id: "bronzeKnife",
    label: "Bronze Knife",
    recipe: { bronzeBar: 1, stick: 1, flaxFiber: 1 },
    blurb: "A reliable bronze edge for finer butchering.",
    maxDurability: 48,
    roles: ["butchering"],
    roleTiers: { butchering: 3 },
    tier: "bronze"
  },
  {
    id: "fishingPole",
    label: "Fishing Pole",
    craftActionId: "craftFishingPole",
    recipe: { stick: 1, flaxFiber: 1 },
    blurb: "A simple line and hook for working the river.",
    maxDurability: 16,
    roles: ["fishing"],
    roleTiers: { fishing: 1 },
    tier: "primitive",
    quickCraft: true
  },
  {
    id: "basket",
    label: "Basket",
    craftActionId: "craftBasket",
    recipe: { stick: 1, flaxFiber: 3 },
    blurb: "A one-hand woven carrier for hauling more from the wild.",
    maxDurability: 1,
    roles: [],
    tier: "primitive",
    quickCraft: true
  },
  {
    id: "leatherBackpack",
    label: "Leather Backpack",
    recipe: { leather: 10 },
    blurb: "A crude sling pouch for hauling more from the wild.",
    maxDurability: 1,
    roles: [],
    tier: "primitive"
  }
];

export const primitiveToolCraftDefinitions = toolDefinitions.filter(
  (tool): tool is ToolDefinition & { craftActionId: ActionId } => Boolean(tool.craftActionId && tool.quickCraft)
);

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
  },
  {
    id: "primitiveLoom",
    label: "Primitive Loom",
    recipe: { wood: 10, stick: 8, linenThread: 4 },
    blurb: "A wooden frame for stretching warp threads and weaving linen cloth."
  }
];
