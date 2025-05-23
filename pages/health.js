import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import Health2 from "../Components/Layout/Health2";
import Health3 from "../Components/Layout/Health3";
import { HelplineData } from "../pages/api/data";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";

const data = {
  Medical: "Medical",
};
export default function health() {
  const cause = HelplineData.causes;
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.HelplineHealthData}
        image={HelplineData.HelplineHealthData.headerBg}
      />
      <CauseRecentCause categories={data} causes={cause} />
      <Health2 />
      <Health3 />
    </Layout2>
  );
}
