/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Optimize image handling
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "helplinewelfare.org",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },

  // Enable compression and optimization
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: ["react-bootstrap", "@mui/material", "react-icons"],
  },

  // Add headers for security and caching
  async rewrites() {
    return [
      {
        source: "/sitemap-main.xml",
        destination: "/api/sitemap",
      },
      {
        source: "/sitemap-blogs.xml",
        destination: "/api/sitemap-blogs",
      },
      {
        source: "/sitemap-campaigns.xml",
        destination: "/api/sitemap-campaigns",
      },
      {
        source: "/sitemap-qurbani.xml",
        destination: "/api/sitemap-qurbani",
      },
      {
        source: "/sitemap-supporters.xml",
        destination: "/api/sitemap-supporters",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/img/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors *; frame-src *; default-src * 'unsafe-inline' 'unsafe-eval' data: blob:",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
