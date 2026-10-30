// Hotel facts live here (no imports) so lib/booking.ts and lib/config.ts
// can both use them without a circular dependency.
// Hotel Young's Stupa — verified 2026-10-30 from Places record, Expedia /
// Hotwire / Trip.com / HotelsCombined listings. ONLY a landline
// (+977 61-560182) is listed anywhere — no mobile, no WhatsApp, no email.
// Check-out time is not published on any listing (12:00 PM is a draft —
// confirm with the hotel).
export const hotel = {
  name: "Hotel Young's Stupa",
  suffix: "",
  tagline: "Quiet days. Rooftop skies.",
  phoneDisplay: "+977 61-560182",
  phone: "+97761560182",
  whatsapp: "" as string, // not listed — ask the owner for a mobile number
  email: "" as string, // not listed — confirm with the hotel
  address: "Lekhnath-09, Begnas Lake, Lekhnath, Pokhara 33700, Nepal",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Hotel+Young's+Stupa+Lekhnath+Pokhara",
  otaScore: "8.8/10",
  otaLabel: "HotelsCombined guest rating · 57 ratings",
  // Booking.com: paste the hotel's exact property URL here once confirmed
  // and every Booking.com button lands on the property page (dates/guests
  // attached, affiliate label applied). See lib/booking.ts.
  bookingComPropertyUrl: "" as string,
  checkIn: "11:00 AM",
  checkOut: "12:00 PM",
} as const;
