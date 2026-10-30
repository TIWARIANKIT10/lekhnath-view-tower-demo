// Hotel facts live here (no imports) so lib/booking.ts and lib/config.ts
// can both use them without a circular dependency.
// Begnas Lake Front Guest House — verified 2026-10-30 from its Facebook
// place record, Kayak / momondo / HotelsCombined, Cvent and the property's
// own description. Mobile +977 985-6033003 is consistent across every
// source. Room count: the property's own description and Cvent say 12
// (Traveloka says 11; one OTA feed says 3 — confirm on visit). Check-out
// 10:00 AM per Kayak/momondo (one feed says 12:00 — confirm).
export const hotel = {
  name: "Begnas Lake Front Guest House",
  suffix: "",
  tagline: "Right on the lake.",
  phoneDisplay: "+977 985-6033003",
  phone: "+9779856033003",
  whatsapp: "9779856033003" as string, // the listed mobile — confirm WhatsApp with the family
  email: "" as string, // not listed — confirm with the hotel
  address: "31 Majhikuna, Begnas Lake, Lekhnath, Pokhara 33700, Nepal",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Begnas+Lake+Front+Guest+House+Majhikuna+Pokhara",
  otaScore: "8.3",
  otaLabel: "Very good · guest reviews on partner listings",
  // Booking.com: paste the property's exact Booking.com URL here once
  // confirmed and every Booking.com button lands on the property page
  // (dates/guests attached, affiliate label applied). See lib/booking.ts.
  bookingComPropertyUrl: "" as string,
  checkIn: "12:00 PM",
  checkOut: "10:00 AM",
} as const;
