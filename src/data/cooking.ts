import type {
  CookingRecipeDefinition,
  CookingRecipeId,
  CookingRecipeOutput,
  CookingStationId,
  Cost,
  ResourceDefinition,
  ResourceId
} from "../types";

export interface CookingStationDefinition {
  id: CookingStationId;
  name: string;
  label: string;
  requiredBuildingId: "campfire";
  tags: string[];
  fuelMode: "existing-campfire";
  description: string;
}

type StewIngredient = {
  id: ResourceId;
  amount?: number;
  role: "meat" | "plant" | "seasoning";
};

type StewRecipeConfig = {
  id: CookingRecipeId;
  name: string;
  outputId: ResourceId;
  ingredients: StewIngredient[];
  hunger: number;
  xpReward: number;
  levelRequirement?: number;
  cookTimeMs?: number;
  tags?: string[];
  failureChance?: number;
};

export const cookingStationDefinitions: CookingStationDefinition[] = [
  {
    id: "campfire",
    name: "Campfire",
    label: "Campfire",
    requiredBuildingId: "campfire",
    tags: ["primitive", "stew", "open-fire"],
    fuelMode: "existing-campfire",
    description: "A simple fire ring that can hold one primitive cooking job at a time."
  }
];

const stewRecipes = [
  createStewRecipe({
    id: "rabbitStew",
    name: "Rabbit Stew",
    outputId: "rabbitStew",
    ingredients: [
      { id: "rabbitMeat", role: "meat" },
      { id: "dandelionGreens", role: "plant" }
    ],
    hunger: 24,
    xpReward: 220,
    tags: ["meat", "starter"]
  }),
  createStewRecipe({
    id: "squirrelHerbStew",
    name: "Squirrel Herb Stew",
    outputId: "squirrelHerbStew",
    ingredients: [
      { id: "squirrelMeat", role: "meat" },
      { id: "plantainLeaf", role: "plant" },
      { id: "yarrow", role: "seasoning" }
    ],
    hunger: 19,
    xpReward: 240,
    tags: ["meat", "herbal"]
  }),
  createStewRecipe({
    id: "rootStew",
    name: "Root Stew",
    outputId: "rootStew",
    ingredients: [
      { id: "sunrootTubers", role: "plant" },
      { id: "wildCarrot", role: "plant" },
      { id: "clover", role: "plant" }
    ],
    hunger: 18,
    xpReward: 210,
    tags: ["meadow", "vegetarian", "roots"]
  }),
  createStewRecipe({
    id: "wildGarlicRabbitStew",
    name: "Wild Garlic Rabbit Stew",
    outputId: "wildGarlicRabbitStew",
    ingredients: [
      { id: "rabbitMeat", role: "meat" },
      { id: "wildGarlic", role: "seasoning" },
      { id: "sorrel", role: "plant" }
    ],
    hunger: 28,
    xpReward: 275,
    levelRequirement: 2,
    tags: ["meat", "allium", "sour"]
  }),
  createStewRecipe({
    id: "meadowStew",
    name: "Meadow Stew",
    outputId: "meadowStew",
    ingredients: [
      { id: "dandelionGreens", role: "plant" },
      { id: "clover", role: "plant" },
      { id: "plantainLeaf", role: "plant" },
      { id: "wildOnion", role: "seasoning" },
      { id: "sunrootTubers", role: "plant" }
    ],
    hunger: 22,
    xpReward: 260,
    levelRequirement: 2,
    tags: ["meadow", "vegetarian", "five-plant"]
  }),
  createStewRecipe({
    id: "mintedSquirrelStew",
    name: "Minted Squirrel Stew",
    outputId: "mintedSquirrelStew",
    ingredients: [
      { id: "squirrelMeat", role: "meat" },
      { id: "mint", role: "seasoning" },
      { id: "wildOnion", role: "seasoning" }
    ],
    hunger: 22,
    xpReward: 285,
    levelRequirement: 3,
    tags: ["meat", "aromatic"]
  }),
  ...createAccentStews("rabbitMeat", "Rabbit", [
    ["sorrel", "Sorrel", 25],
    ["yarrow", "Yarrow", 24],
    ["hearthcap", "Hearthcap", 27]
  ]),
  ...createAccentStews("squirrelMeat", "Squirrel", [
    ["wildGarlic", "Wild Garlic", 22],
    ["fennel", "Fennel", 21],
    ["hearthcap", "Hearthcap", 23]
  ])
];

