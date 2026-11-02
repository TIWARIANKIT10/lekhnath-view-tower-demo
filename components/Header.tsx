"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Star } from "lucide-react";
import { HOTEL } from "@/data/site";

const NAV = [
  { label: "The Retreat", href: "#retreat" },
  { label: "Stays", href: "#stays" },
  { label: "Experiences", href: "#experiences" },
  { label: "Dining", href: "#dining" },
  { label: "Guest Words", href: "#reviews" },
  { label: "Find Us", href: "#find-us" },
];

export function openBooking(roomId?: string) {
  window.dispatchEvent(new CustomEvent("raniban:book", { detail: { roomId } }));
}

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          solid ? "bg-pine-deep/95 shadow-lg shadow-black/10 backdrop-blur" : "bg-gradient-to-b from-black/45 to-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="leading-none text-cream">
            <span className="block font-serif text-[22px] font-semibold tracking-wide sm:text-2xl">
              Raniban <span className="text-gold-soft">Retreat</span>
            </span>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.32em] text-cream/70">
              The Queen&rsquo;s Forest · Pokhara
            </span>
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-cream md:flex">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" /> 9.5 · Trip.com
            </span>
            <button
              onClick={() => openBooking()}
              className="rounded-full bg-gold px-4 py-2.5 text-[13px] font-bold uppercase tracking-wider text-pine-deep transition hover:bg-gold-soft active:scale-95 sm:px-5"
            >
              Book Now
            </button>
            <button
              onClick={() => setMenu(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream transition hover:bg-white/20 active:scale-95"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {menu && (
        <div className="fade-in fixed inset-0 z-50 flex flex-col bg-pine-deep text-cream">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
            <span className="font-serif text-[22px] font-semibold">
              Raniban <span className="text-gold-soft">Retreat</span>
            </span>
            <button
              onClick={() => setMenu(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 active:scale-95"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="menu-in mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-1 px-6">
            {NAV.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenu(false)}
                className="border-b border-white/8 py-3.5 font-serif text-3xl font-medium transition hover:pl-2 hover:text-gold-soft sm:text-4xl"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="mx-auto w-full max-w-6xl space-y-1.5 px-6 pb-10 text-sm text-cream/75">
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> {HOTEL.location}</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> {HOTEL.phoneDisplay}</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> {HOTEL.email}</p>
          </div>
        </div>
      )}
    </>
  );
}
