export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": "https://helplinewelfare.org/#organization",
  "name": "Helpline Welfare Organization",
  "url": "https://helplinewelfare.org",
  "logo": {
    "@type": "ImageObject",
    "url": "https://helplinewelfare.org/img/logo.png",
    "width": "192",
    "height": "192"
  },
  "sameAs": [
    "https://facebook.com/helplinewelfare",
    "https://twitter.com/helplinewelfare",
    "https://instagram.com/helplinewelfare",
    "https://linkedin.com/company/helplinewelfare"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PK",
    "addressRegion": "Pakistan"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Pakistan"
  },
  "nonprofitStatus": "Nonprofit501c3",
  "keywords": "charity, welfare, education, healthcare, disaster relief, pakistan, ngo, non-profit"
});

export const generateBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://helplinewelfare.org${item.path}`
  }))
});

export const generateDonationSchema = (campaign) => ({
  "@context": "https://schema.org",
  "@type": "DonateAction",
  "name": campaign.title,
  "description": campaign.description,
  "url": `https://helplinewelfare.org/donation/${campaign.slug}`,
  "recipient": {
    "@type": "NGO",
    "name": "Helpline Welfare Organization"
  },
  "potentialAction": {
    "@type": "DonateAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://helplinewelfare.org/donation/{campaign}",
      "inLanguage": ["en", "ur"]
    }
  }
});

export const generateEventSchema = (event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.title,
  "description": event.description,
  "startDate": event.startDate,
  "endDate": event.endDate,
  "location": {
    "@type": "Place",
    "name": event.location,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK",
      "addressRegion": event.region
    }
  },
  "organizer": {
    "@type": "NGO",
    "name": "Helpline Welfare Organization",
    "url": "https://helplinewelfare.org"
  },
  "image": event.image,
  "url": `https://helplinewelfare.org/events/${event.slug}`
});

export const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateNewsArticleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "datePublished": article.publishDate,
  "dateModified": article.modifiedDate,
  "author": {
    "@type": "Organization",
    "name": "Helpline Welfare Organization"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Helpline Welfare Organization",
    "logo": {
      "@type": "ImageObject",
      "url": "https://helplinewelfare.org/img/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://helplinewelfare.org/news/${article.slug}`
  }
});
