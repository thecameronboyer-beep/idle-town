import { actionDefinitions, getActionDefinition } from "../data/actions";
import { getSmithingRecipe } from "../data/smithing";
import { getTextileRecipe } from "../data/textiles";
import type { ActionId, Cost, GameState, RunningAction } from "../types";
import {
  addCharacterResources,
  addResources,
  depositCharacterResources,
  getCharacterInventoryWeight,
  getCharacterMaxWeight,
  hasResourceQuantity,
  hasCost,
  payCost
} from "./inventory";
import { addLog, addStackedLog } from "./log";
import { expireCampfire, getActiveCampfireExpiresAt } from "./buildings";
import { isActionUnlocked } from "./progression";
import { addActionSkillXp, addTravelSkillXp } from "./skills";
import {
  canInsertActionInLoop,
  clampLoopIndex,
  formatCharacterLocation,
  getActionTargetLocation,
  getActiveActionId,
  getCharacterLocation,
  getLoopActionId,
  getLoopLocation,
  getLoopTargetLocationId,
  getNextLoopIndex,
  getNextLoopIndexAfterCompletedAction,
  getNextLoopIndexAfterIndex,
  getRunningActionLoop,
  getRunningActionLoopLocations,
  getRunningTargetLocation,
  getStoppedCharacterLocation,
  getTravelBackNextLoopIndex,
  getTravelMs,
  isCarryAction,
  setCharacterLocation,
  type StartActionOptions
} from "./actionRouting";
import {
  getActionLoop,
  normalizeActionLoopLocations
} from "./actionLoops";
import {
  clearRunningAction,
  getCharacterName,
  getCurrentAction,
  getCurrentActions,
  getNextRunningAction,
  setCharacterWorking,
  setRunningAction,
  syncCurrentAction,
  touch
} from "./actionState";
import {
  applyToolWear,
  completeFishButchering,
  completeToolCraft,
  getCraftedToolId,
  getStackedActionText,
  getToolRecipe,
  getToolStockCount,
  hasCarriedWholeFish,
  rollRewards,
  TOOL_CRAFT_ACTIONS,
  type ToolCraftActionId
} from "./actionRewards";

export {
  canInsertActionInSavedLoop,
  createActionLoop,
  deleteActionLoop,
  getActionLoop,
  getAssignedActionLoop,
  insertActionInSavedLoop,
  removeActionFromSavedLoop
} from "./actionLoops";

export { getCurrentAction, getCurrentActions, syncCurrentAction } from "./actionState";

const MAX_OFFLINE_MS = 2 * 60 * 60 * 1000;
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

export function assignActionLoopToCharacter(
  state: GameState,
  loopId: string,
  characterId = state.selectedCharacterId,
  now = Date.now()
): boolean {
  const loop = getActionLoop(state, loopId);
  const character = state.characters.find((entry) => entry.id === characterId);
  if (!loop || !character) {
    return false;
  }

  character.actionLoopId = loop.id;
  return startActionLoop(state, loop.id, characterId, now);
}

export function startActionLoop(
  state: GameState,
  loopId: string,
  characterId = state.selectedCharacterId,
  now = Date.now()
): boolean {
  const loop = getActionLoop(state, loopId);
  if (!loop?.actionIds.length) {
    return false;
  }

  const seed: RunningAction = {
    actionId: loop.actionIds[0],
    characterId,
    phase: "working",
    loopActionIds: [...loop.actionIds],
    loopLocationIds: normalizeActionLoopLocations(loop),
    loopIndex: 0,
    startedAt: now,
    endsAt: now,
    repeat: true
  };

  return startLoopActionAtIndex(state, seed, 0, now);
}

