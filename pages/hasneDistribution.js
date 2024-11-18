import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import { HelplineData } from "../pages/api/data";
export default function hasneDistribution() {
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.HelplineHealthData}
        image={HelplineData.HelplineHealthData.headerBg}
      />
    </Layout2>
  );
}
