import type { ActionId, CharacterLocationId, GameState, LocationId, RunningAction } from "../types";

export type StartActionOptions = {
  locationId?: LocationId;
};

const LOCATION_TRAVEL_MS: Record<LocationId, number> = {
  meadow: 10000,
  river: 15000,
  forest: 30000,
  mine: 60000,
  desert: 75000
};

export function getRunningActionLoop(running: RunningAction): ActionId[] {
  if (running.loopActionIds?.length) {
    return [...running.loopActionIds];
  }

  return running.followUpActionId ? [running.actionId, running.followUpActionId] : [running.actionId];
}

export function canInsertActionInLoop(running: RunningAction, afterIndex: number, actionId: ActionId): boolean {
  const loop = getRunningActionLoop(running);
  const safeAfterIndex = clampLoopIndex(afterIndex, loop);
  if (actionId === "butcherFish") {
    return loop[safeAfterIndex] === "fishRiver";
  }

  return true;
}

export function isCarryAction(actionId: ActionId): boolean {
  return isGatherAction(actionId) || actionId === "huntSmallAnimals" || actionId === "chopTrees";
}

export function getLoopLocation(actionId: ActionId, locationId: LocationId | undefined): LocationId | null {
  return isCarryAction(actionId) ? (locationId ?? getDefaultActionLocation(actionId)) : null;
}

export function getRunningActionLoopLocations(
  running: RunningAction,
  loop = getRunningActionLoop(running)
): Array<LocationId | null> {
  if (running.loopLocationIds?.length) {
    return loop.map((actionId, index) => getLoopLocation(actionId, running.loopLocationIds?.[index] ?? undefined));
  }

  return loop.map((actionId, index) => {
    if (index === 0 && isCarryAction(actionId)) {
      return running.locationId ?? "meadow";
    }

    return getLoopLocation(actionId, undefined);
  });
}

export function getLoopLocationId(running: RunningAction, index: number): LocationId | undefined {
  const loop = getRunningActionLoop(running);
  const actionId = loop[clampLoopIndex(index, loop)];
  return getRunningActionLoopLocations(running, loop)[clampLoopIndex(index, loop)] ?? (isCarryAction(actionId) ? "meadow" : undefined);
}

export function getLoopTargetLocationId(running: RunningAction, index: number): CharacterLocationId {
  const loop = getRunningActionLoop(running);
  const actionId = loop[clampLoopIndex(index, loop)];
  return getActionTargetLocation(actionId, getLoopLocationId(running, index));
}

export function getActionTargetLocation(actionId: ActionId, locationId: LocationId | undefined): CharacterLocationId {
  return isCarryAction(actionId) ? (locationId ?? getDefaultActionLocation(actionId)) : "camp";
}

export function getRunningTargetLocation(running: RunningAction): CharacterLocationId {
  return running.targetLocationId ?? running.locationId ?? "camp";
}

export function getCharacterLocation(state: GameState, characterId: string): CharacterLocationId {
  return state.characters.find((character) => character.id === characterId)?.locationId ?? "camp";
}

export function setCharacterLocation(state: GameState, characterId: string, locationId: CharacterLocationId): void {
  const character = state.characters.find((entry) => entry.id === characterId);
  if (character) {
    character.locationId = locationId;
  }
}

export function getStoppedCharacterLocation(running: RunningAction, currentLocation: CharacterLocationId): CharacterLocationId {
  if (running.phase === "travelingTo" || running.phase === "travelingBack") {
    return running.originLocationId ?? currentLocation;
  }

  return getRunningTargetLocation(running);
}

export function formatCharacterLocation(locationId: CharacterLocationId): string {
  return locationId === "camp" ? "camp" : `the ${locationId}`;
}

export function getActiveActionId(running: RunningAction): ActionId {
  return running.phase === "followUp" && running.followUpActionId ? running.followUpActionId : running.actionId;
}

export function getLoopActionId(running: RunningAction, index: number): ActionId {
  const loop = getRunningActionLoop(running);
  return loop[clampLoopIndex(index, loop)] ?? running.actionId;
}

export function getTravelBackNextLoopIndex(running: RunningAction): number {
  const loop = getRunningActionLoop(running);
  return clampLoopIndex(running.nextLoopIndex ?? running.loopIndex ?? 0, loop);
}

export function getNextLoopIndex(running: RunningAction): number {
  return getNextLoopIndexAfterIndex(running, running.loopIndex ?? 0);
}

export function getNextLoopIndexAfterCompletedAction(running: RunningAction): number {
  return getNextLoopIndexAfterIndex(running, running.loopIndex ?? 0);
}

export function getNextLoopIndexAfterIndex(running: RunningAction, index: number): number {
  const loop = getRunningActionLoop(running);
  if (loop.length <= 1) {
    return clampLoopIndex(index, loop);
  }

  let nextIndex = (clampLoopIndex(index, loop) + 1) % loop.length;
  while (loop[nextIndex] === "butcherFish" && nextIndex !== index) {
    nextIndex = (nextIndex + 1) % loop.length;
  }

  return nextIndex;
}

export function clampLoopIndex(index: number, loop: ActionId[]): number {
  if (!loop.length) {
    return 0;
  }

  return Math.min(loop.length - 1, Math.max(0, Math.floor(index)));
}

export function getTravelMs(originLocationId: CharacterLocationId, targetLocationId: CharacterLocationId): number {
  if (originLocationId === targetLocationId) {
    return 0;
  }

  return getTravelLegMs(originLocationId) + getTravelLegMs(targetLocationId);
}

function isGatherAction(actionId: ActionId): boolean {
  return (
    actionId === "gatherSticks" ||
    actionId === "gatherStones" ||
    actionId === "gatherFlaxPlants" ||
    actionId === "gatherFlaxFibers" ||
    actionId === "gatherMeadowIngredients" ||
    actionId === "gatherForestIngredients" ||
    actionId === "gatherRiverIngredients" ||
    actionId === "gatherMineIngredients" ||
    actionId === "gatherDesertIngredients" ||
    actionId === "gatherSand" ||
    actionId === "gatherWater" ||
    actionId === "mineCoal" ||
    actionId === "mineCopper" ||
    actionId === "mineTin" ||
    actionId === "fishRiver"
  );
}

function getDefaultActionLocation(actionId: ActionId): LocationId {
  if (actionId === "gatherWater" || actionId === "fishRiver" || actionId === "gatherRiverIngredients") {
    return "river";
  }
  if (actionId === "gatherForestIngredients" || actionId === "chopTrees") {
    return "forest";
  }
  if (actionId === "gatherMineIngredients" || actionId === "mineCoal" || actionId === "mineCopper" || actionId === "mineTin") {
    return "mine";
  }
  if (actionId === "gatherDesertIngredients" || actionId === "gatherSand") {
    return "desert";
  }
  return "meadow";
}

function getLocationTravelMs(locationId: LocationId): number {
  return LOCATION_TRAVEL_MS[locationId];
}

function getTravelLegMs(locationId: CharacterLocationId): number {
  return locationId === "camp" ? 0 : getLocationTravelMs(locationId);
}
