import { organizationInfo } from '../config/seo.config';

export const generateOrganizationLD = () => ({
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: organizationInfo.name,
  legalName: organizationInfo.legalName,
  url: 'https://helplinewelfare.org',
  logo: organizationInfo.logo,
  foundingDate: organizationInfo.foundingDate,
  address: {
    '@type': 'PostalAddress',
    streetAddress: organizationInfo.address.street,
    addressLocality: organizationInfo.address.city,
    addressRegion: organizationInfo.address.region,
    postalCode: organizationInfo.address.postalCode,
    addressCountry: organizationInfo.address.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: organizationInfo.contact.phone,
    email: organizationInfo.contact.email,
    contactType: 'customer service',
  },
  sameAs: [
    'https://facebook.com/helplinewelfare',
    'https://twitter.com/helplinewelfare',
    'https://instagram.com/helplinewelfare',
    'https://linkedin.com/company/helplinewelfare',
  ],
});

export const generateCampaignLD = (campaign) => ({
  '@context': 'https://schema.org',
  '@type': 'DonateAction',
  name: campaign.title,
  description: campaign.description,
  image: campaign.image,
  url: `https://helplinewelfare.org/campaigns/${campaign.slug}`,
  startDate: campaign.startDate,
  endDate: campaign.endDate,
  location: {
    '@type': 'Place',
    name: campaign.location,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Pakistan',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: organizationInfo.name,
    url: 'https://helplinewelfare.org',
  },
  potentialAction: {
    '@type': 'DonateAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `https://helplinewelfare.org/donate/${campaign.slug}`,
    },
  },
});

export const generateEventLD = (event) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: event.title,
  description: event.description,
  image: event.image,
  startDate: event.startDate,
  endDate: event.endDate,
  location: {
    '@type': 'Place',
    name: event.venue,
    address: {
      '@type': 'PostalAddress',
      addressLocality: event.city,
      addressRegion: event.region,
      addressCountry: 'Pakistan',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: organizationInfo.name,
    url: 'https://helplinewelfare.org',
  },
  offers: {
    '@type': 'Offer',
    url: `https://helplinewelfare.org/events/${event.slug}`,
    availability: 'https://schema.org/InStock',
    validFrom: event.registrationStartDate,
    validThrough: event.registrationEndDate,
  },
});

export const generateArticleLD = (article) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  image: article.image,
  datePublished: article.publishDate,
  dateModified: article.modifiedDate,
  author: {
    '@type': 'Organization',
    name: organizationInfo.name,
  },
  publisher: {
    '@type': 'Organization',
    name: organizationInfo.name,
    logo: {
      '@type': 'ImageObject',
      url: organizationInfo.logo,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://helplinewelfare.org/blog/${article.slug}`,
  },
  keywords: article.tags.join(', '),
});

export const generateFAQLD = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
