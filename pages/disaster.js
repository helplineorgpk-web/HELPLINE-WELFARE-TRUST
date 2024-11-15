import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import DisasterReliefProgram from "../Components/Elements/Disaster/DisasterReliefProgram";

export default function edu() {
  const data = HelplineData.disasterContent;
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.disasterContent}
        image={HelplineData.disasterContent.headerBg}
      />
      <DisasterReliefProgram data={data} />
    </Layout2>
  );
}
