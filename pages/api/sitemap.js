export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const EXTERNAL_DATA_URL = 'https://helplinewelfare.org';

  // Define your pages with their priorities and update frequencies
  const pages = [
    // Main pages - High priority, frequent updates
    { path: '', priority: 1.0, changefreq: 'daily' },  // Homepage
    { path: 'donation', priority: 1.0, changefreq: 'daily' },
    { path: 'appeals', priority: 0.9, changefreq: 'daily' },
    { path: 'campaigns', priority: 0.9, changefreq: 'daily' },
    
    // Core service pages - High priority, weekly updates
    { path: 'education', priority: 0.9, changefreq: 'weekly' },
    { path: 'health', priority: 0.9, changefreq: 'weekly' },
    { path: 'disaster', priority: 0.9, changefreq: 'weekly' },
    { path: 'cause', priority: 0.9, changefreq: 'weekly' },
    
    // Information pages - Medium priority, weekly updates
    { path: 'about', priority: 0.8, changefreq: 'weekly' },
    { path: 'organization', priority: 0.8, changefreq: 'weekly' },
    { path: 'adoptedSchools', priority: 0.8, changefreq: 'weekly' },
    { path: 'event', priority: 0.8, changefreq: 'weekly' },
    { path: 'contact', priority: 0.8, changefreq: 'weekly' },
    
    // Dynamic content pages - Medium priority, frequent updates
    { path: 'blog', priority: 0.7, changefreq: 'daily' },
    { path: 'news', priority: 0.7, changefreq: 'daily' },
    { path: 'stories', priority: 0.7, changefreq: 'daily' },
    
    // Support pages - Lower priority, less frequent updates
    { path: 'faq', priority: 0.6, changefreq: 'monthly' },
    { path: 'privacy-policy', priority: 0.6, changefreq: 'monthly' },
    { path: 'terms-of-service', priority: 0.6, changefreq: 'monthly' },
  ];

  // Add language variants
  const languages = ['en', 'ur'];
  const languagePages = pages.flatMap(page => 
    languages.map(lang => ({
      ...page,
      path: lang === 'en' ? page.path : `${lang}/${page.path}`,
      priority: lang === 'en' ? page.priority : page.priority - 0.1
    }))
  );

  // Generate the XML sitemap with xhtml:link elements for language alternatives
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${languagePages
        .map(
          ({ path, priority, changefreq }) => {
            const url = path ? `${EXTERNAL_DATA_URL}/${path}` : EXTERNAL_DATA_URL;
            return `
        <url>
          <loc>${url}</loc>
          ${languages
            .map(
              lang => `          <xhtml:link 
               rel="alternate"
               hreflang="${lang}"
               href="${EXTERNAL_DATA_URL}${lang === 'en' ? '' : '/' + lang}${path ? '/' + path : ''}"
          />`
            )
            .join('\n')}
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>`;
          }
        )
        .join('')}
    </urlset>`;

  // Set cache headers
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(sitemap);
}
