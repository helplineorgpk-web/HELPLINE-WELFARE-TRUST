import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import AppealHeader from "../Components/Layout/AppealHeader";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";
import { HelplineData } from "../pages/api/data";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";

const data = {
  Water: "Helpline Schools",
  HouseConstructions: "Helpline Adopted Students",
  Education: "Al Kitab Education System",
  AllCategories: "All Categories",
};
export default function edu() {
  const cause = HelplineData.education;
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.educationContent}
        image={HelplineData.educationContent.headerBg}
      />
      <CauseRecentCause categories={data} causes={cause} />
    </Layout2>
  );
}
