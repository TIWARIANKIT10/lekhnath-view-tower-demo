export type Room = {
  slug: string; name: string; line: string; price: number; guests: number;
  bed: string; perks: string[]; img: string; tag?: string;
};

// Real room categories from the resort's own fact sheet (Resort View,
// Lake View, Mountain View, Premium View Deluxe). Rates indicative from
// OTA ranges ($94–250) — confirm the resort's real direct rates.
export const rooms: Room[] = [
  {
    slug: "premium-view-deluxe", name: "Premium View Deluxe", line: "The full panorama, from your bed.",
    price: 175, guests: 2, bed: "King bed", tag: "Best view",
    perks: ["Private balcony", "Lake & Himalaya view", "Bathtub + rain shower", "Minibar · Free Wi-Fi"],
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "mountain-view-deluxe", name: "Mountain View Deluxe", line: "Fishtail and the Annapurnas, framed.",
    price: 150, guests: 2, bed: "King or twin queen", tag: "Mountain view",
    perks: ["Private balcony", "Himalaya view", "Bathtub + rain shower", "Minibar · Free Wi-Fi"],
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "lake-view-deluxe", name: "Lake View Deluxe", line: "Rupa and Begnas, far below.",
    price: 135, guests: 2, bed: "King or twin queen", tag: "Lake view",
    perks: ["Private balcony", "Twin-lake view", "Bathtub + rain shower", "Minibar · Free Wi-Fi"],
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "resort-view-deluxe", name: "Resort View Deluxe", line: "Stone cottages, garden calm.",
    price: 110, guests: 2, bed: "King or twin queen",
    perks: ["Private balcony", "Garden & resort view", "Bathtub + rain shower", "Minibar · Free Wi-Fi"],
    img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200&auto=format&fit=crop",
  },
];

export const experiences = [
  {
    title: "The Infinity Pool", line: "Turquoise water running into a horizon of lakes and white peaks — the resort's signature hour.",
    img: "https://images.unsplash.com/photo-1540541338287-3657?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Spa & Stillness", line: "Steam, sauna, jacuzzi and massage above the clouds — book ahead, float after.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Royal Trek & Village Walks", line: "Guided walks along the Royal Trek route and down through traditional villages to Rupa Lake.",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop",
  },
];

// Ratings summaries + one real guest quote, all attributed.
export const reviews = [
  { text: "Absolutely stunning resort! The views of the Annapurna range and Rupa and Begnas Lakes are breathtaking… the infinity pool is pure serenity.", source: "Trip.com guest" },
  { text: "Rated 8.7 'Excellent' across 2,469 ratings collected from top booking sites.", source: "Trivago Rating Index" },
  { text: "8.3 'Very Good' from 182 verified guest ratings — the view gets mentioned again and again.", source: "HotelsCombined" },
];

export const gallery = [
  { img: "https://images.unsplash.com/photo-1540541338287-3657?q=80&w=1200&auto=format&fit=crop", label: "Infinity pool" },
  { img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop", label: "Annapurna panorama" },
  { img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200&auto=format&fit=crop", label: "Stone cottages" },
  { img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop", label: "The spa" },
  { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop", label: "Panorama Restaurant" },
  { img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop", label: "Lakes below" },
];

export const distances = [
  { place: "Rupa Lake", time: "Below the ridge" },
  { place: "Begnas Lake", time: "15.9 km" },
  { place: "Pokhara Lakeside", time: "25 km · shuttle runs" },
  { place: "Pokhara Intl. Airport", time: "~1 hr drive" },
];

export const heroImages = [
  "https://images.unsplash.com/photo-1540541338287-3657?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop",
];
