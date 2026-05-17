import { getActionDefinition } from "../data/actions";
import {
  alchemyActionIds,
  brewingActionIds,
  getAlchemyRecipe,
  type AlchemyPanelId,
  type AlchemyRecipeKind
} from "../data/alchemy";
import { combatClassDefinitions, getCombatEnemyDefinition, getCombatLocationDefinition } from "../data/combat";
import { getCookingRecipeCost } from "../data/cooking";
import { buildingDefinitions, toolDefinitions } from "../data/craftables";
import {
  forageIngredientActionIds,
  forageResourceActionIds,
  getForageIngredientActionDefinition,
  getForageResourceActionDefinition,
  getForageResourceActionDefinitionsForLocation,
  getForageResourceActionIdsForLocation,
  getGatherableCategoryLabel,
  type ForageResourceActionDefinition,
  type GatherableIngredientCategory
} from "../data/gatherables";
import {
  getSmithingRecipe,
  metalworkingActionIds,
  smeltingActionIds,
  smithingActionIds,
  type SmithingMaterialId,
  type SmithingProductCategory
} from "../data/smithing";
import {
  getTextileRecipe,
  textileActionIds,
  textileFiberActionIds,
  textileRettingActionIds,
  textileSewingActionIds,
  textileSpinningActionIds,
  textileToolingActionIds,
  textileWeavingActionIds
} from "../data/textiles";
import {
  formatResourceAmount,
  getResourceLabel,
  isWholeCountResource,
  isWeightedResource,
  resourceDefinitions,
  resourceOrder
} from "../data/resources";
import aloeLeavesIconUrl from "../assets/items/aloe-leaves-icon.png";
import boneIconUrl from "../assets/items/bone-icon.png";
import brookSticklebackIconUrl from "../assets/items/brook-stickleback-icon.png";
import basketEquippedSlotUrl from "../assets/items/basket-background-1-border-1.png";
import cameronPortraitUrl from "../assets/characters/cameron-portrait.png";
import beachLocationIconUrl from "../assets/locations/beach-location-icon.png";
import campLocationIconUrl from "../assets/locations/camp-location-icon.png";
import campfireLitUrl from "../assets/buildings/campfire-2x2.png";
import campfireUnlitUrl from "../assets/buildings/campfire-unlit-2x2.png";
import carrotIconUrl from "../assets/items/carrot-icon.png";
import chamomileIconUrl from "../assets/items/chamomile-icon.png";
import cloverIconUrl from "../assets/items/clover-icon.png";
import coalIconUrl from "../assets/items/coal-icon.png";
import copperIconUrl from "../assets/items/copper-icon.png";
import crystalBloomIconUrl from "../assets/items/crystal-bloom-icon.png";
import craftMaterialsBundleButtonUrl from "../assets/items/craft-materials-bundle-button.png";
import dandelionIconUrl from "../assets/items/dandelion-icon.png";
import earthrootIconUrl from "../assets/items/earthroot-icon.png";
import fireBlossomIconUrl from "../assets/items/fire-blossom-icon.png";
import fishFiletIconUrl from "../assets/items/fish-filet-icon.png";
import fishingPoleEquippedSlotUrl from "../assets/items/fishing-pole-background-1-border-1.png";
import flaxFiberIconUrl from "../assets/items/flax-fiber-icon.png";
import flaxPlantIconUrl from "../assets/items/flax-plant-icon.png";
import forestLocationIconUrl from "../assets/locations/forest-location-icon.png";
import desertLocationIconUrl from "../assets/locations/desert-location-icon.png";
import fishingSkillBannerUrl from "../assets/skills/fishing-skill-banner.png";
import foragingSkillBannerUrl from "../assets/skills/foraging-skill-banner.png";
import miningSkillBannerUrl from "../assets/skills/mining-skill-banner.png";
import berryIconUrl from "../assets/items/berry-icon.png";
import blueberryIconUrl from "../assets/items/blueberry-icon.png";
import elderFlowersIconUrl from "../assets/items/elder-flowers-icon.png";
import fennelIconUrl from "../assets/items/fennel-icon.png";
import hearthcapIconUrl from "../assets/items/hearthcap-icon.png";
import hideIconUrl from "../assets/items/hide-icon.png";
import leatherBackpackEquippedSlotUrl from "../assets/items/leather-backpack-equipped-slot.png";
import lavenderIconUrl from "../assets/items/lavender-icon.png";
import marshIrisIconUrl from "../assets/items/marsh-iris-icon.png";
import meadowLocationIconUrl from "../assets/locations/meadow-location-icon-v2.png";
import mineLocationIconUrl from "../assets/locations/mine-location-icon.png";
import mintIconUrl from "../assets/items/mint-icon.png";
import minnowIconUrl from "../assets/items/minnow-icon.png";
import mudskipperIconUrl from "../assets/items/mudskipper-icon.png";
import mushroomIconUrl from "../assets/items/mushroom-icon.png";
import palecapFlowersIconUrl from "../assets/items/palecap-flowers-icon.png";
import pebblePerchIconUrl from "../assets/items/pebble-perch-icon.png";
import plantainLeafIconUrl from "../assets/items/plantain-leaf-icon.png";
import rabbitIconUrl from "../assets/items/rabbit-icon.png";
import rabbitMeatIconUrl from "../assets/items/rabbit-meat-icon.png";
import riverLocationIconUrl from "../assets/locations/river-location-icon-v2.png";
import roseHipsIconUrl from "../assets/items/rose-hips-icon.png";
import sorrelIconUrl from "../assets/items/sorrel-icon.png";
import squirrelIconUrl from "../assets/items/squirrel-icon.png";
import squirrelMeatIconUrl from "../assets/items/squirrel-meat-icon.png";
import stickIconUrl from "../assets/items/stick-icon.png";
import stoneAxeEquippedSlotUrl from "../assets/items/stone-hatchet-background-1-border-1.png";
import stoneKnifeEquippedSlotUrl from "../assets/items/stone-knife-background-1-border-1.png";
import stonePickAxeEquippedSlotUrl from "../assets/items/stone-pick-axe-background-1-border-1.png";
import stoneSpearEquippedSlotUrl from "../assets/items/stone-spear-background-1-border-1.png";
import stoneIconUrl from "../assets/items/stone-icon.png";
import stoneLoachIconUrl from "../assets/items/stone-loach-icon.png";
import stoneFurnaceUrl from "../assets/buildings/stone-furnace-2x2.png";
import shortBowEquippedSlotUrl from "../assets/items/short-bow-background-1-border-1.png";
import strawberryIconUrl from "../assets/items/strawberry-icon.png";
import sunbloomPetalsIconUrl from "../assets/items/sunbloom-petals-icon.png";
import sunheartTuberIconUrl from "../assets/items/sunheart-tuber-icon.png";
import tinIconUrl from "../assets/items/tin-icon.png";
import hideTentUrl from "../assets/buildings/hide-tent-2x2.png";
import tanningRackUrl from "../assets/buildings/tanning-rack-2x2.png";
import trilliumBlossomsIconUrl from "../assets/items/trillium-blossoms-icon.png";
import waterLiliesIconUrl from "../assets/items/water-lilies-icon.png";
import woodenBowlIconUrl from "../assets/items/wooden-bowl-background-1-border-1.png";
import woodenClubEquippedSlotUrl from "../assets/items/wooden-club-background-1-border-1.png";
import woodenSpoonIconUrl from "../assets/items/wooden-spoon-background-1-border-1.png";
import woodenSwordEquippedSlotUrl from "../assets/items/wooden-sword-background-1-border-1.png";
import woodenTotemEquippedSlotUrl from "../assets/items/wooden-totem-background-1-border-1.png";
import woodenTwoHandedClubEquippedSlotUrl from "../assets/items/wooden-two-handed-club-background-1-border-1.png";
import woodenTwoHandedSwordEquippedSlotUrl from "../assets/items/wooden-two-handed-sword-background-1-border-1.png";
import wildGarlicIconUrl from "../assets/items/wild-garlic-icon.png";
import wildOnionIconUrl from "../assets/items/wild-onion-icon.png";
import woodIconUrl from "../assets/items/wood-icon.png";
import woodVioletsIconUrl from "../assets/items/wood-violets-icon.png";
import yarrowIconUrl from "../assets/items/yarrow-icon.png";
import { getCampfireRemainingMs, isCampfireLit } from "../systems/buildings";
import { getBuildingCount, getPopulationCapacity, getPopulationCount } from "../systems/camp";
import {
  dispatchCharacterToCombat,
  getCombatUnitForCharacter,
  getLivingEnemyUnits,
  isCharacterDispatched,
  recallCharacterFromCombat
} from "../systems/combat";
import {
  formatCombatClassXp,
  getCharacterCombatLoadout,
  getCombatClassProgressView
} from "../systems/combatClasses";
import { buildStructure, getMissingCostText } from "../systems/crafting";
import {
  BASE_CHARACTER_MAX_WEIGHT,
  describeCost,
  getCharacterInventory,
  getCharacterInventoryWeight,
  getCharacterMaxWeight,
  getResourceQuantity,
  hasCost
} from "../systems/inventory";
import { clamp, formatDuration } from "../systems/math";
import {
  assignActionLoopToCharacter,
  canInsertActionInSavedLoop,
  createActionLoop,
  deleteActionLoop,
  getActionLoop,
  getActionLoopAdvanceRule,
  getLowestQuantityCraftAction,
  canStartAction,
  depositCarriedResources,
  getActionCost,
  getCurrentAction,
  getCurrentActions,
  getActionProgress,
  insertActionInSavedLoop,
  removeActionFromSavedLoop,
  startAction,
  stopAction,
  updateActionLoopName,
  updateActionLoopStepAction,
  updateActionLoopStepAdvanceRule,
  updateActionLoopStepLocation
} from "../systems/actions";
import { isCarryAction } from "../systems/actionRouting";
import { getLogScope } from "../systems/log";
import {
  getActionLockReason,
  getBuildingUnlockReason,
  isActionUnlocked,
  isBuildingUnlocked,
  isBuildingVisible
} from "../systems/progression";
import {
  FORAGING_SKILL_TREE_UNLOCK_LEVEL,
  foragingSkillTreeDefinitions,
  formatSkillXp,
  getActionSkillXp,
  getBuildingSkillXp,
  getForagingSkillTreeDefinition,
  getForagingSkillTreeSelectionLockReason,
  getSkillDefinition,
  getSkillIdForAction,
  getSkillProgress,
  isForagingSkillTreeCategory,
  isSkillId,
  prestigeSkill,
  selectForagingSkillTree,
  skillDefinitions
} from "../systems/skills";
import { getFurnaceFuelStatus, getSmithingRecipeOutputText, isSmeltingAction } from "../systems/smithing";
import { getAlchemyRecipeOutputText, getAlchemyStationStatus } from "../systems/alchemy";
import { getTextileRecipeOutputText } from "../systems/textiles";
import { getBestUsableToolForRole, getMaxToolDurability } from "../systems/tools";
import {
  canQueueCookingRecipe,
  getActiveCookingEntry,
  getAvailableCookingRecipes,
  getCookingProgress,
  getCookingRecipeLockReason,
  getCookingRecipeOutputText,
  getCookingRecipeRequirementText,
  getCookingStationStatus,
  queueCookingRecipe
} from "../systems/cooking";
import { getGatheringTableSummary } from "../systems/gathering";
import { canEatFood, eatFood, getEatFoodLockReason, getFoodEffectPreview, isEdibleFood } from "../systems/needs";
import type {
  ActionId,
  ActionLoop,
  ActionLoopAdvanceMode,
  ActionLoopAdvanceRule,
  ActionLoopResourceScope,
  BuildingId,
  CharacterLocationId,
  CookingRecipeDefinition,
  CookingRecipeId,
  CombatUnit,
  GameState,
  Inventory,
  LocationId,
  LogEntry,
  LogScope,
  ResourceDefinition,
  ResourceId,
  ForagingSkillTreeCategory,
  SkillId,
  ToolId
} from "../types";

type ActionFilterId =
  | "crafting"
  | "smithing"
  | "alchemy"
  | "textiles"
  | "foraging"
  | "mining"
  | "fishing"
  | "woodcutting"
  | "hunting"
  | "butchering"
  | "cooking"
  | "leatherworking";

type ActionFilter = {
  id: ActionFilterId;
  label: string;
  actionIds?: ActionId[];
};

const characterPortraitUrls: Partial<Record<string, string>> = {
  cameron: cameronPortraitUrl
};

type ActionCategoryId = "gather" | "processing" | "camp";

type ActionCategory = {
  id: ActionCategoryId;
  label: string;
  filterIds: ActionFilterId[];
};

type CharacterDetailTab = "inventory" | "equipment" | "skills" | "log";
type InventorySource = "camp" | "character";
type ActionLoopTarget = { loopId: string; afterIndex: number } | null;
type ActionLoopLocationMenu = { loopId: string; index: number } | null;
type ActionLoopSkillMenu = { loopId: string; index: number } | null;
type CraftingMaterialId = "primitive";
type CraftingProductCategory = "tool" | "weapon";
type SkillGroup = {
  label: string;
  skillIds: SkillId[];
};

type ActionLoopSkillOption = {
  skillId: SkillId;
  actionId: ActionId;
};

type EquipmentPlaceholderGroup = {
  label: string;
  slots: string[];
};

type EquipmentStat = {
  label: string;
  value: string;
};

type ActionTooltipRow = {
  label: string;
  value: string;
};

type LocationDefinition = {
  id: LocationId;
  label: string;
  iconUrl: string;
  actionIds: ActionId[];
};

type LocationImageDefinition = {
  label: string;
  iconUrl: string;
};
type CurrentActionBarVisual = {
  label: string;
  skillId?: SkillId;
  bannerUrl?: string;
};
type ForageDisplayCategory = GatherableIngredientCategory | "fungal" | "staple";
type CampInventoryResourceGroup = {
  id: string;
  label: string;
  ids: ResourceId[];
  usePlaceholderIcons?: boolean;
};

const actionLoopAdvanceOptions: Array<{ id: ActionLoopAdvanceMode; label: string }> = [
  { id: "smart", label: "Smart default" },
  { id: "afterCompletion", label: "After one completion" },
  { id: "whenInventoryFull", label: "When pack is full" },
  { id: "whenResourceAtLeast", label: "When stock reaches" },
  { id: "whenCannotStart", label: "When blocked" },
  { id: "manual", label: "Stay on this step" }
];

const forageDisplayCategories: ForageDisplayCategory[] = [
  "herb",
  "flower",
  "berry",
  "fruit",
  "fungal",
  "root",
  "vegetable",
  "staple",
  "seasoning"
];

const stapleForageTags = new Set(["bean", "grain", "nut", "pod", "succulent", "thorn", "tuber"]);

const foragingSkillTreeCategoryFileNames: Record<ForagingSkillTreeCategory, string> = {
  resources: "resources-background-1-border-1.png",
  herb: "herb-background-1-border-1.png",
  flower: "flower-background-1-border-1.png",
  berries: "berries-background-1-border-1.png",
  fruit: "fruit-background-1-border-1.png",
  fungal: "fungal-background-1-border-1.png",
  roots: "roots-background-1-border-1.png",
  vegetables: "vegetables-background-1-border-1.png",
  staples: "staples-background-1-border-1.png",
  seasonings: "seasonings-background-1-border-1.png"
};

const foragingSkillTreeCategoryAssets = import.meta.glob(
  "../assets/items/{resources,herb,flower,berries,fruit,fungal,roots,vegetables,staples,seasonings}-background-1-border-1.png",
  { eager: true, query: "?url", import: "default" }
) as Record<string, string>;

const foragingSkillTreeCategoryAssetUrls = new Map(
  Object.entries(foragingSkillTreeCategoryAssets).map(([path, url]) => [getPathFileName(path), url])
);

const characterSkillBannerUrls: Partial<Record<SkillId, string>> = {
  foraging: foragingSkillBannerUrl,
  mining: miningSkillBannerUrl,
  fishing: fishingSkillBannerUrl
};

const actionFilters: ActionFilter[] = [
  {
    id: "foraging",
    label: "Forage",
    actionIds: [
      "gatherSticks",
      "gatherStones",
      "gatherFlaxPlants",
      "gatherFlaxFibers",
      "gatherMeadowIngredients",
      "gatherForestIngredients",
      "gatherRiverIngredients",
      "gatherMineIngredients",
      "gatherDesertIngredients",
      ...forageIngredientActionIds,
      ...forageResourceActionIds,
      "gatherSand",
      "gatherWater"
    ]
  },
  {
    id: "fishing",
    label: "Fishing",
    actionIds: ["fishRiver"]
  },
  {
    id: "mining",
    label: "Mining",
    actionIds: ["mineCoal", "mineCopper", "mineTin"]
  },
  {
    id: "hunting",
    label: "Hunting",
    actionIds: ["huntSmallAnimals"]
  },
  {
    id: "woodcutting",
    label: "Woodcutting",
    actionIds: ["chopTrees"]
  },
  {
    id: "crafting",
    label: "Crafting",
    actionIds: [
      "craftLowestTool",
      "craftBasket",
      "craftWoodenSpoon",
      "craftFishingPole",
      "craftWoodenBowl",
      "craftStoneKnife",
      "craftStoneAxe",
      "craftStonePickAxe",
      "craftStoneSpear",
      "craftWoodenClub",
      "craftWoodenTwoHandedClub",
      "craftWoodenSword",
      "craftWoodenTwoHandedSword",
      "craftShortBow",
      "craftWoodenTotem"
    ]
  },
  {
    id: "smithing",
    label: "Smithing",
    actionIds: [...smithingActionIds]
  },
  {
    id: "alchemy",
    label: "Alchemy",
    actionIds: [...alchemyActionIds]
  },
  {
    id: "textiles",
    label: "Tailoring",
    actionIds: [...textileActionIds]
  },
  {
    id: "butchering",
    label: "Butchering",
    actionIds: ["butcherFish", "butcherRabbit", "butcherSquirrel"]
  },
  {
    id: "cooking",
    label: "Cooking",
    actionIds: []
  },
  {
    id: "leatherworking",
    label: "Leatherworking",
    actionIds: ["tanHide", "craftLeatherBackpack"]
  }
];

const actionCategories: ActionCategory[] = [
  {
    id: "gather",
    label: "Gather",
    filterIds: ["foraging", "mining", "fishing", "hunting", "woodcutting"]
  },
  {
    id: "processing",
    label: "Processing",
    filterIds: ["crafting", "smithing", "alchemy", "textiles", "butchering", "cooking", "leatherworking"]
  },
  {
    id: "camp",
    label: "Camp",
    filterIds: []
  }
];

const filterSkillIds: Record<ActionFilterId, SkillId> = {
  crafting: "crafting",
  smithing: "smithing",
  alchemy: "alchemy",
  textiles: "textiles",
  foraging: "foraging",
  mining: "mining",
  fishing: "fishing",
  woodcutting: "woodcutting",
  hunting: "hunting",
  butchering: "butchering",
  cooking: "cooking",
  leatherworking: "leatherworking"
};

const actionLoopSkillDefaultActions: Partial<Record<SkillId, ActionId>> = {
  butchering: "butcherRabbit"
};

const actionLoopSkillOptions: ActionLoopSkillOption[] = actionFilters.flatMap((filter) => {
  const skillId = filterSkillIds[filter.id];
  const actionId = actionLoopSkillDefaultActions[skillId] ?? filter.actionIds?.[0];
  return actionId ? [{ skillId, actionId }] : [];
});

const skillTileVisuals: Record<SkillId, { shortLabel: string; accent: string; shade: string }> = {
  foraging: { shortLabel: "Fg", accent: "#7ba867", shade: "rgba(123, 168, 103, 0.38)" },
  mining: { shortLabel: "Mi", accent: "#9ca3af", shade: "rgba(104, 116, 139, 0.42)" },
  fishing: { shortLabel: "Fi", accent: "#73a8a0", shade: "rgba(72, 139, 168, 0.38)" },
  woodcutting: { shortLabel: "Wd", accent: "#b88955", shade: "rgba(124, 91, 59, 0.44)" },
  hunting: { shortLabel: "Hu", accent: "#d6a451", shade: "rgba(159, 89, 63, 0.36)" },
  crafting: { shortLabel: "Cr", accent: "#c7b27a", shade: "rgba(199, 178, 122, 0.34)" },
  smithing: { shortLabel: "Sm", accent: "#d08b6a", shade: "rgba(145, 76, 60, 0.42)" },
  alchemy: { shortLabel: "Al", accent: "#9bc96c", shade: "rgba(82, 123, 82, 0.4)" },
  textiles: { shortLabel: "Ta", accent: "#caa0c8", shade: "rgba(122, 85, 128, 0.36)" },
  butchering: { shortLabel: "Bu", accent: "#c96458", shade: "rgba(135, 55, 50, 0.42)" },
  cooking: { shortLabel: "Co", accent: "#e0b05e", shade: "rgba(156, 94, 45, 0.38)" },
  leatherworking: { shortLabel: "Le", accent: "#a8784f", shade: "rgba(109, 72, 48, 0.42)" },
  construction: { shortLabel: "Cn", accent: "#b7a781", shade: "rgba(112, 103, 79, 0.38)" },
  agility: { shortLabel: "Ag", accent: "#8fc4b7", shade: "rgba(81, 129, 120, 0.38)" }
};

const characterSkillGroups: SkillGroup[] = [
  { label: "Gather", skillIds: ["foraging", "mining", "fishing", "woodcutting", "hunting"] },
  { label: "Process", skillIds: ["crafting", "smithing", "alchemy", "textiles", "butchering", "cooking", "leatherworking"] },
  { label: "Combat", skillIds: [] },
  { label: "Other", skillIds: ["construction", "agility"] }
];

const smithingMaterialLabels: Record<SmithingMaterialId, string> = {
  copper: "Copper Bar",
  bronze: "Bronze Bar"
};

const smithingProductCategories: Array<{ id: SmithingProductCategory; label: string }> = [
  { id: "tool", label: "Tool" },
  { id: "weapon", label: "Weapon" },
  { id: "armor", label: "Armor" }
];

const alchemyPanelTabs: Array<{ id: AlchemyPanelId; label: string; emptyLabel: string }> = [
  { id: "brewing", label: "Brewing", emptyLabel: "Brewing" },
  { id: "transmutation", label: "Transmute", emptyLabel: "Transmutation" },
  { id: "decomposition", label: "Decomp", emptyLabel: "Decomposition" }
];

const alchemyRecipeKindLabels: Record<AlchemyRecipeKind, string> = {
  vessel: "Glassware",
  potion: "Potions"
};

const craftingMaterialLabels: Record<CraftingMaterialId, string> = {
  primitive: "Primitive"
};

const craftingMaterialDescriptions: Record<CraftingMaterialId, string> = {
  primitive: "Wood, stone, fiber"
};

const craftingProductCategories: Array<{ id: CraftingProductCategory; label: string }> = [
  { id: "tool", label: "Tools" },
  { id: "weapon", label: "Weapons" }
];

const craftingRecipeMetadata: Partial<
  Record<ActionId, { material: CraftingMaterialId; productCategory: CraftingProductCategory }>
> = {
  craftLowestTool: { material: "primitive", productCategory: "tool" },
  craftBasket: { material: "primitive", productCategory: "tool" },
  craftWoodenSpoon: { material: "primitive", productCategory: "tool" },
  craftFishingPole: { material: "primitive", productCategory: "tool" },
  craftWoodenBowl: { material: "primitive", productCategory: "tool" },
  craftStoneKnife: { material: "primitive", productCategory: "tool" },
  craftStoneAxe: { material: "primitive", productCategory: "tool" },
  craftStonePickAxe: { material: "primitive", productCategory: "tool" },
  craftStoneSpear: { material: "primitive", productCategory: "weapon" },
  craftWoodenClub: { material: "primitive", productCategory: "weapon" },
  craftWoodenTwoHandedClub: { material: "primitive", productCategory: "weapon" },
  craftWoodenSword: { material: "primitive", productCategory: "weapon" },
  craftWoodenTwoHandedSword: { material: "primitive", productCategory: "weapon" },
  craftShortBow: { material: "primitive", productCategory: "weapon" },
  craftWoodenTotem: { material: "primitive", productCategory: "weapon" }
};

const locationDefinitions: LocationDefinition[] = [
  {
    id: "meadow",
    label: "Meadow",
    iconUrl: meadowLocationIconUrl,
    actionIds: ["gatherSticks", "gatherStones", "gatherFlaxPlants", ...getForageResourceActionIdsForLocation("meadow")]
  },
  {
    id: "river",
    label: "River",
    iconUrl: riverLocationIconUrl,
    actionIds: ["gatherStones", "gatherFlaxFibers", "gatherWater", ...getForageResourceActionIdsForLocation("river")]
  },
  {
    id: "beach",
    label: "Beach",
    iconUrl: beachLocationIconUrl,
    actionIds: [...getForageResourceActionIdsForLocation("beach")]
  },
  {
    id: "forest",
    label: "Forest",
    iconUrl: forestLocationIconUrl,
    actionIds: [...getForageResourceActionIdsForLocation("forest")]
  },
  {
    id: "mine",
    label: "Mine",
    iconUrl: mineLocationIconUrl,
    actionIds: [...getForageResourceActionIdsForLocation("mine")]
  },
  {
    id: "desert",
    label: "Desert",
    iconUrl: desertLocationIconUrl,
    actionIds: ["gatherSand", ...getForageResourceActionIdsForLocation("desert")]
  }
];

const campLocationDefinition: LocationImageDefinition = {
  label: "Camp",
  iconUrl: campLocationIconUrl
};

const EQUIPMENT_SLOT_COUNT = 24;
const equipmentToolSlots: Array<ToolId | null> = [
  "fishingPole",
  "stoneKnife",
  "copperKnife",
  "bronzeKnife",
  "stoneSpear",
  "woodenClub",
  "woodenTwoHandedClub",
  "woodenSword",
  "woodenTwoHandedSword",
  "shortBow",
  "woodenTotem",
  "stoneAxe",
  "copperHatchet",
  "bronzeHatchet",
  "stonePickAxe",
  "copperPickaxe",
  "bronzePickaxe",
  "basket",
  "leatherBackpack",
  null,
  null,
  null,
  null,
  null
];
const equipmentPlaceholderGroups: EquipmentPlaceholderGroup[] = [
  {
    label: "Armor",
    slots: ["Head", "Face", "Neck", "Shoulders", "Chest", "Backpack", "Cape", "Arms", "Hands", "Waist", "Legs", "Feet"]
  },
  {
    label: "Accessories",
    slots: ["Ring Slot 1", "Ring Slot 2", "Toe Ring 1", "Toe Ring 2", "Bracelet 1", "Bracelet 2", "Earring 1", "Earring 2"]
  },
  {
    label: "Held Gear",
    slots: ["Main Hand", "Off Hand", "Quiver", "Ammo Belt"]
  }
];
const equippedSlotImages: Partial<Record<ToolId, string>> = {
  basket: basketEquippedSlotUrl,
  fishingPole: fishingPoleEquippedSlotUrl,
  leatherBackpack: leatherBackpackEquippedSlotUrl,
  stoneKnife: stoneKnifeEquippedSlotUrl,
  stoneAxe: stoneAxeEquippedSlotUrl,
  stonePickAxe: stonePickAxeEquippedSlotUrl,
  stoneSpear: stoneSpearEquippedSlotUrl,
  woodenClub: woodenClubEquippedSlotUrl,
  woodenTwoHandedClub: woodenTwoHandedClubEquippedSlotUrl,
  woodenSword: woodenSwordEquippedSlotUrl,
  woodenTwoHandedSword: woodenTwoHandedSwordEquippedSlotUrl,
  shortBow: shortBowEquippedSlotUrl,
  woodenTotem: woodenTotemEquippedSlotUrl
};
const emptySlotLabels: Partial<Record<ToolId, string>> = {
  basket: "Basket",
  fishingPole: "Pole",
  leatherBackpack: "Backpack",
  stoneKnife: "Knife",
  stoneAxe: "Hatchet",
  stonePickAxe: "Pick",
  stoneSpear: "Spear",
  woodenClub: "Club",
  woodenTwoHandedClub: "2H Club",
  woodenSword: "Sword",
  woodenTwoHandedSword: "2H Sword",
  shortBow: "Bow",
  woodenTotem: "Totem"
};

