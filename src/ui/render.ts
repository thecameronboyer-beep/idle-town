import { getActionDefinition } from "../data/actions";
import { buildingDefinitions, toolDefinitions } from "../data/craftables";
import {
  formatResourceAmount,
  getResourceLabel,
  isWholeCountResource,
  isWeightedResource,
  resourceDefinitions,
  resourceOrder
} from "../data/resources";
import boneIconUrl from "../assets/items/bone-icon.png";
import brookSticklebackIconUrl from "../assets/items/brook-stickleback-icon.png";
import basketEmptySlotUrl from "../assets/items/basket-empty-slot.png";
import basketEquippedSlotUrl from "../assets/items/basket-equipped-slot.png";
import campfireLitUrl from "../assets/buildings/campfire-2x2.png";
import campfireUnlitUrl from "../assets/buildings/campfire-unlit-2x2.png";
import coalIconUrl from "../assets/items/coal-icon.png";
import copperIconUrl from "../assets/items/copper-icon.png";
import craftMaterialsBundleButtonUrl from "../assets/items/craft-materials-bundle-button.png";
import fishFiletIconUrl from "../assets/items/fish-filet-icon.png";
import fishingPoleEmptySlotUrl from "../assets/items/fishing-pole-empty-slot.png";
import fishingPoleEquippedSlotUrl from "../assets/items/fishing-pole-equipped-slot.png";
import flaxFiberIconUrl from "../assets/items/flax-fiber-icon.png";
import forestLocationIconUrl from "../assets/locations/forest-location-icon.png";
import berryIconUrl from "../assets/items/berry-icon.png";
import hideIconUrl from "../assets/items/hide-icon.png";
import meadowLocationIconUrl from "../assets/locations/meadow-location-icon-v2.png";
import mineLocationIconUrl from "../assets/locations/mine-location-icon.png";
import minnowIconUrl from "../assets/items/minnow-icon.png";
import mudskipperIconUrl from "../assets/items/mudskipper-icon.png";
import mushroomIconUrl from "../assets/items/mushroom-icon.png";
import pebblePerchIconUrl from "../assets/items/pebble-perch-icon.png";
import rabbitIconUrl from "../assets/items/rabbit-icon.png";
import riverLocationIconUrl from "../assets/locations/river-location-icon-v2.png";
import squirrelIconUrl from "../assets/items/squirrel-icon.png";
import stickIconUrl from "../assets/items/stick-icon.png";
import stoneAxeEmptySlotUrl from "../assets/items/stone-axe-empty-slot.png";
import stoneAxeEquippedSlotUrl from "../assets/items/stone-axe-equipped-slot.png";
import stoneKnifeEquippedSlotUrl from "../assets/items/stone-knife-equipped-slot.png";
import stoneKnifeEmptySlotUrl from "../assets/items/stone-knife-empty-slot.png";
import stonePickAxeEmptySlotUrl from "../assets/items/stone-pick-axe-empty-slot.png";
import stonePickAxeEquippedSlotUrl from "../assets/items/stone-pick-axe-equipped-slot.png";
import stoneSpearEmptySlotUrl from "../assets/items/stone-spear-empty-slot.png";
import stoneSpearEquippedSlotUrl from "../assets/items/stone-spear-equipped-slot.png";
import stoneIconUrl from "../assets/items/stone-icon.png";
import stoneLoachIconUrl from "../assets/items/stone-loach-icon.png";
import tinIconUrl from "../assets/items/tin-icon.png";
import hideTentUrl from "../assets/buildings/hide-tent-2x2.png";
import tanningRackUrl from "../assets/buildings/tanning-rack-2x2.png";
import woodIconUrl from "../assets/items/wood-icon.png";
import { getCampfireRemainingMs, isCampfireLit } from "../systems/buildings";
import { buildStructure, getMissingCostText } from "../systems/crafting";
import {
  describeCost,
  getCharacterInventoryWeight,
  getCharacterMaxWeight,
  getResourceQuantity,
  hasCost
} from "../systems/inventory";
import { clamp, formatDuration } from "../systems/math";
import {
  canInsertActionInLoop,
  getLowestQuantityCraftAction,
  canStartAction,
  depositCarriedResources,
  getActionCost,
  getActionProgress,
  getRunningActionLoop,
  insertActionInLoop,
  removeActionFromLoop,
  startAction,
  stopAction
} from "../systems/actions";
import { getActionLockReason, isActionUnlocked, isBuildingVisible } from "../systems/progression";
import { getMaxToolDurability } from "../systems/tools";
import type { ActionId, BuildingId, GameState, Inventory, LocationId, LogEntry, ResourceId, ToolId } from "../types";

type ActionFilterId =
  | "crafting"
  | "foraging"
  | "mining"
  | "fishing"
  | "woodcutting"
  | "hunting"
  | "butchering"
  | "cooking"
  | "leatherworking";

type ActionFilter = {
  id: ActionFilterId;
  label: string;
  actionIds?: ActionId[];
};

type ActionCategoryId = "gather" | "processing" | "camp";

type ActionCategory = {
  id: ActionCategoryId;
  label: string;
  filterIds: ActionFilterId[];
};

type SidePanelId = "inventory" | "equipment";
type InventorySource = "camp" | "character";
type ActionLoopTarget = { afterIndex: number } | null;

type EquipmentStat = {
  label: string;
  value: string;
};

type ActionTooltipRow = {
  label: string;
  value: string;
};

type LocationDefinition = {
  id: LocationId;
  label: string;
  iconUrl: string;
  actionIds: ActionId[];
};

const actionFilters: ActionFilter[] = [
  {
    id: "foraging",
    label: "Forage",
    actionIds: ["gatherSticks", "gatherStones", "gatherFlaxFibers", "gatherMushrooms", "gatherBerries"]
  },
  {
    id: "fishing",
    label: "Fishing",
    actionIds: ["fishRiver"]
  },
  {
    id: "mining",
    label: "Mining",
    actionIds: ["mineCoal", "mineCopper", "mineTin"]
  },
  {
    id: "hunting",
    label: "Hunting",
    actionIds: ["huntSmallAnimals"]
  },
  {
    id: "woodcutting",
    label: "Woodcutting",
    actionIds: ["chopTrees"]
  },
  {
    id: "crafting",
    label: "Crafting",
    actionIds: [
      "craftLowestTool",
      "craftBasket",
      "craftFishingPole",
      "craftStoneKnife",
      "craftStoneAxe",
      "craftStonePickAxe",
      "craftStoneSpear"
    ]
  },
  {
    id: "butchering",
    label: "Butchering",
    actionIds: ["butcherFish", "butcherRabbit", "butcherSquirrel"]
  },
  {
    id: "cooking",
    label: "Cooking",
    actionIds: ["cookRabbitMeat", "cookSquirrelMeat"]
  },
  {
    id: "leatherworking",
    label: "Leatherworking",
    actionIds: ["tanHide"]
  }
];

const actionCategories: ActionCategory[] = [
  {
    id: "gather",
    label: "Gather",
    filterIds: ["foraging", "mining", "fishing", "hunting", "woodcutting"]
  },
  {
    id: "processing",
    label: "Processing",
    filterIds: ["crafting", "butchering", "cooking", "leatherworking"]
  },
  {
    id: "camp",
    label: "Camp",
    filterIds: []
  }
];

const locationDefinitions: LocationDefinition[] = [
  {
    id: "meadow",
    label: "Meadow",
    iconUrl: meadowLocationIconUrl,
    actionIds: ["gatherSticks", "gatherStones", "gatherMushrooms", "gatherBerries"]
  },
  {
    id: "river",
    label: "River",
    iconUrl: riverLocationIconUrl,
    actionIds: ["gatherStones", "gatherFlaxFibers"]
  },
  {
    id: "forest",
    label: "Forest",
    iconUrl: forestLocationIconUrl,
    actionIds: ["chopTrees"]
  },
  {
    id: "mine",
    label: "Mine",
    iconUrl: mineLocationIconUrl,
    actionIds: ["mineCoal", "mineCopper", "mineTin"]
  }
];

