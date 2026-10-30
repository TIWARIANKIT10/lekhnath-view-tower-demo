import type { Metadata } from "next";
import { hotel } from "@/lib/config";
import { distances } from "@/data/content";

export const metadata: Metadata = { title: "Contact — Grand Hotel Begnas" };

export default function ContactPage() {
  return (
    <section className="wrap max-w-3xl pb-20 pt-32 md:pt-40">
      <p className="over">Contact</p>
      <h1 className="mt-3 font-display text-[40px] font-medium leading-tight md:text-5xl">Talk to the hotel</h1>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
        No call centre, no booking site in the middle — one number reaches the front desk.
      </p>

      <a href={`tel:${hotel.phone}`} className="mt-9 block border-b-2 border-ink pb-6">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brass">Telephone</span>
        <span className="mt-2 block font-display text-4xl font-semibold sm:text-5xl">{hotel.phoneDisplay}</span>
      </a>

      <div className="border-b border-line py-6">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brass">Address</span>
        <p className="mt-2 text-lg">{hotel.address}</p>
        <a href={hotel.mapsUrl} target="_blank" rel="noreferrer" className="btn-ink mt-4">
          Open in Google Maps
        </a>
      </div>

      <div className="border-b border-line py-6">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brass">Hours</span>
        <p className="mt-2 text-lg">
          Check-in from {hotel.checkIn} · Check-out until {hotel.checkOut}
        </p>
      </div>

      <div className="py-6">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brass">Distances</span>
        <ul className="mt-3">
          {distances.map((d) => (
            <li key={d.place} className="flex items-baseline gap-3 py-2 text-[15px]">
              <span>{d.place}</span>
              <span className="flex-1 border-b border-dotted border-brass/50" />
              <span className="font-bold">{d.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
