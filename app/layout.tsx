import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { HOTEL } from "@/data/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raniban Retreat — The Queen's Forest Retreat, Pokhara",
  description:
    "A solar-powered boutique retreat in Raniban Forest beside the World Peace Pagoda, Pokhara. Sunrise views of the Annapurna range, Phewa Lake below, cottages, an infinity pool, spa and sauna. Book direct — no prepayment.",
  openGraph: {
    title: "Raniban Retreat — Pokhara",
    description:
      "Wake up above the clouds. Boutique eco-retreat beside the World Peace Pagoda with panoramic Annapurna views.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#122619",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: HOTEL.name,
  description:
    "Boutique eco-retreat in Raniban Forest, Pokhara — panoramic views of the Annapurna range and Phewa Lake, beside the World Peace Pagoda.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "World Peace Pagoda Access Road, Pumdi Bhumdi",
    addressLocality: "Pokhara",
    postalCode: "33700",
    addressCountry: "NP",
  },
  telephone: HOTEL.phoneDisplay,
  email: HOTEL.email,
  checkinTime: "14:00",
  checkoutTime: "12:00",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "9.5", bestRating: "10" },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Infinity pool" },
    { "@type": "LocationFeatureSpecification", name: "Spa and sauna" },
    { "@type": "LocationFeatureSpecification", name: "Restaurant and bar" },
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi" },
    { "@type": "LocationFeatureSpecification", name: "Solar powered" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
