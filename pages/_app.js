import "./../public/css/style.css";
import "./../public/css/animate.min.css";
import "./../public/css/fontawesome-all.min.css";
import "./../public/css/flaticon.css";
import "./../public/css/meanmenu.css";
import "./../public/css/icofont.min.css";
import "./../public/css/datepicker.min.css";
import "./../public/css/magnific-popup.css";
import "./../public/css/nice-select.css";
import "metismenujs/dist/metismenujs.css";
import "./../public/css/policies.css";
import "../styles/globals.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DefaultSeo } from 'next-seo';
import { defaultSEO } from '../config/seo.config';
import Script from 'next/script';
const WhatsAppButton = dynamic(() => import("../Components/Common/WhatsAppButton"), {
  ssr: false,
});
const ChatBot = dynamic(() => import("../Components/Common/ChatBot"), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [showClientWidgets, setShowClientWidgets] = useState(false);
  const hideClientWidgets = router.pathname === "/concept-of-mawakhat-e-madina";

  useEffect(() => {
    const enableWidgets = () => setShowClientWidgets(true);

    if (typeof window === "undefined") {
      return undefined;
    }

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(enableWidgets, { timeout: 2500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(enableWidgets, 1200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/logo-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/img/logo-144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <DefaultSeo {...defaultSEO} />

      {/* Google Tag Manager */}
      <Script
        id="gtm"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXX');
          `,
        }}
      />

      {/* Schema.org Organization Data */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            "name": "Helpline Welfare Organization",
            "url": "https://helplinewelfare.org",
            "logo": "https://helplinewelfare.org/img/logo.png",
            "sameAs": [
              "https://facebook.com/helplinewelfare",
              "https://twitter.com/helplinewelfare",
              "https://instagram.com/helplinewelfare",
              "https://linkedin.com/company/helplinewelfare"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+92-XXXXXXXXXX",
              "contactType": "customer service"
            }
          })
        }}
      />

      <div suppressHydrationWarning>
        <Component {...pageProps} />
      </div>

      {showClientWidgets && !hideClientWidgets ? (
        <>
          <WhatsAppButton />
          <ChatBot />
        </>
      ) : null}

      {/* Structured Data for Website */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://helplinewelfare.org",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://helplinewelfare.org/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  );
}
