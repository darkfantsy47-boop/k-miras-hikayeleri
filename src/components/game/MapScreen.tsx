import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useGame } from "@/contexts/GameContext";
import { MapPin, ArrowLeft } from "lucide-react";
import { audioManager } from "@/utils/audioManager";

interface MapScreenProps {
  onClose: () => void;
  onLocationSelect: (locationId: string) => void;
}

export const MapScreen = ({ onClose, onLocationSelect }: MapScreenProps) => {
  const { gameState } = useGame();

  const handleLocationClick = (locationId: string) => {
    audioManager.playSound("click");
    onLocationSelect(locationId);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button onClick={onClose} variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h2 className="font-medieval text-3xl text-primary">Harita</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gameState.locations.map((location) => (
            <Card
              key={location.id}
              className={`p-6 cursor-pointer transition-all hover:scale-105 border-2 ${
                location.unlocked
                  ? "bg-card border-primary/40 hover:border-primary"
                  : "bg-muted border-muted-foreground/20 opacity-50 cursor-not-allowed"
              } ${
                gameState.currentLocation === location.id
                  ? "ring-2 ring-primary shadow-[0_0_20px_rgba(180,40,40,0.5)]"
                  : ""
              }`}
              onClick={() => location.unlocked && handleLocationClick(location.id)}
            >
              <div className="flex items-start gap-4">
                <MapPin
                  className={`w-8 h-8 ${
                    location.unlocked ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <div className="flex-1">
                  <h3 className="font-medieval text-2xl text-foreground mb-2">
                    {location.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {location.description}
                  </p>
                  {gameState.currentLocation === location.id && (
                    <p className="font-body text-xs text-primary mt-2">● Şu an buradasınız</p>
                  )}
                  {!location.unlocked && (
                    <p className="font-body text-xs text-muted-foreground mt-2">🔒 Kilitli</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
