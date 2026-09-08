import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Layout2 from "../Components/Layout/Layout2";
import CampaignAboutHero from "../Components/Elements/About/CampaignAboutHero";
import MawakhatPdfDocument from "../Components/Elements/mawakhat-e-madina/MawakhatPdfDocument";

export default function MawakhatPdfPage() {
  return (
    <Layout2>
      <NextSeo
        title="Mawakhat e Madina | Helpline Welfare Organization"
        description="Read the Mawakhat-e-Madina brochure — the concept, programs, and community welfare vision of Helpline Welfare Trust."
        canonical="https://helplinewelfare.org/mawakhat-pdf"
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CampaignAboutHero
        title="Mawakhat e Madina"
        description=""
        backgroundImage="/img/mawakhatheadermainislider.jpg"
        backgroundImageMobile="/img/mawakhatheadermainislider.jpg"
      />
      <MawakhatPdfDocument />
    </Layout2>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400,
  };
}
