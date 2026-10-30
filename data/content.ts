export type Room = {
  slug: string; name: string; line: string; price: number; guests: number;
  bed: string; perks: string[]; img: string; tag?: string;
};

// Real room types from the hotel's Expedia / EaseMyTrip listings
// (2026-10-30). Rates are indicative — OTAs show this hotel from ~$7 —
// confirm the hotel's real direct rates before launch.
export const rooms: Room[] = [
  {
    slug: "deluxe-king-lake", name: "Deluxe King Room — Lake View", line: "The best seat in the house.",
    price: 12, guests: 2, bed: "King bed", tag: "Lake view",
    perks: ["Lake view", "Smart TV", "Free fast Wi-Fi", "Bottled water"],
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "double-lake-view", name: "Double Room — Lake View", line: "Wake up over Begnas.",
    price: 10, guests: 2, bed: "Double bed", tag: "Most loved",
    perks: ["Lake view", "Smart TV", "Free fast Wi-Fi", "Daily housekeeping"],
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "deluxe-double", name: "Deluxe Double Room", line: "Simple, quiet, honest value.",
    price: 9, guests: 2, bed: "Double bed",
    perks: ["Garden side", "Smart TV", "Free fast Wi-Fi", "Daily housekeeping"],
    img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop",
  },
];

export const experiences = [
  {
    title: "The Rooftop Terrace", line: "Sunrise over the lake, sunset over the hills — the rooftop is the hotel's living room.",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Garden & Birdsong", line: "A semi-rural garden base loved by birdwatchers — Begnas wetlands minutes away.",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Cooked-to-Order Mornings", line: "Breakfast cooked how you like it (7:00–9:30), a restaurant on site, room service when you're slow.",
    img: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1200&auto=format&fit=crop",
  },
];

// Rating summaries from public listings — no invented guest quotes.
export const reviews = [
  { text: "Rated 8.8/10 across 57 guest ratings — quiet, clean and kind, again and again.", source: "HotelsCombined rating" },
  { text: "Trip.com guests score it 9.7/10 — 'Amazing' — for a few dollars a night.", source: "Trip.com rating" },
  { text: "Free Wi-Fi at 250+ Mbps, rooftop terrace, garden and bikes to rent.", source: "From the hotel's listings" },
];

export const gallery = [
  { img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop", label: "Rooftop panorama" },
  { img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop", label: "Begnas Lake" },
  { img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop", label: "Garden green" },
  { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop", label: "Deluxe King" },
  { img: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1200&auto=format&fit=crop", label: "Breakfast" },
  { img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop", label: "Evenings" },
];

export const distances = [
  { place: "Begnas Lake", time: "1 km" },
  { place: "Rupa Lake", time: "2.9 km" },
  { place: "Pokhara Zoological Park", time: "3.7 km" },
  { place: "Seti River", time: "7.4 km" },
];

export const heroImages = [
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop",
];
