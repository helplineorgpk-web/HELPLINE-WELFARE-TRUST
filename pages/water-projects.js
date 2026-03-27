import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
import SocialCapitalHeader from "../Components/Elements/SocialCapital/SocialCapitalHeader";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";

export default function WaterProjectsPage() {
  const cause = HelplineData.causes;
  const data = {
    Water: "Water",
  };

  return (
    <Layout2>
      <SocialCapitalHeader layout="donation" />
      <CauseRecentCause categories={data} causes={cause} />
    </Layout2>
  );
}
