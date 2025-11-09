export type CharacterClass = "şövalye" | "okçu" | "büyücü" | "süvari";
export type UnitType = "piyade" | "okçu" | "süvari" | "büyücü";

export interface Character {
  name: string;
  class: CharacterClass;
  portrait: string;
  level: number;
  xp: number;
  gold: number;
  reputation: number;
  morale: number;
}

export interface Unit {
  id: string;
  type: UnitType;
  level: number;
  hp: number;
  maxHp: number;
  attack: number;
  defense: number;
  morale: number;
  xp: number;
  equipment: Equipment[];
}

export interface Equipment {
  id: string;
  name: string;
  type: "weapon" | "armor" | "accessory";
  bonus: {
    attack?: number;
    defense?: number;
    hp?: number;
  };
}

export interface Item {
  id: string;
  name: string;
  description: string;
  type: "weapon" | "armor" | "food" | "potion" | "artifact";
  price: number;
  rarity: "common" | "rare" | "epic" | "legendary";
  effect?: {
    hp?: number;
    morale?: number;
    attack?: number;
    defense?: number;
  };
}

export interface NPC {
  id: string;
  name: string;
  portrait: string;
  personality: "friendly" | "neutral" | "hostile" | "cunning";
  dialogue: string[];
  relationship: number;
}

export interface GameEvent {
  id: string;
  title: string;
  description: string;
  image?: string;
  choices: EventChoice[];
  requirements?: {
    minGold?: number;
    minReputation?: number;
    minArmySize?: number;
  };
}

export interface EventChoice {
  text: string;
  outcome: EventOutcome;
}

export interface EventOutcome {
  description: string;
  effects: {
    gold?: number;
    reputation?: number;
    morale?: number;
    unitsLost?: number;
    unitsGained?: number;
    itemGained?: string;
    xp?: number;
  };
}

export interface GameState {
  character: Character;
  army: Unit[];
  inventory: Item[];
  completedEvents: string[];
  currentEvent?: GameEvent;
  npcs: NPC[];
  gameStarted: boolean;
  dayCount: number;
}
