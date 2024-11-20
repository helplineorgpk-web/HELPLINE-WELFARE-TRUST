import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import { HelplineData } from "../pages/api/data";
import HasneDistribution from "../Components/Elements/Hasne/HasneDistribution";
export default function hasneDistribution() {
  const data = HelplineData.HelplineHasneData;
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.HelplineHasneData}
        image={HelplineData.HelplineHasneData.headerBg}
      />
      <HasneDistribution data={data} />
    </Layout2>
  );
}
