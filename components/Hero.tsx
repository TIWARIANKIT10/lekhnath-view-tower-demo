"use client";
// Hero — a still, print-like opening: one slow crossfade, a centred
// serif headline, a brass rule. No particles, no motion tricks.
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { heroImages } from "@/data/content";
import { hotel } from "@/lib/config";

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % heroImages.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink-deep">
      {heroImages.map((src, idx) => (
        <div key={src} className={`absolute inset-0 transition-opacity duration-[2200ms] ${idx === i ? "opacity-100" : "opacity-0"}`}>
          <Image src={src} alt="Begnas Lake and the Annapurna range" fill priority={idx === 0} sizes="100vw" className="object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 bg-ink-deep/45" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-deep/70 to-transparent" />

      <div className="relative z-10 px-5 pt-24 text-center text-white">
        <p className="text-[11px] font-bold uppercase tracking-mega text-brass-pale">Begnas Sadak — Lekhnath, Pokhara</p>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-[42px] font-medium leading-[1.08] sm:text-6xl md:text-7xl">
          The quiet side
          <br />
          <em className="font-medium">of Pokhara.</em>
        </h1>
        <div className="mx-auto mt-7 h-px w-24 bg-brass" />
        <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-white/85">
          Two hundred steps from Begnas Lake. Thirteen calm rooms, a good table, and the mountains on the horizon.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link href="/book" className="btn-brass">
            Reserve your stay
          </Link>
          <Link href="/rooms" className="btn-ghost">
            View the rooms
          </Link>
        </div>
        <p className="mt-9 flex items-center justify-center gap-2 text-[13px] font-semibold text-white/80">
          <Star size={14} className="fill-brass-light text-brass-light" />
          {hotel.otaScore} — {hotel.otaLabel}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Photograph ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-[3px] transition-all duration-500 ${idx === i ? "w-10 bg-brass-light" : "w-5 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
