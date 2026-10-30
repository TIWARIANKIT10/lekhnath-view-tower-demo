"use client";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { waLink, bookMessage } from "@/lib/config";
import { rooms } from "@/data/content";

const today = () => new Date().toISOString().slice(0, 10);
const plus = (d: number) => new Date(Date.now() + d * 864e5).toISOString().slice(0, 10);

export default function BookingBar({ defaultRoom = "" }: { defaultRoom?: string }) {
  const [room, setRoom] = useState(defaultRoom);
  const [ci, setCi] = useState(today());
  const [co, setCo] = useState(plus(1));
  const [guests, setGuests] = useState("2");
  const nights = useMemo(() => {
    const n = Math.round((new Date(co).getTime() - new Date(ci).getTime()) / 864e5);
    return Number.isFinite(n) && n > 0 ? n : 0;
  }, [ci, co]);
  const sel = rooms.find((r) => r.name === room);
  const total = sel && nights ? sel.price * nights : null;

  const field = "w-full rounded-xl border border-pine-100 bg-white px-3 py-3 text-[15px] text-pine-950 outline-none focus:border-sand-500";
  const label = "mb-1 block text-[11px] font-bold uppercase tracking-wider text-pine-700/70";
  return (
    <div className="rounded-3xl bg-white p-4 shadow-soft sm:p-5">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_0.8fr_auto]">
        <div><label className={label}>Room</label>
          <select className={field} value={room} onChange={(e) => setRoom(e.target.value)}>
            <option value="">Any room</option>
            {rooms.map((r) => <option key={r.slug} value={r.name}>{r.name}</option>)}
          </select></div>
        <div><label className={label}>Check-in</label>
          <input type="date" className={field} value={ci} min={today()} onChange={(e) => setCi(e.target.value)} /></div>
        <div><label className={label}>Check-out</label>
          <input type="date" className={field} value={co} min={ci} onChange={(e) => setCo(e.target.value)} /></div>
        <div><label className={label}>Guests</label>
          <select className={field} value={guests} onChange={(e) => setGuests(e.target.value)}>
            {[1, 2, 3, 4, 5, 6].map((g) => <option key={g} value={g}>{g}</option>)}
          </select></div>
        <div className="flex items-end">
          <a target="_blank" rel="noreferrer"
            href={waLink(bookMessage(room || undefined, ci, co, guests))}
            className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-pine-900 px-5 py-3 font-bold text-white active:scale-[0.98] lg:w-auto">
            {total ? `$${total} · Book` : "Check price"} <ArrowRight size={17} />
          </a>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-pine-700/70 sm:text-left">
        {nights ? `${nights} night${nights > 1 ? "s" : ""} · ` : ""}Best rate direct — no OTA commission. Confirms on WhatsApp in minutes.
      </p>
    </div>
  );
}
