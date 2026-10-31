import type { Metadata } from "next";
import { hotel } from "@/lib/config";
import { distances } from "@/data/content";

export const metadata: Metadata = { title: "Access & Contact — Grand Hotel Begnas" };

export default function ContactPage() {
  return (
    <section className="wrap max-w-3xl pb-16 pt-32 text-center sm:pb-24 md:pt-44">
      <p className="eyebrow">Access & Contact</p>
      <h1 className="mt-[18px] font-display text-[clamp(38px,7vw,56px)] font-normal leading-[1.1]">Talk to the Hotel</h1>
      <p className="mx-auto mt-4 max-w-[32em] text-[15.5px] leading-[1.75] text-ink-soft">
        No call centre, no booking site in the middle — one number reaches the front desk.
      </p>

      <a href={`tel:${hotel.phone}`} className="mt-12 block border-b border-ink pb-7">
        <span className="text-[11px] uppercase tracking-[0.22em] text-ink-mute">Telephone</span>
        <span className="mt-2 block font-display text-[clamp(34px,7vw,50px)] font-medium leading-none">{hotel.phoneDisplay}</span>
      </a>

      <div className="border-b border-line py-7">
        <span className="text-[11px] uppercase tracking-[0.22em] text-ink-mute">Address</span>
        <p className="mt-2 text-lg font-normal">{hotel.address}</p>
        <a href={hotel.mapsUrl} target="_blank" rel="noreferrer" className="btn-line mt-5">
          Open in Google Maps
        </a>
      </div>

      <div className="border-b border-line py-7">
        <span className="text-[11px] uppercase tracking-[0.22em] text-ink-mute">Hours</span>
        <p className="mt-2 text-lg font-normal">
          Check-in from {hotel.checkIn} · Check-out until {hotel.checkOut}
        </p>
      </div>

      <div className="py-7 text-left">
        <p className="text-center text-[11px] uppercase tracking-[0.22em] text-ink-mute">Distances</p>
        <ul className="mx-auto mt-3 max-w-md">
          {distances.map((d) => (
            <li key={d.place} className="flex items-baseline gap-3 py-2 text-[15px]">
              <span>{d.place}</span>
              <span className="flex-1 border-b border-dotted border-taupe/50" />
              <span className="font-medium">{d.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
