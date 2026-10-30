import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import { hotel } from "@/lib/config";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});
const sans = Jost({ subsets: ["latin"], variable: "--font-sans", weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "Grand Hotel Begnas — Lekhnath, Pokhara",
  description:
    "A lakeside maison in Lekhnath, Pokhara — thirteen rooms two hundred steps from Begnas Lake, beneath the Annapurnas. Book direct by telephone for the best rate.",
  openGraph: { title: "Grand Hotel Begnas", description: hotel.tagline, type: "website" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#FFFFFF" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: hotel.name,
  description: "Lakeside hotel steps from Begnas Lake, Lekhnath, Pokhara.",
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
      <body className="bg-paper font-sans font-light text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
