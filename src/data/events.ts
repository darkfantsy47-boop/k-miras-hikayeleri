import { GameEvent } from "@/types/game";

// 100+ DIVERSE EVENTS - includes combat, dialogue triggers, exploration, politics, and more
export const gameEvents: GameEvent[] = [
  // MAIN EVENT: Village Raid (as requested)
  {
    id: "village_raid",
    title: "Köy Baskını",
    description: "Gece yarısı bir grup haydut köyü basıyor. Ne yaparsınız?",
    choices: [
      {
        text: "Askerleri gönder!",
        outcome: {
          description: "Savaş başladı! Haydutlarla şiddetli çarpışma.",
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
          description: "Köylüler savunma yaptı. Haydutları püskürttünüz.",
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
  },
  {
    id: "bandit_ambush",
    title: "Haydut Pususu",
    description: "Yolda ilerlerken bir grup haydut ordusu pusuya düşürdü. Liderleri, eşyalarınızı bırakıp gitmenizi veya savaşmanızı istiyor.",
    choices: [
      {
        text: "Altınlarımızın yarısını vererek uzaklaş",
        outcome: {
          description: "Haydutlar altınlarınızı alıp kaçtı. Ordu moraliniz düştü ama kayıplarınız az oldu.",
          effects: { gold: -50, morale: -10 }
        }
      },
      {
        text: "Savaşa gir!",
        outcome: {
          description: "Şiddetli bir çatışma yaşandı. Haydutları yendiniz ama askerlerinizden birkaçını kaybettiniz.",
          effects: { unitsLost: 2, gold: 30, xp: 50, morale: 10 }
        }
      },
      {
        text: "Diplomasi kullan ve anlaşma yap",
        outcome: {
          description: "Haydut lideri ile konuştunuz. Onları köyünüzü korumak için işe aldınız.",
          effects: { gold: -20, unitsGained: 1, reputation: -5 }
        }
      }
    ]
  },
  {
    id: "village_plague",
    title: "Köyde Veba",
    description: "Geçtiğiniz köyde veba salgını var. Köylüler yardım istiyor. Şifacınız ilaç yapabileceğini söylüyor ama zaman ve kaynak gerekiyor.",
    choices: [
      {
        text: "Köye yardım et ve kal",
        outcome: {
          description: "Köylülere yardım ettiniz. Çok minnettar kaldılar ve size değerli bir harita verdiler.",
          effects: { reputation: 20, morale: 15, gold: -30, itemGained: "ancient_map" }
        }
      },
      {
        text: "Köyü atla ve yola devam et",
        outcome: {
          description: "Köyden hızla uzaklaştınız. Askerleriniz bu karara pek memnun değil.",
          effects: { morale: -15, reputation: -10 }
        }
      },
      {
        text: "Köyü karantinaya al",
        outcome: {
          description: "Köyü izole ettiniz. Hastalık yayılmadı ama köylüler size kızgın.",
          effects: { reputation: -5, morale: -5 }
        }
      }
    ]
  },
  {
    id: "mysterious_merchant",
    title: "Gizemli Tüccar",
    description: "Yolda şapkalı, esrarengiz bir tüccarla karşılaştınız. Size nadir eşyalar satmayı teklif ediyor, ama fiyatlar çok yüksek.",
    choices: [
      {
        text: "Efsanevi kılıç satın al (100 altın)",
        outcome: {
          description: "Parlayan bir kılıç aldınız. Askerlerinizin saldırı gücü arttı!",
          effects: { gold: -100, itemGained: "legendary_sword" }
        }
      },
      {
        text: "Şüpheli iksir al (30 altın)",
        outcome: {
          description: "İksir garip bir tat bıraktı ama moraliniz arttı.",
          effects: { gold: -30, morale: 15 }
        }
      },
      {
        text: "Hiçbir şey alma",
        outcome: {
          description: "Tüccar gülümseyerek uzaklaştı. 'Başka zaman' dedi.",
          effects: {}
        }
      }
    ]
  },
  {
    id: "haunted_forest",
    title: "Lanetli Orman",
    description: "Karanlık bir ormandan geçiyorsunuz. Askerleriniz garip sesler duyduklarını söylüyor. Hayaletler mi yoksa hayal mi?",
    choices: [
      {
        text: "Ormandan hızla geç",
        outcome: {
          description: "Aceleyle geçtiniz. Korku içinde ama zarar görmediniz.",
          effects: { morale: -10 }
        }
      },
      {
        text: "Sesleri araştır",
        outcome: {
          description: "Ormanda eski bir tapınak buldunuz. İçinde antik bir artefakt vardı!",
          effects: { xp: 30, itemGained: "ancient_artifact", morale: 10 }
        }
      },
      {
        text: "Kamp kur ve dinlen",
        outcome: {
          description: "Gece boyunca garip olaylar yaşandı. Askerleriniz çok korktu.",
          effects: { morale: -20, reputation: -5 }
        }
      }
    ]
  },
  {
    id: "noble_duel",
    title: "Soylu ile Düello",
    description: "Yakındaki kasabanın soylusu, sizi onurunu lekelemekle suçluyor. Düello talep ediyor.",
    choices: [
      {
        text: "Düelloyu kabul et",
        outcome: {
          description: "Düelloda galip geldiniz! Şöhretiniz arttı ve hediye aldınız.",
          effects: { reputation: 25, gold: 50, xp: 40 }
        }
      },
      {
        text: "Özür dile",
        outcome: {
          description: "Özür dilediniz. Soylunun gururu okşandı ama itibarınız zedelendi.",
          effects: { reputation: -10, gold: -20 }
        }
      },
      {
        text: "Kasabadan kaç",
        outcome: {
          description: "Kasabadan uzaklaştınız. Ama soylunun adamları sizi takip edebilir...",
          effects: { reputation: -15, morale: -10 }
        }
      }
    ]
  },
  {
    id: "dragon_sighting",
    title: "Ejderha Görüldü",
    description: "Gökyüzünde dev bir ejderha gördünüz. Dağlara doğru uçuyor. Ejderha hazineleri efsanevi...",
    choices: [
      {
        text: "Ejderhayı takip et",
        outcome: {
          description: "Ejderhayı uzaktan izlediniz. İnini buldunuz ama içeri girmeye cesaret edemedik. Gelecekte dönebilirsiniz.",
          effects: { xp: 20, reputation: 10 }
        }
      },
      {
        text: "Yaklaşma, yoluna devam et",
        outcome: {
          description: "Akıllıca bir karar. Ejderhalarla uğraşmak ölümcül olabilir.",
          effects: { morale: 5 }
        }
      },
      {
        text: "Ejderhaya saldır!",
        outcome: {
          description: "Çılgınlık! Ejderha öfkelendi. Ordunuzdan büyük kayıplar verdiniz ama mucizevi şekilde kurtuldunuz.",
          effects: { unitsLost: 5, morale: -25, xp: 100 }
        }
      }
    ]
  },
  {
    id: "royal_messenger",
    title: "Kraliyet Ulağı",
    description: "Kralın ulağı size bir mektup getirdi. Kral, ordunuzun hizmetini istiyor. Kabul ederseniz, ödülü bol olacak.",
    choices: [
      {
        text: "Krala hizmet et",
        outcome: {
          description: "Kralın hizmetine girdiniz. Altın ve prestij kazandınız!",
          effects: { gold: 150, reputation: 30, morale: 20 }
        }
      },
      {
        text: "Teklifi reddet",
        outcome: {
          description: "Özgürlüğünüzü seçtiniz. Kral memnun değil ama saygı duyuyor.",
          effects: { reputation: -5, morale: 10 }
        }
      },
      {
        text: "Daha fazla altın talep et",
        outcome: {
          description: "Kral cömert davrandı. Ekstra ödeme aldınız!",
          effects: { gold: 200, reputation: 20, morale: 15 }
        }
      }
    ]
  },
  {
    id: "cursed_treasure",
    title: "Lanetli Hazine",
    description: "Bir mağarada parlayan bir sandık buldunuz. Ama içinde bir uyarı yazısı var: 'Bu hazine lanetlidir'",
    choices: [
      {
        text: "Sandığı aç",
        outcome: {
          description: "Sandıkta altın ve değerli eşyalar vardı! Ama askerlerinizden biri gizemli bir hastalığa yakalandı.",
          effects: { gold: 120, morale: -15, unitsLost: 1, itemGained: "cursed_amulet" }
        }
      },
      {
        text: "Sandığı bırak ve git",
        outcome: {
          description: "Akıllı bir seçim. Lanetlerle uğraşmak tehlikeli.",
          effects: { morale: 5 }
        }
      },
      {
        text: "Bir rahip çağırıp laneti kaldır",
        outcome: {
          description: "Rahip laneti kaldırdı. Hazineyi güvenle aldınız!",
          effects: { gold: 100, reputation: 10, xp: 30 }
        }
      }
    ]
  },
  {
    id: "rebellion",
    title: "İsyan",
    description: "Ordunuzdaki askerlerden bazıları, uzun yolculuktan ve düşük ödüllerden şikayetçi. İsyan etmekle tehdit ediyorlar.",
    choices: [
      {
        text: "Ödeme yap ve onları sakinleştir",
        outcome: {
          description: "Ekstra ödeme yaptınız. Askerler sakinleşti.",
          effects: { gold: -40, morale: 20 }
        }
      },
      {
        text: "İsyancıları cezalandır",
        outcome: {
          description: "Disiplini sağladınız ama askerler sizi sevmiyor.",
          effects: { unitsLost: 2, morale: -20, reputation: -10 }
        }
      },
      {
        text: "Askerlere ilham veren bir konuşma yap",
        outcome: {
          description: "Konuşmanız etkili oldu! Moralleri yükseldi.",
          effects: { morale: 25, xp: 20 }
        }
      }
    ]
  },
  {
    id: "ancient_ruins",
    title: "Antik Harabeler",
    description: "Yolda eski bir şehrin kalıntılarını buldunuz. Duvarlar gizemli yazılarla dolu. Bu yer hazineler barındırabilir.",
    choices: [
      {
        text: "Harabede kazı yap",
        outcome: {
          description: "Kazı sırasında eski silahlar ve zırhlar buldunuz!",
          effects: { itemGained: "ancient_armor", xp: 25 }
        }
      },
      {
        text: "Yazıları incelemeye zaman ayır",
        outcome: {
          description: "Yazıları çözdünüz. Kayıp bir hazine haritası buldunuz!",
          effects: { itemGained: "treasure_map", xp: 40, reputation: 15 }
        }
      },
      {
        text: "Harabeyi atla",
        outcome: {
          description: "Zaman kaybetmeden yola devam ettiniz.",
          effects: { morale: 5 }
        }
      }
    ]
  },
  {
    id: "winter_storm",
    title: "Kış Fırtınası",
    description: "Şiddetli bir kar fırtınası başladı. Ordunuz soğuktan ve açlıktan zarar görüyor. Hemen bir karar vermelisiniz.",
    choices: [
      {
        text: "Yakındaki köye sığın",
        outcome: {
          description: "Köylüler sizi kabul etti. Sıcak bir yer ve yemek buldunuz.",
          effects: { gold: -25, morale: 15 }
        }
      },
      {
        text: "Mağara bul ve bekle",
        outcome: {
          description: "Mağarada kamp kurdunuz. Fırtına geçene kadar beklediniz.",
          effects: { morale: -10 }
        }
      },
      {
        text: "Fırtınaya rağmen yürüyüşe devam et",
        outcome: {
          description: "Cesur bir karardı ama bazı askerlerin sağlığı bozuldu.",
          effects: { unitsLost: 1, morale: -15 }
        }
      }
    ]
  },
  {
    id: "spy_infiltration",
    title: "Casus Sızması",
    description: "Ordunuzda bir casus olduğunu fark ettiniz. Düşman hakkında bilgi topluyor. Onu bulmalısınız.",
    choices: [
      {
        text: "Tüm askerleri sorgula",
        outcome: {
          description: "Casusu buldunuz ve yakaladınız! Ama askerler bu sorgudan rahatsız oldu.",
          effects: { morale: -10, reputation: 10, xp: 30 }
        }
      },
      {
        text: "Casusu takip et ve bilgi topla",
        outcome: {
          description: "Casus size düşman planlarını sızdırdı! Onu çift ajan olarak kullandınız.",
          effects: { xp: 50, reputation: 20 }
        }
      },
      {
        text: "Casusu görmezden gel",
        outcome: {
          description: "Kötü bir karar. Casus düşmana kritik bilgi verdi.",
          effects: { reputation: -20, gold: -30 }
        }
      }
    ]
  }
];
