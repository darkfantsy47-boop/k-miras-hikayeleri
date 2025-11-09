import { useGame } from "@/contexts/GameContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Coins, ShoppingCart } from "lucide-react";
import { marketItems } from "@/data/items";
import { toast } from "sonner";

interface MarketPanelProps {
  onClose: () => void;
}

const rarityColors: any = {
  common: "text-gray-400",
  rare: "text-blue-400",
  epic: "text-purple-400",
  legendary: "text-gold"
};

const rarityBorders: any = {
  common: "border-gray-400/30",
  rare: "border-blue-400/30",
  epic: "border-purple-400/30",
  legendary: "border-gold/30"
};

export const MarketPanel = ({ onClose }: MarketPanelProps) => {
  const { gameState, updateGold, addItem } = useGame();

  const handleBuy = (item: typeof marketItems[0]) => {
    if (gameState.character.gold >= item.price) {
      updateGold(-item.price);
      addItem(item);
      toast.success(`${item.name} satın alındı!`, {
        description: item.description
      });
    } else {
      toast.error("Yetersiz altın!", {
        description: `${item.price} altına ihtiyacınız var.`
      });
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <Card className="max-w-6xl mx-auto p-6 bg-card border-2 border-primary/30">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-medieval text-3xl text-primary">Pazar</h2>
            <p className="font-body text-sm text-muted-foreground mt-1">Eşyalar ve ekipmanlar</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
              <Coins className="w-5 h-5 text-gold" />
              <span className="font-medieval text-xl text-gold">{gameState.character.gold}</span>
            </div>
            <Button onClick={onClose} variant="ghost" size="icon">
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {marketItems.map((item) => (
            <Card 
              key={item.id} 
              className={`p-4 bg-accent border-2 ${rarityBorders[item.rarity]} hover:border-primary/50 transition-all hover:scale-[1.02]`}
            >
              <div className="space-y-3">
                <div>
                  <h3 className={`font-medieval text-xl ${rarityColors[item.rarity]}`}>
                    {item.name}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground capitalize">
                    {item.type} • {item.rarity === "common" ? "Sıradan" : 
                                  item.rarity === "rare" ? "Nadir" : 
                                  item.rarity === "epic" ? "Destansı" : "Efsanevi"}
                  </p>
                </div>

                <p className="font-body text-sm text-foreground leading-relaxed min-h-[3rem]">
                  {item.description}
                </p>

                {item.effect && (
                  <div className="flex flex-wrap gap-2 text-xs font-body">
                    {item.effect.attack && (
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded">
                        +{item.effect.attack} Saldırı
                      </span>
                    )}
                    {item.effect.defense && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        +{item.effect.defense} Savunma
                      </span>
                    )}
                    {item.effect.hp && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">
                        +{item.effect.hp} Can
                      </span>
                    )}
                    {item.effect.morale && (
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded">
                        +{item.effect.morale} Moral
                      </span>
                    )}
                  </div>
                )}

                <Button
                  onClick={() => handleBuy(item)}
                  disabled={gameState.character.gold < item.price}
                  className="w-full font-medieval"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {item.price} <Coins className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};
