import { getActionDefinition } from "../data/actions";
import { buildingDefinitions, toolDefinitions } from "../data/craftables";
import { getResourceLabel, resourceDefinitions, resourceOrder } from "../data/resources";
import boneIconUrl from "../assets/items/bone-icon.png";
import flaxFiberIconUrl from "../assets/items/flax-fiber-icon.png";
import forestLocationIconUrl from "../assets/locations/forest-location-icon.png";
import hideIconUrl from "../assets/items/hide-icon.png";
import meadowLocationIconUrl from "../assets/locations/meadow-location-icon-v2.png";
import rabbitIconUrl from "../assets/items/rabbit-icon.png";
import riverLocationIconUrl from "../assets/locations/river-location-icon-v2.png";
import squirrelIconUrl from "../assets/items/squirrel-icon.png";
import stickIconUrl from "../assets/items/stick-icon.png";
import stoneAxeEmptySlotUrl from "../assets/items/stone-axe-empty-slot.png";
import stoneAxeEquippedSlotUrl from "../assets/items/stone-axe-equipped-slot.png";
import stoneKnifeEquippedSlotUrl from "../assets/items/stone-knife-equipped-slot.png";
import stoneKnifeEmptySlotUrl from "../assets/items/stone-knife-empty-slot.png";
import stoneSpearEmptySlotUrl from "../assets/items/stone-spear-empty-slot.png";
import stoneSpearEquippedSlotUrl from "../assets/items/stone-spear-equipped-slot.png";
import stoneIconUrl from "../assets/items/stone-icon.png";
import woodIconUrl from "../assets/items/wood-icon.png";
import { buildStructure, craftTool, getMissingCostText } from "../systems/crafting";
import {
  CHARACTER_MAX_WEIGHT,
  describeCost,
  getCharacterInventoryWeight,
  hasCost
} from "../systems/inventory";
import { clamp, formatDuration } from "../systems/math";
import { getActionCost, getActionProgress, startAction, stopAction } from "../systems/actions";
import { getActionLockReason, isActionUnlocked, isBuildingVisible } from "../systems/progression";
import { getMaxToolDurability } from "../systems/tools";
import type { ActionId, BuildingId, GameState, Inventory, LocationId, LogEntry, ResourceId, ToolId } from "../types";

type ActionFilterId =
  | "crafting"
  | "foraging"
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

type EquipmentStat = {
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
    actionIds: ["gatherSticks", "gatherStones", "gatherFlaxFibers"]
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
    label: "Crafting"
  },
  {
    id: "butchering",
    label: "Butchering",
    actionIds: ["butcherRabbit", "butcherSquirrel"]
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
    filterIds: ["foraging", "hunting", "woodcutting"]
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
    actionIds: ["gatherSticks", "gatherStones"]
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
  }
];

const EQUIPMENT_SLOT_COUNT = 5;
const equipmentToolSlots: Array<ToolId | null> = ["stoneKnife", "stoneAxe", "stoneSpear", null, null];
const equippedSlotImages: Partial<Record<ToolId, string>> = {
  stoneKnife: stoneKnifeEquippedSlotUrl,
  stoneAxe: stoneAxeEquippedSlotUrl,
  stoneSpear: stoneSpearEquippedSlotUrl
};
const emptySlotImages: Partial<Record<ToolId, string>> = {
  stoneKnife: stoneKnifeEmptySlotUrl,
  stoneAxe: stoneAxeEmptySlotUrl,
  stoneSpear: stoneSpearEmptySlotUrl
};
const emptySlotLabels: Partial<Record<ToolId, string>> = {
  stoneKnife: "Knife",
  stoneAxe: "Axe",
  stoneSpear: "Spear"
};

