export type ResourceId =
  | "stick"
  | "stone"
  | "flaxPlant"
  | "rettedFlax"
  | "flaxFiber"
  | "linenThread"
  | "linenCloth"
  | "mushroom"
  | "berry"
  | "wood"
  | "woodenBowl"
  | "coal"
  | "copper"
  | "tin"
  | "copperBar"
  | "bronzeBar"
  | "copperNeedle"
  | "bronzeNeedle"
  | "clothWrap"
  | "linenBandage"
  | "simplePouch"
  | "linenHood"
  | "linenShirt"
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
  | "stoneDagger"
  | "woodenSword"
  | "woodenTwoHandedSword"
  | "woodenClub"
  | "woodenTwoHandedClub"
  | "shortBow"
  | "woodenTotem"
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

export type BuildingId =
  | "campfire"
  | "tanningRack"
  | "hideTent"
  | "crudeStoneFurnace"
  | "primitiveSpinningWheel"
  | "primitiveLoom";

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
  | "craftWoodenBowl"
  | "craftStoneKnife"
  | "craftStoneDagger"
  | "craftStoneAxe"
  | "craftStonePickAxe"
  | "craftStoneSpear"
  | "craftWoodenSword"
  | "craftWoodenTwoHandedSword"
  | "craftWoodenClub"
  | "craftWoodenTwoHandedClub"
  | "craftShortBow"
  | "craftWoodenTotem"
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
  | "handSpinLinenThread"
  | "spinLinenThread"
  | "weaveLinenCloth"
  | "craftCopperNeedle"
  | "craftBronzeNeedle"
  | "sewClothWrap"
  | "sewLinenBandage"
  | "sewSimplePouch"
  | "sewLinenHood"
  | "sewLinenShirt"
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

export type ToolRole = "mining" | "woodcutting" | "butchering" | "fishing" | "hunting";
export type ToolTier = "primitive" | "copper" | "bronze";
export type WeaponRange = "melee" | "ranged" | "focus";

export interface WeaponStats {
  damage: number;
  speed: number;
  hands: 1 | 2;
  range: WeaponRange;
}

export type CombatLocationId = "ruins";
export type EnemyId = "goblin";
export type CombatClassId =
  | "fighter"
  | "warrior"
  | "bruiser"
  | "crusher"
  | "archer"
  | "shaman"
  | "mage"
  | "caster"
  | "rogue";

export interface CombatClassProgress {
  level: number;
  xp: number;
  totalXp: number;
}

export type CombatClassProgressMap = Record<CombatClassId, CombatClassProgress>;

export interface CharacterCombatStats {
  hp: number;
  maxHp: number;
  mana: number;
  maxMana: number;
}

export type CombatUnitKind = "party" | "enemy";

export interface CombatUnit {
  id: string;
  kind: CombatUnitKind;
  name: string;
  hp: number;
  maxHp: number;
  mana: number;
  maxMana: number;
  x: number;
  y: number;
  damage: number;
  attackRange: number;
  actEveryMs: number;
  nextActAt: number;
  characterId?: string;
  enemyId?: EnemyId;
  classId?: CombatClassId;
  weaponId?: ToolId;
}

export interface CombatEncounter {
  id: string;
  locationId: CombatLocationId;
  startedAt: number;
  updatedAt: number;
  wave: number;
  defeatedEnemies: number;
  units: CombatUnit[];
  message: string;
}

export interface CombatLogEntry {
  id: string;
  time: number;
  text: string;
  tone: "muted" | "gain" | "warning";
}

export interface CombatState {
  selectedLocationId: CombatLocationId;
  encounter: CombatEncounter | null;
  log: CombatLogEntry[];
}

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
  combat: CharacterCombatStats;
  classProgress: CombatClassProgressMap;
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
  version: 9;
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
  combat: CombatState;
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
