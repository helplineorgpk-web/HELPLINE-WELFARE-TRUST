/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  
  // Optimize image handling
  images: {
    domains: ['helplinewelfare.org'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Enable compression and optimization
  compress: true,
  optimizeFonts: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Add headers for security and caching
  async rewrites() {
    return [
      // Note: /sitemap.xml is automatically handled by app/sitemap.ts in Next.js 13+
      // Keeping other sitemap routes for backward compatibility if needed
      {
        source: '/sitemap-main.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/sitemap-blogs.xml',
        destination: '/api/sitemap-blogs',
      },
      {
        source: '/sitemap-campaigns.xml',
        destination: '/api/sitemap-campaigns',
      },
      {
        source: '/sitemap-qurbani.xml',
        destination: '/api/sitemap-qurbani',
      },
      {
        source: '/sitemap-supporters.xml',
        destination: '/api/sitemap-supporters',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors *; frame-src *; default-src * 'unsafe-inline' 'unsafe-eval' data: blob:"
          }
        ],
      },
    ]
  }
}

module.exports = nextConfig
