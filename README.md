# Raniban Retreat — one-page concept website

Branch: `hotel/raniban-retreat` · Built 2026-11-02 at the owner's request after
reviewing how Rupakot Resort's website (rupakotresort.com) works.

## The hotel (facts checked 2026-11-02)

- **Raniban Retreat**, Raniban Forest ("Queen's Forest"), World Peace Pagoda
  hill, Pumdi Bhumdi, Pokhara — above Phewa Lake, beside the World Peace
  Pagoda. Opened 2012, renovated 2024, solar-powered eco boutique retreat.
- 14 rooms per its own site (12 listed on Trip.com): Sunrise View Premium
  Rooms (6, newest), Sunrise View Jacuzzi Room, Lake View Cottages and
  Mountain View Cottages modelled on traditional Gurung cottages.
- Infinity pool, spa & sauna, restaurant + bar, breakfast included, airport
  shuttle, 24-hour front desk. Ratings: Trip.com 9.5/10, Hotels.com 9.2/10
  "Wonderful"; OTA prices from ~US$99/night.
- Contacts: reservations@raniban.com / info@raniban.com; primary phone
  +977 980-2855466 (Trip.com). **Number conflict to resolve with the hotel:**
  +977 984-1218466 is also published as the front-desk number, and
  +977 976-7470541 appears on Trip.com. Confirm which number is the
  WhatsApp number before launch.
- Access: ~35 min from Pokhara International Airport; taxi from Lakeside
  ≈ NPR 1,500; or ~522 stone steps up the forest trail from the lakeside.
- Sales contact: Saksham (sales team) — replied to the pitch email on
  2026-11-02 and invited a WhatsApp conversation. Owner's rules for that
  conversation: no prices, no demo link unless asked.

## What was borrowed from Rupakot's approach (inspiration, not a copy)

- Full-screen photo hero + serif-display/forest-green/cream/gold language,
  spaced-capital labels, pill CTAs, full-screen overlay menu.
- Their booking *model*: an engine flow — dates & guests → live rooms with
  taxes-included prices → paid extras → guest details with a summary panel
  → pay-at-the-property or card guarantee.
- Testimonial carousel + an OTA ratings strip; rooms named by view.

## What is ours / modernised

- **Booking bar on the page itself** (Rupakot hides booking behind a
  separate page) and a mobile sticky Call / WhatsApp / Book bar.
- The booking flow ends in a **WhatsApp confirmation** to the retreat with
  the full summary — no foreign engine iframe, no prepayment; WhatsApp is
  also a general contact channel (Rupakot has none).
- **Prices on the room cards** (Rupakot shows none outside its engine).
- Sections Rupakot lacks on-page: dining, a seasonal package, FAQ,
  map + how-to-reach.
- **Our own animation throughout**: hero slideshow with a slow Ken Burns
  zoom, drifting cloud edge, scroll-reveal sections, animated counters, a
  drifting giant outline word, parallax dining band, testimonial
  auto-carousel, marquee strip. (Rupakot's site is nearly static.)
- Hotel JSON-LD schema for Google.

## Placeholders to confirm with the hotel before any commercial use

- Nightly rates (US$99–149) and extras prices are demo values set inside
  the published OTA range.
- Photography is stand-in location photography of Pokhara / Phewa Lake /
  the Peace Pagoda, not the retreat's own photos.
- The "Sunrise & Unwind" package, 48-hour free-cancellation policy, and the
  WhatsApp number above all need the retreat's confirmation.

## Tech

Next.js 14 + TypeScript + Tailwind, fully static one-pager, mobile-first.
`npm run build` produces the site; the same build is exported to the
listing site's `/hotels/raniban-retreat/` path for preview.
