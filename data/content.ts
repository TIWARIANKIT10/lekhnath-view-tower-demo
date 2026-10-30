export type Room = {
  slug: string; name: string; line: string; price: number; guests: number;
  bed: string; perks: string[]; img: string; tag?: string;
};

// The resort's real unit mix (28 Deluxe, 4 waterfront cottages,
// 4 premiere rooms, 2 luxury suites). Rates indicative from OTA ranges
// ($135–320) — confirm the resort's real direct rates before launch.
export const rooms: Room[] = [
  {
    slug: "deluxe-room", name: "Deluxe Room", line: "Gurung stone, forest quiet.",
    price: 150, guests: 2, bed: "King bed", tag: "Stone chalet",
    perks: ["Balcony or patio", "Lake & countryside view", "Minibar · Safe", "Bathrobe & slippers"],
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "waterfront-cottage", name: "Waterfront Cottage", line: "Sleep at the water's edge.",
    price: 195, guests: 2, bed: "King bed", tag: "Water's edge",
    perks: ["Private patio", "Direct lake outlook", "Minibar · Safe", "Bathrobe & slippers"],
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "premiere-room", name: "Premiere Room", line: "More space, wider views.",
    price: 235, guests: 3, bed: "King + day bed", tag: "Premiere",
    perks: ["Balcony", "Himalaya & lake view", "Minibar · Safe", "Bathrobe & slippers"],
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "luxury-suite", name: "Luxury Suite", line: "The resort at its most serene.",
    price: 310, guests: 3, bed: "King bed + lounge", tag: "Top suite",
    perks: ["Separate lounge", "Best lake view", "Minibar · Safe", "Bathrobe & slippers"],
    img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop",
  },
];

export const experiences = [
  {
    title: "Arrive by Boat", line: "The preferred way in: a relaxing boat ride from Begnas Bazar boat station, straight to the forest shore.",
    img: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Himalayan Nature Spa", line: "Classical Ayurvedic treatments and massages by an experienced team of Ayurveda experts from Kerala.",
    img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Chemical-Free Pool, Pristine Lake", line: "Swim in the chemical-free pool, or in the lake itself — jungle on three sides, water on the fourth.",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
  },
];

// Ratings summaries from the resort's verified OTA scores — no
// invented quotes. Value-for-money (7.9) is its soft spot; see README.
export const reviews = [
  { text: "Rated 9.0 'Wonderful' across 83 verified guest ratings on Kayak/momondo.", source: "Kayak / momondo" },
  { text: "Guests scored it 9.9 for comfort, 9.9 for location and 9.9 for staff.", source: "Verified rating breakdown" },
  { text: "Created, in the founders' words, from a love of pure nature, natural remedies and wholesome food.", source: "The resort's own story" },
];

export const gallery = [
  { img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop", label: "The pool" },
  { img: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1200&auto=format&fit=crop", label: "Arriving by boat" },
  { img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200&auto=format&fit=crop", label: "Ayurveda spa" },
  { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop", label: "Jimire Restaurant" },
  { img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop", label: "Himalayan backdrop" },
  { img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop", label: "Forest on three sides" },
];

export const distances = [
  { place: "Begnas Lake", time: "2 min walk" },
  { place: "Rupa Lake", time: "10 min walk" },
  { place: "Pokhara Zoological Park", time: "1.4 km" },
  { place: "Pokhara City", time: "11 km" },
];

export const heroImages = [
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop",
];
