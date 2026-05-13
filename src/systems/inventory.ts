import {
  formatResourceAmount,
  getResourceLabel,
  isWholeCountResource,
  isWeightedResource,
  normalizeResourceAmount,
  resourceOrder
} from "../data/resources";
import type { Cost, GameState, Inventory, ResourceCountDelta, ResourceCounts, ResourceId } from "../types";

export const BASE_CHARACTER_MAX_WEIGHT = 10;
export const BASKET_CARRY_WEIGHT_BONUS = 5;
export const LEATHER_BACKPACK_CARRY_WEIGHT_BONUS = 15;
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

  for (const character of state.characters) {
    character.inventory = normalizeInventoryRecord(character.inventory);
    character.resourceCounts = normalizeResourceCountsRecord(character.inventory, character.resourceCounts);
  }

  syncSelectedCharacterInventory(state);
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
    case "flaxPlant":
    case "rettedFlax":
    case "flaxFiber":
      return 1;
    case "linenThread":
    case "linenCloth":
    case "copperNeedle":
    case "bronzeNeedle":
      return 0.1;
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

export function getCharacterInventory(state: GameState, characterId = state.selectedCharacterId): Inventory {
  const character = getCharacter(state, characterId);
  if (!character.inventory) {
    character.inventory = createEmptyCharacterInventory();
  }

  return character.inventory;
}

export function getCharacterResourceCounts(state: GameState, characterId = state.selectedCharacterId): ResourceCounts {
  const character = getCharacter(state, characterId);
  if (!character.resourceCounts) {
    character.resourceCounts = createEmptyCharacterResourceCounts();
  }

  return character.resourceCounts;
}

export function syncSelectedCharacterInventory(state: GameState): void {
  const inventory = getCharacterInventory(state);
  const counts = getCharacterResourceCounts(state);
  for (const id of resourceOrder) {
    state.characterInventory[id] = inventory[id] ?? 0;
    state.characterResourceCounts[id] = counts[id] ?? 0;
  }
}

export function getCharacterInventoryWeight(state: GameState, characterId = state.selectedCharacterId): number {
  return getInventoryWeight(getCharacterInventory(state, characterId));
}

export function getCharacterMaxWeight(state: GameState, _characterId = state.selectedCharacterId): number {
  const basket = state.tools.basket;
  const backpack = state.tools.leatherBackpack;
  return (
    BASE_CHARACTER_MAX_WEIGHT +
    (basket?.owned && basket.durability > 0 ? BASKET_CARRY_WEIGHT_BONUS : 0) +
    (backpack?.owned && backpack.durability > 0 ? LEATHER_BACKPACK_CARRY_WEIGHT_BONUS : 0)
  );
}

export function addCharacterResources(
  state: GameState,
  resources: Cost,
  resourceCounts: ResourceCountDelta = {},
  characterId = state.selectedCharacterId
): Cost {
  const accepted: Cost = {};
  const inventory = getCharacterInventory(state, characterId);
  const counts = getCharacterResourceCounts(state, characterId);
  let carriedWeight = getCharacterInventoryWeight(state, characterId);
  const maxWeight = getCharacterMaxWeight(state, characterId);

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
    inventory[resourceId] = normalizeResourceAmount(
      resourceId,
      inventory[resourceId] + acceptedAmount
    );
    addResourceCount(
      counts,
      resourceId,
      getAcceptedResourceCount(resourceId, amount, acceptedAmount, resourceCounts[resourceId])
    );
    carriedWeight = Math.round((carriedWeight + acceptedAmount * weight) * 10) / 10;
    if (!state.seenResources.includes(resourceId)) {
      state.seenResources.push(resourceId);
    }
  }

  syncSelectedCharacterInventory(state);
  return accepted;
}

