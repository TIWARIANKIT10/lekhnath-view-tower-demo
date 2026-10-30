import type { Metadata } from "next";
import Image from "next/image";
import { gallery } from "@/data/content";

export const metadata: Metadata = { title: "Gallery — Hotel Seven Lake Paradise" };

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand-500">Gallery</p>
      <h1 className="mt-1 font-display text-4xl font-semibold">The view sells itself</h1>
      <div className="mt-8 columns-2 gap-3 md:columns-3 [&>figure]:mb-3">
        {gallery.map((g, i) => (
          <figure key={g.label} className="relative overflow-hidden rounded-2xl">
            <Image src={g.img} alt={g.label} width={800} height={i % 2 ? 1000 : 640} className="w-full object-cover" />
            <figcaption className="absolute bottom-2 left-2 rounded-full bg-pine-950/75 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">{g.label}</figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-6 text-xs text-pine-700/60">Demo photos are placeholders — the live site will use the hotel’s real photos, shot on location.</p>
    </section>
  );
}
