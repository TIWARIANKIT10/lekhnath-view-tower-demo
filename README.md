# Hotel Lekhnath View Tower & Eco Farm — Concept Demo

A modern, mobile-first Next.js demo built to pitch this hotel on a
Google Business Profile + direct-booking webpage package.

## Run it
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## What's inside
- **Next.js 14 (App Router) + TypeScript + Tailwind CSS**
- Routes: `/` home, `/rooms`, `/gallery`, `/book`, `/contact`
- Booking = WhatsApp deep link with room/dates/guests pre-filled
  (no payment system — hotels this size confirm on WhatsApp)
- Sticky mobile bar: Call · WhatsApp · Book — the 3 actions that matter
- Hotel JSON-LD schema, SEO metadata, responsive images via next/image

## Before going live (confirm with the hotel)
- [ ] Real room names, photos and rates (current rates are demo, from OTA listings)
- [ ] Official email address (config placeholder)
- [ ] Rupa Lake walking distance / exact distances
- [ ] Replace placeholder gallery photos with real hotel photos
- [ ] Point the Google Business Profile website link here

Edit everything about the hotel in **one file**: `lib/config.ts`.
Content (rooms, reviews, gallery) lives in `data/content.ts`.

Real details used: phone +977 985-6052139 and 4.8★ Google rating
from public Google listings — the hotel's old site showed a
placeholder number (+977-9800000000), which this demo fixes.

## v2 (branch: design-v2)
- **Framer Motion** throughout: staggered hero headline, scroll parallax,
  whileInView section reveals with stagger, room-card lift, animated sticky bar.
- **Three.js** hero atmosphere (`components/ThreeHero.tsx`): drifting golden
  firefly/dust particles with mouse parallax, DPR-capped, reduced-motion safe.
- **Booking.com integration**: the booking bar and every room card carry a
  "Book on Booking.com" button that deep-links to Booking.com with the
  guest's exact check-in / check-out / guests attached (standard
  `checkin` / `checkout` / `group_adults` / `no_rooms` parameters).
  Paste the hotel's exact property URL into `bookingComPropertyUrl` in
  `lib/config.ts` once confirmed, and the same buttons go straight to the
  property page instead of Booking.com search results for the property.
- WhatsApp direct booking (best rate, no commission) remains the primary CTA.