export function getActionCost(actionId: ActionId): Cost {
  const smithingRecipe = getSmithingRecipe(actionId);
  if (smithingRecipe) {
    return smithingRecipe.cost;
  }
  const textileRecipe = getTextileRecipe(actionId);
  if (textileRecipe) {
    return textileRecipe.cost;
  }

  const craftedToolId = getCraftedToolId(actionId);
  if (craftedToolId) {
    return getToolRecipe(craftedToolId);
  }

  switch (actionId) {
    case "craftWoodenBowl":
      return { wood: 1 };
    case "cookRabbitMeat":
      return { rabbitMeat: 1 };
    case "cookSquirrelMeat":
      return { squirrelMeat: 1 };
    case "craftCrudeWoodenSpoon":
      return { wood: 1 };
    case "tanHide":
      return { hide: 1 };
    case "craftLowestTool":
      return {};
    default:
      return {};
  }
}

export function canStartAction(
  state: GameState,
  actionId: ActionId,
  now = Date.now(),
  characterId = state.selectedCharacterId
): boolean {
  if (isCharacterInCombat(state, characterId)) {
    return false;
  }

  if (actionId === "craftLowestTool") {
    return isActionUnlocked(state, actionId, now) && Boolean(getLowestQuantityCraftAction(state, now));
  }

  if (actionId === "butcherFish") {
    return isActionUnlocked(state, actionId, now) && hasCarriedWholeFish(state, characterId);
  }
  if (actionId === "butcherRabbit") {
    return isActionUnlocked(state, actionId, now) && hasResourceQuantity(state, "rabbit");
  }
  if (actionId === "butcherSquirrel") {
    return isActionUnlocked(state, actionId, now) && hasResourceQuantity(state, "squirrel");
  }

  return isActionUnlocked(state, actionId, now) && hasCost(state, getActionCost(actionId));
}

function isCharacterInCombat(state: GameState, characterId: string): boolean {
  return Boolean(
    state.combat?.encounter?.units.some((unit) => unit.kind === "party" && unit.characterId === characterId)
  );
}

export function insertActionInLoop(
  state: GameState,
  afterIndex: number,
  actionId: ActionId,
  options: StartActionOptions = {},
  now = Date.now()
): boolean {
  const running = getCurrentAction(state);
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
  setRunningAction(state, running);
  touch(state, now);
  return true;
}

export function removeActionFromLoop(state: GameState, index: number, now = Date.now()): number {
  const running = getCurrentAction(state);
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
  setRunningAction(state, running);
  touch(state, now);
  return Math.max(0, safeIndex - 1);
}

export function startAction(
  state: GameState,
  actionId: ActionId,
  now = Date.now(),
  options: StartActionOptions = {}
): boolean {
  const definition = getActionDefinition(actionId);
  const characterId = state.selectedCharacterId;
  if (!definition || !canStartAction(state, actionId, now, characterId)) {
    return false;
  }

  const targetLocationId = getActionTargetLocation(actionId, options.locationId);
  const originLocationId = getCharacterLocation(state, characterId);
  const travelDuration = getTravelMs(originLocationId, targetLocationId);
  const running: RunningAction = {
    actionId,
    characterId,
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
    setCharacterLocation(state, characterId, targetLocationId);
  }
  setRunningAction(state, running);
  touch(state, now);
  return true;
}

export function stopAction(state: GameState, now = Date.now()): void {
  const running = getCurrentAction(state);
  if (!running) {
    return;
  }

  const definition = getActionDefinition(running.actionId);
  const stoppedLocation = getStoppedCharacterLocation(running, getCharacterLocation(state, running.characterId));
  setCharacterLocation(state, running.characterId, stoppedLocation);

  if (stoppedLocation !== "camp") {
    setRunningAction(state, {
      ...running,
      phase: "travelingBack",
      originLocationId: stoppedLocation,
      targetLocationId: "camp",
      locationId: stoppedLocation,
      startedAt: now,
      endsAt: now + getTravelMs(stoppedLocation, "camp"),
      repeat: false
    });
    touch(state, now);
    addLog(
      state,
      `${getCharacterName(state, running.characterId)} stops ${definition?.verb ?? "working"} at ${formatCharacterLocation(stoppedLocation)} and heads back to camp.`,
      "muted",
      now,
      "character"
    );
    return;
  }

  const returnedToCamp = stoppedLocation === "camp" ? depositCarriedResources(state, now, running.characterId) : false;
  clearRunningAction(state, running.characterId);
  touch(state, now);
  addLog(
    state,
    returnedToCamp
      ? `${getCharacterName(state, running.characterId)} stops ${definition?.verb ?? "working"} and returns to camp.`
      : `${getCharacterName(state, running.characterId)} stops ${definition?.verb ?? "working"} at ${formatCharacterLocation(stoppedLocation)}.`,
    "muted",
    now,
    "character"
  );
}