const EQUIPMENT_SLOT_COUNT = 10;
const equipmentToolSlots: Array<ToolId | null> = [
  "fishingPole",
  "stoneKnife",
  "stoneAxe",
  "stonePickAxe",
  "stoneSpear",
  "basket",
  null,
  null,
  null,
  null
];
const equippedSlotImages: Partial<Record<ToolId, string>> = {
  basket: basketEquippedSlotUrl,
  fishingPole: fishingPoleEquippedSlotUrl,
  stoneKnife: stoneKnifeEquippedSlotUrl,
  stoneAxe: stoneAxeEquippedSlotUrl,
  stonePickAxe: stonePickAxeEquippedSlotUrl,
  stoneSpear: stoneSpearEquippedSlotUrl
};
const emptySlotImages: Partial<Record<ToolId, string>> = {
  basket: basketEmptySlotUrl,
  fishingPole: fishingPoleEmptySlotUrl,
  stoneKnife: stoneKnifeEmptySlotUrl,
  stoneAxe: stoneAxeEmptySlotUrl,
  stonePickAxe: stonePickAxeEmptySlotUrl,
  stoneSpear: stoneSpearEmptySlotUrl
};
const emptySlotLabels: Partial<Record<ToolId, string>> = {
  basket: "Basket",
  fishingPole: "Pole",
  stoneKnife: "Knife",
  stoneAxe: "Axe",
  stonePickAxe: "Pick",
  stoneSpear: "Spear"
};

const resourceSlotImages: Partial<Record<ResourceId, string>> = {
  berry: berryIconUrl,
  bone: boneIconUrl,
  brookStickleback: brookSticklebackIconUrl,
  brookSticklebackFilet: fishFiletIconUrl,
  coal: coalIconUrl,
  copper: copperIconUrl,
  minnowFilet: fishFiletIconUrl,
  mudskipperFilet: fishFiletIconUrl,
  pebblePerchFilet: fishFiletIconUrl,
  stoneLoachFilet: fishFiletIconUrl,
  flaxFiber: flaxFiberIconUrl,
  hide: hideIconUrl,
  minnow: minnowIconUrl,
  mudskipper: mudskipperIconUrl,
  mushroom: mushroomIconUrl,
  pebblePerch: pebblePerchIconUrl,
  rabbit: rabbitIconUrl,
  squirrel: squirrelIconUrl,
  stick: stickIconUrl,
  stone: stoneIconUrl,
  stoneLoach: stoneLoachIconUrl,
  tin: tinIconUrl,
  wood: woodIconUrl
};

const toolEquipmentStats: Record<ToolId, EquipmentStat[]> = {
  basket: [
    { label: "Slot", value: "Carry tool" },
    { label: "Effect", value: "+5 lb carry capacity" },
    { label: "Capacity", value: "15 lb equipped" }
  ],
  fishingPole: [
    { label: "Slot", value: "Fishing tool" },
    { label: "Effect", value: "Fishing River unlocked" },
    { label: "Use", value: "River fishing" }
  ],
  stoneKnife: [
    { label: "Slot", value: "Butchering tool" },
    { label: "Unlocks", value: "Hide and bone recovery" },
    { label: "Use", value: "Butchering small animals" }
  ],
  stoneAxe: [
    { label: "Slot", value: "Woodcutting tool" },
    { label: "Effect", value: "Chop Trees unlocked" },
    { label: "Wood yield", value: "2-4" }
  ],
  stonePickAxe: [
    { label: "Slot", value: "Mining tool" },
    { label: "Effect", value: "Future mining work" },
    { label: "Use", value: "Breaking stone" }
  ],
  stoneSpear: [
    { label: "Slot", value: "Hunting tool" },
    { label: "Effect", value: "Hunt Small Animals unlocked" },
    { label: "Targets", value: "Rabbit, Squirrel" }
  ]
};

type RenderHandlers = {
  requestRender: () => void;
  persist: () => void;
  reset: () => void;
  getNow: () => number;
  getTestSpeedMultiplier: () => number;
  toggleTestSpeed: () => void;
};

export function createRenderer(root: HTMLElement, handlers: RenderHandlers): (state: GameState, now?: number) => void {
  let activeActionCategory: ActionCategoryId = "gather";
  let activeActionFilter: ActionFilterId = "foraging";
  let activeLocation: LocationId = "meadow";
  let activeSidePanel: SidePanelId = "inventory";
  let campLogVisible = false;
  let actionLoopTarget: ActionLoopTarget = null;
  let selectedLoopIndex = 0;
  let currentState: GameState | null = null;
  let activeTooltipSlot: HTMLElement | null = null;

  root.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>("[data-command]");
    if (!button || button.disabled || button.dataset.disabled === "true") {
      return;
    }

    const command = button.dataset.command;
    const id = button.dataset.id;
    const state = currentState;
    if (!state) {
      return;
    }

    if (command === "toggle-test-speed") {
      handlers.toggleTestSpeed();
      handlers.requestRender();
      return;
    }

    if (command === "set-action-category" && isActionCategoryId(id)) {
      activeActionCategory = id;
      const categoryFilters = getCategoryFilters(activeActionCategory);
      if (categoryFilters.length && !categoryFilters.some((filter) => filter.id === activeActionFilter)) {
        activeActionFilter = categoryFilters[0]?.id ?? activeActionFilter;
      }
      handlers.requestRender();
      return;
    }

    if (command === "set-action-filter" && isActionFilterId(id)) {
      activeActionFilter = id;
      handlers.requestRender();
      return;
    }

    if (command === "set-location" && isLocationId(id)) {
      activeLocation = id;
      handlers.requestRender();
      return;
    }

    if (command === "set-side-panel" && isSidePanelId(id)) {
      activeSidePanel = id;
      handlers.requestRender();
      return;
    }

    if (command === "toggle-camp-log") {
      campLogVisible = !campLogVisible;
      handlers.requestRender();
      return;
    }

    if (command === "select-loop-step") {
      selectedLoopIndex = getLoopIndex(id, selectedLoopIndex);
      actionLoopTarget = null;
      handlers.requestRender();
      return;
    }

    if (command === "insert-loop-after") {
      selectedLoopIndex = getLoopIndex(id, selectedLoopIndex);
      actionLoopTarget = { afterIndex: selectedLoopIndex };
      handlers.requestRender();
      return;
    }

    if (command === "remove-loop-step") {
      selectedLoopIndex = removeActionFromLoop(state, getLoopIndex(id, selectedLoopIndex), handlers.getNow());
      actionLoopTarget = null;
    }

    if (command === "start-action" && id) {
      const actionId = id as ActionId;
      const now = handlers.getNow();
      if (actionLoopTarget) {
        if (
          insertActionInLoop(
            state,
            actionLoopTarget.afterIndex,
            actionId,
            { locationId: getActionStartLocation(actionId, activeLocation) },
            now
          )
        ) {
          selectedLoopIndex = actionLoopTarget.afterIndex + 1;
          actionLoopTarget = null;
        }
        handlers.persist();
        handlers.requestRender();
        return;
      }

      actionLoopTarget = null;
      startAction(state, actionId, now, { locationId: getActionStartLocation(actionId, activeLocation) });
    }

    if (command === "stop-action") {
      actionLoopTarget = null;
      stopAction(state, handlers.getNow());
    }

    if (command === "deposit-carried") {
      if (!state.currentAction) {
        depositCarriedResources(state, handlers.getNow());
      }
    }

    if (command === "build-structure" && id) {
      buildStructure(state, id as BuildingId, handlers.getNow());
    }

    if (command === "reset") {
      handlers.reset();
      return;
    }

    handlers.persist();
    handlers.requestRender();
  });

  root.addEventListener("pointerover", (event) => {
    const slot = getTooltipSlot(event.target, root);
    if (slot) {
      activeTooltipSlot = slot;
      showFloatingTooltip(root, slot);
    }
  });

  root.addEventListener("pointerout", (event) => {
    if (!activeTooltipSlot) {
      return;
    }

    const nextTarget = event.relatedTarget instanceof Node ? event.relatedTarget : null;
    if (!nextTarget || !activeTooltipSlot.contains(nextTarget)) {
      activeTooltipSlot = null;
      hideFloatingTooltip(root);
    }
  });

  root.addEventListener("focusin", (event) => {
    const slot = getTooltipSlot(event.target, root);
    if (slot) {
      activeTooltipSlot = slot;
      showFloatingTooltip(root, slot);
    }
  });

  root.addEventListener("focusout", (event) => {
    if (!activeTooltipSlot) {
      return;
    }

    const nextTarget = event.relatedTarget instanceof Node ? event.relatedTarget : null;
    if (!nextTarget || !activeTooltipSlot.contains(nextTarget)) {
      activeTooltipSlot = null;
      hideFloatingTooltip(root);
    }
  });

  root.addEventListener(
    "scroll",
    () => {
      if (activeTooltipSlot?.isConnected) {
        positionFloatingTooltip(root, activeTooltipSlot);
      }
    },
    true
  );

  window.addEventListener("resize", () => {
    if (activeTooltipSlot?.isConnected) {
      positionFloatingTooltip(root, activeTooltipSlot);
    }
  });

  return (state: GameState, now = handlers.getNow()) => {
    currentState = state;
    const scrollPositions = captureScrollPositions(root);
    const wildernessCanvas = root.querySelector<HTMLCanvasElement>("#wilderness-canvas");
    root.innerHTML = renderApp(
      state,
      activeActionFilter,
      activeActionCategory,
      activeSidePanel,
      activeLocation,
      campLogVisible,
      actionLoopTarget,
      selectedLoopIndex,
      now,
      handlers.getTestSpeedMultiplier()
    );
    restoreWildernessCanvas(root, wildernessCanvas);
    activeTooltipSlot = null;
    restoreScrollPositions(root, scrollPositions);
  };
}

