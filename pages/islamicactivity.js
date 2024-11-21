import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";
import { HelplineData } from "../pages/api/data";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";

const data = {
  Aqiqah: "Aqiqah",
  Fidyah: "Fidyah",
  Kaffarah: "Kaffarah",
  Sadaqah: "Sadaqah",
};
export default function islamicactivity() {
  const IslamicProject = HelplineData.causes;
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.HelplineIslamicData}
        image={HelplineData.HelplineIslamicData.headerBg}
      />
      <CauseRecentCause categories={data} causes={IslamicProject} />
    </Layout2>
  );
}
