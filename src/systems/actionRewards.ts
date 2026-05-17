import { primitiveToolCraftDefinitions, toolDefinitions } from "../data/craftables";
import { getAlchemyRecipe } from "../data/alchemy";
import {
  getForageIngredientActionDefinition,
  getForageResourceActionDefinition,
  type GatherableIngredientCategory
} from "../data/gatherables";
import { getSmithingRecipe } from "../data/smithing";
import { getTextileRecipe } from "../data/textiles";
import {
  fishFiletByFishId,
  fishResourceIds,
  formatResourceAmount,
  getResourceLabel,
  normalizeResourceAmount
} from "../data/resources";
import type { ActionId, Cost, GameState, LocationId, ResourceCountDelta, ResourceId, ToolId } from "../types";
import {
  consumeOneWholeResource,
  getCharacterInventory,
  hasResourceQuantity
} from "./inventory";
import { rollGatherableResource, rollGatheringTable } from "./gathering";
import { addStackedLog } from "./log";
import { randomFloat, randomInt } from "./math";
import {
  applyTestRewardMultiplierToResourceCounts,
  applyTestRewardMultiplierToResourceDelta,
  getTestRewardMultiplier
} from "./debugModifiers";
import {
  damageBestToolForRole,
  equipFreshTool,
  getCombatPowerForRole,
  getToolTierForRole,
  hasUsableTool,
  hasUsableToolForRole
} from "./tools";

export type ActionRewards = {
  resources: Cost;
  resourceCounts?: ResourceCountDelta;
  message: string;
  tone: "gain" | "craft";
};

export type ToolCraftActionId = ActionId;

export const TOOL_CRAFT_ACTIONS: Array<{ actionId: ToolCraftActionId; toolId: ToolId }> =
  primitiveToolCraftDefinitions.map((tool) => ({ actionId: tool.craftActionId, toolId: tool.id }));

const RIVER_FISH: Array<{ id: ResourceId; minWeight: number; maxWeight: number }> = [
  { id: "minnow", minWeight: 0.5, maxWeight: 1.5 },
  { id: "stoneLoach", minWeight: 1, maxWeight: 3 },
  { id: "mudskipper", minWeight: 1.5, maxWeight: 4.5 },
  { id: "brookStickleback", minWeight: 0.5, maxWeight: 2 },
  { id: "pebblePerch", minWeight: 2, maxWeight: 7.5 }
];

const SMALL_GAME: Array<{ id: "rabbit" | "squirrel"; minWeight: number; maxWeight: number }> = [
  { id: "rabbit", minWeight: 2, maxWeight: 5 },
  { id: "squirrel", minWeight: 0.5, maxWeight: 2 }
];

export function getToolRecipe(toolId: ToolId): Cost {
  return toolDefinitions.find((tool) => tool.id === toolId)?.recipe ?? {};
}

export function getToolStockCount(state: GameState, toolId: ToolId): number {
  const tool = state.tools[toolId];
  return (tool?.quantity ?? 0) + (tool?.owned ? 1 : 0);
}

export function rollRewards(
  state: GameState,
  actionId: ActionId
): ActionRewards {
  return applyRewardMultiplier(rollBaseRewards(state, actionId));
}

