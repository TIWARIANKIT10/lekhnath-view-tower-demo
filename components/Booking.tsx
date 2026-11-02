"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays, Users, BedDouble, Minus, Plus, X, Check, ArrowLeft,
  MessageCircle, ShieldCheck, Sparkles, ChevronRight,
} from "lucide-react";
import { HOTEL, ROOMS, EXTRAS, type Room } from "@/data/site";

// Booking flow, modelled on how a modern hotel booking engine behaves
// (dates → room & rate → extras → guest details → payment choice),
// but confirmed the Nepali way: the completed request opens WhatsApp
// to the retreat with every detail filled in. No prepayment.

function isoPlus(days: number) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}
function fmt(iso: string) {
  if (!iso) return "—";
  return new Date(iso + "T12:00:00").toLocaleDateString("en-GB", {
    weekday: "short", day: "numeric", month: "short", year: "numeric",
  });
}
function nightsBetween(a: string, b: string) {
  const ms = new Date(b + "T12:00:00").getTime() - new Date(a + "T12:00:00").getTime();
  return Math.max(0, Math.round(ms / 86400000));
}

export default function Booking() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [checkIn, setCheckIn] = useState(isoPlus(7));
  const [checkOut, setCheckOut] = useState(isoPlus(9));
  const [guests, setGuests] = useState(2);
  const [roomCount, setRoomCount] = useState(1);
  const [roomId, setRoomId] = useState(ROOMS[0].id);
  const [extraQty, setExtraQty] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requests, setRequests] = useState("");
  const [pay, setPay] = useState<"property" | "card">("property");
  const [tried, setTried] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { roomId?: string } | undefined;
      if (detail?.roomId) setRoomId(detail.roomId);
      setStep(1);
      setOpen(true);
    };
    window.addEventListener("raniban:book", handler);
    return () => window.removeEventListener("raniban:book", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open ]);

  const nights = nightsBetween(checkIn, checkOut);
  const room = useMemo(() => ROOMS.find((r) => r.id === roomId) ?? ROOMS[0], [roomId]);
  const roomTotal = room.rate * Math.max(1, nights) * roomCount;
  const extrasTotal = EXTRAS.reduce((s, x) => s + x.price * (extraQty[x.id] ?? 0), 0);
  const total = roomTotal + extrasTotal;
  const validDetails = name.trim().length >= 2 && phone.replace(/\D/g, "").length >= 7;

  const summaryLines = [
    `Namaste Raniban Retreat, I would like to book a stay.`,
    ``,
    `Room: ${room.name} × ${roomCount}`,
    `Check-in: ${fmt(checkIn)}`,
    `Check-out: ${fmt(checkOut)} (${nights} night${nights === 1 ? "" : "s"})`,
    `Guests: ${guests}`,
    ...EXTRAS.filter((x) => (extraQty[x.id] ?? 0) > 0).map(
      (x) => `Extra: ${x.name} × ${extraQty[x.id]}`
    ),
    `Estimated total: $${total} (taxes included, breakfast included)`,
    `Payment: ${pay === "property" ? "Pay at the retreat" : "Card guarantee"}`,
    ``,
    `Name: ${name}`,
    phone ? `Phone: ${phone}` : "",
    email ? `Email: ${email}` : "",
    requests ? `Special requests: ${requests}` : "",
  ].filter(Boolean);
  const waUrl = `https://wa.me/${HOTEL.whatsapp}?text=${encodeURIComponent(summaryLines.join("\n"))}`;

  const stepCls = (n: number) =>
    `flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider ${
      step === n ? "text-pine" : step > n ? "text-gold" : "text-ink/35"
    }`;

  return (
    <>
      {/* ---------- booking bar (the entry point) ---------- */}
      <section id="book" className="relative z-20 mx-auto -mt-2 w-full max-w-6xl px-4 sm:px-6">
        <div className="reveal is-visible rounded-3xl bg-white p-4 shadow-xl shadow-pine/10 ring-1 ring-pine/10 sm:p-5">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-[1fr_1fr_0.7fr_0.7fr_auto]">
            <label className="block">
              <span className="mb-1 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-pine/70">
                <CalendarDays className="h-3.5 w-3.5" /> Check-in
              </span>
              <input type="date" value={checkIn} min={isoPlus(0)}
                onChange={(e) => {
                  const v = e.target.value;
                  setCheckIn(v);
                  if (nightsBetween(v, checkOut) < 1) {
                    const d = new Date(v + "T12:00:00");
                    d.setDate(d.getDate() + 2);
                    setCheckOut(d.toISOString().slice(0, 10));
                  }
                }}
                className="w-full rounded-xl bg-cream px-3 py-2.5 font-semibold text-ink outline-none ring-gold/0 transition focus:ring-2 focus:ring-gold" />
            </label>
            <label className="block">
              <span className="mb-1 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-pine/70">
                <CalendarDays className="h-3.5 w-3.5" /> Check-out
              </span>
              <input type="date" value={checkOut} min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full rounded-xl bg-cream px-3 py-2.5 font-semibold text-ink outline-none transition focus:ring-2 focus:ring-gold" />
            </label>
            <label className="block">
              <span className="mb-1 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-pine/70">
                <Users className="h-3.5 w-3.5" /> Guests
              </span>
              <select value={guests} onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full rounded-xl bg-cream px-3 py-2.5 font-semibold outline-none transition focus:ring-2 focus:ring-gold">
                {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n} guest{n > 1 ? "s" : ""}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="mb-1 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-pine/70">
                <BedDouble className="h-3.5 w-3.5" /> Rooms
              </span>
              <select value={roomCount} onChange={(e) => setRoomCount(Number(e.target.value))}
                className="w-full rounded-xl bg-cream px-3 py-2.5 font-semibold outline-none transition focus:ring-2 focus:ring-gold">
                {[1, 2, 3].map((n) => <option key={n} value={n}>{n} room{n > 1 ? "s" : ""}</option>)}
              </select>
            </label>
            <div className="col-span-2 flex items-end lg:col-span-1">
              <button onClick={() => { setStep(1); setOpen(true); }}
                className="w-full rounded-xl bg-pine px-6 py-3 text-sm font-bold uppercase tracking-wider text-cream transition hover:bg-pine-soft active:scale-[0.98] lg:w-auto">
                Check availability
              </button>
            </div>
          </div>
          <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-ink/55">
            <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-pine" /> No prepayment — pay at the retreat</span>
            <span>Free cancellation until 48 hours before check-in</span>
            <span>Breakfast &amp; taxes included</span>
          </p>
        </div>
      </section>

      {/* ---------- booking modal ---------- */}
      {open && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-pine-deep/70 backdrop-blur-sm sm:items-center sm:p-4" role="dialog" aria-modal="true">
          <div className="fade-in absolute inset-0" onClick={() => setOpen(false)} />
          <div className="sheet-up relative flex max-h-[92svh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-cream shadow-2xl sm:rounded-3xl">
            <div className="flex items-center justify-between border-b border-pine/10 px-5 py-4">
              <div className="flex items-center gap-4 sm:gap-5">
                <span className={stepCls(1)}>1 · Stay</span>
                <ChevronRight className="h-3.5 w-3.5 text-ink/30" />
                <span className={stepCls(2)}>2 · Extras</span>
                <ChevronRight className="h-3.5 w-3.5 text-ink/30" />
                <span className={stepCls(3)}>3 · Details</span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close booking"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-pine/5 transition hover:bg-pine/10 active:scale-95">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              {step === 1 && (
                <div>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="block">
                      <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-pine/70">Check-in</span>
                      <input type="date" value={checkIn} min={isoPlus(0)} onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full rounded-xl bg-white px-3 py-2.5 font-semibold outline-none ring-1 ring-pine/10 focus:ring-2 focus:ring-gold" />
                    </label>
                    <label className="block">
                      <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-pine/70">Check-out</span>
                      <input type="date" value={checkOut} min={checkIn} onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full rounded-xl bg-white px-3 py-2.5 font-semibold outline-none ring-1 ring-pine/10 focus:ring-2 focus:ring-gold" />
                    </label>
                  </div>
                  <p className="mt-2 text-sm font-medium text-ink/60">
                    {nights > 0 ? `${nights} night${nights === 1 ? "" : "s"} · ${guests} guest${guests > 1 ? "s" : ""} · ${roomCount} room${roomCount > 1 ? "s" : ""}` : "Please choose a check-out date after check-in."}
                  </p>
                  <div className="mt-4 space-y-3">
                    {ROOMS.map((r) => (
                      <button key={r.id} onClick={() => setRoomId(r.id)}
                        className={`flex w-full gap-3 rounded-2xl bg-white p-3 text-left ring-2 transition active:scale-[0.99] ${
                          roomId === r.id ? "ring-gold" : "ring-transparent hover:ring-pine/15"
                        }`}>
                        <img src={r.img} alt={r.name} className="h-20 w-24 shrink-0 rounded-xl object-cover sm:h-24 sm:w-32" loading="lazy" />
                        <span className="min-w-0 flex-1">
                          <span className="flex items-start justify-between gap-2">
                            <span className="font-serif text-lg font-semibold leading-tight text-pine">{r.name}</span>
                            {roomId === r.id && <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />}
                          </span>
                          <span className="mt-0.5 block text-[13px] text-ink/60">{r.bed} · up to {r.guests} guests · breakfast included</span>
                          <span className="mt-1 block text-sm font-bold text-pine">
                            ${r.rate} <span className="font-medium text-ink/50">/ night · taxes included</span>
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <p className="flex items-center gap-2 font-serif text-xl font-semibold text-pine">
                    <Sparkles className="h-5 w-5 text-gold" /> Make it special
                  </p>
                  <p className="mt-1 text-sm text-ink/60">Optional extras — pay at the retreat, nothing is charged now.</p>
                  <div className="mt-4 divide-y divide-pine/8 rounded-2xl bg-white ring-1 ring-pine/10">
                    {EXTRAS.map((x) => {
                      const q = extraQty[x.id] ?? 0;
                      return (
                        <div key={x.id} className="flex items-center gap-3 px-4 py-3.5">
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-bold text-ink">{x.name}</p>
                            <p className="truncate text-[13px] text-ink/55">{x.detail}</p>
                            <p className="text-[13px] font-semibold text-pine">${x.price} <span className="font-medium text-ink/45">{x.unit}</span></p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button aria-label={`Remove ${x.name}`} onClick={() => setExtraQty((s) => ({ ...s, [x.id]: Math.max(0, q - 1) }))}
                              className="flex h-9 w-9 items-center justify-center rounded-full bg-cream ring-1 ring-pine/15 transition active:scale-90 disabled:opacity-35" disabled={q === 0}>
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-5 text-center text-sm font-bold">{q}</span>
                            <button aria-label={`Add ${x.name}`} onClick={() => setExtraQty((s) => ({ ...s, [x.id]: Math.min(9, q + 1) }))}
                              className="flex h-9 w-9 items-center justify-center rounded-full bg-pine text-cream transition active:scale-90">
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="grid gap-5 sm:grid-cols-[1fr_240px]">
                  <div className="space-y-3">
                    <label className="block">
                      <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-pine/70">Full name *</span>
                      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name"
                        className="w-full rounded-xl bg-white px-3 py-2.5 font-medium outline-none ring-1 ring-pine/10 focus:ring-2 focus:ring-gold" />
                    </label>
                    <label className="block">
                      <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-pine/70">Phone / WhatsApp *</span>
                      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+977 …" inputMode="tel" autoComplete="tel"
                        className="w-full rounded-xl bg-white px-3 py-2.5 font-medium outline-none ring-1 ring-pine/10 focus:ring-2 focus:ring-gold" />
                    </label>
                    <label className="block">
                      <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-pine/70">Email</span>
                      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" inputMode="email" autoComplete="email"
                        className="w-full rounded-xl bg-white px-3 py-2.5 font-medium outline-none ring-1 ring-pine/10 focus:ring-2 focus:ring-gold" />
                    </label>
                    <label className="block">
                      <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-pine/70">Special requests</span>
                      <textarea value={requests} onChange={(e) => setRequests(e.target.value)} rows={3} placeholder="High floor, quiet room, anniversary…"
                        className="w-full resize-none rounded-xl bg-white px-3 py-2.5 font-medium outline-none ring-1 ring-pine/10 focus:ring-2 focus:ring-gold" />
                    </label>
                    <div className="space-y-2 pt-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-pine/70">Payment</p>
                      {([
                        ["property", "Pay at the retreat", "No prepayment — settle when you arrive"],
                        ["card", "Card guarantee", "Card only holds the room; you still pay at the retreat"],
                      ] as const).map(([v, t, d]) => (
                        <button key={v} onClick={() => setPay(v)}
                          className={`flex w-full items-center gap-3 rounded-xl bg-white px-3.5 py-3 text-left ring-2 transition ${pay === v ? "ring-gold" : "ring-transparent"}`}>
                          <span className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${pay === v ? "border-gold bg-gold" : "border-pine/25"}`}>
                            {pay === v && <Check className="h-3 w-3 text-white" />}
                          </span>
                          <span>
                            <span className="block text-sm font-bold">{t}</span>
                            <span className="block text-[13px] text-ink/55">{d}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                    {tried && !validDetails && (
                      <p className="text-sm font-semibold text-red-700">Please add your name and a phone number so the retreat can confirm with you.</p>
                    )}
                  </div>
                  <aside className="h-fit rounded-2xl bg-pine p-4 text-cream">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gold-soft">Your stay</p>
                    <p className="mt-2 font-serif text-lg font-semibold leading-snug">{room.name} × {roomCount}</p>
                    <dl className="mt-3 space-y-1.5 text-[13px] text-cream/85">
                      <div className="flex justify-between gap-2"><dt>Check-in</dt><dd className="text-right font-semibold text-cream">{fmt(checkIn)}</dd></div>
                      <div className="flex justify-between gap-2"><dt>Check-out</dt><dd className="text-right font-semibold text-cream">{fmt(checkOut)}</dd></div>
                      <div className="flex justify-between gap-2"><dt>Guests</dt><dd className="font-semibold text-cream">{guests}</dd></div>
                      <div className="flex justify-between gap-2"><dt>Room</dt><dd className="font-semibold text-cream">${roomTotal}</dd></div>
                      {extrasTotal > 0 && <div className="flex justify-between gap-2"><dt>Extras</dt><dd className="font-semibold text-cream">${extrasTotal}</dd></div>}
                    </dl>
                    <div className="mt-3 flex items-baseline justify-between border-t border-white/15 pt-3">
                      <span className="text-sm font-bold">Total</span>
                      <span className="font-serif text-2xl font-bold text-gold-soft">${total}</span>
                    </div>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-cream/70">
                      Taxes &amp; breakfast included. Free cancellation until 48 hours before check-in.
                    </p>
                  </aside>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 border-t border-pine/10 bg-white/60 px-5 py-4">
              {step > 1 ? (
                <button onClick={() => setStep(step - 1)}
                  className="flex items-center gap-1.5 rounded-full px-4 py-3 text-sm font-bold text-pine transition hover:bg-pine/5 active:scale-95">
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
              ) : <span className="flex-1" />}
              <div className="flex-1 text-right">
                <span className="mr-3 hidden text-sm font-semibold text-ink/60 sm:inline">
                  {nights > 0 ? `${nights} night${nights === 1 ? "" : "s"} · ` : ""}Total <span className="font-serif text-lg font-bold text-pine">${total}</span>
                </span>
                {step < 3 ? (
                  <button onClick={() => setStep(step + 1)} disabled={nights < 1}
                    className="rounded-full bg-pine px-6 py-3 text-sm font-bold uppercase tracking-wider text-cream transition hover:bg-pine-soft active:scale-[0.98] disabled:opacity-40">
                    Continue
                  </button>
                ) : (
                  <a
                    href={validDetails ? waUrl : undefined}
                    target={validDetails ? "_blank" : undefined}
                    rel="noreferrer"
                    onClick={(e) => { if (!validDetails) { e.preventDefault(); setTried(true); } }}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#1faa55] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:brightness-105 active:scale-[0.98]"
                  >
                    <MessageCircle className="h-4 w-4" /> Confirm on WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
