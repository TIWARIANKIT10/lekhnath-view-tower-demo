"use client";
// After Cheval Blanc: a near-invisible top bar — "Menu" at left, the
// wordmark centred, the telephone at right. The menu is a white panel
// sliding from the left, Book first.
import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { hotel } from "@/lib/config";

const nav = [
  { href: "/rooms", label: "The Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book", label: "Reservations" },
  { href: "/contact", label: "Access & Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > window.innerHeight * 0.72);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
          solid ? "bg-white/95 shadow-[0_1px_0_#E7E1D8] backdrop-blur" : "bg-gradient-to-b from-black/25 to-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-500 md:px-10 ${
            solid ? "py-3 text-ink" : "py-5 text-white"
          }`}
        >
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex min-h-[44px] items-center gap-2.5 text-[13px] uppercase tracking-[0.14em]"
          >
            <span className="block h-[9px] w-5 border-y border-current" /> Menu
          </button>
          <Link href="/" className="text-center leading-none" onClick={() => setOpen(false)}>
            <span className="block pl-[0.34em] font-display text-[19px] font-medium uppercase tracking-[0.34em] md:text-[23px]">
              Grand Begnas
            </span>
            <span className="mt-1 block pl-[0.42em] text-[8.5px] uppercase tracking-[0.42em] opacity-75">
              Lekhnath · Pokhara
            </span>
          </Link>
          <a href={`tel:${hotel.phone}`} className="flex min-h-[44px] items-center text-[12.5px] tracking-[0.1em] max-sm:text-[11px]">
            {hotel.phoneDisplay}
          </a>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[70] bg-ink/35 transition-opacity duration-500 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-[80] flex w-[min(86vw,360px)] flex-col bg-white p-[26px_30px] shadow-[30px_0_60px_rgba(46,42,38,0.12)] transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "-translate-x-[102%]"
        }`}
        aria-hidden={!open}
      >
        <button onClick={() => setOpen(false)} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center self-end">
          <X size={24} strokeWidth={1.25} />
        </button>
        <Link href="/book" onClick={() => setOpen(false)} className="btn-taupe mt-2 w-full">
          Book
        </Link>
        <nav className="mt-8">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-[11px] font-display text-[26px] font-normal"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="mt-auto text-[12.5px] leading-[1.7] text-ink-mute">
          Grand Hotel Begnas
          <br />
          Begnas Sadak, Lekhnath, Pokhara
          <br />
          Check-in {hotel.checkIn} · Check-out {hotel.checkOut}
        </p>
      </aside>
    </>
  );
}
