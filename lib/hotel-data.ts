// Hotel facts live here (no imports) so lib/booking.ts and lib/config.ts
// can both use them without a circular dependency.
// Rupakot Resort — verified 2026-10-30 from the resort's own website and
// place record, its expo fact sheet, HotelsCombined, Trivago and
// Trip.com. Main resort mobile +977 980-2832457 (place record; sales
// 980-2832458, reservations 980-2832460 — a whole sales team exists).
// Email info@rupakotresort.com is the published general address.
// Room count: the resort's own site says 42 rooms; its expo sheet lists
// 51 deluxe rooms across 5 categories — confirm which is current.
export const hotel = {
  name: "Rupakot Resort",
  suffix: "",
  tagline: "The ridge above the lakes.",
  phoneDisplay: "+977 980-2832457",
  phone: "+9779802832457",
  whatsapp: "9779802832457" as string, // the resort's mobile — confirm WhatsApp with sales
  email: "info@rupakotresort.com" as string,
  address: "Maidan-6, Rupakot, Rupa, Pokhara 33701, Nepal",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rupakot+Resort+Pokhara",
  otaScore: "4.5",
  otaLabel: "Google rating · 396 reviews",
  // Booking.com: paste the property's exact Booking.com URL here once
  // confirmed and every Booking.com button lands on the property page
  // (dates/guests attached, affiliate label applied). See lib/booking.ts.
  bookingComPropertyUrl: "" as string,
  checkIn: "2:00 PM",
  checkOut: "11:00 AM",
} as const;
