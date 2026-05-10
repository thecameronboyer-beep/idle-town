export type ResourceId =
  | "stick"
  | "stone"
  | "flaxFiber"
  | "wood"
  | "rabbit"
  | "squirrel"
  | "rabbitMeat"
  | "squirrelMeat"
  | "cookedRabbitMeat"
  | "cookedSquirrelMeat"
  | "hide"
  | "bone"
  | "leather";

export type ToolId = "stoneAxe" | "stoneSpear" | "stoneKnife";

export type BuildingId = "campfire" | "tanningRack";

export type ActionId =
  | "gatherSticks"
  | "gatherStones"
  | "gatherFlaxFibers"
  | "chopTrees"
  | "huntSmallAnimals"
  | "butcherRabbit"
  | "butcherSquirrel"
  | "cookRabbitMeat"
  | "cookSquirrelMeat"
  | "tanHide";

export type Inventory = Record<ResourceId, number>;

export type LocationId = "meadow" | "river" | "forest";

export type RunningActionPhase = "travelingTo" | "working" | "travelingBack";

export interface ToolState {
  owned: boolean;
  durability: number;
  quantity: number;
}

export type OwnedTools = Record<ToolId, ToolState>;

export type OwnedBuildings = Record<BuildingId, boolean>;

export type Cost = Partial<Record<ResourceId, number>>;

export interface Character {
  id: string;
  name: string;
  epithet: string;
  condition: "alone" | "working" | "resting";
}

export interface RunningAction {
  actionId: ActionId;
  characterId: string;
  phase: RunningActionPhase;
  locationId?: LocationId;
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
  version: 1;
  createdAt: number;
  updatedAt: number;
  lastSimulatedAt: number;
  selectedCharacterId: string;
  characters: Character[];
  inventory: Inventory;
  characterInventory: Inventory;
  tools: OwnedTools;
  buildings: OwnedBuildings;
  seenResources: ResourceId[];
  currentAction: RunningAction | null;
  log: LogEntry[];
}

export interface ResourceDefinition {
  id: ResourceId;
  label: string;
  group: "resources" | "animals" | "hunted" | "crafted";
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
