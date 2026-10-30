// RoomRow — an editorial spread, not a card: photograph on one side,
// ruled text on the other, alternating down the page.
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Users } from "lucide-react";
import type { Room } from "@/data/content";

export default function RoomCard({ room, flip = false }: { room: Room; flip?: boolean }) {
  return (
    <article className={`grid items-center gap-6 md:grid-cols-12 md:gap-10 ${flip ? "" : ""}`}>
      <div className={`relative aspect-[4/3] overflow-hidden md:col-span-7 ${flip ? "md:order-2" : ""}`}>
        <Image
          src={room.img}
          alt={room.name}
          fill
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-cover"
        />
        {room.tag && (
          <span className="absolute left-4 top-4 bg-paper px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
            {room.tag}
          </span>
        )}
      </div>
      <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
        <h3 className="font-display text-[28px] font-medium leading-snug md:text-[32px]">{room.name}</h3>
        <p className="mt-2 text-[15px] italic leading-relaxed text-ink-soft" style={{ fontFamily: "var(--font-display)" }}>
          {room.line}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] font-semibold text-ink">
          <span className="flex items-center gap-1.5">
            <BedDouble size={15} className="text-brass" /> {room.bed}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={15} className="text-brass" /> Sleeps {room.guests}
          </span>
        </div>
        <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm text-ink-soft">
          {room.perks.map((p) => (
            <li key={p} className="flex items-center gap-2.5">
              <span className="h-1 w-1 rounded-full bg-brass" /> {p}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-end justify-between border-t border-line pt-4">
          <p>
            <span className="text-xs uppercase tracking-[0.18em] text-ink-soft">From</span>
            <span className="ml-2 font-display text-3xl font-semibold">${room.price}</span>
            <span className="text-sm text-ink-soft"> / night</span>
          </p>
          <Link href={`/book?room=${room.slug}`} className="text-sm font-bold uppercase tracking-[0.14em] text-brass underline-offset-4 hover:underline">
            Reserve →
          </Link>
        </div>
      </div>
    </article>
  );
}
