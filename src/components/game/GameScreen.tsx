import { useState, useEffect } from "react";
import { useGame } from "@/contexts/GameContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Coins, Users, Heart, Award, Menu, Map, ShoppingBag } from "lucide-react";
import { EventCard } from "./EventCard";
import { ArmyPanel } from "./ArmyPanel";
import { MarketPanel } from "./MarketPanel";
import { MapScreen } from "./MapScreen";
import { CombatScreen } from "./CombatScreen";
import { DialogueScreen } from "./DialogueScreen";
import { SettingsScreen } from "./SettingsScreen";
import { toast } from "sonner";
import { audioManager } from "@/utils/audioManager";

type View = "game" | "army" | "market" | "map" | "combat" | "dialogue" | "settings";

export const GameScreen = () => {
  const {
    gameState,
    getRandomEvent,
    updateGold,
    updateMorale,
    updateReputation,
    addUnits,
    removeUnits,
    completeEvent,
    addItem,
    addXP,
    advanceDay,
    endCombat,
    endDialogue,
    changeLocation,
    startCombat,
    unlockLocation
  } = useGame();

  const [currentView, setCurrentView] = useState<View>("game");
  const [currentEvent, setCurrentEvent] = useState(getRandomEvent());

  useEffect(() => {
    // Check for active combat or dialogue
    if (gameState.currentCombat) {
      setCurrentView("combat");
    } else if (gameState.currentDialogue) {
      setCurrentView("dialogue");
    }
  }, [gameState.currentCombat, gameState.currentDialogue]);

  const handleChoice = (effects: any) => {
    audioManager.playSound("click");

    if (effects.gold) updateGold(effects.gold);
    if (effects.morale) updateMorale(effects.morale);
    if (effects.reputation) updateReputation(effects.reputation);
    if (effects.unitsLost) removeUnits(effects.unitsLost);
    if (effects.unitsGained) addUnits(effects.unitsGained, "piyade");
    if (effects.xp) addXP(effects.xp);
    if (effects.itemGained) {
      toast.success("Eşya kazandınız!", { description: effects.itemGained });
    }
    if (effects.startCombat) {
      const combat = {
        id: `combat_${Date.now()}`,
        enemyName: effects.enemyName || "Düşman",
        enemyHp: effects.enemyHp || 100,
        enemyMaxHp: effects.enemyMaxHp || 100,
        enemyAttack: effects.enemyAttack || 15,
        enemyDefense: effects.enemyDefense || 10,
        playerHp: 100,
        playerMaxHp: 100,
        rewards: effects.combatRewards || { gold: 50, xp: 30 }
      };
      startCombat(combat);
      return;
    }

    if (currentEvent) {
      completeEvent(currentEvent.id);
    }

    advanceDay();

    setTimeout(() => {
      setCurrentEvent(getRandomEvent());
    }, 3000);
  };

  const handleCombatVictory = (rewards: any) => {
    audioManager.playSound("victory");
    if (rewards.gold) updateGold(rewards.gold);
    if (rewards.xp) addXP(rewards.xp);
    toast.success("Zafer!", { description: "Savaşı kazandınız!" });
    endCombat();
    setCurrentView("game");
    advanceDay();
    setTimeout(() => {
      setCurrentEvent(getRandomEvent());
    }, 1000);
  };

  const handleCombatDefeat = () => {
    audioManager.playSound("defeat");
    removeUnits(Math.min(2, gameState.army.length));
    updateGold(-50);
    updateMorale(-20);
    toast.error("Yenilgi!", { description: "Savaşı kaybettiniz." });
    endCombat();
    setCurrentView("game");
    advanceDay();
    setTimeout(() => {
      setCurrentEvent(getRandomEvent());
    }, 1000);
  };

  const handleDialogueComplete = (effects?: any) => {
    audioManager.playSound("click");
    if (effects) {
      if (effects.gold) updateGold(effects.gold);
      if (effects.reputation) updateReputation(effects.reputation);
      if (effects.itemGained) {
        toast.success("Eşya kazandınız!", { description: effects.itemGained });
      }
    }
    endDialogue();
    setCurrentView("game");
  };

  const handleLocationSelect = (locationId: string) => {
    changeLocation(locationId);
    setCurrentView("game");
    toast.info("Konum değişti", { description: `${gameState.locations.find(l => l.id === locationId)?.name} konumuna geldiniz.` });
    
    // Unlock castle after visiting forest
    if (locationId === "forest" && !gameState.locations.find(l => l.id === "castle")?.unlocked) {
      unlockLocation("castle");
      toast.success("Yeni konum!", { description: "Kale kilidi açıldı!" });
    }
  };

  // Handle different views
  if (currentView === "combat" && gameState.currentCombat) {
    return <CombatScreen onVictory={handleCombatVictory} onDefeat={handleCombatDefeat} />;
  }

  if (currentView === "dialogue" && gameState.currentDialogue) {
    return <DialogueScreen onComplete={handleDialogueComplete} />;
  }

  if (currentView === "army") {
    return <ArmyPanel onClose={() => setCurrentView("game")} />;
  }

  if (currentView === "market") {
    return <MarketPanel onClose={() => setCurrentView("game")} />;
  }

  if (currentView === "map") {
    return <MapScreen onClose={() => setCurrentView("game")} onLocationSelect={handleLocationSelect} />;
  }

  if (currentView === "settings") {
    return <SettingsScreen onClose={() => setCurrentView("game")} />;
  }

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header with character stats */}
      <Card className="mb-4 p-4 bg-card border-2 border-primary/30">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <img
              src={gameState.character.portrait}
              alt={gameState.character.name}
              className="w-16 h-16 rounded-full border-2 border-primary"
            />
            <div>
              <h2 className="font-medieval text-2xl text-primary">{gameState.character.name}</h2>
              <p className="font-body text-sm text-muted-foreground capitalize">
                {gameState.character.class} - Seviye {gameState.character.level}
              </p>
            </div>
          </div>

          <div className="flex gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5 text-gold" />
              <span className="font-medieval text-gold">{gameState.character.gold}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="font-medieval">{gameState.army.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-400" />
              <div className="w-24">
                <Progress value={gameState.character.morale} className="h-2" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-400" />
              <div className="w-24">
                <Progress value={gameState.character.reputation} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Navigation buttons */}
      <div className="mb-4 flex gap-2 flex-wrap">
        <Button onClick={() => setCurrentView("army")} variant="outline" className="flex-1">
          <Users className="mr-2 h-4 w-4" />
          Ordu
        </Button>
        <Button onClick={() => setCurrentView("market")} variant="outline" className="flex-1">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Pazar
        </Button>
        <Button onClick={() => setCurrentView("map")} variant="outline" className="flex-1">
          <Map className="mr-2 h-4 w-4" />
          Harita
        </Button>
        <Button onClick={() => setCurrentView("settings")} variant="outline">
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Day counter & Location */}
      <div className="text-center mb-4">
        <p className="font-medieval text-lg text-muted-foreground">
          Gün {gameState.dayCount} - {gameState.locations.find(l => l.id === gameState.currentLocation)?.name}
        </p>
      </div>

      {/* Event display */}
      <div className="max-w-4xl mx-auto">
        {currentEvent ? (
          <EventCard event={currentEvent} onChoice={handleChoice} />
        ) : (
          <Card className="p-8 text-center bg-card border-2 border-primary/30">
            <h3 className="font-medieval text-2xl text-primary mb-4">Tüm Olayları Tamamladınız!</h3>
            <p className="font-body text-muted-foreground">
              Harika bir macera oldu! Karakteriniz artık efsane...
            </p>
            <div className="mt-6 space-y-2">
              <p className="font-medieval text-gold text-xl">Toplam Altın: {gameState.character.gold}</p>
              <p className="font-medieval text-lg">Seviye: {gameState.character.level}</p>
              <p className="font-medieval text-lg">İtibar: {gameState.character.reputation}/100</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};
