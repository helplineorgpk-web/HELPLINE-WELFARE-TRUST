import { useRouter } from 'next/router';
import Link from 'next/link';
import Script from 'next/script';

const Breadcrumbs = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment);

  // Generate breadcrumb items
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    return { href, label };
  });

  // Add home as first item
  breadcrumbs.unshift({ href: '/', label: 'Home' });

  // Generate schema.org breadcrumb list
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@id': `https://helplinewelfare.org${item.href}`,
        'name': item.label
      }
    }))
  };

  return (
    <>
      <nav aria-label="breadcrumb" className="breadcrumb-wrapper">
        <ol className="breadcrumb">
          {breadcrumbs.map((item, index) => (
            <li 
              key={item.href}
              className={`breadcrumb-item${
                index === breadcrumbs.length - 1 ? ' active' : ''
              }`}
              {...(index === breadcrumbs.length - 1
                ? { 'aria-current': 'page' }
                : {})}
            >
              {index === breadcrumbs.length - 1 ? (
                item.label
              ) : (
                <Link href={item.href}>
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <style jsx>{`
        .breadcrumb-wrapper {
          padding: 1rem 0;
          background-color: #f8f9fa;
          margin-bottom: 2rem;
        }
        .breadcrumb {
          display: flex;
          flex-wrap: wrap;
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
          list-style: none;
          background-color: transparent;
          border-radius: 0.25rem;
        }
        .breadcrumb-item + .breadcrumb-item {
          padding-left: 0.5rem;
        }
        .breadcrumb-item + .breadcrumb-item::before {
          content: "/";
          padding-right: 0.5rem;
          color: #6c757d;
        }
        .breadcrumb-item.active {
          color: #6c757d;
        }
        .breadcrumb-item a {
          color: #007bff;
          text-decoration: none;
        }
        .breadcrumb-item a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Breadcrumbs;
