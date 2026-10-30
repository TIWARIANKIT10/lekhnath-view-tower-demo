"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { hotel } from "@/lib/config";

const links = [
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const dark = scrolled || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${dark ? "bg-cream/95 shadow-card backdrop-blur" : "bg-gradient-to-b from-pine-950/60 to-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className={`leading-tight ${dark ? "text-pine-950" : "text-white"}`} onClick={() => setOpen(false)}>
          <span className="font-display text-[17px] font-semibold tracking-tight">Hotel Young's Stupa</span>
          <span className={`block text-[10px] font-medium uppercase tracking-[0.22em] ${dark ? "text-sand-500" : "text-sand-400"}`}>Lekhnath-09 · Pokhara</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-sm font-medium ${dark ? "text-pine-900" : "text-white/90"} hover:opacity-70`}>{l.label}</Link>
          ))}
          <a href={`tel:${hotel.phone}`} className="flex items-center gap-2 rounded-full bg-sand-500 px-4 py-2 text-sm font-semibold text-white shadow-card">
            <Phone size={15} /> {hotel.phoneDisplay}
          </a>
        </nav>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className={`flex h-11 w-11 items-center justify-center rounded-full md:hidden ${dark ? "text-pine-950" : "text-white"}`}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-pine-100 bg-cream px-4 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-pine-950">{l.label}</Link>
          ))}
          <Link href="/book" onClick={() => setOpen(false)} className="mt-2 block rounded-2xl bg-pine-900 py-3.5 text-center font-semibold text-white">Book direct</Link>
        </nav>
      )}
    </header>
  );
}
