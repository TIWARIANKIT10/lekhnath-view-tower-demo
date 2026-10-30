import Link from "next/link";
import { hotel } from "@/lib/config";

// A white, centred colophon — the maison manner.
export default function Footer() {
  return (
    <footer className="border-t border-line bg-white px-5 pb-[calc(46px+env(safe-area-inset-bottom))] pt-[70px] text-center">
      <p className="pl-[0.32em] font-display text-[21px] font-medium uppercase tracking-[0.32em]">Grand Begnas</p>
      <p className="mt-3.5 text-sm leading-[1.8] text-ink-mute">
        {hotel.address}
        <br />
        <a href={`tel:${hotel.phone}`} className="text-ink-soft">
          {hotel.phoneDisplay}
        </a>
      </p>
      <nav className="mt-[30px] flex flex-wrap justify-center gap-x-[30px] gap-y-3 text-[12.5px] uppercase tracking-[0.2em]">
        <Link href="/rooms">Rooms</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/book">Reservations</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <p className="mx-auto mt-9 max-w-[520px] text-[11.5px] leading-[1.8] text-[#A89F93]">
        A website prepared for Grand Hotel Begnas. Photographs and rates are indicative, drawn from the hotel's public
        listings, and to be confirmed with the hotel before going live.
      </p>
    </footer>
  );
}