export function depositCarriedResources(
  state: GameState,
  now = Date.now(),
  characterId = state.selectedCharacterId
): boolean {
  if (getCharacterLocation(state, characterId) !== "camp") {
    return false;
  }

  const deposited = depositCharacterResources(state, characterId);
  if (Object.keys(deposited).length <= 0) {
    return false;
  }

  addStackedLog(state, {
    aggregateKey: "deposit:camp",
    text: `${getCharacterName(state, characterId)} returned resources to camp`,
    resources: deposited,
    tone: "gain",
    now,
    scope: "character"
  });
  touch(state, now);
  return true;
}

export function simulateUntil(state: GameState, targetTime = Date.now()): void {
  const cappedTarget = Math.min(targetTime, state.lastSimulatedAt + MAX_OFFLINE_MS);
  syncCurrentAction(state);

  let completedCycles = 0;
  while (completedCycles < 500) {
    const nextCampfireAt = getNextCampfireEventAt(state, cappedTarget);
    const nextRunning = getNextRunningAction(state);
    const nextActionAt = nextRunning?.endsAt ?? Number.POSITIVE_INFINITY;

    if (nextCampfireAt === null && nextActionAt > cappedTarget) {
      break;
    }

    if (nextCampfireAt !== null && nextCampfireAt <= nextActionAt) {
      expireCampfire(state, nextCampfireAt);
      for (const running of [...getCurrentActions(state)]) {
        if (actionNeedsLitCampfire(getActiveActionId(running))) {
          addLog(
            state,
            `${getCharacterName(state, running.characterId)} stops cooking as the campfire goes out.`,
            "warning",
            nextCampfireAt,
            "character"
          );
          clearRunningAction(state, running.characterId);
        }
      }
      continue;
    }

    if (nextRunning && nextActionAt <= cappedTarget) {
      const running = nextRunning;
      const completedAt: number = running.endsAt;
      completeRunningAction(state, running, completedAt, cappedTarget);
      completedCycles += 1;
      continue;
    }

    break;
  }

  if (targetTime > cappedTarget && completedCycles > 0) {
    addLog(state, "The saved trail grows quiet after two hours away.", "muted", cappedTarget, "character");
  }

  state.lastSimulatedAt = targetTime;
  state.updatedAt = targetTime;
  for (const character of state.characters) {
    if (!getCurrentAction(state, character.id)) {
      setCharacterWorking(state, false, character.id);
    }
  }
  syncCurrentAction(state);
}

export function getActionProgress(state: GameState, now = Date.now(), characterId = state.selectedCharacterId): number {
  const running = getCurrentAction(state, characterId);
  if (!running) {
    return 0;
  }

  const total = running.endsAt - running.startedAt;
  return total <= 0 ? 1 : (now - running.startedAt) / total;
}

