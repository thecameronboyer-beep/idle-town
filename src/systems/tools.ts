import { toolDefinitions } from "../data/craftables";
import type { GameState, ToolId } from "../types";
import { addLog } from "./log";

export function getToolDefinition(toolId: ToolId) {
  return toolDefinitions.find((tool) => tool.id === toolId);
}

export function getMaxToolDurability(toolId: ToolId): number {
  return getToolDefinition(toolId)?.maxDurability ?? 1;
}

export function hasUsableTool(state: GameState, toolId: ToolId): boolean {
  const tool = state.tools[toolId];
  return Boolean(tool?.owned && tool.durability > 0);
}

export function equipFreshTool(state: GameState, toolId: ToolId): boolean {
  const tool = state.tools[toolId];
  if (!tool || tool.quantity <= 0) {
    return false;
  }

  tool.quantity -= 1;
  tool.owned = true;
  tool.durability = getMaxToolDurability(toolId);
  return true;
}

export function damageTool(
  state: GameState,
  toolId: ToolId,
  amount: number,
  now = Date.now(),
  characterName = "Cameron"
): void {
  const tool = state.tools[toolId];
  if (!tool?.owned || tool.durability <= 0) {
    return;
  }

  tool.durability = Math.max(0, tool.durability - amount);
  if (tool.durability === 0) {
    const label = getToolDefinition(toolId)?.label ?? "Tool";
    if (equipFreshTool(state, toolId)) {
      addLog(state, `${label} breaks; ${characterName} takes a fresh one from inventory.`, "warning", now, "character");
      return;
    }

    tool.owned = false;
    addLog(state, `${label} breaks. No spare remains.`, "warning", now, "character");
  }
}
