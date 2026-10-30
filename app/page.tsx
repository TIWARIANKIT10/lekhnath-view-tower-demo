import Image from "next/image";
import Link from "next/link";
import { MapPin, Quote, Star, Wifi, Car, UtensilsCrossed, BellRing } from "lucide-react";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import RoomCard from "@/components/RoomCard";
import Reveal from "@/components/Reveal";
import { rooms, experiences, reviews, distances } from "@/data/content";
import { hotel } from "@/lib/config";

const perks = [
  { icon: Wifi, label: "Free Wi-Fi" }, { icon: Car, label: "Free parking" },
  { icon: UtensilsCrossed, label: "Rooftop restaurant" }, { icon: BellRing, label: "24h front desk" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto -mt-14 max-w-6xl px-4 sm:px-6 md:-mt-10">
        <div className="relative z-10"><BookingBar /></div>
        <div className="mt-6 grid grid-cols-4 gap-2 pb-2">
          {perks.map((p) => (
            <div key={p.label} className="flex flex-col items-center gap-1.5 rounded-2xl bg-white/70 py-3 text-center">
              <p.icon size={20} className="text-pine-800" />
              <span className="px-1 text-[11px] font-semibold leading-tight text-pine-900 sm:text-xs">{p.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <Reveal>
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand-500">Stay</p>
              <h2 className="mt-1 font-display text-3xl font-semibold sm:text-4xl">Rooms with a view</h2>
            </div>
            <Link href="/rooms" className="shrink-0 text-sm font-bold text-pine-800 underline underline-offset-4">All rooms</Link>
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((r) => <Reveal key={r.slug}><RoomCard room={r} /></Reveal>)}
        </div>
      </section>

      <section className="bg-pine-950 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand-400">Experience</p>
            <h2 className="mt-1 font-display text-3xl font-semibold text-white sm:text-4xl">One hotel, three views</h2>
          </Reveal>
          <div className="no-scrollbar -mx-4 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible">
            {experiences.map((e) => (
              <Reveal key={e.title} className="w-[82%] shrink-0 snap-start sm:w-[55%] lg:w-auto">
                <article className="relative aspect-[3/4] overflow-hidden rounded-3xl lg:aspect-[4/5]">
                  <Image src={e.img} alt={e.title} fill sizes="(max-width: 1024px) 82vw, 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine-950/85 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-2xl font-semibold text-white">{e.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/85">{e.line}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <Reveal>
          <div className="flex items-center gap-2">
            <span className="flex">{[1,2,3,4,5].map((s) => <Star key={s} size={18} className="fill-sand-500 text-sand-500" />)}</span>
            <span className="font-bold">{hotel.googleRating}</span>
            <span className="text-sm text-pine-700/70">· {hotel.googleReviews} Google reviews</span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Guests say it best</h2>
        </Reveal>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <Reveal key={r.text}>
              <figure className="h-full rounded-3xl bg-white p-5 shadow-card">
                <Quote size={20} className="text-sand-500" />
                <blockquote className="mt-3 text-[15px] leading-relaxed text-pine-900">“{r.text}”</blockquote>
                <figcaption className="mt-4 text-xs font-bold uppercase tracking-wider text-pine-700/60">{r.source}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-3xl bg-pine-900 text-white shadow-soft md:grid md:grid-cols-2">
            <div className="p-6 sm:p-8">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sand-400"><MapPin size={14} /> Find us</p>
              <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Lekhnath — the city of seven lakes</h3>
              <ul className="mt-5 space-y-3">
                {distances.map((d) => (
                  <li key={d.place} className="flex items-center justify-between border-b border-white/10 pb-3 text-[15px]">
                    <span className="text-white/85">{d.place}</span><span className="font-bold">{d.time}</span>
                  </li>
                ))}
              </ul>
              <a href={hotel.mapsUrl} target="_blank" rel="noreferrer" className="mt-6 block rounded-xl bg-white py-3.5 text-center font-bold text-pine-950">Get directions</a>
              <p className="mt-3 text-xs text-white/50">*Rupa Lake distance from OTA listings — confirm on visit.</p>
            </div>
            <div className="relative min-h-56">
              <Image src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop" alt="Lake view" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
