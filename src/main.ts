import "./style.css";
import { loadGame, resetSave, saveGame } from "./systems/persistence";
import { getActionProgress, simulateUntil } from "./systems/actions";
import { formatDuration } from "./systems/math";
import { createRenderer } from "./ui/render";
import { WildernessCanvas } from "./ui/wildernessCanvas";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root was not found.");
}

let state = loadGame();
let wilderness: WildernessCanvas | null = null;
let wildernessCanvas: HTMLCanvasElement | null = null;

const render = createRenderer(app, {
  requestRender: () => draw(),
  persist: () => saveGame(state),
  reset: () => {
    state = resetSave();
    draw();
  }
});

function draw(): void {
  render(state);
  const canvas = document.querySelector<HTMLCanvasElement>("#wilderness-canvas");
  if (canvas && canvas !== wildernessCanvas) {
    wilderness?.stop();
    wildernessCanvas = canvas;
    wilderness = new WildernessCanvas(canvas);
    wilderness.start();
  }

  wilderness?.setState(state);
}

function tick(): void {
  const beforeSignature = getRenderSignature();
  simulateUntil(state);
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
    tools: state.tools,
    buildings: state.buildings,
    seenResources: state.seenResources,
    currentAction: state.currentAction
      ? {
          actionId: state.currentAction.actionId,
          phase: state.currentAction.phase,
          locationId: state.currentAction.locationId,
          loopActionIds: state.currentAction.loopActionIds,
          loopLocationIds: state.currentAction.loopLocationIds,
          loopIndex: state.currentAction.loopIndex,
          nextLoopIndex: state.currentAction.nextLoopIndex,
          followUpActionId: state.currentAction.followUpActionId,
          startedAt: state.currentAction.startedAt,
          endsAt: state.currentAction.endsAt
        }
      : null,
    logHead: state.log[0]?.id ?? "",
    logLength: state.log.length
  });
}

function updateLiveActionIndicators(): void {
  if (!state.currentAction) {
    return;
  }

  const progress = Math.min(1, Math.max(0, getActionProgress(state)));
  const progressElement = document.querySelector<HTMLElement>("[data-action-progress]");
  const remainingElement = document.querySelector<HTMLElement>("[data-action-remaining]");

  if (progressElement) {
    progressElement.style.transform = `scaleX(${progress.toFixed(4)})`;
  }

  if (remainingElement) {
    remainingElement.textContent = formatDuration(state.currentAction.endsAt - Date.now());
  }
}

function animateLiveActionIndicators(): void {
  updateLiveActionIndicators();
  window.requestAnimationFrame(animateLiveActionIndicators);
}

window.requestAnimationFrame(animateLiveActionIndicators);
