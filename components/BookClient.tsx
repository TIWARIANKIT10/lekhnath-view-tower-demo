"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone } from "lucide-react";
import BookingBar from "@/components/BookingBar";
import { hotel } from "@/lib/config";

function BookInner() {
  const sp = useSearchParams();
  return <BookingBar defaultRoom={sp.get("room") ?? ""} />;
}

export default function BookClient() {
  return (
    <>
      <div className="border border-brass/50 bg-cream p-6 text-center sm:p-8">
        <p className="over">Fastest — book direct</p>
        <a href={`tel:${hotel.phone}`} className="mt-3 block font-display text-4xl font-semibold tracking-wide sm:text-5xl">
          {hotel.phoneDisplay}
        </a>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
          One call to the front desk. No commission, no booking-site markup — pay at the hotel.
        </p>
        <a href={`tel:${hotel.phone}`} className="btn-brass mt-5">
          <Phone size={16} /> Call now
        </a>
      </div>
      <div className="mt-8">
        <Suspense fallback={null}>
          <BookInner />
        </Suspense>
      </div>
      <dl className="mt-8 grid grid-cols-2 divide-x divide-line border border-line bg-white py-5 text-center">
        <div>
          <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft">Check-in</dt>
          <dd className="mt-1 font-display text-xl font-semibold">{hotel.checkIn}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft">Check-out</dt>
          <dd className="mt-1 font-display text-xl font-semibold">{hotel.checkOut}</dd>
        </div>
      </dl>
    </>
  );
}