function rollBaseRewards(
  state: GameState,
  actionId: ActionId
): ActionRewards {
  const smithingRecipe = getSmithingRecipe(actionId);
  if (smithingRecipe) {
    return {
      resources: smithingRecipe.output ?? {},
      message: `Cameron finishes ${smithingRecipe.label.toLowerCase()}.`,
      tone: "craft"
    };
  }
  const alchemyRecipe = getAlchemyRecipe(actionId);
  if (alchemyRecipe) {
    return {
      resources: alchemyRecipe.output,
      message: `Cameron finishes ${alchemyRecipe.label.toLowerCase()}.`,
      tone: "craft"
    };
  }
  const textileRecipe = getTextileRecipe(actionId);
  if (textileRecipe) {
    return {
      resources: textileRecipe.output,
      message: `Cameron finishes ${textileRecipe.label.toLowerCase()}.`,
      tone: "craft"
    };
  }
  const forageAction = getForageIngredientActionDefinition(actionId);
  if (forageAction) {
    return gatherIngredients(forageAction.locationId, forageAction.category);
  }
  const forageResourceAction = getForageResourceActionDefinition(actionId);
  if (forageResourceAction) {
    return gatherIngredientResource(forageResourceAction.locationId, forageResourceAction.resourceId);
  }

  switch (actionId) {
    case "gatherSticks": {
      const amount = randomInt(1, 3);
      return {
        resources: { stick: amount },
        message: `Cameron gathers ${amount} ${plural("Stick", amount)}.`,
        tone: "gain"
      };
    }
    case "gatherStones": {
      const amount = randomInt(1, 2);
      return {
        resources: { stone: amount },
        message: `Cameron finds ${amount} ${plural("Stone", amount)}.`,
        tone: "gain"
      };
    }
    case "gatherFlaxPlants": {
      const amount = randomInt(2, 4);
      return {
        resources: { flaxPlant: amount },
        message: `Cameron cuts ${amount} ${plural("Flax Plant", amount)} from the meadow.`,
        tone: "gain"
      };
    }
    case "gatherFlaxFibers": {
      const amount = randomInt(1, 3);
      return {
        resources: { flaxFiber: amount },
        message: `Cameron pulls ${amount} ${plural("Flax Fiber", amount)} from the brush.`,
        tone: "gain"
      };
    }
    case "gatherMeadowIngredients": {
      return gatherIngredients("meadow");
    }
    case "gatherForestIngredients": {
      return gatherIngredients("forest");
    }
    case "gatherRiverIngredients": {
      return gatherIngredients("river");
    }
    case "gatherMineIngredients": {
      return gatherIngredients("mine");
    }
    case "gatherDesertIngredients": {
      return gatherIngredients("desert");
    }
    case "gatherSand": {
      const amount = randomInt(2, 5);
      return {
        resources: { sand: amount },
        message: `Cameron gathers ${amount} ${plural("Sand", amount)} from the desert.`,
        tone: "gain"
      };
    }
    case "gatherWater": {
      const amount = randomInt(1, 3);
      return {
        resources: { water: amount },
        message: `Cameron fills ${amount} ${amount === 1 ? "skin" : "skins"} of river water.`,
        tone: "gain"
      };
    }
    case "mineCoal":
      return mineResource(state, "coal");
    case "mineCopper":
      return mineResource(state, "copper");
    case "mineTin":
      return mineResource(state, "tin");
    case "fishRiver":
      return fishRiver();
    case "craftLowestTool":
    case "craftLeatherBackpack":
      break;
    case "craftWoodenSpoon":
      return {
        resources: { woodenSpoon: 1 },
        message: "Cameron carves a wooden spoon.",
        tone: "craft"
      };
    case "chopTrees": {
      const toolTier = getToolTierForRole(state, "woodcutting");
      const woodBonus = toolTier >= 3 ? 1 : toolTier >= 2 && Math.random() < 0.5 ? 1 : 0;
      const wood = randomInt(2, 4) + woodBonus;
      const sticks = Math.random() < 0.35 ? 1 : 0;
      return {
        resources: { wood, stick: sticks },
        message: `Cameron chops ${wood} ${plural("Wood", wood)}${sticks ? " and saves a usable stick" : ""}.`,
        tone: "gain"
      };
    }
    case "huntSmallAnimals":
      return huntSmallAnimal(state);
    case "butcherFish":
      return {
        resources: {},
        message: "Cameron butchers carried fish.",
        tone: "gain"
      };
    case "butcherRabbit":
      return butcherAnimal(state, "rabbit");
    case "butcherSquirrel":
      return butcherAnimal(state, "squirrel");
    case "cookRabbitMeat":
      return {
        resources: { cookedRabbitMeat: 1 },
        message: "Cameron cooks rabbit meat over the coals.",
        tone: "craft"
      };
    case "cookSquirrelMeat":
      return {
        resources: { cookedSquirrelMeat: 1 },
        message: "Cameron cooks squirrel meat over the coals.",
        tone: "craft"
      };
    case "craftWoodenBowl":
      return {
        resources: { woodenBowl: 1 },
        message: "Cameron carves a wooden bowl.",
        tone: "craft"
      };
    case "tanHide":
      return {
        resources: { leather: 1 },
        message: "Cameron works a hide into rough leather.",
        tone: "craft"
      };
  }

  const craftedToolId = getCraftedToolId(actionId);
  return craftedToolId
    ? {
        resources: {},
        message: `Cameron finishes ${getToolDefinitionLabel(craftedToolId).toLowerCase()}.`,
        tone: "craft"
      }
    : {
        resources: {},
        message: "Cameron finishes the work.",
        tone: "craft"
      };
}

