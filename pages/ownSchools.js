import React from "react";
import OwnSchoolsBreadCrumb from "../Components/Elements/OwnSchools/OwnSchoolsBreadCrumb";
import Layout2 from "../Components/Layout/Layout2";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";
import { HelplineData } from "../pages/api/data";

const data = {
  OwnSchools: "Own School",
};

const OWN_SCHOOLS_TITLE = "Our Own Schools";
const OWN_SCHOOLS_DESCRIPTION = "Helpline runs its own schools across Punjab and beyond, providing free or heavily subsidized quality education to underprivileged children. From Al-Kitab Education System to Irtaqa-e-Itfal, Ch Rehmat Ali, Iman Maryam Girls School, Al-Kitab Umar Kot Muridke, and more—each institution is a beacon of hope and opportunity.";

export default function OwnSchools() {
  const ownSchoolsProject = HelplineData.ownSchools;

  return (
    <Layout2>
      <OwnSchoolsBreadCrumb />
      <CauseRecentCause
        categories={data}
        causes={ownSchoolsProject}
        sectionTitle={OWN_SCHOOLS_TITLE}
        sectionDescription={OWN_SCHOOLS_DESCRIPTION}
      />
    </Layout2>
  );
}
