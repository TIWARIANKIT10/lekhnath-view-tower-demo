"use client";
// Quiet ivory bar, mobile only: Call | Reserve, split by a hairline.
import Link from "next/link";
import { Phone } from "lucide-react";
import { hotel } from "@/lib/config";

export default function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2">
        <a
          href={`tel:${hotel.phone}`}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-ink active:bg-cream"
        >
          <Phone size={17} className="text-brass" /> Call the hotel
        </a>
        <Link
          href="/book"
          className="flex items-center justify-center bg-brass py-3.5 text-sm font-bold text-white active:bg-brass-light"
        >
          Reserve
        </Link>
      </div>
    </div>
  );
}