function restoreWildernessCanvas(root: HTMLElement, canvas: HTMLCanvasElement | null): void {
  if (!canvas) {
    return;
  }

  const freshCanvas = root.querySelector<HTMLCanvasElement>("#wilderness-canvas");
  freshCanvas?.replaceWith(canvas);
}

function renderApp(
  state: GameState,
  activeActionFilter: ActionFilterId,
  activeActionCategory: ActionCategoryId,
  activeSidePanel: SidePanelId,
  activeLocation: LocationId,
  campLogVisible: boolean,
  actionLoopTarget: ActionLoopTarget,
  selectedLoopIndex: number,
  now: number,
  testSpeedMultiplier: number
): string {
  return `
    <div class="game-shell">
      ${renderCharacterSidebar(state, activeActionCategory, campLogVisible, testSpeedMultiplier)}
      <main class="main-panel">
        ${renderWorldPanel(state, actionLoopTarget, selectedLoopIndex, now)}
        ${campLogVisible ? renderMainLogPanel(state) : renderWorkArea(state, activeActionCategory, activeActionFilter, activeLocation, actionLoopTarget, now)}
      </main>
      ${renderSidePanel(state, activeSidePanel)}
    </div>
    <div class="tooltip-layer" aria-hidden="true"></div>
  `;
}

function renderCharacterSidebar(
  state: GameState,
  activeActionCategory: ActionCategoryId,
  campLogVisible: boolean,
  testSpeedMultiplier: number
): string {
  const cameron = state.characters[0];
  const condition = state.currentAction ? getRunningActionStatus(state) : "keeping still";

  return `
    <aside class="character-sidebar panel">
      <div class="brand-block">
        <div class="kicker">Idle Town</div>
        <div class="brand-heading">
          <h1>First Fire</h1>
          ${renderTestSpeedButton(testSpeedMultiplier)}
        </div>
      </div>
      <button class="character-card selected" type="button">
        <span class="portrait" aria-hidden="true">C</span>
        <span>
          <strong>${cameron.name}</strong>
          <small>${condition}</small>
        </span>
        </button>
          <nav class="sidebar-actions" aria-label="Action filters">
            <div class="category-buttons">
              ${actionCategories
                .map((category) => renderCategoryButton(category, activeActionCategory))
                .join("")}
              ${renderMapLink()}
            </div>
          </nav>
          <div class="sidebar-footer">
            ${renderCampLogToggle(campLogVisible)}
            <button class="ghost-button" type="button" data-command="reset">Reset</button>
          </div>
    </aside>
  `;
}

function renderTestSpeedButton(testSpeedMultiplier: number): string {
  const active = testSpeedMultiplier === 10;

  return `
    <button
      class="test-speed-button ${active ? "active" : ""}"
      type="button"
      data-command="toggle-test-speed"
      aria-pressed="${active}"
      title="Toggle 10x test speed"
    >
      10x
    </button>
  `;
}

function renderMainLogPanel(state: GameState): string {
  return `
    <div class="work-area single-panel">
      ${renderLog(state, "main-log-panel panel")}
    </div>
  `;
}

function renderCategoryButton(category: ActionCategory, activeActionCategory: ActionCategoryId): string {
  const active = category.id === activeActionCategory;

  return `
    <button
      class="category-button ${active ? "active" : ""}"
      type="button"
      data-command="set-action-category"
      data-id="${category.id}"
      aria-pressed="${active}"
    >
      <span>${category.label}</span>
    </button>
  `;
}

function renderMapLink(): string {
  return `
    <a class="category-button map-link" href="${import.meta.env.BASE_URL}location-map.html" aria-label="Open map">
      <span>Map</span>
    </a>
  `;
}

function renderWorkArea(
  state: GameState,
  activeActionCategory: ActionCategoryId,
  activeActionFilter: ActionFilterId,
  activeLocation: LocationId,
  actionLoopTarget: ActionLoopTarget,
  now: number
): string {
  if (activeActionCategory === "camp") {
    return `
      <div class="work-area single-panel">
        ${renderBuildingPanel(state, now)}
      </div>
    `;
  }

  return `
      <div class="work-area">
      ${renderActionCategoryPanel(state, activeActionCategory, activeActionFilter)}
      ${renderActionStack(state, activeActionFilter, activeLocation, actionLoopTarget)}
    </div>
  `;
}

function renderActionStack(
  state: GameState,
  activeActionFilter: ActionFilterId,
  activeLocation: LocationId,
  actionLoopTarget: ActionLoopTarget
): string {
  const filter = getActionFilter(activeActionFilter);

  return `
    <div class="action-stack">
      ${hasLocationPanel(filter.id) ? renderLocationPanel(filter, activeLocation) : ""}
      ${renderActionPanel(state, activeActionFilter, activeLocation, actionLoopTarget)}
    </div>
  `;
}

function renderActionCategoryPanel(
  state: GameState,
  activeActionCategory: ActionCategoryId,
  activeActionFilter: ActionFilterId
): string {
  const filters = getCategoryFilters(activeActionCategory);

  return `
    <section class="panel skill-panel">
      <div class="skill-grid">
        ${filters.map((filter) => renderSkillButton(state, filter, activeActionFilter)).join("")}
      </div>
    </section>
  `;
}

function renderSkillButton(state: GameState, filter: ActionFilter, activeActionFilter: ActionFilterId): string {
  const active = filter.id === activeActionFilter;
  const currentActionLabel = getCurrentActionLabel(state, filter.actionIds ?? []);

  return `
    <button
      class="skill-button ${active ? "active" : ""} ${currentActionLabel ? "current" : ""}"
      type="button"
      data-command="set-action-filter"
      data-id="${filter.id}"
      aria-pressed="${active}"
    >
      <span>${filter.label}</span>
      ${currentActionLabel ? `<small>${currentActionLabel}</small>` : ""}
    </button>
  `;
}

function renderWorldPanel(state: GameState, actionLoopTarget: ActionLoopTarget, selectedLoopIndex: number, now: number): string {
  return `
    <section class="world-panel panel">
      <canvas id="wilderness-canvas" class="wilderness-canvas" aria-label="A primitive forest camp"></canvas>
      ${renderCurrentActionPanel(state, actionLoopTarget, selectedLoopIndex, now)}
    </section>
  `;
}

function renderActionPanel(
  state: GameState,
  activeActionFilter: ActionFilterId,
  activeLocation: LocationId,
  actionLoopTarget: ActionLoopTarget
): string {
  const filter = getActionFilter(activeActionFilter);
  const actionIds =
    filter.id === "foraging" || filter.id === "woodcutting"
      ? getLocation(activeLocation, filter.id).actionIds
      : (filter.actionIds ?? []);

  if (filter.id === "crafting") {
    return renderCraftingActionPanel(state, actionIds, actionLoopTarget);
  }

  return `
      <section class="action-panel">
        <div class="action-grid">
          ${actionIds.map((actionId) => renderActionCard(state, actionId, actionLoopTarget)).join("")}
        </div>
    </section>
  `;
}

