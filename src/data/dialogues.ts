import { Dialogue } from "@/types/game";

export const gameDialogues: Dialogue[] = [
  {
    id: "merchant_greeting",
    npcId: "merchant_ali",
    currentLineIndex: 0,
    lines: [
      {
        speaker: "npc",
        text: "Hoş geldin yabancı! Ben Ali, bu pazarın en iyi tüccarı. Sana ne gösterebilirim?",
        choices: [
          {
            text: "Silahlarınız var mı?",
            nextLineIndex: 1
          },
          {
            text: "En değerli eşyanız nedir?",
            nextLineIndex: 2
          },
          {
            text: "Sonra gelirim.",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Elbette! En kaliteli kılıçlar ve yaylar bende. Ama fiyatları biraz yüksek...",
        choices: [
          {
            text: "Bir kılıç alacağım. (50 altın)",
            effects: { gold: -50, itemGained: "fine_sword" },
            endsDialogue: true
          },
          {
            text: "Çok pahalı. Başka bakarım.",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Ah, gözün var! Bu antik madalyon çok özel. Sahibine şans getirir diyorlar... 100 altına senin olur.",
        choices: [
          {
            text: "Alıyorum! (100 altın)",
            effects: { gold: -100, itemGained: "ancient_medallion" },
            endsDialogue: true
          },
          {
            text: "Çok pahalı, teşekkürler.",
            endsDialogue: true
          }
        ]
      }
    ]
  },
  {
    id: "guard_warning",
    npcId: "guard_mehmet",
    currentLineIndex: 0,
    lines: [
      {
        speaker: "npc",
        text: "Dur! Bu bölge tehlikeli. Haydutlar ortalıkta dolaşıyor. Devam etmek istediğine emin misin?",
        choices: [
          {
            text: "Evet, hazırım.",
            nextLineIndex: 1
          },
          {
            text: "Hayır, geri döneyim.",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Cesur bir savaşçısın. Al bu şifalı iksir, işine yarar. Dikkatli ol!",
        choices: [
          {
            text: "Teşekkürler!",
            effects: { itemGained: "healing_potion" },
            endsDialogue: true
          }
        ]
      }
    ]
  },
  {
    id: "villager_plea",
    npcId: "villager_ayse",
    currentLineIndex: 0,
    lines: [
      {
        speaker: "npc",
        text: "Yardım et lütfen! Haydutlar köyümüzü soydu. Eşyalarımızı geri getirebilir misin?",
        choices: [
          {
            text: "Elbette, yardım edeceğim.",
            nextLineIndex: 1
          },
          {
            text: "Üzgünüm, yapacak işlerim var.",
            nextLineIndex: 2
          }
        ]
      },
      {
        speaker: "player",
        text: "Haydutları bulup eşyalarınızı geri getireceğim. Merak etmeyin.",
        choices: [
          {
            text: "Devam et",
            effects: { reputation: 10 },
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Anlıyorum... Belki başka biri yardım eder.",
        choices: [
          {
            text: "Belki sonra yardım edebilirim.",
            effects: { reputation: -5 },
            endsDialogue: true
          }
        ]
      }
    ]
  }
];
