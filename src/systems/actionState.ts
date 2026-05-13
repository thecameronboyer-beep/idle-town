import type { GameState, RunningAction } from "../types";

export function getCurrentActions(state: GameState): RunningAction[] {
  if (!Array.isArray(state.currentActions)) {
    state.currentActions = state.currentAction ? [state.currentAction] : [];
  }

  return state.currentActions;
}

export function getCurrentAction(state: GameState, characterId = state.selectedCharacterId): RunningAction | null {
  const actions = getCurrentActions(state);
  return actions.find((action) => action.characterId === characterId) ?? null;
}

export function syncCurrentAction(state: GameState): void {
  const actions = getCurrentActions(state);
  state.currentAction = actions.find((action) => action.characterId === state.selectedCharacterId) ?? actions[0] ?? null;
}

export function setRunningAction(state: GameState, running: RunningAction): void {
  const actions = getCurrentActions(state);
  const existingIndex = actions.findIndex((action) => action.characterId === running.characterId);
  if (existingIndex >= 0) {
    actions[existingIndex] = running;
  } else {
    actions.push(running);
  }
  state.currentActions = actions;
  setCharacterWorking(state, true, running.characterId);
  syncCurrentAction(state);
}

export function clearRunningAction(state: GameState, characterId: string): void {
  state.currentActions = getCurrentActions(state).filter((action) => action.characterId !== characterId);
  setCharacterWorking(state, false, characterId);
  syncCurrentAction(state);
}

export function getNextRunningAction(state: GameState): RunningAction | null {
  return (
    [...getCurrentActions(state)].sort((a, b) => {
      if (a.endsAt !== b.endsAt) {
        return a.endsAt - b.endsAt;
      }

      return a.characterId.localeCompare(b.characterId);
    })[0] ?? null
  );
}

export function touch(state: GameState, now: number): void {
  state.updatedAt = now;
  state.lastSimulatedAt = now;
}

export function getCharacterName(state: GameState, characterId: string): string {
  return state.characters.find((entry) => entry.id === characterId)?.name ?? "Someone";
}

export function setCharacterWorking(state: GameState, isWorking: boolean, characterId = state.selectedCharacterId): void {
  const character = state.characters.find((entry) => entry.id === characterId);
  if (!character) {
    return;
  }

  character.condition = isWorking ? "working" : "resting";
}
