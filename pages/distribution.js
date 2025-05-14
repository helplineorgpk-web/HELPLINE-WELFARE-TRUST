import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import { HelplineData } from "./api/data";
import HasneDistribution from "../Components/Elements/Hasne/HasneDistribution";
import HasneDistribute from "./hasneDistribution";
export default function Distribution() {
  const data = HelplineData.HelplineRajanpurData;
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.HelplineRajanpurData}
        image={HelplineData.HelplineRajanpurData.headerBg}
      />
      <HasneDistribution data={data} />
      <HasneDistribute />
    </Layout2>
  );
}
