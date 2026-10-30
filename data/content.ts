export type Room = {
  slug: string; name: string; line: string; price: number; guests: number;
  bed: string; perks: string[]; img: string; tag?: string;
};

// The resort's OWN published room types and rates (from their promo posts):
// Double Deluxe NPR 5,000 · Mountain View Double Deluxe NPR 5,500 ·
// Pool View Family Deluxe NPR 6,000. USD shown at ~NPR 132/$ — confirm.
export const rooms: Room[] = [
  {
    slug: "mountain-view-deluxe", name: "Mountain View Double Deluxe", line: "Annapurna from your bed.",
    price: 42, guests: 2, bed: "Double bed", tag: "Best view",
    perks: ["Mountain view", "Free buffet breakfast", "Free Wi-Fi", "Pool access"],
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "pool-view-family", name: "Pool View Family Deluxe", line: "Triple room, pool right there.",
    price: 45, guests: 4, bed: "Double + single bed", tag: "Families",
    perks: ["Pool view", "Free buffet breakfast", "Free Wi-Fi", "Pool access"],
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "resort-double", name: "Resort Double Deluxe", line: "The classic hillside stay.",
    price: 38, guests: 2, bed: "Double bed",
    perks: ["Garden setting", "Free buffet breakfast", "Free Wi-Fi", "Pool access"],
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop",
  },
];

export const experiences = [
  {
    title: "Two Pools on the Hill", line: "Outdoor pools open 8 AM–6 PM — swim with the Annapurnas watching.",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sekuwa & Thali, Their Signature", line: "Famous chicken sekuwa and grilled-chicken thali at the resort restaurant and bar.",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Lakes Below, Peaks Above", line: "Begnas and Dipang lakes below the hill, the Annapurna range across the sky.",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
  },
];

// Rating summaries and factual highlights from public listings — no
// invented guest quotes.
export const reviews = [
  { text: "Rated 4.7 by 688 Google guests — staff, views and breakfast praised most.", source: "Google reviews" },
  { text: "Free buffet breakfast daily, 7:00–9:30 AM, and free parking on site.", source: "From the resort's listings" },
  { text: "Two outdoor pools, a conference center, garden and terrace on one hillside.", source: "From the resort's listings" },
];

export const gallery = [
  { img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop", label: "The pools" },
  { img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop", label: "Annapurna view" },
  { img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop", label: "Signature sekuwa" },
  { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop", label: "Mountain View Deluxe" },
  { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop", label: "Restaurant" },
  { img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop", label: "Begnas Lake" },
];

export const distances = [
  { place: "Talchowk", time: "5 min" },
  { place: "Begnas Lake", time: "5 min drive" },
  { place: "Seti River", time: "6.3 km" },
  { place: "Pokhara Intl. Airport", time: "9.5 km" },
];

export const heroImages = [
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop",
];
