"use client";
// Room card v2: Framer Motion lift + image zoom on hover, dual booking CTAs.
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BedDouble, Users } from "lucide-react";
import type { Room } from "@/data/content";
import { bookingComLink } from "@/lib/config";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-card hover:shadow-soft">
      <Link href="/rooms" className="relative block aspect-[4/3] overflow-hidden">
        <Image src={room.img} alt={room.name} fill sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-950/35 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        {room.tag && <span className="absolute left-3 top-3 rounded-full bg-sand-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">{room.tag}</span>}
        <span className="absolute bottom-3 right-3 rounded-full bg-pine-950/80 px-3 py-1.5 text-sm font-bold text-white backdrop-blur">from ${room.price}<span className="text-xs font-medium text-white/70"> /night</span></span>
      </Link>
      <div className="p-4 sm:p-5">
        <h3 className="font-display text-xl font-semibold text-pine-950">{room.name}</h3>
        <p className="mt-0.5 text-sm text-pine-700/80">{room.line}</p>
        <div className="mt-3 flex gap-4 text-[13px] font-medium text-pine-800">
          <span className="flex items-center gap-1.5"><BedDouble size={15} /> {room.bed}</span>
          <span className="flex items-center gap-1.5"><Users size={15} /> {room.guests} guests</span>
        </div>
        <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
          <Link href={`/book?room=${encodeURIComponent(room.name)}`}
            className="rounded-xl bg-pine-900 py-3 text-center text-sm font-bold text-white transition hover:bg-pine-800">
            Book direct
          </Link>
          <a href={bookingComLink()} target="_blank" rel="noreferrer"
            className="rounded-xl bg-[#003580]/10 px-3.5 py-3 text-center text-sm font-bold text-[#003580] transition hover:bg-[#003580]/15">
            Booking.com
          </a>
        </div>
      </div>
    </motion.article>
  );
}
