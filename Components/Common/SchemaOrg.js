import Script from 'next/script';
import { organizationInfo } from '../../config/seo.config';

export const SchemaOrg = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    '@id': 'https://helplinewelfare.org',
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
      'https://youtube.com/helplinewelfare',
    ],
  };

  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
};

export default SchemaOrg;
