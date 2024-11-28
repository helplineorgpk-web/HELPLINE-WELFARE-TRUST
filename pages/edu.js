import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import AppealHeader from "../Components/Layout/AppealHeader";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";
import { HelplineData } from "../pages/api/data";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";

const data = {
  Education: "Education",
};
export default function edu() {
  const educationProject = HelplineData.causes;
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.educationContent}
        image={HelplineData.educationContent.headerBg}
      />
      <CauseRecentCause categories={data} causes={educationProject} />
    </Layout2>
  );
}
