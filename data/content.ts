export type Room = {
  slug: string; name: string; line: string; price: number; guests: number;
  bed: string; perks: string[]; img: string; tag?: string;
};

// Room kinds confirmed by guest reviews and listings (attached-bath and
// shared-bath rooms, family rooms). Rates indicative from Booking.com
// ("from $16") — confirm with the hotel before launch.
export const rooms: Room[] = [
  {
    slug: "garden-double", name: "Garden Double Room", line: "Flowers outside, calm inside.",
    price: 20, guests: 2, bed: "Double bed", tag: "Garden view",
    perks: ["Attached bathroom", "Garden view", "Free Wi-Fi", "Desk"],
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "family-room", name: "Family Room", line: "Space for the whole flock.",
    price: 28, guests: 4, bed: "Double + 2 singles", tag: "Families",
    perks: ["Attached bathroom", "Lake & mountain view", "Free Wi-Fi", "Desk"],
    img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "budget-twin", name: "Budget Room — Shared Bath", line: "Simple, honest, hilltop quiet.",
    price: 12, guests: 2, bed: "2 single beds",
    perks: ["Shared bathroom", "Garden access", "Free Wi-Fi"],
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop",
  },
];

export const experiences = [
  {
    title: "The Garden", line: "Flowers, birds and butterflies — guests call it the most peaceful garden on the hill.",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Nima's Kitchen", line: "Home-cooked Nepali food — dal bhat and gundruk achaar guests write home about. Asian & vegetarian breakfasts.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Between the Twin Lakes", line: "Up on the hill between Begnas and Rupa — both lakes and the Annapurnas in one slow look around.",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
  },
];

// REAL guest quotes from the hotel's public Tripadvisor reviews —
// the first site in this series with findable written reviews.
export const reviews = [
  { text: "Amazing place with a crazy view on both Begnas Lake and the Annapurna mountains. A peaceful garden with a huge variety of flowers, birds and butterflies.", source: "Tripadvisor guest · Oct 2023" },
  { text: "Host Nima takes care of you as her children. I stayed 10 lovely days!", source: "Tripadvisor guest · Oct 2023" },
  { text: "One of the few lodgings between the lakes, up on the hill — a more than welcome getaway from the masses at Pokhara.", source: "Tripadvisor guest" },
];

export const gallery = [
  { img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop", label: "Garden green" },
  { img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop", label: "Annapurna view" },
  { img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop", label: "Begnas Lake" },
  { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop", label: "The restaurant" },
  { img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop", label: "Garden Double" },
  { img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop", label: "Evenings" },
];

export const distances = [
  { place: "Begnas Lake", time: "4.1 km" },
  { place: "Rupa Lake", time: "Between the lakes" },
  { place: "Pokhara Lakeside", time: "19 km" },
  { place: "Devi's Falls", time: "19 km" },
];

export const heroImages = [
  "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop",
];
