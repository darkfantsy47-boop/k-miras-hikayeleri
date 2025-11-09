import { Item } from "@/types/game";

export const marketItems: Item[] = [
  {
    id: "iron_sword",
    name: "Demir Kılıç",
    description: "Sağlam bir demir kılıç. Saldırı gücünü artırır.",
    type: "weapon",
    price: 50,
    rarity: "common",
    effect: { attack: 10 }
  },
  {
    id: "steel_armor",
    name: "Çelik Zırh",
    description: "Dayanıklı çelik zırh. Savunmayı güçlendirir.",
    type: "armor",
    price: 75,
    rarity: "common",
    effect: { defense: 15 }
  },
  {
    id: "health_potion",
    name: "Can İksiri",
    description: "Yaralı askerleri iyileştirir.",
    type: "potion",
    price: 30,
    rarity: "common",
    effect: { hp: 50 }
  },
  {
    id: "war_horn",
    name: "Savaş Borusu",
    description: "Askerlerin moralini yükseltir.",
    type: "artifact",
    price: 100,
    rarity: "rare",
    effect: { morale: 20 }
  },
  {
    id: "elven_bow",
    name: "Elf Yayı",
    description: "Nadir bir elf yapımı yay. Okçuların gücünü artırır.",
    type: "weapon",
    price: 120,
    rarity: "rare",
    effect: { attack: 20 }
  },
  {
    id: "dragon_scale_armor",
    name: "Ejderha Pullu Zırh",
    description: "Efsanevi! Ejderha pullarından yapılmış zırh.",
    type: "armor",
    price: 300,
    rarity: "epic",
    effect: { defense: 40, hp: 30 }
  },
  {
    id: "bread",
    name: "Ekmek",
    description: "Taze ekmek. Askerlerin açlığını giderir.",
    type: "food",
    price: 5,
    rarity: "common",
    effect: { morale: 5 }
  },
  {
    id: "mana_crystal",
    name: "Mana Kristali",
    description: "Büyücülerin gücünü artıran nadir kristal.",
    type: "artifact",
    price: 150,
    rarity: "rare",
    effect: { attack: 25 }
  },
  {
    id: "healing_salve",
    name: "İyileştirici Merhem",
    description: "Yaraları hızla iyileştirir.",
    type: "potion",
    price: 40,
    rarity: "common",
    effect: { hp: 30, morale: 5 }
  },
  {
    id: "legendary_sword",
    name: "Efsanevi Kılıç",
    description: "Kadim bir savaşçının kılıcı. İnanılmaz güç!",
    type: "weapon",
    price: 500,
    rarity: "legendary",
    effect: { attack: 50, hp: 20 }
  },
  {
    id: "ancient_artifact",
    name: "Antik Artefakt",
    description: "Gizemli güçlere sahip eski bir nesne.",
    type: "artifact",
    price: 250,
    rarity: "epic",
    effect: { morale: 30, attack: 10 }
  },
  {
    id: "cursed_amulet",
    name: "Lanetli Muska",
    description: "Güçlü ama tehlikeli. Kullanırken dikkatli ol!",
    type: "artifact",
    price: 80,
    rarity: "rare",
    effect: { attack: 15, morale: -10 }
  }
];
