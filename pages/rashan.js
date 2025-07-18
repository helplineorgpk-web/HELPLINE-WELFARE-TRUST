import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import RashanHeader from "../Components/Elements/Rashan/RashanHeader";
import Rashan from "../Components/Elements/Rashan/Rashan";
import RashanDistributionJourney from "../Components/Elements/Rashan/RashanDistributionJourney";
import RashanDistributionArea from "../Components/Elements/Rashan/RashanDistributionArea";
import RashanCampaign from "../Components/Elements/Rashan/RashanCampaign";

export default function Images() {
  const img = "/img/causes/cause24.jpg";

  return (
    <Layout2>
      <RashanHeader
        background={img}
        Detail={"Rashan"}
        datainfo={"Rashan Program"}
      />
      <Rashan />
      <RashanCampaign />
      <RashanDistributionJourney />
      <RashanDistributionArea />
    </Layout2>
  );
}
