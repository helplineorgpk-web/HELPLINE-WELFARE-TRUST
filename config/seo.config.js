export const defaultSEO = {
  titleTemplate: '%s | Helpline Welfare Organization - Leading NGO in Pakistan',
  defaultTitle: 'Helpline Welfare Organization - Transforming Lives Through Education, Healthcare & Relief',
  description: 'Join Helpline Welfare Organization, Pakistan\'s trusted NGO providing education, healthcare, and disaster relief since 2000. Make a lasting impact on communities in need.',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://helplinewelfare.org',
    siteName: 'Helpline Welfare Organization',
    images: [
      {
        url: 'https://helplinewelfare.org/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'Helpline Welfare Organization - Transforming Lives in Pakistan',
      },
      {
        url: 'https://helplinewelfare.org/img/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Helpline Welfare Projects and Initiatives',
      },
    ],
  },
  twitter: {
    handle: '@helplinewelfare',
    site: '@helplinewelfare',
    cardType: 'summary_large_image',
  },
  facebook: {
    appId: 'your-fb-app-id',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
    {
      name: 'keywords',
      content: 'NGO Pakistan, welfare organization, charity, education, healthcare, disaster relief, donate pakistan, humanitarian aid, social welfare, community development, poverty alleviation, emergency response, medical assistance, school support',
    },
    {
      name: 'author',
      content: 'Helpline Welfare Organization',
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    {
      name: 'geo.region',
      content: 'PK',
    },
    {
      name: 'geo.position',
      content: 'your-latitude;your-longitude',
    },
    {
      name: 'ICBM',
      content: 'your-latitude, your-longitude',
    },
  ],
};

export const pageSEO = {
  home: {
    title: 'Helpline Welfare Organization - Leading NGO in Pakistan | Education, Healthcare & Relief',
    description: 'Helpline Welfare Organization is Pakistan\'s trusted NGO dedicated to transforming lives through education, healthcare, and disaster relief. Join our mission to create lasting positive change.',
    keywords: 'charity pakistan, welfare organization, education charity, healthcare ngo, disaster relief, donate to pakistan, best ngo pakistan',
    schema: {
      '@type': 'Organization',
      'mainEntityOfPage': 'https://helplinewelfare.org',
    }
  },
  about: {
    title: 'About Helpline Welfare Organization | Our Mission, Vision & Impact',
    description: 'Discover Helpline\'s journey of transforming lives in Pakistan since 2000. Learn about our mission, vision, achievements, and commitment to sustainable welfare initiatives.',
    keywords: 'about helpline, welfare mission, ngo pakistan, charity organization, pakistan welfare organization, ngo achievements',
    schema: {
      '@type': 'AboutPage',
      'mainEntityOfPage': 'https://helplinewelfare.org/about',
    }
  },
  donation: {
    title: 'Support Our Cause - Donate Now',
    description: 'Your donation can make a real difference. Support our education, healthcare, and disaster relief initiatives in Pakistan.',
    keywords: 'donate pakistan, charity donation, support welfare, help pakistan',
  },
  contact: {
    title: 'Contact Us - Get in Touch',
    description: 'Contact Helpline Welfare Organization for inquiries, partnerships, or to learn more about our welfare initiatives.',
    keywords: 'contact ngo, helpline contact, welfare organization contact, charity contact',
  },
  education: {
    title: 'Education Programs & Initiatives',
    description: 'Discover our education programs providing quality learning opportunities to underprivileged children across Pakistan.',
    keywords: 'education charity, school support, learning initiatives, education pakistan',
  },
  health: {
    title: 'Healthcare Services & Medical Aid',
    description: 'Learn about our healthcare initiatives providing medical services and support to communities in need across Pakistan.',
    keywords: 'healthcare charity, medical aid, health services pakistan, medical support',
  },
  disaster: {
    title: 'Disaster Relief & Emergency Response',
    description: 'Our disaster relief efforts provide immediate support and long-term rehabilitation to affected communities in Pakistan.',
    keywords: 'disaster relief, emergency response, crisis aid, humanitarian help',
  },
};

export const socialProfiles = {
  facebook: 'https://facebook.com/helplinewelfare',
  twitter: 'https://twitter.com/helplinewelfare',
  instagram: 'https://instagram.com/helplinewelfare',
  linkedin: 'https://linkedin.com/company/helplinewelfare',
  youtube: 'https://youtube.com/helplinewelfare',
};

export const organizationInfo = {
  name: 'Helpline Welfare Organization',
  legalName: 'Helpline Welfare Organization',
  foundingDate: '2000',
  logo: 'https://helplinewelfare.org/img/logo.png',
  address: {
    street: 'Your Street Address',
    city: 'Your City',
    region: 'Your Region',
    postalCode: 'Your Postal Code',
    country: 'Pakistan',
  },
  contact: {
    phone: '+92XXXXXXXXXX',
    email: 'contact@helplinewelfare.org',
  },
};
