import { blogsData } from '../../data/blogsData';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const EXTERNAL_DATA_URL = 'https://helplinewelfare.org';

  // Generate sitemap for all blog posts
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogsData
  .map((blog) => {
    // Use slug if available, otherwise use id
    const slug = blog.slug || blog.id;
    const url = `${EXTERNAL_DATA_URL}/blog/${slug}`;
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date(blog.date || Date.now()).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
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

