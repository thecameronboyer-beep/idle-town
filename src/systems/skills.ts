import type { ActionId, BuildingId, GameState, SkillId, SkillPrestigeBonus, SkillState, Skills } from "../types";
import { applyTestRewardMultiplierToAmount } from "./debugModifiers";

export const MAX_SKILL_LEVEL = 1000;
export const PRESTIGE_INTERVAL = 100;
export const MAX_SKILL_PRESTIGE = 9;
export const TRAVEL_XP_PER_SECOND = 2;

export type SkillDefinition = {
  id: SkillId;
  label: string;
  description: string;
};

export type SkillProgress = {
  cap: number;
  currentLevelXp: number;
  nextLevelXp: number;
  xpIntoLevel: number;
  xpForLevel: number;
  ratio: number;
  atCap: boolean;
  canPrestige: boolean;
};

export const skillDefinitions: SkillDefinition[] = [
  { id: "foraging", label: "Foraging", description: "Gathering loose food and camp materials." },
  { id: "mining", label: "Mining", description: "Breaking stone for ore and fuel." },
  { id: "fishing", label: "Fishing", description: "Catching river fish." },
  { id: "woodcutting", label: "Woodcutting", description: "Chopping trees into useful wood." },
  { id: "hunting", label: "Hunting", description: "Tracking and taking small animals." },
  { id: "crafting", label: "Crafting", description: "Making tools and useful camp goods." },
  { id: "smithing", label: "Smithing", description: "Smelting ore and shaping early metalwork." },
  { id: "textiles", label: "Tailoring", description: "Retting flax, spinning thread, weaving cloth, and sewing goods." },
  { id: "butchering", label: "Butchering", description: "Breaking animals and fish into usable parts." },
  { id: "cooking", label: "Cooking", description: "Preparing food over fire." },
  { id: "leatherworking", label: "Leatherworking", description: "Turning hide into leather." },
  { id: "construction", label: "Construction", description: "Building and improving camp structures." },
  { id: "agility", label: "Agility", description: "Moving between camp and wilderness locations." }
];

export const skillIds: SkillId[] = skillDefinitions.map((definition) => definition.id);

const ACTION_SKILL_XP: Record<ActionId, { skillId: SkillId; xp: number }> = {
  gatherSticks: { skillId: "foraging", xp: 70 },
  gatherStones: { skillId: "foraging", xp: 85 },
  gatherFlaxPlants: { skillId: "foraging", xp: 110 },
  gatherFlaxFibers: { skillId: "foraging", xp: 100 },
  gatherMeadowIngredients: { skillId: "foraging", xp: 120 },
  gatherWater: { skillId: "foraging", xp: 90 },
  mineCoal: { skillId: "mining", xp: 360 },
  mineCopper: { skillId: "mining", xp: 360 },
  mineTin: { skillId: "mining", xp: 360 },
  fishRiver: { skillId: "fishing", xp: 180 },
  craftLowestTool: { skillId: "crafting", xp: 150 },
  craftBasket: { skillId: "crafting", xp: 150 },
  craftWoodenSpoon: { skillId: "crafting", xp: 100 },
  craftFishingPole: { skillId: "crafting", xp: 150 },
  craftWoodenBowl: { skillId: "crafting", xp: 120 },
  craftStoneKnife: { skillId: "crafting", xp: 150 },
  craftStoneDagger: { skillId: "crafting", xp: 160 },
  craftStoneAxe: { skillId: "crafting", xp: 170 },
  craftStonePickAxe: { skillId: "crafting", xp: 180 },
  craftStoneSpear: { skillId: "crafting", xp: 180 },
  craftWoodenSword: { skillId: "crafting", xp: 200 },
  craftWoodenTwoHandedSword: { skillId: "crafting", xp: 230 },
  craftWoodenClub: { skillId: "crafting", xp: 180 },
  craftWoodenTwoHandedClub: { skillId: "crafting", xp: 210 },
  craftShortBow: { skillId: "crafting", xp: 220 },
  craftWoodenTotem: { skillId: "crafting", xp: 220 },
  chopTrees: { skillId: "woodcutting", xp: 220 },
  huntSmallAnimals: { skillId: "hunting", xp: 340 },
  butcherFish: { skillId: "butchering", xp: 150 },
  butcherRabbit: { skillId: "butchering", xp: 220 },
  butcherSquirrel: { skillId: "butchering", xp: 170 },
  cookRabbitMeat: { skillId: "cooking", xp: 160 },
  cookSquirrelMeat: { skillId: "cooking", xp: 160 },
  tanHide: { skillId: "leatherworking", xp: 430 },
  craftLeatherBackpack: { skillId: "leatherworking", xp: 900 },
  retFlax: { skillId: "textiles", xp: 420 },
  separateFlaxFiber: { skillId: "textiles", xp: 260 },
  handSpinLinenThread: { skillId: "textiles", xp: 190 },
  spinLinenThread: { skillId: "textiles", xp: 420 },
  weaveLinenCloth: { skillId: "textiles", xp: 520 },
  craftCopperNeedle: { skillId: "smithing", xp: 120 },
  craftBronzeNeedle: { skillId: "smithing", xp: 150 },
  sewClothWrap: { skillId: "textiles", xp: 180 },
  sewLinenBandage: { skillId: "textiles", xp: 150 },
  sewSimplePouch: { skillId: "textiles", xp: 260 },
  sewLinenHood: { skillId: "textiles", xp: 300 },
  sewLinenShirt: { skillId: "textiles", xp: 420 },
  smeltCopperBar: { skillId: "smithing", xp: 260 },
  smeltBronzeBar: { skillId: "smithing", xp: 420 },
  craftPot: { skillId: "smithing", xp: 220 },
  craftLadle: { skillId: "smithing", xp: 180 },
  craftCopperPickaxe: { skillId: "smithing", xp: 320 },
  craftCopperHatchet: { skillId: "smithing", xp: 280 },
  craftCopperKnife: { skillId: "smithing", xp: 220 },
  craftBronzePickaxe: { skillId: "smithing", xp: 500 },
  craftBronzeHatchet: { skillId: "smithing", xp: 440 },
  craftBronzeKnife: { skillId: "smithing", xp: 340 }
};

