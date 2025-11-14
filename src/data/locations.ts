import { Location } from "@/types/game";

export const gameLocations: Location[] = [
  {
    id: "royal_capital",
    name: "Kraliyet Başkenti",
    description: "Cennetin Krallığı'nın kalbi. Kral'ın sarayı, büyük katedral ve canlı pazar burada.",
    unlocked: true
  },
  {
    id: "village",
    name: "Umut Köyü",
    description: "Huzurlu bir sınır köyü. Köylüler misafirperver ama haydut saldırıları sık.",
    unlocked: true
  },
  {
    id: "dark_forest",
    name: "Karanlık Orman",
    description: "Lanetli bir orman. Haydutlar, vahşi yaratıklar ve büyülü varlıklar burada dolaşır.",
    unlocked: true
  },
  {
    id: "market",
    name: "Tüccar Pazarı",
    description: "Canlı bir ticaret merkezi. Her türlü eşya, silah ve sırlar burada bulunur.",
    unlocked: true
  },
  {
    id: "northern_fortress",
    name: "Kuzey Kalesi",
    description: "Sınırı koruyan güçlü bir kale. Ork saldırılarına karşı son savunma hattı.",
    unlocked: false
  },
  {
    id: "mystic_mountains",
    name: "Gizemli Dağlar",
    description: "Bulutların üzerinde yükselen dağlar. Ejderhalar, antik tapınaklar ve kayıp hazineler.",
    unlocked: false
  },
  {
    id: "ancient_ruins",
    name: "Antik Harabeler",
    description: "Kayıp Medeniyetin kalıntıları. Güçlü artefaktlar, laneter ve gizli bilgiler burada.",
    unlocked: false
  },
  {
    id: "cursed_swamp",
    name: "Lanetli Bataklık",
    description: "Karanlık büyülerle dolu tehlikeli bataklık. Nekromanserlerin ve ölülerin evi.",
    unlocked: false
  },
  {
    id: "elven_sanctuary",
    name: "Elf Sığınağı",
    description: "Gizli elf yerleşimi. Sihirli koruma ve antik bilgelik burada saklanıyor.",
    unlocked: false
  },
  {
    id: "dragon_peak",
    name: "Ejderha Zirvesi",
    description: "Efsanevi ejderhanın yuvası. En cesur savaşçılar bile buradan korkar.",
    unlocked: false
  },
  {
    id: "shadow_realm",
    name: "Gölge Diyarı",
    description: "Gerçeklik ile rüya arasındaki karanlık bölge. Burası yaşayanlar için değil.",
    unlocked: false
  },
  {
    id: "crystal_caverns",
    name: "Kristal Mağaraları",
    description: "Parlayan kristallerle dolu gizemli mağaralar. Sihirli enerji kaynağı.",
    unlocked: false
  }
];
