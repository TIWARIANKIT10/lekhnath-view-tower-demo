# The Begnas Lake Resort & Villas — Concept Redesign Website

**Hotel #8** of the Lekhnath Top-20 prospect project (see
`hotel-profile-business/Lekhnath-Top20-Prospects.md` in the business workspace).
Branch: `hotel/begnas-lake-resort` in TIWARIANKIT10/lekhnath-view-tower-demo.

⚠️ **REDESIGN pitch, like Rupakot.** This is the area's original
luxury lakeside resort with its own website (begnaslakeresort.com)
and published sales contacts. You are selling a modern, mobile-first
direct-booking experience that matches the property's reputation —
not "a website". Professional approach: email first, meeting second.

Design variant: **"Ayurveda Calm"** — deep moss + warm apricot,
left-aligned hero, leaf-mote Three.js particles, Framer Motion
reveals/parallax. Different look from Hotels #1–7. Fully responsive.

## About this resort (verified 2026-10-30)

- **The Begnas Lake Resort & Villas**, Sundari Danda, Begnas Lake,
  Lekhnath — a whole forested hillside at the water's edge: jungle on
  three sides, lake on the fourth, 11 km from Pokhara City. Guests
  arrive by **boat from Begnas Bazar boat station** (or a 10-minute
  forest walk down from Sundari Danda). GPS 28.16678, 84.11121.
- **Units (their own description): 28 Deluxe rooms, 4 waterfront
  cottages, 4 premiere rooms, 2 luxury suites = 38** (OTA feeds say
  40 accommodations). Gurung-style stone chalets in bamboo, teak,
  clay and slate; balconies/patios, minibar, safe, bathrobes.
- **Jimire** multi-cuisine restaurant with a big sun terrace, **Kodo
  Bar**, poolside **Saili-Maili** bar; **chemical-free pool**;
  **Himalayan Nature Spa** — classical Ayurveda by experts from
  Kerala, sauna, steam, hot tub, yoga; two conference halls (70 pax),
  events dining for 100+; free continental breakfast; smoke-free.
- **Published contacts (from their own site):** mobile
  **+977 985-6061080**, sales office **+977 985-602-0262**, email
  **info@begnaslakeresort.com**; front-desk landline +977 61-693304
  on OTA listings.
- **Ratings:** Kayak/momondo **9.0 "Wonderful" (83 verified)** —
  Comfort **9.9**, Location **9.9**, Staff **9.9**, Cleanliness 9.5…
  and **Value for money 7.9**, the soft spot (a guest review on the
  AU feed complains the pool was dirty "for the price"). Know this
  before the meeting: their reputation is stellar except perceived
  value — a direct channel with honest direct rates is exactly the
  answer to a value complaint.
- **Prices:** OTA from ~$135, averages ~$156–231 by feed/date — the
  most expensive keys in Lekhnath after Tiger Mountain. Check-in
  1:00 PM, check-out 11:00 AM.

## The pitch — A 9.9 LOCATION CARRIED BY A TIRED WEBSITE

1. **Their site is a brochure from another era.** The homepage is
   essentially one long welcome text (verified 2026-10-30: no booking
   engine, no room pages with prices in the fetch). Guests who fall
   in love with the boat-arrival story still have to leave and book
   through Kayak/Booking partners.
2. **The story deserves cinema, not paragraphs.** Arrive by boat.
   Ayurveda from Kerala. A chemical-free pool in a forest. This demo
   leads with all three in the first screen — theirs buries them in
   text.
3. **Value 7.9 is a direct-booking argument.** When guests feel the
   OTA price is steep, a visible "best rate direct" channel with
   WhatsApp answers ("message us — returning guests and long stays
   get our best rate") converts the complaint into loyalty.
4. **Wellness is a search category, not a paragraph.** "Ayurveda
   Pokhara" / "yoga retreat Begnas" travellers should land on real
   spa and retreat pages. This architecture is built to grow them.

## Booking.com integration (industry-standard structure)

Same provider architecture as Hotels #1–7 — `lib/booking.ts`:

- **direct** — WhatsApp deep link to +977 985-6061080 with
  room/dates/guests pre-filled (zero commission, "best rate").
- **bookingcom** — official partner deep links with checkin/checkout/
  adults/rooms/currency + affiliate `label`; set the exact property
  URL in `lib/config.ts` (`bookingComPropertyUrl`) and the affiliate
  AID (`NEXT_PUBLIC_BOOKING_COM_AID`) when available. Full Demand API
  plugs into the same provider interface once partner credentials
  are issued to the resort.

## How to approach (professional route)

1. **Email info@begnaslakeresort.com** (and the sales office mobile
   exists if email stalls): one paragraph — who you are, that you've
   built a working redesign concept for the resort, and a request
   for a 15-minute meeting at the resort. Offer to come by boat.
   (Seriously — arriving the way guests do is the best research and
   the best opening story.)
2. **In the meeting:** open with their own numbers — 9.9 for
   location, comfort and staff; then the single question: "What
   share of your guests book direct today?" Everything follows.
3. **Demo the booking task side by side** — their site vs this
   concept, Premium room, two phones, timed.
4. **Price: top tier.** Quote **NPR 49,999** for the build and lead
   the Care conversation (NPR 2,999/mo): seasonal rate pages, spa /
   retreat landing pages, review care. A 38-key resort at $150+
   average rates recovers the build fee in a handful of direct
   bookings — say that maths out loud.

**Objections:** "Our site works" → "It informs; it doesn't sell.
Your own guests rate value 7.9 — a direct channel is how you answer
that." "We get enough OTA bookings" → "At 15–18% each. The boat
story brings them to YOU — the site should be where they land."

## Before this goes live for real

- [ ] Confirm unit count (38 vs 40) and real direct rates
- [ ] Confirm 985-6061080 is the WhatsApp booking line (vs sales 985-602-0262)
- [ ] Confirm exact Booking.com property URL → `bookingComPropertyUrl`
- [ ] Replace demo photos with the resort's real photography (their
      boat arrival and pool shots are assets money can't fake)
- [ ] Ask about spa/retreat package pages as phase-two scope

## Run it

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production check
```

Stack: Next.js 14 · TypeScript · Tailwind · Framer Motion · Three.js ·
Lucide icons. Hotel details in `lib/hotel-data.ts`, content in
`data/content.ts`, booking channels in `lib/booking.ts`.
