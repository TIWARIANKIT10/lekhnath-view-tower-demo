import type { Metadata } from "next";
import RoomCard from "@/components/RoomCard";
import Reveal from "@/components/Reveal";
import { rooms } from "@/data/content";

export const metadata: Metadata = { title: "The Rooms — Grand Hotel Begnas" };

export default function RoomsPage() {
  return (
    <section className="wrap pb-16 pt-32 sm:pb-24 md:pt-44">
      <Reveal className="text-center">
        <p className="eyebrow">Stay</p>
        <h1 className="mt-[18px] font-display text-[clamp(38px,7vw,56px)] font-normal leading-[1.1]">The Rooms</h1>
        <p className="mx-auto mt-4 max-w-[34em] text-[15.5px] leading-[1.75] text-ink-soft">
          Thirteen rooms above Begnas Sadak. Rates are the hotel's public listing rates — booking direct by telephone is
          always the best price.
        </p>
      </Reveal>
      <div>
        {rooms.map((r) => (
          <Reveal key={r.slug} className="mt-12 sm:mt-[74px]">
            <RoomCard room={r} detail />
          </Reveal>
        ))}
      </div>
      <p className="mt-16 text-center text-xs leading-relaxed text-ink-mute">
        Indicative rates drawn from the hotel's Expedia / Klook / momondo listings on 2026-10-30 — to be confirmed with
        the hotel.
      </p>
    </section>
  );
}