export function getCraftedToolId(actionId: ActionId): ToolId | null {
  const smithingRecipe = getSmithingRecipe(actionId);
  if (smithingRecipe?.toolId) {
    return smithingRecipe.toolId;
  }

  const toolCraftAction = TOOL_CRAFT_ACTIONS.find((entry) => entry.actionId === actionId);
  if (toolCraftAction) {
    return toolCraftAction.toolId;
  }

  return actionId === "craftLeatherBackpack" ? "leatherBackpack" : null;
}

export function completeToolCraft(
  state: GameState,
  characterId: string,
  characterName: string,
  toolId: ToolId,
  now: number
): void {
  const definition = toolDefinitions.find((tool) => tool.id === toolId);
  if (!definition) {
    return;
  }

  state.tools[toolId].quantity += 1;
  if (!hasUsableTool(state, toolId)) {
    equipFreshTool(state, toolId);
  }

  addStackedLog(state, {
    aggregateKey: `craft:${characterId}:${toolId}`,
    text: `${characterName} crafted ${pluralTool(definition.label)}`,
    amount: 1,
    unit: pluralTool(definition.label),
    tone: "craft",
    now,
    scope: "character"
  });
}

export function completeFishButchering(state: GameState, characterId: string, characterName: string, now: number): void {
  const filets = butcherOneCarriedFish(state, characterId);
  if (!Object.values(filets).some((amount) => (amount ?? 0) > 0)) {
    return;
  }

  addStackedLog(state, {
    aggregateKey: `action:${characterId}:butcherFish`,
    text: `${characterName} butchered fish`,
    resources: filets,
    tone: "gain",
    now,
    scope: "character"
  });
}

export function hasCarriedWholeFish(state: GameState, characterId = state.selectedCharacterId): boolean {
  return fishResourceIds.some((fishId) => hasResourceQuantity(state, fishId, "character", characterId));
}

export function applyToolWear(state: GameState, actionId: ActionId, now: number, characterName: string): void {
  switch (actionId) {
    case "fishRiver":
      damageBestToolForRole(state, "fishing", 1, now, characterName);
      break;
    case "mineCoal":
    case "mineCopper":
    case "mineTin":
      damageBestToolForRole(state, "mining", 1, now, characterName);
      break;
    case "chopTrees":
      damageBestToolForRole(state, "woodcutting", 1, now, characterName);
      break;
    case "huntSmallAnimals":
      damageBestToolForRole(state, "hunting", 1, now, characterName);
      break;
    case "butcherRabbit":
    case "butcherSquirrel":
      damageBestToolForRole(state, "butchering", 1, now, characterName);
      break;
    default:
      break;
  }
}

