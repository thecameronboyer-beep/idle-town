import type { ActionId, ActionLoop, GameState, LocationId } from "../types";
import {
  clampLoopIndex,
  getLoopLocation,
  type StartActionOptions
} from "./actionRouting";
import { getCurrentAction, setRunningAction, touch } from "./actionState";

export function createActionLoop(state: GameState, now = Date.now()): ActionLoop {
  ensureActionLoops(state, now);
  const nextNumber = state.actionLoops.length + 1;
  const loop: ActionLoop = {
    id: `loop-${now.toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    name: `Loop ${nextNumber}`,
    actionIds: ["gatherSticks"],
    locationIds: ["meadow"],
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
  loop.actionIds.splice(insertIndex, 0, actionId);
  loop.locationIds.splice(insertIndex, 0, getLoopLocation(actionId, options.locationId));
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
  loop.actionIds.splice(safeIndex, 1);
  loop.locationIds.splice(safeIndex, 1);
  loop.updatedAt = now;
  refreshRunningLoopAssignments(state, loop);
  touch(state, now);
  return Math.max(0, safeIndex - 1);
}

export function normalizeActionLoopLocations(loop: ActionLoop): Array<LocationId | null> {
  return loop.actionIds.map((actionId, index) => getLoopLocation(actionId, loop.locationIds[index] ?? undefined));
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