const resourceSlotImages: Partial<Record<ResourceId, string>> = {
  aloeLeaves: aloeLeavesIconUrl,
  blueberries: blueberryIconUrl,
  bone: boneIconUrl,
  brookStickleback: brookSticklebackIconUrl,
  brookSticklebackFilet: fishFiletIconUrl,
  coal: coalIconUrl,
  copper: copperIconUrl,
  crystalBlooms: crystalBloomIconUrl,
  minnowFilet: fishFiletIconUrl,
  mudskipperFilet: fishFiletIconUrl,
  pebblePerchFilet: fishFiletIconUrl,
  stoneLoachFilet: fishFiletIconUrl,
  flaxFiber: flaxFiberIconUrl,
  flaxPlant: flaxPlantIconUrl,
  chamomile: chamomileIconUrl,
  clover: cloverIconUrl,
  dandelionGreens: dandelionIconUrl,
  dirtyBowl: woodIconUrl,
  earthroot: earthrootIconUrl,
  elderflowers: elderFlowersIconUrl,
  fennel: fennelIconUrl,
  fireBlossom: fireBlossomIconUrl,
  hearthcap: hearthcapIconUrl,
  hide: hideIconUrl,
  lavender: lavenderIconUrl,
  marshIris: marshIrisIconUrl,
  meadowStew: mushroomIconUrl,
  minnow: minnowIconUrl,
  mint: mintIconUrl,
  mudskipper: mudskipperIconUrl,
  palecapFlowers: palecapFlowersIconUrl,
  pebblePerch: pebblePerchIconUrl,
  plantainLeaf: plantainLeafIconUrl,
  rabbit: rabbitIconUrl,
  rabbitMeat: rabbitMeatIconUrl,
  rabbitStew: rabbitIconUrl,
  roseHips: roseHipsIconUrl,
  rootStew: mushroomIconUrl,
  sorrel: sorrelIconUrl,
  squirrelHerbStew: squirrelIconUrl,
  squirrel: squirrelIconUrl,
  squirrelMeat: squirrelMeatIconUrl,
  strawberries: strawberryIconUrl,
  sunbloomPetals: sunbloomPetalsIconUrl,
  sunrootTubers: sunheartTuberIconUrl,
  stick: stickIconUrl,
  stone: stoneIconUrl,
  stoneLoach: stoneLoachIconUrl,
  tin: tinIconUrl,
  trilliumBlossoms: trilliumBlossomsIconUrl,
  water: riverLocationIconUrl,
  waterLilies: waterLiliesIconUrl,
  wildCarrot: carrotIconUrl,
  wildGarlic: wildGarlicIconUrl,
  wildGarlicRabbitStew: rabbitIconUrl,
  wildOnion: wildOnionIconUrl,
  woodViolets: woodVioletsIconUrl,
  yarrow: yarrowIconUrl,
  woodenBowl: woodenBowlIconUrl,
  woodenSpoon: woodenSpoonIconUrl,
  wood: woodIconUrl
};

const toolEquipmentStats: Partial<Record<ToolId, EquipmentStat[]>> = {
  basket: [
    { label: "Slot", value: "Carry tool" },
    { label: "Effect", value: "+5 lb carry capacity" },
    { label: "Capacity", value: "15 lb equipped" }
  ],
  leatherBackpack: [
    { label: "Slot", value: "Carry tool" },
    { label: "Effect", value: "+15 lb carry capacity" },
    { label: "Capacity", value: "25 lb equipped" }
  ],
  fishingPole: [
    { label: "Slot", value: "Fishing tool" },
    { label: "Effect", value: "Fishing unlocked" },
    { label: "Use", value: "River and beach fishing" }
  ],
  stoneKnife: [
    { label: "Slot", value: "Butchering weapon" },
    { label: "Unlocks", value: "Hide and bone recovery" },
    { label: "Use", value: "Butchering and combat" }
  ],
  stoneAxe: [
    { label: "Slot", value: "Woodcutting tool" },
    { label: "Effect", value: "Chop Trees unlocked" },
    { label: "Wood yield", value: "2-4" }
  ],
  stonePickAxe: [
    { label: "Slot", value: "Mining tool" },
    { label: "Effect", value: "Future mining work" },
    { label: "Use", value: "Breaking stone" }
  ],
  stoneSpear: [
    { label: "Slot", value: "Two-handed weapon" },
    { label: "Effect", value: "Hunt Small Animals unlocked" },
    { label: "Targets", value: "Rabbit, Squirrel" }
  ],
  copperPickaxe: [
    { label: "Slot", value: "Mining tool" },
    { label: "Effect", value: "Mining upgrade" },
    { label: "Durability", value: "2x stone" }
  ],
  copperHatchet: [
    { label: "Slot", value: "Woodcutting tool" },
    { label: "Effect", value: "Woodcutting upgrade" },
    { label: "Durability", value: "Better than stone" }
  ],
  copperKnife: [
    { label: "Slot", value: "Butchering tool" },
    { label: "Effect", value: "Cleaner butchering" },
    { label: "Durability", value: "Better than stone" }
  ],
  bronzePickaxe: [
    { label: "Slot", value: "Mining tool" },
    { label: "Effect", value: "Best early mining" },
    { label: "Durability", value: "Better than copper" }
  ],
  bronzeHatchet: [
    { label: "Slot", value: "Woodcutting tool" },
    { label: "Effect", value: "Best early chopping" },
    { label: "Durability", value: "Better than copper" }
  ],
  bronzeKnife: [
    { label: "Slot", value: "Butchering tool" },
    { label: "Effect", value: "Best early butchering" },
    { label: "Durability", value: "Better than copper" }
  ]
};

function getToolEquipmentStats(toolId: ToolId): EquipmentStat[] {
  const definition = toolDefinitions.find((tool) => tool.id === toolId);
  const stats = toolEquipmentStats[toolId] ?? [];
  if (!definition?.weapon) {
    return stats;
  }

  return [
    { label: "Slot", value: `${definition.weapon.hands}H ${labelWeaponRange(definition.weapon.range)} weapon` },
    { label: "Power", value: formatStatNumber(definition.weapon.damage) },
    { label: "Speed", value: `${formatStatNumber(definition.weapon.speed)}x` },
    { label: "Tier", value: labelToolTier(definition.tier) },
    ...stats.filter((stat) => stat.label !== "Slot")
  ];
}

function labelWeaponRange(range: "melee" | "ranged" | "focus"): string {
  switch (range) {
    case "ranged":
      return "ranged";
    case "focus":
      return "focus";
    case "melee":
      return "melee";
  }
}

function labelToolTier(tier: "primitive" | "copper" | "bronze"): string {
  return tier[0].toUpperCase() + tier.slice(1);
}

function formatStatNumber(value: number): string {
  return Number.isInteger(value) ? `${value}` : value.toFixed(1);
}

type RenderHandlers = {
  requestRender: () => void;
  persist: () => void;
  reset: () => void;
  getNow: () => number;
  getTestRewardMultiplier: () => 1 | 10 | 100;
  setTestRewardMultiplier: (multiplier: 10 | 100) => void;
};

export function createRenderer(root: HTMLElement, handlers: RenderHandlers): (state: GameState, now?: number) => void {
  let activeActionCategory: ActionCategoryId = "gather";
  let activeActionFilter: ActionFilterId = "foraging";
  let activeLocation: LocationId = "meadow";
  let activeCharacterDetailTab: CharacterDetailTab = "inventory";
  let selectedCraftingMaterial: CraftingMaterialId = "primitive";
  let selectedSmithingMaterial: SmithingMaterialId = "copper";
  let selectedAlchemyPanel: AlchemyPanelId = "brewing";
  let campLogVisible = false;
  let partyPanelVisible = false;
  let characterPanelVisible = false;
  let characterDetailsVisible = false;
  let foragingSkillTreePanelVisible = false;
  let combatPanelVisible = false;
  let settingsPanelVisible = false;
  let actionLoopsPanelVisible = false;
  let actionLoopTarget: ActionLoopTarget = null;
  let actionLoopLocationMenu: ActionLoopLocationMenu = null;
  let actionLoopSkillMenu: ActionLoopSkillMenu = null;
  let currentActionLocationMenuOpen = false;
  let selectedLoopId: string | null = null;
  let selectedLoopIndex = 0;
  let currentState: GameState | null = null;
  let activeTooltipSlot: HTMLElement | null = null;

  root.addEventListener("change", (event) => {
    const field = event.target;
    const state = currentState;
    if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement) || !state) {
      return;
    }

    const loopId = field.dataset.loopId;
    const loopField = field.dataset.loopField;
    if (!loopId || !loopField) {
      return;
    }

    const now = handlers.getNow();
    const index = getLoopIndex(field.dataset.id, selectedLoopIndex);
    let changed = false;

    if (loopField === "name") {
      changed = updateActionLoopName(state, loopId, field.value, now);
    }

    if (loopField === "step-location" && isLocationId(field.value)) {
      changed = updateActionLoopStepLocation(state, loopId, index, field.value, now);
    }

    if (loopField === "advance-mode" && isActionLoopAdvanceMode(field.value)) {
      changed = updateActionLoopStepAdvanceRule(
        state,
        loopId,
        index,
        getAdvanceModePatch(state, loopId, index, field.value),
        now
      );
    }

    if (loopField === "advance-resource" && isResourceId(field.value)) {
      changed = updateActionLoopStepAdvanceRule(state, loopId, index, { resourceId: field.value }, now);
    }

    if (loopField === "advance-scope" && isActionLoopResourceScope(field.value)) {
      changed = updateActionLoopStepAdvanceRule(state, loopId, index, { scope: field.value }, now);
    }

    if (loopField === "advance-amount") {
      changed = updateActionLoopStepAdvanceRule(state, loopId, index, { amount: Number(field.value) }, now);
    }

    if (changed) {
      selectedLoopId = loopId;
      selectedLoopIndex = index;
      handlers.persist();
      handlers.requestRender();
    }
  });

  root.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const target = event.target as HTMLElement;
    if (target.closest("button")) {
      return;
    }

    const commandTarget = target.closest<HTMLElement>('[role="button"][data-command]');
    if (!commandTarget) {
      return;
    }

    event.preventDefault();
    commandTarget.click();
  });

  root.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const button = target.closest<HTMLElement>("[data-command]");
    if (!button || (button instanceof HTMLButtonElement && button.disabled) || button.dataset.disabled === "true") {
      if (
        (actionLoopLocationMenu || actionLoopSkillMenu) &&
        !target.closest(".loop-location-picker") &&
        !target.closest(".loop-skill-picker")
      ) {
        actionLoopLocationMenu = null;
        actionLoopSkillMenu = null;
        handlers.requestRender();
      }
      if (currentActionLocationMenuOpen && !target.closest(".current-action-location-picker")) {
        currentActionLocationMenuOpen = false;
        handlers.requestRender();
      }
      return;
    }

    const command = button.dataset.command;
    const id = button.dataset.id;
    const state = currentState;
    if (!state) {
      return;
    }
    const isLoopLocationCommand = command === "toggle-loop-location-menu" || command === "set-loop-step-location";
    const isLoopSkillCommand = command === "toggle-loop-skill-menu" || command === "set-loop-step-skill";
    const isCurrentActionLocationCommand =
      command === "toggle-current-action-location-menu" || command === "set-current-action-location";
    if (!isLoopLocationCommand) {
      actionLoopLocationMenu = null;
    }
    if (!isLoopSkillCommand) {
      actionLoopSkillMenu = null;
    }
    if (!isCurrentActionLocationCommand) {
      currentActionLocationMenuOpen = false;
    }

    if (command === "set-test-reward-multiplier" && (id === "10" || id === "100")) {
      handlers.setTestRewardMultiplier(Number(id) as 10 | 100);
      handlers.requestRender();
      return;
    }

    if (command === "set-action-category" && isActionCategoryId(id)) {
      partyPanelVisible = false;
      characterPanelVisible = false;
      characterDetailsVisible = false;
      foragingSkillTreePanelVisible = false;
      combatPanelVisible = false;
      settingsPanelVisible = false;
      actionLoopsPanelVisible = false;
      activeActionCategory = id;
      const categoryFilters = getCategoryFilters(activeActionCategory);
      if (categoryFilters.length && !categoryFilters.some((filter) => filter.id === activeActionFilter)) {
        activeActionFilter = categoryFilters[0]?.id ?? activeActionFilter;
      }
      handlers.requestRender();
      return;
    }

    if (command === "set-action-filter" && isActionFilterId(id)) {
      partyPanelVisible = false;
      characterPanelVisible = false;
      characterDetailsVisible = false;
      foragingSkillTreePanelVisible = false;
      combatPanelVisible = false;
      settingsPanelVisible = false;
      actionLoopsPanelVisible = false;
      activeActionFilter = id;
      activeActionCategory = getActionCategoryIdForFilter(id) ?? activeActionCategory;
      handlers.requestRender();
      return;
    }

    if (command === "select-smithing-material" && isSmithingMaterialId(id)) {
      selectedSmithingMaterial = id;
      handlers.requestRender();
      return;
    }

    if (command === "select-alchemy-panel" && isAlchemyPanelId(id)) {
      selectedAlchemyPanel = id;
      handlers.requestRender();
      return;
    }

    if (command === "select-crafting-material" && isCraftingMaterialId(id)) {
      selectedCraftingMaterial = id;
      handlers.requestRender();
      return;
    }

    if (command === "set-location" && isLocationId(id)) {
      activeLocation = id;
      partyPanelVisible = false;
      characterPanelVisible = false;
      characterDetailsVisible = false;
      foragingSkillTreePanelVisible = false;
      combatPanelVisible = false;
      settingsPanelVisible = false;
      actionLoopsPanelVisible = false;
      handlers.requestRender();
      return;
    }

    if (command === "toggle-current-action-location-menu") {
      currentActionLocationMenuOpen = !currentActionLocationMenuOpen;
      handlers.requestRender();
      return;
    }

    if (command === "set-current-action-location") {
      currentActionLocationMenuOpen = false;
      partyPanelVisible = false;
      characterPanelVisible = false;
      characterDetailsVisible = false;
      foragingSkillTreePanelVisible = false;
      combatPanelVisible = false;
      settingsPanelVisible = false;
      actionLoopsPanelVisible = false;

      if (id === "camp") {
        activeActionCategory = "camp";
        handlers.requestRender();
        return;
      }

      if (isLocationId(id)) {
        activeLocation = id;
        activeActionCategory = "gather";
        if (!getLocationsForFilter(activeActionFilter).some((location) => location.id === id)) {
          activeActionFilter = "foraging";
        }
        handlers.requestRender();
      }
      return;
    }

    if (command === "set-character-detail-tab" && isCharacterDetailTab(id)) {
      activeCharacterDetailTab = id;
      campLogVisible = false;
      partyPanelVisible = false;
      characterPanelVisible = false;
      characterDetailsVisible = true;
      foragingSkillTreePanelVisible = false;
      combatPanelVisible = false;
      settingsPanelVisible = false;
      actionLoopsPanelVisible = false;
      handlers.requestRender();
      return;
    }

    if (command === "toggle-camp-log") {
      campLogVisible = !campLogVisible;
      partyPanelVisible = false;
      characterPanelVisible = false;
      characterDetailsVisible = false;
      foragingSkillTreePanelVisible = false;
      combatPanelVisible = false;
      settingsPanelVisible = false;
      actionLoopsPanelVisible = false;
      handlers.requestRender();
      return;
    }

    if (command === "open-party") {
      campLogVisible = false;
      partyPanelVisible = true;
      characterPanelVisible = false;
      characterDetailsVisible = false;
      foragingSkillTreePanelVisible = false;
      combatPanelVisible = false;
      settingsPanelVisible = false;
      actionLoopsPanelVisible = false;
      handlers.requestRender();
      return;
    }

    if (command === "open-character-panel") {
      campLogVisible = false;
      partyPanelVisible = false;
      characterPanelVisible = true;
      characterDetailsVisible = false;
      foragingSkillTreePanelVisible = false;
      combatPanelVisible = false;
      settingsPanelVisible = false;
      actionLoopsPanelVisible = false;
      handlers.requestRender();
      return;
    }

    if (command === "open-character-details") {
      campLogVisible = false;
      partyPanelVisible = false;
      characterPanelVisible = false;
      characterDetailsVisible = true;
      foragingSkillTreePanelVisible = false;
      combatPanelVisible = false;
      settingsPanelVisible = false;
      actionLoopsPanelVisible = false;
      handlers.requestRender();
      return;
    }

    if (command === "open-character-skill-panel" && isSkillId(id)) {
      const filterId = getActionFilterIdForSkill(id);
      if (!filterId) {
        return;
      }

      activeActionCategory = getActionCategoryIdForFilter(filterId) ?? activeActionCategory;
      activeActionFilter = filterId;
      campLogVisible = false;
      partyPanelVisible = false;
      characterPanelVisible = false;
      characterDetailsVisible = false;
      foragingSkillTreePanelVisible = false;
      combatPanelVisible = false;
      settingsPanelVisible = false;
      actionLoopsPanelVisible = false;
      handlers.requestRender();
      return;
    }

    if (command === "open-foraging-skill-tree") {
      campLogVisible = false;
      partyPanelVisible = false;
      characterPanelVisible = false;
      characterDetailsVisible = false;
      foragingSkillTreePanelVisible = true;
      combatPanelVisible = false;
      settingsPanelVisible = false;
      actionLoopsPanelVisible = false;
      handlers.requestRender();
      return;
    }

    if (command === "select-foraging-skill-tree" && isForagingSkillTreeCategory(id)) {
      if (selectForagingSkillTree(state, id, handlers.getNow())) {
        handlers.persist();
      }
      foragingSkillTreePanelVisible = true;
      handlers.requestRender();
      return;
    }

    if (command === "open-settings") {
      campLogVisible = false;
      partyPanelVisible = false;
      characterPanelVisible = false;
      characterDetailsVisible = false;
      foragingSkillTreePanelVisible = false;
      combatPanelVisible = false;
      actionLoopsPanelVisible = false;
      settingsPanelVisible = true;
      handlers.requestRender();
      return;
    }

    if (command === "open-action-loops") {
      campLogVisible = false;
      partyPanelVisible = false;
      characterPanelVisible = false;
      characterDetailsVisible = false;
      foragingSkillTreePanelVisible = false;
      combatPanelVisible = false;
      settingsPanelVisible = false;
      actionLoopsPanelVisible = true;
      handlers.requestRender();
      return;
    }

    if (command === "open-combat") {
      campLogVisible = false;
      partyPanelVisible = false;
      characterPanelVisible = false;
      characterDetailsVisible = false;
      foragingSkillTreePanelVisible = false;
      combatPanelVisible = true;
      settingsPanelVisible = false;
      actionLoopsPanelVisible = false;
      handlers.requestRender();
      return;
    }

    if (command === "dispatch-combat") {
      const characterId = button.dataset.characterId ?? state.selectedCharacterId;
      dispatchCharacterToCombat(state, characterId, "ruins", handlers.getNow());
      partyPanelVisible = true;
      combatPanelVisible = false;
      campLogVisible = false;
      characterPanelVisible = false;
      characterDetailsVisible = false;
      foragingSkillTreePanelVisible = false;
      settingsPanelVisible = false;
      actionLoopsPanelVisible = false;
      handlers.persist();
      handlers.requestRender();
      return;
    }

    if (command === "recall-combat") {
      const characterId = button.dataset.characterId ?? state.selectedCharacterId;
      recallCharacterFromCombat(state, characterId, handlers.getNow());
      partyPanelVisible = true;
      combatPanelVisible = false;
      campLogVisible = false;
      characterPanelVisible = false;
      characterDetailsVisible = false;
      foragingSkillTreePanelVisible = false;
      settingsPanelVisible = false;
      actionLoopsPanelVisible = false;
      handlers.persist();
      handlers.requestRender();
      return;
    }

    if (command === "select-character" && id && state.characters.some((character) => character.id === id)) {
      state.selectedCharacterId = id;
      selectedLoopId = getAssignedActionLoopId(state) ?? selectedLoopId;
      partyPanelVisible = false;
      characterPanelVisible = true;
      characterDetailsVisible = false;
      foragingSkillTreePanelVisible = false;
      handlers.persist();
      handlers.requestRender();
      return;
    }

    if (command === "select-loop-step") {
      selectedLoopId = getLoopCommandId(button, state, selectedLoopId);
      selectedLoopIndex = getLoopIndex(id, selectedLoopIndex);
      actionLoopTarget = null;
      handlers.requestRender();
      return;
    }

    if (command === "toggle-loop-location-menu") {
      const loopId = getLoopCommandId(button, state, selectedLoopId);
      if (!loopId) {
        return;
      }

      const index = getLoopIndex(id, selectedLoopIndex);
      selectedLoopId = loopId;
      selectedLoopIndex = index;
      actionLoopTarget = null;
      actionLoopLocationMenu =
        actionLoopLocationMenu?.loopId === loopId && actionLoopLocationMenu.index === index ? null : { loopId, index };
      actionLoopSkillMenu = null;
      handlers.requestRender();
      return;
    }

    if (command === "set-loop-step-location") {
      const loopId = getLoopCommandId(button, state, selectedLoopId);
      const locationId = button.dataset.locationId;
      if (!loopId || !isLocationId(locationId)) {
        return;
      }

      const index = getLoopIndex(id, selectedLoopIndex);
      selectedLoopId = loopId;
      selectedLoopIndex = index;
      actionLoopTarget = null;
      actionLoopLocationMenu = null;
      actionLoopSkillMenu = null;
      if (updateActionLoopStepLocation(state, loopId, index, locationId, handlers.getNow())) {
        handlers.persist();
      }
      handlers.requestRender();
      return;
    }

    if (command === "toggle-loop-skill-menu") {
      const loopId = getLoopCommandId(button, state, selectedLoopId);
      if (!loopId) {
        return;
      }

      const index = getLoopIndex(id, selectedLoopIndex);
      selectedLoopId = loopId;
      selectedLoopIndex = index;
      actionLoopTarget = null;
      actionLoopLocationMenu = null;
      actionLoopSkillMenu =
        actionLoopSkillMenu?.loopId === loopId && actionLoopSkillMenu.index === index ? null : { loopId, index };
      handlers.requestRender();
      return;
    }

    if (command === "set-loop-step-skill") {
      const loopId = getLoopCommandId(button, state, selectedLoopId);
      const skillId = button.dataset.skillId;
      const option = actionLoopSkillOptions.find((candidate) => candidate.skillId === skillId);
      if (!loopId || !option) {
        return;
      }

      const index = getLoopIndex(id, selectedLoopIndex);
      const loop = getActionLoop(state, loopId);
      const safeIndex = loop ? Math.min(loop.actionIds.length - 1, Math.max(0, index)) : 0;
      const currentActionId = loop?.actionIds[safeIndex];
      const currentLocationId = currentActionId
        ? getActionLoopStepLocationId(currentActionId, loop?.locationIds[safeIndex] ?? null)
        : undefined;
      selectedLoopId = loopId;
      selectedLoopIndex = safeIndex;
      actionLoopTarget = null;
      actionLoopLocationMenu = null;
      actionLoopSkillMenu = null;
      if (updateActionLoopStepAction(state, loopId, safeIndex, option.actionId, { locationId: currentLocationId }, handlers.getNow())) {
        handlers.persist();
      }
      handlers.requestRender();
      return;
    }

    if (command === "insert-loop-after") {
      const loopId = getLoopCommandId(button, state, selectedLoopId);
      if (!loopId) {
        return;
      }
      selectedLoopId = loopId;
      selectedLoopIndex = getLoopIndex(id, selectedLoopIndex);
      actionLoopTarget = { loopId, afterIndex: selectedLoopIndex };
      actionLoopsPanelVisible = false;
      handlers.requestRender();
      return;
    }

    if (command === "remove-loop-step") {
      const loopId = getLoopCommandId(button, state, selectedLoopId);
      if (!loopId) {
        return;
      }
      selectedLoopId = loopId;
      selectedLoopIndex = removeActionFromSavedLoop(state, loopId, getLoopIndex(id, selectedLoopIndex), handlers.getNow());
      actionLoopTarget = null;
      handlers.persist();
      handlers.requestRender();
      return;
    }

    if (command === "create-loop") {
      const loop = createActionLoop(state, handlers.getNow());
      selectedLoopId = loop.id;
      selectedLoopIndex = 0;
      actionLoopTarget = null;
      handlers.persist();
      handlers.requestRender();
      return;
    }

    if (command === "delete-loop") {
      const loopId = getLoopCommandId(button, state, selectedLoopId);
      if (!loopId) {
        return;
      }
      selectedLoopId = deleteActionLoop(state, loopId, handlers.getNow());
      selectedLoopIndex = 0;
      actionLoopTarget = null;
      handlers.persist();
      handlers.requestRender();
      return;
    }

    if (command === "assign-loop") {
      const loopId = getLoopCommandId(button, state, selectedLoopId);
      const characterId = button.dataset.characterId ?? state.selectedCharacterId;
      if (!loopId) {
        return;
      }
      selectedLoopId = loopId;
      assignActionLoopToCharacter(state, loopId, characterId, handlers.getNow());
      handlers.persist();
      handlers.requestRender();
      return;
    }

    if (command === "start-action" && id) {
      const actionId = id as ActionId;
      const now = handlers.getNow();
      if (actionLoopTarget) {
        if (
          insertActionInSavedLoop(
            state,
            actionLoopTarget.loopId,
            actionLoopTarget.afterIndex,
            actionId,
            { locationId: getActionStartLocation(actionId, activeLocation) },
            now
          )
        ) {
          selectedLoopId = actionLoopTarget.loopId;
          selectedLoopIndex = actionLoopTarget.afterIndex + 1;
          actionLoopTarget = null;
          actionLoopsPanelVisible = true;
        }
        handlers.persist();
        handlers.requestRender();
        return;
      }

      actionLoopTarget = null;
      startAction(state, actionId, now, { locationId: getActionStartLocation(actionId, activeLocation) });
    }

    if (command === "stop-action") {
      actionLoopTarget = null;
      stopAction(state, handlers.getNow());
    }

    if (command === "deposit-carried") {
      if (!getCurrentAction(state)) {
        depositCarriedResources(state, handlers.getNow());
      }
    }

    if (command === "build-structure" && id) {
      buildStructure(state, id as BuildingId, handlers.getNow());
    }

    if (command === "queue-cooking" && id) {
      queueCookingRecipe(state, id as CookingRecipeId, handlers.getNow());
    }

    if (command === "eat-food" && id) {
      eatFood(state, id as ResourceId, handlers.getNow());
    }

    if (command === "prestige-skill" && isSkillId(id)) {
      prestigeSkill(state, id, handlers.getNow());
      handlers.persist();
      handlers.requestRender();
      return;
    }

    if (command === "reset") {
      handlers.reset();
      return;
    }

    handlers.persist();
    handlers.requestRender();
  });

  root.addEventListener("pointerover", (event) => {
    const slot = getTooltipSlot(event.target, root);
    if (slot) {
      activeTooltipSlot = slot;
      showFloatingTooltip(root, slot);
    }
  });

  root.addEventListener("pointerout", (event) => {
    if (!activeTooltipSlot) {
      return;
    }

    const nextTarget = event.relatedTarget instanceof Node ? event.relatedTarget : null;
    if (!nextTarget || !activeTooltipSlot.contains(nextTarget)) {
      activeTooltipSlot = null;
      hideFloatingTooltip(root);
    }
  });

  root.addEventListener("focusin", (event) => {
    const slot = getTooltipSlot(event.target, root);
    if (slot) {
      activeTooltipSlot = slot;
      showFloatingTooltip(root, slot);
    }
  });

  root.addEventListener("focusout", (event) => {
    if (!activeTooltipSlot) {
      return;
    }

    const nextTarget = event.relatedTarget instanceof Node ? event.relatedTarget : null;
    if (!nextTarget || !activeTooltipSlot.contains(nextTarget)) {
      activeTooltipSlot = null;
      hideFloatingTooltip(root);
    }
  });

  root.addEventListener(
    "scroll",
    () => {
      if (activeTooltipSlot?.isConnected) {
        positionFloatingTooltip(root, activeTooltipSlot);
      }
    },
    true
  );

  window.addEventListener("resize", () => {
    if (activeTooltipSlot?.isConnected) {
      positionFloatingTooltip(root, activeTooltipSlot);
    }
  });

  return (state: GameState, now = handlers.getNow()) => {
    currentState = state;
    const selectedLoop = getActionLoop(state, selectedLoopId ?? getAssignedActionLoopId(state));
    selectedLoopId = selectedLoop?.id ?? null;
    selectedLoopIndex = selectedLoop ? Math.min(selectedLoop.actionIds.length - 1, Math.max(0, selectedLoopIndex)) : 0;
    if (actionLoopTarget && !getActionLoop(state, actionLoopTarget.loopId)) {
      actionLoopTarget = null;
    }
    if (actionLoopLocationMenu) {
      const menuLoop = getActionLoop(state, actionLoopLocationMenu.loopId);
      if (!menuLoop || actionLoopLocationMenu.index < 0 || actionLoopLocationMenu.index >= menuLoop.actionIds.length) {
        actionLoopLocationMenu = null;
      }
    }
    if (actionLoopSkillMenu) {
      const menuLoop = getActionLoop(state, actionLoopSkillMenu.loopId);
      if (!menuLoop || actionLoopSkillMenu.index < 0 || actionLoopSkillMenu.index >= menuLoop.actionIds.length) {
        actionLoopSkillMenu = null;
      }
    }
    const scrollPositions = captureScrollPositions(root);
    root.innerHTML = renderApp(
      state,
      activeActionFilter,
      activeActionCategory,
      activeCharacterDetailTab,
      activeLocation,
      selectedCraftingMaterial,
      selectedSmithingMaterial,
      selectedAlchemyPanel,
      campLogVisible,
      partyPanelVisible,
      characterPanelVisible,
      characterDetailsVisible,
      foragingSkillTreePanelVisible,
      combatPanelVisible,
      settingsPanelVisible,
      actionLoopsPanelVisible,
      actionLoopTarget,
      actionLoopLocationMenu,
      actionLoopSkillMenu,
      currentActionLocationMenuOpen,
      selectedLoopId,
      selectedLoopIndex,
      now,
      handlers.getTestRewardMultiplier()
    );
    activeTooltipSlot = null;
    restoreScrollPositions(root, scrollPositions);
  };
}

