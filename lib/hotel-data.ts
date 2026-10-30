// Hotel facts live here (no imports) so lib/booking.ts and lib/config.ts
// can both use them without a circular dependency.
// Robin's Nest Hotel & Restaurant — verified 2026-10-30 from Tripadvisor,
// Booking.com-fed listings (Casai/suitetrails) and Google Hotels.
// IMPORTANT: this hotel publishes NO phone number anywhere — Tripadvisor
// literally says "Contact accommodation for availability". phone and
// whatsapp are therefore empty ON PURPOSE: the site runs Booking.com as
// its booking channel and the direct channel activates the moment the
// owner shares a number (set phone/whatsapp here — nothing else changes).
export const hotel = {
  name: "Robin's Nest Hotel & Restaurant",
  suffix: "",
  tagline: "A nest above the twin lakes.",
  phoneDisplay: "No public number — yet",
  phone: "" as string,
  whatsapp: "" as string,
  email: "" as string, // not listed — confirm with the hotel
  address: "Begnas Bhoretar Road, Deorali, Lekhnath, Pokhara 33700, Nepal",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Robin's+Nest+Hotel+and+Restaurant+Deorali+Begnas+Pokhara",
  otaScore: "4.8",
  otaLabel: "Tripadvisor rating · 8 reviews",
  // Booking.com: paste the property's exact Booking.com URL here once
  // confirmed and every Booking.com button lands on the property page
  // (dates/guests attached, affiliate label applied). See lib/booking.ts.
  bookingComPropertyUrl: "" as string,
  checkIn: "12:00 PM",
  checkOut: "11:00 AM",
} as const;
