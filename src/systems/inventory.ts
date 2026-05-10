import { getResourceLabel, resourceOrder } from "../data/resources";
import type { Cost, GameState, ResourceId } from "../types";

export const CHARACTER_MAX_WEIGHT = 10;

export function normalizeInventory(state: GameState): void {
  for (const id of resourceOrder) {
    state.inventory[id] = Math.max(0, Math.floor(state.inventory[id] ?? 0));
    state.characterInventory[id] = Math.max(0, Math.floor(state.characterInventory[id] ?? 0));
  }
}

export function hasCost(state: GameState, cost: Cost): boolean {
  return Object.entries(cost).every(([resourceId, amount]) => {
    return state.inventory[resourceId as ResourceId] >= (amount ?? 0);
  });
}

export function payCost(state: GameState, cost: Cost): void {
  for (const [resourceId, amount] of Object.entries(cost)) {
    state.inventory[resourceId as ResourceId] -= amount ?? 0;
  }
}

export function addResources(state: GameState, resources: Cost): void {
  for (const [resourceId, amount] of Object.entries(resources)) {
    const id = resourceId as ResourceId;
    const gained = amount ?? 0;
    if (gained <= 0) {
      continue;
    }

    state.inventory[id] += gained;
    if (!state.seenResources.includes(id)) {
      state.seenResources.push(id);
    }
  }
}

export function getResourceWeight(resourceId: ResourceId): number {
  switch (resourceId) {
    case "rabbit":
    case "squirrel":
      return 1.5;
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
  return resourceOrder.reduce((total, resourceId) => {
    return total + (inventory[resourceId] ?? 0) * getResourceWeight(resourceId);
  }, 0);
}

export function getCharacterInventoryWeight(state: GameState): number {
  return getInventoryWeight(state.characterInventory);
}

export function addCharacterResources(state: GameState, resources: Cost): Cost {
  const accepted: Cost = {};
  let carriedWeight = getCharacterInventoryWeight(state);

  for (const resourceId of resourceOrder) {
    const amount = Math.max(0, Math.floor(resources[resourceId] ?? 0));
    if (amount <= 0) {
      continue;
    }

    const weight = getResourceWeight(resourceId);
    const availableWeight = CHARACTER_MAX_WEIGHT - carriedWeight;
    const acceptedAmount = weight > 0 ? Math.min(amount, Math.floor(availableWeight / weight)) : amount;
    if (acceptedAmount <= 0) {
      continue;
    }

    accepted[resourceId] = acceptedAmount;
    state.characterInventory[resourceId] += acceptedAmount;
    carriedWeight += acceptedAmount * weight;
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
    state.inventory[resourceId] += amount;
    state.characterInventory[resourceId] = 0;
    if (!state.seenResources.includes(resourceId)) {
      state.seenResources.push(resourceId);
    }
  }

  return deposited;
}

export function describeCost(cost: Cost): string {
  return Object.entries(cost)
    .map(([resourceId, amount]) => `${amount} ${getResourceLabel(resourceId as ResourceId)}`)
    .join(", ");
}
