import Image from "next/image";
import Link from "next/link";
import { Phone, Star } from "lucide-react";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import RoomCard from "@/components/RoomCard";
import Reveal from "@/components/Reveal";
import { rooms, experiences, reviews, distances } from "@/data/content";
import { hotel } from "@/lib/config";

function SectionHead({ no, title, href, linkLabel }: { no: string; title: string; href?: string; linkLabel?: string }) {
  return (
    <div className="flex items-end justify-between border-b-2 border-ink pb-4">
      <h2 className="flex items-baseline gap-3 font-display text-[30px] font-medium leading-none md:text-4xl">
        <span className="text-sm font-bold tracking-[0.2em] text-brass">{no}</span> {title}
      </h2>
      {href && (
        <Link href={href} className="shrink-0 text-[13px] font-bold uppercase tracking-[0.14em] text-brass hover:underline underline-offset-4">
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Welcome — an editorial spread, not a feature grid */}
      <section className="wrap py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="over">Welcome</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.12] md:text-[44px]">
              A grand house
              <br />
              on a quiet lake.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="text-[17px] leading-relaxed text-ink-soft">
              Grand Hotel Begnas stands on Begnas Sadak, close enough to the water that mornings begin with mist on the
              lake and the Annapurnas turning gold. Inside: thirteen unhurried rooms, a restaurant and bar, and a staff
              guests keep writing home about.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
              It is the Pokhara of twenty years ago — no crowds, no noise — twenty minutes from the city.
            </p>
            <dl className="mt-9 grid grid-cols-3 divide-x divide-line border-y border-line py-5 text-center">
              {[
                ["13", "Guest rooms"],
                ["200", "Steps to the lake"],
                ["10/10", "Expedia rating"],
              ].map(([n, l]) => (
                <div key={l} className="px-2">
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-3xl font-semibold md:text-4xl">{n}</dd>
                  <dd className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 01 — Stay */}
      <section className="wrap pb-16 md:pb-24">
        <Reveal>
          <SectionHead no="01" title="Stay" href="/rooms" linkLabel="All rooms" />
        </Reveal>
        <div className="mt-10 space-y-14 md:space-y-20">
          {rooms.map((r, i) => (
            <Reveal key={r.slug}>
              <RoomCard room={r} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 02 — At the Grand */}
      <section className="bg-cream py-16 md:py-24">
        <div className="wrap">
          <Reveal>
            <SectionHead no="02" title="At the Grand" />
          </Reveal>
          <div>
            {experiences.map((e, i) => (
              <Reveal key={e.title}>
                <article className="grid items-center gap-5 border-b border-line py-8 md:grid-cols-12 md:gap-8">
                  <span className="hidden font-display text-5xl font-medium text-brass/50 md:col-span-1 md:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-6">
                    <h3 className="font-display text-2xl font-medium md:text-[28px]">{e.title}</h3>
                    <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-ink-soft">{e.line}</p>
                  </div>
                  <div className="relative aspect-[16/9] overflow-hidden md:col-span-5">
                    <Image src={e.img} alt={e.title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — The guest book */}
      <section className="wrap py-16 md:py-24">
        <Reveal>
          <SectionHead no="03" title="The guest book" />
        </Reveal>
        <Reveal>
          <p className="mt-8 flex items-center gap-2 text-sm font-semibold text-ink-soft">
            <Star size={16} className="fill-brass text-brass" /> {hotel.otaScore} · {hotel.otaLabel}
          </p>
        </Reveal>
        <div className="mt-6 grid gap-10 md:grid-cols-3 md:gap-8">
          {reviews.map((r, i) => (
            <Reveal key={r.source} delay={i * 0.08}>
              <figure className="border-t border-line pt-5">
                <blockquote className="font-display text-[21px] font-medium italic leading-snug">{r.text}</blockquote>
                <figcaption className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-brass">{r.source}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="grid gap-8 border border-line bg-white p-6 sm:p-9 md:grid-cols-2">
            <div>
              <p className="over">Find us</p>
              <h3 className="mt-3 font-display text-3xl font-medium">Begnas Sadak, Lekhnath</h3>
              <ul className="mt-6">
                {distances.map((d) => (
                  <li key={d.place} className="flex items-baseline gap-3 py-2.5 text-[15px]">
                    <span>{d.place}</span>
                    <span className="flex-1 border-b border-dotted border-brass/50" />
                    <span className="font-bold">{d.time}</span>
                  </li>
                ))}
              </ul>
              <a href={hotel.mapsUrl} target="_blank" rel="noreferrer" className="btn-ink mt-7">
                Get directions
              </a>
            </div>
            <div className="relative min-h-60 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop"
                alt="Begnas Lake"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* 04 — Reservations */}
      <section className="bg-ink-deep py-16 text-white md:py-24">
        <div className="wrap">
          <Reveal>
            <div className="flex items-end justify-between border-b-2 border-white pb-4">
              <h2 className="flex items-baseline gap-3 font-display text-[30px] font-medium leading-none md:text-4xl">
                <span className="text-sm font-bold tracking-[0.2em] text-brass-light">04</span> Reservations
              </h2>
              <a href={`tel:${hotel.phone}`} className="hidden items-center gap-2 text-sm font-bold sm:flex">
                <Phone size={15} className="text-brass-light" /> {hotel.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal className="mt-9">
            <div className="text-ink">
              <BookingBar />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
