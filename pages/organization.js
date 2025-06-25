import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import CentralExectiveCommittee from "../Components/Elements/About/CentralExectiveCommittee";
import FriendsReformers from "../Components/Elements/About/Friends&Reformers";
import EducationWing from "../Components/Elements/About/EducationWing";
import RegionalHead from "../Components/Elements/About/RegionalHead";
import HeadOfficeTeam from "../Components/Elements/About/HeadOfficeTeam";
import OrganizationHeader from "../Components/Elements/About/OrganizationHeader";
function organization() {
  return (
    <Layout2>
      <OrganizationHeader />
      <CentralExectiveCommittee />
      <HeadOfficeTeam />
      <EducationWing />
      <RegionalHead />
      <FriendsReformers />
    </Layout2>
  );
}

export default organization;
