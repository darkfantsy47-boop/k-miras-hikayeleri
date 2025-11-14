import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useGame } from "@/contexts/GameContext";
import { Swords, Shield, Zap, Skull } from "lucide-react";
import { audioManager } from "@/utils/audioManager";
import { toast } from "sonner";
import fxSlash from "@/assets/fx-slash.png";

interface CombatScreenProps {
  onVictory: (rewards: any) => void;
  onDefeat: () => void;
}

export const CombatScreen = ({ onVictory, onDefeat }: CombatScreenProps) => {
  const { gameState } = useGame();
  const combat = gameState.currentCombat;
  const [playerHp, setPlayerHp] = useState(combat?.playerHp || 100);
  const [enemyHp, setEnemyHp] = useState(combat?.enemyHp || 100);
  const [combatLog, setCombatLog] = useState<string[]>([]);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSlashEffect, setShowSlashEffect] = useState(false);
  const [shakeEnemy, setShakeEnemy] = useState(false);
  const [shakePlayer, setShakePlayer] = useState(false);

  if (!combat) return null;

  const addLog = (message: string) => {
    setCombatLog(prev => [...prev.slice(-4), message]);
  };

  const playerAttack = () => {
    if (!isPlayerTurn || isProcessing) return;
    setIsProcessing(true);
    audioManager.playSound("attack");

    // Slash effect animation
    setShowSlashEffect(true);
    setShakeEnemy(true);
    setTimeout(() => {
      setShowSlashEffect(false);
      setShakeEnemy(false);
    }, 500);

    const armyAttack = gameState.army.reduce((sum, unit) => sum + unit.attack, 0);
    const damage = Math.max(1, Math.floor(armyAttack / 2 - combat.enemyDefense / 4));
    const newEnemyHp = Math.max(0, enemyHp - damage);
    
    setEnemyHp(newEnemyHp);
    addLog(`Saldırı! ${damage} hasar verdiniz!`);

    if (newEnemyHp <= 0) {
      setTimeout(() => {
        toast.success("Zafer!", { description: "Düşmanı yendiniz!" });
        onVictory(combat.rewards);
      }, 1000);
      return;
    }

    setTimeout(() => {
      enemyTurn();
    }, 1500);
  };

  const playerDefend = () => {
    if (!isPlayerTurn || isProcessing) return;
    setIsProcessing(true);
    audioManager.playSound("defend");

    addLog("Savunma duruşu aldınız!");

    setTimeout(() => {
      const damage = Math.max(0, Math.floor(combat.enemyAttack / 4));
      const newPlayerHp = Math.max(0, playerHp - damage);
      setPlayerHp(newPlayerHp);
      addLog(`Düşman saldırdı ama savunma yaptınız! ${damage} hasar aldınız.`);

      if (newPlayerHp <= 0) {
        setTimeout(() => {
          toast.error("Yenildi!", { description: "Ordunuz ağır kayıplar verdi." });
          onDefeat();
        }, 1000);
        return;
      }

      setIsPlayerTurn(true);
      setIsProcessing(false);
    }, 1500);
  };

  const playerSkill = () => {
    if (!isPlayerTurn || isProcessing) return;
    setIsProcessing(true);
    audioManager.playSound("skill");

    // Double slash effect
    setShowSlashEffect(true);
    setShakeEnemy(true);
    setTimeout(() => {
      setShowSlashEffect(false);
    }, 300);
    setTimeout(() => {
      setShowSlashEffect(true);
    }, 400);
    setTimeout(() => {
      setShowSlashEffect(false);
      setShakeEnemy(false);
    }, 700);

    const armyAttack = gameState.army.reduce((sum, unit) => sum + unit.attack, 0);
    const damage = Math.floor(armyAttack * 0.8);
    const newEnemyHp = Math.max(0, enemyHp - damage);
    
    setEnemyHp(newEnemyHp);
    addLog(`Özel yetenek! ${damage} hasar verdiniz!`);

    if (newEnemyHp <= 0) {
      setTimeout(() => {
        toast.success("Zafer!", { description: "Düşmanı yendiniz!" });
        onVictory(combat.rewards);
      }, 1000);
      return;
    }

    setTimeout(() => {
      enemyTurn();
    }, 1500);
  };

  const enemyTurn = () => {
    setIsPlayerTurn(false);
    
    setTimeout(() => {
      audioManager.playSound("attack");
      setShakePlayer(true);
      setTimeout(() => setShakePlayer(false), 500);

      const damage = Math.max(1, combat.enemyAttack - Math.floor(gameState.army.reduce((sum, unit) => sum + unit.defense, 0) / gameState.army.length));
      const newPlayerHp = Math.max(0, playerHp - damage);
      
      setPlayerHp(newPlayerHp);
      addLog(`Düşman saldırdı! ${damage} hasar aldınız!`);

      if (newPlayerHp <= 0) {
        setTimeout(() => {
          toast.error("Yenildi!", { description: "Ordunuz ağır kayıplar verdi." });
          onDefeat();
        }, 1000);
        return;
      }

      setIsPlayerTurn(true);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-6">
        <h2 className="font-medieval text-4xl text-center text-primary animate-pulse">
          ⚔️ SAVAŞ ⚔️
        </h2>

        {/* Enemy */}
        <Card className="p-6 bg-card border-2 border-destructive/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Skull className="w-8 h-8 text-destructive" />
              <h3 className="font-medieval text-2xl text-foreground">{combat.enemyName}</h3>
            </div>
            <div className="text-right">
              <p className="font-body text-sm text-muted-foreground">Can</p>
              <p className="font-medieval text-lg text-destructive">
                {enemyHp}/{combat.enemyMaxHp}
              </p>
            </div>
          </div>
          <Progress value={(enemyHp / combat.enemyMaxHp) * 100} className="h-3" />
        </Card>

        {/* Combat Log */}
        <Card className="p-4 bg-muted/50 border border-border min-h-[120px]">
          <div className="space-y-1">
            {combatLog.map((log, index) => (
              <p key={index} className="font-body text-sm text-foreground animate-fade-in">
                → {log}
              </p>
            ))}
          </div>
        </Card>

        {/* Player */}
        <Card className="p-6 bg-card border-2 border-primary/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src={gameState.character.portrait}
                alt={gameState.character.name}
                className="w-12 h-12 rounded-full border-2 border-primary"
              />
              <h3 className="font-medieval text-2xl text-primary">{gameState.character.name}</h3>
            </div>
            <div className="text-right">
              <p className="font-body text-sm text-muted-foreground">Can</p>
              <p className="font-medieval text-lg text-primary">
                {playerHp}/{combat.playerMaxHp}
              </p>
            </div>
          </div>
          <Progress value={(playerHp / combat.playerMaxHp) * 100} className="h-3" />
        </Card>

        {/* Actions */}
        <div className="grid grid-cols-3 gap-3">
          <Button
            onClick={playerAttack}
            disabled={!isPlayerTurn || isProcessing}
            className="h-20 flex flex-col gap-1 bg-destructive hover:bg-destructive/90"
          >
            <Swords className="w-6 h-6" />
            <span className="font-medieval">Saldır</span>
          </Button>
          <Button
            onClick={playerDefend}
            disabled={!isPlayerTurn || isProcessing}
            className="h-20 flex flex-col gap-1 bg-primary hover:bg-primary/90"
          >
            <Shield className="w-6 h-6" />
            <span className="font-medieval">Savun</span>
          </Button>
          <Button
            onClick={playerSkill}
            disabled={!isPlayerTurn || isProcessing}
            className="h-20 flex flex-col gap-1 bg-accent hover:bg-accent/90"
          >
            <Zap className="w-6 h-6" />
            <span className="font-medieval">Yetenek</span>
          </Button>
        </div>

        {!isPlayerTurn && (
          <p className="text-center font-medieval text-lg text-muted-foreground animate-pulse">
            Düşman sıra...
          </p>
        )}
      </div>
    </div>
  );
};
