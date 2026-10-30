# Rupakot Resort — Concept Redesign Website

**Hotel #7** of the Lekhnath Top-20 prospect project (see
`hotel-profile-business/Lekhnath-Top20-Prospects.md` in the business workspace).
Branch: `hotel/rupakot-resort` in TIWARIANKIT10/lekhnath-view-tower-demo.

⚠️ **This is a REDESIGN pitch.** Rupakot already has a website
(rupakotresort.com, WordPress) and a professional sales team. You are
not selling "a website" — you are selling a faster, mobile-first,
direct-booking machine that outperforms what they have. Read the
approach section twice; this meeting is business-formal, not a
walk-in chat.

Design variant: **"Hilltop Luxe"** — warm charcoal/espresso + copper,
left-aligned hero, gold-dust Three.js particles, Framer Motion
reveals/parallax. Different look from Hotels #1–6. Fully responsive.

## About this resort (verified 2026-10-30)

- **Rupakot Resort**, Maidan-6, Rupakot, Rupa, Pokhara 33701 — a ridge
  at **1,100 m**, 25 acres, opened 2014. Views over Rupa + Begnas
  lakes and Fishtail/Annapurna/Manaslu/Dhaulagiri. GPS 28.15516,
  84.13030. Lakeside 25 km (~40 min); scheduled shuttle runs.
- **4-star boutique.** Cottages of local hand-carved stone (25,000
  stones, per Trivago) in village style; every room AC/heated, private
  balcony, bathtub + rain shower, minibar, free Wi-Fi.
- **Rooms: their own site says 42**; their expo fact sheet lists **51
  deluxe rooms** across 5 categories (8 Resort View Standard, 8 Resort
  View Deluxe, 9 Lake View, 15 Mountain View, 11 Premium View). This
  site shows the 4 main Deluxe categories — confirm the real count.
- Infinity pool, full spa (steam, sauna, jacuzzi, massage), Panorama
  Restaurant (Nepali/Continental/Indian/Asian fusion; vegan, veg,
  halal, gluten-free), bar, organic farm, 24h room service,
  multipurpose hall (100 pax theatre), Royal Trek guided walks,
  Kot Bhairav temple hikes, indoor games.
- **Contacts (a real sales operation):** resort mobile
  **+977 980-2832457**; sales **+977-9802832458** (Mr. Aswin Shrestha,
  Manager — aswin.shrestha@ / sales@rupakotresort.com); reservations
  +977-9802832460 / reservation@; general **info@rupakotresort.com**;
  Kathmandu office +977-1-4004687, Rupakot landline +977-61-622660.
- **Ratings:** Google **4.5 (396 reviews)**; Trivago index **8.7**
  across **2,469 ratings**; HotelsCombined **8.3** (182 verified);
  Trip.com **9.4/10** (54). Highly rated everywhere — the product is
  proven; the funnel is the opportunity.
- **Prices:** OTA deals from ~$94, average ~$147/night. Their own
  Romance Packages run NPR 24,999–39,999 per couple — this property
  sells premium and knows it. Check-in 2:00 PM, check-out 11:00 AM.

## The pitch — THEIR SITE UNDERSELLS THEIR VIEW

Their current site is a decent WordPress brochure. The gaps a sales
manager will recognise instantly:

1. **Mobile.** Most of their guests find them on phones; the current
   site is desktop-first and slow. This demo loads the panorama in a
   heartbeat and books from a sticky bar. Load both side by side.
2. **No real direct-booking engine.** Their site pushes enquiries to
   email/phone while Booking.com takes the instant bookings — and the
   commission on ~$147/night rooms across 42–51 keys. This design
   gives direct the front seat (WhatsApp with dates pre-filled) and
   keeps Booking.com as the credible second door.
3. **Their own content already glitches.** Their Romance Package PDF
   renders headings duplicated ("Romance Romance Packages Packages")
   — small, but it tells a 4-star story badly. Premium guests notice.
4. **Packages deserve pages, not PDFs.** Romance, wellness, corporate
   retreats (100-pax hall!) — each is a landing page that could rank
   and convert. This architecture is built for exactly that.

## Booking.com integration (industry-standard structure)

Same provider architecture as Hotels #1–6 — `lib/booking.ts`:

- **direct** — WhatsApp deep link to the resort mobile with
  room/dates/guests pre-filled (zero commission, "best rate").
- **bookingcom** — official partner deep links with checkin/checkout/
  adults/rooms/currency + affiliate `label` attribution; set the
  exact property URL in `lib/config.ts` (`bookingComPropertyUrl`) and
  the affiliate AID (`NEXT_PUBLIC_BOOKING_COM_AID`) when available.
  For a property this size, the full Demand API conversation is
  realistic — the provider interface is where it plugs in once
  partner credentials are issued to the resort.

## How to approach (professional route — no cold walk-in pitch)

1. **Email first**, to sales@rupakotresort.com (Mr. Aswin Shrestha),
   short and concrete: "I build direct-booking websites for Pokhara
   resorts. I've prepared a working redesign concept for Rupakot —
   2-minute look, no obligation. May I send the link / present it at
   the resort this week?" Attach nothing heavy; offer a 15-minute
   meeting.
2. **In the meeting, lead with their numbers, not your design:**
   2,469 ratings at 8.7 prove the product; the question is how many
   of those guests paid 15–18% commission to arrive. Do the maths
   with THEIR occupancy, on paper, together.
3. **Demo on two phones side by side:** their site vs this concept,
   same task — "book the Premium View room for Saturday." Time both.
4. **Close on Care:** a resort this size needs ongoing work — package
   pages, seasonal rates, review replies, Google profile. That's the
   retainer conversation, and it's worth more than the build.

**Suggested price:** this is your **top-tier** prospect. Quote the
build at **NPR 49,999** (Profile + Webpage tier, premium property)
and put real weight on **Care at NPR 2,999/mo** — with room to scope
a custom quote if they want package pages + Demand API in phase two.
Do NOT discount to guest-house prices; it would read as amateur to a
sales manager.

**Objections:** "We have a website" → "You have a brochure. This is a
booking engine — judge it by the booking task, side by side."
"Our agency handles it" → "Then let this be the benchmark they have
to beat on mobile speed and direct bookings." "Send a proposal" →
that's a YES in disguise: send this link + a one-page numbers sheet
within 24 hours.

## Before this goes live for real

- [ ] Confirm room count (42 vs 51) and real direct rates per category
- [ ] Confirm which mobile is the WhatsApp booking line (2457/2458/2460)
- [ ] Confirm exact Booking.com property URL → `bookingComPropertyUrl`
- [ ] Replace demo photos with the resort's real photography (they
      have excellent assets — license them, don't scrape)
- [ ] Agree package-page scope (Romance / Wellness / Corporate)

## Run it

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production check
```

Stack: Next.js 14 · TypeScript · Tailwind · Framer Motion · Three.js ·
Lucide icons. Hotel details in `lib/hotel-data.ts`, content in
`data/content.ts`, booking channels in `lib/booking.ts`.
