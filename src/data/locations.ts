import { Location } from "@/types/game";

export const gameLocations: Location[] = [
  {
    id: "village",
    name: "Köy",
    description: "Huzurlu bir köy. Burada dinlenebilir, köylülerle konuşabilir ve ticaret yapabilirsiniz.",
    unlocked: true
  },
  {
    id: "forest",
    name: "Karanlık Orman",
    description: "Tehlikeli bir orman. Haydutlar ve yaratıklar burada dolaşır.",
    unlocked: true
  },
  {
    id: "market",
    name: "Pazar",
    description: "Canlı bir pazar yeri. Her türlü eşya ve silah burada bulunur.",
    unlocked: true
  },
  {
    id: "castle",
    name: "Kale",
    description: "Görkemli bir kale. Soylular ve askerler burada yaşar.",
    unlocked: false
  },
  {
    id: "mountains",
    name: "Dağlar",
    description: "Tehlikeli dağlar. Ejderhalar ve gizemli yaratıklar burada yaşar.",
    unlocked: false
  },
  {
    id: "ruins",
    name: "Antik Harabeler",
    description: "Eski bir medeniyetin kalıntıları. Hazineler ve lanетler burada gizli.",
    unlocked: false
  }
];
