import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import EligibilityCriteria from "../Components/Layout/Eligibility";

export default function familyWelfare() {
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.familyWelfareContent}
        image={HelplineData.familyWelfareContent.headerBg}
      />
      <EligibilityCriteria />
    </Layout2>
  );
}
