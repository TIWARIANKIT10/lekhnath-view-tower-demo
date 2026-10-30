# Lekhnath Hotel Websites — Portfolio (main branch)

This repo holds **every hotel website** built for Ankit's hotel
Google-Profile + webpage business in Lekhnath / Pokhara, Nepal.

## How this repo is organised

- **`main` (this branch) = ONLY the portfolio listing website** — the
  index page you are reading about, live at the project's Vercel
  production URL. It links to every hotel site.
- **Every hotel has its own branch** named `hotel/<slug>`, containing
  that hotel's complete Next.js website plus a README with the
  hotel's verified facts and a full owner-approach pitch.

## Branch map

| Branch | Hotel |
|---|---|
| `hotel/lekhnath-view-tower` | Hotel Lekhnath View Tower & Eco Farm (Demo #0) |
| `design-v2` | View Tower — Enhanced Edition (Framer Motion + Three.js) |
| `hotel/grand-hotel-begnas` | #1 Grand Hotel Begnas |
| `hotel/hotel-seven-lake-paradise` | #2 Hotel Seven Lake Paradise |
| `hotel/seven-lakes-resort` | #3 Seven Lakes Resort |
| `hotel/hotel-youngs-stupa` | #4 Hotel Young's Stupa |
| `hotel/begnas-lake-front-guest-house` | #5 Begnas Lake Front Guest House |
| `hotel/robins-nest` | #6 Robin's Nest Hotel & Restaurant |
| `hotel/rupakot-resort` | #7 Rupakot Resort |
| *(next)* | #8 The Begnas Lake Resort & Villas … through #20 Tiger Mountain Pokhara Lodge, strictly one by one |

## Adding a hotel (the standing workflow)

1. Research the hotel's real facts (phone, rooms, ratings, prices).
2. Build a distinct-design Next.js site (Framer Motion + Three.js,
   provider-based Booking.com integration + direct WhatsApp/call).
3. Typecheck, production build, local smoke test.
4. Push to branch `hotel/<slug>`; verify the commit on GitHub.
5. Add its card to `app/page.tsx` here on `main` and push `main`.

Stack for the listing site: Next.js 14 · TypeScript · plain CSS.
Each hotel branch: Next.js 14 · TypeScript · Tailwind · Framer
Motion · Three.js.
