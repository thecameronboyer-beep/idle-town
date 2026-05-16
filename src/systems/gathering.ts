import { getResourceLabel } from "../data/resources";
import {
  getGatherableCategoryLabel,
  getLocationGatheringTable,
  type GatherableIngredientCategory,
  type GatherableLootEntry
} from "../data/gatherables";
import type { Cost, LocationId } from "../types";
import { randomInt } from "./math";

export interface GatheredLoot {
  resources: Cost;
  message: string;
}

export function rollGatheringTable(locationId: LocationId, category?: GatherableIngredientCategory): GatheredLoot {
  const table = getLocationGatheringTable(locationId);
  const entries = category ? table?.entries.filter((entry) => entry.category === category) : table?.entries;
  if (!table || !entries?.length) {
    return {
      resources: {},
      message: "Cameron searches carefully, but finds nothing useful."
    };
  }

  const rollCount = Math.random() < 0.28 ? 2 : 1;
  const resources: Cost = {};
  const pickedEntries: GatherableLootEntry[] = [];

  for (let index = 0; index < rollCount; index += 1) {
    const entry = pickWeightedEntry(entries);
    if (!entry) {
      continue;
    }

    const amount = randomInt(entry.minAmount, entry.maxAmount);
    resources[entry.id] = (resources[entry.id] ?? 0) + amount;
    pickedEntries.push(entry);
  }

  const found = Object.entries(resources)
    .filter(([, amount]) => (amount ?? 0) > 0)
    .map(([resourceId, amount]) => `${amount} ${getResourceLabel(resourceId)}`);

  return {
    resources,
    message: found.length
      ? `Cameron gathers ${joinFoundItems(found)} from the ${table.locationId}${category ? ` ${getGatherableCategoryLabel(category).toLowerCase()}` : ""}.`
      : "Cameron searches carefully, but finds nothing useful."
  };
}

export function rollGatherableResource(locationId: LocationId, resourceId: string): GatheredLoot {
  const table = getLocationGatheringTable(locationId);
  const entry = table?.entries.find((candidate) => candidate.id === resourceId);
  if (!table || !entry) {
    return {
      resources: {},
      message: "Cameron searches carefully, but finds nothing useful."
    };
  }

  const amount = randomInt(entry.minAmount, entry.maxAmount);
  return {
    resources: { [entry.id]: amount },
    message: `Cameron gathers ${amount} ${getResourceLabel(entry.id)} from the ${table.locationId}.`
  };
}

export function getGatheringTableSummary(locationId: LocationId, category?: GatherableIngredientCategory): string {
  const table = getLocationGatheringTable(locationId);
  const entries = category ? table?.entries.filter((entry) => entry.category === category) : table?.entries;
  if (!table || !entries?.length) {
    return "No known gatherables.";
  }

  if (category) {
    return `${getGatherableCategoryLabel(category)} from weighted ${table.label.toLowerCase()} table`;
  }

  const categories = table.categories.map((entryCategory) => getGatherableCategoryLabel(entryCategory));
  return `${categories.join(", ")} from weighted ${table.label.toLowerCase()} table`;
}

function pickWeightedEntry(entries: GatherableLootEntry[]): GatherableLootEntry | null {
  const totalWeight = entries.reduce((total, entry) => total + Math.max(0, entry.weight), 0);
  if (totalWeight <= 0) {
    return null;
  }

  let roll = Math.random() * totalWeight;
  for (const entry of entries) {
    roll -= Math.max(0, entry.weight);
    if (roll <= 0) {
      return entry;
    }
  }

  return entries[entries.length - 1] ?? null;
}

function joinFoundItems(items: string[]): string {
  if (items.length <= 1) {
    return items[0] ?? "nothing";
  }

  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}
