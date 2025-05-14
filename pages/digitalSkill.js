import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import { HelplineData } from "./api/data";
import ITLabs from "../Components/Elements/ITLabs/ITLabs";
import DigiSkills from "../Components/Elements/ITLabs/DigiSkills";
export default function ItLab() {
  const data = HelplineData.HelplineItLabsData;
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.HelplineItLabsData}
        image={HelplineData.HelplineItLabsData.headerBg}
      />
      <ITLabs />
      <DigiSkills />
    </Layout2>
  );
}
