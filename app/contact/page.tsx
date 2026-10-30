import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone, Mail, Clock, CalendarCheck } from "lucide-react";
import { hotel, waLink, bookMessage, bookingComLink } from "@/lib/config";

export const metadata: Metadata = { title: "Contact — Robin's Nest Hotel & Restaurant" };

export default function ContactPage() {
  const rows = [
    ...(hotel.phone ? [{ icon: Phone, label: "Call us", value: hotel.phoneDisplay, href: `tel:${hotel.phone}` }] : []),
    { icon: CalendarCheck, label: "Book a room", value: "Via Booking.com — instant confirmation", href: bookingComLink() },
    ...(hotel.whatsapp ? [{ icon: MessageCircle, label: "WhatsApp", value: "Chat now — fastest reply", href: waLink(bookMessage()) }] : []),
    ...(hotel.email ? [{ icon: Mail, label: "Email", value: hotel.email, href: `mailto:${hotel.email}` }] : []),
    { icon: MapPin, label: "Address", value: hotel.address, href: hotel.mapsUrl },
    { icon: Clock, label: "Check-in", value: `From ${hotel.checkIn} · check-out ${hotel.checkOut}`, href: undefined },
  ];
  return (
    <section className="mx-auto max-w-3xl px-4 pb-20 pt-32 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand-500">Contact</p>
      <h1 className="mt-1 font-display text-4xl font-semibold">Talk to the hotel</h1>
      <p className="mt-2 text-[15px] text-pine-700/85">The garden is waiting. Book a room, or just come up the hill and knock — Nima usually answers.</p>
      <div className="mt-7 space-y-3">
        {rows.map((r) => {
          const inner = (
            <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-card sm:p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine-50 text-pine-900"><r.icon size={20} /></span>
              <span><span className="block text-xs font-bold uppercase tracking-wider text-pine-700/60">{r.label}</span>
              <span className="block font-semibold text-pine-950">{r.value}</span></span>
            </div>
          );
          return r.href ? <a key={r.label} href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block active:scale-[0.99]">{inner}</a> : <div key={r.label}>{inner}</div>;
        })}
      </div>
    </section>
  );
}
