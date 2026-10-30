// Booking channels for Grand Hotel Begnas.
//
// 1) Direct — the hotel publishes a landline only (no WhatsApp, no email
//    listed anywhere), so booking direct means a phone call. Zero
//    commission, pay at the hotel.
// 2) Booking.com — official partner deep links: dates, guests and rooms
//    attached, affiliate label for attribution, the hotel's aid applied
//    when NEXT_PUBLIC_BOOKING_COM_AID is set, and the exact property
//    page used as soon as bookingComPropertyUrl is filled in
//    lib/hotel-data.ts. Until then the link opens Booking.com search
//    results for the property name.

import { hotel } from "@/lib/hotel-data";

export type StayQuery = {
  checkIn: string; // yyyy-mm-dd
  checkOut: string; // yyyy-mm-dd
  adults: number;
  children: number;
  rooms: number;
};

export const defaultStay = (): StayQuery => {
  const f = (d: Date) => d.toISOString().slice(0, 10);
  return {
    checkIn: f(new Date(Date.now() + 7 * 864e5)),
    checkOut: f(new Date(Date.now() + 9 * 864e5)),
    adults: 2,
    children: 0,
    rooms: 1,
  };
};

export const callUrl = `tel:${hotel.phone}`;

export function bookingComUrl(q: StayQuery): string {
  const p = new URLSearchParams({
    checkin: q.checkIn,
    checkout: q.checkOut,
    group_adults: String(q.adults),
    group_children: String(q.children),
    no_rooms: String(q.rooms),
    selected_currency: "USD",
    lang: "en-gb",
    label: "website-grand-hotel-begnas",
  });
  const aid = process.env.NEXT_PUBLIC_BOOKING_COM_AID;
  if (aid) p.set("aid", aid);
  if (hotel.bookingComPropertyUrl) {
    const sep = hotel.bookingComPropertyUrl.includes("?") ? "&" : "?";
    return `${hotel.bookingComPropertyUrl}${sep}${p.toString()}`;
  }
  p.set("ss", "Grand Hotel Begnas, Lekhnath, Pokhara");
  p.set("ssne", "Lekhnath");
  p.set("ssne_untouched", "Lekhnath");
  return `https://www.booking.com/searchresults.html?${p.toString()}`;
}
