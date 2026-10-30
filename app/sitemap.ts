import type { MetadataRoute } from "next";

// Base URL of the hosted copy; update to the hotel's own domain at launch.
const base = "https://lekhnath-view-tower-demo.vercel.app/hotels/grand-hotel-begnas";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/rooms", "/gallery", "/book", "/contact"].map((p) => ({
    url: `${base}${p}`,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
}
