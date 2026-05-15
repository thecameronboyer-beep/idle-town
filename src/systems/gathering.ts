import { getResourceLabel } from "../data/resources";
import { getLocationGatheringTable, type GatherableLootEntry } from "../data/gatherables";
import type { Cost, LocationId } from "../types";
import { randomInt } from "./math";

export interface GatheredLoot {
  resources: Cost;
  message: string;
}

export function rollGatheringTable(locationId: LocationId): GatheredLoot {
  const table = getLocationGatheringTable(locationId);
  if (!table?.entries.length) {
    return {
      resources: {},
      message: "Cameron searches carefully, but finds nothing useful."
    };
  }

  const rollCount = Math.random() < 0.28 ? 2 : 1;
  const resources: Cost = {};
  const pickedEntries: GatherableLootEntry[] = [];

  for (let index = 0; index < rollCount; index += 1) {
    const entry = pickWeightedEntry(table.entries);
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
      ? `Cameron gathers ${joinFoundItems(found)} from the ${table.locationId}.`
      : "Cameron searches carefully, but finds nothing useful."
  };
}

export function getGatheringTableSummary(locationId: LocationId): string {
  const table = getLocationGatheringTable(locationId);
  if (!table?.entries.length) {
    return "No known gatherables.";
  }

  const categories = table.categories.map((category) => category[0].toUpperCase() + category.slice(1));
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
