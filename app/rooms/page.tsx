import type { Metadata } from "next";
import RoomCard from "@/components/RoomCard";
import Reveal from "@/components/Reveal";
import { rooms } from "@/data/content";

export const metadata: Metadata = { title: "Rooms — Hotel Seven Lake Paradise" };

export default function RoomsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand-500">Stay</p>
      <h1 className="mt-1 font-display text-4xl font-semibold">Rooms</h1>
      <p className="mt-2 max-w-md text-[15px] text-pine-700/85">Fifteen rooms, every one with a balcony or patio. Prices shown are direct — book direct and skip the OTA commission.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((r) => (
          <Reveal key={r.slug}>
            <RoomCard room={r} />
            <ul className="flex flex-wrap gap-1.5 px-1 pt-3">
              {r.perks.map((p) => <li key={p} className="rounded-full bg-pine-50 px-2.5 py-1 text-xs font-medium text-pine-800">{p}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-xs text-pine-700/60">Demo rates based on current OTA listings — to be confirmed with the hotel.</p>
    </section>
  );
}