export const cookingRecipeDefinitions: CookingRecipeDefinition[] = stewRecipes;
export const cookingRecipeIds: CookingRecipeId[] = cookingRecipeDefinitions.map((recipe) => recipe.id);
export const stewRecipeDefinitions: CookingRecipeDefinition[] = cookingRecipeDefinitions.filter((recipe) =>
  recipe.tags.includes("stew")
);
export const cookingFoodResourceIds: ResourceId[] = cookingRecipeDefinitions.flatMap((recipe) =>
  recipe.outputs.map((output) => output.resourceId)
);

export const cookingFoodResourceDefinitions: ResourceDefinition[] = cookingRecipeDefinitions.map((recipe) => {
  const output = recipe.outputs[0];
  return {
    id: output.resourceId,
    label: recipe.name,
    group: "food",
    blurb: getStewBlurb(recipe),
    stackSize: 20,
    weight: 0.8,
    value: Math.max(6, Math.round(recipe.xpReward / 35)),
    rarity: recipe.levelRequirement >= 3 ? "uncommon" : "common",
    nutrition: recipe.nutrition,
    spoilage: { perishable: true },
    quality: { enabled: false, baseQuality: 1 },
    cooking: {
      tags: ["prepared", "stew", ...recipe.tags],
      compatibility: ["eat", "serve", "tavern"]
    }
  };
});

export function getCookingStationDefinition(id: CookingStationId): CookingStationDefinition | undefined {
  return cookingStationDefinitions.find((station) => station.id === id);
}

export function getCookingRecipe(id: CookingRecipeId): CookingRecipeDefinition | undefined {
  return cookingRecipeDefinitions.find((recipe) => recipe.id === id);
}

export function getCookingRecipeCost(recipe: CookingRecipeDefinition): Cost {
  return recipe.ingredients.reduce<Cost>((cost, ingredient) => {
    if (ingredient.resourceId && ingredient.consumed !== false) {
      cost[ingredient.resourceId] = (cost[ingredient.resourceId] ?? 0) + ingredient.amount;
    }
    return cost;
  }, {});
}

export function getCookingRecipeOutputs(recipe: CookingRecipeDefinition): Cost {
  return recipe.outputs.reduce<Cost>((outputs, output) => {
    outputs[output.resourceId] = (outputs[output.resourceId] ?? 0) + output.amount;
    return outputs;
  }, {});
}

export function isCookingFoodResource(id: ResourceId): boolean {
  return cookingFoodResourceIds.includes(id);
}

function createAccentStews(
  meatId: ResourceId,
  meatName: string,
  accents: Array<[ResourceId, string, number]>
): CookingRecipeDefinition[] {
  return accents.map(([accentId, accentName, hunger], index) =>
    createStewRecipe({
      id: `${accentId}${meatName}Stew`,
      name: `${accentName} ${meatName} Stew`,
      outputId: `${accentId}${meatName}Stew`,
      ingredients: [
        { id: meatId, role: "meat" },
        { id: accentId, role: "seasoning" },
        { id: index % 2 === 0 ? "dandelionGreens" : "plantainLeaf", role: "plant" }
      ],
      hunger,
      xpReward: 250 + index * 20,
      levelRequirement: 2 + index,
      tags: ["meat", "generated", "accent"]
    })
  );
}

function createStewRecipe(config: StewRecipeConfig): CookingRecipeDefinition {
  const outputs: CookingRecipeOutput[] = [{ resourceId: config.outputId, amount: 1 }];
  return {
    id: config.id,
    name: config.name,
    station: "campfire",
    cookTimeMs: config.cookTimeMs ?? 24_000,
    ingredients: [
      { resourceId: "water", amount: 1, role: "liquid" },
      { resourceId: "crudeBowl", amount: 1, role: "vessel" },
      ...config.ingredients.map((ingredient) => ({
        resourceId: ingredient.id,
        amount: ingredient.amount ?? 1,
        role: ingredient.role === "seasoning" ? "seasoning" : ingredient.role
      }))
    ],
    outputs,
    xpReward: config.xpReward,
    levelRequirement: config.levelRequirement ?? 1,
    tags: ["stew", "primitive", ...(config.tags ?? [])],
    nutrition: { hunger: config.hunger },
    failureChance: config.failureChance ?? 0.03,
    modifiers: ["quality-ready", "season-ready", "station-ready"]
  };
}

function getStewBlurb(recipe: CookingRecipeDefinition): string {
  if (recipe.tags.includes("vegetarian")) {
    return "A rough bowl of meadow plants simmered until soft enough to fill the belly.";
  }
  if (recipe.tags.includes("aromatic") || recipe.tags.includes("accent")) {
    return "A primitive stew carried by a strong meadow scent and small-game broth.";
  }
  return "A simple campfire stew of water, gathered plants, and whatever meat the day allowed.";
}
