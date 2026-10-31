"use client";
// Cheval Blanc's floating invitation replaces the app-style sticky bar:
// a single white, sharp-cornered "Plan Your Escape" that drifts in after
// the hero and rests near the end of the page.
import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => {
      const y = window.scrollY;
      const nearEnd = y > document.body.scrollHeight - window.innerHeight * 1.7;
      setShow(y > window.innerHeight * 0.85 && !nearEnd);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <Link
      href="/book"
      className={`fixed bottom-[calc(18px+env(safe-area-inset-bottom))] left-1/2 z-[65] max-w-[calc(100vw-36px)] -translate-x-1/2 whitespace-nowrap border border-line bg-white/95 px-5 py-3.5 text-[12.5px] font-normal uppercase tracking-[0.2em] text-ink shadow-[0_14px_34px_rgba(46,42,38,0.18)] backdrop-blur transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] sm:px-[26px] ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[90px] opacity-0"
      }`}
    >
      Plan Your Escape
    </Link>
  );
}
