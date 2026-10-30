import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import Reveal from "@/components/Reveal";
import { rooms, experiences, distances } from "@/data/content";
import { hotel } from "@/lib/config";

// Home, in the maison rhythm: hero → a centred welcome → the rooms →
// two quiet editorial spreads → one full-bleed moment → the guest book
// → reservations. One idea per section; the white space does the work.
export default function Home() {
  const [lake, table] = experiences;
  return (
    <>
      <Hero />

      {/* Welcome */}
      <section className="px-5 py-24 md:py-[140px]">
        <Reveal className="mx-auto max-w-[620px] text-center">
          <h2 className="font-display text-[clamp(34px,6.4vw,52px)] font-normal leading-[1.12]">
            Step into the World
            <br />
            of Grand Begnas
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.75] text-ink-soft">
            Two hundred steps from the still water of Begnas Lake, beneath the Annapurnas — a small, unhurried house of
            thirteen rooms, a good table, and quiet mornings.
          </p>
          <a href="#lake" className="discover mt-[26px]">
            Discover the Maison
          </a>
        </Reveal>
      </section>

      {/* The Rooms */}
      <section id="rooms" className="bg-ivory px-5 py-24 md:py-[140px]">
        <div className="wrap !px-0">
          <Reveal className="text-center">
            <p className="eyebrow">Stay</p>
            <h2 className="mt-[18px] font-display text-[clamp(34px,6.4vw,52px)] font-normal leading-[1.12]">Rooms by the Water</h2>
          </Reveal>
          <div className="mt-4">
            {rooms.map((r) => (
              <Reveal key={r.slug} className="mt-[74px]">
                <RoomCard room={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Lake */}
      <section id="lake" className="px-5 py-24 md:py-[140px]">
        <div className="wrap grid items-center gap-[34px] !px-0 md:grid-cols-2 md:gap-20">
          <Reveal className="relative aspect-[3/3.8] overflow-hidden">
            <Image src={lake.img} alt={lake.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Experience quiet privacy</p>
            <h2 className="mt-[18px] font-display text-[clamp(34px,6.4vw,52px)] font-normal leading-[1.12]">
              A Haven
              <br />
              of Serenity
            </h2>
            <p className="mt-5 max-w-[34em] text-[16.5px] leading-[1.75] text-ink-soft">
              Begnas is the lake Pokhara forgot to crowd. Fishing boats at dawn, still water by noon, and the mountains
              standing watch over all of it — your front garden, two hundred steps from the door.
            </p>
            <Link href="/book" className="discover mt-[26px]">
              Plan Your Visit
            </Link>
          </Reveal>
        </div>
      </section>

      {/* The Table */}
      <section className="px-5 pb-24 md:pb-[140px]">
        <div className="wrap grid items-center gap-[34px] !px-0 md:grid-cols-2 md:gap-20">
          <Reveal className="relative aspect-[3/3.8] overflow-hidden md:order-2">
            <Image src={table.img} alt={table.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="md:order-1">
            <p className="eyebrow">Savour simple elegance</p>
            <h2 className="mt-[18px] font-display text-[clamp(34px,6.4vw,52px)] font-normal leading-[1.12]">
              A Symphony
              <br />
              of Flavours
            </h2>
            <p className="mt-5 max-w-[34em] text-[16.5px] leading-[1.75] text-ink-soft">
              A satisfying meal, a quiet drink at the bar, the light going down over the water. The day ends here — no
              journey back into town required.
            </p>
            <p className="mt-4 max-w-[34em] text-[16.5px] leading-[1.75] text-ink-soft">
              The house also keeps a meeting room and garden for family gatherings and small conferences.
            </p>
            <Link href="/book" className="discover mt-[26px]">
              Reserve a Table
            </Link>
          </Reveal>
        </div>
      </section>

      {/* The Moment */}
      <section className="relative flex h-[78svh] min-h-[440px] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop"
          alt="The Annapurna panorama"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1E1A16]/30" />
        <Reveal className="relative z-10 px-5 text-center text-white">
          <p className="text-[13px] tracking-[0.04em] text-white/85">The Annapurnas</p>
          <p className="mt-3 font-display text-[clamp(30px,6vw,48px)] font-normal leading-[1.15]">
            Mountains on the horizon,
            <br />
            silence in between.
          </p>
        </Reveal>
      </section>

      {/* The Guest Book */}
      <section className="px-5 py-24 md:py-[140px]">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <p className="eyebrow">The guest book</p>
          <p className="mt-[18px] font-display text-[clamp(30px,6vw,46px)] font-normal leading-[1.25]">
            “Exceptional — ten out of ten,
            <br />
            from verified guest stays.”
          </p>
          <p className="mt-[22px] text-xs uppercase tracking-[0.26em] text-ink-mute">
            Expedia Guest Rating · Cleanliness 5/5 · Service 5/5 — Klook
          </p>
        </Reveal>
      </section>

      {/* Reservations */}
      <section className="bg-ivory px-5 py-24 text-center md:py-[140px]">
        <Reveal className="mx-auto max-w-[680px]">
          <p className="eyebrow">Reservations</p>
          <h2 className="mt-[18px] font-display text-[clamp(34px,6.4vw,52px)] font-normal leading-[1.12]">Book Direct, Book Simply</h2>
          <a href={`tel:${hotel.phone}`} className="mt-3.5 inline-block font-display text-[clamp(34px,7.4vw,54px)] font-medium leading-tight tracking-[0.02em]">
            {hotel.phoneDisplay}
          </a>
          <p className="mx-auto mt-4 max-w-[30em] text-[15px] leading-[1.75] text-ink-soft">
            One call to the front desk. No commission, no middleman — pay at the hotel. Prefer to book online? The same
            rooms are on Booking.com.
          </p>
          <div className="mt-[34px] flex flex-wrap justify-center gap-3.5">
            <a href={`tel:${hotel.phone}`} className="btn-taupe">
              Call the Hotel
            </a>
            <Link href="/book" className="btn-line">
              Book on Booking.com
            </Link>
          </div>
          <p className="mt-11 text-[12.5px] uppercase tracking-[0.18em] text-ink-mute">
            {distances.slice(0, 3).map((d, i) => (
              <span key={d.place}>
                {i > 0 && <span className="mx-2.5 opacity-50">·</span>}
                {d.place} <b className="font-medium text-ink">{d.time}</b>
              </span>
            ))}
          </p>
        </Reveal>
      </section>
    </>
  );
}
