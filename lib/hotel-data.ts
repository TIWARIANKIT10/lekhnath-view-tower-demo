// Hotel facts live here (no imports) so lib/booking.ts and lib/config.ts
// can both use them without a circular dependency.
export const hotel = {
  name: "Grand Hotel Begnas",
  suffix: "",
  tagline: "Steps from Begnas Lake.",
  phoneDisplay: "+977 61-561129",
  phone: "+97761561129",
  whatsapp: "" as string, // not listed — confirm with the hotel
  email: "" as string, // not listed — confirm with the hotel
  address: "Begnas Sadak, Lekhnath, Pokhara 33700, Nepal",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Grand+Hotel+Begnas+Lekhnath+Pokhara",
  otaScore: "10/10",
  otaLabel: "Exceptional — Expedia guest rating",
  // Booking.com: paste the hotel's exact property URL here once confirmed
  // and every Booking.com button lands on the property page (dates/guests
  // attached, affiliate label applied). See lib/booking.ts.
  bookingComPropertyUrl: "" as string,
  checkIn: "12:00 PM",
  checkOut: "12:00 PM",
} as const;
