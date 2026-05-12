import type { BuildingId, GameState } from "../types";
import { addLog } from "./log";

const SECOND_CHARACTER_ID = "rowan";

export function getBuildingCount(state: GameState, buildingId: BuildingId): number {
  return Math.max(0, Math.floor(state.buildingCounts?.[buildingId] ?? (state.buildings[buildingId] ? 1 : 0)));
}

export function incrementBuildingCount(state: GameState, buildingId: BuildingId): number {
  const nextCount = getBuildingCount(state, buildingId) + 1;
  state.buildingCounts[buildingId] = nextCount;
  return nextCount;
}

export function setBuildingCount(state: GameState, buildingId: BuildingId, count: number): void {
  state.buildingCounts[buildingId] = Math.max(0, Math.floor(count));
}

export function getPopulationCount(state: GameState): number {
  return state.characters.length;
}

export function getPopulationCapacity(state: GameState): number {
  return getBuildingCount(state, "hideTent");
}

export function syncPopulationWithHousing(state: GameState, now = Date.now()): boolean {
  if (getPopulationCapacity(state) < 2 || state.characters.some((character) => character.id === SECOND_CHARACTER_ID)) {
    return false;
  }

  state.characters.push({
    id: SECOND_CHARACTER_ID,
    name: "Rowan",
    epithet: "Drawn to the second shelter",
    condition: "resting",
    locationId: "camp"
  });
  addLog(state, "Rowan joins the camp after the second hide tent goes up.", "craft", now);
  return true;
}
