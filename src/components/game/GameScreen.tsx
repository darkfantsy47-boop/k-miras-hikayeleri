import { useState } from "react";
import { useGame } from "@/contexts/GameContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Coins, Users, Heart, Award, Menu, Map, ShoppingBag } from "lucide-react";
import { EventCard } from "./EventCard";
import { ArmyPanel } from "./ArmyPanel";
import { MarketPanel } from "./MarketPanel";

export const GameScreen = () => {
  const { gameState, getRandomEvent, updateGold, updateMorale, updateReputation, addUnits, removeUnits, completeEvent, addItem, addXP, advanceDay } = useGame();
  const [currentEvent, setCurrentEvent] = useState(getRandomEvent());
  const [showArmy, setShowArmy] = useState(false);
  const [showMarket, setShowMarket] = useState(false);

  const handleChoice = (effects: any) => {
    if (effects.gold) updateGold(effects.gold);
    if (effects.morale) updateMorale(effects.morale);
    if (effects.reputation) updateReputation(effects.reputation);
    if (effects.unitsLost) removeUnits(effects.unitsLost);
    if (effects.unitsGained) addUnits(effects.unitsGained, "piyade");
    if (effects.xp) addXP(effects.xp);
    
    if (currentEvent) {
      completeEvent(currentEvent.id);
    }
    
    advanceDay();
    
    setTimeout(() => {
      setCurrentEvent(getRandomEvent());
    }, 3000);
  };

  if (showArmy) {
    return <ArmyPanel onClose={() => setShowArmy(false)} />;
  }

  if (showMarket) {
    return <MarketPanel onClose={() => setShowMarket(false)} />;
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
        <Button onClick={() => setShowArmy(true)} variant="outline" className="flex-1">
          <Users className="mr-2 h-4 w-4" />
          Ordu
        </Button>
        <Button onClick={() => setShowMarket(true)} variant="outline" className="flex-1">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Pazar
        </Button>
        <Button variant="outline" className="flex-1">
          <Map className="mr-2 h-4 w-4" />
          Harita
        </Button>
        <Button variant="outline">
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Day counter */}
      <div className="text-center mb-4">
        <p className="font-medieval text-lg text-muted-foreground">
          Gün {gameState.dayCount}
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
