/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://helplinewelfare.org',
  generateRobotsTxt: false, // We have a custom robots.txt
  exclude: [
    '/admin/*',
    '/api/*',
    '/private/*',
    '/server-sitemap.xml',
    '/draft/*',
    '/preview/*'
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
      path.startsWith('/donation') ? 0.9 :
      path.startsWith('/education') || path.startsWith('/health') || path.startsWith('/disaster') ? 0.8 :
      path.startsWith('/blog') || path.startsWith('/news') ? 0.7 :
      0.5;

    const changefreq = path === '/' ? 'daily' :
      path.startsWith('/blog') || path.startsWith('/news') ? 'daily' :
      path.startsWith('/donation') || path.startsWith('/campaigns') ? 'weekly' :
      'monthly';

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? []
    };
  },
  additionalPaths: async (config) => {
    const result = [];

    // Add dynamic paths here
    // Example: Add campaign pages
    const campaigns = [
      'education-support',
      'healthcare-initiatives',
      'disaster-relief',
      'ramadan-campaign'
    ];

    for (const campaign of campaigns) {
      result.push({
        loc: `/campaigns/${campaign}`,
        priority: 0.9,
        changefreq: 'weekly'
      });
    }

    return result;
  }
};
