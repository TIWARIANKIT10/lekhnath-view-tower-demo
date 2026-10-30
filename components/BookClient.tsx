"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone } from "lucide-react";
import BookingBar from "@/components/BookingBar";
import { hotel } from "@/lib/config";
import { distances } from "@/data/content";

function BookInner() {
  const sp = useSearchParams();
  const ci = sp.get("ci") ?? undefined;
  const co = sp.get("co") ?? undefined;
  return (
    <BookingBar
      defaultRoom={sp.get("room") ?? ""}
      initial={ci || co ? { checkIn: ci, checkOut: co } : undefined}
    />
  );
}

export default function BookClient() {
  return (
    <>
      <div className="text-center">
        <p className="eyebrow">Fastest — book direct</p>
        <a href={`tel:${hotel.phone}`} className="mt-3 block font-display text-[clamp(34px,7.4vw,54px)] font-medium leading-none tracking-[0.02em]">
          {hotel.phoneDisplay}
        </a>
        <p className="mx-auto mt-4 max-w-[30em] text-[15px] leading-[1.75] text-ink-soft">
          One call to the front desk. No commission, no booking-site markup — pay at the hotel.
        </p>
        <a href={`tel:${hotel.phone}`} className="btn-taupe mt-6">
          <Phone size={15} strokeWidth={1.5} /> Call the Hotel
        </a>
      </div>

      <div className="mt-12">
        <Suspense fallback={null}>
          <BookInner />
        </Suspense>
      </div>

      <p className="mt-10 text-center text-[12.5px] uppercase tracking-[0.18em] text-ink-mute">
        Check-in <b className="font-medium text-ink">{hotel.checkIn}</b>
        <span className="mx-2.5 opacity-50">·</span> Check-out <b className="font-medium text-ink">{hotel.checkOut}</b>
        {distances.slice(0, 2).map((d) => (
          <span key={d.place}>
            <span className="mx-2.5 opacity-50">·</span> {d.place} <b className="font-medium text-ink">{d.time}</b>
          </span>
        ))}
      </p>
    </>
  );
}
