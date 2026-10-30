import Link from "next/link";
import { hotel } from "@/lib/config";

// Footer — a centred colophon: monogram, address, one line of small print.
export default function Footer() {
  return (
    <footer className="bg-ink-deep pb-24 pt-16 text-center text-white md:pb-14">
      <div className="wrap">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-brass font-display text-2xl text-brass-light">
          G
        </div>
        <p className="mt-5 font-display text-[26px] font-medium tracking-[0.06em]">GRAND HOTEL BEGNAS</p>
        <p className="mt-2 text-sm text-white/60">{hotel.address}</p>
        <a href={`tel:${hotel.phone}`} className="mt-1 block text-sm font-semibold text-white/85">
          {hotel.phoneDisplay}
        </a>
        <nav className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/70">
          <Link href="/rooms" className="hover:text-white">Rooms</Link>
          <Link href="/gallery" className="hover:text-white">Gallery</Link>
          <Link href="/book" className="hover:text-white">Reservations</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
        <div className="mx-auto mt-10 h-px w-24 bg-brass/60" />
        <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-white/40">
          Concept website prepared for Grand Hotel Begnas. Rates and photographs are indicative, drawn from the hotel's
          public listings, and to be confirmed with the hotel before going live.
        </p>
      </div>
    </footer>
  );
}
