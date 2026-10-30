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
  // Booking.com integration: paste the hotel's exact Booking.com property URL
  // here once confirmed with the hotel, and every "Book on Booking.com" button
  // will go straight to that property page (with dates/guests attached).
  // While empty, buttons fall back to a Booking.com search for this exact
  // property name + the guest's dates — same result, one extra click.
  bookingComPropertyUrl: "" as string,
  checkIn: "12:00 PM",
  checkOut: "12:00 PM",
} as const;

export const waLink = (message: string) =>
  `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(message)}`;

// Booking.com deep link carrying the guest's exact dates / guests / rooms.
// Uses Booking.com's standard search parameters (checkin, checkout,
// group_adults, no_rooms). If the exact property URL is set above, the same
// parameters are attached to the property page instead.
export const bookingComLink = (checkIn?: string, checkOut?: string, guests?: string) => {
  const p = new URLSearchParams();
  if (checkIn) p.set("checkin", checkIn);
  if (checkOut) p.set("checkout", checkOut);
  p.set("group_adults", guests && /^\d+$/.test(guests) ? guests : "2");
  p.set("no_rooms", "1");
  p.set("group_children", "0");
  if (hotel.bookingComPropertyUrl) {
    const sep = hotel.bookingComPropertyUrl.includes("?") ? "&" : "?";
    return `${hotel.bookingComPropertyUrl}${sep}${p.toString()}`;
  }
  p.set("ss", "Hotel Lekhnath View Tower and Eco Farm, Lekhnath, Pokhara, Nepal");
  p.set("dest_type", "hotel");
  p.set("sb_price_type", "total");
  return `https://www.booking.com/searchresults.html?${p.toString()}`;
};

export const bookMessage = (room?: string, checkIn?: string, checkOut?: string, guests?: string) => {
  const parts = [`Namaste ${hotel.name}, I would like to book directly.`];
  if (room) parts.push(`Room: ${room}`);
  if (checkIn) parts.push(`Check-in: ${checkIn}`);
  if (checkOut) parts.push(`Check-out: ${checkOut}`);
  if (guests) parts.push(`Guests: ${guests}`);
  parts.push("Please share availability and your best direct rate.");
  return parts.join("\n");
};
