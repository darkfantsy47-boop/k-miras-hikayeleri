import { useState } from "react";
import { useGame } from "@/contexts/GameContext";
import { MainMenu } from "@/components/game/MainMenu";
import { CharacterCreation } from "@/components/game/CharacterCreation";
import { GameScreen } from "@/components/game/GameScreen";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type GameView = "menu" | "character-creation" | "game" | "settings";

const Index = () => {
  const [currentView, setCurrentView] = useState<GameView>("menu");
  const { gameState, startNewGame, loadGame } = useGame();

  const handleNewGame = () => {
    setCurrentView("character-creation");
  };

  const handleContinue = () => {
    const loaded = loadGame();
    if (loaded) {
      setCurrentView("game");
      toast.success("Oyun yüklendi!", {
        description: "Maceranıza kaldığınız yerden devam ediyorsunuz."
      });
    } else {
      toast.error("Kaydedilmiş oyun bulunamadı!");
    }
  };

  const handleSettings = () => {
    setCurrentView("settings");
  };

  const handleCharacterCreationComplete = (name: string, characterClass: string, portrait: string) => {
    startNewGame(name, characterClass, portrait);
    setCurrentView("game");
    toast.success(`Hoş geldin, ${name}!`, {
      description: "Macera başlıyor..."
    });
  };

  const hasSavedGame = !!localStorage.getItem("dark_fantasy_save");

  if (gameState.gameStarted && currentView === "game") {
    return <GameScreen />;
  }

  if (currentView === "character-creation") {
    return (
      <CharacterCreation
        onComplete={handleCharacterCreationComplete}
        onBack={() => setCurrentView("menu")}
      />
    );
  }

  if (currentView === "settings") {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button onClick={() => setCurrentView("menu")} variant="outline">
              Geri
            </Button>
            <h2 className="font-medieval text-3xl text-primary">Ayarlar</h2>
          </div>
          <div className="text-center font-body text-muted-foreground">
            <p>Ayarlar paneli oyun içinde mevcuttur.</p>
            <p>Oyunu başlattıktan sonra menü butonuna basarak ayarlara ulaşabilirsiniz.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <MainMenu
      onNewGame={handleNewGame}
      onContinue={handleContinue}
      onSettings={handleSettings}
      hasSavedGame={hasSavedGame}
    />
  );
};

export default Index;
