import { toolDefinitions } from "../data/craftables";
import type { GameState, ToolId, ToolRole } from "../types";
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

export function getToolDefinitionsForRole(role: ToolRole) {
  return toolDefinitions
    .filter((tool) => tool.roles.includes(role))
    .sort((left, right) => getToolRoleTier(right.id, role) - getToolRoleTier(left.id, role));
}

export function getBestUsableToolForRole(state: GameState, role: ToolRole): ToolId | null {
  return getToolDefinitionsForRole(role).find((tool) => hasUsableTool(state, tool.id))?.id ?? null;
}

export function hasUsableToolForRole(state: GameState, role: ToolRole): boolean {
  return Boolean(getBestUsableToolForRole(state, role));
}

export function getToolTierForRole(state: GameState, role: ToolRole): number {
  const toolId = getBestUsableToolForRole(state, role);
  if (!toolId) {
    return 0;
  }

  return getToolRoleTier(toolId, role);
}

export function getToolRoleTier(toolId: ToolId, role: ToolRole): number {
  const definition = getToolDefinition(toolId);
  if (!definition?.roles.includes(role)) {
    return 0;
  }

  return definition.roleTiers?.[role] ?? definition.weapon?.damage ?? 1;
}

export function getToolCombatPower(toolId: ToolId): number {
  return getToolDefinition(toolId)?.weapon?.damage ?? 0;
}

export function getCombatPowerForRole(state: GameState, role: ToolRole): number {
  const toolId = getBestUsableToolForRole(state, role);
  return toolId ? getToolCombatPower(toolId) : 0;
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

export function damageBestToolForRole(
  state: GameState,
  role: ToolRole,
  amount: number,
  now = Date.now(),
  characterName = "Cameron"
): void {
  const toolId = getBestUsableToolForRole(state, role);
  if (toolId) {
    damageTool(state, toolId, amount, now, characterName);
  }
}
