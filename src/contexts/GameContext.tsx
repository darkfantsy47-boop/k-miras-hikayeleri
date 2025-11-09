import React, { createContext, useContext, useState, useEffect } from "react";
import { GameState, Character, Unit, Item, GameEvent, Combat, Dialogue } from "@/types/game";
import { gameEvents } from "@/data/events";
import { gameNpcs } from "@/data/npcs";
import { gameLocations } from "@/data/locations";
import heroKnight from "@/assets/hero-knight.png";

const SAVE_KEY = "dark_fantasy_save";

const initialCharacter: Character = {
  name: "",
  class: "şövalye",
  portrait: heroKnight,
  level: 1,
  xp: 0,
  gold: 200,
  reputation: 50,
  morale: 100
};

const initialState: GameState = {
  character: initialCharacter,
  army: [],
  inventory: [],
  completedEvents: [],
  npcs: gameNpcs,
  locations: gameLocations,
  currentLocation: "village",
  gameStarted: false,
  dayCount: 1
};

interface GameContextType {
  gameState: GameState;
  startNewGame: (name: string, characterClass: string, portrait: string) => void;
  saveGame: () => void;
  loadGame: () => boolean;
  addUnits: (count: number, type: Unit["type"]) => void;
  removeUnits: (count: number) => void;
  updateGold: (amount: number) => void;
  updateMorale: (amount: number) => void;
  updateReputation: (amount: number) => void;
  addItem: (item: Item) => void;
  completeEvent: (eventId: string) => void;
  getRandomEvent: () => GameEvent | undefined;
  addXP: (amount: number) => void;
  advanceDay: () => void;
  startCombat: (combat: Combat) => void;
  endCombat: () => void;
  startDialogue: (dialogue: Dialogue) => void;
  endDialogue: () => void;
  changeLocation: (locationId: string) => void;
  unlockLocation: (locationId: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const saveGame = () => {
    localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
  };

  const loadGame = (): boolean => {
    const saved = localStorage.getItem(SAVE_KEY);
    if (saved) {
      try {
        const loadedState = JSON.parse(saved);
        setGameState(loadedState);
        return true;
      } catch {
        return false;
      }
    }
    return false;
  };

  const startNewGame = (name: string, characterClass: string, portrait: string) => {
    const newCharacter: Character = {
      ...initialCharacter,
      name,
      class: characterClass as Character["class"],
      portrait
    };

    const initialArmy: Unit[] = [
      {
        id: "unit_1",
        type: "piyade",
        level: 1,
        hp: 100,
        maxHp: 100,
        attack: 15,
        defense: 10,
        morale: 80,
        xp: 0,
        equipment: []
      },
      {
        id: "unit_2",
        type: "okçu",
        level: 1,
        hp: 80,
        maxHp: 80,
        attack: 20,
        defense: 5,
        morale: 80,
        xp: 0,
        equipment: []
      }
    ];

    setGameState({
      ...initialState,
      character: newCharacter,
      army: initialArmy,
      gameStarted: true
    });
  };

  const addUnits = (count: number, type: Unit["type"]) => {
    const newUnits: Unit[] = [];
    const stats = {
      piyade: { hp: 100, attack: 15, defense: 10 },
      okçu: { hp: 80, attack: 20, defense: 5 },
      süvari: { hp: 120, attack: 25, defense: 15 },
      büyücü: { hp: 60, attack: 30, defense: 5 }
    };

    for (let i = 0; i < count; i++) {
      newUnits.push({
        id: `unit_${Date.now()}_${i}`,
        type,
        level: 1,
        hp: stats[type].hp,
        maxHp: stats[type].hp,
        attack: stats[type].attack,
        defense: stats[type].defense,
        morale: 80,
        xp: 0,
        equipment: []
      });
    }

    setGameState(prev => ({
      ...prev,
      army: [...prev.army, ...newUnits]
    }));
  };

  const removeUnits = (count: number) => {
    setGameState(prev => ({
      ...prev,
      army: prev.army.slice(0, -count)
    }));
  };

  const updateGold = (amount: number) => {
    setGameState(prev => ({
      ...prev,
      character: {
        ...prev.character,
        gold: Math.max(0, prev.character.gold + amount)
      }
    }));
  };

  const updateMorale = (amount: number) => {
    setGameState(prev => ({
      ...prev,
      character: {
        ...prev.character,
        morale: Math.max(0, Math.min(100, prev.character.morale + amount))
      }
    }));
  };

  const updateReputation = (amount: number) => {
    setGameState(prev => ({
      ...prev,
      character: {
        ...prev.character,
        reputation: Math.max(0, Math.min(100, prev.character.reputation + amount))
      }
    }));
  };

  const addItem = (item: Item) => {
    setGameState(prev => ({
      ...prev,
      inventory: [...prev.inventory, item]
    }));
  };

  const completeEvent = (eventId: string) => {
    setGameState(prev => ({
      ...prev,
      completedEvents: [...prev.completedEvents, eventId],
      currentEvent: undefined
    }));
  };

  const getRandomEvent = (): GameEvent | undefined => {
    const availableEvents = gameEvents.filter(
      event => !gameState.completedEvents.includes(event.id)
    );
    
    if (availableEvents.length === 0) return undefined;
    
    const randomIndex = Math.floor(Math.random() * availableEvents.length);
    return availableEvents[randomIndex];
  };

  const addXP = (amount: number) => {
    setGameState(prev => {
      const newXP = prev.character.xp + amount;
      const newLevel = Math.floor(newXP / 100) + 1;
      
      return {
        ...prev,
        character: {
          ...prev.character,
          xp: newXP,
          level: newLevel
        }
      };
    });
  };

  const advanceDay = () => {
    setGameState(prev => ({
      ...prev,
      dayCount: prev.dayCount + 1
    }));
  };

  const startCombat = (combat: Combat) => {
    setGameState(prev => ({
      ...prev,
      currentCombat: combat
    }));
  };

  const endCombat = () => {
    setGameState(prev => ({
      ...prev,
      currentCombat: undefined
    }));
  };

  const startDialogue = (dialogue: Dialogue) => {
    setGameState(prev => ({
      ...prev,
      currentDialogue: dialogue
    }));
  };

  const endDialogue = () => {
    setGameState(prev => ({
      ...prev,
      currentDialogue: undefined
    }));
  };

  const changeLocation = (locationId: string) => {
    setGameState(prev => ({
      ...prev,
      currentLocation: locationId
    }));
  };

  const unlockLocation = (locationId: string) => {
    setGameState(prev => ({
      ...prev,
      locations: prev.locations.map(loc =>
        loc.id === locationId ? { ...loc, unlocked: true } : loc
      )
    }));
  };

  // Auto-save every time game state changes
  useEffect(() => {
    if (gameState.gameStarted) {
      saveGame();
    }
  }, [gameState]);

  return (
    <GameContext.Provider
      value={{
        gameState,
        startNewGame,
        saveGame,
        loadGame,
        addUnits,
        removeUnits,
        updateGold,
        updateMorale,
        updateReputation,
        addItem,
        completeEvent,
        getRandomEvent,
        addXP,
        advanceDay,
        startCombat,
        endCombat,
        startDialogue,
        endDialogue,
        changeLocation,
        unlockLocation
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within GameProvider");
  }
  return context;
};
