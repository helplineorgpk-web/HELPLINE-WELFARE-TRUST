import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import WayToDonate from "../Components/Elements/Home/WayToDonate";

export default function cataract() {
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.cataractContent}
        image={HelplineData.cataractContent.headerBg}
      />
      <WayToDonate />
    </Layout2>
  );
}