export function getStackedActionText(actionId: ActionId, characterName = "Cameron"): string {
  const smithingRecipe = getSmithingRecipe(actionId);
  if (smithingRecipe) {
    return `${characterName} completed ${smithingRecipe.label.toLowerCase()}`;
  }
  const alchemyRecipe = getAlchemyRecipe(actionId);
  if (alchemyRecipe) {
    return `${characterName} completed ${alchemyRecipe.label.toLowerCase()}`;
  }
  const textileRecipe = getTextileRecipe(actionId);
  if (textileRecipe) {
    return `${characterName} completed ${textileRecipe.label.toLowerCase()}`;
  }
  const forageAction = getForageIngredientActionDefinition(actionId);
  if (forageAction) {
    return `${characterName} gathered ${forageAction.label.replace("Gather ", "").toLowerCase()}`;
  }
  const forageResourceAction = getForageResourceActionDefinition(actionId);
  if (forageResourceAction) {
    return `${characterName} gathered ${forageResourceAction.resourceLabel.toLowerCase()}`;
  }

  switch (actionId) {
    case "gatherSticks":
      return `${characterName} gathered sticks`;
    case "gatherStones":
      return `${characterName} gathered stones`;
    case "gatherFlaxPlants":
      return `${characterName} gathered flax plants`;
    case "gatherFlaxFibers":
      return `${characterName} gathered flax fibers`;
    case "gatherMeadowIngredients":
      return `${characterName} gathered meadow ingredients`;
    case "gatherForestIngredients":
      return `${characterName} gathered forest forage`;
    case "gatherRiverIngredients":
      return `${characterName} gathered river forage`;
    case "gatherMineIngredients":
      return `${characterName} gathered mine forage`;
    case "gatherDesertIngredients":
      return `${characterName} gathered desert forage`;
    case "gatherSand":
      return `${characterName} gathered sand`;
    case "gatherWater":
      return `${characterName} gathered water`;
    case "mineCoal":
      return `${characterName} mined coal`;
    case "mineCopper":
      return `${characterName} mined copper`;
    case "mineTin":
      return `${characterName} mined tin`;
    case "fishRiver":
      return `${characterName} caught fish`;
    case "craftLowestTool":
      return `${characterName} balanced tool stock`;
    case "craftWoodenSpoon":
      return `${characterName} crafted wooden spoons`;
    case "craftWoodenBowl":
      return `${characterName} carved wooden bowls`;
    case "craftLeatherBackpack":
      return `${characterName} crafted leather backpacks`;
    case "chopTrees":
      return `${characterName} chopped trees`;
    case "huntSmallAnimals":
      return `${characterName} hunted small animals`;
    case "butcherFish":
      return `${characterName} butchered fish`;
    case "butcherRabbit":
      return `${characterName} butchered rabbits`;
    case "butcherSquirrel":
      return `${characterName} butchered squirrels`;
    case "cookRabbitMeat":
      return `${characterName} cooked rabbit meat`;
    case "cookSquirrelMeat":
      return `${characterName} cooked squirrel meat`;
    case "tanHide":
      return `${characterName} tanned hide`;
  }

  const craftedToolId = getCraftedToolId(actionId);
  if (craftedToolId) {
    return `${characterName} crafted ${pluralTool(getToolDefinitionLabel(craftedToolId)).toLowerCase()}`;
  }

  return `${characterName} completed work`;
}

function butcherOneCarriedFish(state: GameState, characterId: string): Cost {
  const filets: Cost = {};
  const inventory = getCharacterInventory(state, characterId);

  for (const fishId of fishResourceIds) {
    const filetId = fishFiletByFishId[fishId];
    if (!filetId || !hasResourceQuantity(state, fishId, "character", characterId)) {
      continue;
    }

    const consumedWeight = consumeOneWholeResource(state, fishId, "character", characterId);
    const filetAmount = normalizeResourceAmount(filetId, consumedWeight * 0.5 * getTestRewardMultiplier());
    if (filetAmount <= 0) {
      return filets;
    }

    inventory[filetId] = normalizeResourceAmount(
      filetId,
      inventory[filetId] + filetAmount
    );
    filets[filetId] = normalizeResourceAmount(filetId, (filets[filetId] ?? 0) + filetAmount);
    if (!state.seenResources.includes(filetId)) {
      state.seenResources.push(filetId);
    }
    return filets;
  }

  return filets;
}

function applyRewardMultiplier(rewards: ActionRewards): ActionRewards {
  return {
    ...rewards,
    resources: applyTestRewardMultiplierToResourceDelta(rewards.resources),
    resourceCounts: rewards.resourceCounts
      ? applyTestRewardMultiplierToResourceCounts(rewards.resourceCounts)
      : undefined
  };
}

function gatherIngredients(
  locationId: LocationId,
  category?: GatherableIngredientCategory
): ActionRewards {
  const gathered = rollGatheringTable(locationId, category);
  return {
    resources: gathered.resources,
    message: gathered.message,
    tone: "gain"
  };
}

function gatherIngredientResource(
  locationId: LocationId,
  resourceId: ResourceId
): ActionRewards {
  const gathered = rollGatherableResource(locationId, resourceId);
  return {
    resources: gathered.resources,
    message: gathered.message,
    tone: "gain"
  };
}

