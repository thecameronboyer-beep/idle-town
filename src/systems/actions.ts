import { actionDefinitions, getActionDefinition } from "../data/actions";
import { toolDefinitions } from "../data/craftables";
import {
  fishFiletByFishId,
  fishResourceIds,
  formatResourceAmount,
  getResourceLabel,
  normalizeResourceAmount
} from "../data/resources";
import type {
  ActionId,
  CharacterLocationId,
  Cost,
  GameState,
  LocationId,
  ResourceCountDelta,
  ResourceId,
  RunningAction,
  ToolId
} from "../types";
import {
  addCharacterResources,
  addResources,
  consumeOneWholeResource,
  depositCharacterResources,
  getCharacterInventoryWeight,
  getCharacterMaxWeight,
  hasResourceQuantity,
  hasCost,
  payCost
} from "./inventory";
import { addLog, addStackedLog } from "./log";
import { expireCampfire, getActiveCampfireExpiresAt } from "./buildings";
import { randomFloat, randomInt } from "./math";
import { isActionUnlocked } from "./progression";
import { damageTool, equipFreshTool, hasUsableTool } from "./tools";

const MAX_OFFLINE_MS = 2 * 60 * 60 * 1000;
const LOCATION_TRAVEL_MS: Record<LocationId, number> = {
  meadow: 10000,
  river: 15000,
  forest: 30000,
  mine: 60000
};

const RIVER_FISH: Array<{ id: ResourceId; minWeight: number; maxWeight: number }> = [
  { id: "minnow", minWeight: 0.5, maxWeight: 1.5 },
  { id: "stoneLoach", minWeight: 1, maxWeight: 3 },
  { id: "mudskipper", minWeight: 1.5, maxWeight: 4.5 },
  { id: "brookStickleback", minWeight: 0.5, maxWeight: 2 },
  { id: "pebblePerch", minWeight: 2, maxWeight: 7.5 }
];
const SMALL_GAME: Array<{ id: "rabbit" | "squirrel"; minWeight: number; maxWeight: number }> = [
  { id: "rabbit", minWeight: 2, maxWeight: 5 },
  { id: "squirrel", minWeight: 0.5, maxWeight: 2 }
];

type StartActionOptions = {
  locationId?: LocationId;
};

type ActionRewards = {
  resources: Cost;
  resourceCounts?: ResourceCountDelta;
  message: string;
  tone: "gain" | "craft";
};

type ToolCraftActionId =
  | "craftBasket"
  | "craftFishingPole"
  | "craftStoneKnife"
  | "craftStoneAxe"
  | "craftStonePickAxe"
  | "craftStoneSpear";

const TOOL_CRAFT_ACTIONS: Array<{ actionId: ToolCraftActionId; toolId: ToolId }> = [
  { actionId: "craftBasket", toolId: "basket" },
  { actionId: "craftFishingPole", toolId: "fishingPole" },
  { actionId: "craftStoneKnife", toolId: "stoneKnife" },
  { actionId: "craftStoneAxe", toolId: "stoneAxe" },
  { actionId: "craftStonePickAxe", toolId: "stonePickAxe" },
  { actionId: "craftStoneSpear", toolId: "stoneSpear" }
];

export function getLowestQuantityCraftAction(state: GameState, now = Date.now()): ToolCraftActionId | null {
  const candidates = TOOL_CRAFT_ACTIONS.filter(({ actionId }) => {
    return isActionUnlocked(state, actionId, now) && hasCost(state, getActionCost(actionId));
  });

  if (!candidates.length) {
    return null;
  }

  return candidates.reduce((lowest, candidate) => {
    const candidateStock = getToolStockCount(state, candidate.toolId);
    const lowestStock = getToolStockCount(state, lowest.toolId);
    return candidateStock < lowestStock ? candidate : lowest;
  }, candidates[0]).actionId;
}

function getToolStockCount(state: GameState, toolId: ToolId): number {
  const tool = state.tools[toolId];
  return (tool?.quantity ?? 0) + (tool?.owned ? 1 : 0);
}

export function getActionCost(actionId: ActionId): Cost {
  switch (actionId) {
    case "cookRabbitMeat":
      return { rabbitMeat: 1 };
    case "cookSquirrelMeat":
      return { squirrelMeat: 1 };
    case "tanHide":
      return { hide: 1 };
    case "craftLowestTool":
      return {};
    case "craftBasket":
      return getToolRecipe("basket");
    case "craftFishingPole":
      return getToolRecipe("fishingPole");
    case "craftStoneKnife":
      return getToolRecipe("stoneKnife");
    case "craftStoneAxe":
      return getToolRecipe("stoneAxe");
    case "craftStonePickAxe":
      return getToolRecipe("stonePickAxe");
    case "craftStoneSpear":
      return getToolRecipe("stoneSpear");
    default:
      return {};
  }
}

