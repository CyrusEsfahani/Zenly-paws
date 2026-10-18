/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zenlypaws.org",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
