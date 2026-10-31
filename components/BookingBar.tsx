"use client";
// The reservation form in two voices:
//  · variant "hero" — Cheval Blanc's white bar: Arrival / Departure / Book,
//    which carries the dates to the reservations page.
//  · variant "full" — the reservations-page form: room, dates, party,
//    an indicative total, then Call (direct, best rate) or Booking.com.
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Phone } from "lucide-react";
import { bookingComUrl, callUrl, defaultStay, type StayQuery } from "@/lib/booking";
import { hotel } from "@/lib/config";
import { rooms } from "@/data/content";

export function HeroBar() {
  const router = useRouter();
  const [stay, setStay] = useState<StayQuery>(defaultStay);
  const cell = "min-w-0 flex-1 px-3 py-3 sm:px-4";
  const label = "mb-1 block text-[9.5px] font-normal uppercase tracking-[0.24em] text-ink-mute";
  // 16px on phones: below that, iOS Safari zooms the page on focus.
  const input = "w-full min-w-0 bg-transparent text-base font-normal text-ink outline-none sm:text-[15px]";
  return (
    <form
      className="mx-auto flex w-full max-w-[620px] flex-wrap bg-white text-left shadow-[0_24px_50px_rgba(20,17,14,0.28)]"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/book?ci=${stay.checkIn}&co=${stay.checkOut}`);
      }}
    >
      <div className={`${cell} max-sm:flex-[1_1_42%]`}>
        <label className={label}>Arrival</label>
        <input type="date" className={input} value={stay.checkIn} onChange={(e) => setStay((s) => ({ ...s, checkIn: e.target.value }))} />
      </div>
      <div className={`${cell} border-l border-line max-sm:flex-[1_1_42%]`}>
        <label className={label}>Departure</label>
        <input
          type="date"
          className={input}
          value={stay.checkOut}
          min={stay.checkIn}
          onChange={(e) => setStay((s) => ({ ...s, checkOut: e.target.value }))}
        />
      </div>
      <button type="submit" className="min-h-[56px] bg-taupe px-[26px] text-[13px] font-medium uppercase tracking-[0.22em] text-white transition hover:bg-taupe-deep max-sm:w-full">
        Book
      </button>
    </form>
  );
}

export default function BookingBar({
  defaultRoom = "",
  initial,
}: {
  defaultRoom?: string;
  initial?: Partial<StayQuery>;
}) {
  const [stay, setStay] = useState<StayQuery>({ ...defaultStay(), ...initial });
  const [roomSlug, setRoomSlug] = useState(defaultRoom);
  useEffect(() => {
    if (defaultRoom) setRoomSlug(defaultRoom);
  }, [defaultRoom]);
  useEffect(() => {
    if (initial) setStay((s) => ({ ...s, ...initial }));
  }, [initial?.checkIn, initial?.checkOut]);

  const nights = useMemo(() => {
    const n = Math.round((new Date(stay.checkOut).getTime() - new Date(stay.checkIn).getTime()) / 864e5);
    return Number.isFinite(n) && n > 0 ? n : 0;
  }, [stay]);
  const room = rooms.find((r) => r.slug === roomSlug);
  const total = room && nights ? room.price * nights * stay.rooms : null;

  const field = "w-full min-w-0 border border-line bg-white px-3 py-3 text-base font-normal text-ink outline-none transition focus:border-taupe sm:text-[15px]";
  const label = "mb-1.5 block text-[10px] font-normal uppercase tracking-[0.22em] text-ink-mute";
  const set =
    (k: keyof StayQuery) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setStay((s) => ({ ...s, [k]: k === "checkIn" || k === "checkOut" ? e.target.value : Number(e.target.value) }));

  return (
    <div className="border border-line bg-white p-5 text-left sm:p-7">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-1">
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
          <label className={label}>Arrival</label>
          <input type="date" className={field} value={stay.checkIn} onChange={set("checkIn")} />
        </div>
        <div>
          <label className={label}>Departure</label>
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

      {total ? (
        <p className="mt-4 text-sm text-ink-mute">
          {room!.name} · {nights} night{nights > 1 ? "s" : ""} · indicative total{" "}
          <span className="font-display text-xl font-medium text-ink">${total}</span> — confirmed when you book.
        </p>
      ) : null}

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <a href={callUrl} className="btn-taupe w-full">
          <Phone size={16} strokeWidth={1.5} /> Call to Book — {hotel.phoneDisplay}
        </a>
        <a href={bookingComUrl(stay)} target="_blank" rel="noreferrer" className="btn-line w-full">
          Continue to Booking.com
        </a>
      </div>
      <p className="mt-4 text-center text-xs leading-relaxed text-ink-mute">
        Booking direct by telephone is always the best rate — no commission, pay at the hotel. Check-in {hotel.checkIn} ·
        Check-out {hotel.checkOut}.
      </p>
    </div>
  );
}
