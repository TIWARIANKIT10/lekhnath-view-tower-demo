/** @type {import("next").NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] },
  // Every hotel website is a static export living in public/hotels/<slug>/
  // (built with basePath /hotels/<slug> from its own branch source).
  // These rewrites give each export's pages clean URLs.
  async rewrites() {
    return [
      { source: "/hotels/:slug", destination: "/hotels/:slug/index.html" },
      { source: "/hotels/:slug/:page", destination: "/hotels/:slug/:page/index.html" },
    ];
  },
};
export default nextConfig;
