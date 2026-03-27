import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import SocialCapitalHeader from "../Components/Elements/SocialCapital/SocialCapitalHeader";
import Rashan from "../Components/Elements/Rashan/Rashan";
import RashanDistributionJourney from "../Components/Elements/Rashan/RashanDistributionJourney";
import RashanDistributionArea from "../Components/Elements/Rashan/RashanDistributionArea";
import RashanCampaign from "../Components/Elements/Rashan/RashanCampaign";
// import RashanGallery from "../Components/Elements/Rashan/RashanGallery";

export default function Images() {
  return (
    <Layout2>
      <SocialCapitalHeader layout="donation" />
      <Rashan />
      <RashanCampaign />
      <RashanDistributionJourney />
      <RashanDistributionArea />
      {/* <RashanGallery /> */}
    </Layout2>
  );
}
