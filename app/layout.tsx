import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lekhnath Hotel Websites — Portfolio Index",
  description:
    "Every hotel website built for the Lekhnath Top-20 project, in one place. Open any site, read its approach README, jump between branches.",
};

export const viewport: Viewport = { themeColor: "#0d1512" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
