import React from "react";
import AboutBreadCumb from "../Components/Elements/About/AboutBreadCumb";
import AboutFeatureArea from "../Components/Elements/About/AboutFeatureArea";
import AboutVideoArea from "../Components/Elements/About/AboutVideoArea";
import Layout2 from "../Components/Layout/Layout2";
import AboutTeam from "../Components/Elements/About/AboutTeam";
import CentralExectiveCommittee from "../Components/Elements/About/CentralExectiveCommittee";
import OurPrincipal from "../Components/Elements/About/OurPrincipal";
import VissionMission from "../Components/Elements/About/VissionMission";
import OurIdentity from "../Components/Elements/About/OurIdentity";

export default function About() {
  return (
    <Layout2>
      <AboutBreadCumb />
      <OurPrincipal />
      <OurIdentity />
      <VissionMission />
      <AboutFeatureArea />
      <AboutVideoArea />
      <CentralExectiveCommittee />
      <AboutTeam />
    </Layout2>
  );
}
