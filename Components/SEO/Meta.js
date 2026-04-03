import Head from 'next/head';

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="theme-color" content="#000000" />
      
      {/* Primary Meta Tags */}
      <title>{title || 'Helpline Welfare Organization - Helping Those in Need'}</title>
      <meta name="title" content={title || 'Helpline Welfare Organization - Helping Those in Need'} />
      <meta name="description" content={description || 'Helpline Welfare Organization is dedicated to helping those in need across Pakistan through various welfare projects including disaster relief, family welfare, and community support.'} />
      <meta name="keywords" content={keywords || 'welfare organization, charity, pakistan charity, disaster relief, family welfare, community support, donations, zakat'} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://helplinewelfare.org/" />
      <meta property="og:title" content={title || 'Helpline Welfare Organization - Helping Those in Need'} />
      <meta property="og:description" content={description || 'Helpline Welfare Organization is dedicated to helping those in need across Pakistan through various welfare projects including disaster relief, family welfare, and community support.'} />
      <meta property="og:image" content="/img/logo/logo.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://helplinewelfare.org/" />
      <meta property="twitter:title" content={title || 'Helpline Welfare Organization - Helping Those in Need'} />
      <meta property="twitter:description" content={description || 'Helpline Welfare Organization is dedicated to helping those in need across Pakistan through various welfare projects including disaster relief, family welfare, and community support.'} />
      <meta property="twitter:image" content="/img/logo/logo.png" />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Helpline Welfare Organization" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
