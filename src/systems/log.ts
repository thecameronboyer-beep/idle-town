import type { Cost, GameState, LogEntry, ResourceId } from "../types";

const MAX_LOG_ENTRIES = 48;

export function addLog(
  state: GameState,
  text: string,
  tone: LogEntry["tone"] = "muted",
  now = Date.now()
): void {
  state.log.unshift({
    id: `${now}-${Math.random().toString(36).slice(2)}`,
    time: now,
    text,
    tone
  });
  state.log = state.log.slice(0, MAX_LOG_ENTRIES);
}

export function addStackedLog(
  state: GameState,
  options: {
    aggregateKey: string;
    text: string;
    amount?: number;
    unit?: string;
    resources?: Cost;
    tone?: LogEntry["tone"];
    now?: number;
  }
): void {
  const now = options.now ?? Date.now();
  const existingIndex = state.log.findIndex((entry) => entry.aggregateKey === options.aggregateKey);
  const aggregateItems = normalizeResourceTotals(options.resources);

  if (existingIndex >= 0) {
    const [entry] = state.log.splice(existingIndex, 1);
    entry.time = now;
    entry.text = options.text;
    entry.tone = options.tone ?? entry.tone;
    if (Object.keys(aggregateItems).length > 0) {
      entry.aggregateItems = mergeAggregateItems(getExistingAggregateItems(entry), aggregateItems);
      delete entry.aggregateTotal;
      delete entry.aggregateUnit;
    } else {
      entry.aggregateTotal = (entry.aggregateTotal ?? 0) + (options.amount ?? 0);
      entry.aggregateUnit = options.unit;
    }
    state.log.unshift(entry);
    return;
  }

  state.log.unshift({
    id: `${now}-${Math.random().toString(36).slice(2)}`,
    time: now,
    text: options.text,
    tone: options.tone ?? "muted",
    aggregateKey: options.aggregateKey,
    ...(Object.keys(aggregateItems).length > 0
      ? { aggregateItems }
      : {
          aggregateTotal: options.amount ?? 0,
          aggregateUnit: options.unit
        })
  });
  state.log = state.log.slice(0, MAX_LOG_ENTRIES);
}

function normalizeResourceTotals(resources: Cost | undefined): Partial<Record<ResourceId, number>> {
  const totals: Partial<Record<ResourceId, number>> = {};
  for (const [resourceId, amount] of Object.entries(resources ?? {})) {
    const gained = Math.floor(amount ?? 0);
    if (gained > 0) {
      totals[resourceId as ResourceId] = gained;
    }
  }
  return totals;
}

function mergeAggregateItems(
  current: Partial<Record<ResourceId, number>> | undefined,
  increments: Partial<Record<ResourceId, number>>
): Partial<Record<ResourceId, number>> {
  const merged = { ...(current ?? {}) };
  for (const [resourceId, amount] of Object.entries(increments)) {
    const id = resourceId as ResourceId;
    merged[id] = (merged[id] ?? 0) + (amount ?? 0);
  }
  return merged;
}

function getExistingAggregateItems(entry: LogEntry): Partial<Record<ResourceId, number>> | undefined {
  if (entry.aggregateItems) {
    return entry.aggregateItems;
  }

  const legacyResource = getLegacyResourceId(entry.aggregateUnit);
  if (!legacyResource || !entry.aggregateTotal) {
    return undefined;
  }

  return { [legacyResource]: entry.aggregateTotal };
}

function getLegacyResourceId(unit: string | undefined): ResourceId | undefined {
  switch (unit?.toLowerCase()) {
    case "sticks":
      return "stick";
    case "stones":
      return "stone";
    default:
      return undefined;
  }
}
