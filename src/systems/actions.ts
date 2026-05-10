import { actionDefinitions, getActionDefinition } from "../data/actions";
import { getResourceLabel } from "../data/resources";
import type { ActionId, Cost, GameState, LocationId, ResourceId, RunningAction } from "../types";
import {
  CHARACTER_MAX_WEIGHT,
  addCharacterResources,
  addResources,
  depositCharacterResources,
  getCharacterInventoryWeight,
  hasCost,
  payCost
} from "./inventory";
import { addLog, addStackedLog } from "./log";
import { randomInt } from "./math";
import { isActionUnlocked } from "./progression";
import { damageTool, hasUsableTool } from "./tools";

const MAX_OFFLINE_MS = 2 * 60 * 60 * 1000;
const LOCATION_TRAVEL_MS: Record<LocationId, number> = {
  meadow: 10000,
  river: 15000,
  forest: 30000
};

type StartActionOptions = {
  locationId?: LocationId;
};

export function getActionCost(actionId: ActionId): Cost {
  switch (actionId) {
    case "cookRabbitMeat":
      return { rabbitMeat: 1 };
    case "cookSquirrelMeat":
      return { squirrelMeat: 1 };
    case "tanHide":
      return { hide: 1 };
    case "butcherRabbit":
      return { rabbit: 1 };
    case "butcherSquirrel":
      return { squirrel: 1 };
    default:
      return {};
  }
}

export function canStartAction(state: GameState, actionId: ActionId): boolean {
  return isActionUnlocked(state, actionId) && hasCost(state, getActionCost(actionId));
}

export function startAction(
  state: GameState,
  actionId: ActionId,
  now = Date.now(),
  options: StartActionOptions = {}
): boolean {
  const definition = getActionDefinition(actionId);
  if (!definition || !canStartAction(state, actionId)) {
    return false;
  }

  const locationId = isCarryAction(actionId) ? (options.locationId ?? "meadow") : undefined;
  const travelDuration = locationId ? getLocationTravelMs(locationId) : 0;
  state.currentAction = {
    actionId,
    characterId: state.selectedCharacterId,
    phase: locationId ? "travelingTo" : "working",
    locationId,
    startedAt: now,
    endsAt: now + (travelDuration || definition.durationMs),
    repeat: true
  };
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
  state.currentAction = null;
  setCharacterWorking(state, false);
  state.updatedAt = now;
  state.lastSimulatedAt = now;
  addLog(state, `Cameron stops ${definition?.verb ?? "working"}.`, "muted", now);
}

export function simulateUntil(state: GameState, targetTime = Date.now()): void {
  const cappedTarget = Math.min(targetTime, state.lastSimulatedAt + MAX_OFFLINE_MS);

  if (!state.currentAction) {
    state.lastSimulatedAt = targetTime;
    setCharacterWorking(state, false);
    return;
  }

  let completedCycles = 0;
  while (state.currentAction && state.currentAction.endsAt <= cappedTarget && completedCycles < 500) {
    const running = state.currentAction;
    const completedAt: number = running.endsAt;
    completeRunningAction(state, running, completedAt);
    completedCycles += 1;
  }

  if (targetTime > cappedTarget && completedCycles > 0) {
    addLog(state, "The saved trail grows quiet after two hours away.", "muted", cappedTarget);
  }

  state.lastSimulatedAt = targetTime;
  state.updatedAt = targetTime;
}

export function getActionProgress(state: GameState, now = Date.now()): number {
  if (!state.currentAction) {
    return 0;
  }

  const total = state.currentAction.endsAt - state.currentAction.startedAt;
  return total <= 0 ? 1 : (now - state.currentAction.startedAt) / total;
}

