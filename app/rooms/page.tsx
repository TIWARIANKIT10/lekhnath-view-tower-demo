import type { Metadata } from "next";
import RoomCard from "@/components/RoomCard";
import Reveal from "@/components/Reveal";
import { rooms } from "@/data/content";

export const metadata: Metadata = { title: "Rooms — Grand Hotel Begnas" };

export default function RoomsPage() {
  return (
    <section className="wrap pb-20 pt-32 md:pt-40">
      <p className="over">01 — Stay</p>
      <h1 className="mt-3 font-display text-[40px] font-medium leading-tight md:text-5xl">The rooms</h1>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
        Thirteen rooms above Begnas Sadak. Rates shown are the hotel's public listing rates — booking direct by phone
        is always the best price.
      </p>
      <div className="mt-12 space-y-14 md:space-y-20">
        {rooms.map((r, i) => (
          <Reveal key={r.slug}>
            <RoomCard room={r} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
      <p className="mt-14 border-t border-line pt-5 text-xs leading-relaxed text-ink-soft">
        Indicative rates drawn from the hotel's Expedia / Klook / momondo listings on 2026-10-30 — to be confirmed with
        the hotel.
      </p>
    </section>
  );
}