export function depositCharacterResources(state: GameState, characterId = state.selectedCharacterId): Cost {
  const deposited: Cost = {};
  const inventory = getCharacterInventory(state, characterId);
  const counts = getCharacterResourceCounts(state, characterId);

  for (const resourceId of resourceOrder) {
    const amount = inventory[resourceId];
    if (amount <= 0) {
      continue;
    }

    deposited[resourceId] = amount;
    state.inventory[resourceId] = normalizeResourceAmount(resourceId, state.inventory[resourceId] + amount);
    transferResourceCount(counts, state.resourceCounts, resourceId);
    inventory[resourceId] = 0;
    if (!state.seenResources.includes(resourceId)) {
      state.seenResources.push(resourceId);
    }
  }

  syncSelectedCharacterInventory(state);
  return deposited;
}

export function getResourceQuantity(
  state: GameState,
  resourceId: ResourceId,
  source: InventorySource = "camp",
  characterId = state.selectedCharacterId
): number {
  const counts = getCountInventory(state, source, characterId);
  if (!isWholeCountResource(resourceId)) {
    return Math.floor(getAmountInventory(state, source, characterId)[resourceId] ?? 0);
  }

  return Math.max(0, Math.floor(counts[resourceId] ?? 0));
}

export function hasResourceQuantity(
  state: GameState,
  resourceId: ResourceId,
  source: InventorySource = "camp",
  characterId = state.selectedCharacterId
): boolean {
  return getResourceQuantity(state, resourceId, source, characterId) > 0;
}

export function consumeOneWholeResource(
  state: GameState,
  resourceId: ResourceId,
  source: InventorySource = "camp",
  characterId = state.selectedCharacterId
): number {
  if (!isWholeCountResource(resourceId)) {
    return 0;
  }

  const inventory = getAmountInventory(state, source, characterId);
  const counts = getCountInventory(state, source, characterId);
  const quantity = getResourceQuantity(state, resourceId, source, characterId);
  const totalAmount = normalizeResourceAmount(resourceId, inventory[resourceId] ?? 0);
  if (quantity <= 0 || totalAmount <= 0) {
    inventory[resourceId] = 0;
    counts[resourceId] = 0;
    syncSelectedCharacterInventory(state);
    return 0;
  }

  const consumedAmount = normalizeResourceAmount(resourceId, quantity <= 1 ? totalAmount : totalAmount / quantity);
  counts[resourceId] = Math.max(0, quantity - 1);
  inventory[resourceId] =
    counts[resourceId] <= 0 ? 0 : normalizeResourceAmount(resourceId, totalAmount - consumedAmount);
  syncSelectedCharacterInventory(state);
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

function getAmountInventory(state: GameState, source: InventorySource, characterId: string) {
  return source === "character" ? getCharacterInventory(state, characterId) : state.inventory;
}

function getCountInventory(state: GameState, source: InventorySource, characterId: string): ResourceCounts {
  return source === "character" ? getCharacterResourceCounts(state, characterId) : state.resourceCounts;
}

function getCharacter(state: GameState, characterId: string): GameState["characters"][number] {
  return state.characters.find((character) => character.id === characterId) ?? state.characters[0];
}

function createEmptyCharacterInventory(): Inventory {
  return Object.fromEntries(resourceOrder.map((id) => [id, 0])) as Inventory;
}

function createEmptyCharacterResourceCounts(): ResourceCounts {
  return Object.fromEntries(resourceOrder.map((id) => [id, 0])) as ResourceCounts;
}

function normalizeInventoryRecord(inventory: Partial<Record<ResourceId, number>> | undefined): Inventory {
  const normalized = createEmptyCharacterInventory();
  for (const id of resourceOrder) {
    normalized[id] = normalizeResourceAmount(id, inventory?.[id] ?? 0);
  }
  return normalized;
}

function normalizeResourceCountsRecord(
  inventory: Inventory,
  counts: Partial<Record<ResourceId, number>> | undefined
): ResourceCounts {
  const normalized = createEmptyCharacterResourceCounts();
  for (const id of resourceOrder) {
    normalized[id] = normalizeStoredCount(id, inventory[id], counts?.[id] ?? 0);
  }
  return normalized;
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
