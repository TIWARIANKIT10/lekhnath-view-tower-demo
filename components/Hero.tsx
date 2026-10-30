"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { heroImages } from "@/data/content";
import { hotel } from "@/lib/config";

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-pine-950">
      {heroImages.map((src, idx) => (
        <Image key={src} src={src} alt="Annapurna and Begnas Lake views from Hotel Lekhnath View Tower"
          fill priority={idx === 0} sizes="100vw"
          className={`object-cover transition-opacity duration-[1600ms] ${idx === i ? "opacity-100" : "opacity-0"}`} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-pine-950/85 via-pine-950/20 to-pine-950/30" />
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-28 pt-32 sm:px-6 md:pb-20">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
            <Star size={13} className="fill-sand-400 text-sand-400" /> {hotel.googleRating} on Google
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">{hotel.bookingRating} on Booking.com</span>
        </div>
        <h1 className="max-w-xl font-display text-[42px] font-semibold leading-[1.05] text-white sm:text-6xl">
          Above the lakes.<br />Below the Himalayas.
        </h1>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/85">
          A family-run eco hotel with a 360° view tower — Annapurna in front of you, Begnas and Rupa below.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/book" className="rounded-full bg-sand-500 px-6 py-3.5 text-[15px] font-bold text-white shadow-soft active:scale-[0.98]">Book direct</Link>
          <Link href="/rooms" className="rounded-full bg-white/15 px-6 py-3.5 text-[15px] font-semibold text-white backdrop-blur active:scale-[0.98]">See rooms</Link>
        </div>
        <div className="mt-7 flex gap-1.5">
          {heroImages.map((_, idx) => (
            <button key={idx} aria-label={`Photo ${idx + 1}`} onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-7 bg-white" : "w-2.5 bg-white/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
