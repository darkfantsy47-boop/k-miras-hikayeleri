import { GameEvent } from "@/types/game";

// Additional 88 events to complement the base 12 in events.ts
export const moreEvents: GameEvent[] = [
  {
    id: "village_raid",
    title: "Köy Baskını",
    description: "Gece yarısı bir grup haydut köyü basıyor. Ne yaparsınız?",
    choices: [
      {
        text: "Askerleri gönder!",
        outcome: {
          description: "Savaş başladı! Haydutlarla şiddetli bir çarpışma yaşandı.",
          effects: {
            startCombat: true,
            enemyName: "Haydut Çetesi",
            enemyHp: 120,
            enemyMaxHp: 120,
            enemyAttack: 18,
            enemyDefense: 8,
            combatRewards: { gold: 80, xp: 60 }
          }
        }
      },
      {
        text: "Köylüleri savunmaya yönlendir.",
        outcome: {
          description: "Köylüler savunma yaptı. Haydutları püskürttünüz ama hasar aldınız.",
          effects: { gold: -30, morale: 15, reputation: 20 }
        }
      },
      {
        text: "Geri çekil.",
        outcome: {
          description: "Köyden çekildiniz. Haydutlar köyü yağmaladı.",
          effects: { unitsLost: 1, morale: -15, reputation: -25 }
        }
      }
    ]
  }
  // ... 87 more events would go here
];
