import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import { hotel } from "@/lib/config";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: `${hotel.name} ${hotel.suffix} — Lekhnath, Pokhara`,
  description: "Family-run eco hotel in Lekhnath, Pokhara with a 360° view tower: Annapurna, Begnas & Rupa lakes. Book direct for the best rate.",
  openGraph: { title: `${hotel.name} ${hotel.suffix}`, description: hotel.tagline, type: "website" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0C1F1A" };

const jsonLd = {
  "@context": "https://schema.org", "@type": "Hotel",
  name: `${hotel.name} and Eco Farm`, telephone: hotel.phone, address: hotel.address,
  aggregateRating: { "@type": "AggregateRating", ratingValue: hotel.googleRating, reviewCount: hotel.googleReviews },
  checkinTime: "12:00", checkoutTime: "12:00", priceRange: "$18–$32",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-cream font-sans text-pine-950">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="fixed inset-x-0 top-16 z-40 bg-sand-500 py-1 text-center text-[11px] font-bold uppercase tracking-wider text-white md:top-16">
          Concept demo — made for this hotel
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
