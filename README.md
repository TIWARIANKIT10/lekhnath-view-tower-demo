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
