import { qurbaniData } from './qurbaniData';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const EXTERNAL_DATA_URL = 'https://helplinewelfare.org';

  // Generate sitemap for all qurbani pages
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${qurbaniData
  .map((qurbani) => {
    const url = `${EXTERNAL_DATA_URL}/qurbani/${qurbani.id}`;
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  // Set cache headers
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );
  res.setHeader('Content-Type', 'text/xml');
  return res.status(200).send(sitemap);
}

