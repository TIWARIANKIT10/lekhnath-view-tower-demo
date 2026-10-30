// ── Booking layer ────────────────────────────────────────────────────────
// The site never hard-codes a booking channel. Every "book" action goes
// through a BookingProvider, the same way a channel manager / booking
// engine integration is structured:
//
//   direct     → the hotel's own channel (WhatsApp if the hotel has a
//                WhatsApp number, otherwise a pre-filled call link).
//                Zero commission — always presented as "best rate".
//   bookingcom → Booking.com via the OFFICIAL partner route:
//                · With an affiliate id (aid) set in the environment, links
//                  carry aid + a per-page label, which is how commissions
//                  and analytics are attributed in the Affiliate Partner
//                  Programme.
//                · With the property's exact Booking.com URL configured,
//                  links land on the property page itself with the guest's
//                  checkin / checkout / adults / rooms attached.
//                · Otherwise links fall back to a Booking.com search for
//                  the property name with the same parameters attached.
// A full API integration (Booking.com Demand API / Connectivity API) needs
// partner credentials issued to the hotel or its channel manager; those
// plug in here as a third provider without touching any UI code.
import { hotel } from "@/lib/hotel-data";

export type BookingQuery = { checkIn?: string; checkOut?: string; guests?: string; rooms?: string };
export type BookingProvider = {
  id: "direct" | "bookingcom";
  name: string;
  blurb: string;
  link: (q: BookingQuery) => string;
};

export const directMessage = (room?: string, checkIn?: string, checkOut?: string, guests?: string) => {
  const parts = [`Namaste ${hotel.name}, I would like to book directly.`];
  if (room) parts.push(`Room: ${room}`);
  if (checkIn) parts.push(`Check-in: ${checkIn}`);
  if (checkOut) parts.push(`Check-out: ${checkOut}`);
  if (guests) parts.push(`Guests: ${guests}`);
  parts.push("Please share availability and your best direct rate.");
  return parts.join("\n");
};

export const directProvider: BookingProvider = {
  id: "direct",
  name: hotel.whatsapp ? "Book direct on WhatsApp" : "Book direct — call the hotel",
  blurb: "Best rate, no commission. Pay at the hotel.",
  link: (q) =>
    hotel.whatsapp
      ? `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(directMessage(undefined, q.checkIn, q.checkOut, q.guests))}`
      : `tel:${hotel.phone}`,
};

// Set NEXT_PUBLIC_BOOKING_COM_AID in .env.local once the hotel (or you, as
// their partner) is approved in the Booking.com Affiliate Partner Programme.
const AID = process.env.NEXT_PUBLIC_BOOKING_COM_AID ?? "";

export const bookingComProvider: BookingProvider = {
  id: "bookingcom",
  name: "Book on Booking.com",
  blurb: "Instant confirmation, free-cancellation options, Genius discounts.",
  link: (q) => {
    const p = new URLSearchParams();
    if (q.checkIn) p.set("checkin", q.checkIn);
    if (q.checkOut) p.set("checkout", q.checkOut);
    p.set("group_adults", q.guests && /^\d+$/.test(q.guests) ? q.guests : "2");
    p.set("group_children", "0");
    p.set("no_rooms", q.rooms ?? "1");
    p.set("selected_currency", "USD");
    p.set("lang", "en-us");
    p.set("label", "website-begnas-lake-front"); // affiliate click attribution
    if (AID) p.set("aid", AID);
    if (hotel.bookingComPropertyUrl) {
      const sep = hotel.bookingComPropertyUrl.includes("?") ? "&" : "?";
      return `${hotel.bookingComPropertyUrl}${sep}${p.toString()}`;
    }
    p.set("ss", "Begnas Lake Front Guest House, Lekhnath, Pokhara, Nepal");
    p.set("dest_type", "hotel");
    p.set("sb_price_type", "total");
    p.set("sb", "1"); // searchbox marker used by the affiliate programme
    return `https://www.booking.com/searchresults.html?${p.toString()}`;
  },
};

export const bookingProviders: BookingProvider[] = [directProvider, bookingComProvider];

// Backwards-compatible helpers used across components.
export const bookingComLink = (checkIn?: string, checkOut?: string, guests?: string) =>
  bookingComProvider.link({ checkIn, checkOut, guests });
export const bookMessage = (room?: string, checkIn?: string, checkOut?: string, guests?: string) =>
  directMessage(room, checkIn, checkOut, guests);
export const directLink = (checkIn?: string, checkOut?: string, guests?: string) =>
  directProvider.link({ checkIn, checkOut, guests });
