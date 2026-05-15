export type ResourceId = string;

export type ResourceGroup =
  | "resources"
  | "animals"
  | "fish"
  | "hunted"
  | "crafted"
  | "ingredients"
  | "food"
  | "liquids"
  | "utensils";

export type ItemRarity = "common" | "uncommon" | "rare" | "special";
export type IngredientCategory = "meat" | "herb" | "flower" | "berry" | "root" | "vegetable" | "seasoning";

export interface ResourceNutrition {
  hunger?: number;
  hydration?: number;
}

export interface ResourceSpoilageHooks {
  perishable: boolean;
  shelfLifeMs?: number;
}

export interface ResourceQualityHooks {
  enabled: boolean;
  baseQuality?: number;
}

export interface ResourceCookingData {
  ingredientCategory?: IngredientCategory;
  tags: string[];
  compatibility?: string[];
}

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
  | "gatherMeadowIngredients"
  | "gatherWater"
  | "mineCoal"
  | "mineCopper"
  | "mineTin"
  | "fishRiver"
  | "craftLowestTool"
  | "craftBasket"
  | "craftCrudeBowl"
  | "craftCrudeWoodenSpoon"
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

export interface CharacterNeeds {
  hunger: number;
  maxHunger: number;
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
  needs: CharacterNeeds;
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

export type CookingStationId = "campfire";
export type CookingRecipeId = string;

export interface CookingIngredientRequirement {
  resourceId?: ResourceId;
  category?: IngredientCategory;
  tags?: string[];
  amount: number;
  role?: "meat" | "plant" | "liquid" | "vessel" | "seasoning";
  consumed?: boolean;
  optional?: boolean;
}

export interface CookingRecipeOutput {
  resourceId: ResourceId;
  amount: number;
  chance?: number;
}

export interface CookingRecipeNutrition {
  hunger?: number;
  hydration?: number;
}

export interface CookingRecipeDefinition {
  id: CookingRecipeId;
  name: string;
  ingredients: CookingIngredientRequirement[];
  station: CookingStationId;
  cookTimeMs: number;
  outputs: CookingRecipeOutput[];
  xpReward: number;
  levelRequirement: number;
  tags: string[];
  nutrition: CookingRecipeNutrition;
  failureChance: number;
  modifiers?: string[];
}

export interface CookingQueueEntry {
  id: string;
  recipeId: CookingRecipeId;
  stationId: CookingStationId;
  queuedAt: number;
  startedAt: number | null;
  endsAt: number | null;
}

export interface CookingState {
  queue: CookingQueueEntry[];
  knownRecipeIds: CookingRecipeId[];
  completedRecipeCounts: Partial<Record<CookingRecipeId, number>>;
}

export interface GameState {
  version: 10;
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
  cooking: CookingState;
  combat: CombatState;
  actionLoops: ActionLoop[];
  currentActions: RunningAction[];
  currentAction: RunningAction | null;
  log: LogEntry[];
}

export interface ResourceDefinition {
  id: ResourceId;
  label: string;
  group: ResourceGroup;
  blurb: string;
  stackSize?: number;
  weight?: number;
  value?: number;
  rarity?: ItemRarity;
  nutrition?: ResourceNutrition;
  spoilage?: ResourceSpoilageHooks;
  quality?: ResourceQualityHooks;
  cooking?: ResourceCookingData;
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
