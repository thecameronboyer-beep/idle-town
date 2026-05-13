import type { CombatClassId, CombatLocationId, EnemyId, ToolId, WeaponRange } from "../types";

export interface CombatClassDefinition {
  id: CombatClassId;
  label: string;
  weaponLabel: string;
  role: string;
  range: WeaponRange;
  maxHp: number;
  maxMana: number;
}

export interface CombatEnemyDefinition {
  id: EnemyId;
  label: string;
  blurb: string;
  glyph: string;
  maxHp: number;
  maxMana: number;
  damage: number;
  attackRange: number;
  actEveryMs: number;
}

export interface CombatLocationDefinition {
  id: CombatLocationId;
  label: string;
  blurb: string;
  gridWidth: number;
  gridHeight: number;
  enemyIds: EnemyId[];
}

export const combatClassDefinitions: CombatClassDefinition[] = [
  {
    id: "fighter",
    label: "Fighter",
    weaponLabel: "Sword",
    role: "A steady front-line duelist.",
    range: "melee",
    maxHp: 34,
    maxMana: 10
  },
  {
    id: "warrior",
    label: "Warrior",
    weaponLabel: "2H Sword",
    role: "A slower heavy striker.",
    range: "melee",
    maxHp: 38,
    maxMana: 8
  },
  {
    id: "bruiser",
    label: "Bruiser",
    weaponLabel: "Club",
    role: "A rugged close-range brawler.",
    range: "melee",
    maxHp: 36,
    maxMana: 8
  },
  {
    id: "crusher",
    label: "Crusher",
    weaponLabel: "2H Club",
    role: "A heavy impact fighter.",
    range: "melee",
    maxHp: 40,
    maxMana: 6
  },
  {
    id: "archer",
    label: "Archer",
    weaponLabel: "Short Bow",
    role: "A ranged skirmisher.",
    range: "ranged",
    maxHp: 28,
    maxMana: 12
  },
  {
    id: "shaman",
    label: "Shaman",
    weaponLabel: "Totem",
    role: "A focus user prepared for future support magic.",
    range: "focus",
    maxHp: 30,
    maxMana: 30
  },
  {
    id: "mage",
    label: "Mage",
    weaponLabel: "Wand",
    role: "A focused caster placeholder for future wand combat.",
    range: "focus",
    maxHp: 24,
    maxMana: 36
  },
  {
    id: "caster",
    label: "Caster",
    weaponLabel: "Staff",
    role: "A long-form spellcaster placeholder for future staff combat.",
    range: "focus",
    maxHp: 26,
    maxMana: 40
  },
  {
    id: "rogue",
    label: "Rogue",
    weaponLabel: "Dagger",
    role: "A fast close-range striker.",
    range: "melee",
    maxHp: 30,
    maxMana: 14
  }
];

export const weaponCombatClasses: Partial<Record<ToolId, CombatClassId>> = {
  woodenSword: "fighter",
  woodenTwoHandedSword: "warrior",
  woodenClub: "bruiser",
  woodenTwoHandedClub: "crusher",
  shortBow: "archer",
  woodenTotem: "shaman",
  stoneDagger: "rogue",
  stoneSpear: "warrior"
};

export const combatEnemyDefinitions: CombatEnemyDefinition[] = [
  {
    id: "goblin",
    label: "Goblin",
    blurb: "A small melee raider that closes distance and swings at nearby party members.",
    glyph: "G",
    maxHp: 16,
    maxMana: 0,
    damage: 2,
    attackRange: 1,
    actEveryMs: 2200
  }
];

export const combatLocationDefinitions: CombatLocationDefinition[] = [
  {
    id: "ruins",
    label: "The Ruins",
    blurb: "Broken stone lanes where the first hostile creatures test the camp's fighters.",
    gridWidth: 7,
    gridHeight: 5,
    enemyIds: ["goblin"]
  }
];

export const combatClassIds: CombatClassId[] = combatClassDefinitions.map((definition) => definition.id);
export const combatEnemyIds: EnemyId[] = combatEnemyDefinitions.map((definition) => definition.id);
export const combatLocationIds: CombatLocationId[] = combatLocationDefinitions.map((definition) => definition.id);

export function getCombatClassDefinition(classId: CombatClassId): CombatClassDefinition {
  return combatClassDefinitions.find((definition) => definition.id === classId) ?? combatClassDefinitions[0];
}

export function getCombatEnemyDefinition(enemyId: EnemyId): CombatEnemyDefinition {
  return combatEnemyDefinitions.find((definition) => definition.id === enemyId) ?? combatEnemyDefinitions[0];
}

export function getCombatLocationDefinition(locationId: CombatLocationId): CombatLocationDefinition {
  return combatLocationDefinitions.find((definition) => definition.id === locationId) ?? combatLocationDefinitions[0];
}
