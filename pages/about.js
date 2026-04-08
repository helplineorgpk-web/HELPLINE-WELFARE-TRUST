import React from "react";
import CampaignAboutHero from "../Components/Elements/About/CampaignAboutHero";
import AboutFeatureArea from "../Components/Elements/About/AboutFeatureArea";
import Layout2 from "../Components/Layout/Layout2";
import OurIdentity from "../Components/Elements/About/OurIdentity";
import ChairmanMessage from "../Components/Elements/CeoMessage/CeoMessage";
import OurIntro from "../Components/Elements/About/OurIntro";
import Eligibility from "../Components/Layout/Eligibility";
import FounderMessage from "../Components/Elements/About/FounderMessage.js";

export default function About() {
  return (
    <Layout2>
      <CampaignAboutHero
        title="About Us"
        backgroundImage="/img/Campaigns/About.webp"
        backgroundImageMobile="/img/Campaigns/Aboutmobile.jpg"
      />
      <OurIntro />
      <FounderMessage />
      <ChairmanMessage />
      <OurIdentity />
      <AboutFeatureArea />
      <Eligibility />
    </Layout2>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400,
  };
}
