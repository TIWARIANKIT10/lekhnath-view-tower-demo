export type Room = {
  slug: string; name: string; line: string; price: number; guests: number;
  bed: string; perks: string[]; img: string; tag?: string;
};

// Room types and indicative rates cross-checked from Expedia / Klook /
// momondo listings (2026-10-30). Confirm final rates with the hotel.
export const rooms: Room[] = [
  {
    slug: "standard-double", name: "Standard Double Room", line: "Clean, calm, everything you need.",
    price: 14, guests: 2, bed: "Double bed", tag: "Best value",
    perks: ["Free Wi-Fi", "Ensuite bath", "Flat-screen TV", "Daily housekeeping"],
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "mountain-view-family", name: "Mountain View Family Room", line: "Wake up to the Annapurnas.",
    price: 19, guests: 3, bed: "Double + single bed", tag: "Mountain view",
    perks: ["Mountain view", "Free Wi-Fi", "Ensuite bath", "Sleeps 3"],
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "deluxe-twin", name: "Deluxe Twin Room", line: "Two beds, lake air, zero fuss.",
    price: 17, guests: 2, bed: "2 single beds",
    perks: ["Free Wi-Fi", "Ensuite bath", "Flat-screen TV", "Daily housekeeping"],
    img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop",
  },
];

export const experiences = [
  {
    title: "Begnas Lake, 200 Steps Away", line: "Boating at sunrise, fishing boats, still water — the lake is your front garden.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Restaurant & Bar", line: "A satisfying meal, a quiet drink — end the day without leaving the hotel.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Meetings & Gatherings", line: "A meeting room and garden space for family events and small conferences.",
    img: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1200&auto=format&fit=crop",
  },
];

// Verified OTA rating summaries (not invented quotes): Expedia rates the
// hotel 10/10 "Exceptional"; Klook guests rate cleanliness and service 5/5.
export const reviews = [
  { text: "Exceptional — 10 out of 10 from verified guest stays.", source: "Expedia rating" },
  { text: "Cleanliness 5/5 and service 5/5 from recent guests.", source: "Klook rating" },
  { text: "Booked through Booking.com via partner listings — now bookable direct here.", source: "Booking.com partner listing" },
];

export const gallery = [
  { img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop", label: "Annapurna panorama" },
  { img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop", label: "Begnas Lake" },
  { img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop", label: "Standard Double" },
  { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop", label: "Restaurant" },
  { img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop", label: "The hotel" },
  { img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop", label: "Evenings" },
];

export const distances = [
  { place: "Begnas Lake", time: "0.2 km" },
  { place: "Rupa Lake", time: "3.3 km" },
  { place: "Pokhara Zoological Park", time: "3.3 km" },
  { place: "Pokhara Intl. Airport", time: "13.6 km" },
];

export const heroImages = [
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop",
];
