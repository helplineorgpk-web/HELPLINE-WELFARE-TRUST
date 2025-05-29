import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";

import DisasterReliefProgram from "../Components/Elements/Disaster/DisasterReliefProgram";
import RehabGallery from "../Components/Elements/Rehabilitation/RehabGallery";
import VideoSection from "../Components/Elements/VideoSection/VideoSection";
import RehabHeader from "../Components/Elements/Disaster/RehabHeader";

export default function edu() {
  const data = HelplineData.disasterContent;
  return (
    <Layout2>
      <RehabHeader />
      <VideoSection />
      <DisasterReliefProgram data={data} />
      <RehabGallery />
    </Layout2>
  );
}
