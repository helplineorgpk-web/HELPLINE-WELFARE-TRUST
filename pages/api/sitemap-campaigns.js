// Campaign data from the campaign detail page
const campaignsData = [
  {
    id: "flood-relief-project",
  },
  {
    id: "education-support",
  },
  {
    id: "medical-aid",
  },
  {
    id: "qurbani-2025",
  },
  {
    id: "ramzan-2025",
  }
];

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const EXTERNAL_DATA_URL = 'https://helplinewelfare.org';

  // Generate sitemap for all campaign pages
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${campaignsData
  .map((campaign) => {
    const url = `${EXTERNAL_DATA_URL}/campaign/${campaign.id}`;
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
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

