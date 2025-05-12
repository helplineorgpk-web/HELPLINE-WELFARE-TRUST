import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";
import { HelplineData } from "../pages/api/data";
import EducationHeader from "../Components/Elements/Education/EducationHeader";

const data = {
  Education: "Education",
};
export default function edu() {
  const educationProject = HelplineData.causes;
  return (
    <Layout2>
      <EducationHeader />
      <CauseRecentCause categories={data} causes={educationProject} />
    </Layout2>
  );
}
