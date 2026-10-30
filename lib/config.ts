// ── Single source of truth ──────────────────────────────────────────────
// Hotel facts live in lib/hotel-data.ts; booking channels in lib/booking.ts.
import { hotel } from "@/lib/hotel-data";
export { hotel };

export const waLink = (message: string) =>
  hotel.whatsapp ? `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(message)}` : `tel:${hotel.phone}`;

export { bookingComLink, bookMessage, directLink, directProvider, bookingComProvider, bookingProviders } from "@/lib/booking";