export function canStartAction(state: GameState, actionId: ActionId, now = Date.now()): boolean {
  if (actionId === "craftLowestTool") {
    return isActionUnlocked(state, actionId, now) && Boolean(getLowestQuantityCraftAction(state, now));
  }

  if (actionId === "butcherFish") {
    return isActionUnlocked(state, actionId, now) && hasCarriedWholeFish(state);
  }
  if (actionId === "butcherRabbit") {
    return isActionUnlocked(state, actionId, now) && hasResourceQuantity(state, "rabbit");
  }
  if (actionId === "butcherSquirrel") {
    return isActionUnlocked(state, actionId, now) && hasResourceQuantity(state, "squirrel");
  }

  return isActionUnlocked(state, actionId, now) && hasCost(state, getActionCost(actionId));
}

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

export function insertActionInLoop(
  state: GameState,
  afterIndex: number,
  actionId: ActionId,
  options: StartActionOptions = {},
  now = Date.now()
): boolean {
  const running = state.currentAction;
  if (!running) {
    return false;
  }

  if (!canInsertActionInLoop(running, afterIndex, actionId)) {
    return false;
  }

  const loop = getRunningActionLoop(running);
  const locations = getRunningActionLoopLocations(running, loop);
  const safeAfterIndex = clampLoopIndex(afterIndex, loop);
  const insertIndex = safeAfterIndex + 1;
  loop.splice(insertIndex, 0, actionId);
  locations.splice(insertIndex, 0, getLoopLocation(actionId, options.locationId));

  const currentIndex = clampLoopIndex(running.loopIndex ?? 0, loop);
  running.loopActionIds = loop;
  running.loopLocationIds = locations;
  running.loopIndex = insertIndex <= currentIndex ? currentIndex + 1 : currentIndex;
  delete running.followUpActionId;
  state.updatedAt = now;
  state.lastSimulatedAt = now;
  return true;
}

export function removeActionFromLoop(state: GameState, index: number, now = Date.now()): number {
  const running = state.currentAction;
  if (!running) {
    return 0;
  }

  const loop = getRunningActionLoop(running);
  if (loop.length <= 1) {
    return clampLoopIndex(index, loop);
  }

  const currentIndex = clampLoopIndex(running.loopIndex ?? 0, loop);
  const safeIndex = clampLoopIndex(index, loop);
  if (safeIndex === currentIndex) {
    return safeIndex;
  }

  const locations = getRunningActionLoopLocations(running, loop);
  loop.splice(safeIndex, 1);
  locations.splice(safeIndex, 1);
  running.loopActionIds = loop;
  running.loopLocationIds = locations;
  running.loopIndex = safeIndex < currentIndex ? currentIndex - 1 : currentIndex;
  if (typeof running.nextLoopIndex === "number") {
    running.nextLoopIndex = clampLoopIndex(running.nextLoopIndex, loop);
  }

  delete running.followUpActionId;
  state.updatedAt = now;
  state.lastSimulatedAt = now;
  return Math.max(0, safeIndex - 1);
}

export function startAction(
  state: GameState,
  actionId: ActionId,
  now = Date.now(),
  options: StartActionOptions = {}
): boolean {
  const definition = getActionDefinition(actionId);
  if (!definition || !canStartAction(state, actionId, now)) {
    return false;
  }

  const targetLocationId = getActionTargetLocation(actionId, options.locationId);
  const originLocationId = getSelectedCharacterLocation(state);
  const travelDuration = getTravelMs(originLocationId, targetLocationId);
  state.currentAction = {
    actionId,
    characterId: state.selectedCharacterId,
    phase: travelDuration > 0 ? "travelingTo" : "working",
    originLocationId,
    targetLocationId,
    locationId: targetLocationId === "camp" ? undefined : targetLocationId,
    loopActionIds: [actionId],
    loopLocationIds: [targetLocationId === "camp" ? null : targetLocationId],
    loopIndex: 0,
    startedAt: now,
    endsAt: now + (travelDuration || definition.durationMs),
    repeat: true
  };
  if (travelDuration <= 0) {
    setCharacterLocation(state, state.selectedCharacterId, targetLocationId);
  }
  setCharacterWorking(state, true);
  state.updatedAt = now;
  state.lastSimulatedAt = now;
  return true;
}

export function stopAction(state: GameState, now = Date.now()): void {
  if (!state.currentAction) {
    return;
  }

  const definition = getActionDefinition(state.currentAction.actionId);
  const stoppedLocation = getStoppedCharacterLocation(state.currentAction, getSelectedCharacterLocation(state));
  setCharacterLocation(state, state.currentAction.characterId, stoppedLocation);
  const returnedToCamp = stoppedLocation === "camp" ? depositCarriedResources(state, now) : false;
  state.currentAction = null;
  setCharacterWorking(state, false);
  state.updatedAt = now;
  state.lastSimulatedAt = now;
  addLog(
    state,
    returnedToCamp
      ? `Cameron stops ${definition?.verb ?? "working"} and returns to camp.`
      : `Cameron stops ${definition?.verb ?? "working"} at ${formatCharacterLocation(stoppedLocation)}.`,
    "muted",
    now
  );
}

