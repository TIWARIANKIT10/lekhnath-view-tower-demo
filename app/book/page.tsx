import type { Metadata } from "next";
import BookingBar from "@/components/BookingBar";
import { hotel } from "@/lib/config";
import { Phone } from "lucide-react";

export const metadata: Metadata = { title: "Book direct — Hotel Seven Lake Paradise" };

export default function BookPage({ searchParams }: { searchParams: { room?: string } }) {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-20 pt-32 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand-500">Book direct</p>
      <h1 className="mt-1 font-display text-4xl font-semibold">Best rate, no middleman</h1>
      <p className="mt-2 text-[15px] text-pine-700/85">Pick your dates — we confirm on WhatsApp in minutes. Pay at the hotel.</p>
      <div className="mt-7"><BookingBar defaultRoom={searchParams.room ?? ""} /></div>
      <div className="mt-5 grid gap-3 text-center text-sm font-medium text-pine-800 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-4 shadow-card">Check-in<br /><span className="font-bold text-pine-950">{hotel.checkIn}</span></div>
        <div className="rounded-2xl bg-white p-4 shadow-card">Check-out<br /><span className="font-bold text-pine-950">{hotel.checkOut}</span></div>
        <a href={`tel:${hotel.phone}`} className="flex items-center justify-center gap-2 rounded-2xl bg-white p-4 shadow-card"><Phone size={16} /> {hotel.phoneDisplay}</a>
      </div>
    </section>
  );
}
