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
            text: "Krallık hakkında ne biliyorsunuz?",
            nextLineIndex: 3
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
            text: "Zırh var mı?",
            nextLineIndex: 4
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
            text: "Bu madalyonun hikayesi nedir?",
            nextLineIndex: 5
          },
          {
            text: "Çok pahalı, teşekkürler.",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Krallık... ah, eski günler. Kral vaktiyle adil bir hükümdardı. Ama son zamanlarda karanıl güçler yükseliyor. Bazıları lanet olduğunu söylüyor.",
        choices: [
          {
            text: "Lanet mi? Detay verir misiniz?",
            nextLineIndex: 6
          },
          {
            text: "Anlıyorum. Başka ne satıyorsunuz?",
            nextLineIndex: 1
          },
          {
            text: "Bilgi için teşekkürler.",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Zırh mı? Tabii! En sağlam çelik zırhlar bende. 80 altına senin olur.",
        choices: [
          {
            text: "Çelik zırh alıyorum. (80 altın)",
            effects: { gold: -80, itemGained: "steel_armor" },
            endsDialogue: true
          },
          {
            text: "Başka ne var?",
            nextLineIndex: 1
          },
          {
            text: "Düşünmem lazım.",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Bu madalyon, efsaneye göre kayıp bir krallığa aitti. Sahibine büyük şans ve koruma sağlıyormuş. Ama dikkatli ol, bazen güç bir bedel ister...",
        choices: [
          {
            text: "Riske değer! Alıyorum. (100 altın)",
            effects: { gold: -100, itemGained: "ancient_medallion" },
            endsDialogue: true
          },
          {
            text: "Bu çok tehlikeli görünüyor...",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Duyduğuma göre, kuzey dağlarında antik bir tapınak var. Orada karanlık varlıklar uyanıyor. Kral askerleri bile gitmeye korkuyor. Belki bir cesur savaşçı araştırabilir...",
        choices: [
          {
            text: "Gideceğim ve araştıracağım!",
            effects: { reputation: 10 },
            endsDialogue: true
          },
          {
            text: "Çok tehlikeli görünüyor.",
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
            text: "Ne kadar tehlikeli?",
            nextLineIndex: 2
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
      },
      {
        speaker: "npc",
        text: "Geçen hafta üç tüccar kafilesi soyuldu. Haydutlar giderek daha cesur oluyor. Liderleri çok tehlikeli biri.",
        choices: [
          {
            text: "Haydut liderini yakalayabilirim.",
            nextLineIndex: 3
          },
          {
            text: "Başka yol var mı?",
            nextLineIndex: 4
          },
          {
            text: "Anladım, geri döneyim.",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Gerçekten mi? Bu cesaret! Ama dikkatli ol, haydut lideri çok kurnaz. Arkadaşlarına pusu kurdurur.",
        choices: [
          {
            text: "Ben hazırım! İksirinizi alabilir miyim?",
            effects: { itemGained: "healing_potion", reputation: 15 },
            endsDialogue: true
          },
          {
            text: "Belki daha fazla hazırlanmalıyım.",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Nehir yolundan gidebilirsin ama o da uzun sürer. Ya da kaleden geçiş izni alman lazım, o da altın ister.",
        choices: [
          {
            text: "Nehir yolunu deneyeceğim.",
            endsDialogue: true
          },
          {
            text: "Kale izni için ne kadar?",
            nextLineIndex: 5
          },
          {
            text: "Düşüneyim.",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "50 altın. Ama bu kadar altının var mı bilmiyorum... Yoksa ben sana yardım edebilirim, bir iş karşılığında.",
        choices: [
          {
            text: "Ne gibi bir iş?",
            nextLineIndex: 6
          },
          {
            text: "50 altını verebilirim. (50 altın)",
            effects: { gold: -50 },
            endsDialogue: true
          },
          {
            text: "Hayır, teşekkürler.",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Devriye arkadaşım dün kayboldu. Ormanda onu ararsan, sana ücretsiz geçiş ayarlayabilirim.",
        choices: [
          {
            text: "Kabul! Onu bulacağım.",
            effects: { reputation: 20 },
            endsDialogue: true
          },
          {
            text: "Çok tehlikeli, yapamam.",
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
            text: "Ne çalındı?",
            nextLineIndex: 2
          },
          {
            text: "Üzgünüm, yapacak işlerim var.",
            nextLineIndex: 3
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
        text: "Yiyeceklerimiz, ailelerimizin mücevherleri, hatta çocukların oyuncakları bile... Her şeyimizi aldılar!",
        choices: [
          {
            text: "Bu çok acımasızca! Onları bulacağım.",
            nextLineIndex: 4
          },
          {
            text: "Başka kim yardım edebilir?",
            nextLineIndex: 5
          },
          {
            text: "Çok üzgünüm ama yapamam.",
            nextLineIndex: 3
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
      },
      {
        speaker: "npc",
        text: "Tanrı seni korusun! Haydutlar kuzeydeki mağarada saklanıyorlar. Ama çok dikkatli ol, çok tehlikeliler!",
        choices: [
          {
            text: "Gidiyorum hemen!",
            effects: { reputation: 15 },
            endsDialogue: true
          },
          {
            text: "Önce hazırlanayım.",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Muhafızlar yardım etmiyor. Askerler gelmedi. Sadece sen kaldın... Lütfen!",
        choices: [
          {
            text: "Peki, yardım edeceğim.",
            effects: { reputation: 20 },
            endsDialogue: true
          },
          {
            text: "Gerçekten yapamam, üzgünüm.",
            effects: { reputation: -10 },
            endsDialogue: true
          }
        ]
      }
    ]
  },
  {
    id: "blacksmith_trade",
    npcId: "blacksmith",
    currentLineIndex: 0,
    lines: [
      {
        speaker: "npc",
        text: "Hoş geldin! En iyi silahları ben yaparım. Ne istiyorsun?",
        choices: [
          {
            text: "Güçlü bir kılıç istiyorum.",
            nextLineIndex: 1
          },
          {
            text: "Zırhımı tamir edebilir misin?",
            nextLineIndex: 2
          },
          {
            text: "Sadece bakınıyorum.",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Ah! Özel bir kılıç yapabilirim sana. Ama meteyor demiri gerekiyor. Bende yok ama dağlarda bulunur.",
        choices: [
          {
            text: "Gidip meteyor demiri bulacağım!",
            effects: { reputation: 5 },
            endsDialogue: true
          },
          {
            text: "Normal kılıç olur. (60 altın)",
            effects: { gold: -60, itemGained: "iron_sword" },
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Tabii! Ama işçilik 40 altın. Değer mi?",
        choices: [
          {
            text: "Evet, tamir et. (40 altın)",
            effects: { gold: -40 },
            endsDialogue: true
          },
          {
            text: "Çok pahalı.",
            endsDialogue: true
          }
        ]
      }
    ]
  },
  {
    id: "priest_blessing",
    npcId: "priest",
    currentLineIndex: 0,
    lines: [
      {
        speaker: "npc",
        text: "Tanrı seni korusun evlat. Buraya ne için geldin?",
        choices: [
          {
            text: "Şifa lazım.",
            nextLineIndex: 1
          },
          {
            text: "Dua edebilir misiniz?",
            nextLineIndex: 2
          },
          {
            text: "Sadece ziyaret.",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Şifa vereceğim sana. Tanrı'nın bereketi seninle olsun.",
        choices: [
          {
            text: "Teşekkürler, rahip.",
            effects: { itemGained: "blessing" },
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Elbette evlat. Dualarım her zaman seninle. Tanrı seni korur ve yolunu aydınlatır.",
        choices: [
          {
            text: "Minnettarım.",
            effects: { reputation: 5 },
            endsDialogue: true
          }
        ]
      }
    ]
  },
  {
    id: "bandit_confrontation",
    npcId: "bandit_leader",
    currentLineIndex: 0,
    lines: [
      {
        speaker: "npc",
        text: "Ne işin var burada yabancı? Bu benim bölgem!",
        choices: [
          {
            text: "Çaldığın eşyaları geri ver!",
            nextLineIndex: 1
          },
          {
            text: "Sadece geçiyordum...",
            nextLineIndex: 2
          },
          {
            text: "Savaşa hazır mısın?",
            nextLineIndex: 3
          }
        ]
      },
      {
        speaker: "npc",
        text: "Ha! Cesur bir savaşçısın! Peki o zaman, savaşarak al eğer alabilirsen!",
        choices: [
          {
            text: "Kabul ediyorum!",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "O zaman hızlıca yol vergisini öde. 100 altın!",
        choices: [
          {
            text: "Al bakalım. (100 altın)",
            effects: { gold: -100 },
            endsDialogue: true
          },
          {
            text: "Asla! Savaşalım!",
            nextLineIndex: 3
          }
        ]
      },
      {
        speaker: "npc",
        text: "Hahaha! Öyle mi? Gel o zaman!",
        choices: [
          {
            text: "Başlayalım!",
            endsDialogue: true
          }
        ]
      }
    ]
  },
  {
    id: "stranger_secrets",
    npcId: "mysterious_stranger",
    currentLineIndex: 0,
    lines: [
      {
        speaker: "npc",
        text: "Bilgi istersin değil mi? Her şeyin bir bedeli var...",
        choices: [
          {
            text: "Ne tür bilgiler satıyorsun?",
            nextLineIndex: 1
          },
          {
            text: "Bedel ne?",
            nextLineIndex: 2
          },
          {
            text: "İlgilenmiyorum.",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Kayıp hazineler, gizli yollar, düşmanların sırları... Her şey var bende.",
        choices: [
          {
            text: "Kayıp hazine hakkında ne biliyorsun? (50 altın)",
            effects: { gold: -50, itemGained: "treasure_map" },
            endsDialogue: true
          },
          {
            text: "Gizli yolları öğrenmek istiyorum. (30 altın)",
            effects: { gold: -30 },
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Altın tabii ki. Ama bazen... başka şeyler de isterim. Örneğin bir iyilik borcusuysun bana.",
        choices: [
          {
            text: "Kabul. Ne kadar altın?",
            nextLineIndex: 1
          },
          {
            text: "Borca girmek istemem.",
            endsDialogue: true
          }
        ]
      }
    ]
  },
  {
    id: "noble_audience",
    npcId: "noble",
    currentLineIndex: 0,
    lines: [
      {
        speaker: "npc",
        text: "Kralın emri buyurdu... İtibarın ne durumda?",
        choices: [
          {
            text: "İtibarım yüksek, efendim.",
            nextLineIndex: 1
          },
          {
            text: "Henüz yeni başladım.",
            nextLineIndex: 2
          },
          {
            text: "Bu sizi neden ilgilendiriyor?",
            nextLineIndex: 3
          }
        ]
      },
      {
        speaker: "npc",
        text: "İyi! O zaman Kral için bir görev var. Kuzey sınırında orklarla sorun var. Gidip araştırır mısın?",
        choices: [
          {
            text: "Elbette, efendim!",
            effects: { reputation: 25 },
            endsDialogue: true
          },
          {
            text: "Ödül var mı?",
            nextLineIndex: 4
          }
        ]
      },
      {
        speaker: "npc",
        text: "Anlıyorum. O zaman kendini kanıtlaman gerekiyor. Küçük bir görev: pazardaki hırsızı yakala.",
        choices: [
          {
            text: "Hemen gidiyorum!",
            effects: { reputation: 10 },
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "Çünkü Kral'a sadık olanları takip ediyorum. Dikkatli ol, burada herkes senin dostun değil.",
        choices: [
          {
            text: "Anladım, teşekkürler.",
            endsDialogue: true
          }
        ]
      },
      {
        speaker: "npc",
        text: "200 altın ve Kral'ın kişisel teşekkürü. Değer mi?",
        choices: [
          {
            text: "Kesinlikle! Gidiyorum.",
            effects: { reputation: 25 },
            endsDialogue: true
          },
          {
            text: "Düşünmem lazım.",
            endsDialogue: true
          }
        ]
      }
    ]
  }
];
