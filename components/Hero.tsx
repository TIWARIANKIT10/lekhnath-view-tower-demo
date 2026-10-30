"use client";
// Hero v2: Ken Burns slideshow + Three.js firefly atmosphere + Framer Motion
// staggered headline and scroll parallax.
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { heroImages } from "@/data/content";
import { hotel } from "@/lib/config";

const ThreeHero = dynamic(() => import("@/components/ThreeHero"), { ssr: false });

const ease = [0.22, 1, 0.36, 1] as const;
const parent = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } } };

export default function Hero() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % heroImages.length), 5500);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <section ref={ref} className="relative flex min-h-[94svh] items-end overflow-hidden bg-pine-950">
      <motion.div style={reduce ? undefined : { y: imgY }} className="absolute inset-0 -bottom-[20%]">
        {heroImages.map((src, idx) => (
          <motion.div key={src} className="absolute inset-0"
            initial={false}
            animate={{ opacity: idx === i ? 1 : 0, scale: idx === i ? 1 : 1.06 }}
            transition={{ opacity: { duration: 1.6 }, scale: { duration: 7, ease: "linear" } }}>
            <Image src={src} alt="Begnas Lake and Annapurna views near Grand Hotel Begnas"
              fill priority={idx === 0} sizes="100vw" className="object-cover" />
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-pine-950/90 via-pine-950/20 to-pine-950/40" />
      <ThreeHero />

      <motion.div style={reduce ? undefined : { opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-28 pt-32 text-center sm:px-6 md:pb-20">
        <motion.div variants={parent} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-4 flex flex-wrap justify-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
              <Star size={13} className="fill-sand-400 text-sand-400" /> {hotel.otaScore} · Expedia
            </span>
            <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">On Booking.com & all major OTAs</span>
          </motion.div>
          <motion.h1 variants={item} className="mx-auto max-w-3xl font-display text-[44px] font-semibold leading-[1.03] text-white sm:text-7xl">
            Steps from the lake.<br />
            <span className="bg-gradient-to-r from-sand-300 via-sand-400 to-sand-300 bg-clip-text text-transparent">Grand in every way.</span>
          </motion.h1>
          <motion.p variants={item} className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/85 sm:text-base">
            A classic lakeside hotel on Begnas Sadak — restaurant, bar and mountain views, two minutes from the water.
          </motion.p>
          <motion.div variants={item} className="mt-7 flex flex-wrap justify-center gap-3">
            <motion.span whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/book" className="block rounded-full bg-sand-500 px-7 py-3.5 text-[15px] font-bold text-white shadow-soft">Book direct — best rate</Link>
            </motion.span>
            <motion.span whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/rooms" className="block rounded-full bg-white/15 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur">See rooms</Link>
            </motion.span>
          </motion.div>
          <motion.div variants={item} className="mt-8 flex items-center justify-center gap-4">
            <div className="flex gap-1.5">
              {heroImages.map((_, idx) => (
                <button key={idx} aria-label={`Photo ${idx + 1}`} onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${idx === i ? "w-8 bg-sand-400" : "w-2.5 bg-white/40"}`} />
              ))}
            </div>
            {!reduce && (
              <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="flex items-center gap-1 text-xs font-semibold text-white/70">
                <ChevronDown size={14} /> Scroll
              </motion.span>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
