import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
import EducationHeader from "../Components/Elements/Education/EducationHeader";
import AlKitabSchoolsSection from "../Components/Elements/Education/AlKitabSchoolsSection";
import TransformingCommunities from "../Components/Elements/Education/TransformingCommunities";
import OwnSchoolsDetail from "../Components/Elements/Education/OwnSchoolsDetail";
import AdoptedSchoolsDetail from "../Components/Elements/Education/AdoptedSchoolsDetail";
import OurImpact from "../Components/Elements/Education/OurImpact";
import EmpoweringGirls from "../Components/Elements/Education/EmpoweringGirls";
import SuccessStories from "../Components/Elements/Education/SuccessStories";
import EducationKeySection from "../Components/Elements/Education/EducationKeySection";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";

const data = {
  Education: "Education",
};

export default function edu() {
  const cause = HelplineData.causes;

  return (
    <Layout2>
      <EducationHeader />
      <AlKitabSchoolsSection />
      <TransformingCommunities />
      <OwnSchoolsDetail />
      <AdoptedSchoolsDetail />
      <OurImpact />
      <EmpoweringGirls />
      <SuccessStories />
      <EducationKeySection />
      <CauseRecentCause
        categories={data}
        causes={cause}
        sectionTitle="Our Education Projects"
      />
    </Layout2>
  );
}
