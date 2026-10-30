import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import { hotel } from "@/lib/config";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Grand Hotel Begnas — Lekhnath, Pokhara",
  description:
    "A classic lakeside hotel on Begnas Sadak, two hundred steps from Begnas Lake. Thirteen quiet rooms, a restaurant and bar, and the Annapurnas on the horizon. Book direct by phone for the best rate.",
  openGraph: { title: "Grand Hotel Begnas", description: hotel.tagline, type: "website" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0F1930" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: hotel.name,
  description: "Classic lakeside hotel steps from Begnas Lake, Lekhnath, Pokhara.",
  telephone: hotel.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Begnas Sadak, Lekhnath",
    addressLocality: "Pokhara",
    postalCode: "33700",
    addressCountry: "NP",
  },
  checkinTime: "12:00",
  checkoutTime: "12:00",
  priceRange: "$14–$19",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "10", bestRating: "10", reviewCount: "2" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-paper font-sans text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