function renderCraftingActionPanel(
  state: GameState,
  actionIds: ActionId[],
  actionLoopTarget: ActionLoopTarget
): string {
  const quickCraftActionId: ActionId = "craftLowestTool";
  const craftActionIds = actionIds.filter((actionId) => actionId !== quickCraftActionId);

  return `
    <section class="action-panel crafting-action-panel">
      <div class="crafting-card">
        ${renderCraftLowestCard(state, quickCraftActionId, actionLoopTarget)}
        <div class="crafting-action-grid">
          ${craftActionIds.map((actionId) => renderActionCard(state, actionId, actionLoopTarget)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCurrentActionPanel(
  state: GameState,
  actionLoopTarget: ActionLoopTarget,
  selectedLoopIndex: number,
  now: number
): string {
  if (!state.currentAction) {
    return `
      <section class="current-action-panel idle">
        <div class="current-action-content idle">
          <strong>No active work</strong>
          <span>Choose a task for Cameron.</span>
        </div>
      </section>
    `;
  }

  const progress = clamp(getActionProgress(state, now), 0, 1);
  const remaining = formatDuration(state.currentAction.endsAt - now);

  return `
    <section class="current-action-panel">
      <div class="current-action-content">
        <div class="current-action-copy">
          <strong>${getRunningActionTitle(state)}</strong>
        </div>
        <button class="icon-button" type="button" data-command="stop-action" title="Stop action">Stop</button>
        <div class="action-loop-stack">
          ${renderActionLoopControls(state, actionLoopTarget, selectedLoopIndex)}
        </div>
        <div class="progress-track">
          <span data-action-progress style="transform: scaleX(${progress.toFixed(4)})"></span>
          <em data-action-remaining>${remaining}</em>
        </div>
      </div>
    </section>
  `;
}

function renderActionLoopControls(
  state: GameState,
  actionLoopTarget: ActionLoopTarget,
  selectedLoopIndex: number
): string {
  const running = state.currentAction;
  if (!running) {
    return "";
  }

  const loop = getRunningActionLoop(running);
  const safeSelectedIndex = Math.min(loop.length - 1, Math.max(0, selectedLoopIndex));

  return `
    <div class="action-loop-controls" aria-label="Action loop">
      <span class="action-loop-label">action loop</span>
      ${loop.map((actionId, index) => renderActionLoopStep(actionId, index, safeSelectedIndex, actionLoopTarget, loop.length)).join("")}
    </div>
  `;
}

function renderActionLoopStep(
  actionId: ActionId,
  index: number,
  selectedLoopIndex: number,
  actionLoopTarget: ActionLoopTarget,
  loopLength: number
): string {
  const selected = index === selectedLoopIndex;
  const assigning = actionLoopTarget?.afterIndex === index;

  return `
    <div class="action-loop-row ${selected ? "selected" : ""}">
      <button
        class="action-loop-step ${selected ? "selected" : ""} ${assigning ? "assigning" : ""}"
        type="button"
        data-command="select-loop-step"
        data-id="${index}"
        aria-pressed="${selected}"
      >
        ${getActionLoopLabel(actionId)}
      </button>
      ${
        selected
          ? `<span class="action-loop-row-tools">
              <button class="action-loop-icon" type="button" data-command="insert-loop-after" data-id="${index}" title="Add action after ${getActionLoopLabel(actionId)}">+</button>
              <button class="action-loop-icon" type="button" data-command="remove-loop-step" data-id="${index}" title="Remove ${getActionLoopLabel(actionId)}" ${index === 0 || loopLength <= 1 ? "disabled" : ""}>-</button>
            </span>`
          : ""
      }
    </div>
  `;
}

function getActionLoopLabel(actionId: ActionId): string {
  if (actionId === "fishRiver") {
    return "Fish River";
  }

  return getActionDefinition(actionId)?.label ?? "Action";
}

function getRunningActionTitle(state: GameState): string {
  const running = state.currentAction;
  if (!running) {
    return "Working";
  }

  const location = running.locationId ? getLocation(running.locationId).label : "the wilds";
  if (running.phase === "travelingTo") {
    return `Traveling to ${location}`;
  }

  if (running.phase === "travelingBack") {
    return `Returning from ${location}`;
  }

  if (running.phase === "followUp") {
    if (getActiveActionId(running) === "butcherFish") {
      return "Butchering Fish";
    }

    return getActionDefinition(getActiveActionId(running))?.label ?? "Working";
  }

  return getActionDefinition(running.actionId)?.label ?? "Working";
}

function getCurrentActionLabel(state: GameState, actionIds: ActionId[]): string | null {
  const running = state.currentAction;
  if (!running) {
    return null;
  }

  const activeActionId = getActiveActionId(running);
  if (!actionIds.includes(activeActionId)) {
    return null;
  }

  return getActionDefinition(activeActionId)?.label ?? "Working";
}

function getRunningActionStatus(state: GameState): string {
  const running = state.currentAction;
  if (!running) {
    return "keeping still";
  }

  const location = running.locationId ? getLocation(running.locationId).label.toLowerCase() : "camp";
  if (running.phase === "travelingTo") {
    return `traveling to ${location}`;
  }

  if (running.phase === "travelingBack") {
    return `returning from ${location}`;
  }

  if (running.phase === "followUp") {
    return getActionDefinition(getActiveActionId(running))?.verb ?? "working";
  }

  return getActionDefinition(running.actionId)?.verb ?? "working";
}

function getActiveActionId(running: NonNullable<GameState["currentAction"]>): ActionId {
  return running.phase === "followUp" && running.followUpActionId ? running.followUpActionId : running.actionId;
}

function getActionFilter(id: ActionFilterId): ActionFilter {
  return actionFilters.find((filter) => filter.id === id) ?? actionFilters[0];
}

function getCategoryFilters(categoryId: ActionCategoryId): ActionFilter[] {
  const category = actionCategories.find((entry) => entry.id === categoryId) ?? actionCategories[0];
  return category.filterIds.map((id) => getActionFilter(id));
}

function isActionCategoryId(id: string | undefined): id is ActionCategoryId {
  return actionCategories.some((category) => category.id === id);
}

function isActionFilterId(id: string | undefined): id is ActionFilterId {
  return actionFilters.some((filter) => filter.id === id);
}

function getLoopIndex(id: string | undefined, fallback: number): number {
  const parsed = Number(id);
  return Number.isFinite(parsed) ? Math.max(0, Math.floor(parsed)) : fallback;
}

function isLocationId(id: string | undefined): id is LocationId {
  return locationDefinitions.some((location) => location.id === id);
}

function isSidePanelId(id: string | undefined): id is SidePanelId {
  return id === "inventory" || id === "equipment";
}

function hasLocationPanel(filterId: ActionFilterId): boolean {
  return (
    filterId === "foraging" ||
    filterId === "mining" ||
    filterId === "fishing" ||
    filterId === "hunting" ||
    filterId === "woodcutting"
  );
}

function getLocation(id: LocationId, filterId?: ActionFilterId): (typeof locationDefinitions)[number] {
  const locations = filterId ? getLocationsForFilter(filterId) : locationDefinitions;
  return locations.find((location) => location.id === id) ?? locations[0];
}

function getLocationsForFilter(filterId: ActionFilterId): typeof locationDefinitions {
  switch (filterId) {
    case "mining":
      return locationDefinitions.filter((location) => location.id === "mine");
    case "fishing":
      return locationDefinitions.filter((location) => location.id === "river");
    case "hunting":
      return locationDefinitions.filter((location) => location.id === "meadow");
    case "woodcutting":
      return locationDefinitions.filter((location) => location.id === "forest");
    default:
      return locationDefinitions.filter((location) => location.id === "meadow" || location.id === "river");
  }
}

function getActiveLocationForFilter(filterId: ActionFilterId, activeLocation: LocationId): LocationId {
  if (filterId === "mining") {
    return "mine";
  }

  if (filterId === "hunting") {
    return "meadow";
  }

  if (filterId === "fishing") {
    return "river";
  }

  if (filterId === "woodcutting") {
    return "forest";
  }

  return activeLocation === "meadow" || activeLocation === "river" ? activeLocation : "meadow";
}

function getActionStartLocation(actionId: ActionId, activeLocation: LocationId): LocationId {
  if (isMiningAction(actionId)) {
    return "mine";
  }

  if (actionId === "huntSmallAnimals") {
    return "meadow";
  }

  if (actionId === "fishRiver") {
    return "river";
  }

  if (actionId === "chopTrees") {
    return "forest";
  }

  return activeLocation === "forest" ? "meadow" : activeLocation;
}

function isMiningAction(actionId: ActionId): boolean {
  return actionId === "mineCoal" || actionId === "mineCopper" || actionId === "mineTin";
}

function renderLocationPanel(filter: ActionFilter, activeLocation: LocationId): string {
  return `
    <section class="panel location-panel">
      ${renderLocationTabs(getLocationsForFilter(filter.id), getActiveLocationForFilter(filter.id, activeLocation), filter.label)}
    </section>
  `;
}

function renderLocationTabs(
  locations: typeof locationDefinitions,
  activeLocation: LocationId,
  label: string
): string {
  return `
    <div class="location-tabs location-count-${locations.length}" role="tablist" aria-label="${label} locations">
      ${locations
        .map((location) => {
          const active = location.id === activeLocation;
          return `
            <button
              class="location-tab ${active ? "active" : ""}"
              type="button"
              role="tab"
              aria-selected="${active}"
              aria-label="${location.label} location"
              data-command="set-location"
              data-id="${location.id}"
            >
              <img class="location-tab-image" src="${location.iconUrl}" alt="" aria-hidden="true" />
              <span class="location-tab-label">${location.label}</span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderCraftLowestCard(state: GameState, actionId: ActionId, actionLoopTarget: ActionLoopTarget): string {
  const definition = getActionDefinition(actionId);
  if (!definition) {
    return "";
  }

  const targetActionId = getLowestQuantityCraftAction(state);
  const targetDefinition = targetActionId ? getActionDefinition(targetActionId) : undefined;
  const unlocked = isActionUnlocked(state, actionId);
  const canStart = canStartAction(state, actionId);
  const assigningLoopAction = Boolean(actionLoopTarget && state.currentAction);
  const canAssignFollowUp = Boolean(
    assigningLoopAction &&
      state.currentAction &&
      actionLoopTarget &&
      canInsertActionInLoop(state.currentAction, actionLoopTarget.afterIndex, actionId)
  );
  const active = state.currentAction ? getActiveActionId(state.currentAction) === actionId : false;
  const disabled = assigningLoopAction ? !canAssignFollowUp : !canStart || active;
  const lockReason = canStart ? "" : getActionLockReason(state, actionId);
  const tooltipRows: ActionTooltipRow[] = [
    { label: "Speed", value: formatDuration(definition.durationMs) },
    { label: "Uses", value: targetActionId ? describeCost(getActionCost(targetActionId)) : "Varies by target" },
    { label: "Keeps", value: "Rechecks after each craft" },
    { label: "Chooses", value: "Lowest Stock" }
  ];
  const statusText = assigningLoopAction
    ? canAssignFollowUp
      ? "Set as action loop step"
      : "Not valid for this loop"
    : !canStart && lockReason
      ? lockReason
      : targetDefinition
        ? `Next: ${targetDefinition.label}`
        : "";
  const buttonLabel = assigningLoopAction ? "Set" : active ? "Running" : canStart ? "Start" : "Locked";

  return `
    <button
      class="craft-priority-button ${active ? "active" : ""} ${canAssignFollowUp ? "assignable" : ""} ${!unlocked && !canAssignFollowUp ? "locked" : ""}"
      type="button"
      data-command="start-action"
      data-id="${actionId}"
      data-disabled="${disabled}"
      data-tooltip-source
      aria-disabled="${disabled}"
      aria-label="${buttonLabel} ${definition.label}${targetDefinition ? `, next ${targetDefinition.label}` : ""}"
    >
      <span class="craft-priority-main" aria-hidden="true">
        <img src="${craftMaterialsBundleButtonUrl}" alt="" aria-hidden="true" />
      </span>
      ${renderActionTooltip(definition.label, tooltipRows, statusText)}
    </button>
  `;
}

function renderActionCard(state: GameState, actionId: ActionId, actionLoopTarget: ActionLoopTarget): string {
  const definition = getActionDefinition(actionId);
  if (!definition) {
    return "";
  }

  const unlocked = isActionUnlocked(state, actionId);
  const cost = getActionCost(actionId);
  const canStart = canStartAction(state, actionId);
  const assigningLoopAction = Boolean(actionLoopTarget && state.currentAction);
  const canAssignFollowUp = Boolean(
    assigningLoopAction &&
      state.currentAction &&
      actionLoopTarget &&
      canInsertActionInLoop(state.currentAction, actionLoopTarget.afterIndex, actionId)
  );
  const active = state.currentAction ? getActiveActionId(state.currentAction) === actionId : false;
  const disabled = assigningLoopAction ? !canAssignFollowUp : !canStart || active;
  const missingCostText =
    actionId === "butcherFish" ||
    actionId === "butcherRabbit" ||
    actionId === "butcherSquirrel" ||
    actionId === "cookRabbitMeat" ||
    actionId === "cookSquirrelMeat"
      ? getActionLockReason(state, actionId)
      : getMissingCostText(state, cost);
  const lockReason = canStart ? "" : unlocked ? missingCostText : getActionLockReason(state, actionId);
  const tooltipRows = getActionTooltipRows(actionId, definition.durationMs);
  const statusText = assigningLoopAction
    ? canAssignFollowUp
      ? "Set as action loop step"
      : "Not valid for this loop"
    : !canStart && lockReason
      ? lockReason
      : "";
  const buttonLabel = assigningLoopAction ? "Set" : active ? "Running" : canStart ? "Start" : "Locked";

  return `
    <button
      class="action-card ${active ? "active" : ""} ${canAssignFollowUp ? "assignable" : ""} ${!unlocked && !canAssignFollowUp ? "locked" : ""}"
      type="button"
      data-command="start-action"
      data-id="${actionId}"
      data-disabled="${disabled}"
      data-tooltip-source
      aria-disabled="${disabled}"
      aria-label="${buttonLabel} ${definition.label}"
    >
      <span class="action-card-main" aria-hidden="true">
        ${renderActionIcon(actionId)}
      </span>
      ${renderActionTooltip(definition.label, tooltipRows, statusText)}
    </button>
  `;
}

function renderActionIcon(actionId: ActionId): string {
  const iconUrls = getActionIconUrls(actionId);
  if (!iconUrls.length) {
    return `<span class="action-card-glyph">${getActionInitials(actionId)}</span>`;
  }

  return `
    <span class="action-card-icon ${iconUrls.length > 1 ? "multi" : ""}">
      ${iconUrls.map((iconUrl) => `<img src="${iconUrl}" alt="" aria-hidden="true" />`).join("")}
    </span>
  `;
}

function renderActionTooltip(label: string, rows: ActionTooltipRow[], statusText: string): string {
  const allRows = statusText ? [{ label: "Status", value: statusText }, ...rows] : rows;

  return `
    <div class="slot-tooltip" role="tooltip">
      <div class="tooltip-title">
        <strong>${label}</strong>
      </div>
      <dl>
        ${allRows
          .map((row) => `
            <div>
              <dt>${row.label}</dt>
              <dd>${row.value}</dd>
            </div>
          `)
          .join("")}
      </dl>
    </div>
  `;
}

function getActionIconUrls(actionId: ActionId): string[] {
  switch (actionId) {
    case "gatherSticks":
      return [stickIconUrl];
    case "gatherStones":
      return [stoneIconUrl];
    case "gatherFlaxFibers":
      return [flaxFiberIconUrl];
    case "gatherMushrooms":
      return [mushroomIconUrl];
    case "gatherBerries":
      return [berryIconUrl];
    case "mineCoal":
      return [coalIconUrl];
    case "mineCopper":
      return [copperIconUrl];
    case "mineTin":
      return [tinIconUrl];
    case "fishRiver":
      return [minnowIconUrl];
    case "craftLowestTool":
      return [craftMaterialsBundleButtonUrl];
    case "craftBasket":
      return [basketEquippedSlotUrl];
    case "craftFishingPole":
      return [fishingPoleEquippedSlotUrl];
    case "craftStoneKnife":
      return [stoneKnifeEquippedSlotUrl];
    case "craftStoneAxe":
      return [stoneAxeEquippedSlotUrl];
    case "craftStonePickAxe":
      return [stonePickAxeEquippedSlotUrl];
    case "craftStoneSpear":
      return [stoneSpearEquippedSlotUrl];
    case "chopTrees":
      return [woodIconUrl];
    case "huntSmallAnimals":
      return [rabbitIconUrl, squirrelIconUrl];
    case "butcherFish":
      return [fishFiletIconUrl];
    case "butcherRabbit":
    case "cookRabbitMeat":
      return [rabbitIconUrl];
    case "butcherSquirrel":
    case "cookSquirrelMeat":
      return [squirrelIconUrl];
    case "tanHide":
      return [hideIconUrl];
  }
}

function getActionInitials(actionId: ActionId): string {
  const definition = getActionDefinition(actionId);
  if (!definition) {
    return "?";
  }

  return definition.label
    .split(" ")
    .map((word) => word[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getActionTooltipRows(actionId: ActionId, durationMs: number): ActionTooltipRow[] {
  const rows: ActionTooltipRow[] = [{ label: "Speed", value: formatDuration(durationMs) }];

  switch (actionId) {
    case "gatherSticks":
      return [...rows, { label: "Pickup", value: "1-3 Sticks" }, { label: "Each", value: "1 weight" }];
    case "gatherStones":
      return [...rows, { label: "Pickup", value: "1-2 Stones" }, { label: "Each", value: "1 weight" }];
    case "gatherFlaxFibers":
      return [...rows, { label: "Pickup", value: "1-3 Flax Fibers" }, { label: "Each", value: "1 weight" }];
    case "gatherMushrooms":
      return [...rows, { label: "Pickup", value: "1-3 Mushrooms" }, { label: "Each", value: "0.1 weight" }];
    case "gatherBerries":
      return [...rows, { label: "Pickup", value: "2-5 Berries" }, { label: "Each", value: "0.1 weight" }];
    case "mineCoal":
      return [
        ...rows,
        { label: "Requires", value: "Stone Pick Axe" },
        { label: "Pickup", value: "1 Coal" },
        { label: "Each", value: "1 weight" }
      ];
    case "mineCopper":
      return [
        ...rows,
        { label: "Requires", value: "Stone Pick Axe" },
        { label: "Pickup", value: "1 Copper" },
        { label: "Each", value: "1 weight" }
      ];
    case "mineTin":
      return [
        ...rows,
        { label: "Requires", value: "Stone Pick Axe" },
        { label: "Pickup", value: "1 Tin" },
        { label: "Each", value: "1 weight" }
      ];
    case "fishRiver":
      return [
        ...rows,
        { label: "Requires", value: "Fishing Pole" },
        { label: "Pickup", value: "1 fish" },
        { label: "Each", value: "0.5-7.5 lb" },
        { label: "Fish", value: "Minnow 0.5-1.5, Loach 1-3, Mudskipper 1.5-4.5, Stickleback 0.5-2, Perch 2-7.5 lb" }
      ];
    case "chopTrees":
      return [
        ...rows,
        { label: "Pickup", value: "2-4 Wood, 35% chance for 1 Stick" },
        { label: "Each", value: "Wood 2 weight, Stick 1 weight" }
      ];
    case "huntSmallAnimals":
      return [
        ...rows,
        { label: "Pickup", value: "1 Rabbit or Squirrel" },
        { label: "Each", value: "Rabbit 2-5 lb, Squirrel 0.5-2 lb" }
      ];
    case "craftLowestTool":
      return [
        ...rows,
        { label: "Keeps", value: "Rechecks after each craft" },
        { label: "Chooses", value: "Lowest Stock" }
      ];
    case "craftBasket":
      return [...rows, { label: "Makes", value: "1 Basket" }, { label: "Uses", value: describeCost(getActionCost(actionId)) }];
    case "craftFishingPole":
      return [...rows, { label: "Makes", value: "1 Fishing Pole" }, { label: "Uses", value: describeCost(getActionCost(actionId)) }];
    case "craftStoneKnife":
      return [...rows, { label: "Makes", value: "1 Stone Knife" }, { label: "Uses", value: describeCost(getActionCost(actionId)) }];
    case "craftStoneAxe":
      return [...rows, { label: "Makes", value: "1 Stone Axe" }, { label: "Uses", value: describeCost(getActionCost(actionId)) }];
    case "craftStonePickAxe":
      return [...rows, { label: "Makes", value: "1 Stone Pick Axe" }, { label: "Uses", value: describeCost(getActionCost(actionId)) }];
    case "craftStoneSpear":
      return [...rows, { label: "Makes", value: "1 Stone Spear" }, { label: "Uses", value: describeCost(getActionCost(actionId)) }];
    case "butcherFish":
      return [...rows, { label: "Uses", value: "1 carried fish" }, { label: "Makes", value: "Matching filet at 50% fish weight" }];
    case "butcherRabbit":
      return [
        ...rows,
        { label: "Uses", value: "1 Rabbit" },
        { label: "Each", value: "2-5 lb" },
        { label: "Makes", value: "1-2 Rabbit Meat; knife can recover Hide or Bone" }
      ];
    case "butcherSquirrel":
      return [
        ...rows,
        { label: "Uses", value: "1 Squirrel" },
        { label: "Each", value: "0.5-2 lb" },
        { label: "Makes", value: "1 Squirrel Meat; knife can recover Hide or Bone" }
      ];
    case "cookRabbitMeat":
      return [...rows, { label: "Uses", value: "1 Rabbit Meat" }, { label: "Makes", value: "1 Cooked Rabbit Meat" }];
    case "cookSquirrelMeat":
      return [...rows, { label: "Uses", value: "1 Squirrel Meat" }, { label: "Makes", value: "1 Cooked Squirrel Meat" }];
    case "tanHide":
      return [...rows, { label: "Uses", value: "1 Hide" }, { label: "Makes", value: "1 Leather" }];
  }
}

function renderBuildingPanel(state: GameState, now: number): string {
  const visibleBuildings = buildingDefinitions.filter((building) => isBuildingVisible(state, building.id, now));

  return `
    <section class="panel camp-panel">
      <div class="craft-list">
        ${
          visibleBuildings.length
            ? visibleBuildings.map((building) => renderBuildingCard(state, building, now)).join("")
            : `<div class="empty-line">Nothing sturdy enough to name yet.</div>`
        }
      </div>
    </section>
  `;
}

function renderBuildingCard(state: GameState, building: (typeof buildingDefinitions)[number], now: number): string {
  const built = isBuildingBuilt(state, building.id, now);
  const affordable = hasCost(state, building.recipe);
  const disabled = built || !affordable;
  const imageUrl = getBuildingImageUrl(state, building.id, now);
  const buttonLabel = getBuildingButtonLabel(state, building.id, now);

  return `
    <article class="craft-item building-card ${built ? "owned" : ""} ${building.id === "campfire" && built ? "lit" : ""}">
      <button
        class="building-image-button"
        type="button"
        data-command="build-structure"
        data-id="${building.id}"
        data-disabled="${disabled}"
        data-tooltip-source
        aria-disabled="${disabled}"
        aria-label="${buttonLabel} ${building.label}"
      >
        <img class="building-image" src="${imageUrl}" alt="" aria-hidden="true" />
        ${renderBuildingTooltip(state, building, now)}
      </button>
    </article>
  `;
}

function renderBuildingTooltip(state: GameState, building: (typeof buildingDefinitions)[number], now: number): string {
  const built = isBuildingBuilt(state, building.id, now);
  const affordable = hasCost(state, building.recipe);
  const rows: ActionTooltipRow[] = [
    { label: "Status", value: getBuildingStatusText(state, building.id, now, built, affordable) },
    { label: "Cost", value: describeCost(building.recipe) },
    { label: "Use", value: building.blurb }
  ];

  return `
    <div class="slot-tooltip" role="tooltip">
      <div class="tooltip-title">
        <strong>${building.label}</strong>
      </div>
      <dl>
        ${rows
          .map((row) => `
            <div>
              <dt>${row.label}</dt>
              <dd>${row.value}</dd>
            </div>
          `)
          .join("")}
      </dl>
    </div>
  `;
}

function isBuildingBuilt(state: GameState, buildingId: BuildingId, now: number): boolean {
  return buildingId === "campfire" ? isCampfireLit(state, now) : state.buildings[buildingId];
}

function getBuildingImageUrl(state: GameState, buildingId: BuildingId, now: number): string {
  switch (buildingId) {
    case "campfire":
      return isCampfireLit(state, now) ? campfireLitUrl : campfireUnlitUrl;
    case "tanningRack":
      return tanningRackUrl;
    case "hideTent":
      return hideTentUrl;
  }
}

function getBuildingButtonLabel(state: GameState, buildingId: BuildingId, now: number): string {
  if (buildingId === "campfire" && isCampfireLit(state, now)) {
    return "Lit";
  }

  return isBuildingBuilt(state, buildingId, now) ? "Built" : "Build";
}

function getBuildingStatusText(
  state: GameState,
  buildingId: BuildingId,
  now: number,
  built: boolean,
  affordable: boolean
): string {
  if (buildingId === "campfire") {
    return built
      ? `Lit, burns out in <b data-campfire-remaining>${formatDuration(getCampfireRemainingMs(state, now))}</b>`
      : affordable
        ? "Ready to build, burns for 15m"
        : `Needs ${getMissingCostText(state, buildingDefinitions.find((building) => building.id === buildingId)?.recipe ?? {})}`;
  }

  if (built) {
    return "Built";
  }

  return affordable
    ? "Ready to build"
    : `Needs ${getMissingCostText(state, buildingDefinitions.find((building) => building.id === buildingId)?.recipe ?? {})}`;
}

function renderSidePanel(state: GameState, activeSidePanel: SidePanelId): string {
  return `
    <aside class="inventory-panel panel log-hidden">
      <div class="panel-tabs" role="tablist" aria-label="Character panel">
        ${renderSidePanelButton("inventory", "Inventory", activeSidePanel)}
        ${renderSidePanelButton("equipment", "Equipment", activeSidePanel)}
      </div>
      ${activeSidePanel === "inventory" ? renderInventory(state) : renderEquipment(state)}
    </aside>
  `;
}

function renderCampLogToggle(campLogVisible: boolean): string {
  return `
    <button
      class="camp-log-toggle ${campLogVisible ? "active" : ""}"
      type="button"
      data-command="toggle-camp-log"
      aria-pressed="${campLogVisible}"
    >
      Camp Log
    </button>
  `;
}

function renderSidePanelButton(id: SidePanelId, label: string, activeSidePanel: SidePanelId): string {
  const active = id === activeSidePanel;
  return `
    <button
      class="panel-tab ${active ? "active" : ""}"
      type="button"
      role="tab"
      aria-selected="${active}"
      data-command="set-side-panel"
      data-id="${id}"
    >
      ${label}
    </button>
  `;
}

function renderInventory(state: GameState): string {
  const visible = resourceOrder.filter((resourceId) => {
    return (
      state.seenResources.includes(resourceId) ||
      state.inventory[resourceId] > 0 ||
      getResourceQuantity(state, resourceId) > 0
    );
  });

  const groups = resourceDefinitions.reduce<Record<string, ResourceId[]>>((acc, resource) => {
    if (visible.includes(resource.id)) {
      acc[resource.group] = acc[resource.group] ?? [];
      acc[resource.group].push(resource.id);
    }
    return acc;
  }, {});

  return `
    <section class="side-panel-content">
      ${renderCharacterInventory(state)}
      ${Object.entries(groups).map(([group, ids]) => renderResourceGroup(state, group, ids)).join("")}
      ${renderToolInventory(state)}
    </section>
  `;
}

function renderCharacterInventory(state: GameState): string {
  const carriedIds = resourceOrder.filter((resourceId) => {
    return state.characterInventory[resourceId] > 0 || getResourceQuantity(state, resourceId, "character") > 0;
  });
  const carriedWeight = getCharacterInventoryWeight(state);
  const maxWeight = getCharacterMaxWeight(state);
  const iconIds = carriedIds.filter((id) => Boolean(resourceSlotImages[id]));
  const rowIds = carriedIds.filter((id) => !resourceSlotImages[id]);

  return `
    <div class="resource-group character-inventory-group">
      <div class="inventory-summary-heading">
        <h3>Camerons Inventory</h3>
        <span>${formatWeightAmount(carriedWeight)}/${formatWeightAmount(maxWeight)}</span>
      </div>
      ${
        carriedIds.length
          ? `<button class="deposit-button" type="button" data-command="deposit-carried" ${state.currentAction ? "disabled" : ""}>Store at Camp</button>`
          : ""
      }
      ${
        carriedIds.length
          ? `
            ${
              iconIds.length
                ? `<div class="inventory-resource-grid" aria-label="Cameron's carried inventory">
                    ${iconIds.map((id) => renderInventoryResourceSlot(state, id, state.characterInventory, "character")).join("")}
                  </div>`
                : ""
            }
            ${rowIds.map((id) => renderResourceRow(id, state.characterInventory)).join("")}
          `
          : `<div class="empty-line">Pack empty.</div>`
      }
    </div>
  `;
}

function renderResourceGroup(state: GameState, group: string, ids: ResourceId[]): string {
  const iconIds = ids.filter((id) => Boolean(resourceSlotImages[id]));
  const rowIds = ids.filter((id) => !resourceSlotImages[id]);

  return `
    <div class="resource-group">
      <h3>${labelGroup(group)}</h3>
      ${
        iconIds.length
          ? `<div class="inventory-resource-grid" aria-label="${labelGroup(group)} inventory">
              ${iconIds.map((id) => renderInventoryResourceSlot(state, id)).join("")}
            </div>`
          : ""
      }
      ${rowIds.map((id) => `
        ${renderResourceRow(id, state.inventory)}
      `).join("")}
    </div>
  `;
}

function renderResourceRow(resourceId: ResourceId, inventory: Inventory): string {
  return `
    <div class="resource-row">
      <span>
        <strong>${getResourceLabel(resourceId)}</strong>
        <small>${resourceDefinitions.find((resource) => resource.id === resourceId)?.blurb ?? ""}</small>
      </span>
      <b>${formatInventoryAmount(resourceId, inventory[resourceId])}</b>
    </div>
  `;
}

function renderInventoryResourceSlot(
  state: GameState,
  resourceId: ResourceId,
  inventory: Inventory = state.inventory,
  source: InventorySource = "camp"
): string {
  const imageUrl = resourceSlotImages[resourceId];
  const definition = resourceDefinitions.find((resource) => resource.id === resourceId);
  if (!imageUrl || !definition) {
    return "";
  }

  const quantity = getResourceQuantity(state, resourceId, source);
  const quantityLabel = isWholeCountResource(resourceId) ? `, quantity ${quantity}` : "";

  return `
    <article class="equipment-slot inventory-resource-slot icon-only" tabindex="0" data-tooltip-source aria-label="${definition.label}, ${formatInventoryAmount(resourceId, inventory[resourceId])}${quantityLabel}">
      <img class="slot-item-icon" src="${imageUrl}" alt="" aria-hidden="true" />
      <span class="item-quantity" aria-hidden="true">${formatResourceAmount(resourceId, inventory[resourceId])}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${definition.label}</strong>
        </div>
        <dl>
          <div>
            <dt>Type</dt>
            <dd>${labelGroup(definition.group)}</dd>
          </div>
          ${
            isWeightedResource(resourceId)
              ? `<div>
                  <dt>Total</dt>
                  <dd>${formatInventoryAmount(resourceId, inventory[resourceId])}</dd>
                </div>`
              : ""
          }
          ${
            isWholeCountResource(resourceId)
              ? `<div>
                  <dt>Quantity</dt>
                  <dd>${quantity}</dd>
                </div>`
              : ""
          }
          <div>
            <dt>Use</dt>
            <dd>${definition.blurb}</dd>
          </div>
        </dl>
      </div>
    </article>
  `;
}

function renderToolInventory(state: GameState): string {
  const visibleTools = toolDefinitions.filter((tool) => {
    return state.tools[tool.id].quantity > 0;
  });

  if (!visibleTools.length) {
    return "";
  }

  return `
    <section class="resource-group tool-inventory">
      <h3>Primitive Tools</h3>
      <div class="inventory-tool-grid" aria-label="Primitive tool inventory">
        ${visibleTools.map((tool) => renderInventoryToolSlot(state, tool.id)).join("")}
      </div>
    </section>
  `;
}

function renderInventoryToolSlot(state: GameState, toolId: ToolId): string {
  const definition = toolDefinitions.find((tool) => tool.id === toolId);
  const tool = state.tools[toolId];
  if (!definition || tool.quantity <= 0) {
    return "";
  }

  const maxDurability = getMaxToolDurability(toolId);
  const stats: EquipmentStat[] = [
    { label: "Durability", value: `${maxDurability}/${maxDurability}` },
    ...toolEquipmentStats[toolId]
  ];

  return `
    <article class="equipment-slot inventory-tool-slot icon-only" tabindex="0" data-tooltip-source aria-label="${definition.label}, ${tool.quantity} ${tool.quantity === 1 ? "spare" : "spares"}">
      ${renderSlotIcon(toolId)}
      <span class="item-quantity" aria-hidden="true">${tool.quantity}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${definition.label}</strong>
        </div>
        <dl>
          ${stats.map((stat) => `
            <div>
              <dt>${stat.label}</dt>
              <dd>${stat.value}</dd>
            </div>
          `).join("")}
        </dl>
      </div>
    </article>
  `;
}

function renderEquipment(state: GameState): string {
  const slots = equipmentToolSlots.slice(0, EQUIPMENT_SLOT_COUNT);

  return `
    <section class="side-panel-content equipment-screen">
      <h3>Tools</h3>
      <div class="equipment-grid" aria-label="Equipment slots">
        ${slots
          .map((toolId, index) => {
            return toolId && state.tools[toolId].owned
              ? renderEquipmentSlot(state, toolId)
              : renderEmptyEquipmentSlot(index, toolId);
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderEquipmentSlot(state: GameState, toolId: ToolId): string {
  const definition = toolDefinitions.find((tool) => tool.id === toolId);
  const tool = state.tools[toolId];
  if (!definition || !tool.owned) {
    return "";
  }

  const maxDurability = getMaxToolDurability(toolId);
  const durability = Math.max(0, tool.durability);
  const usable = durability > 0;
  const percent = ((durability / maxDurability) * 100).toFixed(1);
  const stats = [
    { label: "Durability", value: usable ? `${durability}/${maxDurability}` : "Broken" },
    { label: "Inventory", value: `${tool.quantity} ${tool.quantity === 1 ? "spare" : "spares"}` },
    ...toolEquipmentStats[toolId]
  ];
  const iconOnly = Boolean(equippedSlotImages[toolId]);

  return `
    <article class="equipment-slot ${usable ? "" : "broken"} ${iconOnly ? "icon-only" : ""}" tabindex="0" data-tooltip-source aria-label="${definition.label}">
      ${renderSlotIcon(toolId)}
      ${
        iconOnly
          ? ""
          : `<strong>${definition.label}</strong>
            <span class="slot-durability" aria-label="${definition.label} durability">
              <span>
                <b style="width: ${percent}%"></b>
              </span>
              <em>${usable ? `${durability}/${maxDurability}` : "Broken"}</em>
            </span>`
      }
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${definition.label}</strong>
          <em>${usable ? `${durability}/${maxDurability}` : "Broken"}</em>
        </div>
        <dl>
          ${stats.map((stat) => `
            <div>
              <dt>${stat.label}</dt>
              <dd>${usable ? stat.value : "Inactive"}</dd>
            </div>
          `).join("")}
        </dl>
      </div>
    </article>
  `;
}

function renderSlotIcon(toolId: ToolId): string {
  const imageUrl = equippedSlotImages[toolId];
  if (imageUrl) {
    return `<img class="slot-item-icon" src="${imageUrl}" alt="" aria-hidden="true" />`;
  }

  return `<span class="slot-glyph">${getToolInitials(toolId)}</span>`;
}

function renderEmptyEquipmentSlot(index: number, toolId: ToolId | null): string {
  const imageUrl = toolId ? emptySlotImages[toolId] : undefined;
  const label = toolId ? (emptySlotLabels[toolId] ?? "Empty") : "Empty";

  return `
    <div class="equipment-slot empty ${imageUrl ? "image-empty" : ""}" aria-label="Empty equipment slot ${index + 1}">
      ${
        imageUrl
          ? `<img class="slot-shadow-icon" src="${imageUrl}" alt="" aria-hidden="true" />`
          : `<span class="slot-glyph">+</span>`
      }
      <strong>${label}</strong>
    </div>
  `;
}

function getToolInitials(toolId: ToolId): string {
  switch (toolId) {
    case "basket":
      return "BK";
    case "fishingPole":
      return "FP";
    case "stoneAxe":
      return "AX";
    case "stonePickAxe":
      return "PX";
    case "stoneSpear":
      return "SP";
    case "stoneKnife":
      return "KN";
  }
}

function getTooltipSlot(target: EventTarget | null, root: HTMLElement): HTMLElement | null {
  if (!(target instanceof Element)) {
    return null;
  }

  const slot = target.closest<HTMLElement>("[data-tooltip-source]");
  return slot && root.contains(slot) ? slot : null;
}

function showFloatingTooltip(root: HTMLElement, slot: HTMLElement): void {
  const source = slot.querySelector<HTMLElement>(".slot-tooltip");
  const layer = getTooltipLayer(root);
  if (!source || !layer) {
    return;
  }

  layer.innerHTML = source.innerHTML;
  layer.setAttribute("aria-hidden", "false");
  layer.classList.add("visible");
  positionFloatingTooltip(root, slot);
}

function hideFloatingTooltip(root: HTMLElement): void {
  const layer = getTooltipLayer(root);
  if (!layer) {
    return;
  }

  layer.classList.remove("visible");
  layer.setAttribute("aria-hidden", "true");
  layer.innerHTML = "";
}

function positionFloatingTooltip(root: HTMLElement, slot: HTMLElement): void {
  const layer = getTooltipLayer(root);
  if (!layer) {
    return;
  }

  const gap = 8;
  const margin = 12;
  const slotRect = slot.getBoundingClientRect();
  const layerRect = layer.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const width = layerRect.width;
  const height = layerRect.height;

  let left = slotRect.left - width - gap;
  if (left < margin) {
    const rightSide = slotRect.right + gap;
    left = rightSide + width <= viewportWidth - margin ? rightSide : viewportWidth - width - margin;
  }

  const maxTop = Math.max(margin, viewportHeight - height - margin);
  const top = Math.min(Math.max(slotRect.top, margin), maxTop);

  layer.style.left = `${Math.max(margin, Math.round(left))}px`;
  layer.style.top = `${Math.round(top)}px`;
}

function getTooltipLayer(root: HTMLElement): HTMLElement | null {
  return root.querySelector<HTMLElement>(".tooltip-layer");
}

function captureScrollPositions(root: HTMLElement): Map<string, number> {
  const selectors = [".log-list", ".side-panel-content"];
  return new Map(
    selectors.map((selector) => {
      const element = root.querySelector<HTMLElement>(selector);
      return [selector, element?.scrollTop ?? 0];
    })
  );
}

function restoreScrollPositions(root: HTMLElement, scrollPositions: Map<string, number>): void {
  for (const [selector, scrollTop] of scrollPositions) {
    const element = root.querySelector<HTMLElement>(selector);
    if (element) {
      element.scrollTop = scrollTop;
    }
  }
}

function renderLog(state: GameState, extraClass = ""): string {
  return `
    <section class="log-panel ${extraClass}">
      <div class="section-heading">
        <span>Camp Log</span>
        <span class="quiet">${state.log.length}</span>
      </div>
        <div class="log-list">
          ${state.log.map((entry) => `
            <p class="log-entry ${entry.tone}">
              <span>${entry.text}</span>
              ${renderLogGains(entry)}
            </p>
          `).join("")}
        </div>
    </section>
  `;
}

function renderLogGains(entry: LogEntry): string {
  if (entry.aggregateItems) {
    const gains = resourceOrder
      .filter((resourceId) => (entry.aggregateItems?.[resourceId] ?? 0) > 0)
      .map((resourceId) => {
        const amount = entry.aggregateItems?.[resourceId] ?? 0;
        return `<b>+${formatResourceAmount(resourceId, amount)} ${formatLogResource(resourceId, amount)}</b>`;
      });

    return gains.length ? `<span class="log-gains">${gains.join("")}</span>` : "";
  }

  return entry.aggregateTotal ? `<span class="log-gains"><b>+${entry.aggregateTotal} ${entry.aggregateUnit ?? ""}</b></span>` : "";
}

function formatInventoryAmount(resourceId: ResourceId, amount: number): string {
  return isWeightedResource(resourceId) ? `${formatResourceAmount(resourceId, amount)} lb` : formatResourceAmount(resourceId, amount);
}

function formatWeightAmount(amount: number): string {
  const rounded = Math.round(amount * 10) / 10;
  return Number.isInteger(rounded) ? `${rounded}` : rounded.toFixed(1);
}

function formatLogResource(resourceId: ResourceId, amount: number): string {
  const label = getResourceLabel(resourceId);
  if (isWeightedResource(resourceId)) {
    return `lb ${label}`;
  }

  if (amount === 1) {
    return label;
  }

  switch (resourceId) {
    case "wood":
    case "rabbitMeat":
    case "squirrelMeat":
    case "cookedRabbitMeat":
    case "cookedSquirrelMeat":
    case "leather":
      return label;
    case "flaxFiber":
      return "Flax Fibers";
    case "berry":
      return "Berries";
    case "coal":
    case "copper":
    case "tin":
      return label;
    default:
      return `${label}s`;
  }
}

function labelGroup(group: string): string {
  switch (group) {
    case "resources":
      return "Resources";
    case "animals":
      return "Animals";
    case "hunted":
      return "Hunted";
    case "fish":
      return "Fish";
    case "crafted":
      return "Worked";
    default:
      return group;
  }
}
