import type {
  ActionId,
  ActionLoop,
  ActionLoopAdvanceMode,
  ActionLoopAdvanceRule,
  ActionLoopResourceScope,
  GameState,
  LocationId,
  ResourceId
} from "../types";
import {
  clampLoopIndex,
  getLoopLocation,
  type StartActionOptions
} from "./actionRouting";
import { getCurrentAction, setRunningAction, touch } from "./actionState";

const MAX_LOOP_NAME_LENGTH = 42;

export function createActionLoop(state: GameState, now = Date.now()): ActionLoop {
  ensureActionLoops(state, now);
  const nextNumber = state.actionLoops.length + 1;
  const loop: ActionLoop = {
    id: `loop-${now.toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    name: `Loop ${nextNumber}`,
    actionIds: ["gatherSticks"],
    locationIds: ["meadow"],
    advanceRules: [getDefaultActionLoopAdvanceRule("gatherSticks")],
    createdAt: now,
    updatedAt: now
  };
  state.actionLoops.push(loop);
  touch(state, now);
  return loop;
}

export function deleteActionLoop(state: GameState, loopId: string, now = Date.now()): string | null {
  ensureActionLoops(state, now);
  if (state.actionLoops.length <= 1) {
    return state.actionLoops[0]?.id ?? null;
  }

  const index = state.actionLoops.findIndex((loop) => loop.id === loopId);
  if (index < 0) {
    return state.actionLoops[0]?.id ?? null;
  }

  state.actionLoops.splice(index, 1);
  for (const character of state.characters) {
    if (character.actionLoopId === loopId) {
      character.actionLoopId = undefined;
    }
  }
  touch(state, now);
  return state.actionLoops[Math.max(0, index - 1)]?.id ?? state.actionLoops[0]?.id ?? null;
}

export function getActionLoop(state: GameState, loopId: string | null | undefined): ActionLoop | null {
  ensureActionLoops(state);
  return state.actionLoops.find((loop) => loop.id === loopId) ?? state.actionLoops[0] ?? null;
}

export function getAssignedActionLoop(state: GameState, characterId = state.selectedCharacterId): ActionLoop | null {
  const character = state.characters.find((entry) => entry.id === characterId);
  return getActionLoop(state, character?.actionLoopId);
}

export function canInsertActionInSavedLoop(loop: ActionLoop, afterIndex: number, actionId: ActionId): boolean {
  normalizeActionLoopAdvanceRules(loop);
  const safeAfterIndex = clampActionLoopIndex(afterIndex, loop);
  if (actionId === "butcherFish") {
    return loop.actionIds[safeAfterIndex] === "fishRiver";
  }

  return true;
}

export function insertActionInSavedLoop(
  state: GameState,
  loopId: string,
  afterIndex: number,
  actionId: ActionId,
  options: StartActionOptions = {},
  now = Date.now()
): boolean {
  const loop = getActionLoop(state, loopId);
  if (!loop || !canInsertActionInSavedLoop(loop, afterIndex, actionId)) {
    return false;
  }

  const safeAfterIndex = clampActionLoopIndex(afterIndex, loop);
  const insertIndex = safeAfterIndex + 1;
  normalizeActionLoopAdvanceRules(loop);
  loop.actionIds.splice(insertIndex, 0, actionId);
  loop.locationIds.splice(insertIndex, 0, getLoopLocation(actionId, options.locationId));
  loop.advanceRules.splice(insertIndex, 0, getDefaultActionLoopAdvanceRule(actionId));
  loop.updatedAt = now;
  refreshRunningLoopAssignments(state, loop);
  touch(state, now);
  return true;
}

export function removeActionFromSavedLoop(state: GameState, loopId: string, index: number, now = Date.now()): number {
  const loop = getActionLoop(state, loopId);
  if (!loop || loop.actionIds.length <= 1) {
    return 0;
  }

  const safeIndex = clampActionLoopIndex(index, loop);
  normalizeActionLoopAdvanceRules(loop);
  loop.actionIds.splice(safeIndex, 1);
  loop.locationIds.splice(safeIndex, 1);
  loop.advanceRules.splice(safeIndex, 1);
  loop.updatedAt = now;
  refreshRunningLoopAssignments(state, loop);
  touch(state, now);
  return Math.max(0, safeIndex - 1);
}

export function normalizeActionLoopLocations(loop: ActionLoop): Array<LocationId | null> {
  return loop.actionIds.map((actionId, index) => getLoopLocation(actionId, loop.locationIds[index] ?? undefined));
}

export function normalizeActionLoopAdvanceRules(loop: ActionLoop): ActionLoopAdvanceRule[] {
  const savedRules = Array.isArray(loop.advanceRules) ? loop.advanceRules : [];
  loop.advanceRules = loop.actionIds.map((actionId, index) =>
    normalizeActionLoopAdvanceRule(savedRules[index], actionId)
  );
  return loop.advanceRules;
}

export function getActionLoopAdvanceRule(loop: ActionLoop, index: number): ActionLoopAdvanceRule {
  const rules = normalizeActionLoopAdvanceRules(loop);
  return rules[clampActionLoopIndex(index, loop)] ?? getDefaultActionLoopAdvanceRule(loop.actionIds[0] ?? "gatherSticks");
}

export function updateActionLoopName(
  state: GameState,
  loopId: string,
  name: string,
  now = Date.now()
): boolean {
  const loop = getActionLoop(state, loopId);
  if (!loop) {
    return false;
  }

  const normalizedName = normalizeActionLoopName(name);
  if (loop.name === normalizedName) {
    return false;
  }

  loop.name = normalizedName;
  loop.updatedAt = now;
  touch(state, now);
  return true;
}

export function updateActionLoopStepAdvanceRule(
  state: GameState,
  loopId: string,
  index: number,
  patch: Partial<ActionLoopAdvanceRule>,
  now = Date.now()
): boolean {
  const loop = getActionLoop(state, loopId);
  if (!loop) {
    return false;
  }

  const safeIndex = clampActionLoopIndex(index, loop);
  const rules = normalizeActionLoopAdvanceRules(loop);
  const current = rules[safeIndex] ?? getDefaultActionLoopAdvanceRule(loop.actionIds[safeIndex]);
  const next = normalizeActionLoopAdvanceRule({ ...current, ...patch }, loop.actionIds[safeIndex]);
  loop.advanceRules[safeIndex] = next;
  loop.updatedAt = now;
  touch(state, now);
  return true;
}

export function updateActionLoopStepAction(
  state: GameState,
  loopId: string,
  index: number,
  actionId: ActionId,
  options: StartActionOptions = {},
  now = Date.now()
): boolean {
  const loop = getActionLoop(state, loopId);
  if (!loop) {
    return false;
  }

  const safeIndex = clampActionLoopIndex(index, loop);
  normalizeActionLoopAdvanceRules(loop);
  const nextLocation = getLoopLocation(actionId, options.locationId ?? loop.locationIds[safeIndex] ?? undefined);
  if (loop.actionIds[safeIndex] === actionId && loop.locationIds[safeIndex] === nextLocation) {
    return false;
  }

  loop.actionIds[safeIndex] = actionId;
  loop.locationIds[safeIndex] = nextLocation;
  loop.advanceRules[safeIndex] = getDefaultActionLoopAdvanceRule(actionId);
  loop.updatedAt = now;
  refreshRunningLoopAssignments(state, loop);
  touch(state, now);
  return true;
}

export function updateActionLoopStepLocation(
  state: GameState,
  loopId: string,
  index: number,
  locationId: LocationId,
  now = Date.now()
): boolean {
  const loop = getActionLoop(state, loopId);
  if (!loop) {
    return false;
  }

  const safeIndex = clampActionLoopIndex(index, loop);
  const normalizedLocation = getLoopLocation(loop.actionIds[safeIndex], locationId);
  if (loop.locationIds[safeIndex] === normalizedLocation) {
    return false;
  }

  loop.locationIds[safeIndex] = normalizedLocation;
  loop.updatedAt = now;
  refreshRunningLoopAssignments(state, loop);
  touch(state, now);
  return true;
}

export function getDefaultActionLoopAdvanceRule(_actionId: ActionId): ActionLoopAdvanceRule {
  return { mode: "smart" };
}

function ensureActionLoops(state: GameState, now = Date.now()): void {
  if (Array.isArray(state.actionLoops) && state.actionLoops.length) {
    return;
  }

  const fallback = state.currentAction?.loopActionIds?.length
    ? {
        actionIds: [...state.currentAction.loopActionIds],
        locationIds: [...(state.currentAction.loopLocationIds ?? [])]
      }
    : {
        actionIds: ["gatherSticks" as ActionId],
        locationIds: ["meadow" as LocationId]
      };
  state.actionLoops = [
    {
      id: "loop-forage-sticks",
      name: "Forage Sticks",
      actionIds: fallback.actionIds,
      locationIds: fallback.actionIds.map((actionId, index) =>
        getLoopLocation(actionId, fallback.locationIds[index] ?? undefined)
      ),
      advanceRules: fallback.actionIds.map((actionId) => getDefaultActionLoopAdvanceRule(actionId)),
      createdAt: now,
      updatedAt: now
    }
  ];
}

function refreshRunningLoopAssignments(state: GameState, loop: ActionLoop): void {
  for (const character of state.characters) {
    if (character.actionLoopId !== loop.id) {
      continue;
    }

    const running = getCurrentAction(state, character.id);
    if (!running) {
      continue;
    }

    const safeIndex = clampLoopIndex(running.loopIndex ?? 0, loop.actionIds);
    setRunningAction(state, {
      ...running,
      loopActionIds: [...loop.actionIds],
      loopLocationIds: normalizeActionLoopLocations(loop),
      loopIndex: safeIndex
    });
  }
}

function clampActionLoopIndex(index: number, loop: ActionLoop): number {
  if (!loop.actionIds.length) {
    return 0;
  }

  return Math.min(loop.actionIds.length - 1, Math.max(0, Math.floor(index)));
}

function normalizeActionLoopAdvanceRule(
  rule: Partial<ActionLoopAdvanceRule> | undefined,
  actionId: ActionId
): ActionLoopAdvanceRule {
  const mode = isActionLoopAdvanceMode(rule?.mode) ? rule.mode : getDefaultActionLoopAdvanceRule(actionId).mode;
  if (mode !== "whenResourceAtLeast") {
    return { mode };
  }

  return {
    mode,
    resourceId: typeof rule?.resourceId === "string" ? (rule.resourceId as ResourceId) : undefined,
    amount: normalizeTargetAmount(rule?.amount),
    scope: isActionLoopResourceScope(rule?.scope) ? rule.scope : "camp"
  };
}

function normalizeActionLoopName(name: string): string {
  const trimmed = name.trim().replace(/\s+/g, " ");
  return (trimmed || "Action Loop").slice(0, MAX_LOOP_NAME_LENGTH);
}

function normalizeTargetAmount(amount: unknown): number {
  const parsed = Number(amount ?? 1);
  if (!Number.isFinite(parsed)) {
    return 1;
  }

  return Math.max(1, Math.floor(parsed));
}

function isActionLoopAdvanceMode(mode: unknown): mode is ActionLoopAdvanceMode {
  return (
    mode === "smart" ||
    mode === "afterCompletion" ||
    mode === "whenInventoryFull" ||
    mode === "whenResourceAtLeast" ||
    mode === "whenCannotStart" ||
    mode === "manual"
  );
}

function isActionLoopResourceScope(scope: unknown): scope is ActionLoopResourceScope {
  return scope === "camp" || scope === "character";
}
