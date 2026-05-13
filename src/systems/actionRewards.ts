import { toolDefinitions } from "../data/craftables";
import {
  fishFiletByFishId,
  fishResourceIds,
  formatResourceAmount,
  getResourceLabel,
  normalizeResourceAmount
} from "../data/resources";
import type { ActionId, Cost, GameState, ResourceCountDelta, ResourceId, ToolId } from "../types";
import {
  consumeOneWholeResource,
  getCharacterInventory,
  hasResourceQuantity
} from "./inventory";
import { addStackedLog } from "./log";
import { randomFloat, randomInt } from "./math";
import { damageTool, equipFreshTool, hasUsableTool } from "./tools";

export type ActionRewards = {
  resources: Cost;
  resourceCounts?: ResourceCountDelta;
  message: string;
  tone: "gain" | "craft";
};

export type ToolCraftActionId =
  | "craftBasket"
  | "craftFishingPole"
  | "craftStoneKnife"
  | "craftStoneAxe"
  | "craftStonePickAxe"
  | "craftStoneSpear";

export const TOOL_CRAFT_ACTIONS: Array<{ actionId: ToolCraftActionId; toolId: ToolId }> = [
  { actionId: "craftBasket", toolId: "basket" },
  { actionId: "craftFishingPole", toolId: "fishingPole" },
  { actionId: "craftStoneKnife", toolId: "stoneKnife" },
  { actionId: "craftStoneAxe", toolId: "stoneAxe" },
  { actionId: "craftStonePickAxe", toolId: "stonePickAxe" },
  { actionId: "craftStoneSpear", toolId: "stoneSpear" }
];

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
    case "gatherFlaxFibers": {
      const amount = randomInt(1, 3);
      return {
        resources: { flaxFiber: amount },
        message: `Cameron pulls ${amount} ${plural("Flax Fiber", amount)} from the brush.`,
        tone: "gain"
      };
    }
    case "gatherMushrooms": {
      const amount = randomInt(1, 3);
      return {
        resources: { mushroom: amount },
        message: `Cameron gathers ${amount} ${plural("Mushroom", amount)} from the meadow shade.`,
        tone: "gain"
      };
    }
    case "gatherBerries": {
      const amount = randomInt(2, 5);
      return {
        resources: { berry: amount },
        message: `Cameron picks ${amount} ${amount === 1 ? "Berry" : "Berries"} from the brambles.`,
        tone: "gain"
      };
    }
    case "mineCoal":
      return mineResource("coal");
    case "mineCopper":
      return mineResource("copper");
    case "mineTin":
      return mineResource("tin");
    case "fishRiver":
      return fishRiver();
    case "craftLowestTool":
    case "craftBasket":
    case "craftFishingPole":
    case "craftStoneKnife":
    case "craftStoneAxe":
    case "craftStonePickAxe":
    case "craftStoneSpear":
    case "craftLeatherBackpack":
      return {
        resources: {},
        message: "Cameron finishes a tool.",
        tone: "craft"
      };
    case "chopTrees": {
      const wood = randomInt(2, 4);
      const sticks = Math.random() < 0.35 ? 1 : 0;
      return {
        resources: { wood, stick: sticks },
        message: `Cameron chops ${wood} ${plural("Wood", wood)}${sticks ? " and saves a usable stick" : ""}.`,
        tone: "gain"
      };
    }
    case "huntSmallAnimals":
      return huntSmallAnimal();
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
    case "tanHide":
      return {
        resources: { leather: 1 },
        message: "Cameron works a hide into rough leather.",
        tone: "craft"
      };
  }
}

export function getCraftedToolId(actionId: ActionId): ToolId | null {
  switch (actionId) {
    case "craftBasket":
      return "basket";
    case "craftFishingPole":
      return "fishingPole";
    case "craftStoneKnife":
      return "stoneKnife";
    case "craftStoneAxe":
      return "stoneAxe";
    case "craftStonePickAxe":
      return "stonePickAxe";
    case "craftStoneSpear":
      return "stoneSpear";
    case "craftLeatherBackpack":
      return "leatherBackpack";
    default:
      return null;
  }
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
      damageTool(state, "fishingPole", 1, now, characterName);
      break;
    case "mineCoal":
    case "mineCopper":
    case "mineTin":
      damageTool(state, "stonePickAxe", 1, now, characterName);
      break;
    case "chopTrees":
      damageTool(state, "stoneAxe", 1, now, characterName);
      break;
    case "huntSmallAnimals":
      damageTool(state, "stoneSpear", 1, now, characterName);
      break;
    case "butcherRabbit":
    case "butcherSquirrel":
      damageTool(state, "stoneKnife", 1, now, characterName);
      break;
    default:
      break;
  }
}

export function getStackedActionText(actionId: ActionId, characterName = "Cameron"): string {
  switch (actionId) {
    case "gatherSticks":
      return `${characterName} gathered sticks`;
    case "gatherStones":
      return `${characterName} gathered stones`;
    case "gatherFlaxFibers":
      return `${characterName} gathered flax fibers`;
    case "gatherMushrooms":
      return `${characterName} gathered mushrooms`;
    case "gatherBerries":
      return `${characterName} gathered berries`;
    case "mineCoal":
      return `${characterName} mined coal`;
    case "mineCopper":
      return `${characterName} mined copper`;
    case "mineTin":
      return `${characterName} mined tin`;
    case "fishRiver":
      return `${characterName} caught river fish`;
    case "craftBasket":
      return `${characterName} crafted baskets`;
    case "craftLowestTool":
      return `${characterName} balanced tool stock`;
    case "craftFishingPole":
      return `${characterName} crafted fishing poles`;
    case "craftStoneKnife":
      return `${characterName} crafted stone knives`;
    case "craftStoneAxe":
      return `${characterName} crafted stone axes`;
    case "craftStonePickAxe":
      return `${characterName} crafted stone pick axes`;
    case "craftStoneSpear":
      return `${characterName} crafted stone spears`;
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
    const filetAmount = normalizeResourceAmount(filetId, consumedWeight * 0.5);
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

function mineResource(resourceId: "coal" | "copper" | "tin"): ActionRewards {
  const label = getResourceLabel(resourceId);

  return {
    resources: { [resourceId]: 1 },
    message: `Cameron mines 1 ${label}.`,
    tone: "gain"
  };
}

function huntSmallAnimal(): ActionRewards {
  const animal = SMALL_GAME[Math.random() < 0.58 ? 0 : 1];
  const weight = randomFloat(animal.minWeight, animal.maxWeight, 1);
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
  const hasKnife = hasUsableTool(state, "stoneKnife");
  const hideChance = animal === "rabbit" ? 0.65 : 0.42;
  const boneChance = animal === "rabbit" ? 0.24 : 0.14;
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
  return label.endsWith("s") ? label : `${label}s`;
}
