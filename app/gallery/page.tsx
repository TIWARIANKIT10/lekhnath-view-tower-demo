import type { Metadata } from "next";
import Image from "next/image";
import { gallery } from "@/data/content";

export const metadata: Metadata = { title: "Gallery — Grand Hotel Begnas" };

export default function GalleryPage() {
  return (
    <section className="wrap pb-24 pt-32 md:pt-44">
      <div className="text-center">
        <p className="eyebrow">Gallery</p>
        <h1 className="mt-[18px] font-display text-[clamp(38px,7vw,56px)] font-normal leading-[1.1]">The View Sells Itself</h1>
      </div>
      <div className="mt-12 columns-2 gap-4 md:columns-3 [&>figure]:mb-7">
        {gallery.map((g, i) => (
          <figure key={g.label} className="break-inside-avoid">
            <div className="overflow-hidden">
              <Image src={g.img} alt={g.label} width={800} height={i % 2 ? 1000 : 640} className="w-full object-cover" />
            </div>
            <figcaption className="mt-2 text-[11px] uppercase tracking-[0.2em] text-ink-mute">{g.label}</figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-ink-mute">
        Placeholder photographs — the live site will carry the hotel's own photography, shot on location.
      </p>
    </section>
  );
}
