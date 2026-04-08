import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import CampaignAboutHero from "../Components/Elements/About/CampaignAboutHero";
import AboutJourney from "../Components/Elements/About/AboutJourney";

export default function ourjourney() {
  return (
    <Layout2>
      <CampaignAboutHero
        title="Our Journey"
        description="Explore Helpline's journey of impact, growth, and community transformation across the years."
        backgroundImage="/img/Campaigns/OurJoureney.webp"
        backgroundImageMobile="/img/Campaigns/OurJourneymobile.jpg"
      />
      <AboutJourney />
    </Layout2>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400,
  };
}
