"use client";

import { useEffect, useState } from "react";
import { ChevronDown, MapPin, Star } from "lucide-react";
import { HERO_SLIDES } from "@/data/site";
import { openBooking } from "./Header";

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % HERO_SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-pine-deep">
      {/* slideshow — crossfade + our slow Ken Burns zoom */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ${i === active ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== active}
        >
          <img
            src={s.src}
            alt={s.alt}
            className={`h-full w-full object-cover ${i === active ? "kenburns" : ""}`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-pine-deep/50 via-transparent to-pine-deep/60" />

      {/* headline */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-28 pt-28 text-center text-cream">
        <p className="rise text-[11px] font-bold uppercase tracking-[0.32em] text-gold-soft" style={{ "--d": "100ms" } as React.CSSProperties}>
          Pokhara · Nepal
        </p>
        <h1 className="rise mt-4 max-w-3xl font-serif text-[42px] font-medium leading-[1.05] sm:text-6xl md:text-7xl" style={{ "--d": "250ms" } as React.CSSProperties}>
          Wake up above<br />the <em className="text-gold-soft not-italic underline decoration-gold/50 decoration-2 underline-offset-8">clouds</em>
        </h1>
        <p className="rise mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-cream/85 sm:text-base" style={{ "--d": "400ms" } as React.CSSProperties}>
          A solar-powered boutique retreat in the Queen&rsquo;s Forest — Annapurnas in front of you,
          Phewa Lake below, and the Peace Pagoda a forest walk away.
        </p>
        <div className="rise mt-7 flex flex-wrap items-center justify-center gap-2.5" style={{ "--d": "550ms" } as React.CSSProperties}>
          <button
            onClick={() => openBooking()}
            className="rounded-full bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-pine-deep shadow-xl shadow-black/25 transition hover:bg-gold-soft active:scale-95"
          >
            Book your stay
          </button>
          <a
            href="#stays"
            className="rounded-full border border-cream/40 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-wider text-cream backdrop-blur transition hover:bg-white/15 active:scale-95"
          >
            Explore stays
          </a>
        </div>
        <div className="rise mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[13px] font-semibold text-cream/85" style={{ "--d": "700ms" } as React.CSSProperties}>
          <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-gold text-gold" /> 9.5/10 on Trip.com</span>
          <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold-soft" /> Beside the World Peace Pagoda</span>
        </div>
      </div>

      {/* slide dots */}
      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-28">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show view ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-gold" : "w-3 bg-cream/40"}`}
          />
        ))}
      </div>

      {/* drifting cloud edge — our nod to the mountain mist */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] overflow-hidden">
        <div className="cloud-drift flex w-[200%]">
          {[0, 1].map((n) => (
            <svg key={n} viewBox="0 0 1200 70" preserveAspectRatio="none" className="h-12 w-1/2 shrink-0 sm:h-16" aria-hidden>
              <path
                d="M0 70 Q120 20 260 48 Q360 4 500 34 Q620 -6 760 30 Q880 2 1000 38 Q1100 18 1200 44 L1200 70 Z"
                fill="#f7f2e7"
                opacity="0.95"
              />
            </svg>
          ))}
        </div>
      </div>

      <a href="#book" aria-label="Scroll to booking" className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-pine">
        <ChevronDown className="bob h-6 w-6" />
      </a>
    </section>
  );
}
