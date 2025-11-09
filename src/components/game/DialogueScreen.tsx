import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useGame } from "@/contexts/GameContext";
import { ArrowRight } from "lucide-react";
import { audioManager } from "@/utils/audioManager";

interface DialogueScreenProps {
  onComplete: (effects?: any) => void;
}

export const DialogueScreen = ({ onComplete }: DialogueScreenProps) => {
  const { gameState } = useGame();
  const dialogue = gameState.currentDialogue;
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  if (!dialogue) return null;

  const npc = gameState.npcs.find(n => n.id === dialogue.npcId);
  const currentLine = dialogue.lines[currentLineIndex];

  const handleChoice = (choice: any) => {
    audioManager.playSound("click");
    
    if (choice.effects) {
      onComplete(choice.effects);
    } else if (choice.endsDialogue) {
      onComplete();
    } else if (choice.nextLineIndex !== undefined) {
      setCurrentLineIndex(choice.nextLineIndex);
    } else {
      setCurrentLineIndex(currentLineIndex + 1);
    }
  };

  const handleContinue = () => {
    audioManager.playSound("click");
    if (currentLineIndex < dialogue.lines.length - 1) {
      setCurrentLineIndex(currentLineIndex + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <Card className="p-6 bg-card border-2 border-primary/40 animate-scale-in">
          {/* NPC Portrait & Name */}
          {currentLine.speaker === "npc" && npc && (
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
              <img
                src={npc.portrait}
                alt={npc.name}
                className="w-16 h-16 rounded-full border-2 border-primary"
              />
              <div>
                <h3 className="font-medieval text-2xl text-primary">{npc.name}</h3>
                <p className="font-body text-sm text-muted-foreground capitalize">{npc.personality}</p>
              </div>
            </div>
          )}

          {/* Player Name */}
          {currentLine.speaker === "player" && (
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
              <img
                src={gameState.character.portrait}
                alt={gameState.character.name}
                className="w-16 h-16 rounded-full border-2 border-primary"
              />
              <div>
                <h3 className="font-medieval text-2xl text-primary">{gameState.character.name}</h3>
              </div>
            </div>
          )}

          {/* Dialogue Text */}
          <div className="mb-6">
            <p className="font-body text-lg text-foreground leading-relaxed">
              {currentLine.text}
            </p>
          </div>

          {/* Choices or Continue */}
          {currentLine.choices && currentLine.choices.length > 0 ? (
            <div className="space-y-3">
              {currentLine.choices.map((choice, index) => (
                <Button
                  key={index}
                  onClick={() => handleChoice(choice)}
                  className="w-full h-auto py-4 px-6 text-left font-body text-base justify-start hover:scale-[1.02] transition-transform bg-accent hover:bg-accent/80 text-accent-foreground border-2 border-border hover:border-primary/50"
                >
                  {choice.text}
                </Button>
              ))}
            </div>
          ) : (
            <Button
              onClick={handleContinue}
              className="w-full bg-primary hover:bg-primary/90"
            >
              <span className="font-medieval">Devam</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </Card>
      </div>
    </div>
  );
};
