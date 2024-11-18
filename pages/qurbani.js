import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import CausesArea from "../Components/Elements/Home/CausesArea";
import SupportArea from "../Components/Elements/Home/SupportArea";
import Qurbani from "../Components/Elements/Qurbani/Qurbani";

const data = {
  Water: "Water",
  Latest: "Latest Cause",
  waterprojects: "Clean Water Projects",
};
export default function qurbani() {
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.qurbaniContent}
        image={HelplineData.qurbaniContent.headerBg}
      />
      <Qurbani />
    </Layout2>
  );
}
