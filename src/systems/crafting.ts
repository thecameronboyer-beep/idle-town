import { buildingDefinitions } from "../data/craftables";
import type { BuildingId, Cost, GameState, ResourceId } from "../types";
import { expireCampfire, isCampfireLit, lightCampfire } from "./buildings";
import { describeCost, hasCost, payCost } from "./inventory";
import { addLog } from "./log";
import { isBuildingVisible } from "./progression";

export function buildStructure(state: GameState, buildingId: BuildingId, now = Date.now()): boolean {
  expireCampfire(state, now);
  const definition = buildingDefinitions.find((building) => building.id === buildingId);
  const alreadyBuilt = buildingId === "campfire" ? isCampfireLit(state, now) : state.buildings[buildingId];
  if (
    !definition ||
    alreadyBuilt ||
    !isBuildingVisible(state, buildingId) ||
    !hasCost(state, definition.recipe)
  ) {
    return false;
  }

  payCost(state, definition.recipe);
  if (buildingId === "campfire") {
    lightCampfire(state, now);
    addLog(state, "Cameron builds a campfire and brings it to flame.", "craft", now);
  } else {
    state.buildings[buildingId] = true;
    addLog(state, `Cameron builds a ${definition.label}.`, "craft", now);
  }
  touch(state, now);
  return true;
}

export function getMissingCostText(state: GameState, cost: Cost): string {
  const missing: Cost = {};
  for (const [resourceId, amount = 0] of Object.entries(cost)) {
    const id = resourceId as ResourceId;
    const missingAmount = Math.max(0, amount - state.inventory[id]);
    if (missingAmount > 0) {
      missing[id] = missingAmount;
    }
  }

  return describeCost(missing);
}

function touch(state: GameState, now: number): void {
  state.updatedAt = now;
  state.lastSimulatedAt = now;
}
