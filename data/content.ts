export type Room = {
  slug: string; name: string; line: string; price: number; guests: number;
  bed: string; perks: string[]; img: string; tag?: string;
};

// Room types drawn from the property's listings (lake-view doubles,
// kitchenette rooms, family rooms). Rates indicative from OTA ranges
// ($8–30) — confirm the family's real direct rates before launch.
export const rooms: Room[] = [
  {
    slug: "lake-view-double", name: "Lake View Double Room", line: "The lake, right there.",
    price: 22, guests: 2, bed: "Double bed", tag: "Lake view",
    perks: ["Lake view", "Balcony", "Free Wi-Fi", "Private bathroom"],
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "family-lake-room", name: "Family Lake Room", line: "Room for everyone, water for all.",
    price: 28, guests: 4, bed: "Double + 2 singles", tag: "Families",
    perks: ["Lake view", "Kitchenette", "Free Wi-Fi", "Private bathroom"],
    img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "standard-double", name: "Standard Double Room", line: "Simple, quiet, by the shore.",
    price: 14, guests: 2, bed: "Double bed",
    perks: ["Garden side", "Free Wi-Fi", "Shared kitchen access", "Private bathroom"],
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop",
  },
];

export const experiences = [
  {
    title: "Sunset From the Rooftop", line: "In the family's own words: a breathtaking sunset from the rooftop, every single evening.",
    img: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Yoga & Quiet Water", line: "Yoga classes and a meditation hall above a still lake — mornings start slow here.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Lake Life, All Day", line: "Boating, fishing, hiking and bikes — the lake is the front garden, the hills are the back.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  },
];

// Factual highlights from the property's own description and listings —
// no invented guest quotes.
export const reviews = [
  { text: "Rated 8.3 'Very good' by guests booking through partner sites.", source: "Partner listing rating" },
  { text: "A family-run guest house, nestled in forest on the sloping shores of Begnas Tal.", source: "The family's own story" },
  { text: "Shared kitchen, garden, picnic and barbecue spots — made for slow stays.", source: "From the property's listings" },
];

export const gallery = [
  { img: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1200&auto=format&fit=crop", label: "Lake at dusk" },
  { img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop", label: "Begnas Lake" },
  { img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop", label: "Morning yoga" },
  { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop", label: "Lake View Double" },
  { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop", label: "Restaurant" },
  { img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop", label: "Annapurna backdrop" },
];

export const distances = [
  { place: "Begnas Lake", time: "Steps away" },
  { place: "Rupa Lake", time: "4 min drive" },
  { place: "Pokhara Zoological Park", time: "2.8 km" },
  { place: "Pokhara Intl. Airport", time: "17 km" },
];

export const heroImages = [
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop",
];
