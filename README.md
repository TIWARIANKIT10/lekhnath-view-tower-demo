# Seven Lakes Resort — Concept Demo Website

**Hotel #3** of the Lekhnath Top-20 prospect project (see
`hotel-profile-business/Lekhnath-Top20-Prospects.md` in the business workspace).
Branch: `hotel/seven-lakes-resort` in TIWARIANKIT10/lekhnath-view-tower-demo.

A premium, mobile-first Next.js 14 site built specifically for this resort.
Design variant: **"Hillside Resort"** — deep forest green + amber, gold
Three.js hillside pollen, Framer Motion reveals/parallax. Different look
from Hotel #1 (navy Grand) and Hotel #2 (teal/coral Paradise).
Fully responsive.

## About this resort (verified 2026-10-30)

- **Seven Lakes Resort**, 29 Bhandardhik, Lekhnath, Pokhara 33700 — hillside
  above Lekhnath, 5 min from Talchowk, with Annapurna views and Begnas &
  Dipang lakes below (their own description).
- **Main mobile: +977 980-2838701** (Places record + their own posts);
  second line 980-2838702; 985-6032112 also appears on aggregators.
  An email appears in their Facebook promo posts — copy it from there
  (my sources redacted it). Instagram: @sevenlakesresorts, active.
- **Rooms: 19 per Expedia/reservations.com** (Trip.com says 28 — confirm
  the real count; it changes the pitch math).
- **Their OWN published rates** (from their promo posts — rare and useful):
  Resort Double Deluxe **NPR 5,000** · Mountain View Double Deluxe
  **NPR 5,500** · Pool View Triple/Family Deluxe **NPR 6,000**. They also
  run NPR 4,000 full-board packages (dinner + lunch + breakfast + pool)
  through Facebook posts.
- **Two outdoor pools** (8 AM–6 PM), restaurant + bar + coffee shop,
  signature chicken sekuwa & grilled-chicken thali, cocktails, free buffet
  breakfast 7:00–9:30 AM, conference center, garden/terrace, BBQ, free
  parking, airport shuttle (paid, ~$20), fitness center, kid-friendly.
- Check-in/check-out 12:00 PM. Front-desk hours CONFLICT across listings
  ("limited hours / 6 AM–10 PM" vs OYO's "24-hour") — confirm.
- **Google rating 4.7 with 688 reviews** (per a Google-reviews aggregator;
  Facebook page rating 4.1 from 357 on another). Guests genuinely like it.
- Ex-OYO: still listed as **"Capital O 653 Seven Lakes Resort"** on Agoda
  (7.7/10, 24 reviews) — ghost branding from a dead partnership.
- Existing website: **sevenlakesresort.com — plain http, dated.**

## The problem you are selling the fix for — A LEAKY FUNNEL

This resort is the opposite of Hotel #2: demand is NOT the problem.
They have 688 Google reviews, an active Instagram, and they sell packages
on Facebook constantly. The funnel leaks at the last step:

1. **The website is http (browser shows "Not secure") and years old** —
   the exact moment a guest from Facebook/Instagram decides to book is
   where trust dies.
2. **Facebook sells, but nothing closes.** Their package posts end in
   "call this number" — no booking page, no WhatsApp booking flow, no
   dates/prices page to land on. This site's booking bar is that landing
   page: pick dates → WhatsApp, pre-filled.
3. **Ghost OYO branding + conflicting info** (room counts, desk hours)
   across Agoda/OTA pages makes the resort look smaller and messier
   than it is. One official site + a claimed Google profile ends that.
4. OTA commission still applies to OTA bookings; every direct booking
   from their own social audience is commission they keep.

**Pitch line:** "You already do the hard part — hundreds of happy guests
and posts that sell packages. Your website is where those guests fall
off. I rebuilt it: secure, fast, your real rates, book on WhatsApp in
two taps."

## Booking.com integration (industry-standard structure)

Same provider architecture as Hotels #1–2 — `lib/booking.ts`:

- **direct** — WhatsApp deep link to 980-2838701 with room/dates/guests
  pre-filled (zero commission; built to receive their Facebook traffic).
- **bookingcom** — official partner deep links with checkin/checkout/
  adults/rooms/currency + affiliate `label` attribution; set the exact
  property URL in `lib/config.ts` (`bookingComPropertyUrl`) and the AID
  via `NEXT_PUBLIC_BOOKING_COM_AID` after joining the Booking.com
  Affiliate Partner Programme. Full API integration needs partner
  credentials issued to the property — the provider interface is where
  it plugs in.

## How to approach the owner (read before visiting)

**First question:** "Your Facebook posts sell a full-board package for
NPR 4,000 — when someone taps through to your website to book it, what
do they see?" (An http page their browser calls "Not secure".)

**Show, don't tell:** open their site and this demo side by side on your
phone. The contrast is the whole pitch — no slides needed.

**Questions that close:** Who runs the Instagram — you or staff? (That's
your Care-plan buyer.) How many package bookings come by phone vs walk-in?
Is the OYO listing still bringing guests, or is it just confusion? What is
the real room count today — 19 or 28?

**Suggested price:** Profile + Webpage **NPR 39,999** (active business,
real marketing spend already). Care plan (**+ NPR 49,999 first year /
2,999/mo**) is an easy second yes here: keep site, Google profile and
package posts in sync every season — they already feel that workload.

**Objections:** "Our website works" → "Open it on your phone — see the
'Not secure' warning your guests see?" "We get guests from Facebook" →
"Exactly — imagine those posts landing on a page that takes the booking
instead of a phone number." "OYO handles it" → "OYO Nepal wound down;
the listing is a ghost. Your name deserves its own front door."

## Before this goes live for real

- [ ] Confirm real room count (19 vs 28) and current NPR rates
- [ ] Confirm main WhatsApp number (980-2838701) + grab the resort email
- [ ] Confirm exact Booking.com property URL → `bookingComPropertyUrl`
- [ ] Replace demo photos with real photos (their IG has good material —
      ask permission to reuse)
- [ ] Confirm front-desk hours; retire/correct the OYO-era listings

## Run it

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production check
```

Stack: Next.js 14 · TypeScript · Tailwind · Framer Motion · Three.js ·
Lucide icons. Hotel details in `lib/hotel-data.ts`, content in
`data/content.ts`, booking channels in `lib/booking.ts`.