const resourceSlotImages: Partial<Record<ResourceId, string>> = {
  bone: boneIconUrl,
  flaxFiber: flaxFiberIconUrl,
  hide: hideIconUrl,
  rabbit: rabbitIconUrl,
  squirrel: squirrelIconUrl,
  stick: stickIconUrl,
  stone: stoneIconUrl,
  wood: woodIconUrl
};

const toolEquipmentStats: Record<ToolId, EquipmentStat[]> = {
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
};

export function createRenderer(root: HTMLElement, handlers: RenderHandlers): (state: GameState) => void {
  let activeActionCategory: ActionCategoryId = "gather";
  let activeActionFilter: ActionFilterId = "foraging";
  let activeLocation: LocationId = "meadow";
  let activeSidePanel: SidePanelId = "inventory";
  let currentState: GameState | null = null;
  let activeTooltipSlot: HTMLElement | null = null;

  root.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>("[data-command]");
    if (!button || button.disabled) {
      return;
    }

    const command = button.dataset.command;
    const id = button.dataset.id;
    const state = currentState;
    if (!state) {
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

    if (command === "start-action" && id) {
      const actionId = id as ActionId;
      startAction(state, actionId, Date.now(), { locationId: getActionStartLocation(actionId, activeLocation) });
    }

    if (command === "stop-action") {
      stopAction(state);
    }

    if (command === "craft-tool" && id) {
      craftTool(state, id as ToolId);
    }

    if (command === "build-structure" && id) {
      buildStructure(state, id as BuildingId);
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

  return (state: GameState) => {
    currentState = state;
    const scrollPositions = captureScrollPositions(root);
    const wildernessCanvas = root.querySelector<HTMLCanvasElement>("#wilderness-canvas");
    root.innerHTML = renderApp(state, activeActionFilter, activeActionCategory, activeSidePanel, activeLocation);
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
  activeLocation: LocationId
): string {
  return `
    <div class="game-shell">
      ${renderCharacterSidebar(state, activeActionCategory)}
      <main class="main-panel">
        ${renderWorldPanel()}
        ${renderCurrentActionPanel(state)}
        ${renderWorkArea(state, activeActionCategory, activeActionFilter, activeLocation)}
      </main>
      ${renderSidePanel(state, activeSidePanel)}
    </div>
    <div class="tooltip-layer" aria-hidden="true"></div>
  `;
}

function renderCharacterSidebar(
  state: GameState,
  activeActionCategory: ActionCategoryId
): string {
  const cameron = state.characters[0];
  const condition = state.currentAction ? getRunningActionStatus(state) : "keeping still";

  return `
    <aside class="character-sidebar panel">
      <div class="brand-block">
        <div class="kicker">Idle Town</div>
        <h1>First Fire</h1>
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
            </div>
          </nav>
          <div class="sidebar-footer">
            <button class="ghost-button" type="button" data-command="reset">Reset</button>
          </div>
    </aside>
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

function renderWorkArea(
  state: GameState,
  activeActionCategory: ActionCategoryId,
  activeActionFilter: ActionFilterId,
  activeLocation: LocationId
): string {
  if (activeActionCategory === "camp") {
    return `
      <div class="work-area single-panel">
        ${renderBuildingPanel(state)}
      </div>
    `;
  }

  return `
    <div class="work-area">
      ${renderActionCategoryPanel(activeActionCategory, activeActionFilter)}
      ${renderActionStack(state, activeActionFilter, activeLocation)}
    </div>
  `;
}

function renderActionStack(
  state: GameState,
  activeActionFilter: ActionFilterId,
  activeLocation: LocationId
): string {
  const filter = getActionFilter(activeActionFilter);

  return `
    <div class="action-stack">
      ${hasLocationPanel(filter.id) ? renderLocationPanel(filter, activeLocation) : ""}
      ${renderActionPanel(state, activeActionFilter, activeLocation)}
    </div>
  `;
}

function renderActionCategoryPanel(
  activeActionCategory: ActionCategoryId,
  activeActionFilter: ActionFilterId
): string {
  const category = actionCategories.find((entry) => entry.id === activeActionCategory) ?? actionCategories[0];
  const filters = getCategoryFilters(activeActionCategory);

  return `
    <section class="panel skill-panel">
      <div class="section-heading">
        <span>${category.label}</span>
        <span class="quiet">Skills</span>
      </div>
      <div class="skill-grid">
        ${filters.map((filter) => renderSkillButton(filter, activeActionFilter)).join("")}
      </div>
    </section>
  `;
}

function renderSkillButton(filter: ActionFilter, activeActionFilter: ActionFilterId): string {
  const active = filter.id === activeActionFilter;

  return `
    <button
      class="skill-button ${active ? "active" : ""}"
      type="button"
      data-command="set-action-filter"
      data-id="${filter.id}"
      aria-pressed="${active}"
    >
      <span>${filter.label}</span>
    </button>
  `;
}

function renderWorldPanel(): string {
  return `
    <section class="world-panel panel">
      <canvas id="wilderness-canvas" class="wilderness-canvas" aria-label="A primitive forest camp"></canvas>
    </section>
  `;
}

function renderActionPanel(
  state: GameState,
  activeActionFilter: ActionFilterId,
  activeLocation: LocationId
): string {
  const filter = getActionFilter(activeActionFilter);
  if (filter.id === "crafting") {
    return `
      <section class="panel action-panel">
        <div class="section-heading">
          <span>Crafting</span>
          <span class="quiet">Handmade</span>
        </div>
        ${renderPrimitiveTools(state)}
      </section>
    `;
  }

  const actionIds =
    filter.id === "foraging" || filter.id === "woodcutting"
      ? getLocation(activeLocation, filter.id).actionIds
      : (filter.actionIds ?? []);

  return `
      <section class="panel action-panel">
        <div class="section-heading">
          <span>${filter.label}</span>
          <span class="quiet">Actions</span>
        </div>
        <div class="action-grid">
          ${actionIds.map((actionId) => renderActionCard(state, actionId)).join("")}
        </div>
    </section>
  `;
}

function renderCurrentActionPanel(state: GameState): string {
  if (!state.currentAction) {
    return `
      <section class="panel current-action-panel idle">
        <div class="section-heading">
          <span>Current Action</span>
          <span class="quiet">Idle</span>
        </div>
        <div class="current-action-content idle">
          <strong>No active work</strong>
          <span>Choose a task for Cameron.</span>
        </div>
      </section>
    `;
  }

  const progress = clamp(getActionProgress(state), 0, 1);
  const remaining = formatDuration(state.currentAction.endsAt - Date.now());

  return `
    <section class="panel current-action-panel">
      <div class="section-heading">
        <span>Current Action</span>
        <span class="quiet">Auto-repeat on</span>
      </div>
      <div class="current-action-content">
        <div class="current-action-copy">
          <strong>${getRunningActionTitle(state)}</strong>
          <span data-action-remaining>${remaining} remaining</span>
        </div>
        <button class="icon-button" type="button" data-command="stop-action" title="Stop action">Stop</button>
        <div class="progress-track" aria-hidden="true">
          <span data-action-progress style="transform: scaleX(${progress.toFixed(4)})"></span>
        </div>
      </div>
    </section>
  `;
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

  return getActionDefinition(running.actionId)?.label ?? "Working";
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

  return getActionDefinition(running.actionId)?.verb ?? "working";
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

function isLocationId(id: string | undefined): id is LocationId {
  return locationDefinitions.some((location) => location.id === id);
}

function isSidePanelId(id: string | undefined): id is SidePanelId {
  return id === "inventory" || id === "equipment";
}

function hasLocationPanel(filterId: ActionFilterId): boolean {
  return filterId === "foraging" || filterId === "hunting" || filterId === "woodcutting";
}

function getLocation(id: LocationId, filterId?: ActionFilterId): (typeof locationDefinitions)[number] {
  const locations = filterId ? getLocationsForFilter(filterId) : locationDefinitions;
  return locations.find((location) => location.id === id) ?? locations[0];
}

function getLocationsForFilter(filterId: ActionFilterId): typeof locationDefinitions {
  switch (filterId) {
    case "hunting":
      return locationDefinitions.filter((location) => location.id === "meadow");
    case "woodcutting":
      return locationDefinitions.filter((location) => location.id === "forest");
    default:
      return locationDefinitions.filter((location) => location.id === "meadow" || location.id === "river");
  }
}

function getActiveLocationForFilter(filterId: ActionFilterId, activeLocation: LocationId): LocationId {
  if (filterId === "hunting") {
    return "meadow";
  }

  if (filterId === "woodcutting") {
    return "forest";
  }

  return activeLocation === "forest" ? "meadow" : activeLocation;
}

function getActionStartLocation(actionId: ActionId, activeLocation: LocationId): LocationId {
  if (actionId === "huntSmallAnimals") {
    return "meadow";
  }

  if (actionId === "chopTrees") {
    return "forest";
  }

  return activeLocation === "forest" ? "meadow" : activeLocation;
}

function renderLocationPanel(filter: ActionFilter, activeLocation: LocationId): string {
  return `
    <section class="panel location-panel">
      <div class="section-heading">
        <span>Locations</span>
        <span class="quiet">${filter.label}</span>
      </div>
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

function renderActionCard(state: GameState, actionId: ActionId): string {
  const definition = getActionDefinition(actionId);
  if (!definition) {
    return "";
  }

  const unlocked = isActionUnlocked(state, actionId);
  const cost = getActionCost(actionId);
  const affordable = hasCost(state, cost);
  const active = state.currentAction?.actionId === actionId;
  const disabled = !unlocked || !affordable || active;
  const missingCostText =
    actionId === "cookRabbitMeat" || actionId === "cookSquirrelMeat"
      ? getActionLockReason(state, actionId)
      : getMissingCostText(state, cost);
  const lockReason = unlocked ? missingCostText : getActionLockReason(state, actionId);
  const subtext = Object.keys(cost).length ? `Uses ${describeCost(cost)}` : definition.blurb;

  return `
    <article class="action-card ${active ? "active" : ""} ${!unlocked ? "locked" : ""}">
      <div>
        <span class="card-label">${definition.label}</span>
        <small>${unlocked ? subtext : lockReason}</small>
      </div>
      <div class="card-footer">
        <span>${formatDuration(definition.durationMs)}</span>
        <button type="button" data-command="start-action" data-id="${actionId}" ${disabled ? "disabled" : ""}>
          ${active ? "Running" : "Start"}
        </button>
      </div>
    </article>
  `;
}

function renderPrimitiveTools(state: GameState): string {
  return `
      <div class="crafting-tab">
        <div class="section-heading">
          <span>Primitive Tools</span>
          <span class="quiet">Make spares</span>
        </div>
        <div class="craft-list">
          ${toolDefinitions.map((tool) => {
            const affordable = hasCost(state, tool.recipe);
            return `
              <article class="craft-item primitive-tool">
                <div>
                  <strong>${tool.label}</strong>
                  <small>${describeCost(tool.recipe)}</small>
                </div>
                <button type="button" data-command="craft-tool" data-id="${tool.id}" ${!affordable ? "disabled" : ""}>
                  Craft
                </button>
              </article>
            `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderBuildingPanel(state: GameState): string {
  const visibleBuildings = buildingDefinitions.filter((building) => isBuildingVisible(state, building.id));

  return `
    <section class="panel camp-panel">
      <div class="section-heading">
        <span>Camp</span>
        <span class="quiet">${visibleBuildings.length ? "Rough works" : "Undiscovered"}</span>
      </div>
      <div class="craft-list">
        ${
          visibleBuildings.length
            ? visibleBuildings.map((building) => {
                const owned = state.buildings[building.id];
                const affordable = hasCost(state, building.recipe);
                return `
                  <article class="craft-item ${owned ? "owned" : ""}">
                    <div>
                      <strong>${building.label}</strong>
                      <small>${owned ? building.blurb : describeCost(building.recipe)}</small>
                    </div>
                    <button type="button" data-command="build-structure" data-id="${building.id}" ${owned || !affordable ? "disabled" : ""}>
                      ${owned ? "Built" : "Build"}
                    </button>
                  </article>
                `;
              }).join("")
            : `<div class="empty-line">Nothing sturdy enough to name yet.</div>`
        }
      </div>
    </section>
  `;
}

function renderSidePanel(state: GameState, activeSidePanel: SidePanelId): string {
  return `
    <aside class="inventory-panel panel">
      <div class="panel-tabs" role="tablist" aria-label="Character panel">
        ${renderSidePanelButton("inventory", "Inventory", activeSidePanel)}
        ${renderSidePanelButton("equipment", "Equipment", activeSidePanel)}
      </div>
      ${activeSidePanel === "inventory" ? renderInventory(state) : renderEquipment(state)}
      ${renderLog(state)}
    </aside>
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
    return state.seenResources.includes(resourceId) || state.inventory[resourceId] > 0;
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
  const carriedIds = resourceOrder.filter((resourceId) => state.characterInventory[resourceId] > 0);
  const carriedWeight = getCharacterInventoryWeight(state);
  const iconIds = carriedIds.filter((id) => Boolean(resourceSlotImages[id]));
  const rowIds = carriedIds.filter((id) => !resourceSlotImages[id]);

  return `
    <div class="resource-group character-inventory-group">
      <div class="inventory-summary-heading">
        <h3>Camerons Inventory</h3>
        <span>${carriedWeight}/${CHARACTER_MAX_WEIGHT}</span>
      </div>
      ${
        carriedIds.length
          ? `
            ${
              iconIds.length
                ? `<div class="inventory-resource-grid" aria-label="Cameron's carried inventory">
                    ${iconIds.map((id) => renderInventoryResourceSlot(state, id, state.characterInventory)).join("")}
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
      <b>${inventory[resourceId]}</b>
    </div>
  `;
}

function renderInventoryResourceSlot(
  state: GameState,
  resourceId: ResourceId,
  inventory: Inventory = state.inventory
): string {
  const imageUrl = resourceSlotImages[resourceId];
  const definition = resourceDefinitions.find((resource) => resource.id === resourceId);
  if (!imageUrl || !definition) {
    return "";
  }

  return `
    <article class="equipment-slot inventory-resource-slot icon-only" tabindex="0" data-tooltip-source aria-label="${definition.label}, ${inventory[resourceId]}">
      <img class="slot-item-icon" src="${imageUrl}" alt="" aria-hidden="true" />
      <span class="item-quantity" aria-hidden="true">${inventory[resourceId]}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${definition.label}</strong>
        </div>
        <dl>
          <div>
            <dt>Type</dt>
            <dd>${labelGroup(definition.group)}</dd>
          </div>
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
    case "stoneAxe":
      return "AX";
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

function renderLog(state: GameState): string {
  return `
    <section class="log-panel">
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
        return `<b>+${amount} ${formatLogResource(resourceId, amount)}</b>`;
      });

    return gains.length ? `<span class="log-gains">${gains.join("")}</span>` : "";
  }

  return entry.aggregateTotal ? `<span class="log-gains"><b>+${entry.aggregateTotal} ${entry.aggregateUnit ?? ""}</b></span>` : "";
}

function formatLogResource(resourceId: ResourceId, amount: number): string {
  const label = getResourceLabel(resourceId);
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
    case "crafted":
      return "Worked";
    default:
      return group;
  }
}
