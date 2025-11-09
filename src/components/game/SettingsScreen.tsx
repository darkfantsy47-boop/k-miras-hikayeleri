import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Volume2, Music, Trash2, VolumeX } from "lucide-react";
import { audioManager } from "@/utils/audioManager";
import { useState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface SettingsScreenProps {
  onClose: () => void;
}

export const SettingsScreen = ({ onClose }: SettingsScreenProps) => {
  const [soundVolume, setSoundVolume] = useState(audioManager.getSoundVolume() * 100);
  const [musicVolume, setMusicVolume] = useState(audioManager.getMusicVolume() * 100);
  const [isMuted, setIsMuted] = useState(audioManager.getIsMuted());

  const handleSoundVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setSoundVolume(newVolume);
    audioManager.setSoundVolume(newVolume / 100);
    audioManager.playSound("click");
  };

  const handleMusicVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setMusicVolume(newVolume);
    audioManager.setMusicVolume(newVolume / 100);
  };

  const handleToggleMute = () => {
    const muted = audioManager.toggleMute();
    setIsMuted(muted);
    toast.info(muted ? "Ses kapatıldı" : "Ses açıldı");
  };

  const handleResetSave = () => {
    localStorage.removeItem("dark_fantasy_save");
    toast.success("Kayıt silindi!", {
      description: "Oyun yeniden başlayacak..."
    });
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button onClick={onClose} variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h2 className="font-medieval text-3xl text-primary">Ayarlar</h2>
        </div>

        <Card className="p-6 space-y-8">
          {/* Sound Volume */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="font-medieval text-lg flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-primary" />
                Ses Efektleri
              </Label>
              <span className="font-body text-sm text-muted-foreground">
                {Math.round(soundVolume)}%
              </span>
            </div>
            <Slider
              value={[soundVolume]}
              onValueChange={handleSoundVolumeChange}
              max={100}
              step={1}
              disabled={isMuted}
              className="w-full"
            />
          </div>

          {/* Music Volume */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="font-medieval text-lg flex items-center gap-2">
                <Music className="w-5 h-5 text-primary" />
                Müzik
              </Label>
              <span className="font-body text-sm text-muted-foreground">
                {Math.round(musicVolume)}%
              </span>
            </div>
            <Slider
              value={[musicVolume]}
              onValueChange={handleMusicVolumeChange}
              max={100}
              step={1}
              disabled={isMuted}
              className="w-full"
            />
          </div>

          {/* Mute Toggle */}
          <Button
            onClick={handleToggleMute}
            variant="outline"
            className="w-full h-14 font-medieval text-base"
          >
            {isMuted ? (
              <>
                <VolumeX className="mr-2 h-5 w-5" />
                Sesi Aç
              </>
            ) : (
              <>
                <Volume2 className="mr-2 h-5 w-5" />
                Sesi Kapat
              </>
            )}
          </Button>

          {/* Reset Save */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="destructive"
                className="w-full h-14 font-medieval text-base"
              >
                <Trash2 className="mr-2 h-5 w-5" />
                Kayıtlı Oyunu Sil
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="font-medieval text-2xl">Emin misiniz?</AlertDialogTitle>
                <AlertDialogDescription className="font-body text-base">
                  Bu işlem geri alınamaz. Tüm ilerlemeniz silinecek ve oyun yeniden başlayacak.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="font-medieval">İptal</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleResetSave}
                  className="bg-destructive hover:bg-destructive/90 font-medieval"
                >
                  Evet, Sil
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Card>

        <div className="mt-6 text-center">
          <p className="font-body text-sm text-muted-foreground">
            K Miras Hikayeleri v1.0
          </p>
          <p className="font-body text-xs text-muted-foreground mt-1">
            © 2025 - Tüm hakları saklıdır
          </p>
        </div>
      </div>
    </div>
  );
};
