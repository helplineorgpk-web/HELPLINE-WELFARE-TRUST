const sitemapTypes = [
  {
    name: 'main',
    changefreq: 'daily',
  },
  {
    name: 'blog',
    changefreq: 'daily',
  },
  {
    name: 'events',
    changefreq: 'daily',
  },
  {
    name: 'campaigns',
    changefreq: 'weekly',
  },
  {
    name: 'static',
    changefreq: 'monthly',
  },
];

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const EXTERNAL_DATA_URL = 'https://helplinewelfare.org';

  // Generate sitemap index XML
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapTypes
        .map(
          (type) => `
        <sitemap>
          <loc>${EXTERNAL_DATA_URL}/sitemap-${type.name}.xml</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </sitemap>`
        )
        .join('')}
    </sitemapindex>`;

  // Cache control headers
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(sitemapIndex);
}
