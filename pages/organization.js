import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import AboutTeam from "../Components/Elements/About/AboutTeam";
import CentralExectiveCommittee from "../Components/Elements/About/CentralExectiveCommittee";
import FriendsReformers from "../Components/Elements/About/Friends&Reformers";
function organization() {
  return (
    <Layout2>
      <CentralExectiveCommittee />
      <FriendsReformers />
      <AboutTeam />
    </Layout2>
  );
}

export default organization;