export function depositCarriedResources(state: GameState, now = Date.now()): boolean {
  if (getSelectedCharacterLocation(state) !== "camp") {
    return false;
  }

  const deposited = depositCharacterResources(state);
  if (Object.keys(deposited).length <= 0) {
    return false;
  }

  addStackedLog(state, {
    aggregateKey: "deposit:camp",
    text: "Cameron returned resources to camp",
    resources: deposited,
    tone: "gain",
    now
  });
  state.updatedAt = now;
  state.lastSimulatedAt = now;
  return true;
}

export function simulateUntil(state: GameState, targetTime = Date.now()): void {
  const cappedTarget = Math.min(targetTime, state.lastSimulatedAt + MAX_OFFLINE_MS);

  let completedCycles = 0;
  while (completedCycles < 500) {
    const nextCampfireAt = getNextCampfireEventAt(state, cappedTarget);
    const nextActionAt = state.currentAction?.endsAt ?? Number.POSITIVE_INFINITY;

    if (nextCampfireAt === null && nextActionAt > cappedTarget) {
      break;
    }

    if (nextCampfireAt !== null && nextCampfireAt <= nextActionAt) {
      expireCampfire(state, nextCampfireAt);
      if (state.currentAction && actionNeedsLitCampfire(getActiveActionId(state.currentAction))) {
        addLog(state, "Cameron stops cooking as the campfire goes out.", "warning", nextCampfireAt);
        state.currentAction = null;
        setCharacterWorking(state, false);
      }
      continue;
    }

    if (state.currentAction && nextActionAt <= cappedTarget) {
      const running = state.currentAction;
      const completedAt: number = running.endsAt;
      completeRunningAction(state, running, completedAt, cappedTarget);
      completedCycles += 1;
      continue;
    }

    break;
  }

  if (targetTime > cappedTarget && completedCycles > 0) {
    addLog(state, "The saved trail grows quiet after two hours away.", "muted", cappedTarget);
  }

  state.lastSimulatedAt = targetTime;
  state.updatedAt = targetTime;
  if (!state.currentAction) {
    setCharacterWorking(state, false);
  }
}

export function getActionProgress(state: GameState, now = Date.now()): number {
  if (!state.currentAction) {
    return 0;
  }

  const total = state.currentAction.endsAt - state.currentAction.startedAt;
  return total <= 0 ? 1 : (now - state.currentAction.startedAt) / total;
}

function completeRunningAction(state: GameState, running: RunningAction, now: number, targetTime: number): void {
  if (running.phase === "travelingTo") {
    setCharacterLocation(state, running.characterId, getRunningTargetLocation(running));
    startWorkingCycle(state, running, now);
    return;
  }

  if (running.phase === "travelingBack") {
    setCharacterLocation(state, running.characterId, "camp");
    depositCarriedResources(state, now);

    if (running.repeat) {
      const nextIndex = getTravelBackNextLoopIndex(running);
      if (startLoopActionAtIndex(state, running, nextIndex, now)) {
        return;
      }
    }

    if (running.repeat && canStartAction(state, running.actionId, now)) {
      startTravelingToLocation(state, running, now);
      return;
    }

    state.currentAction = null;
    setCharacterWorking(state, false);
    return;
  }

  if (running.phase === "followUp") {
    completeFollowUpCycle(state, running, now, targetTime);
    return;
  }

  completeWorkCycle(state, running, now);
}

function completeFollowUpCycle(state: GameState, running: RunningAction, now: number, targetTime: number): void {
  const activeActionId = getActiveActionId(running);
  if (activeActionId !== "butcherFish") {
    startTravelingBackToCamp(state, running, targetTime, getNextLoopIndexAfterCompletedAction(running));
    return;
  }

  completeFishButchering(state, now);
  if (hasCarriedWholeFish(state)) {
    startFollowUpAction(state, running, running.loopIndex ?? 0, now);
    return;
  }

  startTravelingBackToCamp(state, running, targetTime, getNextLoopIndexAfterCompletedAction(running));
}

