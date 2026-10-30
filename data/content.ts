export type Room = {
  slug: string; name: string; line: string; price: number; guests: number;
  bed: string; perks: string[]; img: string; tag?: string;
};

export const rooms: Room[] = [
  {
    slug: "deluxe-double", name: "Deluxe Double Room", line: "Wake up to Annapurna.",
    price: 23, guests: 2, bed: "Double bed", tag: "Most loved",
    perks: ["Balcony", "Mountain view", "Free Wi-Fi", "Ensuite bath"],
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "budget-twin", name: "Budget Twin Room", line: "Simple, clean, quiet.",
    price: 18, guests: 2, bed: "2 single beds",
    perks: ["Garden view", "Free Wi-Fi", "Ensuite bath"],
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "family-eco", name: "Family Eco Room", line: "Space for everyone, farm at your door.",
    price: 32, guests: 4, bed: "Double + 2 singles", tag: "Families",
    perks: ["Lake view", "Balcony", "Free Wi-Fi", "Room service"],
    img: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop",
  },
];

export const experiences = [
  {
    title: "The View Tower", line: "360° — Annapurna, Manaslu, Begnas & Rupa in one turn.",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Eco Farm Table", line: "Organic food, grown here, served on the rooftop.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Two Lakes, One Stay", line: "Begnas 3.6 km. Rupa, a short walk beyond.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  },
];

export const reviews = [
  { text: "The rooftop view is super beautiful. The food was abundant and organic, and the room perfect.", source: "Google review" },
  { text: "A true heaven for nature lovers — beauty, and a real commitment to sustainability.", source: "Google review" },
  { text: "The best location in Lekhnath. Panoramic Annapurna and Manaslu views, right from the window.", source: "Google review" },
];

export const gallery = [
  { img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop", label: "Annapurna panorama" },
  { img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop", label: "The hotel" },
  { img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop", label: "Deluxe Double" },
  { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop", label: "Rooftop restaurant" },
  { img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop", label: "Lake view" },
  { img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop", label: "Evenings" },
];

export const distances = [
  { place: "Begnas Lake", time: "3.6 km" },
  { place: "Rupa Lake", time: "10 min walk*" },
  { place: "Pokhara Intl. Airport", time: "13 km" },
  { place: "Lakeside, Pokhara", time: "19 km" },
];

export const heroImages = [
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop",
];
