import type { GameState } from "../types";
import { addLog } from "./log";

export const CAMPFIRE_DURATION_MS = 15 * 60 * 1000;

export function lightCampfire(state: GameState, now = Date.now()): void {
  state.buildings.campfire = true;
  state.campfireExpiresAt = now + CAMPFIRE_DURATION_MS;
}

export function isCampfireLit(state: GameState, now = Date.now()): boolean {
  return Boolean(state.buildings.campfire && getActiveCampfireExpiresAt(state) > now);
}

export function getCampfireRemainingMs(state: GameState, now = Date.now()): number {
  const expiresAt = getActiveCampfireExpiresAt(state);
  return expiresAt > now ? expiresAt - now : 0;
}

export function getActiveCampfireExpiresAt(state: GameState): number {
  return state.buildings.campfire && typeof state.campfireExpiresAt === "number" ? state.campfireExpiresAt : 0;
}

export function expireCampfire(state: GameState, now = Date.now()): boolean {
  const expiresAt = getActiveCampfireExpiresAt(state);
  if (!expiresAt || expiresAt > now) {
    return false;
  }

  state.buildings.campfire = false;
  state.campfireExpiresAt = null;
  addLog(state, "The campfire burns down to charred wood.", "muted", expiresAt);
  state.updatedAt = expiresAt;
  state.lastSimulatedAt = expiresAt;
  return true;
}
