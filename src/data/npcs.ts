import { NPC } from "@/types/game";
import heroKnight from "@/assets/hero-knight.png";

export const gameNpcs: NPC[] = [
  {
    id: "merchant_ali",
    name: "Tüccar Ali",
    portrait: heroKnight,
    personality: "friendly",
    dialogue: [
      "Hoş geldin! Ne arıyorsun?",
      "En kaliteli mallar bende!",
      "Fiyatlar biraz yüksek ama değer!"
    ],
    relationship: 50
  },
  {
    id: "guard_mehmet",
    name: "Muhafız Mehmet",
    portrait: heroKnight,
    personality: "neutral",
    dialogue: [
      "Bu bölge tehlikeli.",
      "Dikkatli ol yabancı.",
      "Haydutlar ortalıkta dolaşıyor."
    ],
    relationship: 50
  },
  {
    id: "villager_ayse",
    name: "Köylü Ayşe",
    portrait: heroKnight,
    personality: "friendly",
    dialogue: [
      "Yardıma ihtiyacımız var!",
      "Köyümüz saldırı altında.",
      "Tanrı seni korusun."
    ],
    relationship: 60
  },
  {
    id: "bandit_leader",
    name: "Haydut Lideri",
    portrait: heroKnight,
    personality: "hostile",
    dialogue: [
      "Ne işin var burada?",
      "Altınını bırak, yoksa...",
      "Savaşmak mı istiyorsun?"
    ],
    relationship: 10
  },
  {
    id: "mysterious_stranger",
    name: "Gizemli Yabancı",
    portrait: heroKnight,
    personality: "cunning",
    dialogue: [
      "Bilgi istersin değil mi?",
      "Her şeyin bir bedeli var...",
      "Sırlarım çok değerli."
    ],
    relationship: 30
  },
  {
    id: "blacksmith",
    name: "Demirci Hasan",
    portrait: heroKnight,
    personality: "neutral",
    dialogue: [
      "En iyi silahları yaparım!",
      "Zırh mı lazım? Bende var.",
      "İşçilik ücretim biraz yüksek."
    ],
    relationship: 50
  },
  {
    id: "priest",
    name: "Rahip İbrahim",
    portrait: heroKnight,
    personality: "friendly",
    dialogue: [
      "Tanrı seni korusun evlat.",
      "Şifa mi lazım?",
      "Dualarım seninle."
    ],
    relationship: 70
  },
  {
    id: "noble",
    name: "Soylu Mustafa",
    portrait: heroKnight,
    personality: "neutral",
    dialogue: [
      "Kralın emri buyurdu...",
      "İtibarın ne durumda?",
      "Sadakat önemlidir."
    ],
    relationship: 40
  }
];
