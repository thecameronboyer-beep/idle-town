export type ResourceId =
  | "stick"
  | "stone"
  | "flaxFiber"
  | "mushroom"
  | "berry"
  | "wood"
  | "coal"
  | "copper"
  | "tin"
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

export type ToolId = "stoneAxe" | "stoneSpear" | "stoneKnife" | "stonePickAxe" | "fishingPole" | "basket";

export type BuildingId = "campfire" | "tanningRack" | "hideTent";

export type ActionId =
  | "gatherSticks"
  | "gatherStones"
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
  | "tanHide";

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

export interface Character {
  id: string;
  name: string;
  epithet: string;
  condition: "alone" | "working" | "resting";
  locationId: CharacterLocationId;
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

export interface LogEntry {
  id: string;
  time: number;
  text: string;
  tone: "muted" | "gain" | "craft" | "warning";
  aggregateKey?: string;
  aggregateTotal?: number;
  aggregateUnit?: string;
  aggregateItems?: Partial<Record<ResourceId, number>>;
}

export interface GameState {
  version: 4;
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
