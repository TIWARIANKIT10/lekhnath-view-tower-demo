import type { Metadata } from "next";
import Image from "next/image";
import { gallery } from "@/data/content";

export const metadata: Metadata = { title: "Gallery — Grand Hotel Begnas" };

export default function GalleryPage() {
  return (
    <section className="wrap pb-20 pt-32 md:pt-40">
      <p className="over">Gallery</p>
      <h1 className="mt-3 font-display text-[40px] font-medium leading-tight md:text-5xl">The view sells itself</h1>
      <div className="mt-10 columns-2 gap-4 md:columns-3 [&>figure]:mb-7">
        {gallery.map((g, i) => (
          <figure key={g.label} className="break-inside-avoid">
            <div className="relative overflow-hidden">
              <Image src={g.img} alt={g.label} width={800} height={i % 2 ? 1000 : 640} className="w-full object-cover" />
            </div>
            <figcaption className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft">{g.label}</figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-4 text-xs text-ink-soft">
        Placeholder photographs — the live site will carry the hotel's own photography, shot on location.
      </p>
    </section>
  );
}
