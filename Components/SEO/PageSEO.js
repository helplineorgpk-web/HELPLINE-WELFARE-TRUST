import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';

const PageSEO = ({ 
  title,
  description,
  canonical,
  pageType = 'website',
  images = [],
  article = null,
  noindex = false,
  nofollow = false
}) => {
  const router = useRouter();
  const locale = router.locale;
  const currentUrl = `https://helplinewelfare.org${router.asPath}`;

  const defaultImages = [
    {
      url: 'https://helplinewelfare.org/img/logo.png',
      width: 1200,
      height: 630,
      alt: 'Helpline Welfare Organization',
      type: 'image/png',
    }
  ];

  const seoImages = images.length > 0 ? images : defaultImages;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical || currentUrl}
        openGraph={{
          type: pageType,
          locale: locale,
          url: currentUrl,
          title,
          description,
          images: seoImages,
          site_name: 'Helpline Welfare Organization',
        }}
        twitter={{
          handle: '@helplinewelfare',
          site: '@helplinewelfare',
          cardType: 'summary_large_image',
        }}
        languageAlternates={[
          {
            hrefLang: 'en',
            href: `https://helplinewelfare.org${router.asPath.split('?')[0]}`,
          },
          {
            hrefLang: 'ur',
            href: `https://helplinewelfare.org/ur${router.asPath.split('?')[0]}`,
          }
        ]}
        noindex={noindex}
        nofollow={nofollow}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: `${title.toLowerCase()}, helpline welfare, charity pakistan, welfare organization, ${description.toLowerCase().split(' ').slice(0, 5).join(', ')}`
          },
          {
            name: 'author',
            content: 'Helpline Welfare Organization'
          },
          {
            property: 'article:publisher',
            content: 'https://facebook.com/helplinewelfare'
          },
          {
            name: 'twitter:label1',
            content: 'Written by'
          },
          {
            name: 'twitter:data1',
            content: 'Helpline Welfare'
          }
        ]}
      />
      {article && (
        <ArticleJsonLd
          type="Article"
          url={currentUrl}
          title={article.title}
          images={article.images}
          datePublished={article.datePublished}
          dateModified={article.dateModified}
          authorName={article.authorName}
          description={article.description}
          publisherName="Helpline Welfare Organization"
          publisherLogo="https://helplinewelfare.org/img/logo.png"
        />
      )}
    </>
  );
};

export default PageSEO;
