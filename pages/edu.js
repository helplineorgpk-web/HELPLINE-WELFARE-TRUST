import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import AppealHeader from "../Components/Layout/AppealHeader";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";
import { HelplineData } from "../pages/api/data";

const data = {
  Water: "Helpline Schools",
  HouseConstructions: "Helpline Adopted Students",
  Education: "Al Kitab Education System",
};
export default function edu() {
  const cause = HelplineData.education;
  return (
    <Layout2>
      <AppealHeader content={HelplineData.educationContent} />
      <CauseRecentCause categories={data} causes={cause} />
    </Layout2>
  );
}
