// A room, presented the Cheval Blanc way: a large photograph, then a
// centred name in serif, one evocative line, quiet facts, and an
// underlined "Discover". Prices live on the reservations page, and on
// the rooms index when `detail` is set — never shouted here.
import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/data/content";

export default function RoomCard({ room, detail = false }: { room: Room; detail?: boolean }) {
  return (
    <article>
      <Link href={`/book?room=${room.slug}`} className="group block aspect-[4/2.9] overflow-hidden sm:aspect-[16/8.6]">
        <Image
          src={room.img}
          alt={room.name}
          width={1600}
          height={900}
          sizes="(max-width: 1140px) 100vw, 1140px"
          className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.04]"
        />
      </Link>
      <div className="px-2.5 pt-[26px] text-center">
        <h3 className="font-display text-[29px] font-medium leading-tight">{room.name}</h3>
        <p className="mt-1.5 font-display text-[18.5px] italic text-ink-soft">{room.line}</p>
        <p className="mt-3 text-[12.5px] uppercase tracking-[0.14em] text-ink-mute">
          Sleeps {room.guests} · {room.bed}
          {detail ? ` · From $${room.price} per night` : ""}
        </p>
        <Link href={`/book?room=${room.slug}`} className="discover mt-[18px]">
          Discover
        </Link>
      </div>
    </article>
  );
}
