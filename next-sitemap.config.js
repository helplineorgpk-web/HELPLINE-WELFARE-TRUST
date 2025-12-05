/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://helplinewelfare.org',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // We'll use custom sitemap index
  exclude: [
    '/admin/*',
    '/api/*',
    '/private/*',
    '/server-sitemap.xml',
    '/draft/*',
    '/preview/*',
    '/payment/*',
    '/blog/*', // Dynamic blog pages handled separately
    '/campaign/*', // Dynamic campaign pages handled separately
    '/qurbani/*', // Dynamic qurbani pages handled separately
    '/supporters/*', // Dynamic supporter pages handled separately
  ],
  alternateRefs: [
    {
      href: 'https://helplinewelfare.org',
      hreflang: 'en'
    },
    {
      href: 'https://helplinewelfare.org/ur',
      hreflang: 'ur'
    }
  ],
  transform: async (config, path) => {
    // Custom transform function for URLs
    const priority = path === '/' ? 1.0 : 
      path.startsWith('/donation') || path.startsWith('/appeals') ? 0.9 :
      path.startsWith('/education') || path.startsWith('/health') || path.startsWith('/disaster') || path.startsWith('/campaigns') ? 0.8 :
      path.startsWith('/blog') || path.startsWith('/blogs') ? 0.7 :
      path.startsWith('/about') || path.startsWith('/contact') || path.startsWith('/mission') ? 0.8 :
      0.6;

    const changefreq = path === '/' ? 'daily' :
      path.startsWith('/blog') || path.startsWith('/blogs') || path.startsWith('/appeals') ? 'daily' :
      path.startsWith('/donation') || path.startsWith('/campaigns') ? 'weekly' :
      path.startsWith('/about') || path.startsWith('/contact') || path.startsWith('/mission') ? 'monthly' :
      'monthly';

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? []
    };
  }
};
