import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { hotel } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-pine-950 pb-28 pt-12 text-white md:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-2xl font-semibold">Robin's Nest Hotel & Restaurant</p>
        <p className="mt-1 text-sm text-white/60">Deorali · Between the twin lakes, Pokhara</p>
        <div className="mt-6 space-y-2.5 text-[15px]">
          <a href={hotel.mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-2 text-white/85"><MapPin size={18} className="mt-0.5 shrink-0 text-sand-400" /> {hotel.address}</a>
          {hotel.phone && <a href={`tel:${hotel.phone}`} className="flex items-center gap-2 text-white/85"><Phone size={18} className="shrink-0 text-sand-400" /> {hotel.phoneDisplay}</a>}
        </div>
        <div className="mt-8 flex gap-6 text-sm font-medium text-white/70">
          <Link href="/rooms">Rooms</Link><Link href="/gallery">Gallery</Link><Link href="/book">Book</Link><Link href="/contact">Contact</Link>
        </div>
        <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/40">
          Concept demo website — prepared to show the hotel a modern direct-booking presence. Demo rates & photos to be confirmed with the hotel before going live.
        </p>
      </div>
    </footer>
  );
}
