import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import CausesArea from "../Components/Elements/Home/CausesArea";

const data = {
  Water: "Water",
  Latest: "Latest Cause",
  waterprojects: "Clean Water Projects",
};
export default function water() {
  const causes = HelplineData.WaterCauses;
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.CleanWaterContent}
        image={HelplineData.CleanWaterContent.headerBg}
      />
      <CausesArea causes={causes} data={data} />
    </Layout2>
  );
}