function completeWorkCycle(state: GameState, running: RunningAction, now: number): void {
  const actionId = getWorkActionId(state, running.actionId, now);
  if (!actionId) {
    addLog(state, "Cameron lacks the materials to continue.", "warning", now);
    state.currentAction = null;
    setCharacterWorking(state, false);
    return;
  }

  const cost = getActionCost(actionId);
  if (!hasCost(state, cost)) {
    addLog(state, "Cameron lacks the materials to continue.", "warning", now);
    state.currentAction = null;
    setCharacterWorking(state, false);
    return;
  }

  payCost(state, cost);
  if (actionId === "butcherFish") {
    completeFishButchering(state, now);

    if (running.repeat && canStartAction(state, actionId, now)) {
      startWorkingCycle(state, running, now);
      return;
    }

    state.currentAction = null;
    setCharacterWorking(state, false);
    return;
  }

  const craftedToolId = getCraftedToolId(actionId);
  if (craftedToolId) {
    completeToolCraft(state, craftedToolId, now);
    if (running.repeat && canStartAction(state, actionId, now)) {
      startWorkingCycle(state, running, now);
      return;
    }

    state.currentAction = null;
    setCharacterWorking(state, false);
    return;
  }

  const rewards = rollRewards(state, actionId);
  const gatheredResources = isCarryAction(actionId)
    ? addCharacterResources(state, rewards.resources, rewards.resourceCounts)
    : rewards.resources;
  if (isCarryAction(actionId)) {
    addCarryLog(state, actionId, gatheredResources, now);
  } else {
    addResources(state, rewards.resources, rewards.resourceCounts);
    addStackedLog(state, {
      aggregateKey: `action:${actionId}`,
      text: getStackedActionText(actionId),
      resources: rewards.resources,
      tone: rewards.tone,
      now
    });
  }
  applyToolWear(state, actionId, now);

  if (isCarryAction(actionId) && shouldReturnToCamp(rewards.resources, gatheredResources, state)) {
    const nextIndex = getNextLoopIndex(running);
    if (actionId === "fishRiver" && getLoopActionId(running, nextIndex) === "butcherFish" && hasCarriedWholeFish(state)) {
      startFollowUpAction(state, running, nextIndex, now);
      return;
    }

    startTravelingBackToCamp(state, running, now, getNextLoopIndexAfterCompletedAction(running));
    return;
  }

  if (!isCarryAction(actionId) && getRunningActionLoop(running).length > 1) {
    startLoopActionAtIndex(state, running, getNextLoopIndexAfterCompletedAction(running), now);
    return;
  }

  if (running.repeat && canStartAction(state, actionId, now)) {
    startWorkingCycle(state, running, now);
    return;
  }

  state.currentAction = null;
  setCharacterWorking(state, false);
}

function startWorkingCycle(state: GameState, running: RunningAction, now: number): void {
  const definition = getActionDefinition(running.actionId);
  if (!definition) {
    state.currentAction = null;
    setCharacterWorking(state, false);
    return;
  }

  const targetLocationId = getRunningTargetLocation(running);
  setCharacterLocation(state, running.characterId, targetLocationId);
  state.currentAction = {
    ...running,
    phase: "working",
    originLocationId: targetLocationId,
    targetLocationId,
    locationId: targetLocationId === "camp" ? undefined : targetLocationId,
    startedAt: now,
    endsAt: now + definition.durationMs
  };
}

function startTravelingToLocation(state: GameState, running: RunningAction, now: number): void {
  const targetLocationId = getLoopTargetLocationId(running, running.loopIndex ?? 0);
  const originLocationId = getCharacterLocation(state, running.characterId);
  const travelDuration = getTravelMs(originLocationId, targetLocationId);
  if (travelDuration <= 0) {
    startWorkingCycle(state, { ...running, targetLocationId, locationId: targetLocationId === "camp" ? undefined : targetLocationId }, now);
    return;
  }

  state.currentAction = {
    ...running,
    phase: "travelingTo",
    originLocationId,
    targetLocationId,
    locationId: targetLocationId === "camp" ? undefined : targetLocationId,
    startedAt: now,
    endsAt: now + travelDuration
  };
}

function startTravelingBackToCamp(
  state: GameState,
  running: RunningAction,
  now: number,
  nextLoopIndex = getNextLoopIndexAfterCompletedAction(running)
): void {
  const originLocationId = getRunningTargetLocation(running);
  state.currentAction = {
    ...running,
    phase: "travelingBack",
    originLocationId,
    targetLocationId: "camp",
    locationId: originLocationId === "camp" ? undefined : originLocationId,
    nextLoopIndex,
    startedAt: now,
    endsAt: now + getTravelMs(originLocationId, "camp")
  };
}

function startFollowUpAction(state: GameState, running: RunningAction, loopIndex: number, now: number): void {
  const actionId = getLoopActionId(running, loopIndex);
  const definition = getActionDefinition(actionId);
  if (!definition) {
    startTravelingBackToCamp(state, running, now, getNextLoopIndexAfterCompletedAction(running));
    return;
  }

  state.currentAction = {
    ...running,
    actionId,
    phase: "followUp",
    originLocationId: getRunningTargetLocation(running),
    targetLocationId: getRunningTargetLocation(running),
    loopIndex,
    startedAt: now,
    endsAt: now + definition.durationMs
  };
}

