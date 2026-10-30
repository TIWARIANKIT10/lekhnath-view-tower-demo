"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, MapPin, MessageCircle, Phone } from "lucide-react";
import { hotel, directLink, bookingComLink } from "@/lib/config";

export default function StickyBar() {
  return (
    <motion.div
      initial={{ y: 80 }} animate={{ y: 0 }} transition={{ delay: 0.6, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-pine-100 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_-12px_rgb(12_31_26/0.3)] backdrop-blur md:hidden">
      <div className="grid grid-cols-3">
        {hotel.phone ? (
          <a href={`tel:${hotel.phone}`} className="flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-semibold text-pine-900 active:bg-pine-50">
            <Phone size={20} /> Call
          </a>
        ) : (
          <a href={hotel.mapsUrl} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-semibold text-pine-900 active:bg-pine-50">
            <MapPin size={20} /> Directions
          </a>
        )}
        {hotel.whatsapp ? (
          <a href={directLink()} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-semibold text-[#1FA855] active:bg-pine-50">
            <MessageCircle size={20} /> WhatsApp
          </a>
        ) : (
          <a href={bookingComLink()} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-semibold text-[#003580] active:bg-pine-50">
            <CalendarCheck size={20} /> Booking.com
          </a>
        )}
        <Link href="/book" className="m-1.5 ml-0 flex items-center justify-center rounded-xl bg-pine-900 text-sm font-bold text-white active:bg-pine-800">
          Book now
        </Link>
      </div>
    </motion.div>
  );
}
