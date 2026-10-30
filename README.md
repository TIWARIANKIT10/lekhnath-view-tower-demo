# Hotel Seven Lake Paradise — Concept Demo Website

**Hotel #2** of the Lekhnath Top-20 prospect project (see
`hotel-profile-business/Lekhnath-Top20-Prospects.md` in the business workspace).
Branch: `hotel/hotel-seven-lake-paradise` in TIWARIANKIT10/lekhnath-view-tower-demo.

A premium, mobile-first Next.js 14 site built specifically for this hotel.
Design variant: **"Tropical Lakeside Modern"** — deep teal + coral sunset,
left-aligned hero, Three.js warm sunset motes, Framer Motion reveals and
parallax throughout. Different look and layout from Hotel #1 (Grand Begnas).
Fully responsive.

## About this hotel (verified 2026-10-30 from OTA listings)

- **Hotel Seven Lake Paradise**, Begnastaal-11, Lekhnath, Pokhara 33700 —
  steps from Begnas Lake (0.1 km), Rupa Lake 2.9 km, Pokhara Zoological
  Park 3.4 km, airport ~22 min drive.
- **Mobile: +977 985-6031513** (the number momondo/Kayak list for the hotel).
  A second number, +977 980-2808225, appears on Google Travel —
  **confirm which number is the owner's, and whether it's on WhatsApp.**
  No email is listed anywhere.
- **15 guestrooms, officially 3-star.** Every room has a private balcony or
  patio, premium bedding, AC, in-room safe. Real room types (Expedia):
  Classic Suite (king, patio, mountain view, sleeps 3) and Deluxe Double or
  Twin Room (queen or 2 twins, sleeps 3).
- Restaurant (international cuisine), bar/lounge, coffee shop/café, room
  service, garden + terrace + picnic area, concierge, childcare.
- **Free continental breakfast daily 7:00–10:30 AM.** Free valet parking,
  24-hour front desk, 24-hour business center, airport shuttle (paid).
- Check-in 12:00 PM / check-out 12:00 PM per Expedia (one aggregator says
  check-in from 10 AM — confirm the real policy).
- Prices are PREMIUM for Lekhnath: roughly **NPR 8,790–16,538/night**
  (~$65–125) on Google Travel.
- Sold via Booking.com (partner listings), Expedia, Traveloka, Trip.com,
  Kayak/momondo. **No website of its own.**

## The problem you are selling the fix for — REPUTATION

This is the pitch: the hotel charges premium prices but its public
reputation is scattered and mediocre:

- Expedia guest rating: **6.0/10**
- Kayak/momondo: **6.3/10 "Okay"** (9 verified ratings — couples rate it
  just **2.5/10**, solo travellers 7.5)
- Traveloka: **7.8/10** (85 reviews — its best score, buried on one site)

Three different scores on three different sites, no Google presence tying
them together, and no website telling its side of the story — balconies,
included breakfast, lake at the door. Guests paying $75–110 a night
research first; right now the research says "6.0".

**The fix you sell:** a proper Google Business Profile + a review routine
(happy guests asked at checkout, replies to every review) + this website
as the one place that shows the hotel at its best and takes direct
bookings (saving the 15–18% OTA commission on top).

## Booking.com integration (industry-standard structure)

Same provider architecture as Hotel #1 — `lib/booking.ts`:

- **direct** — WhatsApp deep link to the hotel's mobile with room/dates/
  guests pre-filled (zero commission, presented as best rate).
- **bookingcom** — official partner deep links carrying checkin/checkout/
  adults/rooms/currency + affiliate `label` attribution. Set the exact
  property URL in `lib/config.ts` (`bookingComPropertyUrl`) and the
  affiliate AID via `NEXT_PUBLIC_BOOKING_COM_AID` once enrolled in the
  Booking.com Affiliate Partner Programme. Full API integration needs
  partner credentials issued to the hotel; the provider interface is
  where it plugs in.

## How to approach the owner (read before visiting)

**First question (learn this one):** "Your rooms sell for ten to sixteen
thousand rupees a night — but when a guest Googles you before paying,
they find a 6.0 rating and no website. Has that cost you bookings, do
you think?" Let them answer. This hotel's owner already invests in the
property (3-star, business center, suites) — they care about image.

**Pitch (30 seconds):** "You don't have a quality problem on paper —
Traveloka guests rate you 7.8. You have a visibility problem: the worst
scores are the ones guests find first. I fix that three ways: a proper
Google profile with a review system, a website that shows the balconies
and the lake and takes bookings directly on WhatsApp, and Booking.com
kept as backup. I already built the website — have a look."

**Then show this site on your phone.** Point at the balcony/breakfast
story — "this is what a $100-a-night guest expects to see before booking."

**Questions that close:** Which number should guests WhatsApp — the
98560 or the 98028? Who replies to reviews today? How many couples book
direct vs through sites? (Couples are their angriest segment on Kayak —
a honeymoon/anniversary page angle is a real upsell.)

**Suggested price for this hotel:** lead with **Profile + Webpage
NPR 39,999** (premium property, premium pain), and push the **+ Care
plan (NPR 49,999 + 2,999/mo)** harder here than at Grand — review replies
and reputation care are exactly what this hotel needs monthly.

**Objections:** "Our rating is fine" → open Traveloka 7.8 vs Expedia 6.0
side by side: "Your guests disagree with each other because nobody is
managing it." "We get bookings anyway" → "At 18% commission, and couples
— your highest spenders — rate you 2.5. That's the leak."

## Before this goes live for real

- [ ] Confirm owner's number + WhatsApp (985-6031513 vs 980-2808225)
- [ ] Confirm exact Booking.com property URL → `bookingComPropertyUrl`
- [ ] Replace demo photos with real photos; confirm room rates + check-in time
- [ ] Confirm email; set up/claim the Google Business Profile
- [ ] Start the review routine (checkout ask + reply to every review)

## Run it

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production check
```

Stack: Next.js 14 · TypeScript · Tailwind · Framer Motion · Three.js ·
Lucide icons. Hotel details in `lib/hotel-data.ts`, content in
`data/content.ts`, booking channels in `lib/booking.ts`.
