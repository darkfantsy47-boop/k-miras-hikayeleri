import { useState } from "react";
import { useGame } from "@/contexts/GameContext";
import { MainMenu } from "@/components/game/MainMenu";
import { CharacterCreation } from "@/components/game/CharacterCreation";
import { GameScreen } from "@/components/game/GameScreen";
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
    toast.info("Ayarlar", {
      description: "Ayarlar paneli yakında gelecek!"
    });
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
