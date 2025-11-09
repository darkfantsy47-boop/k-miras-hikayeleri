import { Button } from "@/components/ui/button";
import menuBackground from "@/assets/menu-background.png";
import { Swords, BookOpen, Settings, LogOut } from "lucide-react";
import { audioManager } from "@/utils/audioManager";

interface MainMenuProps {
  onNewGame: () => void;
  onContinue: () => void;
  onSettings: () => void;
  hasSavedGame: boolean;
}

export const MainMenu = ({ onNewGame, onContinue, onSettings, hasSavedGame }: MainMenuProps) => {
  const handleClick = (action: () => void) => {
    audioManager.playSound("click");
    action();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${menuBackground})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 text-center space-y-8 px-4 max-w-md w-full">
        <div className="space-y-4 animate-fade-in">
          <h1 className="font-medieval text-6xl md:text-7xl text-primary text-shadow-glow tracking-wider">
            K MİRAS
          </h1>
          <h2 className="font-medieval text-3xl md:text-4xl text-gold tracking-wide">
            HİKAYELERİ
          </h2>
          <p className="font-body text-muted-foreground text-lg italic">
            Karanlık bir fantezi macerası
          </p>
        </div>

        <div className="space-y-4 animate-scale-in">
          <Button
            onClick={() => handleClick(onNewGame)}
            className="w-full h-14 text-lg font-medieval bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(180,40,40,0.5)] hover:shadow-[0_0_30px_rgba(180,40,40,0.7)] transition-all duration-300"
          >
            <Swords className="mr-2 h-5 w-5" />
            Yeni Oyun
          </Button>

          {hasSavedGame && (
            <Button
              onClick={() => handleClick(onContinue)}
              variant="secondary"
              className="w-full h-14 text-lg font-medieval bg-card hover:bg-card/80 border-2 border-gold/50"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Devam Et
            </Button>
          )}

          <Button
            onClick={() => handleClick(onSettings)}
            variant="outline"
            className="w-full h-14 text-lg font-medieval border-2 border-border hover:bg-accent"
          >
            <Settings className="mr-2 h-5 w-5" />
            Ayarlar
          </Button>

          <Button
            onClick={() => window.close()}
            variant="ghost"
            className="w-full h-14 text-lg font-medieval text-muted-foreground hover:text-destructive"
          >
            <LogOut className="mr-2 h-5 w-5" />
            Çıkış
          </Button>
        </div>

        <div className="pt-8 text-sm text-muted-foreground font-body">
          <p>© 2025 K Miras Hikayeleri</p>
          <p className="text-xs mt-2">Lovable ile yapılmıştır</p>
        </div>
      </div>
    </div>
  );
};
