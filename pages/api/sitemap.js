export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const EXTERNAL_DATA_URL = 'https://helplinewelfare.org';

  // Define your pages with their priorities
  const pages = [
    { path: 'about', priority: 0.8 },
    { path: 'contact', priority: 0.8 },
    { path: 'donation', priority: 0.9 },
    { path: 'cause', priority: 0.9 },
    { path: 'blog', priority: 0.7 },
    { path: 'event', priority: 0.8 },
    { path: 'faq', priority: 0.6 },
    { path: 'education', priority: 0.9 },
    { path: 'health', priority: 0.9 },
    { path: 'disaster', priority: 0.9 },
    { path: 'organization', priority: 0.8 },
    { path: 'adoptedSchools', priority: 0.8 },
    { path: 'appeals', priority: 0.9 },
    { path: 'campaigns', priority: 0.9 },
  ];

  // Generate the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${EXTERNAL_DATA_URL}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${pages
        .map(
          ({ path, priority = 0.7, changefreq = 'weekly' }) => `
        <url>
          <loc>${`${EXTERNAL_DATA_URL}/${path}`}</loc>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>`
        )
        .join('')}
    </urlset>`;

  // Cache the response for 24 hours
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(sitemap);
}