const BUILDING_SKILL_XP: Record<BuildingId, number> = {
  campfire: 80,
  tanningRack: 320,
  hideTent: 450,
  crudeStoneFurnace: 520,
  primitiveSpinningWheel: 360,
  primitiveLoom: 480
};

export function createEmptySkills(): Skills {
  return Object.fromEntries(skillIds.map((skillId) => [skillId, createInitialSkillState()])) as Skills;
}

export function normalizeSkills(rawSkills: unknown): Skills {
  const skills = createEmptySkills();
  if (!rawSkills || typeof rawSkills !== "object") {
    return skills;
  }

  const savedSkills = rawSkills as Partial<Record<SkillId, Partial<SkillState>>>;
  for (const skillId of skillIds) {
    skills[skillId] = normalizeSkill(savedSkills[skillId]);
  }
  return skills;
}

export function isSkillId(value: string | undefined): value is SkillId {
  return skillIds.some((skillId) => skillId === value);
}

export function getSkillDefinition(skillId: SkillId): SkillDefinition {
  return skillDefinitions.find((definition) => definition.id === skillId) ?? skillDefinitions[0];
}

export function getXpForNextSkillLevel(currentLevel: number): number {
  const level = clampInteger(currentLevel, 1, MAX_SKILL_LEVEL);
  return level >= MAX_SKILL_LEVEL ? 0 : 50 * level * level;
}

export function getTotalXpForSkillLevel(level: number): number {
  const safeLevel = clampInteger(level, 1, MAX_SKILL_LEVEL);
  return (50 * (safeLevel - 1) * safeLevel * (2 * safeLevel - 1)) / 6;
}

export function getSkillLevelCap(skill: SkillState): number {
  return getSkillLevelCapForPrestige(skill.prestige);
}

export function getSkillProgress(skill: SkillState): SkillProgress {
  const cap = getSkillLevelCap(skill);
  const atCap = skill.level >= cap;
  const currentLevelXp = getTotalXpForSkillLevel(skill.level);
  const nextLevelXp = skill.level >= MAX_SKILL_LEVEL ? currentLevelXp : getTotalXpForSkillLevel(skill.level + 1);
  const xpForLevel = Math.max(0, nextLevelXp - currentLevelXp);
  const xpIntoLevel = atCap ? xpForLevel : Math.max(0, Math.min(skill.xp - currentLevelXp, xpForLevel));
  return {
    cap,
    currentLevelXp,
    nextLevelXp,
    xpIntoLevel,
    xpForLevel,
    ratio: xpForLevel <= 0 ? 1 : xpIntoLevel / xpForLevel,
    atCap,
    canPrestige: canPrestigeSkill(skill)
  };
}

export function canPrestigeSkill(skill: SkillState): boolean {
  const cap = getSkillLevelCap(skill);
  return cap < MAX_SKILL_LEVEL && skill.level >= cap;
}

export function prestigeSkill(state: GameState, skillId: SkillId, now = Date.now()): boolean {
  ensureSkills(state);
  const skill = state.skills[skillId];
  if (!canPrestigeSkill(skill)) {
    return false;
  }

  skill.prestige = clampInteger(skill.prestige + 1, 0, MAX_SKILL_PRESTIGE);
  skill.level = 1;
  skill.xp = 0;
  state.updatedAt = now;
  state.lastSimulatedAt = now;
  return true;
}

export function addActionSkillXp(state: GameState, actionId: ActionId, now = Date.now()): void {
  const reward = ACTION_SKILL_XP[actionId];
  addSkillXp(state, reward.skillId, reward.xp, now);
}

