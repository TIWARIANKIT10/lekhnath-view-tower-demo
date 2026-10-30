# Grand Hotel Begnas — Concept Demo Website

**Hotel #1** of the Lekhnath Top-20 prospect project (see
`hotel-profile-business/Lekhnath-Top20-Prospects.md` in the business workspace).
Branch: `hotel/grand-hotel-begnas` in TIWARIANKIT10/lekhnath-view-tower-demo.

A premium, mobile-first Next.js 14 site built specifically for this hotel.
Design: **"Grand Editorial"** — a bespoke build (2026-10-30 redesign,
replacing the first version, which shared a template with the other hotel
sites): ivory paper, ink navy and brass; Playfair Display + Manrope;
a centred GRAND masthead with split navigation, a still crossfade hero,
numbered editorial sections (01 Stay · 02 At the Grand · 03 The Guest Book ·
04 Reservations), rooms as alternating editorial spreads, a colophon
footer. No Three.js, no shared components with any other hotel site.
Fully responsive; booking = call-direct (landline only) + Booking.com
partner deep links from lib/booking.ts.

## About this hotel (verified 2026-10-30 from OTA/Places listings)

- **Grand Hotel Begnas**, Begnas Sadak, Lekhnath, Pokhara 33700 — steps from
  Begnas Lake (0.2 km), Rupa Lake 3.3 km, Pokhara Intl. Airport 13.6 km.
- **Phone (listed everywhere): +977 61-561129** (landline). No WhatsApp number
  or email appears on any listing — **ask for the owner's mobile first thing.**
- **13 guestrooms.** Restaurant, bar/lounge, meeting room, elevator, free
  self-parking, BBQ facilities, pets stay free, daily housekeeping.
- Check-in/check-out: 12:00 PM. OTA "no front desk" note — arrivals are by
  arrangement, worth confirming.
- Ratings: **Expedia 10/10 "Exceptional"** (only 2 reviews), Klook 5.0/5
  (cleanliness 5.0, service 5.0). Guests love it — almost nobody can see that,
  because the review base is tiny and scattered across OTAs.
- Sold on Booking.com (via partner listings), Expedia, Klook, Kayak, momondo,
  Trip.com — at roughly **$13–19/night**.

## The problem you are selling the fix for

1. **No website of their own — anywhere.** Every single booking pays an OTA
   15–18% commission. On 13 rooms that is real money every month.
2. **Invisible reputation.** A 10/10 hotel with 2 visible reviews looks the
   same as an unrated one. A proper Google Business Profile + review flow
   turns happy guests into public proof.
3. **No direct channel.** The only phone shown is a landline buried in OTA
   pages. This site makes "book direct — best rate" one tap, and keeps
   Booking.com as the instant-confirmation option.

## Booking.com integration (industry-standard structure)

`lib/booking.ts` implements a provider layer, like a real booking engine:

- **direct** — zero-commission channel (call link now; switches to WhatsApp
  automatically once `hotel.whatsapp` is set in `lib/config.ts`).
- **bookingcom** — official partner deep links carrying checkin/checkout/
  adults/rooms/currency + an affiliate `label` for attribution. Set the
  hotel's exact property URL in `lib/config.ts` (`bookingComPropertyUrl`)
  and links land on the property page; set `NEXT_PUBLIC_BOOKING_COM_AID`
  in `.env.local` after joining the Booking.com Affiliate Partner Programme
  and clicks earn attribution. A full Demand/Connectivity API integration
  needs partner credentials issued to the hotel — the provider interface is
  where it plugs in, no UI changes needed.

## How to approach the owner (read before visiting)

**Best moment:** weekday late morning, after breakfast rush, before lunch.
Ask for the owner/manager by role, not by name (name not public yet).

**First question (learn this one):** "Sir/Madam, guests book your hotel on
Booking.com and Expedia — when they search your name on Google, whose
website do they find?" (Answer: nobody's. Let that land.)

**Pitch (30 seconds):** "Your hotel is rated 10 out of 10 on Expedia, but
with only two reviews and no website, guests can't see that — the booking
sites keep 15–18% of every booking and own your guests. I built you a
website already — your rooms, your lake, book-direct in one tap, and
Booking.com still there for guests who prefer it. It costs less than the
commission on a handful of bookings."

**Then show this site on your phone.** The demo banner says rates/photos
are draft — say it plainly: "Your real photos and prices go in before
launch, at no extra cost."

**Questions that close:** Do you have a WhatsApp number guests can book on?
Who takes your photos? How many direct calls do you get in a month vs OTA
bookings? Would you like your Google profile to show the 10/10 rating?

**Suggested price for this hotel:** Profile + Webpage package
**NPR 29,999–39,999** (13-room independent, clear OTA pain). Offer the
+ Care plan (NPR 49,999 + 2,999/mo) only after they react well to the demo —
care = Google profile posts, review replies, photo updates.

**Objections:** "Booking.com is enough" → "It rents you guests at 18%.
This site makes some of them yours — Booking.com stays as backup."
"We're small" → "13 rooms × even 2 direct bookings a month pays this back."
"Later" → "I'll leave the link; the demo stays up one week."

## Before this goes live for real

- [ ] Confirm owner's mobile/WhatsApp → set `hotel.whatsapp` in lib/config.ts
- [ ] Confirm exact Booking.com property URL → set `bookingComPropertyUrl`
- [ ] Replace demo photos with the hotel's real photos; confirm room rates
- [ ] Confirm email, check-in policy, and whether "no front desk" is accurate
- [ ] Join Booking.com Affiliate Partner Programme → set the AID env var

## Run it

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production check
```

Stack: Next.js 14 · TypeScript · Tailwind · Framer Motion · Three.js ·
Lucide icons. All hotel details live in `lib/config.ts`; content in
`data/content.ts`; booking channels in `lib/booking.ts`.
