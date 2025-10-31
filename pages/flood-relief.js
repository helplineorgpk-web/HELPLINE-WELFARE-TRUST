import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import FloodReliefHeader from "../Components/Elements/FloodRelief/FloodReliefHeader";
import FloodReliefDetails from "../Components/Elements/FloodRelief/FloodReliefDetails";
import FloodReliefCampaign from "../Components/Elements/FloodRelief/FloodReliefCampaign";
import WayToDonate from "../Components/Elements/Home/WayToDonate";
import { HelplineData } from "../pages/api/data";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";

const data = {
    HouseConstructions: "House Constructions",
  };

export default function FloodRelief() {
    const cause = HelplineData.causes;
  return (
    <Layout2>
      <FloodReliefHeader />
      <FloodReliefCampaign />
       <CauseRecentCause categories={data} causes={cause} />
      <FloodReliefDetails />
      <WayToDonate />
    </Layout2>
  );
}
