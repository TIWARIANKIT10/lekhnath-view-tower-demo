export type Room = {
  slug: string; name: string; line: string; price: number; guests: number;
  bed: string; perks: string[]; img: string; tag?: string;
};

// Real room types from the hotel's Expedia listing (2026-10-30); rates are
// indicative from Google Travel ranges (NPR 8,790–16,538) — confirm with hotel.
export const rooms: Room[] = [
  {
    slug: "classic-suite", name: "Classic Suite — Mountain View", line: "King bed, patio, pure mountain air.",
    price: 110, guests: 3, bed: "1 king bed", tag: "Mountain view",
    perks: ["Private patio", "Mountain view", "Breakfast included", "Free Wi-Fi", "In-room safe"],
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "deluxe-double-twin", name: "Deluxe Double or Twin Room", line: "Your pick — queen bed or two twins.",
    price: 75, guests: 3, bed: "Queen or 2 twin beds", tag: "Most flexible",
    perks: ["Private balcony", "Breakfast included", "Free Wi-Fi", "Premium bedding", "In-room safe"],
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "garden-room", name: "Garden Terrace Room", line: "Step straight into the garden.",
    price: 65, guests: 2, bed: "Double bed",
    perks: ["Terrace access", "Garden view", "Breakfast included", "Free Wi-Fi"],
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop",
  },
];

export const experiences = [
  {
    title: "Steps From Begnas Lake", line: "Out the door, down the path — boating, fishing and still water in one minute.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Breakfast, Included", line: "Continental breakfast every morning, 7:00–10:30 — on the terrace when the sun is out.",
    img: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "International Kitchen & Bar", line: "International dishes at the restaurant, coffee at the café, a quiet drink to finish.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
];

// Honest, factual highlights from the hotel's own listings (no invented
// guest quotes). The reputation-repair story lives in the README.
export const reviews = [
  { text: "Every room has a private balcony or patio — mountain or garden in front of you.", source: "From the hotel's listings" },
  { text: "Free continental breakfast daily, 7:00–10:30 AM, plus free valet parking.", source: "From the hotel's listings" },
  { text: "24-hour front desk and 24-hour business center — arrive any time.", source: "From the hotel's listings" },
];

export const gallery = [
  { img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop", label: "Begnas Lake" },
  { img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop", label: "Annapurna panorama" },
  { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop", label: "Deluxe room" },
  { img: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1200&auto=format&fit=crop", label: "Breakfast" },
  { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop", label: "Restaurant" },
  { img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop", label: "Evenings" },
];

export const distances = [
  { place: "Begnas Lake", time: "0.1 km" },
  { place: "Rupa Lake", time: "2.9 km" },
  { place: "Pokhara Zoological Park", time: "3.4 km" },
  { place: "Pokhara Intl. Airport", time: "22 min drive" },
];

export const heroImages = [
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop",
];
