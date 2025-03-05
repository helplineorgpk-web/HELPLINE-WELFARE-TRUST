import React from "react";
import OwnSchoolsBreadCrumb from "../Components/Elements/OwnSchools/OwnSchoolsBreadCrumb";
import Layout2 from "../Components/Layout/Layout2";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";
import { HelplineData } from "../pages/api/data";

const data = {
  OwnSchools: "Own School",
};
export default function OwnSchools() {
  const ownSchoolsProject = HelplineData.ownSchools;

  return (
    <Layout2>
      <OwnSchoolsBreadCrumb />
      <CauseRecentCause categories={data} causes={ownSchoolsProject} />
    </Layout2>
  );
}
