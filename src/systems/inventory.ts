import {
  formatResourceAmount,
  getResourceLabel,
  isWholeCountResource,
  isWeightedResource,
  normalizeResourceAmount,
  resourceOrder
} from "../data/resources";
import type { Cost, GameState, ResourceCountDelta, ResourceCounts, ResourceId } from "../types";

export const BASE_CHARACTER_MAX_WEIGHT = 10;
export const BASKET_CARRY_WEIGHT_BONUS = 5;
export const CHARACTER_MAX_WEIGHT = BASE_CHARACTER_MAX_WEIGHT;
type InventorySource = "camp" | "character";

export function normalizeInventory(state: GameState): void {
  for (const id of resourceOrder) {
    state.inventory[id] = normalizeResourceAmount(id, state.inventory[id] ?? 0);
    state.characterInventory[id] = normalizeResourceAmount(id, state.characterInventory[id] ?? 0);
    state.resourceCounts[id] = normalizeStoredCount(id, state.inventory[id], state.resourceCounts[id] ?? 0);
    state.characterResourceCounts[id] = normalizeStoredCount(
      id,
      state.characterInventory[id],
      state.characterResourceCounts[id] ?? 0
    );
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

export function addResources(state: GameState, resources: Cost, resourceCounts: ResourceCountDelta = {}): void {
  for (const [resourceId, amount] of Object.entries(resources)) {
    const id = resourceId as ResourceId;
    const gained = amount ?? 0;
    if (gained <= 0) {
      continue;
    }

    state.inventory[id] = normalizeResourceAmount(id, state.inventory[id] + gained);
    addResourceCount(state.resourceCounts, id, resourceCounts[id] ?? 0);
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
    case "mushroom":
    case "berry":
      return 0.1;
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

export function getCharacterMaxWeight(state: GameState): number {
  const basket = state.tools.basket;
  return BASE_CHARACTER_MAX_WEIGHT + (basket?.owned && basket.durability > 0 ? BASKET_CARRY_WEIGHT_BONUS : 0);
}

export function addCharacterResources(
  state: GameState,
  resources: Cost,
  resourceCounts: ResourceCountDelta = {}
): Cost {
  const accepted: Cost = {};
  let carriedWeight = getCharacterInventoryWeight(state);
  const maxWeight = getCharacterMaxWeight(state);

  for (const resourceId of resourceOrder) {
    const amount = normalizeResourceAmount(resourceId, resources[resourceId] ?? 0);
    if (amount <= 0) {
      continue;
    }

    const weight = getResourceWeight(resourceId);
    const availableWeight = maxWeight - carriedWeight;
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
    addResourceCount(
      state.characterResourceCounts,
      resourceId,
      getAcceptedResourceCount(resourceId, amount, acceptedAmount, resourceCounts[resourceId])
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
    transferResourceCount(state.characterResourceCounts, state.resourceCounts, resourceId);
    state.characterInventory[resourceId] = 0;
    if (!state.seenResources.includes(resourceId)) {
      state.seenResources.push(resourceId);
    }
  }

  return deposited;
}

export function getResourceQuantity(
  state: GameState,
  resourceId: ResourceId,
  source: InventorySource = "camp"
): number {
  const counts = getCountInventory(state, source);
  if (!isWholeCountResource(resourceId)) {
    return Math.floor(getAmountInventory(state, source)[resourceId] ?? 0);
  }

  return Math.max(0, Math.floor(counts[resourceId] ?? 0));
}

export function hasResourceQuantity(
  state: GameState,
  resourceId: ResourceId,
  source: InventorySource = "camp"
): boolean {
  return getResourceQuantity(state, resourceId, source) > 0;
}

export function consumeOneWholeResource(
  state: GameState,
  resourceId: ResourceId,
  source: InventorySource = "camp"
): number {
  if (!isWholeCountResource(resourceId)) {
    return 0;
  }

  const inventory = getAmountInventory(state, source);
  const counts = getCountInventory(state, source);
  const quantity = getResourceQuantity(state, resourceId, source);
  const totalAmount = normalizeResourceAmount(resourceId, inventory[resourceId] ?? 0);
  if (quantity <= 0 || totalAmount <= 0) {
    inventory[resourceId] = 0;
    counts[resourceId] = 0;
    return 0;
  }

  const consumedAmount = normalizeResourceAmount(resourceId, quantity <= 1 ? totalAmount : totalAmount / quantity);
  counts[resourceId] = Math.max(0, quantity - 1);
  inventory[resourceId] =
    counts[resourceId] <= 0 ? 0 : normalizeResourceAmount(resourceId, totalAmount - consumedAmount);
  return consumedAmount;
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

function getAmountInventory(state: GameState, source: InventorySource) {
  return source === "character" ? state.characterInventory : state.inventory;
}

function getCountInventory(state: GameState, source: InventorySource): ResourceCounts {
  return source === "character" ? state.characterResourceCounts : state.resourceCounts;
}

function normalizeStoredCount(resourceId: ResourceId, amount: number, count: number): number {
  if (!isWholeCountResource(resourceId) || amount <= 0) {
    return 0;
  }

  return Math.max(1, Math.floor(Math.max(0, Number.isFinite(count) ? count : 0)));
}

function addResourceCount(counts: ResourceCounts, resourceId: ResourceId, amount: number): void {
  if (!isWholeCountResource(resourceId) || amount <= 0) {
    return;
  }

  counts[resourceId] = Math.floor((counts[resourceId] ?? 0) + amount);
}

function transferResourceCount(from: ResourceCounts, to: ResourceCounts, resourceId: ResourceId): void {
  if (!isWholeCountResource(resourceId)) {
    return;
  }

  const quantity = Math.max(0, Math.floor(from[resourceId] ?? 0));
  if (quantity <= 0) {
    return;
  }

  to[resourceId] = Math.floor((to[resourceId] ?? 0) + quantity);
  from[resourceId] = 0;
}

function getAcceptedResourceCount(
  resourceId: ResourceId,
  requestedAmount: number,
  acceptedAmount: number,
  requestedCount = 0
): number {
  if (!isWholeCountResource(resourceId) || acceptedAmount <= 0 || acceptedAmount < requestedAmount) {
    return 0;
  }

  return Math.max(0, Math.floor(requestedCount));
}
