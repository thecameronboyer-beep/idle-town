import {
  formatResourceAmount,
  getResourceLabel,
  isWeightedResource,
  normalizeResourceAmount,
  resourceOrder
} from "../data/resources";
import type { Cost, GameState, ResourceId } from "../types";

export const CHARACTER_MAX_WEIGHT = 10;

export function normalizeInventory(state: GameState): void {
  for (const id of resourceOrder) {
    state.inventory[id] = normalizeResourceAmount(id, state.inventory[id] ?? 0);
    state.characterInventory[id] = normalizeResourceAmount(id, state.characterInventory[id] ?? 0);
  }
}

export function hasCost(state: GameState, cost: Cost): boolean {
  return Object.entries(cost).every(([resourceId, amount]) => {
    return state.inventory[resourceId as ResourceId] >= (amount ?? 0);
  });
}

export function payCost(state: GameState, cost: Cost): void {
  for (const [resourceId, amount] of Object.entries(cost)) {
    const id = resourceId as ResourceId;
    state.inventory[id] = normalizeResourceAmount(id, state.inventory[id] - (amount ?? 0));
  }
}

export function addResources(state: GameState, resources: Cost): void {
  for (const [resourceId, amount] of Object.entries(resources)) {
    const id = resourceId as ResourceId;
    const gained = amount ?? 0;
    if (gained <= 0) {
      continue;
    }

    state.inventory[id] = normalizeResourceAmount(id, state.inventory[id] + gained);
    if (!state.seenResources.includes(id)) {
      state.seenResources.push(id);
    }
  }
}

export function getResourceWeight(resourceId: ResourceId): number {
  switch (resourceId) {
    case "wood":
      return 2;
    case "stick":
    case "stone":
    case "flaxFiber":
      return 1;
    default:
      return 1;
  }
}

export function getInventoryWeight(inventory: Partial<Record<ResourceId, number>>): number {
  const weight = resourceOrder.reduce((total, resourceId) => {
    return total + (inventory[resourceId] ?? 0) * getResourceWeight(resourceId);
  }, 0);

  return Math.round(weight * 10) / 10;
}

export function getCharacterInventoryWeight(state: GameState): number {
  return getInventoryWeight(state.characterInventory);
}

export function addCharacterResources(state: GameState, resources: Cost): Cost {
  const accepted: Cost = {};
  let carriedWeight = getCharacterInventoryWeight(state);

  for (const resourceId of resourceOrder) {
    const amount = normalizeResourceAmount(resourceId, resources[resourceId] ?? 0);
    if (amount <= 0) {
      continue;
    }

    const weight = getResourceWeight(resourceId);
    const availableWeight = CHARACTER_MAX_WEIGHT - carriedWeight;
    const acceptedAmount =
      weight > 0
        ? normalizeResourceAmount(
            resourceId,
            isWeightedResource(resourceId)
              ? amount * weight <= availableWeight
                ? amount
                : 0
              : Math.min(amount, Math.floor(availableWeight / weight))
          )
        : amount;
    if (acceptedAmount <= 0) {
      continue;
    }

    accepted[resourceId] = acceptedAmount;
    state.characterInventory[resourceId] = normalizeResourceAmount(
      resourceId,
      state.characterInventory[resourceId] + acceptedAmount
    );
    carriedWeight = Math.round((carriedWeight + acceptedAmount * weight) * 10) / 10;
    if (!state.seenResources.includes(resourceId)) {
      state.seenResources.push(resourceId);
    }
  }

  return accepted;
}

export function depositCharacterResources(state: GameState): Cost {
  const deposited: Cost = {};

  for (const resourceId of resourceOrder) {
    const amount = state.characterInventory[resourceId];
    if (amount <= 0) {
      continue;
    }

    deposited[resourceId] = amount;
    state.inventory[resourceId] = normalizeResourceAmount(resourceId, state.inventory[resourceId] + amount);
    state.characterInventory[resourceId] = 0;
    if (!state.seenResources.includes(resourceId)) {
      state.seenResources.push(resourceId);
    }
  }

  return deposited;
}

export function describeCost(cost: Cost): string {
  return Object.entries(cost)
    .map(([resourceId, amount]) => {
      const id = resourceId as ResourceId;
      const formattedAmount = formatResourceAmount(id, amount ?? 0);
      return `${formattedAmount}${isWeightedResource(id) ? " lb" : ""} ${getResourceLabel(id)}`;
    })
    .join(", ");
}
