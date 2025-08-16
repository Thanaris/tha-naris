export type Product = {
  slug: string;
  name: string;
  finish?: string;
  size?: string;
  description?: string;
};

export const PRODUCTS: Product[] = [
  { slug: "plain-white-glossy", name: "Plain White - Glossy", size: "600×1200 mm", description: "Brillante e minimale, ideale per ambienti moderni."},
  { slug: "plain-white-matt", name: "Plain White - Matt", size: "600×1200 mm", description: "Finitura opaca per un look contemporaneo e sobrio."},
  { slug: "staturio-pearl", name: "Staturio Pearl", size: "600×1200 mm", description: "Vena delicata e luminosa per spazi eleganti."},
  { slug: "statuario-classic", name: "Statuario Classic", size: "600×1200 mm", description: "Classico effetto marmo con venatura decisa."},
  { slug: "champagne-crema", name: "Champagne Crema", size: "600×1200 mm", description: "Toni caldi per ambienti accoglienti."},
  { slug: "harmony-grey", name: "Harmony Grey", size: "600×1200 mm", description: "Grigio moderno e versatile."},
];
