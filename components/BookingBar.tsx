"use client";
// The reservation form — set dates and party once, then either call the
// hotel direct (best rate, no commission) or continue to Booking.com
// with the same details attached.
import { useEffect, useMemo, useState } from "react";
import { Phone } from "lucide-react";
import { bookingComUrl, callUrl, defaultStay, type StayQuery } from "@/lib/booking";
import { hotel } from "@/lib/config";
import { rooms } from "@/data/content";

export default function BookingBar({ defaultRoom = "" }: { defaultRoom?: string }) {
  const [stay, setStay] = useState<StayQuery>(defaultStay);
  const [roomSlug, setRoomSlug] = useState(defaultRoom);
  useEffect(() => {
    if (defaultRoom) setRoomSlug(defaultRoom);
  }, [defaultRoom]);

  const nights = useMemo(() => {
    const n = Math.round((new Date(stay.checkOut).getTime() - new Date(stay.checkIn).getTime()) / 864e5);
    return Number.isFinite(n) && n > 0 ? n : 0;
  }, [stay]);
  const room = rooms.find((r) => r.slug === roomSlug);
  const total = room && nights ? room.price * nights : null;

  const field =
    "w-full border border-line bg-white px-3 py-3 text-[15px] text-ink outline-none transition focus:border-brass";
  const label = "mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-ink-soft";
  const set = (k: keyof StayQuery) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setStay((s) => ({ ...s, [k]: k === "checkIn" || k === "checkOut" ? e.target.value : Number(e.target.value) }));

  return (
    <div className="border border-line bg-white p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <label className={label}>Room</label>
          <select className={field} value={roomSlug} onChange={(e) => setRoomSlug(e.target.value)}>
            <option value="">Any room</option>
            {rooms.map((r) => (
              <option key={r.slug} value={r.slug}>
                {r.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label}>Check-in</label>
          <input type="date" className={field} value={stay.checkIn} onChange={set("checkIn")} />
        </div>
        <div>
          <label className={label}>Check-out</label>
          <input type="date" className={field} value={stay.checkOut} min={stay.checkIn} onChange={set("checkOut")} />
        </div>
        <div>
          <label className={label}>Adults</label>
          <select className={field} value={stay.adults} onChange={set("adults")}>
            {[1, 2, 3, 4, 5, 6].map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label}>Rooms</label>
          <select className={field} value={stay.rooms} onChange={set("rooms")}>
            {[1, 2, 3, 4].map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      {total && (
        <p className="mt-4 text-sm text-ink-soft">
          {room!.name} · {nights} night{nights > 1 ? "s" : ""} · indicative total{" "}
          <span className="font-display text-lg font-semibold text-ink">${total}</span> — confirmed when you book.
        </p>
      )}

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <a href={callUrl} className="btn-brass w-full !py-4">
          <Phone size={17} /> Call to book — {hotel.phoneDisplay}
        </a>
        <a href={bookingComUrl(stay)} target="_blank" rel="noreferrer" className="btn-ink w-full !py-4">
          Continue to Booking.com
        </a>
      </div>
      <p className="mt-4 text-center text-xs leading-relaxed text-ink-soft">
        Booking direct by phone is always the best rate — no commission, pay at the hotel. Check-in {hotel.checkIn} ·
        Check-out {hotel.checkOut}.
      </p>
    </div>
  );
}
