"use client";
// Hero after Cheval Blanc: full-viewport imagery in a slow crossfade,
// text resting at the bottom centre — a quiet overline, a large light
// serif headline, and one white booking bar. Nothing else.
import { useEffect, useState } from "react";
import Image from "next/image";
import { HeroBar } from "@/components/BookingBar";
import { heroImages } from "@/data/content";

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % heroImages.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex h-[100svh] min-h-[560px] items-end justify-center overflow-hidden bg-[#3A362F]">
      {heroImages.map((src, idx) => (
        <div key={src} className={`absolute inset-0 transition-opacity duration-[2400ms] ${idx === i ? "opacity-100" : "opacity-0"}`}>
          <Image
            src={src}
            alt="Begnas Lake and the Annapurna range"
            fill
            priority={idx === 0}
            sizes="100vw"
            className={`object-cover transition-transform duration-[9000ms] ease-linear ${idx === i ? "scale-100" : "scale-[1.06]"}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A16]/55 via-transparent to-[#1E1A16]/20" />

      <div className="relative z-10 w-full px-5 pb-[calc(30px+env(safe-area-inset-bottom))] text-center text-white">
        <p className="text-[12.5px] font-light tracking-[0.06em]">A lakeside maison in Lekhnath, Pokhara</p>
        <h1 className="mx-auto mt-3.5 max-w-[12em] font-display text-[clamp(40px,9.4vw,76px)] font-normal leading-[1.06]">
          Plan Your Escape
          <br />
          to the Lake
        </h1>
        <div className="mt-6">
          <HeroBar />
        </div>
        <p className="mt-4 text-xs tracking-[0.05em] text-white/85">Book direct by telephone — the best rate, always.</p>
      </div>
    </section>
  );
}
