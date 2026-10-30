import type { Metadata } from "next";
import BookClient from "@/components/BookClient";

export const metadata: Metadata = { title: "Reservations — Grand Hotel Begnas" };

export default function BookPage() {
  return (
    <section className="wrap max-w-3xl pb-20 pt-32 md:pt-40">
      <p className="over">04 — Reservations</p>
      <h1 className="mt-3 font-display text-[40px] font-medium leading-tight md:text-5xl">Book your stay</h1>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
        Two ways, same dates: call the hotel direct for the best rate, or confirm instantly on Booking.com.
      </p>
      <div className="mt-9">
        <BookClient />
      </div>
    </section>
  );
}
