import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import heroKnight from "@/assets/hero-knight.png";
import heroArcher from "@/assets/hero-archer.png";
import heroMage from "@/assets/hero-mage.png";
import heroCavalry from "@/assets/hero-cavalry.png";
import { Sword, Target, Sparkles, Zap } from "lucide-react";

interface CharacterCreationProps {
  onComplete: (name: string, characterClass: string, portrait: string) => void;
  onBack: () => void;
}

const characterClasses = [
  {
    id: "şövalye",
    name: "Şövalye",
    description: "Güçlü bir savaşçı. Yüksek savunma ve saldırı gücü.",
    portrait: heroKnight,
    icon: Sword,
    stats: "Saldırı: ⭐⭐⭐⭐ | Savunma: ⭐⭐⭐⭐⭐"
  },
  {
    id: "okçu",
    name: "Okçu",
    description: "Uzaktan saldırı ustası. Hızlı ve ölümcül.",
    portrait: heroArcher,
    icon: Target,
    stats: "Saldırı: ⭐⭐⭐⭐⭐ | Savunma: ⭐⭐⭐"
  },
  {
    id: "büyücü",
    name: "Büyücü",
    description: "Mistik güçlere sahip. Güçlü büyüler kullanır.",
    portrait: heroMage,
    icon: Sparkles,
    stats: "Saldırı: ⭐⭐⭐⭐⭐ | Savunma: ⭐⭐"
  },
  {
    id: "süvari",
    name: "Süvari",
    description: "Atlı savaşçı. Hız ve güç kombinasyonu.",
    portrait: heroCavalry,
    icon: Zap,
    stats: "Saldırı: ⭐⭐⭐⭐ | Savunma: ⭐⭐⭐⭐"
  }
];

export const CharacterCreation = ({ onComplete, onBack }: CharacterCreationProps) => {
  const [name, setName] = useState("");
  const [selectedClass, setSelectedClass] = useState(characterClasses[0]);

  const handleSubmit = () => {
    if (name.trim()) {
      onComplete(name, selectedClass.id, selectedClass.portrait);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full p-8 bg-card border-2 border-primary/30 shadow-[0_0_30px_rgba(180,40,40,0.3)]">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-medieval text-4xl text-primary">Karakter Yaratma</h2>
            <p className="font-body text-muted-foreground">Macerana başlamadan önce karakterini oluştur</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="font-medieval text-lg">Adın</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Kahramanının adını gir..."
                className="h-12 text-lg border-2 border-border focus:border-primary"
                maxLength={20}
              />
            </div>

            <div>
              <Label className="font-medieval text-lg block mb-4">Sınıfını Seç</Label>
              <div className="grid md:grid-cols-2 gap-4">
                {characterClasses.map((charClass) => {
                  const Icon = charClass.icon;
                  return (
                    <Card
                      key={charClass.id}
                      onClick={() => setSelectedClass(charClass)}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedClass.id === charClass.id
                          ? "border-2 border-primary shadow-[0_0_20px_rgba(180,40,40,0.5)]"
                          : "border-2 border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="p-4 flex gap-4">
                        <img 
                          src={charClass.portrait} 
                          alt={charClass.name}
                          className="w-24 h-24 object-cover rounded-lg border-2 border-primary/50"
                        />
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <Icon className="w-5 h-5 text-primary" />
                            <h3 className="font-medieval text-xl text-primary">{charClass.name}</h3>
                          </div>
                          <p className="font-body text-sm text-muted-foreground">{charClass.description}</p>
                          <p className="font-body text-xs text-gold">{charClass.stats}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={onBack}
              variant="outline"
              className="flex-1 h-12 font-medieval text-lg"
            >
              Geri
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!name.trim()}
              className="flex-1 h-12 font-medieval text-lg bg-primary hover:bg-primary/90"
            >
              Maceraya Başla
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