function completeRunningAction(state: GameState, running: RunningAction, now: number): void {
  if (running.phase === "travelingTo") {
    startWorkingCycle(state, running, now);
    return;
  }

  if (running.phase === "travelingBack") {
    const deposited = depositCharacterResources(state);
    if (Object.keys(deposited).length > 0) {
      addStackedLog(state, {
        aggregateKey: "deposit:camp",
        text: "Cameron returned resources to camp",
        resources: deposited,
        tone: "gain",
        now
      });
    }

    if (running.repeat && canStartAction(state, running.actionId)) {
      startTravelingToLocation(state, running, now);
      return;
    }

    state.currentAction = null;
    setCharacterWorking(state, false);
    return;
  }

  completeWorkCycle(state, running, now);
}

function completeWorkCycle(state: GameState, running: RunningAction, now: number): void {
  const actionId = running.actionId;
  const cost = getActionCost(actionId);
  if (!hasCost(state, cost)) {
    addLog(state, "Cameron lacks the materials to continue.", "warning", now);
    state.currentAction = null;
    setCharacterWorking(state, false);
    return;
  }

  payCost(state, cost);
  const rewards = rollRewards(state, actionId);
  const gatheredResources = isCarryAction(actionId) ? addCharacterResources(state, rewards.resources) : rewards.resources;
  if (isCarryAction(actionId)) {
    addCarryLog(state, actionId, gatheredResources, now);
  } else {
    addResources(state, rewards.resources);
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
    startTravelingBackToCamp(state, running, now);
    return;
  }

  if (running.repeat && canStartAction(state, actionId)) {
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

  state.currentAction = {
    ...running,
    phase: "working",
    startedAt: now,
    endsAt: now + definition.durationMs
  };
}

function startTravelingToLocation(state: GameState, running: RunningAction, now: number): void {
  const locationId = running.locationId ?? "meadow";
  state.currentAction = {
    ...running,
    phase: "travelingTo",
    locationId,
    startedAt: now,
    endsAt: now + getLocationTravelMs(locationId)
  };
}

function startTravelingBackToCamp(state: GameState, running: RunningAction, now: number): void {
  const locationId = running.locationId ?? "meadow";
  state.currentAction = {
    ...running,
    phase: "travelingBack",
    locationId,
    startedAt: now,
    endsAt: now + getLocationTravelMs(locationId)
  };
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

function isForageAction(actionId: ActionId): boolean {
  return actionId === "gatherSticks" || actionId === "gatherStones" || actionId === "gatherFlaxFibers";
}

function isCarryAction(actionId: ActionId): boolean {
  return isForageAction(actionId) || actionId === "huntSmallAnimals" || actionId === "chopTrees";
}

function shouldReturnToCamp(rewards: Cost, accepted: Cost, state: GameState): boolean {
  const rewardedAmount = Object.values(rewards).reduce((total, amount) => total + (amount ?? 0), 0);
  const acceptedAmount = Object.values(accepted).reduce((total, amount) => total + (amount ?? 0), 0);
  return getCharacterInventoryWeight(state) >= CHARACTER_MAX_WEIGHT || (rewardedAmount > 0 && acceptedAmount < rewardedAmount);
}

function getLocationTravelMs(locationId: LocationId): number {
  return LOCATION_TRAVEL_MS[locationId];
}

function rollRewards(
  state: GameState,
  actionId: ActionId
): { resources: Cost; message: string; tone: "gain" | "craft" } {
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

function huntSmallAnimal(): { resources: Cost; message: string; tone: "gain" } {
  const animal = Math.random() < 0.58 ? "rabbit" : "squirrel";

  return {
    resources: { [animal]: 1 },
    message: `Cameron brings back a ${animal}.`,
    tone: "gain"
  };
}

function butcherAnimal(
  state: GameState,
  animal: "rabbit" | "squirrel"
): { resources: Cost; message: string; tone: "gain" } {
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
    case "chopTrees":
      return "Cameron chopped trees";
    case "huntSmallAnimals":
      return "Cameron hunted small animals";
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

function setCharacterWorking(state: GameState, isWorking: boolean): void {
  const character = state.characters.find((entry) => entry.id === state.selectedCharacterId);
  if (!character) {
    return;
  }

  character.condition = isWorking ? "working" : "resting";
}

export const orderedActionIds = actionDefinitions.map((action) => action.id);
