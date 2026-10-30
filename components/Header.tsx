"use client";
// Masthead — editorial style: hairline rules, a centred wordmark,
// split navigation. Transparent over the hero, ivory when scrolled.
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { hotel } from "@/lib/config";

const left = [
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
];
const right = [
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Reservations" },
];
const all = [...left, ...right];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const solid = scrolled || open;
  const tone = solid ? "text-ink" : "text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-paper/95 shadow-[0_1px_0_#E3D9C4] backdrop-blur" : "bg-gradient-to-b from-ink-deep/50 to-transparent"
      }`}
    >
      <div className="wrap grid h-[72px] grid-cols-[1fr_auto_1fr] items-center">
        <nav className="hidden items-center gap-8 lg:flex">
          {left.map((l) => (
            <Link key={l.href} href={l.href} className={`text-[13px] font-semibold uppercase tracking-[0.18em] ${tone} hover:opacity-60`}>
              {l.label}
            </Link>
          ))}
        </nav>
        <button aria-label="Open menu" onClick={() => setOpen(true)} className={`flex h-11 w-11 items-center justify-center lg:hidden ${tone}`}>
          <Menu size={24} />
        </button>

        <Link href="/" className={`text-center leading-none ${tone}`} onClick={() => setOpen(false)}>
          <span className="block font-display text-[26px] font-semibold tracking-[0.08em]">GRAND</span>
          <span className={`mt-1 block text-[9px] font-bold uppercase tracking-mega ${solid ? "text-brass" : "text-brass-pale"}`}>
            Hotel Begnas · Lekhnath
          </span>
        </Link>

        <div className="flex items-center justify-end gap-8">
          <nav className="hidden items-center gap-8 lg:flex">
            {right.map((l) => (
              <Link key={l.href} href={l.href} className={`text-[13px] font-semibold uppercase tracking-[0.18em] ${tone} hover:opacity-60`}>
                {l.label}
              </Link>
            ))}
          </nav>
          <a href={`tel:${hotel.phone}`} className={`hidden items-center gap-2 text-sm font-bold sm:flex ${tone}`}>
            <Phone size={15} className="text-brass" /> {hotel.phoneDisplay}
          </a>
          <Link href="/book" className="btn-brass !px-4 !py-2 text-[13px] lg:hidden xl:inline-flex">
            Reserve
          </Link>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-paper lg:hidden">
          <div className="wrap flex h-[72px] items-center justify-between">
            <span className="font-display text-xl font-semibold tracking-[0.08em]">GRAND</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="flex h-11 w-11 items-center justify-center">
              <X size={26} />
            </button>
          </div>
          <nav className="wrap flex flex-1 flex-col justify-center gap-2">
            {all.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-line py-4"
              >
                <span className="text-xs font-bold text-brass">0{i + 1}</span>
                <span className="font-display text-3xl font-medium">{l.label}</span>
              </Link>
            ))}
            <a href={`tel:${hotel.phone}`} className="btn-brass mt-8">
              <Phone size={16} /> Call {hotel.phoneDisplay}
            </a>
            <p className="mt-4 text-center text-xs text-ink-soft">Check-in {hotel.checkIn} · Check-out {hotel.checkOut}</p>
          </nav>
        </div>
      )}
    </header>
  );
}
