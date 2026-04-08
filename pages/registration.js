import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import CampaignAboutHero from "../Components/Elements/About/CampaignAboutHero";
import { HelplineData } from "../pages/api/data";
import Registeration from "../Components/Elements/Registeration/Registeration";
export default function registration() {
  return (
    <Layout2>
      <CampaignAboutHero
        title="Registration"
        description="Complete your registration to connect with Helpline programs and opportunities."
        backgroundImage="/img/Campaigns/Registration.webp"
        backgroundImageMobile="/img/Campaigns/Registermobile.jpg"
      />
      <Registeration content={HelplineData.HelplineregistrationData.pdf} />
    </Layout2>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400,
  };
}
