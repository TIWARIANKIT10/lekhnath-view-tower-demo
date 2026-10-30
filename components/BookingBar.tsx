"use client";
// Booking v2: one set of dates/guests, two ways to book —
//  1) Book direct (best rate, no commission — call or WhatsApp)
//  2) Book on Booking.com (deep link carrying the same dates/guests)
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { directLink, bookingComLink, hotel } from "@/lib/config";
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

  const field = "w-full rounded-xl border border-pine-100 bg-white px-3 py-3 text-[15px] text-pine-950 outline-none transition focus:border-sand-500 focus:ring-2 focus:ring-sand-500/25";
  const label = "mb-1 block text-[11px] font-bold uppercase tracking-wider text-pine-700/70";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl bg-white/95 p-4 shadow-soft ring-1 ring-pine-950/5 backdrop-blur sm:p-5">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
      </div>

      <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
        <motion.a whileTap={{ scale: 0.98 }} {...(hotel.whatsapp ? { target: "_blank", rel: "noreferrer" } : {})}
          href={directLink(ci, co, guests)}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-pine-900 px-5 py-3.5 font-bold text-white shadow-card">
          {total ? `$${total} · Book direct` : "Book direct"} <ArrowRight size={17} />
        </motion.a>
        <motion.a whileTap={{ scale: 0.98 }} target="_blank" rel="noreferrer"
          href={bookingComLink(ci, co, guests)}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#003580] px-5 py-3.5 font-bold text-white shadow-card">
          Book on Booking.com
        </motion.a>
      </div>
      <p className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-center text-xs text-pine-700/70 sm:justify-start">
        <BadgeCheck size={14} className="text-sand-500" />
        {nights ? `${nights} night${nights > 1 ? "s" : ""} · ` : ""}{hotel.whatsapp ? 'Best rate direct on WhatsApp — no commission.' : 'Best rate direct — call the hotel, no commission.'} Or book instantly on Booking.com with the same dates.
      </p>
    </motion.div>
  );
}
