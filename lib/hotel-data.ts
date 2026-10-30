// Hotel facts live here (no imports) so lib/booking.ts and lib/config.ts
// can both use them without a circular dependency.
// Hotel Seven Lake Paradise — verified 2026-10-30 from Expedia / KAYAK /
// momondo / LateRooms / Traveloka listings. Mobile +977 985-6031513 is the
// number momondo lists for the hotel; a second number (+977 980-2808225)
// appears on Google Travel — confirm which is the owner's WhatsApp.
export const hotel = {
  name: "Hotel Seven Lake Paradise",
  suffix: "",
  tagline: "Paradise, steps from Begnas Lake.",
  phoneDisplay: "+977 985-6031513",
  phone: "+9779856031513",
  whatsapp: "9779856031513" as string, // mobile number — confirm WhatsApp with hotel
  email: "" as string, // not listed — confirm with the hotel
  address: "Begnastaal-11, Lekhnath, Pokhara 33700, Nepal",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Hotel+Seven+Lake+Paradise+Begnas+Lekhnath",
  otaScore: "7.8/10",
  otaLabel: "Traveloka guest rating · 85 reviews",
  // Booking.com: paste the hotel's exact property URL here once confirmed
  // and every Booking.com button lands on the property page (dates/guests
  // attached, affiliate label applied). See lib/booking.ts.
  bookingComPropertyUrl: "" as string,
  checkIn: "12:00 PM",
  checkOut: "12:00 PM",
} as const;
