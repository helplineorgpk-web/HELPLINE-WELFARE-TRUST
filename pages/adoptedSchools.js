import React from "react";
import AdoptedSchoolsBreadCrumb from "../Components/Elements/AdoptedSchool/AdoptedSchoolsBreadCrumb";
import Layout2 from "../Components/Layout/Layout2";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";
import { HelplineData } from "./api/data";

const data = {
  AdoptedSchools: "Adopted Schools",
};
export default function AdoptedSchools() {
  const   adoptedSchoolsProject = HelplineData.adoptedSchools;

  return (
    <Layout2>
      <AdoptedSchoolsBreadCrumb/>
      <CauseRecentCause categories={data} causes={adoptedSchoolsProject} />
    </Layout2>
  );
}