function startLoopActionAtIndex(state: GameState, running: RunningAction, index: number, now: number): boolean {
  const loop = getRunningActionLoop(running);
  if (!loop.length) {
    return false;
  }

  const loopIndex = clampLoopIndex(index, loop);
  const actionId = loop[loopIndex];
  if (actionId === "butcherFish" || !canStartAction(state, actionId, now)) {
    const nextIndex = getNextLoopIndexAfterIndex(running, loopIndex);
    return nextIndex !== loopIndex ? startLoopActionAtIndex(state, running, nextIndex, now) : false;
  }

  const definition = getActionDefinition(actionId);
  if (!definition) {
    return false;
  }

  const targetLocationId = getLoopTargetLocationId(running, loopIndex);
  const originLocationId = getCharacterLocation(state, running.characterId);
  const travelDuration = getTravelMs(originLocationId, targetLocationId);
  state.currentAction = {
    ...running,
    actionId,
    phase: travelDuration > 0 ? "travelingTo" : "working",
    originLocationId,
    targetLocationId,
    locationId: targetLocationId === "camp" ? undefined : targetLocationId,
    loopActionIds: loop,
    loopLocationIds: getRunningActionLoopLocations(running, loop),
    loopIndex,
    nextLoopIndex: undefined,
    followUpActionId: undefined,
    startedAt: now,
    endsAt: now + (travelDuration || definition.durationMs)
  };
  if (travelDuration <= 0) {
    setCharacterLocation(state, running.characterId, targetLocationId);
  }
  return true;
}

function addCarryLog(state: GameState, actionId: ActionId, resources: Cost, now: number): void {
  if (!Object.values(resources).some((amount) => (amount ?? 0) > 0)) {
    return;
  }

  addStackedLog(state, {
    aggregateKey: `action:${actionId}`,
    text: getStackedActionText(actionId),
    resources,
    tone: "gain",
    now
  });
}

function isGatherAction(actionId: ActionId): boolean {
  return (
    actionId === "gatherSticks" ||
    actionId === "gatherStones" ||
    actionId === "gatherFlaxFibers" ||
    actionId === "gatherMushrooms" ||
    actionId === "gatherBerries" ||
    actionId === "mineCoal" ||
    actionId === "mineCopper" ||
    actionId === "mineTin" ||
    actionId === "fishRiver"
  );
}

function isCarryAction(actionId: ActionId): boolean {
  return isGatherAction(actionId) || actionId === "huntSmallAnimals" || actionId === "chopTrees";
}

function getLoopLocation(actionId: ActionId, locationId: LocationId | undefined): LocationId | null {
  return isCarryAction(actionId) ? (locationId ?? "meadow") : null;
}

