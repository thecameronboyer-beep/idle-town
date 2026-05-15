import "./style.css";
import { loadGame, resetSave, saveGame } from "./systems/persistence";
import { getActionProgress, getCurrentAction, getCurrentActions, simulateUntil } from "./systems/actions";
import { simulateCombatUntil } from "./systems/combat";
import { discoverCookingRecipes, getActiveCookingEntry, getCookingProgress, simulateCookingUntil } from "./systems/cooking";
import {
  setTestRewardMultiplier as setGlobalTestRewardMultiplier,
  type TestRewardMultiplier
} from "./systems/debugModifiers";
import { formatDuration } from "./systems/math";
import { createRenderer } from "./ui/render";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root was not found.");
}

let state = loadGame();
let testRewardMultiplier: TestRewardMultiplier = 1;
let gameNow = Math.max(Date.now(), state.lastSimulatedAt);
let lastRealClockAt = Date.now();

const render = createRenderer(app, {
  requestRender: () => draw(),
  persist: () => saveGame(state),
  reset: () => {
    resetGameClock();
    state = resetSave();
    draw();
  },
  getNow: () => syncGameClock(),
  getTestRewardMultiplier: () => testRewardMultiplier,
  setTestRewardMultiplier: (multiplier) => {
    testRewardMultiplier = testRewardMultiplier === multiplier ? 1 : multiplier;
    setGlobalTestRewardMultiplier(testRewardMultiplier);
  }
});

function draw(): void {
  const now = syncGameClock();
  render(state, now);
}

function tick(): void {
  const now = syncGameClock();
  const beforeSignature = getRenderSignature();
  simulateUntil(state, now);
  discoverCookingRecipes(state);
  simulateCookingUntil(state, now);
  simulateCombatUntil(state, now);
  const afterSignature = getRenderSignature();

  if (beforeSignature !== afterSignature) {
    draw();
    return;
  }

  updateLiveActionIndicators();
}

draw();
registerServiceWorker();
window.setInterval(tick, 1000);
window.setInterval(() => saveGame(state), 2000);
window.addEventListener("beforeunload", () => saveGame(state));

function registerServiceWorker(): void {
  if (!("serviceWorker" in navigator) || !import.meta.env.PROD) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}service-worker.js`).catch(() => {
      // The app still runs normally if the browser blocks service workers.
    });
  });
}

function getRenderSignature(): string {
  return JSON.stringify({
    inventory: state.inventory,
    characterInventory: state.characterInventory,
    resourceCounts: state.resourceCounts,
    characterResourceCounts: state.characterResourceCounts,
    characters: state.characters.map((character) => ({
      id: character.id,
      condition: character.condition,
      locationId: character.locationId,
      needs: character.needs,
      actionLoopId: character.actionLoopId,
      combat: character.combat,
      classProgress: character.classProgress,
      inventory: character.inventory,
      resourceCounts: character.resourceCounts
    })),
    tools: state.tools,
    buildings: state.buildings,
    buildingCounts: state.buildingCounts,
    campfireExpiresAt: state.campfireExpiresAt,
    seenResources: state.seenResources,
    skills: state.skills,
    cooking: state.cooking,
    combat: state.combat,
    actionLoops: state.actionLoops,
    currentActions: getCurrentActions(state).map((action) => ({
      actionId: action.actionId,
      characterId: action.characterId,
      phase: action.phase,
      originLocationId: action.originLocationId,
      targetLocationId: action.targetLocationId,
      locationId: action.locationId,
      loopActionIds: action.loopActionIds,
      loopLocationIds: action.loopLocationIds,
      loopIndex: action.loopIndex,
      nextLoopIndex: action.nextLoopIndex,
      followUpActionId: action.followUpActionId,
      startedAt: action.startedAt,
      endsAt: action.endsAt
    })),
    logHead: state.log[0]?.id ?? "",
    logLength: state.log.length
  });
}

function updateLiveActionIndicators(): void {
  const now = syncGameClock();
  updateLiveCampfireIndicators(now);

  const progressElement = document.querySelector<HTMLElement>("[data-action-progress]");
  const remainingElement = document.querySelector<HTMLElement>("[data-action-remaining]");
  const smithingProgressElement = document.querySelector<HTMLElement>("[data-smithing-action-progress]");
  const smithingRemainingElement = document.querySelector<HTMLElement>("[data-smithing-action-remaining]");
  const textileProgressElement = document.querySelector<HTMLElement>("[data-textile-action-progress]");
  const textileRemainingElement = document.querySelector<HTMLElement>("[data-textile-action-remaining]");
  const cookingProgressElement = document.querySelector<HTMLElement>("[data-cooking-action-progress]");
  const cookingRemainingElement = document.querySelector<HTMLElement>("[data-cooking-action-remaining]");
  const running = getCurrentAction(state);

  if (running) {
    const progress = Math.min(1, Math.max(0, getActionProgress(state, now)));

    if (progressElement) {
      progressElement.style.transform = `scaleX(${progress.toFixed(4)})`;
    }

    if (remainingElement) {
      remainingElement.textContent = formatDuration(running.endsAt - now);
    }

    if (smithingProgressElement) {
      smithingProgressElement.style.transform = `scaleX(${progress.toFixed(4)})`;
    }

    if (smithingRemainingElement) {
      smithingRemainingElement.textContent = formatDuration(running.endsAt - now);
    }

    if (textileProgressElement) {
      textileProgressElement.style.transform = `scaleX(${progress.toFixed(4)})`;
    }

    if (textileRemainingElement) {
      textileRemainingElement.textContent = formatDuration(running.endsAt - now);
    }
  }

  const activeCooking = getActiveCookingEntry(state);
  if (activeCooking) {
    const cookingProgress = getCookingProgress(activeCooking, now);
    if (cookingProgressElement) {
      cookingProgressElement.style.transform = `scaleX(${cookingProgress.toFixed(4)})`;
    }

    if (cookingRemainingElement) {
      cookingRemainingElement.textContent = formatDuration((activeCooking.endsAt ?? now) - now);
    }
  }
}

function updateLiveCampfireIndicators(now: number): void {
  const remainingElements = document.querySelectorAll<HTMLElement>("[data-campfire-remaining]");
  if (!remainingElements.length || !state.campfireExpiresAt) {
    return;
  }

  for (const element of remainingElements) {
    element.textContent = formatDuration(state.campfireExpiresAt - now);
  }
}

function syncGameClock(): number {
  const realNow = Date.now();
  const elapsed = Math.max(0, realNow - lastRealClockAt);
  gameNow += elapsed;
  lastRealClockAt = realNow;
  return gameNow;
}

function resetGameClock(): void {
  const now = Date.now();
  gameNow = now;
  lastRealClockAt = now;
}

function animateLiveActionIndicators(): void {
  updateLiveActionIndicators();
  window.requestAnimationFrame(animateLiveActionIndicators);
}

window.requestAnimationFrame(animateLiveActionIndicators);
