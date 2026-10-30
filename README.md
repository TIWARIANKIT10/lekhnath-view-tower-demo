# Robin's Nest Hotel & Restaurant — Concept Demo Website

**Hotel #6** of the Lekhnath Top-20 prospect project (see
`hotel-profile-business/Lekhnath-Top20-Prospects.md` in the business workspace).
Branch: `hotel/robins-nest` in TIWARIANKIT10/lekhnath-view-tower-demo.

A premium, mobile-first Next.js 14 site built specifically for this
hotel. Design variant: **"Garden Nest"** — deep olive + dusty rose,
centered hero, petal-drift Three.js particles, Framer Motion
reveals/parallax. Different look from Hotels #1–5. Fully responsive.

## About this hotel (verified 2026-10-30)

- **Robin's Nest Hotel & Restaurant**, Begnas Bhoretar Road, Deorali,
  Lekhnath, Pokhara 33700 — up on the hill between Begnas Lake (4.1 km)
  and Rupa Lake; Pokhara Lakeside 19 km. GPS 28.1638, 84.10931.
- Run by **host Nima (Neema)** — named with love in guest reviews:
  "Host Nima takes care of you as her children. I stayed 10 lovely
  days!" Her home cooking (dal bhat, gundruk achaar) is the other
  thing guests write about.
- **Tripadvisor 4.8/5** (8 reviews) — "Best place in Begnas lake";
  #7 Best Value of 44 in Lekhnath; even listed #2 of Lekhnath's
  "luxury" hotels. Real quotes are used on the site with attribution —
  the first site in this series with findable written reviews.
- On Booking.com (from **$16/night**); self-described "4-star" on the
  booking feeds, free breakfast + free Wi-Fi on Google Hotels.
- Garden, terrace, restaurant, room service, family rooms, pet
  friendly, kid friendly. Rooms with desks and private showers — plus
  cheaper rooms with shared bathrooms (per guest reviews). Asian or
  vegetarian breakfast. Check-in from 12:00 PM, check-out 11:00 AM.
- **NO PHONE NUMBER EXISTS IN PUBLIC.** Not on Tripadvisor ("Contact
  accommodation for availability"), not on Booking.com feeds, not
  anywhere found. Same for email. Room count unpublished — it's a
  small hotel; confirm on the visit.

## How this site handles the missing number (read this)

This branch deliberately ships **without inventing contact details**:

- `lib/hotel-data.ts` has `phone` / `whatsapp` EMPTY on purpose.
- The booking bar runs **Booking.com-primary**: one honest CTA —
  "Check availability on Booking.com" — with a line explaining a
  direct number will live there the moment the hotel publishes one.
- Header shows "Book a room" instead of a phone button; the mobile
  sticky bar's first slot becomes **Directions**; the contact page
  leads with the Booking.com booking row instead of a call row.
- The second Nima gives you her mobile, set `phone` and `whatsapp` in
  `lib/hotel-data.ts` — every direct-booking button, WhatsApp link and
  call row switches on automatically. Nothing else changes.

## The problem you are selling the fix for — LOVED AND UNREACHABLE

Robin's Nest is the clearest pitch in the whole Top 20:

1. **Guests adore it and cannot reach it.** 4.8 on Tripadvisor, 10-day
   stays, "takes care of you as her children" — and there is literally
   no way to contact the hotel except booking through Booking.com
   (commission on every single guest) or physically showing up.
2. **Every long-stay guest is money left on the table.** People stay
   10 days here. One WhatsApp number turns those into direct,
   commission-free bookings — and yoga teachers, writers and slow
   travellers (her natural market) all book by message, not OTA.
3. **The garden is the brand, and it's invisible in search.** Flowers,
   birds, butterflies, twin-lake AND Annapurna views — no website, no
   Google photos strategy, nothing. "Robin's Nest garden Begnas"
   should be hers alone.
4. **Breakfast and home cooking are a product.** Asian/vegetarian
   breakfasts and famous dal bhat could sell the restaurant to
   non-guests on the Bhoretar road too.

## Booking.com integration (industry-standard structure)

Same provider architecture as Hotels #1–5 — `lib/booking.ts`:
bookingcom provider builds official partner deep links with
checkin/checkout/adults/rooms/currency + affiliate `label`; set the
exact property URL in `lib/config.ts` (`bookingComPropertyUrl`) and
the affiliate AID (`NEXT_PUBLIC_BOOKING_COM_AID`) when available. The
`direct` provider is wired and waiting for Nima's number. A full API
integration needs partner credentials issued to the property — the
provider interface is where it plugs in.

## How to approach Nima (read before visiting)

Go as a guest first if you can — tea in the garden makes this pitch
by itself. She's a host, not a hotelier; warmth beats polish.

**Opening line:** "Your guests write that you take care of them like
your children — but did you know there's no phone number for this
place anywhere on the internet? Someone who reads that review and
wants to book… can't."

**Pitch (30 seconds):** "I built you a website that tells your story —
the garden, the food, both lakes. Right now every booking costs you
Booking.com commission, because that's the only door. Give me your
mobile number and this site gets a second door: guests message you
directly, you keep everything. The number isn't on the site until
you say so."

**The closing question is the simplest in the series:** "Can I put
your number on it?" Everything — WhatsApp button, call button, direct
prices — turns on with that one yes.

**Suggested price:** Profile + Webpage **NPR 29,999**. Small property,
big heart; a fast yes makes her your loudest reference on the
Bhoretar road (five more prospects sit within a kilometre).

**Objections:** "Booking.com handles it" → "And takes its cut of
every guest who already loves you. Your regulars should book with
YOU." "I don't use WhatsApp much" → "Then we start with just your
number for calls — the site is ready either way."

## Before this goes live for real

- [ ] **Get Nima's mobile number (the whole game)** → set `phone` +
      `whatsapp` in `lib/hotel-data.ts`; ask about an email too
- [ ] Confirm room count, room kinds and real direct rates
- [ ] Confirm exact Booking.com property URL → `bookingComPropertyUrl`
- [ ] Replace demo photos with real garden photos (flowers! butterflies!)
- [ ] Confirm she's happy being named on the site ("Hosted by Nima")

## Run it

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production check
```

Stack: Next.js 14 · TypeScript · Tailwind · Framer Motion · Three.js ·
Lucide icons. Hotel details in `lib/hotel-data.ts`, content in
`data/content.ts`, booking channels in `lib/booking.ts`.
