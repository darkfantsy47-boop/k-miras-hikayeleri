import { GameEvent } from "@/types/game";

// Additional 90+ events with rich branching storytelling
export const moreEvents: GameEvent[] = [
  {
    id: "cursed_amulet",
    title: "Lanetli Muska",
    description: "Yolda parlayan bir muska buldunuz. Gizemli bir enerji yayıyor.",
    choices: [
      {
        text: "Muskayı al",
        outcome: {
          description: "Muska güçlü ama sizi zayıflatıyor.",
          effects: { itemGained: "cursed_amulet", morale: -10, reputation: 5 }
        }
      },
      {
        text: "Bırak ve uzaklaş",
        outcome: {
          description: "Güvenli bir seçim yaptınız.",
          effects: { morale: 5 }
        }
      }
    ]
  },
  {
    id: "wedding_celebration",
    title: "Düğün Şöleni",
    description: "Bir köyde düğün var. Sizi davet ediyorlar.",
    choices: [
      {
        text: "Katıl ve kutla",
        outcome: {
          description: "Köylüler size hediye verdi. Moral yükseldi!",
          effects: { gold: 20, morale: 20, reputation: 15 }
        }
      },
      {
        text: "Kibarca reddet",
        outcome: {
          description: "Köylüler hayal kırıklığına uğradı.",
          effects: { reputation: -5 }
        }
      }
    ]
  },
  {
    id: "royal_tournament",
    title: "Kraliyet Turnuvası",
    description: "Kralın düzenlediği turnuvaya davetlisiniz. Büyük ödül var!",
    choices: [
      {
        text: "Turnuvaya katıl",
        outcome: {
          description: "Savaş başladı! Şampiyonla karşılaştınız.",
          effects: {
            startCombat: true,
            enemyName: "Turnuva Şampiyonu",
            enemyHp: 180,
            enemyMaxHp: 180,
            enemyAttack: 25,
            enemyDefense: 15,
            combatRewards: { gold: 200, xp: 100 }
          }
        }
      },
      {
        text: "Seyret ama katılma",
        outcome: {
          description: "İlginç bir deneyimdi.",
          effects: { morale: 5 }
        }
      }
    ]
  },
  {
    id: "dragon_sighting",
    title: "Ejderha Görüldü!",
    description: "Dağlarda bir ejderha görüldü. Köylüler korkuyor.",
    choices: [
      {
        text: "Ejderhayı avla!",
        outcome: {
          description: "Ejderha ile epik bir savaş!",
          effects: {
            startCombat: true,
            enemyName: "Genç Ejderha",
            enemyHp: 250,
            enemyMaxHp: 250,
            enemyAttack: 35,
            enemyDefense: 20,
            combatRewards: { gold: 300, xp: 150, items: ["dragon_scale"] }
          }
        }
      },
      {
        text: "Köylüleri taşı",
        outcome: {
          description: "Köylüleri güvenli bir yere götürdünüz.",
          effects: { reputation: 30, gold: -40 }
        }
      },
      {
        text: "Hiçbir şey yapma",
        outcome: {
          description: "Ejderha köye saldırdı. Çok kayıp verdiler.",
          effects: { reputation: -40 }
        }
      }
    ]
  },
  {
    id: "haunted_castle",
    title: "Lanetli Kale",
    description: "Eski bir kale keşfettiniz. İçerden sesler geliyor.",
    choices: [
      {
        text: "Kaleyi keşfet",
        outcome: {
          description: "Hayaletlerle karşılaştınız!",
          effects: {
            startCombat: true,
            enemyName: "Lanetli Ruhlar",
            enemyHp: 140,
            enemyMaxHp: 140,
            enemyAttack: 22,
            enemyDefense: 5,
            combatRewards: { gold: 150, xp: 80, items: ["ancient_scroll"] }
          }
        }
      },
      {
        text: "Uzak dur",
        outcome: {
          description: "Akıllıca bir karar.",
          effects: { morale: -5 }
        }
      }
    ]
  },
  {
    id: "lost_child",
    title: "Kayıp Çocuk",
    description: "Ormanda kaybolmuş bir çocuk ağlıyor.",
    choices: [
      {
        text: "Çocuğu ara ve kurtar",
        outcome: {
          description: "Çocuğu ailesine teslim ettiniz. Çok minnettar kaldılar!",
          effects: { reputation: 25, gold: 30, morale: 15 }
        }
      },
      {
        text: "Başkasını gönder",
        outcome: {
          description: "Askerlerinizden biri çocuğu buldu.",
          effects: { reputation: 10 }
        }
      },
      {
        text: "İlerle",
        outcome: {
          description: "Çocuk bulunamadı. Köylüler çok üzgün.",
          effects: { reputation: -30 }
        }
      }
    ]
  },
  {
    id: "treasure_map_found",
    title: "Hazine Haritası",
    description: "Eski bir harita buldunuz. Gizli bir hazineye işaret ediyor!",
    choices: [
      {
        text: "Hazineyi bul!",
        outcome: {
          description: "Hazineyi buldunuz ama korumalar var!",
          effects: {
            startCombat: true,
            enemyName: "Hazine Bekçileri",
            enemyHp: 160,
            enemyMaxHp: 160,
            enemyAttack: 20,
            enemyDefense: 12,
            combatRewards: { gold: 400, xp: 120 }
          }
        }
      },
      {
        text: "Haritayı sat (50 altın)",
        outcome: {
          description: "Bir tüccara haritayı sattınız.",
          effects: { gold: 50 }
        }
      },
      {
        text: "Haritayı yok et",
        outcome: {
          description: "Bazen keşfetmemek daha iyidir.",
          effects: { morale: -5 }
        }
      }
    ]
  },
  {
    id: "rival_warlord",
    title: "Rakip Savaş Lordu",
    description: "Güçlü bir savaş lordu size meydan okuyor!",
    choices: [
      {
        text: "Meydan okumayı kabul et!",
        outcome: {
          description: "Epik bir düello!",
          effects: {
            startCombat: true,
            enemyName: "Savaş Lordu Kagan",
            enemyHp: 200,
            enemyMaxHp: 200,
            enemyAttack: 30,
            enemyDefense: 18,
            combatRewards: { gold: 250, xp: 140, items: ["warlord_banner"] }
          }
        }
      },
      {
        text: "Geri çekil",
        outcome: {
          description: "İtibarınız zarar gördü.",
          effects: { reputation: -35, morale: -20 }
        }
      }
    ]
  },
  {
    id: "mystic_prophecy",
    title: "Gizemli Kehanet",
    description: "Bir kahin size bir kehanet söylüyor: 'Kuzeyden büyük bir tehlike geliyor.'",
    choices: [
      {
        text: "Kuzeyi araştır",
        outcome: {
          description: "Gerçekten bir tehlike varmış! Hazırlıklı olmanız iyi oldu.",
          effects: { reputation: 20, morale: 10 }
        }
      },
      {
        text: "Kehanetle alay et",
        outcome: {
          description: "Belki bir gün pişman olursunuz...",
          effects: { morale: -5 }
        }
      }
    ]
  },
  {
    id: "famine_village",
    title: "Kıtlık Çeken Köy",
    description: "Bir köy şiddetli kıtlık yaşıyor. Yardıma ihtiyaçları var.",
    choices: [
      {
        text: "Yiyecek dağıt (80 altın)",
        outcome: {
          description: "Köylüler çok minnettar kaldı!",
          effects: { gold: -80, reputation: 40, morale: 20 }
        }
      },
      {
        text: "Küçük yardım yap (30 altın)",
        outcome: {
          description: "Biraz yardım ettiniz.",
          effects: { gold: -30, reputation: 15 }
        }
      },
      {
        text: "Geç git",
        outcome: {
          description: "Köylüler sizi hiç unutmayacak... kötü anlamda.",
          effects: { reputation: -30 }
        }
      }
    ]
  },
  {
    id: "mysterious_fog",
    title: "Gizemli Sis",
    description: "Yolu kalın bir sis kapladı. İçerden sesler geliyor.",
    choices: [
      {
        text: "Sisin içine gir",
        outcome: {
          description: "Sis yaratıklarıyla karşılaştınız!",
          effects: {
            startCombat: true,
            enemyName: "Sis Yaratıkları",
            enemyHp: 130,
            enemyMaxHp: 130,
            enemyAttack: 18,
            enemyDefense: 8,
            combatRewards: { gold: 100, xp: 70 }
          }
        }
      },
      {
        text: "Başka yol bul",
        outcome: {
          description: "Uzun ama güvenli bir yol.",
          effects: { morale: -5 }
        }
      }
    ]
  },
  {
    id: "ancient_library",
    title: "Antik Kütüphane",
    description: "Eski bir kütüphane keşfettiniz. Bilgiler sizi güçlendirebilir.",
    choices: [
      {
        text: "Kitapları incele",
        outcome: {
          description: "Önemli bilgiler öğrendiniz! Deneyim kazandınız.",
          effects: { xp: 100, morale: 10 }
        }
      },
      {
        text: "Değerli kitapları al",
        outcome: {
          description: "Kitapları sattınız.",
          effects: { gold: 60, reputation: -10 }
        }
      }
    ]
  },
  {
    id: "execution_square",
    title: "İdam Meydanı",
    description: "Bir adamı haksız yere idam edecekler. Müdahale edebilirsiniz.",
    choices: [
      {
        text: "Adamı kurtar!",
        outcome: {
          description: "Muhafızlarla çatıştınız!",
          effects: {
            startCombat: true,
            enemyName: "Şehir Muhafızları",
            enemyHp: 150,
            enemyMaxHp: 150,
            enemyAttack: 22,
            enemyDefense: 14,
            combatRewards: { xp: 90 }
          }
        }
      },
      {
        text: "Seyret",
        outcome: {
          description: "Vicdanınız rahatsız.",
          effects: { morale: -20 }
        }
      }
    ]
  },
  {
    id: "wild_horses",
    title: "Vahşi Atlar",
    description: "Bir sürü vahşi at gördünüz. Eğitebilirsiniz.",
    choices: [
      {
        text: "Atları eğit",
        outcome: {
          description: "Süvari gücünüz arttı!",
          effects: { unitsGained: 2, morale: 15 }
        }
      },
      {
        text: "Bırak gitsinler",
        outcome: {
          description: "Doğal yaşamlarına döndüler.",
          effects: { morale: 5 }
        }
      }
    ]
  },
  {
    id: "spy_caught",
    title: "Casus Yakalandı",
    description: "Kampınızda bir casus yakalandı. Ne yapacaksınız?",
    choices: [
      {
        text: "Sorguya çek",
        outcome: {
          description: "Değerli bilgiler öğrendiniz!",
          effects: { reputation: 10, xp: 50 }
        }
      },
      {
        text: "Serbest bırak",
        outcome: {
          description: "Casus kaçtı ve düşmanlarınıza bilgi verdi.",
          effects: { reputation: -15 }
        }
      },
      {
        text: "İdam et",
        outcome: {
          description: "Sert bir karar. Ordunuz korktu.",
          effects: { morale: -10, reputation: 15 }
        }
      }
    ]
  },
  {
    id: "magic_spring",
    title: "Sihirli Pınar",
    description: "Efsanevi bir pınar buldunuz. Suyu şifa verir diyorlar.",
    choices: [
      {
        text: "Suyu iç",
        outcome: {
          description: "Kendinizi daha güçlü hissediyorsunuz!",
          effects: { morale: 20, xp: 40 }
        }
      },
      {
        text: "Şişelere doldur",
        outcome: {
          description: "Şifalı su topladınız.",
          effects: { itemGained: "healing_water" }
        }
      }
    ]
  },
  {
    id: "orc_invasion",
    title: "Ork İstilası",
    description: "Bir ork ordusu yaklaşıyor! Hazırlık yapmalısınız.",
    choices: [
      {
        text: "Savaşa hazırlan!",
        outcome: {
          description: "Orklar saldırdı!",
          effects: {
            startCombat: true,
            enemyName: "Ork Savaş Çetesi",
            enemyHp: 220,
            enemyMaxHp: 220,
            enemyAttack: 32,
            enemyDefense: 16,
            combatRewards: { gold: 180, xp: 130 }
          }
        }
      },
      {
        text: "Kaleden savun",
        outcome: {
          description: "Kaleyi savundunuz ama kayıplar ağır.",
          effects: { unitsLost: 3, gold: -50, morale: -15 }
        }
      }
    ]
  },
  {
    id: "wandering_monk",
    title: "Gezgin Keşiş",
    description: "Bilge bir keşişle karşılaştınız. Size öğretmek istiyor.",
    choices: [
      {
        text: "Dinle ve öğren",
        outcome: {
          description: "Değerli bilgelik kazandınız.",
          effects: { xp: 80, morale: 15, reputation: 10 }
        }
      },
      {
        text: "İlgilenme",
        outcome: {
          description: "Keşiş sessizce uzaklaştı.",
          effects: {}
        }
      }
    ]
  },
  {
    id: "cursed_sword",
    title: "Lanetli Kılıç",
    description: "Güçlü ama lanetli bir kılıç buldunuz.",
    choices: [
      {
        text: "Kılıcı al",
        outcome: {
          description: "Saldırı gücünüz arttı ama moraliniz düştü.",
          effects: { itemGained: "cursed_blade", morale: -15 }
        }
      },
      {
        text: "Bırak",
        outcome: {
          description: "Akıllı bir seçim.",
          effects: { morale: 5 }
        }
      }
    ]
  },
  {
    id: "goblin_traders",
    title: "Goblin Tüccarlar",
    description: "Goblinler tuhaf eşyalar satıyor.",
    choices: [
      {
        text: "Alışveriş yap",
        outcome: {
          description: "Garip ama faydalı eşyalar aldınız.",
          effects: { gold: -40, itemGained: "goblin_trinket" }
        }
      },
      {
        text: "İlgilenme",
        outcome: {
          description: "Goblinler rahatsız oldu.",
          effects: { reputation: -5 }
        }
      }
    ]
  },
  {
    id: "royal_messenger",
    title: "Kral'ın Ulağı",
    description: "Kral size bir mektup göndermiş. Önemli bir görev var.",
    choices: [
      {
        text: "Görevi kabul et",
        outcome: {
          description: "Kral'ın güvenini kazandınız!",
          effects: { reputation: 30, gold: 100 }
        }
      },
      {
        text: "Reddet",
        outcome: {
          description: "Kral hoşnut değil.",
          effects: { reputation: -20 }
        }
      }
    ]
  },
  {
    id: "storm_coming",
    title: "Yaklaşan Fırtına",
    description: "Büyük bir fırtına geliyor. Korunmanız gerekiyor.",
    choices: [
      {
        text: "Mağaraya sığın",
        outcome: {
          description: "Güvendeydiniz.",
          effects: { morale: -5 }
        }
      },
      {
        text: "Yola devam et",
        outcome: {
          description: "Fırtınada kayıplar verdiniz.",
          effects: { morale: -20, gold: -30 }
        }
      }
    ]
  },
  {
    id: "necromancer_tower",
    title: "Nekromanser Kulesi",
    description: "Karanlık bir kule keşfettiniz. Ölüler içerde!",
    choices: [
      {
        text: "Kuleye saldır!",
        outcome: {
          description: "Nekromanser ile savaş!",
          effects: {
            startCombat: true,
            enemyName: "Karanlık Nekromanser",
            enemyHp: 190,
            enemyMaxHp: 190,
            enemyAttack: 28,
            enemyDefense: 12,
            combatRewards: { gold: 220, xp: 110, items: ["dark_crystal"] }
          }
        }
      },
      {
        text: "Uzak dur",
        outcome: {
          description: "Güvenli bir seçim.",
          effects: { morale: -5 }
        }
      }
    ]
  },
  {
    id: "elven_emissary",
    title: "Elf Elçisi",
    description: "Elfler ittifak teklif ediyor.",
    choices: [
      {
        text: "İttifakı kabul et",
        outcome: {
          description: "Elflerle müttefiksiniz! Okçular katıldı.",
          effects: { unitsGained: 2, reputation: 25, morale: 15 }
        }
      },
      {
        text: "Reddet",
        outcome: {
          description: "Elfler hayal kırıklığına uğradı.",
          effects: { reputation: -15 }
        }
      }
    ]
  },
  {
    id: "pit_fight",
    title: "Çukur Dövüşü",
    description: "İllegal bir dövüş kulübü buldunuz. Para kazanabilirsiniz.",
    choices: [
      {
        text: "Dövüşe katıl",
        outcome: {
          description: "Vahşi bir dövüş!",
          effects: {
            startCombat: true,
            enemyName: "Çukur Şampiyonu",
            enemyHp: 170,
            enemyMaxHp: 170,
            enemyAttack: 26,
            enemyDefense: 10,
            combatRewards: { gold: 150, xp: 85 }
          }
        }
      },
      {
        text: "İzle",
        outcome: {
          description: "İlginç bir deneyimdi.",
          effects: { morale: 5 }
        }
      }
    ]
  },
  {
    id: "ancient_ruins_expedition",
    title: "Antik Harabe Keşfi",
    description: "Eski bir medeniyetin harabelerini keşfettiniz.",
    choices: [
      {
        text: "Harabeyi araştır",
        outcome: {
          description: "Değerli artefaktlar buldunuz!",
          effects: { gold: 120, xp: 90, itemGained: "ancient_relic" }
        }
      },
      {
        text: "Dışardan bak",
        outcome: {
          description: "Güvenli ama sıkıcı.",
          effects: { morale: -5 }
        }
      }
    ]
  },
  {
    id: "wolf_pack_attack",
    title: "Kurt Sürüsü Saldırısı",
    description: "Vahşi kurtlar kampınıza saldırdı!",
    choices: [
      {
        text: "Kurtları defet!",
        outcome: {
          description: "Kurt sürüsüyle çatışma!",
          effects: {
            startCombat: true,
            enemyName: "Alfa Kurt ve Sürüsü",
            enemyHp: 110,
            enemyMaxHp: 110,
            enemyAttack: 20,
            enemyDefense: 5,
            combatRewards: { gold: 60, xp: 55 }
          }
        }
      },
      {
        text: "Geri çekil",
        outcome: {
          description: "Kampınızı terk ettiniz.",
          effects: { gold: -40, morale: -15 }
        }
      }
    ]
  },
  {
    id: "holy_relic_quest",
    title: "Kutsal Emanet Görevi",
    description: "Rahipler kutsal bir emaneti bulmak için yardımınızı istiyor.",
    choices: [
      {
        text: "Emaneti ara",
        outcome: {
          description: "Kutsal emaneti buldunuz! Tanrı'nın bereketi üzerinizde.",
          effects: { reputation: 35, morale: 20, itemGained: "holy_relic" }
        }
      },
      {
        text: "Reddet",
        outcome: {
          description: "Rahipler üzgün.",
          effects: { reputation: -10 }
        }
      }
    ]
  },
  {
    id: "troll_bridge",
    title: "Trol Köprüsü",
    description: "Köprüyü bir trol tutuyor. Geçiş ücreti istiyor.",
    choices: [
      {
        text: "Ücret öde (60 altın)",
        outcome: {
          description: "Trol sizi geçirdi.",
          effects: { gold: -60 }
        }
      },
      {
        text: "Trol ile savaş!",
        outcome: {
          description: "Trol savaşa hazır!",
          effects: {
            startCombat: true,
            enemyName: "Köprü Trolü",
            enemyHp: 180,
            enemyMaxHp: 180,
            enemyAttack: 28,
            enemyDefense: 20,
            combatRewards: { gold: 100, xp: 95 }
          }
        }
      }
    ]
  },
  {
    id: "betrayal_plot",
    title: "İhanet Komplosu",
    description: "Askerlerinizden biri ihanet planı yapıyor!",
    choices: [
      {
        text: "Hainleri yakala",
        outcome: {
          description: "Komployu önlediniz!",
          effects: { reputation: 20, morale: 10, unitsLost: 1 }
        }
      },
      {
        text: "Görmezden gel",
        outcome: {
          description: "İhanet büyüdü. Askerler kaçtı.",
          effects: { unitsLost: 3, morale: -25 }
        }
      }
    ]
  },
  {
    id: "wizard_duel",
    title: "Büyücü Düellosu",
    description: "Bir büyücü size meydan okuyor!",
    choices: [
      {
        text: "Düelloyu kabul et!",
        outcome: {
          description: "Sihirli bir savaş!",
          effects: {
            startCombat: true,
            enemyName: "Kara Büyücü",
            enemyHp: 140,
            enemyMaxHp: 140,
            enemyAttack: 30,
            enemyDefense: 8,
            combatRewards: { gold: 180, xp: 120, items: ["magic_staff"] }
          }
        }
      },
      {
        text: "Geri çekil",
        outcome: {
          description: "Büyücü sizi hor gördü.",
          effects: { reputation: -20, morale: -15 }
        }
      }
    ]
  },
  {
    id: "hidden_valley",
    title: "Gizli Vadi",
    description: "Haritada olmayan bir vadi keşfettiniz. İçeri girebilirsiniz.",
    choices: [
      {
        text: "Vadiyi keşfet",
        outcome: {
          description: "Vadide hazineler buldunuz!",
          effects: { gold: 200, xp: 100, morale: 20 }
        }
      },
      {
        text: "Devam et",
        outcome: {
          description: "Vadiyi kaçırdınız.",
          effects: {}
        }
      }
    ]
  },
  {
    id: "peasant_uprising",
    title: "Köylü Ayaklanması",
    description: "Köylüler soylulara karşı ayaklandı. Taraf seçmelisiniz.",
    choices: [
      {
        text: "Köylüleri destekle",
        outcome: {
          description: "Köylüler kazandı! Sizi kahraman ilan ettiler.",
          effects: { reputation: 40, morale: 25, gold: -50 }
        }
      },
      {
        text: "Soylular destekle",
        outcome: {
          description: "Soylular kazandı. Sizi ödüllendirdiler.",
          effects: { gold: 150, reputation: -30 }
        }
      },
      {
        text: "Tarafsız kal",
        outcome: {
          description: "Her iki taraf da size kızgın.",
          effects: { reputation: -15 }
        }
      }
    ]
  },
  {
    id: "sea_monster",
    title: "Deniz Canavarı",
    description: "Sahilde bir deniz canavarı görüldü!",
    choices: [
      {
        text: "Canavar ile savaş!",
        outcome: {
          description: "Denizin derinliklerinden gelen bir canavar!",
          effects: {
            startCombat: true,
            enemyName: "Deniz Canavarı",
            enemyHp: 230,
            enemyMaxHp: 230,
            enemyAttack: 33,
            enemyDefense: 18,
            combatRewards: { gold: 250, xp: 140, items: ["sea_pearl"] }
          }
        }
      },
      {
        text: "Kaç",
        outcome: {
          description: "Canavardan kaçtınız.",
          effects: { morale: -20, reputation: -15 }
        }
      }
    ]
  },
  {
    id: "fortune_teller",
    title: "Falcı Kadın",
    description: "Bir falcı geleceğinizi görmek istiyor.",
    choices: [
      {
        text: "Falına baktır (20 altın)",
        outcome: {
          description: "Falcı size geleceğiniz hakkında ipuçları verdi.",
          effects: { gold: -20, xp: 40, morale: 10 }
        }
      },
      {
        text: "İlgilenme",
        outcome: {
          description: "Falcı sessizce uzaklaştı.",
          effects: {}
        }
      }
    ]
  },
  {
    id: "vampire_castle",
    title: "Vampir Kalesi",
    description: "Eski bir kalede vampirler yaşıyor!",
    choices: [
      {
        text: "Kaleye bas!",
        outcome: {
          description: "Vampir lordu ile karşılaştınız!",
          effects: {
            startCombat: true,
            enemyName: "Vampir Lordu",
            enemyHp: 210,
            enemyMaxHp: 210,
            enemyAttack: 32,
            enemyDefense: 14,
            combatRewards: { gold: 280, xp: 150, items: ["vampire_fang"] }
          }
        }
      },
      {
        text: "Uzak dur",
        outcome: {
          description: "Vampirler tehlikeli.",
          effects: { morale: -5 }
        }
      }
    ]
  },
  {
    id: "enchanted_forest",
    title: "Büyülü Orman",
    description: "Orman sihirli yaratıklarla dolu.",
    choices: [
      {
        text: "Ormana gir",
        outcome: {
          description: "Periler size hediye verdi!",
          effects: { itemGained: "fairy_dust", morale: 15, xp: 60 }
        }
      },
      {
        text: "Ormanı dolaş",
        outcome: {
          description: "Güvenli bir yoldan geçtiniz.",
          effects: {}
        }
      }
    ]
  },
  {
    id: "arena_champion",
    title: "Arena Şampiyonu",
    description: "Arenanın şampiyonu sizi meydan okumaya çağırıyor!",
    choices: [
      {
        text: "Kabul et!",
        outcome: {
          description: "Kalabalık önünde epik bir savaş!",
          effects: {
            startCombat: true,
            enemyName: "Arena Şampiyonu",
            enemyHp: 195,
            enemyMaxHp: 195,
            enemyAttack: 29,
            enemyDefense: 16,
            combatRewards: { gold: 300, xp: 160, items: ["champion_belt"] }
          }
        }
      },
      {
        text: "Reddet",
        outcome: {
          description: "Kalabalık size yuhaladı.",
          effects: { reputation: -25, morale: -15 }
        }
      }
    ]
  },
  {
    id: "time_rift",
    title: "Zaman Çatlağı",
    description: "Zamanda bir çatlak keşfettiniz. İçeri girebilirsiniz!",
    choices: [
      {
        text: "Çatlağa gir",
        outcome: {
          description: "Geçmişten bir şövalye ile karşılaştınız!",
          effects: {
            startCombat: true,
            enemyName: "Antik Şövalye",
            enemyHp: 175,
            enemyMaxHp: 175,
            enemyAttack: 27,
            enemyDefense: 19,
            combatRewards: { gold: 200, xp: 130, items: ["time_crystal"] }
          }
        }
      },
      {
        text: "Uzak dur",
        outcome: {
          description: "Zaman çatlakları tehlikeli.",
          effects: {}
        }
      }
    ]
  },
  {
    id: "plague_doctor",
    title: "Veba Doktoru",
    description: "Gizemli bir doktor size garip bir iksir satmayı teklif ediyor.",
    choices: [
      {
        text: "İksiri al (45 altın)",
        outcome: {
          description: "İksir güçlü bir şifa verdi!",
          effects: { gold: -45, morale: 15, itemGained: "plague_cure" }
        }
      },
      {
        text: "Reddet",
        outcome: {
          description: "Doktor sessizce gitti.",
          effects: {}
        }
      }
    ]
  },
  {
    id: "celestial_event",
    title: "Gök Olayı",
    description: "Gökyüzünde nadir bir olay! Yıldızlar farklı şekil aldı.",
    choices: [
      {
        text: "Olayı izle ve dua et",
        outcome: {
          description: "Tanrısal bir bereket aldınız!",
          effects: { morale: 25, reputation: 20, xp: 80 }
        }
      },
      {
        text: "İlgilenme",
        outcome: {
          description: "Nadir bir fırsatı kaçırdınız.",
          effects: {}
        }
      }
    ]
  },
  {
    id: "rebel_hideout",
    title: "İsyancı Sığınağı",
    description: "İsyancılar sığınağınızı keşfettiniz. Ne yapacaksınız?",
    choices: [
      {
        text: "İsyancıları destekle",
        outcome: {
          description: "İsyancılar size katıldı!",
          effects: { unitsGained: 3, reputation: -20, morale: 20 }
        }
      },
      {
        text: "Onları ihbar et",
        outcome: {
          description: "Krallık sizi ödüllendirdi.",
          effects: { gold: 150, reputation: 30 }
        }
      },
      {
        text: "Görmezden gel",
        outcome: {
          description: "Tarafsız kaldınız.",
          effects: {}
        }
      }
    ]
  },
  {
    id: "mythical_beast",
    title: "Efsanevi Yaratık",
    description: "Bir Feniksle karşılaştınız! Savaşabilir veya barış yapabilirsiniz.",
    choices: [
      {
        text: "Feniks ile savaş",
        outcome: {
          description: "Efsanevi bir savaş!",
          effects: {
            startCombat: true,
            enemyName: "Ateş Feniksi",
            enemyHp: 260,
            enemyMaxHp: 260,
            enemyAttack: 38,
            enemyDefense: 22,
            combatRewards: { gold: 350, xp: 180, items: ["phoenix_feather"] }
          }
        }
      },
      {
        text: "Barış yap",
        outcome: {
          description: "Feniks size bir tüy hediye etti ve uçtu gitti.",
          effects: { itemGained: "phoenix_feather", morale: 20, reputation: 15 }
        }
      }
    ]
  },
  {
    id: "shadow_assassins",
    title: "Gölge Suikastçıları",
    description: "Gece karanlığında suikastçılar size saldırdı!",
    choices: [
      {
        text: "Savun kendini!",
        outcome: {
          description: "Karanlık savaşçılarla mücadele!",
          effects: {
            startCombat: true,
            enemyName: "Gölge Suikastçıları",
            enemyHp: 155,
            enemyMaxHp: 155,
            enemyAttack: 35,
            enemyDefense: 7,
            combatRewards: { gold: 170, xp: 100 }
          }
        }
      },
      {
        text: "Kaç",
        outcome: {
          description: "Suikastçılardan kaçmayı başardınız ama yaralandınız.",
          effects: { morale: -20, gold: -40 }
        }
      }
    ]
  }
];
