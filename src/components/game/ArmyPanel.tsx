import { useGame } from "@/contexts/GameContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { X, Sword, Shield, Heart, TrendingUp } from "lucide-react";

interface ArmyPanelProps {
  onClose: () => void;
}

const unitTypeNames: any = {
  piyade: "Piyade",
  okçu: "Okçu",
  süvari: "Süvari",
  büyücü: "Büyücü"
};

export const ArmyPanel = ({ onClose }: ArmyPanelProps) => {
  const { gameState } = useGame();

  return (
    <div className="min-h-screen bg-background p-4">
      <Card className="max-w-4xl mx-auto p-6 bg-card border-2 border-primary/30">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-medieval text-3xl text-primary">Ordun</h2>
          <Button onClick={onClose} variant="ghost" size="icon">
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="mb-6 p-4 bg-muted rounded-lg border border-border">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-body text-sm text-muted-foreground">Toplam Asker</p>
              <p className="font-medieval text-2xl text-gold">{gameState.army.length}</p>
            </div>
            <div>
              <p className="font-body text-sm text-muted-foreground">Ortalama Seviye</p>
              <p className="font-medieval text-2xl text-blue-400">
                {(gameState.army.reduce((sum, u) => sum + u.level, 0) / gameState.army.length || 0).toFixed(1)}
              </p>
            </div>
            <div>
              <p className="font-body text-sm text-muted-foreground">Ortalama Moral</p>
              <p className="font-medieval text-2xl text-red-400">
                {(gameState.army.reduce((sum, u) => sum + u.morale, 0) / gameState.army.length || 0).toFixed(0)}%
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {gameState.army.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-body text-lg text-muted-foreground">Ordunda asker yok!</p>
            </div>
          ) : (
            gameState.army.map((unit) => (
              <Card key={unit.id} className="p-4 bg-accent border border-border hover:border-primary/50 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medieval text-xl text-primary">{unitTypeNames[unit.type]}</h3>
                      <p className="font-body text-sm text-muted-foreground">Seviye {unit.level}</p>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Sword className="w-4 h-4 text-red-400" />
                        <span className="font-medieval">{unit.attack}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="font-medieval">{unit.defense}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-400" />
                      <div className="flex-1">
                        <Progress value={(unit.hp / unit.maxHp) * 100} className="h-2" />
                      </div>
                      <span className="font-body text-xs text-muted-foreground">
                        {unit.hp}/{unit.maxHp}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-400" />
                      <div className="flex-1">
                        <Progress value={(unit.xp % 100)} className="h-2" />
                      </div>
                      <span className="font-body text-xs text-muted-foreground">
                        {unit.xp % 100}/100 XP
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-body text-xs text-muted-foreground">Moral:</span>
                      <div className="flex-1">
                        <Progress value={unit.morale} className="h-2" />
                      </div>
                      <span className="font-body text-xs text-muted-foreground">{unit.morale}%</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </Card>
    </div>
  );
};
