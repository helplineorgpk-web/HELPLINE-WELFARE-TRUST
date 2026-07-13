import React from "react";
import Head from "next/head";
import Layout2 from "../Components/Layout/Layout2";
import DailyNewsShell from "../Components/Elements/DailyNews/DailyNewsShell";

export default function DailyNewsPage() {
  return (
    <Layout2>
      <Head>
        <title>Daily News | Helpline Welfare Organization</title>
        <meta
          name="description"
          content="Daily News from Helpline Welfare Trust — stories of impact, hope, and community across Pakistan."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DailyNewsShell />
    </Layout2>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400,
  };
}
