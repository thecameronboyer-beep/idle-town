export type ResourceId =
  | "stick"
  | "stone"
  | "flaxPlant"
  | "rettedFlax"
  | "flaxFiber"
  | "linenThread"
  | "mushroom"
  | "berry"
  | "wood"
  | "coal"
  | "copper"
  | "tin"
  | "copperBar"
  | "bronzeBar"
  | "pot"
  | "ladle"
  | "rabbit"
  | "squirrel"
  | "rabbitMeat"
  | "squirrelMeat"
  | "cookedRabbitMeat"
  | "cookedSquirrelMeat"
  | "hide"
  | "bone"
  | "leather"
  | "minnow"
  | "stoneLoach"
  | "mudskipper"
  | "brookStickleback"
  | "pebblePerch"
  | "minnowFilet"
  | "stoneLoachFilet"
  | "mudskipperFilet"
  | "brookSticklebackFilet"
  | "pebblePerchFilet";

export type ToolId =
  | "stoneAxe"
  | "stoneSpear"
  | "stoneKnife"
  | "stonePickAxe"
  | "copperPickaxe"
  | "copperHatchet"
  | "copperKnife"
  | "bronzePickaxe"
  | "bronzeHatchet"
  | "bronzeKnife"
  | "fishingPole"
  | "basket"
  | "leatherBackpack";

export type BuildingId = "campfire" | "tanningRack" | "hideTent" | "crudeStoneFurnace";

export type ActionId =
  | "gatherSticks"
  | "gatherStones"
  | "gatherFlaxPlants"
  | "gatherFlaxFibers"
  | "gatherMushrooms"
  | "gatherBerries"
  | "mineCoal"
  | "mineCopper"
  | "mineTin"
  | "fishRiver"
  | "craftLowestTool"
  | "craftBasket"
  | "craftFishingPole"
  | "craftStoneKnife"
  | "craftStoneAxe"
  | "craftStonePickAxe"
  | "craftStoneSpear"
  | "chopTrees"
  | "huntSmallAnimals"
  | "butcherFish"
  | "butcherRabbit"
  | "butcherSquirrel"
  | "cookRabbitMeat"
  | "cookSquirrelMeat"
  | "tanHide"
  | "craftLeatherBackpack"
  | "retFlax"
  | "separateFlaxFiber"
  | "smeltCopperBar"
  | "smeltBronzeBar"
  | "craftPot"
  | "craftLadle"
  | "craftCopperPickaxe"
  | "craftCopperHatchet"
  | "craftCopperKnife"
  | "craftBronzePickaxe"
  | "craftBronzeHatchet"
  | "craftBronzeKnife";

export type SkillId =
  | "foraging"
  | "mining"
  | "fishing"
  | "woodcutting"
  | "hunting"
  | "crafting"
  | "smithing"
  | "textiles"
  | "butchering"
  | "cooking"
  | "leatherworking"
  | "construction"
  | "agility";

export type Inventory = Record<ResourceId, number>;
export type ResourceCounts = Record<ResourceId, number>;
export type ResourceCountDelta = Partial<Record<ResourceId, number>>;

export type LocationId = "meadow" | "river" | "forest" | "mine";
export type CharacterLocationId = "camp" | LocationId;

export type RunningActionPhase = "travelingTo" | "working" | "followUp" | "travelingBack";

export interface ToolState {
  owned: boolean;
  durability: number;
  quantity: number;
}

export type OwnedTools = Record<ToolId, ToolState>;

export type OwnedBuildings = Record<BuildingId, boolean>;
export type OwnedBuildingCounts = Record<BuildingId, number>;

export type Cost = Partial<Record<ResourceId, number>>;

export interface SkillPrestigeBonus {
  id: string;
  label: string;
  description?: string;
  value?: number;
  kind?: string;
}

export interface SkillState {
  level: number;
  xp: number;
  totalXp: number;
  prestige: number;
  bonuses: SkillPrestigeBonus[];
}

export type Skills = Record<SkillId, SkillState>;

export interface Character {
  id: string;
  name: string;
  epithet: string;
  condition: "alone" | "working" | "resting";
  locationId: CharacterLocationId;
  inventory: Inventory;
  resourceCounts: ResourceCounts;
  actionLoopId?: string;
}

export interface RunningAction {
  actionId: ActionId;
  characterId: string;
  phase: RunningActionPhase;
  originLocationId?: CharacterLocationId;
  targetLocationId?: CharacterLocationId;
  locationId?: LocationId;
  loopActionIds?: ActionId[];
  loopLocationIds?: Array<LocationId | null>;
  loopIndex?: number;
  nextLoopIndex?: number;
  followUpActionId?: ActionId;
  startedAt: number;
  endsAt: number;
  repeat: boolean;
}

export interface ActionLoop {
  id: string;
  name: string;
  actionIds: ActionId[];
  locationIds: Array<LocationId | null>;
  createdAt: number;
  updatedAt: number;
}

export type LogScope = "camp" | "character";

export interface LogEntry {
  id: string;
  time: number;
  text: string;
  tone: "muted" | "gain" | "craft" | "warning";
  scope?: LogScope;
  aggregateKey?: string;
  aggregateTotal?: number;
  aggregateUnit?: string;
  aggregateItems?: Partial<Record<ResourceId, number>>;
}

export interface GameState {
  version: 7;
  createdAt: number;
  updatedAt: number;
  lastSimulatedAt: number;
  selectedCharacterId: string;
  characters: Character[];
  inventory: Inventory;
  characterInventory: Inventory;
  resourceCounts: ResourceCounts;
  characterResourceCounts: ResourceCounts;
  tools: OwnedTools;
  buildings: OwnedBuildings;
  buildingCounts: OwnedBuildingCounts;
  campfireExpiresAt: number | null;
  seenResources: ResourceId[];
  skills: Skills;
  actionLoops: ActionLoop[];
  currentActions: RunningAction[];
  currentAction: RunningAction | null;
  log: LogEntry[];
}

export interface ResourceDefinition {
  id: ResourceId;
  label: string;
  group: "resources" | "animals" | "fish" | "hunted" | "crafted";
  blurb: string;
}

export interface CraftableDefinition<TId extends string> {
  id: TId;
  label: string;
  recipe: Cost;
  blurb: string;
}

export interface ActionDefinition {
  id: ActionId;
  label: string;
  verb: string;
  durationMs: number;
  blurb: string;
}
