# Begnas Lake Front Guest House — Concept Demo Website

**Hotel #5** of the Lekhnath Top-20 prospect project (see
`hotel-profile-business/Lekhnath-Top20-Prospects.md` in the business workspace).
Branch: `hotel/begnas-lake-front-guest-house` in TIWARIANKIT10/lekhnath-view-tower-demo.

A premium, mobile-first Next.js 14 site built specifically for this
guest house. Design variant: **"Lakefront Cottage"** — deep lake-slate +
terracotta, warm water-sparkle Three.js particles, Framer Motion
reveals/parallax. Different look from Hotels #1–4. Fully responsive.

## About this guest house (verified 2026-10-30)

- **Begnas Lake Front Guest House**, 31 Majhikuna, Begnas Lake, Lekhnath,
  Pokhara 33700 — literally on the shore: Begnas Lake steps away, Rupa
  Lake 4 min drive, Pokhara Zoological Park 2.8 km, airport 17 km.
- **Family-run** (per its Guest Hub profile). **Mobile: +977 985-6033003**
  — the same number on every listing and its Facebook record.
- **Its "website" is its Facebook page** (facebook.com/lakefrontbegnas —
  that's what the place record lists as the website). No real website.
- **Rooms: 12** per the property's own description and Cvent (Traveloka
  says 11, one OTA feed says 3 — confirm the real count on the visit).
  Lake-view rooms, some with kitchenettes; shared/communal kitchen too.
- Restaurant, bar, room service, garden, sun terrace, picnic area, BBQ,
  outdoor fireplace, **yoga classes + yoga/meditation hall**, free fitness
  studio, massages, boating/fishing/hiking, bike & car hire, laundry,
  childcare/babysitting, 24-hour front desk, elevator, free parking,
  pets stay free. Breakfast: à la carte + continental with local
  specialities, pancakes and fruit.
- Check-in 12:00 PM (arrive by 6 PM per one listing), check-out 10:00 AM
  per Kayak/momondo (one feed says 12:00 — confirm).
- Prices on OTAs: roughly **$8–30/night**. Ratings: 8.3 "Very good"
  (25 reviews) on a partner-listing roundup; Kayak shows 6.6 from only
  4 verified ratings — thin and scattered, like everywhere here.
- Their own words (gold for the pitch): "a hidden gem… nestled in the
  forests… on the sloping shores of Begnas Tal… breathtaking sunset
  from the roof top every evening."

## The problem you are selling the fix for — A SHORELINE WITH NO SHOPFRONT

This is the best location of the first five prospects — actually ON the
lake, not near it — and the weakest sales setup:

1. **Facebook is doing the whole job.** Their website link goes to a
   Facebook page. Facebook can't take a booking, can't show rooms with
   dates and prices, and buries them under everyone else's posts.
2. **Every booking leaks commission** to Kayak/Booking.com partners for
   a property guests would happily book direct — it's family-run,
   lakeside, and bookable in one WhatsApp message.
3. **The yoga/retreat angle is invisible.** A yoga hall + meditation +
   lakefront calm is a premium product (retreat groups pay multiples of
   $22/night) that no listing sells properly. This site leads with it.
4. **Sunset rooftop, family kitchen, lake at the door** — their own
   description is better than most hotels' marketing, and almost
   nobody ever reads it where it sits.

## Booking.com integration (industry-standard structure)

Same provider architecture as Hotels #1–4 — `lib/booking.ts`:

- **direct** — WhatsApp deep link to +977 985-6033003 with room/dates/
  guests pre-filled (zero commission, presented as best rate).
- **bookingcom** — official partner deep links with checkin/checkout/
  adults/rooms/currency + affiliate `label` attribution; set the exact
  property URL in `lib/config.ts` (`bookingComPropertyUrl`) and the
  affiliate AID (`NEXT_PUBLIC_BOOKING_COM_AID`) when available. A full
  API integration needs partner credentials issued to the property —
  the provider interface is where it plugs in.

## How to approach the family (read before visiting)

This is a family home-style business — go warmer and slower than the
hotel pitches. Late morning, ask to sit, admire the lake view first
(genuinely — it's the product).

**First question:** "Your guest house is right on the water — the best
spot on this side of the lake. When guests find you, is it mostly
through Facebook, or the booking sites?" (Both answers lead to the
pitch: neither one is a booking page of their own.)

**Pitch (30 seconds):** "You already wrote the best advertisement —
'hidden gem, sunset from the rooftop'. But it's sitting on sites that
charge you commission, and your website link opens Facebook. I made
you a real website: your rooms, your lake, yoga and sunsets up front,
and guests book straight to your WhatsApp — no commission. Have a look."

**Then show this site on your phone, standing where the photo matches
the real view.** That moment — same lake, same light, on screen and in
front of you — closes family-run places.

**Questions that close:** Is 985-6033003 the best WhatsApp for
bookings? How many rooms are there really — 11 or 12? Do yoga groups
find you, or would you like more of them? Who runs the Facebook page?

**Suggested price:** Profile + Webpage **NPR 29,999** (family
guest house pricing — keep it reachable). The yoga-retreat angle is
the Care-plan hook later ("one retreat group a season pays the year").

**Objections:** "Facebook is enough" → "Facebook shows posts; it
can't show a guest your lake-view room for their dates and take the
booking. This does, in one tap." "We're small" → "You're on the best
shore in Majhikuna. Small is the luxury — the site sells exactly that."

## Before this goes live for real

- [ ] Confirm room count (12?) and real direct rates; confirm check-out
- [ ] Confirm 985-6033003 is on WhatsApp; get an email if they have one
- [ ] Confirm exact Booking.com property URL → `bookingComPropertyUrl`
- [ ] Replace demo photos with real shore/rooftop photos (sunset!)
- [ ] Ask permission to reuse their Facebook photos and their own words

## Run it

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production check
```

Stack: Next.js 14 · TypeScript · Tailwind · Framer Motion · Three.js ·
Lucide icons. Hotel details in `lib/hotel-data.ts`, content in
`data/content.ts`, booking channels in `lib/booking.ts`.
