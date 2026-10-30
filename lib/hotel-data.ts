// Hotel facts live here (no imports) so lib/booking.ts and lib/config.ts
// can both use them without a circular dependency.
// The Begnas Lake Resort & Villas — verified 2026-10-30 from the
// resort's OWN website (phone +977 985-606-1080, sales +977 985-602-0262,
// info@begnaslakeresort.com — all published on begnaslakeresort.com),
// its place record, and Kayak/momondo listings (landline +977 61-693304).
// Units: the resort's own description lists 28 Deluxe rooms + 4
// waterfront cottages + 4 premiere rooms + 2 luxury suites = 38
// (OTA feeds round to 40 accommodations).
export const hotel = {
  name: "The Begnas Lake Resort & Villas",
  suffix: "",
  tagline: "Arrive by boat. Stay in the forest.",
  phoneDisplay: "+977 985-6061080",
  phone: "+9779856061080",
  whatsapp: "9779856061080" as string, // the resort's published mobile — confirm WhatsApp
  email: "info@begnaslakeresort.com" as string,
  address: "Sundari Danda, Begnas Lake, Lekhnath, Pokhara, Nepal",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=The+Begnas+Lake+Resort+Villas+Pokhara",
  otaScore: "9.0",
  otaLabel: "Wonderful · 83 verified guest ratings",
  // Booking.com: paste the property's exact Booking.com URL here once
  // confirmed and every Booking.com button lands on the property page
  // (dates/guests attached, affiliate label applied). See lib/booking.ts.
  bookingComPropertyUrl: "" as string,
  checkIn: "1:00 PM",
  checkOut: "11:00 AM",
} as const;