function renderApp(
  state: GameState,
  activeActionFilter: ActionFilterId,
  activeActionCategory: ActionCategoryId,
  activeCharacterDetailTab: CharacterDetailTab,
  activeLocation: LocationId,
  selectedCraftingMaterial: CraftingMaterialId,
  selectedSmithingMaterial: SmithingMaterialId,
  selectedAlchemyPanel: AlchemyPanelId,
  campLogVisible: boolean,
  partyPanelVisible: boolean,
  characterPanelVisible: boolean,
  characterDetailsVisible: boolean,
  foragingSkillTreePanelVisible: boolean,
  combatPanelVisible: boolean,
  settingsPanelVisible: boolean,
  actionLoopsPanelVisible: boolean,
  actionLoopTarget: ActionLoopTarget,
  actionLoopLocationMenu: ActionLoopLocationMenu,
  actionLoopSkillMenu: ActionLoopSkillMenu,
  currentActionLocationMenuOpen: boolean,
  selectedLoopId: string | null,
  selectedLoopIndex: number,
  now: number,
  testRewardMultiplier: 1 | 10 | 100
): string {
  const currentActionBarVisual = getCurrentActionBarVisual(activeActionCategory, activeActionFilter);

  return `
    <div class="game-shell" data-editor-id="game-shell" data-editor-label="Game shell" data-editor-files="src/ui/render.ts, src/style.css">
      ${renderCharacterSidebar(
        state,
        activeActionCategory,
        campLogVisible,
        partyPanelVisible,
        characterPanelVisible,
        characterDetailsVisible,
        combatPanelVisible,
        settingsPanelVisible,
        actionLoopsPanelVisible,
        testRewardMultiplier
      )}
      <main class="main-panel" data-editor-id="main-panel" data-editor-label="Main game panel" data-editor-files="src/ui/render.ts, src/style.css">
        ${renderCurrentActionPanel(state, currentActionBarVisual, currentActionLocationMenuOpen, now)}
        ${
          characterDetailsVisible
            ? renderCharacterDetailsPanel(state, activeCharacterDetailTab)
            : foragingSkillTreePanelVisible
            ? renderForagingSkillTreePanel(state)
            : actionLoopsPanelVisible
            ? renderActionLoopsPanel(
                state,
                selectedLoopId,
                selectedLoopIndex,
                actionLoopTarget,
                actionLoopLocationMenu,
                actionLoopSkillMenu
              )
            : settingsPanelVisible
            ? renderSettingsPanel()
            : characterPanelVisible
            ? renderCharacterPanel(state)
            : combatPanelVisible
            ? renderCombatPanel(state, now)
            : partyPanelVisible
            ? renderPartyPanel(state)
            : campLogVisible
              ? renderMainLogPanel(state)
              : renderWorkArea(
                  state,
                  activeActionCategory,
                  activeActionFilter,
                  activeLocation,
                  selectedCraftingMaterial,
                  selectedSmithingMaterial,
                  selectedAlchemyPanel,
                  actionLoopTarget,
                  now
                )
        }
      </main>
    </div>
    <div class="tooltip-layer" aria-hidden="true"></div>
  `;
}

function renderCharacterSidebar(
  state: GameState,
  activeActionCategory: ActionCategoryId,
  campLogVisible: boolean,
  partyPanelVisible: boolean,
  characterPanelVisible: boolean,
  characterDetailsVisible: boolean,
  combatPanelVisible: boolean,
  settingsPanelVisible: boolean,
  actionLoopsPanelVisible: boolean,
  testRewardMultiplier: 1 | 10 | 100
): string {
  const selectedCharacter = getSelectedCharacter(state);
  const condition = getCharacterStatusText(state, selectedCharacter);
  const workAreaVisible =
    !campLogVisible &&
    !partyPanelVisible &&
    !characterPanelVisible &&
    !characterDetailsVisible &&
    !combatPanelVisible &&
    !settingsPanelVisible &&
    !actionLoopsPanelVisible;

  return `
    <aside class="character-sidebar panel" data-editor-id="character-sidebar" data-editor-label="Character sidebar" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="brand-block">
        <div class="kicker">Idle Town</div>
        <div class="brand-heading">
          <h1>First Fire</h1>
          ${renderTestRewardControls(testRewardMultiplier)}
        </div>
      </div>
      <button
        class="character-card selected ${characterDetailsVisible ? "active" : ""}"
        type="button"
        data-command="open-character-details"
        aria-expanded="${characterDetailsVisible}"
      >
        ${renderCharacterPortrait(selectedCharacter)}
        <span>
          <strong>${selectedCharacter.name}</strong>
          <small>${condition}</small>
        </span>
        </button>
          <nav class="sidebar-actions" aria-label="Action filters">
            <div class="category-buttons">
              ${actionCategories
                .filter((category) => category.id !== "gather" && category.id !== "processing")
                .map((category) => renderCategoryButton(category, activeActionCategory, workAreaVisible))
                .join("")}
              ${renderCharactersButton(characterPanelVisible)}
              ${renderPartyButton(partyPanelVisible)}
              ${renderCombatButton(combatPanelVisible)}
            </div>
          </nav>
          <div class="sidebar-footer">
            ${renderActionLoopsToggle(actionLoopsPanelVisible)}
            ${renderCampLogToggle(campLogVisible)}
            <button class="ghost-button ${settingsPanelVisible ? "active" : ""}" type="button" data-command="open-settings" aria-pressed="${settingsPanelVisible}">Settings</button>
          </div>
    </aside>
  `;
}

function renderSettingsPanel(): string {
  return `
    <div class="work-area single-panel">
      <section class="panel settings-panel" aria-label="Settings" data-editor-id="settings-panel" data-editor-label="Settings panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Settings</span>
        </div>
        <div class="settings-list">
          <button class="danger-button" type="button" data-command="reset">Reset</button>
        </div>
      </section>
    </div>
  `;
}

function renderForagingSkillTreePanel(state: GameState): string {
  const foragingSkill = state.skills.foraging;
  const selectedCategory = getSelectedForagingSkillTreeCategory(state);
  const unlocked = foragingSkill.level >= FORAGING_SKILL_TREE_UNLOCK_LEVEL;
  const selectedDefinition = selectedCategory ? getForagingSkillTreeDefinition(selectedCategory) : null;

  return `
    <div class="work-area single-panel">
      <section class="panel foraging-skill-tree-panel" aria-label="Foraging skill tree" data-editor-id="foraging-skill-tree-panel" data-editor-label="Foraging skill tree panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading foraging-skill-tree-heading">
          <span>Foraging Skill Tree</span>
          <small>${selectedDefinition ? `${selectedDefinition.label} chosen` : `Lv ${foragingSkill.level} / ${FORAGING_SKILL_TREE_UNLOCK_LEVEL}`}</small>
        </div>
        ${
          selectedDefinition
            ? renderSelectedForagingSkillTree(state, selectedDefinition)
            : `
              <div class="foraging-skill-tree-intro ${unlocked ? "available" : "locked"}">
                <strong>${unlocked ? "Choose one Foraging tree" : `Unlocks at Foraging Lv ${FORAGING_SKILL_TREE_UNLOCK_LEVEL}`}</strong>
                <span>${
                  unlocked
                    ? "The chosen tree remains active until the next Foraging prestige."
                    : `Reach Lv ${FORAGING_SKILL_TREE_UNLOCK_LEVEL} to select one category path.`
                }</span>
              </div>
              <div class="foraging-skill-tree-grid">
                ${foragingSkillTreeDefinitions
                  .map((definition) => renderForagingSkillTreeOption(state, definition.id))
                  .join("")}
              </div>
            `
        }
      </section>
    </div>
  `;
}

function renderSelectedForagingSkillTree(
  state: GameState,
  selectedDefinition: (typeof foragingSkillTreeDefinitions)[number]
): string {
  return `
    <div class="foraging-skill-tree-selected">
      ${renderForagingSkillTreeOption(state, selectedDefinition.id, true)}
      <div class="foraging-skill-tree-lock-note">
        <strong>${selectedDefinition.label} is active</strong>
        <span>Other Foraging trees are unavailable until Foraging prestige.</span>
      </div>
      <div class="foraging-skill-tree-grid compact">
        ${foragingSkillTreeDefinitions
          .filter((definition) => definition.id !== selectedDefinition.id)
          .map((definition) => renderForagingSkillTreeOption(state, definition.id))
          .join("")}
      </div>
    </div>
  `;
}

function renderForagingSkillTreeOption(
  state: GameState,
  category: ForagingSkillTreeCategory,
  featured = false
): string {
  const definition = getForagingSkillTreeDefinition(category);
  const selectedCategory = getSelectedForagingSkillTreeCategory(state);
  const selected = selectedCategory === category;
  const lockReason = getForagingSkillTreeSelectionLockReason(state, category);
  const canSelect = !selected && !lockReason;
  const backgroundUrl = getForagingSkillTreeCategoryAssetUrl(category);
  const statusLabel = selected ? "Selected" : lockReason ?? "Available";

  return `
    <article class="foraging-skill-tree-card ${selected ? "selected" : ""} ${canSelect ? "available" : "locked"} ${featured ? "featured" : ""}">
      <span class="foraging-tree-card-art ${backgroundUrl ? "has-background" : "plain"}" aria-hidden="true">
        ${backgroundUrl ? `<img src="${backgroundUrl}" alt="" />` : `<span>${definition.label.slice(0, 2)}</span>`}
      </span>
      <span class="foraging-tree-card-copy">
        <strong>${definition.label}</strong>
        <small>${definition.description}</small>
      </span>
      <span class="foraging-tree-card-status">${statusLabel}</span>
      ${
        canSelect
          ? `<button class="foraging-tree-select-button" type="button" data-command="select-foraging-skill-tree" data-id="${definition.id}">Select</button>`
          : ""
      }
    </article>
  `;
}

