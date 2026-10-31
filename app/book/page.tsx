import type { Metadata } from "next";
import BookClient from "@/components/BookClient";

export const metadata: Metadata = { title: "Reservations — Grand Hotel Begnas" };

export default function BookPage() {
  return (
    <section className="wrap max-w-3xl pb-16 pt-32 sm:pb-24 md:pt-44">
      <div className="text-center">
        <p className="eyebrow">Reservations</p>
        <h1 className="mt-[18px] font-display text-[clamp(38px,7vw,56px)] font-normal leading-[1.1]">Book Your Stay</h1>
        <p className="mx-auto mt-4 max-w-[32em] text-[15.5px] leading-[1.75] text-ink-soft">
          Two ways, same dates: call the hotel direct for the best rate, or confirm instantly on Booking.com.
        </p>
      </div>
      <div className="mt-12">
        <BookClient />
      </div>
    </section>
  );
}
