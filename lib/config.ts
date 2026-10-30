// ── Single source of truth ──────────────────────────────────────────────
// Change the hotel's details here and the whole site updates.
// Phone / rating below are the REAL details found on Google listings
// (the old site showed a placeholder number — this demo fixes that).
export const hotel = {
  name: "Hotel Lekhnath View Tower",
  suffix: "& Eco Farm",
  tagline: "Above the lakes. Below the Himalayas.",
  phoneDisplay: "+977 985-6052139",
  phone: "+9779856052139",
  whatsapp: "9779856052139",
  email: "stay@lekhnathviewtower.com", // placeholder — confirm with hotel
  address: "Begnas Bhoretar Road, Deorali, Lekhnath, Pokhara 33700, Nepal",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Hotel+Lekhnath+View+Tower+and+Eco+Farm+Begnas+Pokhara",
  googleRating: 4.8,
  googleReviews: 20,
  bookingRating: 9.8,
  checkIn: "12:00 PM",
  checkOut: "12:00 PM",
} as const;

export const waLink = (message: string) =>
  `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(message)}`;

export const bookMessage = (room?: string, checkIn?: string, checkOut?: string, guests?: string) => {
  const parts = [`Namaste ${hotel.name}, I would like to book directly.`];
  if (room) parts.push(`Room: ${room}`);
  if (checkIn) parts.push(`Check-in: ${checkIn}`);
  if (checkOut) parts.push(`Check-out: ${checkOut}`);
  if (guests) parts.push(`Guests: ${guests}`);
  parts.push("Please share availability and your best direct rate.");
  return parts.join("\n");
};
