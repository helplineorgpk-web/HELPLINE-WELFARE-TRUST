import { MetadataRoute } from 'next';
import { blogsData } from '../data/blogsData';
import { qurbaniData } from '../pages/api/qurbaniData';

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL of your website
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://helplinewelfare.org';
  
  // Current date for lastmod
  const date = new Date();

  // Helper function to parse blog date
  const parseBlogDate = (dateString: string | undefined): Date => {
    if (!dateString) return date;
    try {
      const parsed = new Date(dateString);
      return isNaN(parsed.getTime()) ? date : parsed;
    } catch {
      return date;
    }
  };

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/donation`,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/appeals`,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/campaigns`,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/education`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/edu`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/health`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/disaster`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cause`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/water`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rashan`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ramzanRashan`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/qurbani`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/flood-relief`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/organization`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mission`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ourjourney`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/history`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/adoptedSchools`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ownSchools`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/event`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ourPresence`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/volunteer`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/joinAsVolunteer`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/supporters`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sponsor`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/orphanage`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rehabilitation`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/vocationalTrainingCenters`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/student-support`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/studentSkillWorker`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/digitalSkill`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/educationForm`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/itform`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/enroll`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/registration`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/darulEhsan`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/darulTarbiyah`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mawakhat-e-Madina`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/masjid`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/islamicactivity`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/taleem-e-Quran`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hasneDistribution`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/distribution`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/communityCenter`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sahoolatCenter`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/policies`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/fraud-prevention`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/eligibilty-criteria`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/learn-more`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/needy`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/jobSeeker`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/consultant`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/reformerFriend`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/videos`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/images`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/cityDetails`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Blog post detail pages
  const blogPages: MetadataRoute.Sitemap = blogsData
    .filter((blog) => (blog.slug || blog.id) && typeof (blog.slug || blog.id) === 'string')
    .map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug || blog.id}`,
      lastModified: parseBlogDate(blog.date),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  // Campaign detail pages
  const campaignPages: MetadataRoute.Sitemap = [
    'emergency-response-fund',
    'donate-calamity-management-program',
    'sponsor-safe-home-disaster-family',
    'education-support',
    'medical-aid',
    'qurbani-2025',
    'ramzan-2025',
  ]
    .filter((id) => id && typeof id === 'string')
    .map((id) => ({
      url: `${baseUrl}/campaign/${id}`,
      lastModified: date,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  // Qurbani detail pages
  const qurbaniPages: MetadataRoute.Sitemap = qurbaniData
    .filter((qurbani) => qurbani.id && (typeof qurbani.id === 'string' || typeof qurbani.id === 'number'))
    .map((qurbani) => ({
      url: `${baseUrl}/qurbani/${qurbani.id}`,
      lastModified: date,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  // Supporter detail pages
  const supporterPages: MetadataRoute.Sitemap = [
    'henkel-pakistan',
    'service-industries',
    'asia-poultry-feeds',
    'izhar-group',
    'mughal-steel',
    'nestle-pakistan',
    'shafi-group',
    'bard-foundation',
    'descon',
  ]
    .filter((slug) => slug && typeof slug === 'string')
    .map((slug) => ({
      url: `${baseUrl}/supporters/${slug}`,
      lastModified: date,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  // Combine all routes
  return [
    ...staticRoutes,
    ...blogPages,
    ...campaignPages,
    ...qurbaniPages,
    ...supporterPages,
  ];
}

