import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GameEvent } from "@/types/game";
import { Sparkles } from "lucide-react";

interface EventCardProps {
  event: GameEvent;
  onChoice: (effects: any) => void;
}

export const EventCard = ({ event, onChoice }: EventCardProps) => {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showOutcome, setShowOutcome] = useState(false);

  const handleChoice = (index: number) => {
    setSelectedChoice(index);
    setShowOutcome(true);
    
    setTimeout(() => {
      onChoice(event.choices[index].outcome.effects);
      setShowOutcome(false);
      setSelectedChoice(null);
    }, 2500);
  };

  return (
    <Card className="p-6 bg-card border-2 border-primary/40 shadow-[0_0_30px_rgba(180,40,40,0.3)] animate-scale-in">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-gold animate-pulse" />
            <h3 className="font-medieval text-3xl text-primary">{event.title}</h3>
            <Sparkles className="w-5 h-5 text-gold animate-pulse" />
          </div>
          <p className="font-body text-lg text-foreground leading-relaxed">
            {event.description}
          </p>
        </div>

        {!showOutcome ? (
          <div className="space-y-3">
            {event.choices.map((choice, index) => (
              <Button
                key={index}
                onClick={() => handleChoice(index)}
                className="w-full h-auto py-4 px-6 text-left font-body text-base hover:scale-[1.02] transition-transform bg-accent hover:bg-accent/80 text-accent-foreground border-2 border-border hover:border-primary/50"
                disabled={selectedChoice !== null}
              >
                {choice.text}
              </Button>
            ))}
          </div>
        ) : (
          <Card className="p-6 bg-muted border-2 border-gold/50 animate-fade-in">
            <div className="space-y-4">
              <h4 className="font-medieval text-xl text-gold text-center">Sonuç</h4>
              <p className="font-body text-base text-foreground leading-relaxed">
                {selectedChoice !== null && event.choices[selectedChoice].outcome.description}
              </p>
              
              <div className="pt-4 border-t border-border">
                <div className="grid grid-cols-2 gap-3 text-sm font-body">
                  {selectedChoice !== null && Object.entries(event.choices[selectedChoice].outcome.effects).map(([key, value]) => {
                    if (!value) return null;
                    
                    const labels: any = {
                      gold: "Altın",
                      reputation: "İtibar",
                      morale: "Moral",
                      unitsLost: "Kayıp",
                      unitsGained: "Kazanç",
                      xp: "Deneyim"
                    };
                    
                    const colors: any = {
                      gold: "text-gold",
                      reputation: "text-purple-400",
                      morale: "text-red-400",
                      unitsLost: "text-destructive",
                      unitsGained: "text-green-400",
                      xp: "text-blue-400"
                    };
                    
                    return (
                      <div key={key} className={`${colors[key]} flex justify-between`}>
                        <span>{labels[key]}:</span>
                        <span className="font-medieval">
                          {typeof value === 'number' && value > 0 && '+'}{value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </Card>
  );
};
