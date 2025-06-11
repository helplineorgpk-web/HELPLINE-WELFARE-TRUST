import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import VocationalTrainingCentersHeader from "../Components/Elements/VocationalTrainingCenters/vocationalTrainingCentersHeader";
import TrainingCenterDetails from "../Components/Elements/VocationalTrainingCenters/trainingCenterDetails";
import WayToDonate from "../Components/Elements/Home/WayToDonate";
import VocationalTrainingCampaign from "../Components/Elements/VocationalTrainingCenters/VocationalTrainingCampaign";

export default function VocationalTrainingCenters() {
  return (
    <Layout2>
      <VocationalTrainingCentersHeader />
      <VocationalTrainingCampaign/>
      <TrainingCenterDetails />
      <WayToDonate />
    </Layout2>
  );
}
