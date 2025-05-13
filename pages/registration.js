import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import { HelplineData } from "../pages/api/data";
import Registeration from "../Components/Elements/Registeration/Registeration";
export default function registration() {
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.HelplineregistrationData}
        image={HelplineData.HelplineregistrationData.headerBg}
      />
      <Registeration content={HelplineData.HelplineregistrationData.pdf} />
    </Layout2>
  );
}
