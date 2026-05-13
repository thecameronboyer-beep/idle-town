import { buildingDefinitions } from "../data/craftables";
import type { BuildingId, Cost, GameState, ResourceId } from "../types";
import { expireCampfire, isCampfireLit, lightCampfire } from "./buildings";
import { incrementBuildingCount, setBuildingCount, syncPopulationWithHousing } from "./camp";
import { describeCost, hasCost, payCost } from "./inventory";
import { addLog } from "./log";
import { isBuildingUnlocked } from "./progression";
import { addBuildingSkillXp } from "./skills";

export function buildStructure(state: GameState, buildingId: BuildingId, now = Date.now()): boolean {
  expireCampfire(state, now);
  const definition = buildingDefinitions.find((building) => building.id === buildingId);
  const alreadyBuilt =
    buildingId === "campfire" ? isCampfireLit(state, now) : buildingId === "hideTent" ? false : state.buildings[buildingId];
  if (
    !definition ||
    alreadyBuilt ||
    state.characters.find((character) => character.id === state.selectedCharacterId)?.locationId !== "camp" ||
    !isBuildingUnlocked(state, buildingId, now) ||
    !hasCost(state, definition.recipe)
  ) {
    return false;
  }

  payCost(state, definition.recipe);
  if (buildingId === "campfire") {
    lightCampfire(state, now);
    setBuildingCount(state, buildingId, 1);
    addLog(state, "Cameron builds a campfire and brings it to flame.", "craft", now);
  } else if (buildingId === "hideTent") {
    const tentCount = incrementBuildingCount(state, buildingId);
    state.buildings[buildingId] = true;
    addLog(state, `Cameron raises hide tent ${tentCount}.`, "craft", now);
    syncPopulationWithHousing(state, now);
  } else {
    state.buildings[buildingId] = true;
    setBuildingCount(state, buildingId, 1);
    addLog(state, `Cameron builds a ${definition.label}.`, "craft", now);
  }
  addBuildingSkillXp(state, buildingId, now);
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
