"use client";

import { useEffect, useRef, useState } from "react";
import {
  Wifi, Coffee, Car, Sparkles, Star, MapPin, Phone, Mail, Clock,
  ChevronLeft, ChevronRight, MessageCircle, Leaf, Sun, Mountain,
} from "lucide-react";
import { HOTEL, ROOMS, EXPERIENCES, REVIEWS, FAQS } from "@/data/site";
import { Reveal, Eyebrow, Counter } from "./ui";
import { openBooking } from "./Header";

/* ---------------- Welcome ---------------- */
export function Welcome() {
  return (
    <section id="retreat" className="relative overflow-hidden py-20 sm:py-24">
      <div aria-hidden className="word-drift outline-word pointer-events-none absolute -top-2 left-0 select-none whitespace-nowrap font-serif text-[26vw] font-bold leading-none sm:text-[19rem]">
        RANIBAN
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Welcome to Raniban Retreat</Eyebrow>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.08] text-pine sm:text-5xl">
            A quieter Pokhara,<br />in the Queen&rsquo;s Forest
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-ink/70">
            Raniban — the Queen&rsquo;s Forest — shelters a small boutique retreat on the hill of the
            World Peace Pagoda. Fourteen rooms and Gurung-style cottages face one unbroken frame:
            the Annapurna range, Phewa Lake and the whole Pokhara valley. The retreat runs on
            sunshine, pours spring water, and is cared for by the neighbourhood it sits in.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5 text-[13px] font-semibold text-pine">
            <span className="flex items-center gap-1.5 rounded-full bg-mist px-3 py-1.5"><Sun className="h-4 w-4 text-gold" /> 100% solar powered</span>
            <span className="flex items-center gap-1.5 rounded-full bg-mist px-3 py-1.5"><Leaf className="h-4 w-4 text-gold" /> Eco retreat, est. 2012</span>
            <span className="flex items-center gap-1.5 rounded-full bg-mist px-3 py-1.5"><Mountain className="h-4 w-4 text-gold" /> Renovated 2024</span>
          </div>
          <div className="mt-10 grid grid-cols-4 gap-3 border-t border-pine/10 pt-7 text-center sm:text-left">
            {[
              { v: 14, s: "", label: "Rooms & cottages" },
              { v: 360, s: "°", label: "Panorama" },
              { v: 100, s: "%", label: "Solar powered" },
              { v: 9.5, s: "", label: "Trip.com rating", d: 1 },
            ].map((c) => (
              <div key={c.label}>
                <p className="font-serif text-3xl font-semibold text-pine sm:text-4xl">
                  <Counter to={c.v} suffix={c.s} decimals={c.d ?? 0} />
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-ink/50">{c.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative">
            <img
              src="https://rajdhanidaily.com/wp-content/uploads/2021/01/pokhara-tourism-fewa-lake.jpg"
              alt="Phewa Lake and Pokhara valley below the retreat"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl shadow-pine/20"
              loading="lazy"
            />
            <div className="absolute -bottom-5 left-5 rounded-2xl bg-pine px-5 py-4 text-cream shadow-xl">
              <p className="font-serif text-lg font-semibold leading-tight">Sunrise, served daily</p>
              <p className="text-[13px] text-cream/75">First light on Machhapuchhre from 5:45 AM</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Marquee ---------------- */
export function Marquee() {
  const items = ["Annapurna Panorama", "Phewa Lake Below", "World Peace Pagoda", "Infinity Pool", "Solar Powered", "Forest Silence", "Sunrise Terrace", "Gurung Cottages"];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-pine/10 bg-sand/60 py-3.5" aria-hidden>
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 text-[12px] font-bold uppercase tracking-[0.28em] text-pine/70">
            {t} <Star className="h-3 w-3 fill-gold text-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Stays ---------------- */
export function Stays() {
  return (
    <section id="stays" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
      <Reveal className="max-w-2xl">
        <Eyebrow>Stay with us</Eyebrow>
        <h2 className="mt-3 font-serif text-4xl font-medium leading-tight text-pine sm:text-5xl">Rooms &amp; cottages</h2>
        <p className="mt-4 leading-relaxed text-ink/70">
          Every stay faces the mountains. Cottages borrow their shape from traditional Gurung homes;
          premium rooms are the retreat&rsquo;s newest addition. Breakfast is always included.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {ROOMS.map((r, i) => (
          <Reveal key={r.id} delay={(i % 2) * 120}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-pine/5 ring-1 ring-pine/10">
              <div className="relative overflow-hidden">
                <img src={r.img} alt={r.name} loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.06]" />
                {r.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-pine-deep/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gold-soft backdrop-blur">
                    {r.tag}
                  </span>
                )}
                <span className="absolute bottom-4 right-4 rounded-full bg-cream/95 px-3.5 py-1.5 text-sm font-bold text-pine shadow">
                  from ${r.rate} <span className="font-medium text-ink/50">/ night</span>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">{r.view}</p>
                <h3 className="mt-1.5 font-serif text-[26px] font-semibold leading-tight text-pine">{r.name}</h3>
                <p className="mt-1 text-[13px] font-semibold text-ink/55">{r.bed} · Sleeps {r.guests} · {r.size}</p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/70">{r.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {r.amenities.map((a) => (
                    <li key={a} className="rounded-full bg-cream px-2.5 py-1 text-[12px] font-semibold text-pine/80">{a}</li>
                  ))}
                </ul>
                <button onClick={() => openBooking(r.id)}
                  className="mt-5 w-full rounded-full bg-pine py-3 text-sm font-bold uppercase tracking-wider text-cream transition hover:bg-pine-soft active:scale-[0.98] sm:w-auto sm:px-7">
                  Book this stay
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Experiences ---------------- */
export function Experiences() {
  return (
    <section id="experiences" className="bg-pine-deep py-20 text-cream sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow light>Days at Raniban</Eyebrow>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-tight sm:text-5xl">Slow days, high views</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/70">
            Swim, steam, walk the forest, or do gloriously little on the terrace — the retreat is built for unwinding.
          </p>
        </Reveal>
      </div>
      <Reveal delay={120}>
        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:px-6 lg:justify-center">
          {EXPERIENCES.map((x) => (
            <article key={x.title} className="group w-[270px] shrink-0 snap-start overflow-hidden rounded-[1.5rem] bg-white/5 ring-1 ring-white/10 sm:w-[300px]">
              <div className="overflow-hidden">
                <img src={x.img} alt={x.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.07]" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-[22px] font-semibold">{x.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream/70">{x.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap gap-2.5 px-5 sm:px-6">
        {[
          { icon: Wifi, t: "Free Wi-Fi" }, { icon: Coffee, t: "Breakfast included" },
          { icon: Car, t: "Free parking" }, { icon: Sparkles, t: "Spa & sauna" },
          { icon: Clock, t: "24-hour front desk" }, { icon: Leaf, t: "Spring water" },
        ].map((f) => (
          <span key={f.t} className="flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-2 text-[13px] font-semibold text-cream/85 ring-1 ring-white/10">
            <f.icon className="h-4 w-4 text-gold-soft" /> {f.t}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Dining (parallax band) ---------------- */
export function Dining() {
  const bandRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const band = bandRef.current, img = imgRef.current;
        if (!band || !img) return;
        const r = band.getBoundingClientRect();
        const progress = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        img.style.transform = `translateY(${progress * -36}px) scale(1.15)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="dining" className="relative">
      <div ref={bandRef} className="relative flex min-h-[520px] items-end overflow-hidden sm:items-center">
        <img ref={imgRef} src="https://reportergourmet.com/upload/multimedia/hotel-belvedere-Panorama-2.jpg"
          alt="Dining terrace with a panoramic mountain view" loading="lazy"
          className="absolute inset-0 h-full w-full scale-[1.15] object-cover will-change-transform" />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/85 via-pine-deep/25 to-transparent sm:bg-gradient-to-r sm:from-pine-deep/80 sm:via-pine-deep/35 sm:to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-6">
          <Reveal className="max-w-xl text-cream">
            <Eyebrow light>Dining</Eyebrow>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-tight sm:text-5xl">Breakfast with the<br />mountains, dinner<br />with the valley lights</h2>
            <p className="mt-4 max-w-md leading-relaxed text-cream/85">
              The restaurant serves Nepali and continental plates through the day, with room service
              if the terrace has claimed you. Ask the kitchen about tonight&rsquo;s candlelight setup.
            </p>
            <button onClick={() => openBooking()}
              className="mt-6 rounded-full bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-pine-deep transition hover:bg-gold-soft active:scale-95">
              Add a candlelight dinner
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Offer ---------------- */
export function Offer() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-pine to-pine-deep p-7 text-cream shadow-2xl shadow-pine/25 sm:p-10">
          <Star className="absolute -right-6 -top-6 h-40 w-40 text-gold/10" />
          <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <Eyebrow light>Seasonal package</Eyebrow>
              <h2 className="mt-2 font-serif text-3xl font-medium leading-tight sm:text-4xl">Sunrise &amp; Unwind — two nights in the forest</h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-cream/80">
                Two nights in a view room, breakfast on the terrace, one sauna &amp; steam session,
                and a guided sunrise walk to the World Peace Pagoda. The Raniban reset, in one booking.
              </p>
              <p className="mt-3 text-[13px] font-semibold text-gold-soft">Package details confirmed on WhatsApp · Pay at the retreat</p>
            </div>
            <button onClick={() => openBooking()}
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-pine-deep transition hover:bg-gold-soft active:scale-95">
              Check rate
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Reviews ---------------- */
export function Reviews() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, [paused]);
  const r = REVIEWS[idx];
  return (
    <section id="reviews" className="bg-sand/50 py-20 sm:py-24"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
        <Reveal>
          <Eyebrow>Guest words</Eyebrow>
          <div className="mt-4 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold text-gold" />
            ))}
          </div>
          <div key={idx} className="quote-in">
            <blockquote className="mx-auto mt-5 max-w-2xl font-serif text-[26px] font-medium leading-snug text-pine sm:text-[32px]">
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            <p className="mt-5 text-sm font-bold text-ink">{r.name}</p>
            <p className="text-[13px] text-ink/55">{r.meta}</p>
          </div>
          <div className="mt-7 flex items-center justify-center gap-3">
            <button aria-label="Previous review" onClick={() => setIdx((idx - 1 + REVIEWS.length) % REVIEWS.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-pine/15 transition hover:bg-cream active:scale-95">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button key={i} aria-label={`Review ${i + 1}`} onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${i === idx ? "w-7 bg-gold" : "w-2 bg-pine/25"}`} />
              ))}
            </div>
            <button aria-label="Next review" onClick={() => setIdx((idx + 1) % REVIEWS.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-pine/15 transition hover:bg-cream active:scale-95">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-10 flex flex-wrap items-stretch justify-center gap-3">
            {HOTEL.ratings.map((x) => (
              <div key={x.label} className="rounded-2xl bg-white px-5 py-3.5 ring-1 ring-pine/10">
                <p className="font-serif text-xl font-bold text-pine">{x.score}</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-ink/50">{x.label} · {x.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ + Find us ---------------- */
export function Faq() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6">
      <Reveal>
        <Eyebrow>Good to know</Eyebrow>
        <h2 className="mt-3 font-serif text-4xl font-medium text-pine">Before you climb up</h2>
      </Reveal>
      <div className="mt-8 divide-y divide-pine/10 rounded-[1.5rem] bg-white ring-1 ring-pine/10">
        {FAQS.map((f, i) => (
          <div key={f.q}>
            <button onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
              <span className="font-serif text-lg font-semibold text-pine">{f.q}</span>
              <ChevronRight className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${openIdx === i ? "rotate-90" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ${openIdx === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <p className="overflow-hidden px-5 text-[15px] leading-relaxed text-ink/70">
                <span className="block pb-5">{f.a}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FindUs() {
  return (
    <section id="find-us" className="mx-auto max-w-6xl px-5 pb-24 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <Eyebrow>Find us</Eyebrow>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-tight text-pine">Up the forest road,<br />below the Pagoda</h2>
          <p className="mt-4 leading-relaxed text-ink/70">{HOTEL.address}</p>
          <ul className="mt-6 space-y-3 text-[15px] font-medium text-ink/75">
            <li className="flex gap-3"><Car className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> ~35 minutes from Pokhara International Airport · ~10 from Lakeside by taxi</li>
            <li className="flex gap-3"><Leaf className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> Or climb the forest trail: about 522 stone steps from the lakeside</li>
            <li className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> Check-in {HOTEL.checkIn} · Check-out {HOTEL.checkOut} · Front desk 24 hours</li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> {HOTEL.phoneDisplay}</li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> {HOTEL.email}</li>
          </ul>
          <a href={HOTEL.mapsLink} target="_blank" rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3 text-sm font-bold uppercase tracking-wider text-cream transition hover:bg-pine-soft active:scale-95">
            <MapPin className="h-4 w-4" /> Open in Google Maps
          </a>
        </Reveal>
        <Reveal delay={140}>
          <div className="h-full min-h-[320px] overflow-hidden rounded-[1.75rem] shadow-lg shadow-pine/10 ring-1 ring-pine/10">
            <iframe title="Raniban Retreat on the map" src={HOTEL.mapsUrl}
              className="h-full min-h-[320px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer + sticky mobile bar ---------------- */
export function Footer() {
  return (
    <footer className="bg-pine-deep pb-28 text-cream sm:pb-10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl font-semibold">Raniban <span className="text-gold-soft">Retreat</span></p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.32em] text-cream/60">The Queen&rsquo;s Forest · Pokhara</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            A small solar-powered retreat above Phewa Lake — silence, sunrise, and the whole
            Annapurna range from your window.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold-soft">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm font-medium text-cream/80">
            <li><a className="transition hover:text-gold-soft" href="#retreat">The Retreat</a></li>
            <li><a className="transition hover:text-gold-soft" href="#stays">Stays</a></li>
            <li><a className="transition hover:text-gold-soft" href="#experiences">Experiences</a></li>
            <li><a className="transition hover:text-gold-soft" href="#dining">Dining</a></li>
            <li><a className="transition hover:text-gold-soft" href="#reviews">Guest Words</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold-soft">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm font-medium text-cream/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {HOTEL.location}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {HOTEL.phoneDisplay}</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {HOTEL.email}</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {HOTEL.emailInfo}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-[13px] text-cream/50 sm:px-6">
          © {new Date().getFullYear()} Raniban Retreat, Pokhara. Concept website — rates and photography to be confirmed with the retreat.
        </p>
      </div>
    </footer>
  );
}

export function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-pine/10 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_24px_rgba(18,38,25,0.12)] backdrop-blur sm:hidden">
      <a href={`tel:${HOTEL.phoneTel}`} className="flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-bold text-pine active:bg-cream">
        <Phone className="h-5 w-5" /> Call
      </a>
      <a href={`https://wa.me/${HOTEL.whatsapp}?text=${encodeURIComponent("Namaste Raniban Retreat, I have a question about a stay.")}`}
        target="_blank" rel="noreferrer" className="flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-bold text-[#128c4a] active:bg-cream">
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>
      <button onClick={() => openBooking()} className="flex flex-col items-center gap-0.5 bg-pine py-2.5 text-[11px] font-bold text-cream active:bg-pine-soft">
        <Star className="h-5 w-5 text-gold-soft" /> Book Now
      </button>
    </div>
  );
}
