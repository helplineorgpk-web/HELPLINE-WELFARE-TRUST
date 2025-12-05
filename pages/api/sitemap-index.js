export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const EXTERNAL_DATA_URL = 'https://helplinewelfare.org';

  // Define all sitemaps (using cleaner URLs via rewrites)
  const sitemaps = [
    {
      loc: `${EXTERNAL_DATA_URL}/sitemap-main.xml`,
      name: 'main',
    },
    {
      loc: `${EXTERNAL_DATA_URL}/sitemap-blogs.xml`,
      name: 'blogs',
    },
    {
      loc: `${EXTERNAL_DATA_URL}/sitemap-campaigns.xml`,
      name: 'campaigns',
    },
    {
      loc: `${EXTERNAL_DATA_URL}/sitemap-qurbani.xml`,
      name: 'qurbani',
    },
    {
      loc: `${EXTERNAL_DATA_URL}/sitemap-supporters.xml`,
      name: 'supporters',
    },
  ];

  // Generate sitemap index XML
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (sitemap) => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;

  // Cache control headers
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(sitemapIndex);
}