function fishRiver(): ActionRewards {
  const fish = RIVER_FISH[randomInt(0, RIVER_FISH.length - 1)];
  const weight = randomFloat(fish.minWeight, fish.maxWeight, 1);
  const label = getResourceLabel(fish.id);

  return {
    resources: { [fish.id]: weight },
    resourceCounts: { [fish.id]: 1 },
    message: `Cameron catches a ${formatResourceAmount(fish.id, weight)} lb ${label}.`,
    tone: "gain"
  };
}

function mineResource(state: GameState, resourceId: "coal" | "copper" | "tin"): ActionRewards {
  const label = getResourceLabel(resourceId);
  const toolTier = getToolTierForRole(state, "mining");
  const bonusChance = toolTier >= 3 ? 0.35 : toolTier >= 2 ? 0.18 : 0;
  const amount = 1 + (Math.random() < bonusChance ? 1 : 0);

  return {
    resources: { [resourceId]: amount },
    message: `Cameron mines ${amount} ${label}.`,
    tone: "gain"
  };
}

function huntSmallAnimal(state: GameState): ActionRewards {
  const combatPower = getCombatPowerForRole(state, "hunting");
  const rabbitChance = Math.min(0.76, 0.52 + combatPower * 0.025);
  const animal = SMALL_GAME[Math.random() < rabbitChance ? 0 : 1];
  const weightBonus = Math.min(0.8, Math.max(0, combatPower - 2.4) * 0.12);
  const weight = randomFloat(animal.minWeight, animal.maxWeight + weightBonus, 1);
  const label = getResourceLabel(animal.id);

  return {
    resources: { [animal.id]: weight },
    resourceCounts: { [animal.id]: 1 },
    message: `Cameron brings back a ${formatResourceAmount(animal.id, weight)} lb ${label}.`,
    tone: "gain"
  };
}

function butcherAnimal(
  state: GameState,
  animal: "rabbit" | "squirrel"
): ActionRewards {
  const consumedWeight = consumeOneWholeResource(state, animal);
  if (consumedWeight <= 0) {
    return {
      resources: {},
      message: `Cameron has no ${animal} to butcher.`,
      tone: "gain"
    };
  }

  const meatId: ResourceId = animal === "rabbit" ? "rabbitMeat" : "squirrelMeat";
  const meat = animal === "rabbit" ? randomInt(1, 2) : 1;
  const knifeTier = getToolTierForRole(state, "butchering");
  const hasKnife = hasUsableToolForRole(state, "butchering");
  const recoveryBonus = knifeTier >= 3 ? 0.18 : knifeTier >= 2 ? 0.08 : 0;
  const hideChance = Math.min(0.9, (animal === "rabbit" ? 0.65 : 0.42) + recoveryBonus);
  const boneChance = Math.min(0.75, (animal === "rabbit" ? 0.24 : 0.14) + recoveryBonus);
  const hide = Math.random() < hideChance ? 1 : 0;
  const bone = Math.random() < boneChance ? 1 : 0;
  const resources: Cost = {
    [meatId]: meat,
    hide: hasKnife ? hide : 0,
    bone: hasKnife ? bone : 0
  };
  const extras = (Object.entries({ hide, bone }) as [ResourceId, number][])
    .filter(([, amount]) => hasKnife && amount > 0)
    .map(([id, amount]) => `${amount} ${getResourceLabel(id)}`);

  return {
    resources,
    message: `Cameron butchers a ${animal} for ${meat} ${getResourceLabel(meatId)}${
      extras.length ? `, plus ${extras.join(" and ")}` : ""
    }.`,
    tone: "gain"
  };
}

function plural(label: string, amount: number): string {
  return amount === 1 ? label : `${label}s`;
}

function pluralTool(label: string): string {
  if (label.endsWith("Knife")) {
    return `${label.slice(0, -"Knife".length)}Knives`;
  }

  return label.endsWith("s") ? label : `${label}s`;
}

function getToolDefinitionLabel(toolId: ToolId): string {
  return toolDefinitions.find((tool) => tool.id === toolId)?.label ?? "Tool";
}
