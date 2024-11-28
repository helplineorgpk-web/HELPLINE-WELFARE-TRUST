import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";

const data = {
  Water: "Water",
};
export default function water() {
  const cause = HelplineData.causes;
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.CleanWaterContent}
        image={HelplineData.CleanWaterContent.headerBg}
      />
      <CauseRecentCause categories={data} causes={cause} />
    </Layout2>
  );
}