function getRunningActionLoopLocations(
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

function getLoopLocationId(running: RunningAction, index: number): LocationId | undefined {
  const loop = getRunningActionLoop(running);
  const actionId = loop[clampLoopIndex(index, loop)];
  return getRunningActionLoopLocations(running, loop)[clampLoopIndex(index, loop)] ?? (isCarryAction(actionId) ? "meadow" : undefined);
}

function getLoopTargetLocationId(running: RunningAction, index: number): CharacterLocationId {
  const loop = getRunningActionLoop(running);
  const actionId = loop[clampLoopIndex(index, loop)];
  return getActionTargetLocation(actionId, getLoopLocationId(running, index));
}

function getActionTargetLocation(actionId: ActionId, locationId: LocationId | undefined): CharacterLocationId {
  return isCarryAction(actionId) ? (locationId ?? "meadow") : "camp";
}

function getRunningTargetLocation(running: RunningAction): CharacterLocationId {
  return running.targetLocationId ?? running.locationId ?? "camp";
}

function getSelectedCharacterLocation(state: GameState): CharacterLocationId {
  return getCharacterLocation(state, state.selectedCharacterId);
}

function getCharacterLocation(state: GameState, characterId: string): CharacterLocationId {
  return state.characters.find((character) => character.id === characterId)?.locationId ?? "camp";
}

function setCharacterLocation(state: GameState, characterId: string, locationId: CharacterLocationId): void {
  const character = state.characters.find((entry) => entry.id === characterId);
  if (character) {
    character.locationId = locationId;
  }
}

function getStoppedCharacterLocation(running: RunningAction, currentLocation: CharacterLocationId): CharacterLocationId {
  if (running.phase === "travelingTo" || running.phase === "travelingBack") {
    return running.originLocationId ?? currentLocation;
  }

  return getRunningTargetLocation(running);
}

function formatCharacterLocation(locationId: CharacterLocationId): string {
  return locationId === "camp" ? "camp" : `the ${locationId}`;
}

function getActiveActionId(running: RunningAction): ActionId {
  return running.phase === "followUp" && running.followUpActionId ? running.followUpActionId : running.actionId;
}

function actionNeedsLitCampfire(actionId: ActionId): boolean {
  return actionId === "cookRabbitMeat" || actionId === "cookSquirrelMeat";
}

function getNextCampfireEventAt(state: GameState, cappedTarget: number): number | null {
  const expiresAt = getActiveCampfireExpiresAt(state);
  return expiresAt && expiresAt <= cappedTarget ? expiresAt : null;
}

function getLoopActionId(running: RunningAction, index: number): ActionId {
  const loop = getRunningActionLoop(running);
  return loop[clampLoopIndex(index, loop)] ?? running.actionId;
}

function getTravelBackNextLoopIndex(running: RunningAction): number {
  const loop = getRunningActionLoop(running);
  return clampLoopIndex(running.nextLoopIndex ?? running.loopIndex ?? 0, loop);
}

function getNextLoopIndex(running: RunningAction): number {
  return getNextLoopIndexAfterIndex(running, running.loopIndex ?? 0);
}

function getNextLoopIndexAfterCompletedAction(running: RunningAction): number {
  return getNextLoopIndexAfterIndex(running, running.loopIndex ?? 0);
}

function getNextLoopIndexAfterIndex(running: RunningAction, index: number): number {
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

function clampLoopIndex(index: number, loop: ActionId[]): number {
  if (!loop.length) {
    return 0;
  }

  return Math.min(loop.length - 1, Math.max(0, Math.floor(index)));
}

function shouldReturnToCamp(rewards: Cost, accepted: Cost, state: GameState): boolean {
  const rewardedAmount = Object.values(rewards).reduce((total, amount) => total + (amount ?? 0), 0);
  const acceptedAmount = Object.values(accepted).reduce((total, amount) => total + (amount ?? 0), 0);
  return getCharacterInventoryWeight(state) >= getCharacterMaxWeight(state) || (rewardedAmount > 0 && acceptedAmount < rewardedAmount);
}

function getLocationTravelMs(locationId: LocationId): number {
  return LOCATION_TRAVEL_MS[locationId];
}

function getTravelMs(originLocationId: CharacterLocationId, targetLocationId: CharacterLocationId): number {
  if (originLocationId === targetLocationId) {
    return 0;
  }

  return getTravelLegMs(originLocationId) + getTravelLegMs(targetLocationId);
}

function getTravelLegMs(locationId: CharacterLocationId): number {
  return locationId === "camp" ? 0 : getLocationTravelMs(locationId);
}

function rollRewards(
  state: GameState,
  actionId: ActionId
): ActionRewards {
  switch (actionId) {
    case "gatherSticks": {
      const amount = randomInt(1, 3);
      return {
        resources: { stick: amount },
        message: `Cameron gathers ${amount} ${plural("Stick", amount)}.`,
        tone: "gain"
      };
    }
    case "gatherStones": {
      const amount = randomInt(1, 2);
      return {
        resources: { stone: amount },
        message: `Cameron finds ${amount} ${plural("Stone", amount)}.`,
        tone: "gain"
      };
    }
    case "gatherFlaxFibers": {
      const amount = randomInt(1, 3);
      return {
        resources: { flaxFiber: amount },
        message: `Cameron pulls ${amount} ${plural("Flax Fiber", amount)} from the brush.`,
        tone: "gain"
      };
    }
    case "gatherMushrooms": {
      const amount = randomInt(1, 3);
      return {
        resources: { mushroom: amount },
        message: `Cameron gathers ${amount} ${plural("Mushroom", amount)} from the meadow shade.`,
        tone: "gain"
      };
    }
    case "gatherBerries": {
      const amount = randomInt(2, 5);
      return {
        resources: { berry: amount },
        message: `Cameron picks ${amount} ${amount === 1 ? "Berry" : "Berries"} from the brambles.`,
        tone: "gain"
      };
    }
    case "mineCoal":
      return mineResource("coal");
    case "mineCopper":
      return mineResource("copper");
    case "mineTin":
      return mineResource("tin");
    case "fishRiver":
      return fishRiver();
    case "craftLowestTool":
    case "craftBasket":
    case "craftFishingPole":
    case "craftStoneKnife":
    case "craftStoneAxe":
    case "craftStonePickAxe":
    case "craftStoneSpear":
      return {
        resources: {},
        message: "Cameron finishes a tool.",
        tone: "craft"
      };
    case "chopTrees": {
      const wood = randomInt(2, 4);
      const sticks = Math.random() < 0.35 ? 1 : 0;
      return {
        resources: { wood, stick: sticks },
        message: `Cameron chops ${wood} ${plural("Wood", wood)}${sticks ? " and saves a usable stick" : ""}.`,
        tone: "gain"
      };
    }
    case "huntSmallAnimals":
      return huntSmallAnimal();
    case "butcherFish":
      return {
        resources: {},
        message: "Cameron butchers carried fish.",
        tone: "gain"
      };
    case "butcherRabbit":
      return butcherAnimal(state, "rabbit");
    case "butcherSquirrel":
      return butcherAnimal(state, "squirrel");
    case "cookRabbitMeat":
      return {
        resources: { cookedRabbitMeat: 1 },
        message: "Cameron cooks rabbit meat over the coals.",
        tone: "craft"
      };
    case "cookSquirrelMeat":
      return {
        resources: { cookedSquirrelMeat: 1 },
        message: "Cameron cooks squirrel meat over the coals.",
        tone: "craft"
      };
    case "tanHide":
      return {
        resources: { leather: 1 },
        message: "Cameron works a hide into rough leather.",
        tone: "craft"
      };
  }
}

function getToolRecipe(toolId: ToolId): Cost {
  return toolDefinitions.find((tool) => tool.id === toolId)?.recipe ?? {};
}

function getWorkActionId(state: GameState, actionId: ActionId, now: number): ActionId | null {
  if (actionId === "craftLowestTool") {
    return getLowestQuantityCraftAction(state, now);
  }

  return actionId;
}

function getCraftedToolId(actionId: ActionId): ToolId | null {
  switch (actionId) {
    case "craftBasket":
      return "basket";
    case "craftFishingPole":
      return "fishingPole";
    case "craftStoneKnife":
      return "stoneKnife";
    case "craftStoneAxe":
      return "stoneAxe";
    case "craftStonePickAxe":
      return "stonePickAxe";
    case "craftStoneSpear":
      return "stoneSpear";
    default:
      return null;
  }
}

function completeToolCraft(state: GameState, toolId: ToolId, now: number): void {
  const definition = toolDefinitions.find((tool) => tool.id === toolId);
  if (!definition) {
    return;
  }

  state.tools[toolId].quantity += 1;
  if (!hasUsableTool(state, toolId)) {
    equipFreshTool(state, toolId);
  }

  addStackedLog(state, {
    aggregateKey: `craft:${toolId}`,
    text: `Cameron crafted ${pluralTool(definition.label)}`,
    amount: 1,
    unit: pluralTool(definition.label),
    tone: "craft",
    now
  });
}

function completeFishButchering(state: GameState, now: number): void {
  const filets = butcherOneCarriedFish(state);
  if (!Object.values(filets).some((amount) => (amount ?? 0) > 0)) {
    return;
  }

  addStackedLog(state, {
    aggregateKey: "action:butcherFish",
    text: "Cameron butchered fish",
    resources: filets,
    tone: "gain",
    now
  });
}

function butcherOneCarriedFish(state: GameState): Cost {
  const filets: Cost = {};

  for (const fishId of fishResourceIds) {
    const filetId = fishFiletByFishId[fishId];
    if (!filetId || !hasResourceQuantity(state, fishId, "character")) {
      continue;
    }

    const consumedWeight = consumeOneWholeResource(state, fishId, "character");
    const filetAmount = normalizeResourceAmount(filetId, consumedWeight * 0.5);
    if (filetAmount <= 0) {
      return filets;
    }

    state.characterInventory[filetId] = normalizeResourceAmount(
      filetId,
      state.characterInventory[filetId] + filetAmount
    );
    filets[filetId] = normalizeResourceAmount(filetId, (filets[filetId] ?? 0) + filetAmount);
    if (!state.seenResources.includes(filetId)) {
      state.seenResources.push(filetId);
    }
    return filets;
  }

  return filets;
}

function hasCarriedWholeFish(state: GameState): boolean {
  return fishResourceIds.some((fishId) => hasResourceQuantity(state, fishId, "character"));
}

function fishRiver(): ActionRewards {
  const fish = RIVER_FISH[randomInt(0, RIVER_FISH.length - 1)];
  const weight = randomFloat(fish.minWeight, fish.maxWeight, 1);
  const label = getResourceLabel(fish.id);

  return {
    resources: { [fish.id]: weight },
    resourceCounts: { [fish.id]: 1 },
    message: `Cameron catches a ${formatResourceAmount(fish.id, weight)} lb ${label}.`,
    tone: "gain"
  };
}

function mineResource(resourceId: "coal" | "copper" | "tin"): ActionRewards {
  const label = getResourceLabel(resourceId);

  return {
    resources: { [resourceId]: 1 },
    message: `Cameron mines 1 ${label}.`,
    tone: "gain"
  };
}

function huntSmallAnimal(): ActionRewards {
  const animal = SMALL_GAME[Math.random() < 0.58 ? 0 : 1];
  const weight = randomFloat(animal.minWeight, animal.maxWeight, 1);
  const label = getResourceLabel(animal.id);

  return {
    resources: { [animal.id]: weight },
    resourceCounts: { [animal.id]: 1 },
    message: `Cameron brings back a ${formatResourceAmount(animal.id, weight)} lb ${label}.`,
    tone: "gain"
  };
}

function butcherAnimal(
  state: GameState,
  animal: "rabbit" | "squirrel"
): ActionRewards {
  const consumedWeight = consumeOneWholeResource(state, animal);
  if (consumedWeight <= 0) {
    return {
      resources: {},
      message: `Cameron has no ${animal} to butcher.`,
      tone: "gain"
    };
  }

  const meatId: ResourceId = animal === "rabbit" ? "rabbitMeat" : "squirrelMeat";
  const meat = animal === "rabbit" ? randomInt(1, 2) : 1;
  const hasKnife = hasUsableTool(state, "stoneKnife");
  const hideChance = animal === "rabbit" ? 0.65 : 0.42;
  const boneChance = animal === "rabbit" ? 0.24 : 0.14;
  const hide = Math.random() < hideChance ? 1 : 0;
  const bone = Math.random() < boneChance ? 1 : 0;
  const resources: Cost = {
    [meatId]: meat,
    hide: hasKnife ? hide : 0,
    bone: hasKnife ? bone : 0
  };
  const extras = (Object.entries({ hide, bone }) as [ResourceId, number][])
    .filter(([, amount]) => hasKnife && amount > 0)
    .map(([id, amount]) => `${amount} ${getResourceLabel(id)}`);

  return {
    resources,
    message: `Cameron butchers a ${animal} for ${meat} ${getResourceLabel(meatId)}${
      extras.length ? `, plus ${extras.join(" and ")}` : ""
    }.`,
    tone: "gain"
  };
}

function applyToolWear(state: GameState, actionId: ActionId, now: number): void {
  switch (actionId) {
    case "fishRiver":
      damageTool(state, "fishingPole", 1, now);
      break;
    case "mineCoal":
    case "mineCopper":
    case "mineTin":
      damageTool(state, "stonePickAxe", 1, now);
      break;
    case "chopTrees":
      damageTool(state, "stoneAxe", 1, now);
      break;
    case "huntSmallAnimals":
      damageTool(state, "stoneSpear", 1, now);
      break;
    case "butcherRabbit":
    case "butcherSquirrel":
      damageTool(state, "stoneKnife", 1, now);
      break;
    default:
      break;
  }
}

function getStackedActionText(actionId: ActionId): string {
  switch (actionId) {
    case "gatherSticks":
      return "Cameron gathered sticks";
    case "gatherStones":
      return "Cameron gathered stones";
    case "gatherFlaxFibers":
      return "Cameron gathered flax fibers";
    case "gatherMushrooms":
      return "Cameron gathered mushrooms";
    case "gatherBerries":
      return "Cameron gathered berries";
    case "mineCoal":
      return "Cameron mined coal";
    case "mineCopper":
      return "Cameron mined copper";
    case "mineTin":
      return "Cameron mined tin";
    case "fishRiver":
      return "Cameron caught river fish";
    case "craftBasket":
      return "Cameron crafted baskets";
    case "craftLowestTool":
      return "Cameron balanced tool stock";
    case "craftFishingPole":
      return "Cameron crafted fishing poles";
    case "craftStoneKnife":
      return "Cameron crafted stone knives";
    case "craftStoneAxe":
      return "Cameron crafted stone axes";
    case "craftStonePickAxe":
      return "Cameron crafted stone pick axes";
    case "craftStoneSpear":
      return "Cameron crafted stone spears";
    case "chopTrees":
      return "Cameron chopped trees";
    case "huntSmallAnimals":
      return "Cameron hunted small animals";
    case "butcherFish":
      return "Cameron butchered fish";
    case "butcherRabbit":
      return "Cameron butchered rabbits";
    case "butcherSquirrel":
      return "Cameron butchered squirrels";
    case "cookRabbitMeat":
      return "Cameron cooked rabbit meat";
    case "cookSquirrelMeat":
      return "Cameron cooked squirrel meat";
    case "tanHide":
      return "Cameron tanned hide";
  }
}

function plural(label: string, amount: number): string {
  return amount === 1 ? label : `${label}s`;
}

function pluralTool(label: string): string {
  return label.endsWith("s") ? label : `${label}s`;
}

function setCharacterWorking(state: GameState, isWorking: boolean): void {
  const character = state.characters.find((entry) => entry.id === state.selectedCharacterId);
  if (!character) {
    return;
  }

  character.condition = isWorking ? "working" : "resting";
}

export const orderedActionIds = actionDefinitions.map((action) => action.id);
