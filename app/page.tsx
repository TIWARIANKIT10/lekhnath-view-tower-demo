import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Booking from "@/components/Booking";
import {
  Welcome, Marquee, Stays, Experiences, Dining, Offer, Reviews, Faq, FindUs, Footer, StickyBar,
} from "@/components/Sections";

// Raniban Retreat — one-page concept site.
// Structure inspired by how leading resort sites work (hero → welcome →
// stays → experiences → dining → package → reviews → location), with an
// engine-style booking flow (dates → room → extras → details → pay at
// the property) that confirms over WhatsApp. All motion is our own.
export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Booking />
      <Welcome />
      <Marquee />
      <Stays />
      <Experiences />
      <Dining />
      <Offer />
      <Reviews />
      <Faq />
      <FindUs />
      <Footer />
      <StickyBar />
    </main>
  );
}
