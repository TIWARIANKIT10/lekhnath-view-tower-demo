/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] },
  // The portfolio index is a standalone static project living in
  // public/showcase/ — give it a clean URL: /showcase
  async rewrites() {
    return [{ source: "/showcase", destination: "/showcase/index.html" }];
  },
};
export default nextConfig;
