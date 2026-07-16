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
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90],
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
    // In development, never mark _next chunks immutable — browsers will keep stale
    // hashed chunks after HMR/navigation and break with "Failed to load chunk".
    const isProd = process.env.NODE_ENV === "production";
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: isProd
              ? "public, max-age=31536000, immutable"
              : "no-store, must-revalidate",
          },
        ],
      },
      {
        source: "/img/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: isProd
              ? "public, max-age=31536000, immutable"
              : "public, max-age=0, must-revalidate",
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