export function addBuildingSkillXp(state: GameState, buildingId: BuildingId, now = Date.now()): void {
  addSkillXp(state, "construction", BUILDING_SKILL_XP[buildingId], now);
}

export function addTravelSkillXp(state: GameState, durationMs: number, now = Date.now()): void {
  if (durationMs <= 0) {
    return;
  }

  addSkillXp(state, "agility", Math.max(1, Math.round((durationMs / 1000) * TRAVEL_XP_PER_SECOND)), now);
}

export function addCookingSkillXp(state: GameState, amount: number, now = Date.now()): void {
  addSkillXp(state, "cooking", amount, now);
}

export function addSkillXp(state: GameState, skillId: SkillId, amount: number, now = Date.now()): void {
  const gained = Math.max(0, Math.floor(applyTestRewardMultiplierToAmount(amount)));
  if (gained <= 0) {
    return;
  }

  ensureSkills(state);
  const skill = state.skills[skillId];
  const cap = getSkillLevelCap(skill);
  skill.totalXp += gained;
  skill.xp = Math.min(getTotalXpForSkillLevel(cap), skill.xp + gained);
  skill.level = getLevelForXp(skill.xp, cap);
  state.updatedAt = now;
  state.lastSimulatedAt = now;
}

export function getSkillIdForAction(actionId: ActionId): SkillId {
  return ACTION_SKILL_XP[actionId].skillId;
}

export function getActionSkillXp(actionId: ActionId): number {
  return applyTestRewardMultiplierToAmount(ACTION_SKILL_XP[actionId].xp);
}

export function getBuildingSkillXp(buildingId: BuildingId): number {
  return applyTestRewardMultiplierToAmount(BUILDING_SKILL_XP[buildingId]);
}

export function formatSkillXp(value: number): string {
  const amount = Math.max(0, value);
  if (amount >= 1_000_000_000) {
    return `${formatCompactAmount(amount / 1_000_000_000)}B`;
  }
  if (amount >= 1_000_000) {
    return `${formatCompactAmount(amount / 1_000_000)}M`;
  }
  if (amount >= 1_000) {
    return `${formatCompactAmount(amount / 1_000)}K`;
  }
  return Math.round(amount).toLocaleString("en-US");
}

function createInitialSkillState(): SkillState {
  return {
    level: 1,
    xp: 0,
    totalXp: 0,
    prestige: 0,
    bonuses: []
  };
}

function normalizeSkill(savedSkill: Partial<SkillState> | undefined): SkillState {
  if (!savedSkill || typeof savedSkill !== "object") {
    return createInitialSkillState();
  }

  const prestige = clampInteger(savedSkill.prestige, 0, MAX_SKILL_PRESTIGE);
  const cap = getSkillLevelCapForPrestige(prestige);
  const xp = clampNumber(savedSkill.xp, 0, getTotalXpForSkillLevel(cap));
  const totalXp = Math.max(xp, Math.max(0, Math.floor(Number(savedSkill.totalXp ?? 0))));
  return {
    level: getLevelForXp(xp, cap),
    xp,
    totalXp,
    prestige,
    bonuses: normalizePrestigeBonuses(savedSkill.bonuses)
  };
}

function normalizePrestigeBonuses(rawBonuses: unknown): SkillPrestigeBonus[] {
  if (!Array.isArray(rawBonuses)) {
    return [];
  }

  return rawBonuses.filter((bonus): bonus is SkillPrestigeBonus => {
    if (!bonus || typeof bonus !== "object") {
      return false;
    }

    const candidate = bonus as Partial<SkillPrestigeBonus>;
    return typeof candidate.id === "string" && typeof candidate.label === "string";
  });
}

function getLevelForXp(xp: number, cap: number): number {
  let level = 1;
  while (level < cap && xp >= getTotalXpForSkillLevel(level + 1)) {
    level += 1;
  }
  return level;
}

function getSkillLevelCapForPrestige(prestige: number): number {
  const safePrestige = clampInteger(prestige, 0, MAX_SKILL_PRESTIGE);
  return Math.min(MAX_SKILL_LEVEL, (safePrestige + 1) * PRESTIGE_INTERVAL);
}

function ensureSkills(state: GameState): void {
  state.skills = normalizeSkills(state.skills);
}

function clampInteger(value: unknown, min: number, max: number): number {
  const numberValue = Number(value ?? min);
  if (!Number.isFinite(numberValue)) {
    return min;
  }

  return Math.min(max, Math.max(min, Math.floor(numberValue)));
}

function clampNumber(value: unknown, min: number, max: number): number {
  const numberValue = Number(value ?? min);
  if (!Number.isFinite(numberValue)) {
    return min;
  }

  return Math.min(max, Math.max(min, Math.floor(numberValue)));
}

function formatCompactAmount(value: number): string {
  return value.toFixed(2).replace(/\.?0+$/, "");
}
