import { blogsData } from '../../data/blogsData';
import { qurbaniData } from './qurbaniData';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const EXTERNAL_DATA_URL = 'https://helplinewelfare.org';

  // Define all static pages with their priorities and update frequencies
  const staticPages = [
    // Main pages - High priority, frequent updates
    { path: '', priority: 1.0, changefreq: 'daily' },  // Homepage
    { path: 'donation', priority: 1.0, changefreq: 'daily' },
    { path: 'appeals', priority: 0.9, changefreq: 'daily' },
    { path: 'campaigns', priority: 0.9, changefreq: 'daily' },
    
    // Core service pages - High priority, weekly updates
    { path: 'education', priority: 0.9, changefreq: 'weekly' },
    { path: 'edu', priority: 0.9, changefreq: 'weekly' },
    { path: 'health', priority: 0.9, changefreq: 'weekly' },
    { path: 'disaster', priority: 0.9, changefreq: 'weekly' },
    { path: 'cause', priority: 0.9, changefreq: 'weekly' },
    { path: 'water', priority: 0.8, changefreq: 'weekly' },
    { path: 'rashan', priority: 0.8, changefreq: 'weekly' },
    { path: 'ramzanRashan', priority: 0.8, changefreq: 'weekly' },
    { path: 'qurbani', priority: 0.8, changefreq: 'weekly' },
    { path: 'flood-relief', priority: 0.8, changefreq: 'weekly' },
    
    // Information pages - Medium priority, weekly updates
    { path: 'about', priority: 0.8, changefreq: 'monthly' },
    { path: 'organization', priority: 0.8, changefreq: 'monthly' },
    { path: 'mission', priority: 0.8, changefreq: 'monthly' },
    { path: 'ourjourney', priority: 0.7, changefreq: 'monthly' },
    { path: 'history', priority: 0.7, changefreq: 'monthly' },
    { path: 'adoptedSchools', priority: 0.8, changefreq: 'weekly' },
    { path: 'ownSchools', priority: 0.8, changefreq: 'weekly' },
    { path: 'event', priority: 0.8, changefreq: 'weekly' },
    { path: 'contact', priority: 0.8, changefreq: 'monthly' },
    { path: 'ourPresence', priority: 0.7, changefreq: 'monthly' },
    
    // Blog and content pages - Medium priority, frequent updates
    { path: 'blogs', priority: 0.7, changefreq: 'daily' },
    { path: 'blog', priority: 0.7, changefreq: 'daily' },
    
    // Program pages
    { path: 'volunteer', priority: 0.8, changefreq: 'weekly' },
    { path: 'joinAsVolunteer', priority: 0.8, changefreq: 'weekly' },
    { path: 'supporters', priority: 0.7, changefreq: 'weekly' },
    { path: 'sponsor', priority: 0.7, changefreq: 'weekly' },
    { path: 'orphanage', priority: 0.7, changefreq: 'weekly' },
    { path: 'rehabilitation', priority: 0.7, changefreq: 'weekly' },
    { path: 'vocationalTrainingCenters', priority: 0.7, changefreq: 'weekly' },
    { path: 'student-support', priority: 0.7, changefreq: 'weekly' },
    { path: 'studentSkillWorker', priority: 0.7, changefreq: 'weekly' },
    { path: 'digitalSkill', priority: 0.7, changefreq: 'weekly' },
    { path: 'educationForm', priority: 0.7, changefreq: 'weekly' },
    { path: 'itform', priority: 0.7, changefreq: 'weekly' },
    { path: 'enroll', priority: 0.7, changefreq: 'weekly' },
    { path: 'registration', priority: 0.7, changefreq: 'weekly' },
    
    // Special programs
    { path: 'darulEhsan', priority: 0.7, changefreq: 'monthly' },
    { path: 'darulTarbiyah', priority: 0.7, changefreq: 'monthly' },
    { path: 'mawakhat-e-Madina', priority: 0.7, changefreq: 'monthly' },
    { path: 'masjid', priority: 0.7, changefreq: 'monthly' },
    { path: 'islamicactivity', priority: 0.7, changefreq: 'monthly' },
    { path: 'taleem-e-Quran', priority: 0.7, changefreq: 'monthly' },
    { path: 'hasneDistribution', priority: 0.7, changefreq: 'weekly' },
    { path: 'distribution', priority: 0.7, changefreq: 'weekly' },
    { path: 'communityCenter', priority: 0.7, changefreq: 'monthly' },
    { path: 'sahoolatCenter', priority: 0.7, changefreq: 'monthly' },
    
    // Support and information pages
    { path: 'faq', priority: 0.6, changefreq: 'monthly' },
    { path: 'policies', priority: 0.6, changefreq: 'monthly' },
    { path: 'fraud-prevention', priority: 0.6, changefreq: 'monthly' },
    { path: 'eligibilty-criteria', priority: 0.6, changefreq: 'monthly' },
    { path: 'learn-more', priority: 0.6, changefreq: 'monthly' },
    
    // Additional pages
    { path: 'needy', priority: 0.7, changefreq: 'weekly' },
    { path: 'jobSeeker', priority: 0.6, changefreq: 'monthly' },
    { path: 'consultant', priority: 0.6, changefreq: 'monthly' },
    { path: 'reformerFriend', priority: 0.6, changefreq: 'monthly' },
    { path: 'videos', priority: 0.6, changefreq: 'weekly' },
    { path: 'images', priority: 0.6, changefreq: 'weekly' },
    { path: 'cityDetails', priority: 0.6, changefreq: 'monthly' },
  ];

  // Add dynamic blog pages
  const blogPages = blogsData.map((blog) => {
    const slug = blog.slug || blog.id;
    let lastmod = new Date().toISOString();
    if (blog.date) {
      try {
        // Try to parse date in format "15 January 2024"
        const parsedDate = new Date(blog.date);
        if (!isNaN(parsedDate.getTime())) {
          lastmod = parsedDate.toISOString();
        }
      } catch (e) {
        // Use current date if parsing fails
        lastmod = new Date().toISOString();
      }
    }
    return {
      path: `blog/${slug}`,
      priority: 0.7,
      changefreq: 'weekly',
      lastmod,
    };
  });

  // Add dynamic campaign pages
  const campaignPages = [
    { id: 'flood-relief-project' },
    { id: 'education-support' },
    { id: 'medical-aid' },
    { id: 'qurbani-2025' },
    { id: 'ramzan-2025' },
  ].map((campaign) => ({
    path: `campaign/${campaign.id}`,
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: new Date().toISOString(),
  }));

  // Add dynamic qurbani pages
  const qurbaniPages = qurbaniData.map((qurbani) => ({
    path: `qurbani/${qurbani.id}`,
    priority: 0.6,
    changefreq: 'monthly',
    lastmod: new Date().toISOString(),
  }));

  // Add dynamic supporter pages
  const supporterPages = [
    'henkel-pakistan',
    'service-industries',
    'asia-poultry-feeds',
    'izhar-group',
    'mughal-steel',
    'nestle-pakistan',
    'shafi-group',
    'bard-foundation',
    'descon',
  ].map((slug) => ({
    path: `supporters/${slug}`,
    priority: 0.6,
    changefreq: 'monthly',
    lastmod: new Date().toISOString(),
  }));

  // Combine all pages
  const allPages = [
    ...staticPages.map((page) => ({
      ...page,
      lastmod: new Date().toISOString(),
    })),
    ...blogPages,
    ...campaignPages,
    ...qurbaniPages,
    ...supporterPages,
  ];

  // Generate the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages
  .map(({ path, priority, changefreq, lastmod }) => {
    const url = path ? `${EXTERNAL_DATA_URL}/${path}` : EXTERNAL_DATA_URL;
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
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
