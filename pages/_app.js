import "./../public/css/style.css";
import "./../public/css/animate.min.css";
import "./../public/css/fontawesome-all.min.css";
import "./../public/css/flaticon.css";
import "./../public/css/meanmenu.css";
import "./../public/css/icofont.min.css";
import "./../public/css/datepicker.min.css";
import "./../public/css/magnific-popup.css";
import "./../public/css/nice-select.css";
import "metismenujs/style";
import "./../public/css/policies.css";
import "../styles/globals.css";
import Head from "next/head";
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="manifest" href="site.webmanifest" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="./img/favicon.ico"
        />
      </Head>
      <DefaultSeo
        title="Helpline - Transforming Lives Through Welfare"
        description="Helpline is a leading non-profit social welfare organization dedicated to providing education, healthcare, and disaster relief to communities in need across Pakistan."
        openGraph={{
          type: 'website',
          locale: 'en_PK',
          url: 'https://helplinewelfare.org/',
          siteName: 'Helpline Welfare',
          images: [
            {
              url: 'https://helplinewelfare.org/img/logo.png',
              width: 1200,
              height: 630,
              alt: 'Helpline Welfare Organization',
            },
          ],
        }}
        twitter={{
          handle: '@helplinewelfare',
          site: '@helplinewelfare',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'charity, welfare, education, healthcare, disaster relief, pakistan, ngo, non-profit'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }]}
      />
      <Component {...pageProps} />
    </>
  );
}
