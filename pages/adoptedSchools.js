import React from "react";
import AdoptedSchoolsBreadCrumb from "../Components/Elements/AdoptedSchool/AdoptedSchoolsBreadCrumb";
import Layout2 from "../Components/Layout/Layout2";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";
import { HelplineData } from "./api/data";

const data = {
  AdoptedSchools: "Adopted Schools",
};

const ADOPTED_SCHOOLS_TITLE = "Our Adopted Schools";
const ADOPTED_SCHOOLS_DESCRIPTION = "Helpline has adopted and revitalized government schools across Sindh and other regions, turning under-resourced campuses into thriving centers of learning. Each adopted school receives infrastructure support, qualified teachers, learning materials, and community engagement—ensuring every child has access to quality education.";

export default function AdoptedSchools() {
  const adoptedSchoolsProject = HelplineData.adoptedSchools;

  return (
    <Layout2>
      <AdoptedSchoolsBreadCrumb />
      <CauseRecentCause
        categories={data}
        causes={adoptedSchoolsProject}
        sectionTitle={ADOPTED_SCHOOLS_TITLE}
        sectionDescription={ADOPTED_SCHOOLS_DESCRIPTION}
      />
    </Layout2>
  );
}