function renderCharacterPanel(state: GameState): string {
  return `
    <div class="work-area single-panel">
      <section class="panel character-panel" aria-label="Characters" data-editor-id="character-panel" data-editor-label="Character roster panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Characters</span>
        </div>
        <div class="character-roster-grid">
          ${state.characters.map((character) => renderCharacterSelectCard(state, character)).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderPartyPanel(state: GameState): string {
  const dispatchedCount = state.characters.filter((character) => isCharacterDispatched(state, character.id)).length;
  const workingCount = state.characters.filter((character) => getCurrentAction(state, character.id)).length;
  const readyCount = state.characters.filter(
    (character) => !isCharacterDispatched(state, character.id) && !getCurrentAction(state, character.id)
  ).length;

  return `
    <div class="work-area single-panel">
      <section class="panel party-panel" aria-label="Party" data-editor-id="party-panel" data-editor-label="Party panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Party</span>
          <small>${state.characters.length} members</small>
        </div>
        <div class="party-panel-summary" aria-label="Party status">
          <span><strong>${dispatchedCount}</strong> in ruins</span>
          <span><strong>${workingCount}</strong> working</span>
          <span><strong>${readyCount}</strong> ready</span>
        </div>
        <div class="party-panel-grid">
          ${state.characters.map((character) => renderPartyMember(state, character)).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderCharacterSelectCard(state: GameState, character: GameState["characters"][number]): string {
  const selected = state.selectedCharacterId === character.id;
  const active = Boolean(getCurrentAction(state, character.id) || getCombatUnitForCharacter(state, character.id));
  const loadout = getCharacterCombatLoadout(state, character.id);

  return `
    <button
      class="character-select-card ${selected ? "selected" : ""} ${active ? "working" : ""}"
      type="button"
      data-command="select-character"
      data-id="${character.id}"
      aria-pressed="${selected}"
    >
      ${renderCharacterPortrait(character)}
      <span class="character-select-copy">
        <strong>${character.name}</strong>
        <small>${character.epithet}</small>
        <small>${loadout.classLabel} - ${loadout.weaponLabel}</small>
        <em>${getCharacterStatusText(state, character)}</em>
      </span>
      <span class="character-select-badge">${selected ? "Selected" : "Select"}</span>
    </button>
  `;
}

function renderTestRewardControls(testRewardMultiplier: 1 | 10 | 100): string {
  const multipliers = [10, 100] as const;
  return `
    <div class="test-reward-controls" aria-label="Test reward multiplier">
      ${multipliers
        .map((multiplier) => `
          <button
            class="test-reward-button ${testRewardMultiplier === multiplier ? "active" : ""}"
            type="button"
            data-command="set-test-reward-multiplier"
            data-id="${multiplier}"
            aria-pressed="${testRewardMultiplier === multiplier}"
            title="${multiplier}x resources and XP"
          >
            ${multiplier}x
          </button>
        `)
        .join("")}
    </div>
  `;
}

function renderMainLogPanel(state: GameState): string {
  return `
    <div class="work-area single-panel">
      ${renderLog(state, "camp", "Camp Log", "main-log-panel panel")}
    </div>
  `;
}

function renderActionLoopsToggle(actionLoopsPanelVisible: boolean): string {
  return `
    <button
      class="action-loops-toggle ${actionLoopsPanelVisible ? "active" : ""}"
      type="button"
      data-command="open-action-loops"
      aria-pressed="${actionLoopsPanelVisible}"
    >
      Action Loops
    </button>
  `;
}

function renderCharactersButton(active: boolean): string {
  return `
    <button
      class="category-button characters-button ${active ? "active" : ""}"
      type="button"
      data-command="open-character-panel"
      aria-pressed="${active}"
    >
      <span>Characters</span>
    </button>
  `;
}

function renderCombatButton(active: boolean): string {
  return `
    <button
      class="category-button combat-button ${active ? "active" : ""}"
      type="button"
      data-command="open-combat"
      aria-pressed="${active}"
    >
      <span>Ruins</span>
    </button>
  `;
}

function renderPartyButton(active: boolean): string {
  return `
    <button
      class="category-button party-button ${active ? "active" : ""}"
      type="button"
      data-command="open-party"
      aria-pressed="${active}"
    >
      <span>Party</span>
    </button>
  `;
}

function renderPartyMember(state: GameState, character: GameState["characters"][number]): string {
  const unit = getCombatUnitForCharacter(state, character.id);
  const dispatched = Boolean(unit);
  const running = getCurrentAction(state, character.id);
  const loadout = getCharacterCombatLoadout(state, character.id);
  const combatStats = unit ?? character.combat;
  const hpMax = unit?.maxHp ?? loadout.maxHp;
  const manaMax = unit?.maxMana ?? loadout.maxMana;
  const hp = Math.min(hpMax, combatStats.hp);
  const mana = Math.min(manaMax, combatStats.mana);
  const status = dispatched ? "In Ruins" : running ? "Working" : "Ready";
  const command = dispatched ? "recall-combat" : "dispatch-combat";
  const disabled = !dispatched && Boolean(running);

  return `
    <article class="party-member ${dispatched ? "dispatched" : ""}">
      <div class="party-member-topline">
        ${renderCharacterPortrait(character, "small")}
        <span>
          <strong>${character.name}</strong>
          <small>${loadout.classLabel} - ${status}</small>
        </span>
      </div>
      ${renderVitalsBar("HP", hp, hpMax, "hp")}
      ${renderVitalsBar("Mana", mana, manaMax, "mana")}
      <button
        class="party-dispatch-button"
        type="button"
        data-command="${command}"
        data-character-id="${character.id}"
        ${disabled ? "disabled" : ""}
      >
        ${dispatched ? "Recall" : "Dispatch"}
      </button>
    </article>
  `;
}

function renderVitalsBar(label: string, current: number, max: number, type: "hp" | "mana"): string {
  const safeMax = Math.max(1, max);
  const safeCurrent = Math.max(0, Math.min(safeMax, current));
  const ratio = safeCurrent / safeMax;
  return `
    <div class="vitals-row ${type}">
      <span>${label}</span>
      <div class="vitals-track" aria-hidden="true">
        <span style="transform: scaleX(${ratio.toFixed(4)})"></span>
      </div>
      <strong>${Math.round(safeCurrent)}/${Math.round(safeMax)}</strong>
    </div>
  `;
}

function renderCategoryButton(
  category: ActionCategory,
  activeActionCategory: ActionCategoryId,
  workAreaVisible: boolean
): string {
  const active = workAreaVisible && category.id === activeActionCategory;

  return `
    <button
      class="category-button ${active ? "active" : ""}"
      type="button"
      data-command="set-action-category"
      data-id="${category.id}"
      aria-pressed="${active}"
    >
      <span>${category.label}</span>
    </button>
  `;
}

function renderCombatPanel(state: GameState, now: number): string {
  const location = getCombatLocationDefinition("ruins");
  const encounter = state.combat.encounter;
  const enemyCount = getLivingEnemyUnits(encounter).length;
  const dispatchedCount = state.characters.filter((character) => isCharacterDispatched(state, character.id)).length;

  return `
    <div class="work-area combat-work-area">
      <section class="panel combat-panel" aria-label="${location.label}" data-editor-id="combat-panel" data-editor-label="Combat panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="combat-panel-heading">
          <span>
            <span class="kicker">Combat Location</span>
            <h2>${location.label}</h2>
          </span>
          <span class="combat-status-pill">${encounter ? `Wave ${encounter.wave}` : "Quiet"}</span>
        </div>
        <p class="combat-location-blurb">${location.blurb}</p>
        <div class="combat-summary-grid">
          <div>
            <strong>${dispatchedCount}</strong>
            <small>Dispatched</small>
          </div>
          <div>
            <strong>${enemyCount}</strong>
            <small>Enemies</small>
          </div>
          <div>
            <strong>${encounter?.defeatedEnemies ?? 0}</strong>
            <small>Defeated</small>
          </div>
        </div>
        ${renderCombatGrid(state, now)}
      </section>
      <aside class="panel combat-side-panel" aria-label="Combat status" data-editor-id="combat-side-panel" data-editor-label="Combat side panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Status</span>
        </div>
        ${renderCombatRoster(state, now)}
        ${renderCombatEventLog(state)}
      </aside>
    </div>
  `;
}

function renderCombatGrid(state: GameState, now: number): string {
  const location = getCombatLocationDefinition("ruins");
  const encounter = state.combat.encounter;
  const cells: string[] = [];

  for (let y = 0; y < location.gridHeight; y += 1) {
    for (let x = 0; x < location.gridWidth; x += 1) {
      const unit = encounter?.units.find((candidate) => candidate.x === x && candidate.y === y && candidate.hp > 0) ?? null;
      cells.push(renderCombatCell(unit, x, y, now));
    }
  }

  return `
    <div class="combat-field" style="--combat-cols: ${location.gridWidth}; --combat-rows: ${location.gridHeight};" aria-label="Combat grid">
      ${cells.join("")}
    </div>
    <div class="combat-field-message">${encounter?.message ?? "Open Party to dispatch someone."}</div>
  `;
}

function renderCombatCell(unit: CombatUnit | null, x: number, y: number, now: number): string {
  if (!unit) {
    return `<div class="combat-cell" data-grid-x="${x}" data-grid-y="${y}"></div>`;
  }

  const glyph =
    unit.kind === "enemy" && unit.enemyId
      ? getCombatEnemyDefinition(unit.enemyId).glyph
      : getCharacterInitials(unit.name);
  const nextAct = Math.max(0, unit.nextActAt - now);
  return `
    <div class="combat-cell occupied ${unit.kind}" data-grid-x="${x}" data-grid-y="${y}" title="${unit.name}">
      <span class="combat-unit-glyph">${glyph}</span>
      <span class="combat-unit-name">${unit.name}</span>
      <span class="combat-unit-timer">${formatDuration(nextAct)}</span>
      ${renderVitalsBar("HP", unit.hp, unit.maxHp, "hp")}
    </div>
  `;
}

function renderCombatRoster(state: GameState, now: number): string {
  const encounter = state.combat.encounter;
  if (!encounter) {
    return `<div class="empty-line">No one is fighting.</div>`;
  }

  return `
    <div class="combat-roster-list">
      ${encounter.units.map((unit) => renderCombatRosterUnit(unit, now)).join("")}
    </div>
  `;
}

function renderCombatRosterUnit(unit: CombatUnit, now: number): string {
  const classLabel = unit.classId ? getCombatClassDefinitionLabel(unit.classId) : "Enemy";
  const actionText = unit.hp > 0 ? `Acts in ${formatDuration(unit.nextActAt - now)}` : "Down";
  return `
    <article class="combat-roster-unit ${unit.kind}">
      <div>
        <strong>${unit.name}</strong>
        <small>${classLabel} - ${actionText}</small>
      </div>
      ${renderVitalsBar("HP", unit.hp, unit.maxHp, "hp")}
      ${unit.maxMana > 0 ? renderVitalsBar("Mana", unit.mana, unit.maxMana, "mana") : ""}
    </article>
  `;
}

function getCombatClassDefinitionLabel(classId: string): string {
  return combatClassDefinitions.find((definition) => definition.id === classId)?.label ?? "Fighter";
}

function renderCombatEventLog(state: GameState): string {
  const entries = state.combat.log.slice(0, 8);
  return `
    <section class="combat-event-log" aria-label="Combat log">
      <h3>Combat Log</h3>
      <div class="combat-log-list">
        ${
          entries.length
            ? entries
                .map((entry) => `<div class="combat-log-entry ${entry.tone}">${entry.text}</div>`)
                .join("")
            : `<div class="empty-line">No combat events yet.</div>`
        }
      </div>
    </section>
  `;
}

function renderWorkArea(
  state: GameState,
  activeActionCategory: ActionCategoryId,
  activeActionFilter: ActionFilterId,
  activeLocation: LocationId,
  selectedCraftingMaterial: CraftingMaterialId,
  selectedSmithingMaterial: SmithingMaterialId,
  selectedAlchemyPanel: AlchemyPanelId,
  actionLoopTarget: ActionLoopTarget,
  now: number
): string {
  if (activeActionCategory === "camp") {
    return `
      <div class="work-area camp-work-area">
        ${renderCampStatsPanel(state)}
        ${renderBuildingPanel(state, now)}
      </div>
    `;
  }

  return `
    <div class="work-area">
      ${renderActionStack(
        state,
        activeActionFilter,
        activeLocation,
        selectedCraftingMaterial,
        selectedSmithingMaterial,
        selectedAlchemyPanel,
        actionLoopTarget,
        now
      )}
    </div>
  `;
}

function renderCampStatsPanel(state: GameState): string {
  const selectedCharacter = getSelectedCharacter(state);
  return `
    <section class="panel camp-stats-panel" aria-label="Camp stats" data-editor-id="camp-stats-panel" data-editor-label="Camp stats panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Stats</span>
      </div>
      <div class="camp-stat-list">
        <div class="camp-stat-row">
          <span>Population</span>
          <strong>${getPopulationCount(state)}/${getPopulationCapacity(state)}</strong>
        </div>
        <div class="camp-stat-row">
          <span>${selectedCharacter.name} Hunger</span>
          <strong>${Math.round(selectedCharacter.needs.hunger)}/${Math.round(selectedCharacter.needs.maxHunger)}</strong>
        </div>
      </div>
    </section>
  `;
}

function getRunningTargetLocation(running: NonNullable<GameState["currentAction"]>): CharacterLocationId {
  if (running.targetLocationId) {
    return running.targetLocationId;
  }

  return running.phase === "travelingBack" ? "camp" : (running.locationId ?? "camp");
}

function getRunningOriginLocation(
  running: NonNullable<GameState["currentAction"]>,
  currentLocationId: CharacterLocationId
): CharacterLocationId {
  if (running.originLocationId) {
    return running.originLocationId;
  }

  return running.phase === "travelingBack" ? (running.locationId ?? currentLocationId) : currentLocationId;
}

function getSafeDomId(value: string): string {
  return value.replace(/[^a-zA-Z0-9_-]/g, "-");
}

function getCharacterInitials(name: string): string {
  const initials = name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("");

  return (initials || "?").slice(0, 2).toUpperCase();
}

function getCharacterPortraitUrl(character: GameState["characters"][number]): string | null {
  return characterPortraitUrls[character.id] ?? null;
}

function renderCharacterPortrait(character: GameState["characters"][number], sizeClass = ""): string {
  const portraitUrl = getCharacterPortraitUrl(character);
  const classes = ["portrait", portraitUrl ? "character-portrait" : "", sizeClass].filter(Boolean).join(" ");

  if (!portraitUrl) {
    return `<span class="${classes}" aria-hidden="true">${getCharacterInitials(character.name)}</span>`;
  }

  return `
    <span class="${classes}" aria-hidden="true">
      <img src="${portraitUrl}" alt="" />
    </span>
  `;
}

function renderActionStack(
  state: GameState,
  activeActionFilter: ActionFilterId,
  activeLocation: LocationId,
  selectedCraftingMaterial: CraftingMaterialId,
  selectedSmithingMaterial: SmithingMaterialId,
  selectedAlchemyPanel: AlchemyPanelId,
  actionLoopTarget: ActionLoopTarget,
  now: number
): string {
  const filter = getActionFilter(activeActionFilter);

  return `
    <div class="action-stack">
      ${renderWorkLocationPanel(filter, activeLocation)}
      ${renderActionPanel(
        state,
        activeActionFilter,
        activeLocation,
        selectedCraftingMaterial,
        selectedSmithingMaterial,
        selectedAlchemyPanel,
        actionLoopTarget,
        now
      )}
    </div>
  `;
}

function renderActionPanel(
  state: GameState,
  activeActionFilter: ActionFilterId,
  activeLocation: LocationId,
  selectedCraftingMaterial: CraftingMaterialId,
  selectedSmithingMaterial: SmithingMaterialId,
  selectedAlchemyPanel: AlchemyPanelId,
  actionLoopTarget: ActionLoopTarget,
  now: number
): string {
  const filter = getActionFilter(activeActionFilter);
  const actionIds =
    filter.id === "foraging"
      ? getForagingActionIds(getActiveLocationForFilter(filter.id, activeLocation))
      : filter.id === "woodcutting"
      ? filter.actionIds ?? []
      : (filter.actionIds ?? []);

  if (filter.id === "crafting") {
    return renderCraftingActionPanel(state, actionIds, selectedCraftingMaterial, actionLoopTarget, now);
  }
  if (filter.id === "smithing") {
    return renderSmithingActionPanel(state, actionIds, selectedSmithingMaterial, actionLoopTarget, now);
  }
  if (filter.id === "alchemy") {
    return renderAlchemyActionPanel(state, actionIds, selectedAlchemyPanel, actionLoopTarget, now);
  }
  if (filter.id === "textiles") {
    return renderTextileActionPanel(state, actionIds, actionLoopTarget, now);
  }
  if (filter.id === "cooking") {
    return renderCookingActionPanel(state, now);
  }
  if (filter.id === "foraging") {
    return renderForagingActionPanel(
      state,
      getActiveLocationForFilter(filter.id, activeLocation),
      actionLoopTarget
    );
  }

  return `
      <section class="action-panel" data-editor-id="action-panel-${activeActionFilter}" data-editor-label="${filter.label} action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="action-grid">
          ${actionIds.map((actionId) => renderActionCard(state, actionId, actionLoopTarget)).join("")}
        </div>
    </section>
  `;
}

function renderForagingActionPanel(
  state: GameState,
  activeLocation: LocationId,
  actionLoopTarget: ActionLoopTarget
): string {
  const utilityActionIds = getForagingActionIds(activeLocation).filter(
    (actionId) => !getForageResourceActionDefinition(actionId)
  );
  const forageActions = getForageResourceActionDefinitionsForLocation(activeLocation);

  return `
      <section class="action-panel" data-editor-id="action-panel-foraging" data-editor-label="Forage action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="smithing-craft-columns crafting-craft-columns forage-category-columns">
          ${utilityActionIds.length ? renderForageUtilityCategoryCard(state, utilityActionIds, actionLoopTarget) : ""}
          ${forageDisplayCategories
            .map((category) =>
              renderForageCategoryCard(
                state,
                category,
                forageActions.filter((definition) => getForageDisplayCategory(definition) === category),
                actionLoopTarget
              )
            )
            .join("")}
        </div>
      </section>
  `;
}

function renderForageCategoryCard(
  state: GameState,
  category: ForageDisplayCategory,
  actionDefinitions: ForageResourceActionDefinition[],
  actionLoopTarget: ActionLoopTarget
): string {
  const categoryLabel = getForageDisplayCategoryLabel(category);

  return renderForageActionCategoryCard(
    `${categoryLabel} forage`,
    categoryLabel,
    actionDefinitions.map((definition) => renderForageResourceCard(state, definition.actionId, actionLoopTarget)),
    `No ${categoryLabel.toLowerCase()} here.`
  );
}

function renderForageUtilityCategoryCard(
  state: GameState,
  actionIds: ActionId[],
  actionLoopTarget: ActionLoopTarget
): string {
  return renderForageActionCategoryCard(
    "Forage resources",
    "Resources",
    actionIds.map((actionId) => renderForageUtilityCard(state, actionId, actionLoopTarget)),
    "No resources here."
  );
}

function renderForageActionCategoryCard(
  ariaLabel: string,
  categoryLabel: string,
  actionCards: string[],
  emptyText: string
): string {
  const cards = actionCards.filter(Boolean);

  return `
    <section class="smithing-craft-column crafting-category-card forage-category-card" aria-label="${ariaLabel}">
      <div class="smithing-craft-column-heading crafting-category-heading">
        <span>${categoryLabel}</span>
        <small>${cards.length}</small>
      </div>
      ${
        cards.length
          ? `<div class="smithing-recipe-grid crafting-recipe-grid crafting-category-recipes forage-item-grid">${cards.join("")}</div>`
          : `<div class="smithing-empty-column">${emptyText}</div>`
      }
    </section>
  `;
}

function getForageDisplayCategory(definition: {
  category: GatherableIngredientCategory;
  tags: string[];
}): ForageDisplayCategory {
  if (definition.tags.includes("fungus")) {
    return "fungal";
  }

  if (
    (definition.category === "vegetable" || definition.category === "root") &&
    definition.tags.some((tag) => stapleForageTags.has(tag))
  ) {
    return "staple";
  }

  return definition.category;
}

function getForageDisplayCategoryLabel(category: ForageDisplayCategory): string {
  if (category === "fungal") {
    return "Fungal";
  }
  if (category === "staple") {
    return "Staples";
  }
  if (category === "vegetable") {
    return "Vegetables";
  }
  return getGatherableCategoryLabel(category);
}

function renderForageResourceCard(
  state: GameState,
  actionId: ActionId,
  actionLoopTarget: ActionLoopTarget
): string {
  const definition = getActionDefinition(actionId);
  const forageAction = getForageResourceActionDefinition(actionId);
  if (!definition || !forageAction) {
    return "";
  }

  const unlocked = isActionUnlocked(state, actionId);
  const cost = getActionCost(actionId);
  const canStart = canStartAction(state, actionId);
  const targetLoop = actionLoopTarget ? getActionLoop(state, actionLoopTarget.loopId) : null;
  const running = getCurrentAction(state);
  const assigningLoopAction = Boolean(actionLoopTarget && targetLoop);
  const canAssignFollowUp = Boolean(
    assigningLoopAction && targetLoop && actionLoopTarget && canInsertActionInSavedLoop(targetLoop, actionLoopTarget.afterIndex, actionId)
  );
  const active = running ? getActiveActionId(running) === actionId : false;
  const disabled = assigningLoopAction ? !canAssignFollowUp : !canStart || active;
  const missingCostText = getMissingCostText(state, cost);
  const lockReason = canStart ? "" : unlocked ? missingCostText : getActionLockReason(state, actionId);
  const statusText = assigningLoopAction
    ? canAssignFollowUp
      ? "Set as action loop step"
      : "Not valid for this loop"
    : active
      ? "Running"
      : !canStart && lockReason
        ? lockReason
        : "Ready";
  const buttonLabel = assigningLoopAction ? "Set" : active ? "Running" : canStart ? "Start" : "Locked";
  const tooltipRows = getActionTooltipRows(actionId, definition.durationMs);
  const amountText =
    forageAction.minAmount === forageAction.maxAmount
      ? `${forageAction.minAmount}`
      : `${forageAction.minAmount}-${forageAction.maxAmount}`;

  return `
    <button
      class="smithing-recipe-card crafting-recipe-card forage-item-card ${active ? "active" : ""} ${canAssignFollowUp ? "assignable" : ""} ${!unlocked && !canAssignFollowUp ? "locked" : ""}"
      type="button"
      data-command="start-action"
      data-id="${actionId}"
      data-editor-id="forage-item-${forageAction.resourceId}"
      data-editor-label="Forage item: ${forageAction.resourceLabel}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${disabled}"
      data-tooltip-source
      aria-disabled="${disabled}"
      aria-label="${buttonLabel} ${forageAction.resourceLabel}. Finds ${amountText}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${renderActionIcon(actionId)}</span>
      ${renderActionTooltip(definition.label, tooltipRows, statusText)}
    </button>
  `;
}

function renderForageUtilityCard(state: GameState, actionId: ActionId, actionLoopTarget: ActionLoopTarget): string {
  const definition = getActionDefinition(actionId);
  if (!definition) {
    return "";
  }

  const unlocked = isActionUnlocked(state, actionId);
  const cost = getActionCost(actionId);
  const canStart = canStartAction(state, actionId);
  const targetLoop = actionLoopTarget ? getActionLoop(state, actionLoopTarget.loopId) : null;
  const running = getCurrentAction(state);
  const assigningLoopAction = Boolean(actionLoopTarget && targetLoop);
  const canAssignFollowUp = Boolean(
    assigningLoopAction && targetLoop && actionLoopTarget && canInsertActionInSavedLoop(targetLoop, actionLoopTarget.afterIndex, actionId)
  );
  const active = running ? getActiveActionId(running) === actionId : false;
  const disabled = assigningLoopAction ? !canAssignFollowUp : !canStart || active;
  const missingCostText = getMissingCostText(state, cost);
  const lockReason = canStart ? "" : unlocked ? missingCostText : getActionLockReason(state, actionId);
  const statusText = assigningLoopAction
    ? canAssignFollowUp
      ? "Set as action loop step"
      : "Not valid for this loop"
    : active
      ? "Running"
      : !canStart && lockReason
        ? lockReason
        : "Ready";
  const buttonLabel = assigningLoopAction ? "Set" : active ? "Running" : canStart ? "Start" : "Locked";
  const tooltipRows = getActionTooltipRows(actionId, definition.durationMs);

  return `
    <button
      class="smithing-recipe-card crafting-recipe-card forage-item-card ${active ? "active" : ""} ${canAssignFollowUp ? "assignable" : ""} ${!unlocked && !canAssignFollowUp ? "locked" : ""}"
      type="button"
      data-command="start-action"
      data-id="${actionId}"
      data-editor-id="forage-action-${actionId}"
      data-editor-label="Forage action: ${definition.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${disabled}"
      data-tooltip-source
      aria-disabled="${disabled}"
      aria-label="${buttonLabel} ${definition.label}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${renderActionIcon(actionId)}</span>
      ${renderActionTooltip(definition.label, tooltipRows, statusText)}
    </button>
  `;
}

function renderCraftingActionPanel(
  state: GameState,
  actionIds: ActionId[],
  selectedCraftingMaterial: CraftingMaterialId,
  actionLoopTarget: ActionLoopTarget,
  now: number
): string {
  const quickCraftActionId: ActionId = "craftLowestTool";
  const craftActionIds = actionIds.filter(isCraftingRecipeActionId);
  const activeMaterial = resolveSelectedCraftingMaterial(selectedCraftingMaterial, craftActionIds);

  return `
    <section class="action-panel crafting-action-panel" data-editor-id="action-panel-crafting" data-editor-label="Crafting action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card crafting-panel-card">
        <div class="smithing-workbench crafting-workbench">
          <div class="smithing-furnace-column crafting-workbench-column">
            ${renderCraftingWorkbenchStatus(craftActionIds, activeMaterial)}
            ${renderCraftingActiveCraft(state, now)}
            ${actionIds.includes(quickCraftActionId) ? renderCraftLowestCard(state, quickCraftActionId, actionLoopTarget) : ""}
          </div>
          ${renderCraftingMaterialSection(craftActionIds, activeMaterial)}
        </div>
        ${renderCraftingCraftColumns(state, craftActionIds, activeMaterial, actionLoopTarget)}
      </div>
    </section>
  `;
}

function resolveSelectedCraftingMaterial(
  selectedCraftingMaterial: CraftingMaterialId,
  actionIds: ActionId[]
): CraftingMaterialId {
  const availableMaterials = getAvailableCraftingMaterials(actionIds);
  return availableMaterials.includes(selectedCraftingMaterial)
    ? selectedCraftingMaterial
    : (availableMaterials[0] ?? selectedCraftingMaterial);
}

function getAvailableCraftingMaterials(actionIds: ActionId[]): CraftingMaterialId[] {
  const materials = actionIds
    .map((actionId) => craftingRecipeMetadata[actionId]?.material)
    .filter((material): material is CraftingMaterialId => Boolean(material));

  return Array.from(new Set(materials));
}

function isCraftingRecipeActionId(actionId: ActionId): boolean {
  return Boolean(craftingRecipeMetadata[actionId]);
}

function renderCraftingWorkbenchStatus(actionIds: ActionId[], selectedCraftingMaterial: CraftingMaterialId): string {
  const recipeCount = actionIds.filter((actionId) => actionId !== "craftLowestTool").length;

  return `
    <div class="smithing-status-grid crafting-status-grid">
      <div class="smithing-status-item">
        <span>Work Bench</span>
        <strong>Hand Craft</strong>
      </div>
      <div class="smithing-status-item">
        <span>Materials</span>
        <strong>${craftingMaterialLabels[selectedCraftingMaterial]}</strong>
      </div>
      <div class="smithing-status-item">
        <span>Recipes</span>
        <strong>${recipeCount}</strong>
      </div>
    </div>
  `;
}

function renderCraftingActiveCraft(state: GameState, now: number): string {
  const running = getCurrentAction(state);
  const activeActionId = running ? getActiveActionId(running) : null;
  if (!running || !activeActionId || !isCraftingRecipeActionId(activeActionId)) {
    return `
      <div class="smithing-active-row idle crafting-active-row">
        <span>No active craft</span>
        <strong>Bench idle</strong>
      </div>
    `;
  }

  const definition = getActionDefinition(activeActionId);
  const progress = clamp(getActionProgress(state, now), 0, 1);
  const displayLabel = definition ? getCraftingRecipeDisplayLabel(definition.label) : "Recipe";

  return `
    <div class="smithing-active-row crafting-active-row">
      <span>Active craft</span>
      <strong>${displayLabel}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-smithing-action-progress style="transform: scaleX(${progress.toFixed(4)})"></span>
        <em data-smithing-action-remaining>${formatDuration(running.endsAt - now)}</em>
      </div>
    </div>
  `;
}

function renderCraftingMaterialSection(actionIds: ActionId[], selectedCraftingMaterial: CraftingMaterialId): string {
  return `
    <div class="smithing-smelt-column crafting-material-column">
      <div class="section-heading">
        <span>Materials Type</span>
      </div>
      <div class="smithing-smelt-grid crafting-material-grid">
        ${getAvailableCraftingMaterials(actionIds)
          .map((material) => renderCraftingMaterialCard(actionIds, material, selectedCraftingMaterial))
          .join("")}
      </div>
    </div>
  `;
}

function renderCraftingMaterialCard(
  actionIds: ActionId[],
  material: CraftingMaterialId,
  selectedCraftingMaterial: CraftingMaterialId
): string {
  const selected = material === selectedCraftingMaterial;
  const recipeCount = getCraftingMaterialRecipeCount(actionIds, material);

  return `
    <article class="smithing-smelt-card crafting-material-card ${selected ? "selected" : ""}">
      <button
        class="smithing-smelt-select crafting-material-select"
        type="button"
        data-command="select-crafting-material"
        data-id="${material}"
        aria-pressed="${selected}"
      >
        <span class="smithing-recipe-icon" aria-hidden="true">${renderActionIcon("craftLowestTool")}</span>
        <span class="smithing-recipe-copy">
          <strong>${craftingMaterialLabels[material]}</strong>
          <small>${selected ? "Selected type" : "Show recipes"}</small>
        </span>
        <span class="smithing-recipe-meta">
          <b>${recipeCount} recipes</b>
          <small>${craftingMaterialDescriptions[material]}</small>
        </span>
      </button>
    </article>
  `;
}

function getCraftingMaterialRecipeCount(actionIds: ActionId[], material: CraftingMaterialId): number {
  return actionIds.filter((actionId) => actionId !== "craftLowestTool" && craftingRecipeMetadata[actionId]?.material === material).length;
}

function renderCraftingCraftColumns(
  state: GameState,
  actionIds: ActionId[],
  selectedCraftingMaterial: CraftingMaterialId,
  actionLoopTarget: ActionLoopTarget
): string {
  const materialActionIds = actionIds.filter(
    (actionId) => actionId !== "craftLowestTool" && craftingRecipeMetadata[actionId]?.material === selectedCraftingMaterial
  );

  return `
    <div class="smithing-recipe-section smithing-craft-section crafting-recipe-section">
      <div class="smithing-craft-columns crafting-craft-columns">
        ${craftingProductCategories
          .map((category) => renderCraftingCraftColumn(state, materialActionIds, selectedCraftingMaterial, category, actionLoopTarget))
          .join("")}
      </div>
    </div>
  `;
}

function renderCraftingCraftColumn(
  state: GameState,
  actionIds: ActionId[],
  selectedCraftingMaterial: CraftingMaterialId,
  category: { id: CraftingProductCategory; label: string },
  actionLoopTarget: ActionLoopTarget
): string {
  const categoryActionIds = actionIds.filter((actionId) => craftingRecipeMetadata[actionId]?.productCategory === category.id);

  return `
    <section class="smithing-craft-column crafting-craft-column crafting-category-card" aria-label="${category.label} recipes">
      <div class="smithing-craft-column-heading crafting-category-heading">
        <span>${category.label}</span>
        <small>${categoryActionIds.length}</small>
      </div>
      ${
        categoryActionIds.length
          ? `<div class="smithing-recipe-grid crafting-recipe-grid crafting-category-recipes">${categoryActionIds
              .map((actionId) => renderCraftingRecipeCard(state, actionId, actionLoopTarget))
              .join("")}</div>`
          : `<div class="smithing-empty-column">No ${craftingMaterialLabels[selectedCraftingMaterial].toLowerCase()} ${category.label.toLowerCase()} yet.</div>`
      }
    </section>
  `;
}

function getCraftingActionButtonView(state: GameState, actionId: ActionId, actionLoopTarget: ActionLoopTarget) {
  const definition = getActionDefinition(actionId);
  if (!definition || !isCraftingRecipeActionId(actionId)) {
    return null;
  }

  const unlocked = isActionUnlocked(state, actionId);
  const cost = getActionCost(actionId);
  const canStart = canStartAction(state, actionId);
  const targetLoop = actionLoopTarget ? getActionLoop(state, actionLoopTarget.loopId) : null;
  const running = getCurrentAction(state);
  const assigningLoopAction = Boolean(actionLoopTarget && targetLoop);
  const canAssignFollowUp = Boolean(
    assigningLoopAction && targetLoop && actionLoopTarget && canInsertActionInSavedLoop(targetLoop, actionLoopTarget.afterIndex, actionId)
  );
  const active = running ? getActiveActionId(running) === actionId : false;
  const disabled = assigningLoopAction ? !canAssignFollowUp : !canStart || active;
  const missingCostText = getMissingCostText(state, cost);
  const lockReason = canStart ? "" : unlocked ? missingCostText : getActionLockReason(state, actionId);
  const statusText = assigningLoopAction
    ? canAssignFollowUp
      ? "Set as action loop step"
      : "Not valid for this loop"
    : active
      ? "Running"
      : !canStart && lockReason
        ? lockReason
        : "Ready";
  const buttonLabel = assigningLoopAction ? "Set" : active ? "Running" : canStart ? "Start" : "Locked";
  const tooltipRows = getActionTooltipRows(actionId, definition.durationMs);

  return {
    definition,
    cost,
    unlocked,
    canAssignFollowUp,
    active,
    disabled,
    statusText,
    buttonLabel,
    tooltipRows
  };
}

function renderCraftingRecipeCard(state: GameState, actionId: ActionId, actionLoopTarget: ActionLoopTarget): string {
  const view = getCraftingActionButtonView(state, actionId, actionLoopTarget);
  if (!view) {
    return "";
  }

  const { definition, cost, unlocked, canAssignFollowUp, active, disabled, statusText, buttonLabel, tooltipRows } = view;
  const displayLabel = getCraftingRecipeDisplayLabel(definition.label);
  const costText = describeCost(cost);

  return `
    <button
      class="smithing-recipe-card crafting-recipe-card ${active ? "active" : ""} ${canAssignFollowUp ? "assignable" : ""} ${!unlocked && !canAssignFollowUp ? "locked" : ""}"
      type="button"
      data-command="start-action"
      data-id="${actionId}"
      data-editor-id="crafting-recipe-${actionId}"
      data-editor-label="Crafting recipe: ${displayLabel}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${disabled}"
      data-tooltip-source
      aria-disabled="${disabled}"
      aria-label="${buttonLabel} ${displayLabel}. Uses ${costText}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${renderActionIcon(actionId)}</span>
      ${renderActionTooltip(displayLabel, tooltipRows, statusText)}
    </button>
  `;
}

function getCraftingRecipeDisplayLabel(label: string): string {
  if (label === "Craft Lowest Tool") {
    return "Lowest Stock Tool";
  }

  return label.replace(/^Craft\s+/, "");
}

function getCraftingRecipeOutputText(actionId: ActionId): string {
  const craftedTool = getCraftedToolDefinitionForAction(actionId);
  if (craftedTool) {
    return `1 ${craftedTool.label}`;
  }

  switch (actionId) {
    case "craftLowestTool":
      return "Lowest Stock";
    case "craftWoodenSpoon":
      return "1 Wooden Spoon";
    case "craftWoodenBowl":
      return "1 Wooden Bowl";
    default:
      return getActionDefinition(actionId)?.label.replace(/^Craft /, "1 ") ?? "1 item";
  }
}

function renderSmithingActionPanel(
  state: GameState,
  actionIds: ActionId[],
  selectedSmithingMaterial: SmithingMaterialId,
  actionLoopTarget: ActionLoopTarget,
  now: number
): string {
  const smeltingIds = actionIds.filter((actionId) => smeltingActionIds.some((id) => id === actionId));
  const smithingIds = actionIds.filter((actionId) => metalworkingActionIds.some((id) => id === actionId));
  const fuel = getFurnaceFuelStatus(state);
  const activeMaterial = resolveSelectedSmithingMaterial(selectedSmithingMaterial, smeltingIds);

  return `
    <section class="action-panel smithing-action-panel" data-editor-id="action-panel-smithing" data-editor-label="Smithing action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card">
        <div class="smithing-workbench">
          <div class="smithing-furnace-column">
            ${renderSmithingFurnaceStatus(fuel)}
            ${renderSmithingActiveSmelt(state, now)}
          </div>
          ${renderSmithingSmeltingSection(state, smeltingIds, activeMaterial, actionLoopTarget)}
        </div>
        ${renderSmithingCraftColumns(state, smithingIds, activeMaterial, actionLoopTarget)}
      </div>
    </section>
  `;
}

function resolveSelectedSmithingMaterial(
  selectedSmithingMaterial: SmithingMaterialId,
  smeltingIds: ActionId[]
): SmithingMaterialId {
  const availableMaterials = smeltingIds
    .map((actionId) => getSmithingRecipe(actionId)?.material)
    .filter((material): material is SmithingMaterialId => Boolean(material));

  return availableMaterials.includes(selectedSmithingMaterial)
    ? selectedSmithingMaterial
    : (availableMaterials[0] ?? selectedSmithingMaterial);
}

function renderSmithingFurnaceStatus(fuel: ReturnType<typeof getFurnaceFuelStatus>): string {
  return `
    <div class="smithing-status-grid">
      <div class="smithing-status-item">
        <span>Furnace</span>
        <strong>${fuel.furnaceBuilt ? "Stone Furnace" : "Not built"}</strong>
      </div>
      <div class="smithing-status-item">
        <span>Coal</span>
        <strong>${fuel.coal}</strong>
      </div>
      <div class="smithing-status-item">
        <span>Fuel</span>
        <strong>${fuel.furnaceBuilt ? (fuel.coal > 0 ? "Ready" : "Needs coal") : "Furnace locked"}</strong>
      </div>
    </div>
  `;
}

function renderSmithingActiveSmelt(state: GameState, now: number): string {
  const running = getCurrentAction(state);
  const activeActionId = running ? getActiveActionId(running) : null;
  if (!running || !activeActionId || !isSmeltingAction(activeActionId)) {
    return `
      <div class="smithing-active-row idle">
        <span>No active smelt</span>
        <strong>Furnace idle</strong>
      </div>
    `;
  }

  const recipe = getSmithingRecipe(activeActionId);
  const progress = clamp(getActionProgress(state, now), 0, 1);

  return `
    <div class="smithing-active-row">
      <span>Active smelt</span>
      <strong>${recipe?.label ?? "Smelting"}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-smithing-action-progress style="transform: scaleX(${progress.toFixed(4)})"></span>
        <em data-smithing-action-remaining>${formatDuration(running.endsAt - now)}</em>
      </div>
    </div>
  `;
}

function renderSmithingSmeltingSection(
  state: GameState,
  actionIds: ActionId[],
  selectedSmithingMaterial: SmithingMaterialId,
  actionLoopTarget: ActionLoopTarget
): string {
  return `
    <div class="smithing-smelt-column">
      <div class="section-heading">
        <span>Smelting</span>
      </div>
      <div class="smithing-smelt-grid">
        ${actionIds
          .map((actionId) => renderSmithingSmeltCard(state, actionId, selectedSmithingMaterial, actionLoopTarget))
          .join("")}
      </div>
    </div>
  `;
}

function renderSmithingSmeltCard(
  state: GameState,
  actionId: ActionId,
  selectedSmithingMaterial: SmithingMaterialId,
  actionLoopTarget: ActionLoopTarget
): string {
  const view = getSmithingActionButtonView(state, actionId, actionLoopTarget);
  if (!view) {
    return "";
  }

  const { definition, recipe, cost, active, disabled, statusText, buttonLabel, tooltipRows } = view;
  const selected = recipe.material === selectedSmithingMaterial;
  const smeltLabel = buttonLabel === "Set" ? "Set Smelt" : active ? "Smelting" : buttonLabel === "Start" ? "Smelt" : buttonLabel;

  return `
    <article class="smithing-smelt-card ${selected ? "selected" : ""} ${active ? "active" : ""}">
      <button
        class="smithing-smelt-select"
        type="button"
        data-command="select-smithing-material"
        data-id="${recipe.material}"
        aria-pressed="${selected}"
      >
        <span class="smithing-recipe-icon" aria-hidden="true">${renderActionIcon(actionId)}</span>
        <span class="smithing-recipe-copy">
          <strong>${smithingMaterialLabels[recipe.material]}</strong>
          <small>${selected ? "Selected material" : "Show recipes"}</small>
        </span>
        <span class="smithing-recipe-meta">
          <b>${getSmithingRecipeOutputText(recipe.actionId)}</b>
          <small>${describeCost(cost)}</small>
        </span>
      </button>
      <button
        class="smithing-smelt-button"
        type="button"
        data-command="start-action"
        data-id="${actionId}"
        data-disabled="${disabled}"
        data-tooltip-source
        aria-disabled="${disabled}"
        aria-label="${smeltLabel} ${definition.label}"
      >
        ${smeltLabel}
        ${renderActionTooltip(definition.label, tooltipRows, statusText)}
      </button>
    </article>
  `;
}

function renderSmithingCraftColumns(
  state: GameState,
  actionIds: ActionId[],
  selectedSmithingMaterial: SmithingMaterialId,
  actionLoopTarget: ActionLoopTarget
): string {
  const materialActionIds = actionIds.filter((actionId) => getSmithingRecipe(actionId)?.material === selectedSmithingMaterial);

  return `
    <div class="smithing-recipe-section smithing-craft-section">
      <div class="section-heading">
        <span>${smithingMaterialLabels[selectedSmithingMaterial]} Smithing</span>
        <small>Filtered by selected bar</small>
      </div>
      <div class="smithing-craft-columns">
        ${smithingProductCategories
          .map((category) => renderSmithingCraftColumn(state, materialActionIds, selectedSmithingMaterial, category, actionLoopTarget))
          .join("")}
      </div>
    </div>
  `;
}

function renderSmithingCraftColumn(
  state: GameState,
  actionIds: ActionId[],
  selectedSmithingMaterial: SmithingMaterialId,
  category: { id: SmithingProductCategory; label: string },
  actionLoopTarget: ActionLoopTarget
): string {
  const categoryActionIds = actionIds.filter((actionId) => (getSmithingRecipe(actionId)?.productCategory ?? "tool") === category.id);

  return `
    <section class="smithing-craft-column" aria-label="${category.label} recipes">
      <div class="smithing-craft-column-heading">
        <span>${category.label}</span>
        <small>${categoryActionIds.length}</small>
      </div>
      ${
        categoryActionIds.length
          ? `<div class="smithing-recipe-grid">${categoryActionIds
              .map((actionId) => renderSmithingRecipeCard(state, actionId, actionLoopTarget))
              .join("")}</div>`
          : `<div class="smithing-empty-column">No ${smithingMaterialLabels[selectedSmithingMaterial].toLowerCase()} ${category.label.toLowerCase()} recipes yet.</div>`
      }
    </section>
  `;
}

function getSmithingActionButtonView(state: GameState, actionId: ActionId, actionLoopTarget: ActionLoopTarget) {
  const definition = getActionDefinition(actionId);
  const recipe = getSmithingRecipe(actionId);
  if (!definition || !recipe) {
    return null;
  }

  const unlocked = isActionUnlocked(state, actionId);
  const cost = getActionCost(actionId);
  const canStart = canStartAction(state, actionId);
  const targetLoop = actionLoopTarget ? getActionLoop(state, actionLoopTarget.loopId) : null;
  const running = getCurrentAction(state);
  const assigningLoopAction = Boolean(actionLoopTarget && targetLoop);
  const canAssignFollowUp = Boolean(
    assigningLoopAction && targetLoop && actionLoopTarget && canInsertActionInSavedLoop(targetLoop, actionLoopTarget.afterIndex, actionId)
  );
  const active = running ? getActiveActionId(running) === actionId : false;
  const disabled = assigningLoopAction ? !canAssignFollowUp : !canStart || active;
  const missingCostText = getMissingCostText(state, cost);
  const lockReason = canStart ? "" : unlocked ? missingCostText : getActionLockReason(state, actionId);
  const statusText = assigningLoopAction
    ? canAssignFollowUp
      ? "Set as action loop step"
      : "Not valid for this loop"
    : active
      ? "Running"
      : !canStart && lockReason
        ? lockReason
        : "Ready";
  const buttonLabel = assigningLoopAction ? "Set" : active ? "Running" : canStart ? "Start" : "Locked";
  const tooltipRows = getActionTooltipRows(actionId, definition.durationMs);

  return {
    definition,
    recipe,
    cost,
    unlocked,
    canAssignFollowUp,
    active,
    disabled,
    statusText,
    buttonLabel,
    tooltipRows
  };
}

function renderSmithingRecipeCard(state: GameState, actionId: ActionId, actionLoopTarget: ActionLoopTarget): string {
  const view = getSmithingActionButtonView(state, actionId, actionLoopTarget);
  if (!view) {
    return "";
  }

  const { definition, recipe, cost, unlocked, canAssignFollowUp, active, disabled, statusText, buttonLabel, tooltipRows } = view;

  return `
    <button
      class="smithing-recipe-card ${active ? "active" : ""} ${canAssignFollowUp ? "assignable" : ""} ${!unlocked && !canAssignFollowUp ? "locked" : ""}"
      type="button"
      data-command="start-action"
      data-id="${actionId}"
      data-editor-id="smithing-recipe-${actionId}"
      data-editor-label="Smithing recipe: ${definition.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${disabled}"
      data-tooltip-source
      aria-disabled="${disabled}"
      aria-label="${buttonLabel} ${definition.label}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${renderActionIcon(actionId)}</span>
      <span class="smithing-recipe-copy">
        <strong>${definition.label}</strong>
        <small>${statusText}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${getSmithingRecipeOutputText(recipe.actionId)}</b>
        <small>${describeCost(cost)}</small>
      </span>
      ${renderActionTooltip(definition.label, tooltipRows, statusText)}
    </button>
  `;
}

function renderAlchemyActionPanel(
  state: GameState,
  actionIds: ActionId[],
  selectedAlchemyPanel: AlchemyPanelId,
  actionLoopTarget: ActionLoopTarget,
  now: number
): string {
  const activePanel = alchemyPanelTabs.some((panel) => panel.id === selectedAlchemyPanel)
    ? selectedAlchemyPanel
    : "brewing";

  return `
    <section class="action-panel alchemy-action-panel" data-editor-id="action-panel-alchemy" data-editor-label="Alchemy action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card alchemy-panel-card">
        ${renderAlchemyPanelTabs(activePanel)}
        ${
          activePanel === "brewing"
            ? renderAlchemyBrewingPanel(state, actionIds, actionLoopTarget, now)
            : renderAlchemyBlankPanel(activePanel)
        }
      </div>
    </section>
  `;
}

function renderAlchemyPanelTabs(activePanel: AlchemyPanelId): string {
  return `
    <div class="alchemy-mode-tabs" role="tablist" aria-label="Alchemy panels">
      ${alchemyPanelTabs
        .map((panel) => {
          const active = panel.id === activePanel;
          return `
            <button
              class="alchemy-mode-button ${active ? "active" : ""}"
              type="button"
              role="tab"
              data-command="select-alchemy-panel"
              data-id="${panel.id}"
              aria-selected="${active}"
              aria-pressed="${active}"
            >
              ${panel.label}
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderAlchemyBrewingPanel(
  state: GameState,
  actionIds: ActionId[],
  actionLoopTarget: ActionLoopTarget,
  now: number
): string {
  const brewingIds = actionIds.filter((actionId) => brewingActionIds.some((id) => id === actionId));
  const vesselIds = brewingIds.filter((actionId) => getAlchemyRecipe(actionId)?.kind === "vessel");
  const potionIds = brewingIds.filter((actionId) => getAlchemyRecipe(actionId)?.kind === "potion");

  return `
    <div class="alchemy-brewing-panel">
      ${renderAlchemyStationStatus(state)}
      ${renderAlchemyActiveWork(state, now)}
      ${renderAlchemyRecipeSection(state, alchemyRecipeKindLabels.vessel, vesselIds, actionLoopTarget)}
      ${renderAlchemyRecipeSection(state, alchemyRecipeKindLabels.potion, potionIds, actionLoopTarget)}
    </div>
  `;
}

function renderAlchemyStationStatus(state: GameState): string {
  const status = getAlchemyStationStatus(state);

  return `
    <div class="smithing-status-grid alchemy-status-grid">
      <div class="smithing-status-item">
        <span>Furnace</span>
        <strong>${status.furnaceBuilt ? "Stone Furnace" : "Not built"}</strong>
      </div>
      <div class="smithing-status-item">
        <span>Coal</span>
        <strong>${status.coal}</strong>
      </div>
      <div class="smithing-status-item">
        <span>Vials</span>
        <strong>${status.vials}</strong>
      </div>
    </div>
  `;
}

function renderAlchemyActiveWork(state: GameState, now: number): string {
  const running = getCurrentAction(state);
  const activeActionId = running ? getActiveActionId(running) : null;
  const recipe = activeActionId ? getAlchemyRecipe(activeActionId) : undefined;
  if (!running || !recipe) {
    return `
      <div class="smithing-active-row idle alchemy-active-row">
        <span>No active brew</span>
        <strong>Bench idle</strong>
      </div>
    `;
  }

  const progress = clamp(getActionProgress(state, now), 0, 1);

  return `
    <div class="smithing-active-row alchemy-active-row">
      <span>Active alchemy</span>
      <strong>${recipe.label}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-alchemy-action-progress style="transform: scaleX(${progress.toFixed(4)})"></span>
        <em data-alchemy-action-remaining>${formatDuration(running.endsAt - now)}</em>
      </div>
    </div>
  `;
}

function renderAlchemyRecipeSection(
  state: GameState,
  label: string,
  actionIds: ActionId[],
  actionLoopTarget: ActionLoopTarget
): string {
  if (!actionIds.length) {
    return "";
  }

  return `
    <div class="smithing-recipe-section alchemy-recipe-section">
      <div class="section-heading">
        <span>${label}</span>
      </div>
      <div class="smithing-recipe-grid alchemy-recipe-grid">
        ${actionIds.map((actionId) => renderAlchemyRecipeCard(state, actionId, actionLoopTarget)).join("")}
      </div>
    </div>
  `;
}

function renderAlchemyRecipeCard(state: GameState, actionId: ActionId, actionLoopTarget: ActionLoopTarget): string {
  const view = getAlchemyActionButtonView(state, actionId, actionLoopTarget);
  if (!view) {
    return "";
  }

  const { definition, recipe, cost, unlocked, canAssignFollowUp, active, disabled, statusText, buttonLabel, tooltipRows } = view;

  return `
    <button
      class="smithing-recipe-card alchemy-recipe-card ${active ? "active" : ""} ${canAssignFollowUp ? "assignable" : ""} ${!unlocked && !canAssignFollowUp ? "locked" : ""}"
      type="button"
      data-command="start-action"
      data-id="${actionId}"
      data-editor-id="alchemy-recipe-${actionId}"
      data-editor-label="Alchemy recipe: ${definition.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${disabled}"
      data-tooltip-source
      aria-disabled="${disabled}"
      aria-label="${buttonLabel} ${definition.label}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${renderActionIcon(actionId)}</span>
      <span class="smithing-recipe-copy">
        <strong>${definition.label}</strong>
        <small>${statusText}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${getAlchemyRecipeOutputText(recipe.actionId)}</b>
        <small>${describeCost(cost)}</small>
      </span>
      ${renderActionTooltip(definition.label, tooltipRows, statusText)}
    </button>
  `;
}

function getAlchemyActionButtonView(state: GameState, actionId: ActionId, actionLoopTarget: ActionLoopTarget) {
  const definition = getActionDefinition(actionId);
  const recipe = getAlchemyRecipe(actionId);
  if (!definition || !recipe) {
    return null;
  }

  const unlocked = isActionUnlocked(state, actionId);
  const cost = getActionCost(actionId);
  const canStart = canStartAction(state, actionId);
  const targetLoop = actionLoopTarget ? getActionLoop(state, actionLoopTarget.loopId) : null;
  const running = getCurrentAction(state);
  const assigningLoopAction = Boolean(actionLoopTarget && targetLoop);
  const canAssignFollowUp = Boolean(
    assigningLoopAction && targetLoop && actionLoopTarget && canInsertActionInSavedLoop(targetLoop, actionLoopTarget.afterIndex, actionId)
  );
  const active = running ? getActiveActionId(running) === actionId : false;
  const disabled = assigningLoopAction ? !canAssignFollowUp : !canStart || active;
  const missingCostText = getMissingCostText(state, cost);
  const lockReason = canStart ? "" : unlocked ? missingCostText : getActionLockReason(state, actionId);
  const statusText = assigningLoopAction
    ? canAssignFollowUp
      ? "Set as action loop step"
      : "Not valid for this loop"
    : active
      ? "Running"
      : !canStart && lockReason
        ? lockReason
        : "Ready";
  const buttonLabel = assigningLoopAction ? "Set" : active ? "Running" : canStart ? "Start" : "Locked";
  const tooltipRows = getActionTooltipRows(actionId, definition.durationMs);

  return {
    definition,
    recipe,
    cost,
    unlocked,
    canAssignFollowUp,
    active,
    disabled,
    statusText,
    buttonLabel,
    tooltipRows
  };
}

function renderAlchemyBlankPanel(panelId: AlchemyPanelId): string {
  const panel = alchemyPanelTabs.find((entry) => entry.id === panelId) ?? alchemyPanelTabs[0];

  return `
    <div class="alchemy-empty-panel" role="tabpanel" aria-label="${panel.emptyLabel}">
      <div class="smithing-empty-column">No ${panel.emptyLabel.toLowerCase()} recipes yet.</div>
    </div>
  `;
}

function renderTextileActionPanel(
  state: GameState,
  actionIds: ActionId[],
  actionLoopTarget: ActionLoopTarget,
  now: number
): string {
  const rettingIds = actionIds.filter((actionId) => textileRettingActionIds.some((id) => id === actionId));
  const fiberIds = actionIds.filter((actionId) => textileFiberActionIds.some((id) => id === actionId));
  const spinningIds = actionIds.filter((actionId) => textileSpinningActionIds.some((id) => id === actionId));
  const weavingIds = actionIds.filter((actionId) => textileWeavingActionIds.some((id) => id === actionId));
  const toolingIds = actionIds.filter((actionId) => textileToolingActionIds.some((id) => id === actionId));
  const sewingIds = actionIds.filter((actionId) => textileSewingActionIds.some((id) => id === actionId));

  return `
    <section class="action-panel textile-action-panel" data-editor-id="action-panel-textiles" data-editor-label="Tailoring action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card textile-panel-card">
        <div class="smithing-status-grid textile-status-grid">
          <div class="smithing-status-item">
            <span>Flax Chain</span>
            <strong>${getTextileChainStatus(state)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Stations</span>
            <strong>${getTextileStationStatus(state)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Needles</span>
            <strong>${getTextileNeedleStatus(state)}</strong>
          </div>
        </div>
        ${renderTextileActiveWork(state, now)}
        ${renderTextileRecipeSection(state, "Flax Prep", [...rettingIds, ...fiberIds], actionLoopTarget)}
        ${renderTextileRecipeSection(state, "Spinning", spinningIds, actionLoopTarget)}
        ${renderTextileRecipeSection(state, "Weaving", weavingIds, actionLoopTarget)}
        ${renderTextileRecipeSection(state, "Needles", toolingIds, actionLoopTarget)}
        ${renderTextileRecipeSection(state, "Sewing", sewingIds, actionLoopTarget)}
      </div>
    </section>
  `;
}

function renderTextileActiveWork(state: GameState, now: number): string {
  const running = getCurrentAction(state);
  const activeActionId = running ? getActiveActionId(running) : null;
  const recipe = activeActionId ? getTextileRecipe(activeActionId) : undefined;
  if (!running || !recipe) {
    return `
      <div class="smithing-active-row idle textile-active-row">
        <span>No active tailoring work</span>
        <strong>Chain idle</strong>
      </div>
    `;
  }

  const progress = clamp(getActionProgress(state, now), 0, 1);

  return `
    <div class="smithing-active-row textile-active-row">
      <span>Active tailoring work</span>
      <strong>${recipe.label}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-textile-action-progress style="transform: scaleX(${progress.toFixed(4)})"></span>
        <em data-textile-action-remaining>${formatDuration(running.endsAt - now)}</em>
      </div>
    </div>
  `;
}

function renderTextileRecipeSection(
  state: GameState,
  label: string,
  actionIds: ActionId[],
  actionLoopTarget: ActionLoopTarget
): string {
  if (!actionIds.length) {
    return "";
  }

  return `
    <div class="smithing-recipe-section textile-recipe-section">
      <div class="section-heading">
        <span>${label}</span>
      </div>
      <div class="smithing-recipe-grid textile-recipe-grid">
        ${actionIds.map((actionId) => renderTextileRecipeCard(state, actionId, actionLoopTarget)).join("")}
      </div>
    </div>
  `;
}

function renderTextileRecipeCard(state: GameState, actionId: ActionId, actionLoopTarget: ActionLoopTarget): string {
  const definition = getActionDefinition(actionId);
  const recipe = getTextileRecipe(actionId);
  if (!definition || !recipe) {
    return "";
  }

  const unlocked = isActionUnlocked(state, actionId);
  const cost = getActionCost(actionId);
  const canStart = canStartAction(state, actionId);
  const targetLoop = actionLoopTarget ? getActionLoop(state, actionLoopTarget.loopId) : null;
  const running = getCurrentAction(state);
  const assigningLoopAction = Boolean(actionLoopTarget && targetLoop);
  const canAssignFollowUp = Boolean(
    assigningLoopAction && targetLoop && actionLoopTarget && canInsertActionInSavedLoop(targetLoop, actionLoopTarget.afterIndex, actionId)
  );
  const active = running ? getActiveActionId(running) === actionId : false;
  const disabled = assigningLoopAction ? !canAssignFollowUp : !canStart || active;
  const missingCostText = getMissingCostText(state, cost);
  const lockReason = canStart ? "" : unlocked ? missingCostText : getActionLockReason(state, actionId);
  const statusText = assigningLoopAction
    ? canAssignFollowUp
      ? "Set as action loop step"
      : "Not valid for this loop"
    : active
      ? "Running"
      : !canStart && lockReason
        ? lockReason
        : "Ready";
  const buttonLabel = assigningLoopAction ? "Set" : active ? "Running" : canStart ? "Start" : "Locked";
  const tooltipRows = getActionTooltipRows(actionId, definition.durationMs);

  return `
    <button
      class="smithing-recipe-card textile-recipe-card ${active ? "active" : ""} ${canAssignFollowUp ? "assignable" : ""} ${!unlocked && !canAssignFollowUp ? "locked" : ""}"
      type="button"
      data-command="start-action"
      data-id="${actionId}"
      data-editor-id="textile-recipe-${actionId}"
      data-editor-label="Tailoring recipe: ${definition.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${disabled}"
      data-tooltip-source
      aria-disabled="${disabled}"
      aria-label="${buttonLabel} ${definition.label}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${renderActionIcon(actionId)}</span>
      <span class="smithing-recipe-copy">
        <strong>${definition.label}</strong>
        <small>${statusText}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${getTextileRecipeOutputText(recipe)}</b>
        <small>${describeCost(cost)}</small>
      </span>
      ${renderActionTooltip(definition.label, tooltipRows, statusText)}
    </button>
  `;
}

function renderCookingActionPanel(state: GameState, now: number): string {
  const recipes = getAvailableCookingRecipes(state);
  const stews = recipes.filter((recipe) => recipe.tags.includes("stew"));
  const cookingSkill = state.skills.cooking;
  const cookingProgress = getSkillProgress(cookingSkill);

  return `
    <section class="action-panel cooking-action-panel" data-editor-id="action-panel-cooking" data-editor-label="Cooking recipe panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card cooking-panel-card">
        <div class="smithing-status-grid cooking-status-grid">
          <div class="smithing-status-item">
            <span>Station</span>
            <strong>${getCookingStationStatus(state, "campfire", now)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Cooking</span>
            <strong>Lv ${cookingSkill.level} (${formatSkillXp(cookingProgress.xpIntoLevel)}/${formatSkillXp(cookingProgress.xpForLevel)})</strong>
          </div>
          <div class="smithing-status-item">
            <span>Queue</span>
            <strong>${state.cooking.queue.length}</strong>
          </div>
        </div>
        ${renderCookingActiveWork(state, now)}
        ${renderCookingQueue(state, now)}
        ${renderCookingRecipeSection(state, "Stews", stews, now)}
      </div>
    </section>
  `;
}

function renderCookingActiveWork(state: GameState, now: number): string {
  const active = getActiveCookingEntry(state);
  const activeRecipe = active ? getAvailableCookingRecipes(state).find((recipe) => recipe.id === active.recipeId) : undefined;
  if (!active || !activeRecipe) {
    return `
      <div class="smithing-active-row idle cooking-active-row">
        <span>No active cooking</span>
        <strong>${state.cooking.queue.length ? "Waiting for campfire" : "Queue idle"}</strong>
      </div>
    `;
  }

  const progress = clamp(getCookingProgress(active, now), 0, 1);
  const remainingMs = Math.max(0, (active.endsAt ?? now) - now);

  return `
    <div class="smithing-active-row cooking-active-row">
      <span>Active cooking</span>
      <strong>${activeRecipe.name}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-cooking-action-progress style="transform: scaleX(${progress.toFixed(4)})"></span>
        <em data-cooking-action-remaining>${formatDuration(remainingMs)}</em>
      </div>
    </div>
  `;
}

function renderCookingQueue(state: GameState, now: number): string {
  const waitingEntries = state.cooking.queue.filter((entry) => entry.startedAt === null || entry.endsAt === null);
  if (!waitingEntries.length) {
    return "";
  }

  return `
    <div class="cooking-queue-panel">
      <div class="section-heading">
        <span>Queued</span>
      </div>
      <div class="cooking-queue-list">
        ${waitingEntries
          .map((entry) => {
            const recipe = getAvailableCookingRecipes(state).find((candidate) => candidate.id === entry.recipeId);
            return `
              <div class="cooking-queue-row">
                <strong>${recipe?.name ?? entry.recipeId}</strong>
                <small>${isCampfireLit(state, now) ? "Waiting turn" : "Needs lit campfire"}</small>
              </div>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderCookingRecipeSection(
  state: GameState,
  label: string,
  recipes: CookingRecipeDefinition[],
  now: number
): string {
  if (!recipes.length) {
    return "";
  }

  return `
    <div class="smithing-recipe-section cooking-recipe-section">
      <div class="section-heading">
        <span>${label}</span>
      </div>
      <div class="smithing-recipe-grid cooking-recipe-grid">
        ${recipes.map((recipe) => renderCookingRecipeCard(state, recipe, now)).join("")}
      </div>
    </div>
  `;
}

function renderCookingRecipeCard(state: GameState, recipe: CookingRecipeDefinition, now: number): string {
  const canQueue = canQueueCookingRecipe(state, recipe, now);
  const lockReason = getCookingRecipeLockReason(state, recipe, now);
  const disabled = !canQueue;
  const cost = getCookingRecipeCost(recipe);
  const completedCount = state.cooking.completedRecipeCounts[recipe.id] ?? 0;
  const tooltipRows: ActionTooltipRow[] = [
    { label: "Station", value: "Campfire" },
    { label: "Speed", value: formatDuration(recipe.cookTimeMs) },
    { label: "Skill", value: `Cooking +${formatSkillXp(recipe.xpReward)} XP` },
    { label: "Level", value: `Cooking Lv ${recipe.levelRequirement}` },
    { label: "Uses", value: getCookingRecipeRequirementText(recipe) },
    { label: "Makes", value: getCookingRecipeOutputText(recipe) },
    { label: "Nutrition", value: `${recipe.nutrition.hunger ?? 0} hunger` },
    { label: "Cooked", value: `${completedCount}` },
    { label: "Eating", value: "Stews need a Wooden Spoon" },
    { label: "Failure", value: `${Math.round(recipe.failureChance * 100)}% base chance later` }
  ];
  const statusText = canQueue ? "Ready" : lockReason;

  return `
    <button
      class="smithing-recipe-card cooking-recipe-card ${!canQueue ? "locked" : ""}"
      type="button"
      data-command="queue-cooking"
      data-id="${recipe.id}"
      data-editor-id="cooking-recipe-${recipe.id}"
      data-editor-label="Cooking recipe: ${recipe.name}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${disabled}"
      data-tooltip-source
      aria-disabled="${disabled}"
      aria-label="${canQueue ? "Queue" : "Locked"} ${recipe.name}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true"><span class="action-card-glyph">ST</span></span>
      <span class="smithing-recipe-copy">
        <strong>${recipe.name}</strong>
        <small>${statusText}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${getCookingRecipeOutputText(recipe)}</b>
        <small>${describeCost(cost)}${completedCount ? `; cooked ${completedCount}` : ""}</small>
      </span>
      ${renderActionTooltip(recipe.name, tooltipRows, statusText)}
    </button>
  `;
}

function getTextileChainStatus(state: GameState): string {
  if (state.seenResources.includes("linenCloth") || state.inventory.linenCloth > 0) {
    return "Cloth";
  }
  if (state.seenResources.includes("linenThread") || state.inventory.linenThread > 0) {
    return "Thread";
  }
  if (state.seenResources.includes("flaxFiber") || state.inventory.flaxFiber > 0) {
    return "Fiber";
  }
  if (state.seenResources.includes("rettedFlax") || state.inventory.rettedFlax > 0) {
    return "Retted";
  }
  return state.seenResources.includes("flaxPlant") || state.inventory.flaxPlant > 0 ? "Fresh flax" : "Find flax";
}

function getTextileStationStatus(state: GameState): string {
  const hasWheel = state.buildings.primitiveSpinningWheel;
  const hasLoom = state.buildings.primitiveLoom;
  if (hasWheel && hasLoom) {
    return "Wheel + Loom";
  }
  if (hasWheel) {
    return "Wheel built";
  }
  if (hasLoom) {
    return "Loom built";
  }
  return "Hand work";
}

function getTextileNeedleStatus(state: GameState): string {
  const copper = Math.max(0, Math.floor(state.inventory.copperNeedle ?? 0));
  const bronze = Math.max(0, Math.floor(state.inventory.bronzeNeedle ?? 0));
  if (copper || bronze) {
    return `Copper ${copper} / Bronze ${bronze}`;
  }

  return "None";
}

function renderCurrentActionPanel(
  state: GameState,
  barVisual: CurrentActionBarVisual,
  locationMenuOpen: boolean,
  now: number
): string {
  const running = getCurrentAction(state);
  const selectedCharacter = getSelectedCharacter(state);
  const actionBanner = renderCurrentActionSkillBanner(barVisual);

  if (!running) {
    return `
      <section class="current-action-panel panel idle" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="current-action-content idle with-skill-banner">
          ${actionBanner}
          <div class="current-action-detail current-action-location">
            ${renderCurrentActionLocationDropdown(selectedCharacter.locationId, locationMenuOpen)}
          </div>
          <div class="current-action-detail current-action-copy">
            <strong>No active work</strong>
          </div>
          ${renderReturnToCampButton(true)}
          <div class="progress-track idle">
            <span data-action-progress style="transform: scaleX(0)"></span>
            <em data-action-remaining>Idle</em>
          </div>
        </div>
      </section>
    `;
  }

  const progress = clamp(getActionProgress(state, now), 0, 1);
  const remaining = formatDuration(running.endsAt - now);
  const locationId = getCurrentActionVisualLocationId(state, running);
  const actionTitle = getRunningActionTitle(state);

  return `
    <section class="current-action-panel panel" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="current-action-content with-skill-banner">
        ${actionBanner}
        <div class="current-action-detail current-action-location">
          ${renderCurrentActionLocationDropdown(locationId, locationMenuOpen)}
        </div>
        <div class="current-action-detail current-action-copy">
          <strong>${actionTitle}</strong>
        </div>
        ${renderReturnToCampButton(false)}
        <div class="progress-track">
          <span data-action-progress style="transform: scaleX(${progress.toFixed(4)})"></span>
          <em data-action-remaining>${remaining}</em>
        </div>
      </div>
    </section>
  `;
}

function renderActionLoopControls(
  state: GameState,
  loopId: string | null,
  actionLoopTarget: ActionLoopTarget,
  selectedLoopIndex: number
): string {
  const loop = getActionLoop(state, loopId);
  if (!loop) {
    return "";
  }

  const safeSelectedIndex = Math.min(loop.actionIds.length - 1, Math.max(0, selectedLoopIndex));

  return `
    <div class="action-loop-controls" aria-label="Action loop">
      ${loop.actionIds
        .map((actionId, index) =>
          renderActionLoopStep(state, loop, actionId, index, safeSelectedIndex, actionLoopTarget)
        )
        .join("")}
    </div>
  `;
}

function renderReturnToCampButton(disabled: boolean): string {
  return `
    <button
      class="icon-button current-action-return-button"
      type="button"
      data-command="stop-action"
      title="Stop and return to camp"
      aria-label="Stop action and return to camp"
      ${disabled ? "disabled" : ""}
    >
      <img src="${campLocationDefinition.iconUrl}" alt="" aria-hidden="true" />
    </button>
  `;
}

function renderCurrentActionSkillBanner(visual: CurrentActionBarVisual): string {
  if (!visual.bannerUrl && !visual.label) {
    return "";
  }

  return `
    <div class="current-action-skill-banner ${visual.bannerUrl ? "has-image" : "has-title"} ${visual.skillId ? `skill-${visual.skillId}` : ""}" aria-label="${visual.label}">
      ${
        visual.bannerUrl
          ? `<img src="${visual.bannerUrl}" alt="" aria-hidden="true" />`
          : `<span class="current-action-skill-title">${visual.label}</span>`
      }
    </div>
  `;
}

function renderActionLoopStep(
  state: GameState,
  loop: ActionLoop,
  actionId: ActionId,
  index: number,
  selectedLoopIndex: number,
  actionLoopTarget: ActionLoopTarget
): string {
  const selected = index === selectedLoopIndex;
  const assigning = actionLoopTarget?.loopId === loop.id && actionLoopTarget.afterIndex === index;
  const label = getActionLoopLabel(actionId);

  return `
    <div class="action-loop-row ${selected ? "selected" : ""}">
      <button
        class="action-loop-step ${selected ? "selected" : ""} ${assigning ? "assigning" : ""}"
        type="button"
        data-command="select-loop-step"
        data-loop-id="${loop.id}"
        data-id="${index}"
        aria-pressed="${selected}"
      >
        <span>${label}</span>
        <small>${getActionLoopStepSummary(state, loop, index)}</small>
      </button>
      ${
        selected
          ? `<span class="action-loop-row-tools">
              <button class="action-loop-icon" type="button" data-command="insert-loop-after" data-loop-id="${loop.id}" data-id="${index}" title="Add action after ${label}">+</button>
              <button class="action-loop-icon" type="button" data-command="remove-loop-step" data-loop-id="${loop.id}" data-id="${index}" title="Remove ${label}" ${loop.actionIds.length <= 1 ? "disabled" : ""}>-</button>
            </span>`
          : ""
      }
    </div>
  `;
}

function getActionLoopLabel(actionId: ActionId): string {
  if (actionId === "fishRiver") {
    return "Fishing";
  }

  return getActionDefinition(actionId)?.label ?? "Action";
}

function getActionLoopStepSummary(state: GameState, loop: ActionLoop, index: number): string {
  const actionId = loop.actionIds[index];
  const locationLabel = getActionLoopStepLocationLabel(actionId, loop.locationIds[index] ?? null);
  const rule = getActionLoopAdvanceRule(loop, index);
  return `${locationLabel} - ${getActionLoopAdvanceRuleLabel(state, rule, actionId)}`;
}

function renderCurrentActionLocationDropdown(locationId: CharacterLocationId, open: boolean): string {
  const location = getLocationImageDefinition(locationId);

  return `
    <div class="current-action-location-picker">
      <button
        class="current-action-location-button"
        type="button"
        data-command="toggle-current-action-location-menu"
        aria-expanded="${open}"
        aria-haspopup="menu"
        aria-label="Choose location, current ${location.label}"
      >
        <img class="current-action-location-banner" src="${location.iconUrl}" alt="" aria-hidden="true" />
      </button>
      ${open ? renderCurrentActionLocationMenu(locationId) : ""}
    </div>
  `;
}

function renderCurrentActionLocationMenu(activeLocationId: CharacterLocationId): string {
  const options: Array<{ id: CharacterLocationId; label: string; iconUrl: string }> = [
    { id: "camp", ...campLocationDefinition },
    ...locationDefinitions.map((location) => ({
      id: location.id,
      label: location.label,
      iconUrl: location.iconUrl
    }))
  ];

  return `
    <div class="current-action-location-menu" role="menu" aria-label="Locations">
      ${options
        .map((location) => {
          const active = location.id === activeLocationId;
          return `
            <button
              class="current-action-location-option ${active ? "active" : ""}"
              type="button"
              role="menuitemradio"
              aria-checked="${active}"
              aria-label="${location.label}"
              title="${location.label}"
              data-command="set-current-action-location"
              data-id="${location.id}"
            >
              <span class="current-action-location-option-image" aria-hidden="true">
                <img src="${location.iconUrl}" alt="" />
              </span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function getCurrentActionVisualLocationId(
  state: GameState,
  running: NonNullable<GameState["currentAction"]>
): CharacterLocationId {
  const selectedCharacter = getSelectedCharacter(state);
  const originLocation = getRunningOriginLocation(running, selectedCharacter.locationId);
  const targetLocation = getRunningTargetLocation(running);

  if (targetLocation !== "camp") {
    return targetLocation;
  }

  return originLocation !== "camp" ? originLocation : targetLocation;
}

function getLocationImageDefinition(locationId: CharacterLocationId): LocationImageDefinition {
  return locationId === "camp" ? campLocationDefinition : getLocation(locationId);
}

function getRunningActionTitle(state: GameState): string {
  const running = getCurrentAction(state);
  if (!running) {
    return "Working";
  }

  const targetLocation = getCharacterLocationLabel(getRunningTargetLocation(running));
  const originLocation = getCharacterLocationLabel(getRunningOriginLocation(running, "camp"));
  if (running.phase === "travelingTo") {
    return `Traveling to ${targetLocation}`;
  }

  if (running.phase === "travelingBack") {
    return `Returning to camp from ${originLocation}`;
  }

  if (running.phase === "followUp") {
    if (getActiveActionId(running) === "butcherFish") {
      return "Butchering Fish";
    }

    return getActionDefinition(getActiveActionId(running))?.label ?? "Working";
  }

  return getActionDefinition(running.actionId)?.label ?? "Working";
}

function getSelectedCharacter(state: GameState): GameState["characters"][number] {
  return state.characters.find((character) => character.id === state.selectedCharacterId) ?? state.characters[0];
}

function getPossessiveName(name: string): string {
  return name.endsWith("s") ? `${name}'` : `${name}'s`;
}

function getCharacterStatusText(state: GameState, character: GameState["characters"][number]): string {
  if (getCombatUnitForCharacter(state, character.id)) {
    return "fighting in The Ruins";
  }

  if (getCurrentAction(state, character.id)) {
    return getRunningActionStatus(state, character.id);
  }

  return `at ${getCharacterLocationLabel(character.locationId)}`;
}

function getRunningActionStatus(state: GameState, characterId = state.selectedCharacterId): string {
  const running = getCurrentAction(state, characterId);
  if (!running) {
    return "keeping still";
  }

  const targetLocation = getCharacterLocationLabel(getRunningTargetLocation(running));
  const originLocation = getCharacterLocationLabel(getRunningOriginLocation(running, "camp"));
  if (running.phase === "travelingTo") {
    return `traveling to ${targetLocation}`;
  }

  if (running.phase === "travelingBack") {
    return `returning to camp from ${originLocation}`;
  }

  if (running.phase === "followUp") {
    return getActionDefinition(getActiveActionId(running))?.verb ?? "working";
  }

  return getActionDefinition(running.actionId)?.verb ?? "working";
}

function getActiveActionId(running: NonNullable<GameState["currentAction"]>): ActionId {
  return running.phase === "followUp" && running.followUpActionId ? running.followUpActionId : running.actionId;
}

function getActionFilter(id: ActionFilterId): ActionFilter {
  return actionFilters.find((filter) => filter.id === id) ?? actionFilters[0];
}

function getCategoryFilters(categoryId: ActionCategoryId): ActionFilter[] {
  const category = actionCategories.find((entry) => entry.id === categoryId) ?? actionCategories[0];
  return category.filterIds.map((id) => getActionFilter(id));
}

function getActionCategoryIdForFilter(filterId: ActionFilterId): ActionCategoryId | null {
  return actionCategories.find((category) => category.filterIds.includes(filterId))?.id ?? null;
}

function getCurrentActionBarVisual(
  activeActionCategory: ActionCategoryId,
  activeActionFilter: ActionFilterId
): CurrentActionBarVisual {
  if (activeActionCategory === "camp") {
    return { label: "" };
  }

  const filter = getActionFilter(activeActionFilter);
  const skillId = filterSkillIds[filter.id];
  return {
    label: getSkillDefinition(skillId).label,
    skillId,
    bannerUrl: characterSkillBannerUrls[skillId]
  };
}

function getActionFilterIdForSkill(skillId: SkillId): ActionFilterId | null {
  return actionFilters.find((filter) => filterSkillIds[filter.id] === skillId)?.id ?? null;
}

function isActionCategoryId(id: string | undefined): id is ActionCategoryId {
  return actionCategories.some((category) => category.id === id);
}

function isSmithingMaterialId(id: string | undefined): id is SmithingMaterialId {
  return id === "copper" || id === "bronze";
}

function isAlchemyPanelId(id: string | undefined): id is AlchemyPanelId {
  return id === "brewing" || id === "transmutation" || id === "decomposition";
}

function isCraftingMaterialId(id: string | undefined): id is CraftingMaterialId {
  return id === "primitive";
}

function isActionFilterId(id: string | undefined): id is ActionFilterId {
  return actionFilters.some((filter) => filter.id === id);
}

function getLoopIndex(id: string | undefined, fallback: number): number {
  const parsed = Number(id);
  return Number.isFinite(parsed) ? Math.max(0, Math.floor(parsed)) : fallback;
}

function getLoopCommandId(button: HTMLElement, state: GameState, fallback: string | null): string | null {
  return getActionLoop(state, button.dataset.loopId ?? fallback)?.id ?? null;
}

function getAssignedActionLoopId(state: GameState): string | null {
  const selectedCharacter = getSelectedCharacter(state);
  return getActionLoop(state, selectedCharacter.actionLoopId)?.id ?? null;
}

function getAdvanceModePatch(
  state: GameState,
  loopId: string,
  index: number,
  mode: ActionLoopAdvanceMode
): Partial<ActionLoopAdvanceRule> {
  const loop = getActionLoop(state, loopId);
  const actionId = loop?.actionIds[index] ?? "gatherSticks";
  const currentRule = loop ? getActionLoopAdvanceRule(loop, index) : ({ mode: "smart" } satisfies ActionLoopAdvanceRule);
  if (mode !== "whenResourceAtLeast") {
    return { mode };
  }

  return {
    mode,
    resourceId: currentRule.resourceId ?? getDefaultLoopTargetResourceId(actionId),
    amount: currentRule.amount ?? 5,
    scope: currentRule.scope ?? "camp"
  };
}

function getActionLoopAdvanceRuleLabel(state: GameState, rule: ActionLoopAdvanceRule, actionId: ActionId): string {
  switch (rule.mode) {
    case "manual":
      return "stays here";
    case "afterCompletion":
      return "next after one";
    case "whenInventoryFull":
      return "next when pack fills";
    case "whenCannotStart":
      return "next when blocked";
    case "whenResourceAtLeast": {
      const resourceId = getActionLoopRuleResourceId(rule, actionId);
      const scope = rule.scope ?? "camp";
      const current = getResourceQuantity(state, resourceId, scope);
      return `${scope === "camp" ? "camp" : "carried"} ${getResourceLabel(resourceId)} ${current}/${rule.amount ?? 1}`;
    }
    case "smart":
    default:
      return "smart advance";
  }
}

function getActionLoopAdvanceRuleDescription(mode: ActionLoopAdvanceMode): string {
  switch (mode) {
    case "manual":
      return "This step repeats until the character can no longer perform it.";
    case "afterCompletion":
      return "The loop moves on after one finished work cycle.";
    case "whenInventoryFull":
      return "The loop moves on once carried inventory is full, then returns to camp if needed.";
    case "whenResourceAtLeast":
      return "The loop moves on when the selected stock reaches the target amount.";
    case "whenCannotStart":
      return "The loop repeats this step until materials, tools, or unlocks block it.";
    case "smart":
    default:
      return "Field work repeats until the pack fills; camp work advances after one completion.";
  }
}

function getActionLoopRuleResourceId(rule: ActionLoopAdvanceRule, actionId: ActionId): ResourceId {
  return isResourceId(rule.resourceId) ? rule.resourceId : getDefaultLoopTargetResourceId(actionId);
}

function getDefaultLoopTargetResourceId(actionId: ActionId): ResourceId {
  const forageResourceAction = getForageResourceActionDefinition(actionId);
  if (forageResourceAction) {
    return forageResourceAction.resourceId;
  }

  const outputId = getPrimaryActionOutputResourceId(actionId);
  if (outputId) {
    return outputId;
  }

  switch (actionId) {
    case "gatherSticks":
      return "stick";
    case "gatherStones":
      return "stone";
    case "gatherFlaxPlants":
      return "flaxPlant";
    case "gatherFlaxFibers":
      return "flaxFiber";
    case "gatherSand":
      return "sand";
    case "gatherWater":
      return "water";
    case "mineCoal":
      return "coal";
    case "mineCopper":
      return "copper";
    case "mineTin":
      return "tin";
    case "chopTrees":
      return "wood";
    case "huntSmallAnimals":
      return "rabbit";
    case "fishRiver":
      return "minnow";
    default:
      return "stick";
  }
}

function getPrimaryActionOutputResourceId(actionId: ActionId): ResourceId | null {
  const output =
    getSmithingRecipe(actionId)?.output ??
    getAlchemyRecipe(actionId)?.output ??
    getTextileRecipe(actionId)?.output ??
    getStaticActionOutput(actionId);
  const resourceId = Object.keys(output)[0];
  return isResourceId(resourceId) ? resourceId : null;
}

function getStaticActionOutput(actionId: ActionId): Partial<Record<ResourceId, number>> {
  switch (actionId) {
    case "craftWoodenSpoon":
      return { woodenSpoon: 1 };
    case "craftWoodenBowl":
      return { woodenBowl: 1 };
    case "cookRabbitMeat":
      return { cookedRabbitMeat: 1 };
    case "cookSquirrelMeat":
      return { cookedSquirrelMeat: 1 };
    case "tanHide":
      return { leather: 1 };
    default:
      return {};
  }
}

function getActionLoopStepLocationLabel(actionId: ActionId, locationId: LocationId | null): string {
  if (!isCarryAction(actionId)) {
    return "Camp";
  }

  return getLocation(getActionLoopStepLocationId(actionId, locationId)).label;
}

function getActionLoopStepLocationId(actionId: ActionId, locationId: LocationId | null): LocationId {
  if (actionId === "fishRiver") {
    return getFishingLocation(locationId ?? "river");
  }

  return locationId ?? getActionStartLocation(actionId, "meadow");
}

function getActionLoopLocationOptions(actionId: ActionId): typeof locationDefinitions {
  if (actionId === "fishRiver") {
    return getLocationsForFilter("fishing");
  }

  return isCarryAction(actionId) ? locationDefinitions : [getLocation(getActionStartLocation(actionId, "meadow"))];
}

function renderSkillTileContent(skillId: SkillId, label: string): string {
  const visual = skillTileVisuals[skillId];
  return `
    <span class="loop-skill-mark" aria-hidden="true">${visual.shortLabel}</span>
    <span class="loop-skill-label">${label}</span>
  `;
}

function getSkillTileStyle(skillId: SkillId): string {
  const visual = skillTileVisuals[skillId];
  return `--skill-accent: ${visual.accent}; --skill-shade: ${visual.shade};`;
}

function getSelectedForagingSkillTreeCategory(state: GameState): ForagingSkillTreeCategory | null {
  return state.skills.foraging.selectedForagingTreeCategory;
}

function getForagingSkillTreeCategoryAssetUrl(category: ForagingSkillTreeCategory): string | null {
  return foragingSkillTreeCategoryAssetUrls.get(foragingSkillTreeCategoryFileNames[category]) ?? null;
}

function getPathFileName(path: string): string {
  return path.split(/[\\/]/u).pop() ?? path;
}

function isActionLoopAdvanceMode(value: string): value is ActionLoopAdvanceMode {
  return actionLoopAdvanceOptions.some((option) => option.id === value);
}

function isActionLoopResourceScope(value: string): value is ActionLoopResourceScope {
  return value === "camp" || value === "character";
}

function isResourceId(value: unknown): value is ResourceId {
  return typeof value === "string" && resourceOrder.includes(value);
}

function isLocationId(id: string | undefined): id is LocationId {
  return locationDefinitions.some((location) => location.id === id);
}

function isCharacterDetailTab(id: string | undefined): id is CharacterDetailTab {
  return id === "inventory" || id === "equipment" || id === "skills" || id === "log";
}

function isSelectedCharacterAtCamp(state: GameState): boolean {
  return state.characters.find((character) => character.id === state.selectedCharacterId)?.locationId === "camp";
}

function getCharacterLocationLabel(locationId: CharacterLocationId): string {
  return locationId === "camp" ? "camp" : `the ${getLocation(locationId).label.toLowerCase()}`;
}

function hasLocationPanel(filterId: ActionFilterId): boolean {
  return (
    filterId === "foraging" ||
    filterId === "mining" ||
    filterId === "fishing" ||
    filterId === "hunting" ||
    filterId === "woodcutting"
  );
}

function hasProcessingLocationPanel(filterId: ActionFilterId): boolean {
  return getCategoryFilters("processing").some((filter) => filter.id === filterId);
}

function renderWorkLocationPanel(filter: ActionFilter, activeLocation: LocationId): string {
  if (hasLocationPanel(filter.id)) {
    return renderLocationPanel(filter, activeLocation);
  }

  if (hasProcessingLocationPanel(filter.id)) {
    return renderProcessingLocationPanel(filter);
  }

  return "";
}

function getLocation(id: LocationId, filterId?: ActionFilterId): (typeof locationDefinitions)[number] {
  const locations = filterId ? getLocationsForFilter(filterId) : locationDefinitions;
  return locations.find((location) => location.id === id) ?? locations[0];
}

function getLocationsForFilter(filterId: ActionFilterId): typeof locationDefinitions {
  switch (filterId) {
    case "mining":
      return locationDefinitions.filter((location) => location.id === "mine");
    case "fishing":
      return locationDefinitions.filter((location) => location.id === "river" || location.id === "beach");
    case "hunting":
      return locationDefinitions.filter((location) => location.id === "meadow");
    case "woodcutting":
      return locationDefinitions.filter((location) => location.id === "forest");
    case "foraging":
      return locationDefinitions;
    default:
      return locationDefinitions.filter((location) => location.id === "meadow" || location.id === "river");
  }
}

function getActiveLocationForFilter(filterId: ActionFilterId, activeLocation: LocationId): LocationId {
  if (filterId === "mining") {
    return "mine";
  }

  if (filterId === "hunting") {
    return "meadow";
  }

  if (filterId === "fishing") {
    return isFishingLocation(activeLocation) ? activeLocation : "river";
  }

  if (filterId === "woodcutting") {
    return "forest";
  }

  return locationDefinitions.some((location) => location.id === activeLocation) ? activeLocation : "meadow";
}

function getForagingActionIds(locationId: LocationId): ActionId[] {
  return getLocation(locationId, "foraging").actionIds;
}

function getActionStartLocation(actionId: ActionId, activeLocation: LocationId): LocationId {
  const forageResourceAction = getForageResourceActionDefinition(actionId);
  if (forageResourceAction) {
    return forageResourceAction.locationId;
  }

  const forageAction = getForageIngredientActionDefinition(actionId);
  if (forageAction) {
    return forageAction.locationId;
  }

  if (isMiningAction(actionId)) {
    return "mine";
  }

  if (actionId === "huntSmallAnimals") {
    return "meadow";
  }

  if (actionId === "fishRiver") {
    return getFishingLocation(activeLocation);
  }

  if (actionId === "gatherWater") {
    return "river";
  }

  if (actionId === "gatherRiverIngredients") {
    return "river";
  }

  if (actionId === "gatherForestIngredients") {
    return "forest";
  }

  if (actionId === "gatherMineIngredients") {
    return "mine";
  }

  if (actionId === "gatherDesertIngredients" || actionId === "gatherSand") {
    return "desert";
  }

  if (actionId === "chopTrees") {
    return "forest";
  }

  return activeLocation;
}

function isMiningAction(actionId: ActionId): boolean {
  return actionId === "mineCoal" || actionId === "mineCopper" || actionId === "mineTin";
}

function isFishingLocation(locationId: LocationId): boolean {
  return locationId === "river" || locationId === "beach";
}

function getFishingLocation(locationId: LocationId): LocationId {
  return isFishingLocation(locationId) ? locationId : "river";
}

function renderLocationPanel(filter: ActionFilter, activeLocation: LocationId): string {
  return `
    <section class="panel location-panel" data-editor-id="location-panel" data-editor-label="Location tabs panel" data-editor-files="src/ui/render.ts, src/style.css">
      ${renderLocationTabs(getLocationsForFilter(filter.id), getActiveLocationForFilter(filter.id, activeLocation), filter.label)}
    </section>
  `;
}

function renderProcessingLocationPanel(filter: ActionFilter): string {
  return `
    <section class="panel location-panel" data-editor-id="location-panel-processing-${filter.id}" data-editor-label="${filter.label} location panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="location-tabs location-count-1" role="tablist" aria-label="${filter.label} locations">
        <button
          class="location-tab active"
          type="button"
          role="tab"
          aria-selected="true"
          aria-label="Camp location"
          data-editor-id="location-tab-camp-${filter.id}"
          data-editor-label="Camp location tab"
          data-editor-files="src/ui/render.ts, src/style.css"
        >
          <img class="location-tab-image" src="${campLocationDefinition.iconUrl}" alt="" aria-hidden="true" />
        </button>
      </div>
    </section>
  `;
}

function renderLocationTabs(
  locations: typeof locationDefinitions,
  activeLocation: LocationId,
  label: string
): string {
  return `
    <div class="location-tabs location-count-${locations.length}" role="tablist" aria-label="${label} locations">
      ${locations
        .map((location) => {
          const active = location.id === activeLocation;
          return `
            <button
              class="location-tab ${active ? "active" : ""}"
              type="button"
              role="tab"
              aria-selected="${active}"
              aria-label="${location.label} location"
              data-command="set-location"
              data-id="${location.id}"
              data-editor-id="location-tab-${location.id}"
              data-editor-label="${location.label} location tab"
              data-editor-files="src/ui/render.ts, src/style.css"
            >
              <img class="location-tab-image" src="${location.iconUrl}" alt="" aria-hidden="true" />
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderCraftLowestCard(state: GameState, actionId: ActionId, actionLoopTarget: ActionLoopTarget): string {
  const definition = getActionDefinition(actionId);
  if (!definition) {
    return "";
  }

  const targetActionId = getLowestQuantityCraftAction(state);
  const targetDefinition = targetActionId ? getActionDefinition(targetActionId) : undefined;
  const unlocked = isActionUnlocked(state, actionId);
  const canStart = canStartAction(state, actionId);
  const targetLoop = actionLoopTarget ? getActionLoop(state, actionLoopTarget.loopId) : null;
  const running = getCurrentAction(state);
  const assigningLoopAction = Boolean(actionLoopTarget && targetLoop);
  const canAssignFollowUp = Boolean(
    assigningLoopAction && targetLoop && actionLoopTarget && canInsertActionInSavedLoop(targetLoop, actionLoopTarget.afterIndex, actionId)
  );
  const active = running ? getActiveActionId(running) === actionId : false;
  const disabled = assigningLoopAction ? !canAssignFollowUp : !canStart || active;
  const lockReason = canStart ? "" : getActionLockReason(state, actionId);
  const xpActionId = targetActionId ?? actionId;
  const xpSkillId = getSkillIdForAction(xpActionId);
  const tooltipRows: ActionTooltipRow[] = [
    { label: "Speed", value: formatDuration(definition.durationMs) },
    { label: "Skill", value: `${getSkillDefinition(xpSkillId).label} +${formatSkillXp(getActionSkillXp(xpActionId))} XP` },
    { label: "Uses", value: targetActionId ? describeCost(getActionCost(targetActionId)) : "Varies by target" },
    { label: "Keeps", value: "Rechecks after each craft" },
    { label: "Chooses", value: "Lowest Stock" }
  ];
  const statusText = assigningLoopAction
    ? canAssignFollowUp
      ? "Set as action loop step"
      : "Not valid for this loop"
    : active
      ? "Running"
      : !canStart && lockReason
        ? lockReason
        : targetDefinition
          ? `Next: ${getCraftingRecipeDisplayLabel(targetDefinition.label)}`
          : "";
  const buttonLabel = assigningLoopAction ? "Set" : active ? "Running" : canStart ? "Start" : "Locked";
  const displayLabel = getCraftingRecipeDisplayLabel(definition.label);
  const targetDisplayLabel = targetDefinition ? getCraftingRecipeDisplayLabel(targetDefinition.label) : "";
  const outputText = targetDisplayLabel || getCraftingRecipeOutputText(actionId);
  const costText = targetActionId ? describeCost(getActionCost(targetActionId)) : "Varies by target";

  return `
    <button
      class="smithing-recipe-card craft-priority-button ${active ? "active" : ""} ${canAssignFollowUp ? "assignable" : ""} ${!unlocked && !canAssignFollowUp ? "locked" : ""}"
      type="button"
      data-command="start-action"
      data-id="${actionId}"
      data-editor-id="action-card-${actionId}"
      data-editor-label="Action card: ${displayLabel}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${disabled}"
      data-tooltip-source
      aria-disabled="${disabled}"
      aria-label="${buttonLabel} ${displayLabel}${targetDisplayLabel ? `, next ${targetDisplayLabel}` : ""}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">
        ${renderActionIcon(actionId)}
      </span>
      <span class="smithing-recipe-copy">
        <strong>${displayLabel}</strong>
        <small>${statusText || "Balance stock"}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${outputText}</b>
        <small>${costText}</small>
      </span>
      ${renderActionTooltip(displayLabel, tooltipRows, statusText)}
    </button>
  `;
}

function renderActionCard(state: GameState, actionId: ActionId, actionLoopTarget: ActionLoopTarget): string {
  const definition = getActionDefinition(actionId);
  if (!definition) {
    return "";
  }

  const unlocked = isActionUnlocked(state, actionId);
  const cost = getActionCost(actionId);
  const canStart = canStartAction(state, actionId);
  const targetLoop = actionLoopTarget ? getActionLoop(state, actionLoopTarget.loopId) : null;
  const running = getCurrentAction(state);
  const assigningLoopAction = Boolean(actionLoopTarget && targetLoop);
  const canAssignFollowUp = Boolean(
    assigningLoopAction && targetLoop && actionLoopTarget && canInsertActionInSavedLoop(targetLoop, actionLoopTarget.afterIndex, actionId)
  );
  const active = running ? getActiveActionId(running) === actionId : false;
  const disabled = assigningLoopAction ? !canAssignFollowUp : !canStart || active;
  const missingCostText =
    actionId === "butcherFish" ||
    actionId === "butcherRabbit" ||
    actionId === "butcherSquirrel" ||
    actionId === "cookRabbitMeat" ||
    actionId === "cookSquirrelMeat"
      ? getActionLockReason(state, actionId)
      : getMissingCostText(state, cost);
  const lockReason = canStart ? "" : unlocked ? missingCostText : getActionLockReason(state, actionId);
  const tooltipRows = getActionTooltipRows(actionId, definition.durationMs);
  const statusText = assigningLoopAction
    ? canAssignFollowUp
      ? "Set as action loop step"
      : "Not valid for this loop"
    : !canStart && lockReason
      ? lockReason
      : "";
  const buttonLabel = assigningLoopAction ? "Set" : active ? "Running" : canStart ? "Start" : "Locked";

  return `
    <button
      class="action-card ${active ? "active" : ""} ${canAssignFollowUp ? "assignable" : ""} ${!unlocked && !canAssignFollowUp ? "locked" : ""}"
      type="button"
      data-command="start-action"
      data-id="${actionId}"
      data-editor-id="action-card-${actionId}"
      data-editor-label="Action card: ${definition.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${disabled}"
      data-tooltip-source
      aria-disabled="${disabled}"
      aria-label="${buttonLabel} ${definition.label}"
    >
      <span class="action-card-main" aria-hidden="true">
        ${renderActionIcon(actionId)}
      </span>
      ${renderActionTooltip(definition.label, tooltipRows, statusText)}
    </button>
  `;
}

function renderActionIcon(actionId: ActionId): string {
  const iconUrls = getActionIconUrls(actionId);
  if (!iconUrls.length) {
    return `<span class="action-card-glyph">${getActionInitials(actionId)}</span>`;
  }

  return `
    <span class="action-card-icon ${iconUrls.length > 1 ? "multi" : ""}">
      ${iconUrls.map((iconUrl) => `<img src="${iconUrl}" alt="" aria-hidden="true" />`).join("")}
    </span>
  `;
}

function renderActionTooltip(label: string, rows: ActionTooltipRow[], statusText: string): string {
  const allRows = statusText ? [{ label: "Status", value: statusText }, ...rows] : rows;

  return `
    <div class="slot-tooltip" role="tooltip">
      <div class="tooltip-title">
        <strong>${label}</strong>
      </div>
      <dl>
        ${allRows
          .map((row) => `
            <div>
              <dt>${row.label}</dt>
              <dd>${row.value}</dd>
            </div>
          `)
          .join("")}
      </dl>
    </div>
  `;
}

function getActionIconUrls(actionId: ActionId): string[] {
  const craftedTool = getCraftedToolDefinitionForAction(actionId);
  if (craftedTool) {
    return getToolIconUrls(craftedTool.id);
  }
  const forageIcons = getForageActionIconUrls(actionId);
  if (forageIcons.length) {
    return forageIcons;
  }

  switch (actionId) {
    case "gatherSticks":
      return [stickIconUrl];
    case "gatherStones":
      return [stoneIconUrl];
    case "gatherFlaxPlants":
      return [flaxPlantIconUrl];
    case "gatherFlaxFibers":
      return [flaxFiberIconUrl];
    case "gatherMeadowIngredients":
      return [mushroomIconUrl, berryIconUrl];
    case "gatherForestIngredients":
      return [forestLocationIconUrl, berryIconUrl];
    case "gatherRiverIngredients":
      return [riverLocationIconUrl, mushroomIconUrl];
    case "gatherMineIngredients":
      return [mineLocationIconUrl, mushroomIconUrl];
    case "gatherDesertIngredients":
      return [desertLocationIconUrl, berryIconUrl];
    case "gatherSand":
      return [desertLocationIconUrl, stoneIconUrl];
    case "gatherWater":
      return [riverLocationIconUrl];
    case "mineCoal":
      return [coalIconUrl];
    case "mineCopper":
      return [copperIconUrl];
    case "mineTin":
      return [tinIconUrl];
    case "fishRiver":
      return [minnowIconUrl];
    case "craftLowestTool":
      return [craftMaterialsBundleButtonUrl];
    case "craftWoodenSpoon":
      return [woodenSpoonIconUrl];
    case "craftWoodenBowl":
      return [woodenBowlIconUrl];
    case "craftLeatherBackpack":
      return [leatherBackpackEquippedSlotUrl];
    case "chopTrees":
      return [woodIconUrl];
    case "huntSmallAnimals":
      return [rabbitIconUrl, squirrelIconUrl];
    case "butcherFish":
      return [fishFiletIconUrl];
    case "butcherRabbit":
    case "cookRabbitMeat":
      return [rabbitMeatIconUrl];
    case "butcherSquirrel":
    case "cookSquirrelMeat":
      return [squirrelMeatIconUrl];
    case "tanHide":
      return [hideIconUrl];
    case "retFlax":
    case "separateFlaxFiber":
    case "handSpinLinenThread":
    case "spinLinenThread":
    case "weaveLinenCloth":
      return [flaxFiberIconUrl];
    case "craftCopperNeedle":
      return [copperIconUrl];
    case "craftBronzeNeedle":
      return [copperIconUrl, tinIconUrl];
    case "sewClothWrap":
    case "sewLinenBandage":
    case "sewSimplePouch":
    case "sewLinenHood":
    case "sewLinenShirt":
      return [flaxFiberIconUrl];
    case "smeltCopperBar":
      return [copperIconUrl, coalIconUrl];
    case "smeltBronzeBar":
      return [copperIconUrl, tinIconUrl];
    case "craftPot":
    case "craftLadle":
    case "craftCopperPickaxe":
    case "craftCopperHatchet":
    case "craftCopperKnife":
      return [copperIconUrl];
    case "craftBronzePickaxe":
    case "craftBronzeHatchet":
    case "craftBronzeKnife":
      return [copperIconUrl, tinIconUrl];
    case "craftGlassVial":
      return [stoneFurnaceUrl, desertLocationIconUrl];
    case "brewHealthPotion":
      return [berryIconUrl, mushroomIconUrl];
    case "brewManaPotion":
      return [riverLocationIconUrl, berryIconUrl];
  }

  return [];
}

function getForageActionIconUrls(actionId: ActionId): string[] {
  const forageResourceAction = getForageResourceActionDefinition(actionId);
  if (forageResourceAction) {
    return [
      resourceSlotImages[forageResourceAction.resourceId] ?? getForageCategoryIconUrl(getForageDisplayCategory(forageResourceAction))
    ];
  }

  const forageAction = getForageIngredientActionDefinition(actionId);
  if (!forageAction) {
    return [];
  }

  return [getForageCategoryIconUrl(forageAction.category)];
}

function getForageCategoryIconUrl(category: ForageDisplayCategory): string {
  switch (category) {
    case "fungal":
      return mushroomIconUrl;
    case "berry":
    case "fruit":
      return berryIconUrl;
    case "root":
      return mushroomIconUrl;
    case "vegetable":
    case "staple":
      return flaxFiberIconUrl;
    case "seasoning":
      return mushroomIconUrl;
    case "flower":
      return flaxFiberIconUrl;
    case "herb":
    default:
      return flaxFiberIconUrl;
  }
}

function getCraftedToolDefinitionForAction(actionId: ActionId) {
  return toolDefinitions.find((tool) => tool.craftActionId === actionId);
}

function getToolIconUrls(toolId: ToolId): string[] {
  const equippedImage = equippedSlotImages[toolId];
  if (equippedImage) {
    return [equippedImage];
  }

  const definition = toolDefinitions.find((tool) => tool.id === toolId);
  if (definition?.weapon?.range === "ranged" || definition?.id.startsWith("wooden")) {
    return [woodIconUrl];
  }

  return definition?.weapon ? [stoneIconUrl] : [];
}

function getActionInitials(actionId: ActionId): string {
  const definition = getActionDefinition(actionId);
  if (!definition) {
    return "?";
  }

  return definition.label
    .split(" ")
    .map((word) => word[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getActionTooltipRows(actionId: ActionId, durationMs: number): ActionTooltipRow[] {
  const skillId = getSkillIdForAction(actionId);
  const rows: ActionTooltipRow[] = [
    { label: "Speed", value: formatDuration(durationMs) },
    { label: "Skill", value: `${getSkillDefinition(skillId).label} +${formatSkillXp(getActionSkillXp(actionId))} XP` }
  ];
  const smithingRecipe = getSmithingRecipe(actionId);
  if (smithingRecipe) {
    return [
      ...rows,
      { label: "Uses", value: describeCost(smithingRecipe.cost) },
      {
        label: "Makes",
        value: smithingRecipe.toolId ? smithingRecipe.label.replace("Craft ", "1 ") : describeCost(smithingRecipe.output ?? {})
      },
      { label: "Unlock", value: smithingRecipe.unlockHint }
    ];
  }
  const alchemyRecipe = getAlchemyRecipe(actionId);
  if (alchemyRecipe) {
    const stationText = alchemyRecipe.actionId === "craftGlassVial" ? "Stone Furnace" : "Alchemy bench";
    return [
      ...rows,
      { label: "Panel", value: "Brewing" },
      { label: "Station", value: stationText },
      { label: "Uses", value: describeCost(alchemyRecipe.cost) },
      { label: "Makes", value: getAlchemyRecipeOutputText(alchemyRecipe.actionId) },
      { label: "Unlock", value: alchemyRecipe.unlockHint }
    ];
  }
  const textileRecipe = getTextileRecipe(actionId);
  if (textileRecipe) {
    const stationText = textileRecipe.requiredBuildings?.length
      ? textileRecipe.requiredBuildings.map((buildingId) => getBuildingLabel(buildingId)).join(", ")
      : "Camp";
    return [
      ...rows,
      { label: "Station", value: stationText },
      { label: "Uses", value: describeCost(textileRecipe.cost) },
      { label: "Makes", value: getTextileRecipeOutputText(textileRecipe) },
      { label: "Unlock", value: textileRecipe.unlockHint }
    ];
  }
  const craftedTool = getCraftedToolDefinitionForAction(actionId);
  if (craftedTool) {
    return [
      ...rows,
      { label: "Makes", value: `1 ${craftedTool.label}` },
      { label: "Uses", value: describeCost(getActionCost(actionId)) },
      ...(craftedTool.weapon
        ? [
            { label: "Power", value: formatStatNumber(craftedTool.weapon.damage) },
            { label: "Style", value: `${craftedTool.weapon.hands}H ${labelWeaponRange(craftedTool.weapon.range)}` }
          ]
        : [])
    ];
  }
  const forageAction = getForageIngredientActionDefinition(actionId);
  if (forageAction) {
    return [
      ...rows,
      { label: "Table", value: getGatheringTableSummary(forageAction.locationId, forageAction.category) },
      { label: "Pickup", value: `1-2 weighted ${forageAction.category} rolls` },
      { label: "Place", value: getLocation(forageAction.locationId).label }
    ];
  }
  const forageResourceAction = getForageResourceActionDefinition(actionId);
  if (forageResourceAction) {
    const amountText =
      forageResourceAction.minAmount === forageResourceAction.maxAmount
        ? `${forageResourceAction.minAmount}`
        : `${forageResourceAction.minAmount}-${forageResourceAction.maxAmount}`;
    return [
      ...rows,
      { label: "Finds", value: forageResourceAction.resourceLabel },
      { label: "Pickup", value: `${amountText} per gather` },
      { label: "Type", value: getForageDisplayCategoryLabel(getForageDisplayCategory(forageResourceAction)) },
      { label: "Place", value: getLocation(forageResourceAction.locationId).label }
    ];
  }

  switch (actionId) {
    case "gatherSticks":
      return [...rows, { label: "Pickup", value: "1-3 Sticks" }, { label: "Each", value: "1 weight" }];
    case "gatherStones":
      return [...rows, { label: "Pickup", value: "1-2 Stones" }, { label: "Each", value: "1 weight" }];
    case "gatherFlaxPlants":
      return [...rows, { label: "Pickup", value: "2-4 Flax Plants" }, { label: "Each", value: "1 weight" }];
    case "gatherFlaxFibers":
      return [...rows, { label: "Pickup", value: "1-3 Flax Fibers" }, { label: "Each", value: "1 weight" }];
    case "gatherMeadowIngredients":
      return [
        ...rows,
        { label: "Table", value: getGatheringTableSummary("meadow") },
        { label: "Pickup", value: "1-2 weighted ingredient rolls" },
        { label: "Kinds", value: "Herbs, flowers, berries, fruit, roots, vegetables, staples, seasonings" }
      ];
    case "gatherForestIngredients":
      return [
        ...rows,
        { label: "Table", value: getGatheringTableSummary("forest") },
        { label: "Pickup", value: "1-2 weighted ingredient rolls" },
        { label: "Kinds", value: "Berries, herbs, nuts, fungus, resin" }
      ];
    case "gatherRiverIngredients":
      return [
        ...rows,
        { label: "Table", value: getGatheringTableSummary("river") },
        { label: "Pickup", value: "1-2 weighted ingredient rolls" },
        { label: "Kinds", value: "Wetland herbs, roots, seeds, fungus" }
      ];
    case "gatherMineIngredients":
      return [
        ...rows,
        { label: "Table", value: getGatheringTableSummary("mine") },
        { label: "Pickup", value: "1-2 weighted ingredient rolls" },
        { label: "Kinds", value: "Cave herbs, fungus, roots, lichen" }
      ];
    case "gatherDesertIngredients":
      return [
        ...rows,
        { label: "Table", value: getGatheringTableSummary("desert") },
        { label: "Pickup", value: "1-2 weighted ingredient rolls" },
        { label: "Kinds", value: "Desert herbs, fruit, roots, flowers, fungus" }
      ];
    case "gatherSand":
      return [...rows, { label: "Pickup", value: "2-5 Sand" }, { label: "Place", value: "Desert" }];
    case "gatherWater":
      return [...rows, { label: "Pickup", value: "1-3 Water" }, { label: "Place", value: "River" }];
    case "mineCoal":
      return [
        ...rows,
        { label: "Requires", value: "Stone Pick Axe" },
        { label: "Pickup", value: "1 Coal" },
        { label: "Each", value: "1 weight" }
      ];
    case "mineCopper":
      return [
        ...rows,
        { label: "Requires", value: "Stone Pick Axe" },
        { label: "Pickup", value: "1 Copper" },
        { label: "Each", value: "1 weight" }
      ];
    case "mineTin":
      return [
        ...rows,
        { label: "Requires", value: "Stone Pick Axe" },
        { label: "Pickup", value: "1 Tin" },
        { label: "Each", value: "1 weight" }
      ];
    case "fishRiver":
      return [
        ...rows,
        { label: "Requires", value: "Fishing Pole" },
        { label: "Pickup", value: "1 fish" },
        { label: "Each", value: "0.5-7.5 lb" },
        { label: "Fish", value: "Minnow 0.5-1.5, Loach 1-3, Mudskipper 1.5-4.5, Stickleback 0.5-2, Perch 2-7.5 lb" }
      ];
    case "chopTrees":
      return [
        ...rows,
        { label: "Pickup", value: "2-4 Wood, 35% chance for 1 Stick" },
        { label: "Each", value: "Wood 2 weight, Stick 1 weight" }
      ];
    case "huntSmallAnimals":
      return [
        ...rows,
        { label: "Pickup", value: "1 Rabbit or Squirrel" },
        { label: "Each", value: "Rabbit 2-5 lb, Squirrel 0.5-2 lb" }
      ];
    case "craftLowestTool":
      return [
        ...rows,
        { label: "Keeps", value: "Rechecks after each craft" },
        { label: "Chooses", value: "Lowest Stock" }
      ];
    case "craftBasket":
      return [...rows, { label: "Makes", value: "1 Basket" }, { label: "Uses", value: describeCost(getActionCost(actionId)) }];
    case "craftWoodenSpoon":
      return [...rows, { label: "Makes", value: "1 Wooden Spoon" }, { label: "Uses", value: describeCost(getActionCost(actionId)) }];
    case "craftFishingPole":
      return [...rows, { label: "Makes", value: "1 Fishing Pole" }, { label: "Uses", value: describeCost(getActionCost(actionId)) }];
    case "craftLeatherBackpack":
      return [...rows, { label: "Makes", value: "1 Leather Backpack" }, { label: "Uses", value: describeCost(getActionCost(actionId)) }];
    case "butcherFish":
      return [...rows, { label: "Uses", value: "1 carried fish" }, { label: "Makes", value: "Matching filet at 50% fish weight" }];
    case "butcherRabbit":
      return [
        ...rows,
        { label: "Uses", value: "1 Rabbit" },
        { label: "Each", value: "2-5 lb" },
        { label: "Makes", value: "1-2 Rabbit Meat; knife can recover Hide or Bone" }
      ];
    case "butcherSquirrel":
      return [
        ...rows,
        { label: "Uses", value: "1 Squirrel" },
        { label: "Each", value: "0.5-2 lb" },
        { label: "Makes", value: "1 Squirrel Meat; knife can recover Hide or Bone" }
      ];
    case "cookRabbitMeat":
      return [...rows, { label: "Uses", value: "1 Rabbit Meat" }, { label: "Makes", value: "1 Cooked Rabbit Meat" }];
    case "cookSquirrelMeat":
      return [...rows, { label: "Uses", value: "1 Squirrel Meat" }, { label: "Makes", value: "1 Cooked Squirrel Meat" }];
    case "tanHide":
      return [...rows, { label: "Uses", value: "1 Hide" }, { label: "Makes", value: "1 Leather" }];
  }

  return rows;
}

function renderBuildingPanel(state: GameState, now: number): string {
  const visibleBuildings = buildingDefinitions.filter((building) => isBuildingVisible(state, building.id, now));

  return `
    <section class="panel camp-panel" data-editor-id="camp-panel" data-editor-label="Camp structures and inventory panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="camp-panel-section">
        <div class="section-heading">
          <span>Structures</span>
        </div>
        <div class="craft-list">
          ${
            visibleBuildings.length
              ? visibleBuildings.map((building) => renderBuildingCard(state, building, now)).join("")
              : `<div class="empty-line">Nothing sturdy enough to name yet.</div>`
          }
        </div>
      </div>
      ${renderCampInventoryPanel(state)}
    </section>
  `;
}

function renderCampInventoryPanel(state: GameState): string {
  const campResourceIds = resourceOrder;
  const groups = getCampInventoryResourceGroups(campResourceIds);

  return `
    <div class="camp-panel-section camp-inventory-section" data-editor-id="camp-inventory-section" data-editor-label="Camp inventory section" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Camp Inventory</span>
      </div>
      ${
        campResourceIds.length
          ? `
            <div class="camp-inventory-content">
              ${groups.map((group) => renderResourceGroup(state, group)).join("")}
              ${renderToolInventory(state)}
              ${renderFoodUsePanel(state)}
            </div>
          `
          : `<div class="empty-line">No resources stored yet.</div>`
      }
    </div>
  `;
}

function getCampInventoryResourceGroups(visibleIds: ResourceId[]): CampInventoryResourceGroup[] {
  const forageGroups = new Map<ForageDisplayCategory, ResourceId[]>(
    forageDisplayCategories.map((category) => [category, []])
  );
  const standardGroups = new Map<string, ResourceId[]>();
  const orderedGroupKeys: string[] = [];

  for (const resourceId of visibleIds) {
    const resource = resourceDefinitions.find((definition) => definition.id === resourceId);
    if (!resource) {
      continue;
    }

    const forageCategory = getResourceForageDisplayCategory(resource);
    const groupKey = forageCategory ? "forage" : resource.group;

    if (!orderedGroupKeys.includes(groupKey)) {
      orderedGroupKeys.push(groupKey);
    }

    if (forageCategory) {
      forageGroups.get(forageCategory)?.push(resourceId);
    } else {
      standardGroups.set(resource.group, [...(standardGroups.get(resource.group) ?? []), resourceId]);
    }
  }

  return orderedGroupKeys.flatMap((groupKey): CampInventoryResourceGroup[] => {
    if (groupKey === "forage") {
      return forageDisplayCategories.flatMap((category) => {
        const ids = forageGroups.get(category) ?? [];
        return ids.length
          ? [
              {
                id: `forage-${category}`,
                label: getForageDisplayCategoryLabel(category),
                ids,
                usePlaceholderIcons: true
              }
            ]
          : [];
      });
    }

    const ids = standardGroups.get(groupKey) ?? [];
    return ids.length ? [{ id: groupKey, label: labelGroup(groupKey), ids }] : [];
  });
}

function getResourceForageDisplayCategory(resource: ResourceDefinition): ForageDisplayCategory | null {
  const category = resource.cooking?.ingredientCategory;
  if (!category || category === "meat") {
    return null;
  }

  return getForageDisplayCategory({ category, tags: resource.cooking?.tags ?? [] });
}

function renderFoodUsePanel(state: GameState): string {
  const foods = resourceOrder.filter((resourceId) => state.inventory[resourceId] > 0 && isEdibleFood(resourceId));
  if (!foods.length) {
    return "";
  }

  return `
    <section class="resource-group food-use-panel" data-editor-id="food-use-panel" data-editor-label="Food use panel" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Food</h3>
      <div class="food-use-list">
        ${foods.map((resourceId) => renderFoodUseRow(state, resourceId)).join("")}
      </div>
    </section>
  `;
}

function renderFoodUseRow(state: GameState, resourceId: ResourceId): string {
  const lockReason = getEatFoodLockReason(state, resourceId);
  const canEat = canEatFood(state, resourceId);
  const effect = getFoodEffectPreview(resourceId);

  return `
    <div class="food-use-row">
      <span>
        <strong>${getResourceLabel(resourceId)}</strong>
        <small>${canEat ? `Restores ${effect.hunger} hunger` : lockReason}</small>
      </span>
      <button
        type="button"
        data-command="eat-food"
        data-id="${resourceId}"
        data-disabled="${!canEat}"
        aria-disabled="${!canEat}"
      >
        Eat
      </button>
    </div>
  `;
}

function renderBuildingCard(state: GameState, building: (typeof buildingDefinitions)[number], now: number): string {
  const built = isBuildingBuilt(state, building.id, now);
  const unlocked = isBuildingUnlocked(state, building.id, now);
  const affordable = hasCost(state, building.recipe);
  const atCamp = isSelectedCharacterAtCamp(state);
  const repeatable = isRepeatableBuilding(building.id);
  const disabled = !unlocked || (!repeatable && built) || !affordable || !atCamp;
  const imageUrl = getBuildingImageUrl(state, building.id, now);
  const buttonLabel = unlocked ? getBuildingButtonLabel(state, building.id, now) : "Locked";

  return `
    <article class="craft-item building-card ${built || getBuildingCount(state, building.id) > 0 ? "owned" : ""} ${!unlocked ? "locked" : ""} ${building.id === "campfire" && built ? "lit" : ""}" data-editor-id="building-card-${building.id}" data-editor-label="Building card: ${building.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <button
        class="building-image-button"
        type="button"
        data-command="build-structure"
        data-id="${building.id}"
        data-disabled="${disabled}"
        data-tooltip-source
        aria-disabled="${disabled}"
        aria-label="${buttonLabel} ${building.label}"
      >
        <img class="building-image" src="${imageUrl}" alt="" aria-hidden="true" />
        ${renderBuildingTooltip(state, building, now)}
      </button>
    </article>
  `;
}

function renderBuildingTooltip(state: GameState, building: (typeof buildingDefinitions)[number], now: number): string {
  const built = isBuildingBuilt(state, building.id, now);
  const unlocked = isBuildingUnlocked(state, building.id, now);
  const affordable = hasCost(state, building.recipe);
  const atCamp = isSelectedCharacterAtCamp(state);
  const rows: ActionTooltipRow[] = [
    { label: "Status", value: getBuildingStatusText(state, building.id, now, built, affordable, atCamp, unlocked) },
    { label: "Unlock", value: getBuildingUnlockReason(state, building.id) },
    { label: "Skill", value: `Construction +${formatSkillXp(getBuildingSkillXp(building.id))} XP` },
    { label: "Cost", value: describeCost(building.recipe) },
    { label: "Use", value: building.blurb }
  ];

  return `
    <div class="slot-tooltip" role="tooltip">
      <div class="tooltip-title">
        <strong>${building.label}</strong>
      </div>
      <dl>
        ${rows
          .map((row) => `
            <div>
              <dt>${row.label}</dt>
              <dd>${row.value}</dd>
            </div>
          `)
          .join("")}
      </dl>
    </div>
  `;
}

function isBuildingBuilt(state: GameState, buildingId: BuildingId, now: number): boolean {
  if (isRepeatableBuilding(buildingId)) {
    return false;
  }

  return buildingId === "campfire" ? isCampfireLit(state, now) : state.buildings[buildingId];
}

function isRepeatableBuilding(buildingId: BuildingId): boolean {
  return buildingId === "hideTent";
}

function getBuildingImageUrl(state: GameState, buildingId: BuildingId, now: number): string {
  switch (buildingId) {
    case "campfire":
      return isCampfireLit(state, now) ? campfireLitUrl : campfireUnlitUrl;
    case "tanningRack":
      return tanningRackUrl;
    case "hideTent":
      return hideTentUrl;
    case "crudeStoneFurnace":
      return stoneFurnaceUrl;
    case "primitiveSpinningWheel":
    case "primitiveLoom":
      return campfireUnlitUrl;
  }
}

function getBuildingButtonLabel(state: GameState, buildingId: BuildingId, now: number): string {
  if (isRepeatableBuilding(buildingId)) {
    return "Build";
  }

  if (buildingId === "campfire" && isCampfireLit(state, now)) {
    return "Lit";
  }

  return isBuildingBuilt(state, buildingId, now) ? "Built" : "Build";
}

function getBuildingLabel(buildingId: BuildingId): string {
  return buildingDefinitions.find((building) => building.id === buildingId)?.label ?? buildingId;
}

function getBuildingStatusText(
  state: GameState,
  buildingId: BuildingId,
  now: number,
  built: boolean,
  affordable: boolean,
  atCamp: boolean,
  unlocked: boolean
): string {
  if (!unlocked) {
    return `Locked: ${getBuildingUnlockReason(state, buildingId)}`;
  }

  if (!atCamp && !built) {
    return `Needs ${getSelectedCharacter(state).name} at camp`;
  }

  if (buildingId === "hideTent") {
    const count = getBuildingCount(state, buildingId);
    return affordable ? `Tents: ${count}; next gives +1 housing` : `Tents: ${count}; needs ${getMissingCostText(state, buildingDefinitions.find((building) => building.id === buildingId)?.recipe ?? {})}`;
  }

  if (buildingId === "campfire") {
    return built
      ? `Lit, burns out in <b data-campfire-remaining>${formatDuration(getCampfireRemainingMs(state, now))}</b>`
      : affordable
        ? "Ready to build, burns for 15m"
        : `Needs ${getMissingCostText(state, buildingDefinitions.find((building) => building.id === buildingId)?.recipe ?? {})}`;
  }

  if (built) {
    return "Built";
  }

  return affordable
    ? "Ready to build"
    : `Needs ${getMissingCostText(state, buildingDefinitions.find((building) => building.id === buildingId)?.recipe ?? {})}`;
}

function renderCharacterDetailsPanel(
  state: GameState,
  activeTab: CharacterDetailTab
): string {
  const selectedCharacter = getSelectedCharacter(state);

  return `
    <div class="work-area single-panel">
      <section class="panel character-detail-panel" aria-label="${selectedCharacter.name} details" data-active-tab="${activeTab}" data-editor-id="character-detail-panel" data-editor-label="Character detail panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="character-detail-heading">
          ${renderCharacterPortrait(selectedCharacter)}
          <span class="character-detail-title">
            <strong>${selectedCharacter.name}</strong>
            <small>${getCharacterStatusText(state, selectedCharacter)}</small>
          </span>
        </div>
        ${renderCharacterOverview(state)}
      </section>
    </div>
  `;
}

function renderCharacterOverview(state: GameState): string {
  return `
    <div class="character-detail-content character-overview-content">
      <div class="character-overview-full">
        ${renderCharacterInventory(state)}
      </div>
      <div class="character-overview-pair">
        <section class="character-overview-section" aria-label="Equipment overview" data-editor-id="character-overview-equipment" data-editor-label="Character overview equipment" data-editor-files="src/ui/render.ts, src/style.css">
          ${renderEquipment(state, false)}
        </section>
        ${renderCharacterStatsPanel(state)}
      </div>
      <div class="character-overview-full">
        <section class="character-overview-section" aria-label="Skills overview" data-editor-id="character-overview-skills" data-editor-label="Character overview skills" data-editor-files="src/ui/render.ts, src/style.css">
          ${renderSkillsPanel(state)}
        </section>
      </div>
    </div>
  `;
}

function renderCharacterStatsPanel(state: GameState): string {
  const selectedCharacter = getSelectedCharacter(state);
  const running = getCurrentAction(state, selectedCharacter.id);
  const assignedLoop = selectedCharacter.actionLoopId ? getActionLoop(state, selectedCharacter.actionLoopId) : null;
  const currentActionLabel = running ? (getActionDefinition(getActiveActionId(running))?.label ?? "Working") : "Idle";
  const loadout = getCharacterCombatLoadout(state, selectedCharacter.id);
  const combatStats = getCombatUnitForCharacter(state, selectedCharacter.id) ?? selectedCharacter.combat;
  const stats: EquipmentStat[] = [
    { label: "Status", value: getCharacterStatusText(state, selectedCharacter) },
    { label: "Location", value: getCharacterLocationLabel(selectedCharacter.locationId) },
    { label: "Current", value: currentActionLabel },
    { label: "Action Loop", value: assignedLoop ? escapeHtml(assignedLoop.name) : "None" },
    { label: "Class", value: loadout.classLabel },
    { label: "Weapon", value: loadout.weaponLabel },
    { label: "Hunger", value: `${Math.round(selectedCharacter.needs.hunger)} / ${Math.round(selectedCharacter.needs.maxHunger)}` },
    { label: "HP", value: `${Math.round(combatStats.hp)} / ${Math.round(combatStats.maxHp)}` },
    { label: "Mana", value: `${Math.round(combatStats.mana)} / ${Math.round(combatStats.maxMana)}` },
    ...getEquipmentSummaryStats(state)
  ];

  return `
    <section class="character-overview-section character-stats-overview" aria-label="Character stats" data-editor-id="character-overview-stats" data-editor-label="Character overview stats" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Stats</h3>
      <dl class="character-stat-list">
        ${stats
          .map((stat) => `
            <div class="character-stat-row">
              <dt>${stat.label}</dt>
              <dd>${stat.value}</dd>
            </div>
          `)
          .join("")}
      </dl>
    </section>
  `;
}

function renderCampLogToggle(campLogVisible: boolean): string {
  return `
    <button
      class="camp-log-toggle ${campLogVisible ? "active" : ""}"
      type="button"
      data-command="toggle-camp-log"
      aria-pressed="${campLogVisible}"
    >
      Camp Log
    </button>
  `;
}

function renderSkillsPanel(state: GameState): string {
  const visibleGroups = characterSkillGroups.filter((group) => group.skillIds.length > 0);

  return `
    <h3>Skills</h3>
    <section class="side-panel-content skills-screen" aria-label="Skills" data-editor-id="skills-screen" data-editor-label="Skills screen" data-editor-files="src/ui/render.ts, src/style.css">
      ${visibleGroups.map((group) => renderSkillGroup(state, group)).join("")}
      ${renderCombatClassProgressPanel(state)}
    </section>
  `;
}

function renderSkillGroup(state: GameState, group: SkillGroup): string {
  const skillRows = group.skillIds
    .filter((skillId) => skillDefinitions.some((definition) => definition.id === skillId))
    .map((skillId) => renderSkillRow(state, skillId))
    .join("");

  return `
    <section class="skill-group skill-group-${group.label.toLowerCase()}" aria-label="${group.label} skills">
      <h4>${group.label}</h4>
      <div class="skill-group-list">
        ${skillRows || `<div class="empty-line">No skills yet.</div>`}
      </div>
    </section>
  `;
}

function renderSkillRow(state: GameState, skillId: SkillId): string {
  const definition = getSkillDefinition(skillId);
  const skill = state.skills[skillId];
  const bannerUrl = characterSkillBannerUrls[skillId];

  if (bannerUrl) {
    return `
      <div class="character-skill-control-row" data-editor-id="skill-row-${skillId}" data-editor-label="Skill row: ${definition.label}" data-editor-files="src/ui/render.ts, src/style.css">
        ${renderCharacterSkillBanner(state, skillId, definition.label, skill.level, bannerUrl)}
      </div>
    `;
  }

  const progress = getSkillProgress(skill);
  const progressLabel = progress.atCap
    ? progress.canPrestige
      ? "Prestige ready"
      : "Max level"
    : `${formatSkillXp(progress.xpIntoLevel)} / ${formatSkillXp(progress.xpForLevel)} XP`;
  const prestigeLabel = skill.prestige > 0 ? `P${skill.prestige}` : "P0";
  const skillPanelFilterId = getActionFilterIdForSkill(skillId);
  const exposeSkillPanelButton = Boolean(skillPanelFilterId && !progress.canPrestige);
  const skillPanelAttributes = skillPanelFilterId
    ? `data-command="open-character-skill-panel" data-id="${skillId}"${
        exposeSkillPanelButton ? ` role="button" tabindex="0" aria-label="Open ${definition.label} skill panel"` : ""
      }`
    : "";

  return `
    <article class="skill-row ${progress.canPrestige ? "prestige-ready" : ""} ${skillPanelFilterId ? "skill-row-actionable" : ""}" ${skillPanelAttributes} data-editor-id="skill-row-${skillId}" data-editor-label="Skill row: ${definition.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-row-heading">
        <span>
          <strong>${definition.label}</strong>
          <small>Total ${formatSkillXp(skill.totalXp)} XP</small>
        </span>
        <span class="skill-level-pill">Lv ${skill.level}</span>
      </div>
      <div class="skill-progress-track" aria-hidden="true">
        <span style="transform: scaleX(${Math.min(1, Math.max(0, progress.ratio)).toFixed(4)})"></span>
      </div>
      <div class="skill-row-meta">
        <span>${progressLabel}</span>
        <span>${prestigeLabel} - Cap ${progress.cap}</span>
      </div>
      ${
        progress.canPrestige
          ? `<button class="skill-prestige-button" type="button" data-command="prestige-skill" data-id="${skillId}">Prestige</button>`
          : ""
      }
    </article>
  `;
}

function renderCharacterSkillBanner(
  state: GameState,
  skillId: SkillId,
  label: string,
  level: number,
  bannerUrl: string
): string {
  const filterId = getActionFilterIdForSkill(skillId);
  const actionLabel = filterId ? getActionFilter(filterId).label : label;

  return `
    <div class="character-skill-banner-control skill-${skillId}">
      <button
        class="character-skill-banner-button"
        type="button"
        data-command="open-character-skill-panel"
        data-id="${skillId}"
        aria-label="Go to ${actionLabel} actions"
      >
        <img class="character-skill-banner-image" src="${bannerUrl}" alt="" aria-hidden="true" />
      </button>
      ${renderCharacterSkillTreeButton(state, skillId, label, level)}
    </div>
  `;
}

function renderCharacterSkillTreeButton(state: GameState, skillId: SkillId, label: string, level: number): string {
  if (skillId === "foraging") {
    return renderForagingSkillTreeButton(level, getSelectedForagingSkillTreeCategory(state));
  }

  return `
    <button
      class="character-skill-tree-button plain"
      type="button"
      data-command="open-character-skill-panel"
      data-id="${skillId}"
      aria-label="${label} level ${level}"
      title="Open ${label} actions"
    >
      <span class="character-skill-tree-button-label">LvL ${level}</span>
    </button>
  `;
}

function renderForagingSkillTreeButton(level: number, selectedCategory: ForagingSkillTreeCategory | null): string {
  const backgroundUrl = selectedCategory ? getForagingSkillTreeCategoryAssetUrl(selectedCategory) : null;
  const label = `LvL ${level}`;
  const categoryLabel = selectedCategory ? getForagingSkillTreeDefinition(selectedCategory).label : "None";

  return `
    <button
      class="character-skill-tree-button ${backgroundUrl ? "has-background" : "plain"}"
      type="button"
      data-command="open-foraging-skill-tree"
      data-foraging-level-badge
      data-foraging-tree-category="${selectedCategory ?? "none"}"
      aria-label="Foraging level ${level}${selectedCategory ? `, ${categoryLabel} tree` : ""}"
      title="Open Foraging skill tree"
    >
      ${backgroundUrl ? `<img class="character-skill-tree-button-art" src="${backgroundUrl}" alt="" aria-hidden="true" />` : ""}
      <span class="character-skill-tree-button-label">${label}</span>
    </button>
  `;
}

function renderCombatClassProgressPanel(state: GameState): string {
  const selectedCharacter = getSelectedCharacter(state);
  const loadout = getCharacterCombatLoadout(state, selectedCharacter.id);
  const rows = combatClassDefinitions.filter((definition) => {
    const progress = selectedCharacter.classProgress[definition.id];
    return definition.id === loadout.classId || (progress?.totalXp ?? 0) > 0;
  });

  return `
    <section class="skill-group combat-class-group" aria-label="Combat class experience">
      <h4>Combat</h4>
      <div class="skill-group-list">
        ${rows.map((definition) => renderCombatClassRow(state, definition.id)).join("")}
      </div>
    </section>
  `;
}

function renderCombatClassRow(state: GameState, classId: (typeof combatClassDefinitions)[number]["id"]): string {
  const selectedCharacter = getSelectedCharacter(state);
  const definition = combatClassDefinitions.find((candidate) => candidate.id === classId) ?? combatClassDefinitions[0];
  const progress = selectedCharacter.classProgress[classId];
  const progressView = getCombatClassProgressView(progress);
  const progressLabel = progressView.atCap
    ? "Max level"
    : `${formatCombatClassXp(progressView.xpIntoLevel)} / ${formatCombatClassXp(progressView.xpForLevel)} XP`;

  return `
    <article class="skill-row combat-class-row" data-editor-id="combat-class-row-${classId}" data-editor-label="Combat class row: ${definition.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-row-heading">
        <span>
          <strong>${definition.label}</strong>
          <small>${definition.weaponLabel} - Total ${formatCombatClassXp(progress.totalXp)} XP</small>
        </span>
        <span class="skill-level-pill">Lv ${progress.level}</span>
      </div>
      <div class="skill-progress-track" aria-hidden="true">
        <span style="transform: scaleX(${Math.min(1, Math.max(0, progressView.ratio)).toFixed(4)})"></span>
      </div>
      <div class="skill-row-meta">
        <span>${progressLabel}</span>
        <span>${definition.role}</span>
      </div>
    </article>
  `;
}

function renderActionLoopsPanel(
  state: GameState,
  selectedLoopId: string | null,
  selectedLoopIndex: number,
  actionLoopTarget: ActionLoopTarget,
  actionLoopLocationMenu: ActionLoopLocationMenu,
  actionLoopSkillMenu: ActionLoopSkillMenu
): string {
  const selectedLoop = getActionLoop(state, selectedLoopId);
  const activeAssignments = getCurrentActions(state).length;

  return `
    <div class="work-area single-panel">
      <section class="panel action-loop-page-panel action-loop-panel" aria-label="Action loops" data-editor-id="action-loops-panel" data-editor-label="Action loops panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="loop-panel-heading">
          <h3>Action Loops</h3>
          <button class="loop-create-button" type="button" data-command="create-loop">New</button>
        </div>
        <div class="loop-picker" aria-label="Saved action loops">
          ${state.actionLoops.map((loop) => renderActionLoopPickerButton(state, loop.id, selectedLoop?.id ?? null)).join("")}
        </div>
        ${
          selectedLoop
            ? `
              <div class="loop-editor">
                <div class="loop-editor-heading">
                  <label class="loop-name-field">
                    <span>Name</span>
                    <input
                      type="text"
                      value="${escapeHtml(selectedLoop.name)}"
                      maxlength="42"
                      data-loop-field="name"
                      data-loop-id="${selectedLoop.id}"
                      aria-label="Action loop name"
                    />
                    <small>${selectedLoop.actionIds.length} ${selectedLoop.actionIds.length === 1 ? "step" : "steps"}; ${activeAssignments} active</small>
                  </label>
                  <button
                    class="loop-delete-button"
                    type="button"
                    data-command="delete-loop"
                    data-loop-id="${selectedLoop.id}"
                    ${state.actionLoops.length <= 1 ? "disabled" : ""}
                  >
                    Delete
                  </button>
                </div>
                ${renderActionLoopStepEditor(
                  state,
                  selectedLoop,
                  selectedLoopIndex,
                  actionLoopLocationMenu,
                  actionLoopSkillMenu
                )}
                ${renderActionLoopControls(state, selectedLoop.id, actionLoopTarget, selectedLoopIndex)}
                <div class="loop-assignment-list">
                  ${state.characters.map((character) => renderLoopAssignmentButton(state, selectedLoop.id, character)).join("")}
                </div>
              </div>
            `
            : `<div class="empty-line">No loops built yet.</div>`
        }
      </section>
    </div>
  `;
}

function renderActionLoopStepEditor(
  state: GameState,
  loop: ActionLoop,
  selectedLoopIndex: number,
  actionLoopLocationMenu: ActionLoopLocationMenu,
  actionLoopSkillMenu: ActionLoopSkillMenu
): string {
  const safeIndex = Math.min(loop.actionIds.length - 1, Math.max(0, selectedLoopIndex));
  const actionId = loop.actionIds[safeIndex];
  const rule = getActionLoopAdvanceRule(loop, safeIndex);
  const label = getActionLoopLabel(actionId);

  return `
    <section class="loop-step-editor" aria-label="Selected loop step" data-editor-id="loop-step-editor" data-editor-label="Loop step editor" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="loop-step-editor-heading">
        <span>
          <strong>Step ${safeIndex + 1}: ${label}</strong>
          <small>${getActionLoopStepSummary(state, loop, safeIndex)}</small>
        </span>
      </div>
      <div class="loop-step-field-grid">
        ${renderActionLoopLocationField(loop, safeIndex, actionId, actionLoopLocationMenu)}
        ${renderActionLoopSkillField(loop, safeIndex, actionId, actionLoopSkillMenu)}
        <label class="loop-step-field">
          <span>Advance</span>
          <select data-loop-field="advance-mode" data-loop-id="${loop.id}" data-id="${safeIndex}">
            ${actionLoopAdvanceOptions
              .map((option) => `
                <option value="${option.id}" ${rule.mode === option.id ? "selected" : ""}>${option.label}</option>
              `)
              .join("")}
          </select>
        </label>
        ${renderActionLoopResourceRuleFields(loop, safeIndex, actionId, rule)}
      </div>
      <small class="loop-step-hint">${getActionLoopAdvanceRuleDescription(rule.mode)}</small>
    </section>
  `;
}

function renderActionLoopLocationField(
  loop: ActionLoop,
  index: number,
  actionId: ActionId,
  actionLoopLocationMenu: ActionLoopLocationMenu
): string {
  if (!isCarryAction(actionId)) {
    return `
      <div class="loop-step-field readonly">
        <span>Location</span>
        <strong>Camp</strong>
      </div>
    `;
  }

  const locations = getActionLoopLocationOptions(actionId);
  const selectedLocationId = getActionLoopStepLocationId(actionId, loop.locationIds[index] ?? null);
  const selectedLocation = getLocation(selectedLocationId);
  if (locations.length <= 1) {
    return `
      <div class="loop-step-field readonly">
        <span>Location</span>
        <strong>${selectedLocation.label}</strong>
      </div>
    `;
  }

  const menuOpen = actionLoopLocationMenu?.loopId === loop.id && actionLoopLocationMenu.index === index;

  return `
    <div class="loop-step-field loop-location-field">
      <span>Location</span>
      <div class="loop-location-picker ${menuOpen ? "open" : ""}">
        <button
          class="loop-location-button"
          type="button"
          data-command="toggle-loop-location-menu"
          data-loop-id="${loop.id}"
          data-id="${index}"
          aria-haspopup="menu"
          aria-expanded="${menuOpen}"
          aria-label="Location: ${selectedLocation.label}"
        >
          <img src="${selectedLocation.iconUrl}" alt="" aria-hidden="true" />
          <span class="loop-location-label">${selectedLocation.label}</span>
        </button>
        ${
          menuOpen
            ? `<div class="loop-location-menu" role="menu" aria-label="Choose step location">
                ${locations
                  .map((location) => {
                    const active = location.id === selectedLocationId;
                    return `
                      <button
                        class="loop-location-option ${active ? "active" : ""}"
                        type="button"
                        data-command="set-loop-step-location"
                        data-loop-id="${loop.id}"
                        data-id="${index}"
                        data-location-id="${location.id}"
                        role="menuitemradio"
                        aria-checked="${active}"
                        title="${location.label}"
                      >
                        <img src="${location.iconUrl}" alt="" aria-hidden="true" />
                        <span class="loop-location-label">${location.label}</span>
                      </button>
                    `;
                  })
                  .join("")}
              </div>`
            : ""
        }
      </div>
    </div>
  `;
}

function renderActionLoopSkillField(
  loop: ActionLoop,
  index: number,
  actionId: ActionId,
  actionLoopSkillMenu: ActionLoopSkillMenu
): string {
  const selectedSkillId = getSkillIdForAction(actionId);
  const selectedSkill = getSkillDefinition(selectedSkillId);
  const menuOpen = actionLoopSkillMenu?.loopId === loop.id && actionLoopSkillMenu.index === index;

  return `
    <div class="loop-step-field loop-skill-field">
      <span>Skill</span>
      <div class="loop-skill-picker ${menuOpen ? "open" : ""}">
        <button
          class="loop-skill-button"
          type="button"
          data-command="toggle-loop-skill-menu"
          data-loop-id="${loop.id}"
          data-id="${index}"
          aria-haspopup="menu"
          aria-expanded="${menuOpen}"
          aria-label="Skill: ${selectedSkill.label}"
          style="${getSkillTileStyle(selectedSkillId)}"
        >
          ${renderSkillTileContent(selectedSkillId, selectedSkill.label)}
        </button>
        ${
          menuOpen
            ? `<div class="loop-skill-menu" role="menu" aria-label="Choose step skill">
                ${actionLoopSkillOptions
                  .map((option) => {
                    const skill = getSkillDefinition(option.skillId);
                    const active = option.skillId === selectedSkillId;
                    return `
                      <button
                        class="loop-skill-option ${active ? "active" : ""}"
                        type="button"
                        data-command="set-loop-step-skill"
                        data-loop-id="${loop.id}"
                        data-id="${index}"
                        data-skill-id="${option.skillId}"
                        role="menuitemradio"
                        aria-checked="${active}"
                        title="${skill.label}"
                        style="${getSkillTileStyle(option.skillId)}"
                      >
                        ${renderSkillTileContent(option.skillId, skill.label)}
                      </button>
                    `;
                  })
                  .join("")}
              </div>`
            : ""
        }
      </div>
    </div>
  `;
}

function renderActionLoopResourceRuleFields(
  loop: ActionLoop,
  index: number,
  actionId: ActionId,
  rule: ActionLoopAdvanceRule
): string {
  if (rule.mode !== "whenResourceAtLeast") {
    return "";
  }

  const resourceId = getActionLoopRuleResourceId(rule, actionId);
  const scope = rule.scope ?? "camp";
  const amount = Math.max(1, Math.floor(rule.amount ?? 1));

  return `
    <label class="loop-step-field">
      <span>Stock</span>
      <select data-loop-field="advance-resource" data-loop-id="${loop.id}" data-id="${index}">
        ${resourceOrder
          .map((id) => `
            <option value="${id}" ${resourceId === id ? "selected" : ""}>${getResourceLabel(id)}</option>
          `)
          .join("")}
      </select>
    </label>
    <label class="loop-step-field">
      <span>Source</span>
      <select data-loop-field="advance-scope" data-loop-id="${loop.id}" data-id="${index}">
        <option value="camp" ${scope === "camp" ? "selected" : ""}>Camp</option>
        <option value="character" ${scope === "character" ? "selected" : ""}>Character</option>
      </select>
    </label>
    <label class="loop-step-field">
      <span>Amount</span>
      <input type="number" min="1" step="1" value="${amount}" data-loop-field="advance-amount" data-loop-id="${loop.id}" data-id="${index}" />
    </label>
  `;
}

function renderActionLoopPickerButton(state: GameState, loopId: string, selectedLoopId: string | null): string {
  const loop = getActionLoop(state, loopId);
  if (!loop) {
    return "";
  }

  const assignedCount = state.characters.filter((character) => character.actionLoopId === loop.id).length;
  const selected = selectedLoopId === loop.id;
  return `
    <button
      class="loop-picker-button ${selected ? "active" : ""}"
      type="button"
      data-command="select-loop-step"
      data-loop-id="${loop.id}"
      data-id="0"
      aria-pressed="${selected}"
    >
      <span>${escapeHtml(loop.name)}</span>
      <small>${assignedCount} assigned</small>
    </button>
  `;
}

function renderLoopAssignmentButton(
  state: GameState,
  loopId: string,
  character: GameState["characters"][number]
): string {
  const assigned = character.actionLoopId === loopId;
  const running = getCurrentAction(state, character.id);
  const label = assigned ? (running ? "Running" : "Assigned") : "Assign";

  return `
    <button
      class="loop-assignment-button ${assigned ? "assigned" : ""} ${running ? "running" : ""}"
      type="button"
      data-command="assign-loop"
      data-loop-id="${loopId}"
      data-character-id="${character.id}"
      aria-pressed="${assigned}"
    >
      <span>
        <strong>${character.name}</strong>
        <small>${getCharacterStatusText(state, character)}</small>
      </span>
      <em>${label}</em>
    </button>
  `;
}

function renderCharacterInventory(state: GameState): string {
  const selectedCharacter = getSelectedCharacter(state);
  const possessiveName = getPossessiveName(selectedCharacter.name);
  const inventory = getCharacterInventory(state, selectedCharacter.id);
  const carriedIds = resourceOrder.filter((resourceId) => {
    return inventory[resourceId] > 0 || getResourceQuantity(state, resourceId, "character", selectedCharacter.id) > 0;
  });
  const carriedWeight = getCharacterInventoryWeight(state, selectedCharacter.id);
  const maxWeight = getCharacterMaxWeight(state, selectedCharacter.id);
  const iconIds = carriedIds.filter((id) => Boolean(resourceSlotImages[id]));
  const rowIds = carriedIds.filter((id) => !resourceSlotImages[id]);
  const canStoreAtCamp = !getCurrentAction(state) && isSelectedCharacterAtCamp(state);

  return `
    <div class="resource-group character-inventory-group" data-editor-id="character-inventory-group" data-editor-label="Character inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="inventory-summary-heading">
        <h3>${possessiveName} Inventory</h3>
        <span>${formatWeightAmount(carriedWeight)}/${formatWeightAmount(maxWeight)}</span>
      </div>
      ${
        carriedIds.length
          ? `<button class="deposit-button" type="button" data-command="deposit-carried" ${canStoreAtCamp ? "" : "disabled"}>Store at Camp</button>`
          : ""
      }
      ${
        carriedIds.length
          ? `
            ${
              iconIds.length
                ? `<div class="inventory-resource-grid" aria-label="${possessiveName} carried inventory">
                    ${iconIds.map((id) => renderInventoryResourceSlot(state, id, inventory, "character", selectedCharacter.id)).join("")}
                  </div>`
                : ""
            }
            ${rowIds.map((id) => renderResourceRow(id, inventory)).join("")}
          `
          : `<div class="empty-line">Pack empty.</div>`
      }
    </div>
  `;
}

function renderResourceGroup(state: GameState, group: CampInventoryResourceGroup): string {
  const iconIds = group.usePlaceholderIcons ? group.ids : group.ids.filter((id) => Boolean(resourceSlotImages[id]));
  const rowIds = group.usePlaceholderIcons ? [] : group.ids.filter((id) => !resourceSlotImages[id]);
  const groupClass = group.usePlaceholderIcons ? " camp-forage-inventory-group" : "";
  const gridClass = group.usePlaceholderIcons ? " camp-forage-inventory-grid" : "";

  return `
    <div class="resource-group${groupClass}" data-editor-id="resource-group-${group.id}" data-editor-label="${group.label} resource group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${group.label}</h3>
      ${
        iconIds.length
          ? `<div class="inventory-resource-grid${gridClass}" aria-label="${group.label} inventory">
              ${iconIds
                .map((id) =>
                  renderInventoryResourceSlot(
                    state,
                    id,
                    state.inventory,
                    "camp",
                    state.selectedCharacterId,
                    group.usePlaceholderIcons ? flaxFiberIconUrl : undefined
                  )
                )
                .join("")}
            </div>`
          : ""
      }
      ${rowIds.map((id) => `
        ${renderResourceRow(id, state.inventory)}
      `).join("")}
    </div>
  `;
}

function renderResourceRow(resourceId: ResourceId, inventory: Inventory): string {
  return `
    <div class="resource-row">
      <span>
        <strong>${getResourceLabel(resourceId)}</strong>
        <small>${resourceDefinitions.find((resource) => resource.id === resourceId)?.blurb ?? ""}</small>
      </span>
      <b>${formatInventoryAmount(resourceId, inventory[resourceId])}</b>
    </div>
  `;
}

function renderInventoryResourceSlot(
  state: GameState,
  resourceId: ResourceId,
  inventory: Inventory = state.inventory,
  source: InventorySource = "camp",
  characterId = state.selectedCharacterId,
  placeholderIconUrl?: string
): string {
  const imageUrl = resourceSlotImages[resourceId] ?? placeholderIconUrl;
  const definition = resourceDefinitions.find((resource) => resource.id === resourceId);
  if (!imageUrl || !definition) {
    return "";
  }

  const typeLabel = getResourceInventoryTypeLabel(definition);
  const quantity = getResourceQuantity(state, resourceId, source, characterId);
  const quantityLabel = isWholeCountResource(resourceId) ? `, quantity ${quantity}` : "";

  return `
    <article class="equipment-slot inventory-resource-slot icon-only" tabindex="0" data-tooltip-source aria-label="${definition.label}, ${formatInventoryAmount(resourceId, inventory[resourceId])}${quantityLabel}" data-editor-id="inventory-resource-${source}-${resourceId}" data-editor-label="Inventory resource: ${definition.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <img class="slot-item-icon" src="${imageUrl}" alt="" aria-hidden="true" />
      <span class="item-quantity" aria-hidden="true">${formatResourceAmount(resourceId, inventory[resourceId])}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${definition.label}</strong>
        </div>
        <dl>
          <div>
            <dt>Type</dt>
            <dd>${typeLabel}</dd>
          </div>
          ${
            isWeightedResource(resourceId)
              ? `<div>
                  <dt>Total</dt>
                  <dd>${formatInventoryAmount(resourceId, inventory[resourceId])}</dd>
                </div>`
              : ""
          }
          ${
            isWholeCountResource(resourceId)
              ? `<div>
                  <dt>Quantity</dt>
                  <dd>${quantity}</dd>
                </div>`
              : ""
          }
          <div>
            <dt>Use</dt>
            <dd>${definition.blurb}</dd>
          </div>
        </dl>
      </div>
    </article>
  `;
}

function getResourceInventoryTypeLabel(resource: ResourceDefinition): string {
  const forageCategory = getResourceForageDisplayCategory(resource);
  return forageCategory ? getForageDisplayCategoryLabel(forageCategory) : labelGroup(resource.group);
}

function renderToolInventory(state: GameState): string {
  const visibleTools = toolDefinitions.filter((tool) => {
    return state.tools[tool.id].quantity > 0;
  });

  if (!visibleTools.length) {
    return "";
  }

  return `
    <section class="resource-group tool-inventory" data-editor-id="tool-inventory-group" data-editor-label="Tool inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Primitive Tools</h3>
      <div class="inventory-tool-grid" aria-label="Primitive tool inventory">
        ${visibleTools.map((tool) => renderInventoryToolSlot(state, tool.id)).join("")}
      </div>
    </section>
  `;
}

function renderInventoryToolSlot(state: GameState, toolId: ToolId): string {
  const definition = toolDefinitions.find((tool) => tool.id === toolId);
  const tool = state.tools[toolId];
  if (!definition || tool.quantity <= 0) {
    return "";
  }

  const maxDurability = getMaxToolDurability(toolId);
  const stats: EquipmentStat[] = [
    { label: "Durability", value: `${maxDurability}/${maxDurability}` },
    ...getToolEquipmentStats(toolId)
  ];

  return `
    <article class="equipment-slot inventory-tool-slot icon-only" tabindex="0" data-tooltip-source aria-label="${definition.label}, ${tool.quantity} ${tool.quantity === 1 ? "spare" : "spares"}" data-editor-id="inventory-tool-${toolId}" data-editor-label="Inventory tool: ${definition.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${renderSlotIcon(toolId)}
      <span class="item-quantity" aria-hidden="true">${tool.quantity}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${definition.label}</strong>
        </div>
        <dl>
          ${stats.map((stat) => `
            <div>
              <dt>${stat.label}</dt>
              <dd>${stat.value}</dd>
            </div>
          `).join("")}
        </dl>
      </div>
    </article>
  `;
}

function renderEquipment(state: GameState, showStats = true): string {
  const slots = equipmentToolSlots.slice(0, EQUIPMENT_SLOT_COUNT);

  return `
    <section class="side-panel-content equipment-screen" data-editor-id="equipment-screen" data-editor-label="Equipment screen" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="equipment-section">
        <h3>Equipment</h3>
        <div class="equipment-grid" aria-label="Tool equipment slots">
          ${slots
            .map((toolId, index) => {
              return toolId && state.tools[toolId].owned
                ? renderEquipmentSlot(state, toolId)
                : renderEmptyEquipmentSlot(index, toolId);
            })
            .join("")}
        </div>
      </div>
      ${equipmentPlaceholderGroups.map((group) => renderEquipmentPlaceholderGroup(group)).join("")}
      ${
        showStats
          ? `<div class="equipment-section equipment-stats-section">
              <h3>Equipment Stats</h3>
              <dl class="equipment-stat-list">
                ${getEquipmentSummaryStats(state)
                  .map((stat) => `
                    <div class="equipment-stat-row">
                      <dt>${stat.label}</dt>
                      <dd>${stat.value}</dd>
                    </div>
                  `)
                  .join("")}
              </dl>
            </div>`
          : ""
      }
    </section>
  `;
}

function renderEquipmentPlaceholderGroup(group: EquipmentPlaceholderGroup): string {
  return `
    <div class="equipment-section equipment-placeholder-section" data-editor-id="equipment-placeholder-${getSafeDomId(group.label)}" data-editor-label="${group.label} equipment slots" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${group.label}</h3>
      <div class="equipment-placeholder-grid" aria-label="${group.label} slots">
        ${group.slots.map((slot) => renderEquipmentPlaceholderSlot(group.label, slot)).join("")}
      </div>
    </div>
  `;
}

function renderEquipmentPlaceholderSlot(groupLabel: string, slot: string): string {
  return `
    <div class="equipment-slot empty equipment-placeholder-slot" aria-label="Empty ${slot} slot" data-editor-id="equipment-placeholder-${getSafeDomId(groupLabel)}-${getSafeDomId(slot)}" data-editor-label="Equipment placeholder: ${slot}" data-editor-files="src/ui/render.ts, src/style.css">
      <strong>${slot}</strong>
    </div>
  `;
}

function getEquipmentSummaryStats(state: GameState): EquipmentStat[] {
  const selectedCharacter = getSelectedCharacter(state);
  const equippedTools = toolDefinitions.filter((tool) => state.tools[tool.id].owned);
  const usableTools = equippedTools.filter((tool) => state.tools[tool.id].durability > 0);
  const spareTools = toolDefinitions.reduce((total, tool) => total + state.tools[tool.id].quantity, 0);
  const carriedWeight = getCharacterInventoryWeight(state, selectedCharacter.id);
  const maxWeight = getCharacterMaxWeight(state, selectedCharacter.id);
  const carryBonus = Math.max(0, maxWeight - BASE_CHARACTER_MAX_WEIGHT);
  const fieldEffects = getEquippedFieldEffects(state);

  return [
    { label: "Carry", value: `${formatWeightAmount(carriedWeight)} / ${formatWeightAmount(maxWeight)} lb` },
    { label: "Carry Bonus", value: carryBonus > 0 ? `+${formatWeightAmount(carryBonus)} lb` : "None" },
    { label: "Usable Tools", value: `${usableTools.length} / ${equipmentToolSlots.filter(Boolean).length}` },
    { label: "Spares", value: spareTools > 0 ? `${spareTools}` : "None" },
    { label: "Field Effects", value: fieldEffects.length ? fieldEffects.join(", ") : "None" }
  ];
}

function getEquippedFieldEffects(state: GameState): string[] {
  const effects: string[] = [];
  const roleLabels = [
    ["fishing", "Fishing"],
    ["butchering", "Butchering"],
    ["woodcutting", "Woodcutting"],
    ["mining", "Mining"],
    ["hunting", "Hunting"]
  ] as const;

  for (const [role, label] of roleLabels) {
    const toolId = getBestUsableToolForRole(state, role);
    if (!toolId) {
      continue;
    }

    const definition = toolDefinitions.find((tool) => tool.id === toolId);
    const prefix = definition && definition.tier !== "primitive" ? `${labelToolTier(definition.tier)} ` : "";
    effects.push(role === "hunting" && definition ? `${label} (${definition.label})` : `${prefix}${label}`);
  }
  return effects;
}

function renderEquipmentSlot(state: GameState, toolId: ToolId): string {
  const definition = toolDefinitions.find((tool) => tool.id === toolId);
  const tool = state.tools[toolId];
  if (!definition || !tool.owned) {
    return "";
  }

  const maxDurability = getMaxToolDurability(toolId);
  const durability = Math.max(0, tool.durability);
  const usable = durability > 0;
  const percent = ((durability / maxDurability) * 100).toFixed(1);
  const stats = [
    { label: "Durability", value: usable ? `${durability}/${maxDurability}` : "Broken" },
    { label: "Inventory", value: `${tool.quantity} ${tool.quantity === 1 ? "spare" : "spares"}` },
    ...getToolEquipmentStats(toolId)
  ];
  const iconOnly = Boolean(equippedSlotImages[toolId]);

  return `
    <article class="equipment-slot ${usable ? "" : "broken"} ${iconOnly ? "icon-only" : ""}" tabindex="0" data-tooltip-source aria-label="${definition.label}" data-editor-id="equipment-slot-${toolId}" data-editor-label="Equipment slot: ${definition.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${renderSlotIcon(toolId)}
      ${
        iconOnly
          ? ""
          : `<strong>${definition.label}</strong>
            <span class="slot-durability" aria-label="${definition.label} durability">
              <span>
                <b style="width: ${percent}%"></b>
              </span>
              <em>${usable ? `${durability}/${maxDurability}` : "Broken"}</em>
            </span>`
      }
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${definition.label}</strong>
          <em>${usable ? `${durability}/${maxDurability}` : "Broken"}</em>
        </div>
        <dl>
          ${stats.map((stat) => `
            <div>
              <dt>${stat.label}</dt>
              <dd>${usable ? stat.value : "Inactive"}</dd>
            </div>
          `).join("")}
        </dl>
      </div>
    </article>
  `;
}

function renderSlotIcon(toolId: ToolId): string {
  const imageUrl = equippedSlotImages[toolId];
  if (imageUrl) {
    return `<img class="slot-item-icon" src="${imageUrl}" alt="" aria-hidden="true" />`;
  }

  return `<span class="slot-glyph">${getToolInitials(toolId)}</span>`;
}

function renderEmptyEquipmentSlot(index: number, toolId: ToolId | null): string {
  const label = toolId ? (emptySlotLabels[toolId] ?? "Empty") : "Empty";

  return `
    <div class="equipment-slot empty" aria-label="Empty equipment slot ${index + 1}">
      <span class="slot-glyph">${toolId ? getToolInitials(toolId) : "+"}</span>
      <strong>${label}</strong>
    </div>
  `;
}

function getToolInitials(toolId: ToolId): string {
  switch (toolId) {
    case "basket":
      return "BK";
    case "leatherBackpack":
      return "BP";
    case "fishingPole":
      return "FP";
    case "stoneAxe":
      return "HT";
    case "stonePickAxe":
      return "PX";
    case "copperPickaxe":
      return "CP";
    case "copperHatchet":
      return "CH";
    case "copperKnife":
      return "CK";
    case "bronzePickaxe":
      return "BP";
    case "bronzeHatchet":
      return "BH";
    case "bronzeKnife":
      return "BK";
    case "stoneSpear":
      return "SP";
    case "stoneKnife":
      return "SK";
    case "woodenSword":
      return "WS";
    case "woodenTwoHandedSword":
      return "2S";
    case "woodenClub":
      return "WC";
    case "woodenTwoHandedClub":
      return "2C";
    case "shortBow":
      return "SB";
    case "woodenTotem":
      return "WT";
  }

  const definition = toolDefinitions.find((tool) => tool.id === toolId);
  return (definition?.label ?? toolId)
    .split(" ")
    .map((word) => word[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getTooltipSlot(target: EventTarget | null, root: HTMLElement): HTMLElement | null {
  if (!(target instanceof Element)) {
    return null;
  }

  const slot = target.closest<HTMLElement>("[data-tooltip-source]");
  return slot && root.contains(slot) ? slot : null;
}

function showFloatingTooltip(root: HTMLElement, slot: HTMLElement): void {
  const source = slot.querySelector<HTMLElement>(".slot-tooltip");
  const layer = getTooltipLayer(root);
  if (!source || !layer) {
    return;
  }

  layer.innerHTML = source.innerHTML;
  layer.setAttribute("aria-hidden", "false");
  layer.classList.add("visible");
  positionFloatingTooltip(root, slot);
}

function hideFloatingTooltip(root: HTMLElement): void {
  const layer = getTooltipLayer(root);
  if (!layer) {
    return;
  }

  layer.classList.remove("visible");
  layer.setAttribute("aria-hidden", "true");
  layer.innerHTML = "";
}

function positionFloatingTooltip(root: HTMLElement, slot: HTMLElement): void {
  const layer = getTooltipLayer(root);
  if (!layer) {
    return;
  }

  const gap = 8;
  const margin = 12;
  const slotRect = slot.getBoundingClientRect();
  const layerRect = layer.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const width = layerRect.width;
  const height = layerRect.height;

  let left = slotRect.left - width - gap;
  if (left < margin) {
    const rightSide = slotRect.right + gap;
    left = rightSide + width <= viewportWidth - margin ? rightSide : viewportWidth - width - margin;
  }

  const maxTop = Math.max(margin, viewportHeight - height - margin);
  const top = Math.min(Math.max(slotRect.top, margin), maxTop);

  layer.style.left = `${Math.max(margin, Math.round(left))}px`;
  layer.style.top = `${Math.round(top)}px`;
}

function getTooltipLayer(root: HTMLElement): HTMLElement | null {
  return root.querySelector<HTMLElement>(".tooltip-layer");
}

function captureScrollPositions(root: HTMLElement): Map<string, number> {
  const selectors = [".log-list", ".side-panel-content", ".character-overview-content"];
  return new Map(
    selectors.map((selector) => {
      const element = root.querySelector<HTMLElement>(selector);
      return [selector, element?.scrollTop ?? 0];
    })
  );
}

function restoreScrollPositions(root: HTMLElement, scrollPositions: Map<string, number>): void {
  for (const [selector, scrollTop] of scrollPositions) {
    const element = root.querySelector<HTMLElement>(selector);
    if (element) {
      element.scrollTop = scrollTop;
    }
  }
}

function renderLog(state: GameState, scope: LogScope, title: string, extraClass = ""): string {
  const entries = state.log.filter((entry) => getLogScope(entry) === scope);

  return `
    <section class="log-panel ${extraClass}" data-editor-id="${scope}-log-panel" data-editor-label="${title}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>${title}</span>
        <span class="quiet">${entries.length}</span>
      </div>
        <div class="log-list">
          ${entries.map((entry) => `
            <p class="log-entry ${entry.tone}">
              <span>${entry.text}</span>
              ${renderLogGains(entry)}
            </p>
          `).join("")}
        </div>
    </section>
  `;
}

function renderLogGains(entry: LogEntry): string {
  if (entry.aggregateItems) {
    const gains = resourceOrder
      .filter((resourceId) => (entry.aggregateItems?.[resourceId] ?? 0) > 0)
      .map((resourceId) => {
        const amount = entry.aggregateItems?.[resourceId] ?? 0;
        return `<b>+${formatResourceAmount(resourceId, amount)} ${formatLogResource(resourceId, amount)}</b>`;
      });

    return gains.length ? `<span class="log-gains">${gains.join("")}</span>` : "";
  }

  return entry.aggregateTotal ? `<span class="log-gains"><b>+${entry.aggregateTotal} ${entry.aggregateUnit ?? ""}</b></span>` : "";
}

function formatInventoryAmount(resourceId: ResourceId, amount: number): string {
  return isWeightedResource(resourceId) ? `${formatResourceAmount(resourceId, amount)} lb` : formatResourceAmount(resourceId, amount);
}

function formatWeightAmount(amount: number): string {
  const rounded = Math.round(amount * 10) / 10;
  return Number.isInteger(rounded) ? `${rounded}` : rounded.toFixed(1);
}

function formatLogResource(resourceId: ResourceId, amount: number): string {
  const label = getResourceLabel(resourceId);
  if (isWeightedResource(resourceId)) {
    return `lb ${label}`;
  }

  if (amount === 1) {
    return label;
  }

  switch (resourceId) {
    case "wood":
    case "rabbitMeat":
    case "squirrelMeat":
    case "cookedRabbitMeat":
    case "cookedSquirrelMeat":
    case "leather":
    case "rettedFlax":
    case "linenThread":
    case "linenCloth":
      return label;
    case "flaxPlant":
      return "Flax Plants";
    case "flaxFiber":
      return "Flax Fibers";
    case "coal":
    case "copper":
    case "tin":
    case "copperBar":
    case "bronzeBar":
    case "pot":
    case "ladle":
      return label;
    case "copperNeedle":
      return "Copper Needles";
    case "bronzeNeedle":
      return "Bronze Needles";
    case "water":
      return "Water";
    case "dirtyBowl":
      return "Dirty Bowls";
    case "woodenSpoon":
      return "Wooden Spoons";
    case "clothWrap":
      return "Cloth Wraps";
    case "linenBandage":
      return "Linen Bandages";
    case "simplePouch":
      return "Simple Pouches";
    case "linenHood":
      return "Linen Hoods";
    case "linenShirt":
      return "Linen Shirts";
    default:
      return label.endsWith("s") ? label : `${label}s`;
  }
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "\"":
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return character;
    }
  });
}

function labelGroup(group: string): string {
  switch (group) {
    case "resources":
      return "Resources";
    case "animals":
      return "Animals";
    case "hunted":
      return "Meats";
    case "fish":
      return "Fish";
    case "crafted":
      return "Worked";
    case "ingredients":
      return "Ingredients";
    case "food":
      return "Food";
    case "liquids":
      return "Liquids";
    case "utensils":
      return "Utensils";
    default:
      return group;
  }
}
