// Hotel facts live here (no imports) so lib/booking.ts and lib/config.ts
// can both use them without a circular dependency.
// Seven Lakes Resort — verified 2026-10-30 from Places record, Expedia /
// reservations.com, Agoda (ex-OYO listing) and the resort's own published
// promo rates. Main mobile +977 980-2838701 (a second line 980-2838702 and
// 985-6032112 also appear). Google rating 4.7 (688 reviews) per a Google-
// reviews aggregator — confirm live on the visit.
export const hotel = {
  name: "Seven Lakes Resort",
  suffix: "",
  tagline: "Seven lakes. One hillside.",
  phoneDisplay: "+977 980-2838701",
  phone: "+9779802838701",
  whatsapp: "9779802838701" as string, // main mobile — confirm WhatsApp with hotel
  email: "" as string, // a resort email appears in their promo posts — copy it from their Facebook
  address: "29 Bhandardhik, Lekhnath, Pokhara 33700, Nepal",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Seven+Lakes+Resort+Bhandardhik+Lekhnath+Pokhara",
  otaScore: "4.7",
  otaLabel: "Google rating · 688 reviews",
  // Booking.com: paste the hotel's exact property URL here once confirmed
  // and every Booking.com button lands on the property page (dates/guests
  // attached, affiliate label applied). See lib/booking.ts.
  bookingComPropertyUrl: "" as string,
  checkIn: "12:00 PM",
  checkOut: "12:00 PM",
} as const;