function completeRunningAction(state: GameState, running: RunningAction, now: number, targetTime: number): void {
  if (running.phase === "travelingTo") {
    addTravelSkillXp(state, running.endsAt - running.startedAt, now);
    setCharacterLocation(state, running.characterId, getRunningTargetLocation(running));
    startWorkingCycle(state, running, now);
    return;
  }

  if (running.phase === "travelingBack") {
    addTravelSkillXp(state, running.endsAt - running.startedAt, now);
    setCharacterLocation(state, running.characterId, "camp");
    depositCarriedResources(state, now, running.characterId);

    if (running.repeat) {
      const nextIndex = getTravelBackNextLoopIndex(running);
      if (startLoopActionAtIndex(state, running, nextIndex, now)) {
        return;
      }
    }

    if (running.repeat && canStartAction(state, running.actionId, now, running.characterId)) {
      startTravelingToLocation(state, running, now);
      return;
    }

    clearRunningAction(state, running.characterId);
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

  completeFishButchering(state, running.characterId, getCharacterName(state, running.characterId), now);
  addActionSkillXp(state, activeActionId, now);
  if (hasCarriedWholeFish(state, running.characterId)) {
    startFollowUpAction(state, running, running.loopIndex ?? 0, now);
    return;
  }

  startTravelingBackToCamp(state, running, targetTime, getNextLoopIndexAfterCompletedAction(running));
}

function completeWorkCycle(state: GameState, running: RunningAction, now: number): void {
  const actionId = getWorkActionId(state, running.actionId, now);
  if (!actionId) {
    addLog(state, `${getCharacterName(state, running.characterId)} lacks the materials to continue.`, "warning", now, "character");
    clearRunningAction(state, running.characterId);
    return;
  }

  const cost = getActionCost(actionId);
  if (!hasCost(state, cost)) {
    addLog(state, `${getCharacterName(state, running.characterId)} lacks the materials to continue.`, "warning", now, "character");
    clearRunningAction(state, running.characterId);
    return;
  }

  payCost(state, cost);
  if (actionId === "butcherFish") {
    completeFishButchering(state, running.characterId, getCharacterName(state, running.characterId), now);
    addActionSkillXp(state, actionId, now);

    if (running.repeat && canStartAction(state, actionId, now, running.characterId)) {
      startWorkingCycle(state, running, now);
      return;
    }

    clearRunningAction(state, running.characterId);
    return;
  }

  const craftedToolId = getCraftedToolId(actionId);
  if (craftedToolId) {
    completeToolCraft(state, running.characterId, getCharacterName(state, running.characterId), craftedToolId, now);
    addActionSkillXp(state, actionId, now);
    if (running.repeat && canStartAction(state, actionId, now, running.characterId)) {
      startWorkingCycle(state, running, now);
      return;
    }

    clearRunningAction(state, running.characterId);
    return;
  }

  const rewards = rollRewards(state, actionId);
  const gatheredResources = isCarryAction(actionId)
    ? addCharacterResources(state, rewards.resources, rewards.resourceCounts, running.characterId)
    : rewards.resources;
  if (isCarryAction(actionId)) {
    addCarryLog(state, running.characterId, actionId, gatheredResources, now);
  } else {
    addResources(state, rewards.resources, rewards.resourceCounts);
    addStackedLog(state, {
      aggregateKey: `action:${running.characterId}:${actionId}`,
      text: getStackedActionText(actionId, getCharacterName(state, running.characterId)),
      resources: rewards.resources,
      tone: rewards.tone,
      now,
      scope: "character"
    });
  }
  applyToolWear(state, actionId, now, getCharacterName(state, running.characterId));
  addActionSkillXp(state, actionId, now);

  if (isCarryAction(actionId) && shouldReturnToCamp(rewards.resources, gatheredResources, state, running.characterId)) {
    const nextIndex = getNextLoopIndex(running);
    if (
      actionId === "fishRiver" &&
      getLoopActionId(running, nextIndex) === "butcherFish" &&
      hasCarriedWholeFish(state, running.characterId)
    ) {
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

  if (running.repeat && canStartAction(state, actionId, now, running.characterId)) {
    startWorkingCycle(state, running, now);
    return;
  }

  clearRunningAction(state, running.characterId);
}

function startWorkingCycle(state: GameState, running: RunningAction, now: number): void {
  const definition = getActionDefinition(running.actionId);
  if (!definition) {
    clearRunningAction(state, running.characterId);
    return;
  }

  const targetLocationId = getRunningTargetLocation(running);
  setCharacterLocation(state, running.characterId, targetLocationId);
  setRunningAction(state, {
    ...running,
    phase: "working",
    originLocationId: targetLocationId,
    targetLocationId,
    locationId: targetLocationId === "camp" ? undefined : targetLocationId,
    startedAt: now,
    endsAt: now + definition.durationMs
  });
}

function startTravelingToLocation(state: GameState, running: RunningAction, now: number): void {
  const targetLocationId = getLoopTargetLocationId(running, running.loopIndex ?? 0);
  const originLocationId = getCharacterLocation(state, running.characterId);
  const travelDuration = getTravelMs(originLocationId, targetLocationId);
  if (travelDuration <= 0) {
    startWorkingCycle(state, { ...running, targetLocationId, locationId: targetLocationId === "camp" ? undefined : targetLocationId }, now);
    return;
  }

  setRunningAction(state, {
    ...running,
    phase: "travelingTo",
    originLocationId,
    targetLocationId,
    locationId: targetLocationId === "camp" ? undefined : targetLocationId,
    startedAt: now,
    endsAt: now + travelDuration
  });
}

function startTravelingBackToCamp(
  state: GameState,
  running: RunningAction,
  now: number,
  nextLoopIndex = getNextLoopIndexAfterCompletedAction(running)
): void {
  const originLocationId = getRunningTargetLocation(running);
  setRunningAction(state, {
    ...running,
    phase: "travelingBack",
    originLocationId,
    targetLocationId: "camp",
    locationId: originLocationId === "camp" ? undefined : originLocationId,
    nextLoopIndex,
    startedAt: now,
    endsAt: now + getTravelMs(originLocationId, "camp")
  });
}

function startFollowUpAction(state: GameState, running: RunningAction, loopIndex: number, now: number): void {
  const actionId = getLoopActionId(running, loopIndex);
  const definition = getActionDefinition(actionId);
  if (!definition) {
    startTravelingBackToCamp(state, running, now, getNextLoopIndexAfterCompletedAction(running));
    return;
  }

  setRunningAction(state, {
    ...running,
    actionId,
    phase: "followUp",
    originLocationId: getRunningTargetLocation(running),
    targetLocationId: getRunningTargetLocation(running),
    loopIndex,
    startedAt: now,
    endsAt: now + definition.durationMs
  });
}

function startLoopActionAtIndex(state: GameState, running: RunningAction, index: number, now: number): boolean {
  const loop = getRunningActionLoop(running);
  if (!loop.length) {
    return false;
  }

  const loopIndex = clampLoopIndex(index, loop);
  const actionId = loop[loopIndex];
  if (actionId === "butcherFish" || !canStartAction(state, actionId, now, running.characterId)) {
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
  setRunningAction(state, {
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
  });
  if (travelDuration <= 0) {
    setCharacterLocation(state, running.characterId, targetLocationId);
  }
  return true;
}

function addCarryLog(state: GameState, characterId: string, actionId: ActionId, resources: Cost, now: number): void {
  if (!Object.values(resources).some((amount) => (amount ?? 0) > 0)) {
    return;
  }

  addStackedLog(state, {
    aggregateKey: `action:${characterId}:${actionId}`,
    text: getStackedActionText(actionId, getCharacterName(state, characterId)),
    resources,
    tone: "gain",
    now,
    scope: "character"
  });
}

function actionNeedsLitCampfire(actionId: ActionId): boolean {
  return actionId === "cookRabbitMeat" || actionId === "cookSquirrelMeat";
}

function getNextCampfireEventAt(state: GameState, cappedTarget: number): number | null {
  const expiresAt = getActiveCampfireExpiresAt(state);
  return expiresAt && expiresAt <= cappedTarget ? expiresAt : null;
}

function shouldReturnToCamp(rewards: Cost, accepted: Cost, state: GameState, characterId: string): boolean {
  const rewardedAmount = Object.values(rewards).reduce((total: number, amount) => total + (amount ?? 0), 0);
  const acceptedAmount = Object.values(accepted).reduce((total: number, amount) => total + (amount ?? 0), 0);
  return (
    getCharacterInventoryWeight(state, characterId) >= getCharacterMaxWeight(state, characterId) ||
    (rewardedAmount > 0 && acceptedAmount < rewardedAmount)
  );
}

function getWorkActionId(state: GameState, actionId: ActionId, now: number): ActionId | null {
  if (actionId === "craftLowestTool") {
    return getLowestQuantityCraftAction(state, now);
  }

  return actionId;
}

export const orderedActionIds = actionDefinitions.map((action) => action.id);
