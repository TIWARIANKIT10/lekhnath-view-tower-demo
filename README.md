# Hotel Young's Stupa — Concept Demo Website

**Hotel #4** of the Lekhnath Top-20 prospect project (see
`hotel-profile-business/Lekhnath-Top20-Prospects.md` in the business workspace).
Branch: `hotel/hotel-youngs-stupa` in TIWARIANKIT10/lekhnath-view-tower-demo.

A premium, mobile-first Next.js 14 site built specifically for this hotel.
Design variant: **"Stupa Serene"** — deep plum + saffron, centered hero,
soft violet Three.js evening dust, Framer Motion reveals/parallax.
Different look from Hotels #1–3. Fully responsive.

## About this hotel (verified 2026-10-30)

- **Hotel Young's Stupa**, Lekhnath-09, Begnas Lake, Pokhara 33700 —
  semi-rural calm; Begnas Lake 1 km, Rupa Lake 2.9 km, Pokhara Zoological
  Park 3.7 km, Seti River 7.4 km.
- **Only phone listed anywhere: landline +977 61-560182.** No mobile, no
  WhatsApp, no email on any listing. Facebook page exists.
- **12 guestrooms.** Real room types (Expedia/EaseMyTrip): Deluxe King
  Room (lake view), Double Room Lake View, Deluxe Double Room, plus a
  budget shared-bathroom room.
- Rooftop terrace, garden, restaurant, room service (limited hours),
  banquet hall, business center, laundry, tour/ticket help, bikes to
  rent, express check-in/out, free self-parking, free Wi-Fi (listings
  boast 250+ Mbps — genuinely fast).
- Cooked-to-order breakfast 7:00–9:30 AM for a small fee (~$1.50/person
  per Hotwire). Front desk 8 AM–9 PM; check-in from 11:00 AM.
  Check-out time is not published anywhere — confirm.
- **Guests love it:** Tripadvisor 4.7 (19 reviews), Trip.com 9.7/10,
  HotelsCombined 8.8/10 (57 ratings). Birdwatchers use it as a base;
  reviews praise clean rooms, warm showers, quiet, staff.
- **Prices are bargain-bin on OTAs:** seen from ~$7/night (Hotwire) and
  ₹533 (Trip.com) — "one of the cheapest hotels in Nepal" per
  HotelsCombined. It is better than its price tag.
- Website exists: **youngsstupa.com — plain http, dated.**

## The problem you are selling the fix for — UNDERPRICED & UNREACHABLE

1. **It sells a $15 experience for $7.** Rooftop panoramas, garden,
   fast Wi-Fi, cooked-to-order breakfast, 9.7/10 guest love — and the
   OTA pages lead with the lowest price in Nepal. A real website lets
   them sell the experience (birding base, quiet retreat, banquet
   events) instead of racing to the bottom.
2. **Guests cannot message them.** In 2026 travellers WhatsApp hotels.
   This hotel has only a landline on its listings. One mobile number +
   this site's direct channel changes that overnight. (The demo runs
   book-direct by call until they give you a mobile — then WhatsApp
   switches on in one line of config.)
3. **The http website undersells them** to exactly the foreign guests
   (birders, trekkers) who pay best and research most.
4. **The banquet hall is invisible online.** Local events/weddings are
   high-value, zero-commission revenue a webpage can actually sell.

## Booking.com integration (industry-standard structure)

Same provider architecture as Hotels #1–3 — `lib/booking.ts`:

- **direct** — call-based today (landline); set `hotel.whatsapp` in
  `lib/hotel-data.ts` the moment the owner shares a mobile and every
  direct button becomes a pre-filled WhatsApp booking automatically.
- **bookingcom** — official partner deep links with checkin/checkout/
  adults/rooms/currency + affiliate `label` attribution; set the exact
  property URL (`bookingComPropertyUrl`) and affiliate AID
  (`NEXT_PUBLIC_BOOKING_COM_AID`) when available. Full API integration
  needs partner credentials issued to the hotel — the provider layer
  is where it plugs in.

## How to approach the owner (read before visiting)

**First question:** "Trip.com guests rate you 9.7 out of 10 — but your
rooms sell for seven dollars and your website still says 'not secure'.
Do you feel you're getting what this place is worth?"

**Pitch (30 seconds):** "You don't need more guests at any price — you
need the right guests at the right price, booking direct. This site
shows the rooftop, the garden and the birds, takes bookings on your
phone, and gives your banquet hall a page to sell itself. Your Google
profile done properly brings the birdwatchers and trekkers who stay a
week, not a night."

**Then show this site on your phone** — the rooftop-terrace story is
the emotional core; budget hotels rarely look this calm online.

**Questions that close:** Do you have a mobile number guests can
WhatsApp? (Get it — it upgrades everything.) How do birding groups
find you today? How many events does the banquet hall host a year —
and where do people see it? Who updates youngsstupa.com?

**Suggested price:** Profile + Webpage **NPR 29,999** — this is a
budget property; don't lead with the top package. The win here is a
fast yes, a portfolio piece in the "beloved local hotel" category,
and referral value in Lekhnath-09. Care plan only if they bite on
the banquet/events angle.

**Objections:** "We're a small budget hotel" → "That's why the site
pays for itself in a handful of direct bookings — and why your price
can rise once guests see the rooftop before the rate." "Website
already exists" → "Open it beside this demo on your phone. Which
hotel would you book?"

## Before this goes live for real

- [ ] Get the owner's mobile/WhatsApp → set `hotel.whatsapp`
- [ ] Confirm check-out time, real direct rates, Booking.com URL
- [ ] Replace demo photos with real rooftop/garden photos
- [ ] Confirm email; claim/complete the Google Business Profile
- [ ] Add a banquet/events enquiry section if they want events pushed

## Run it

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production check
```

Stack: Next.js 14 · TypeScript · Tailwind · Framer Motion · Three.js ·
Lucide icons. Hotel details in `lib/hotel-data.ts`, content in
`data/content.ts`, booking channels in `lib/booking.ts`.
