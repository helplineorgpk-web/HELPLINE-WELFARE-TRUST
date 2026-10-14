import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Layout2 from "../Components/Layout/Layout2";
import GirlGuideDetail from "../Components/Elements/Home/GirlGuideDetail";

export default function GirlGuidePage() {
  return (
    <Layout2>
      <NextSeo
        title="گرل گائیڈ | Helpline Welfare"
        description="گرل گائیڈ — بچیوں میں خود اعتمادی، نظم و ضبط، اخلاقی تربیت، قیادت، خدمتِ خلق اور قومی ذمہ داری کا شعور پیدا کرنے والا تربیتی پروگرام۔"
        canonical="https://helplinewelfare.org/girl-guide"
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GirlGuideDetail />
    </Layout2>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400,
  };
}
