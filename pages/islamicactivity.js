import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import IslamicActivities from "../Components/Elements/Islamic/IslamicActivities";

export default function islamicactivity() {
  const cause = HelplineData.causes;
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.HelplineIslamicData}
        image={HelplineData.HelplineIslamicData.headerBg}
      />
      <IslamicActivities />
    </Layout2>
  );
}
