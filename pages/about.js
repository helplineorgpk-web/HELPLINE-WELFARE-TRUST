import React from "react";
import AboutBreadCumb from "../Components/Elements/About/AboutBreadCumb";
import AboutFeatureArea from "../Components/Elements/About/AboutFeatureArea";
import AboutVideoArea from "../Components/Elements/About/AboutVideoArea";
import Layout2 from "../Components/Layout/Layout2";

import OurPrincipal from "../Components/Elements/About/OurPrincipal";
import VissionMission from "../Components/Elements/About/VissionMission";
import OurIdentity from "../Components/Elements/About/OurIdentity";
import ChairmanMessage from "../Components/Elements/CeoMessage/CeoMessage";
import OurIntro from "../Components/Elements/About/OurIntro";
import Eligibility from "../Components/Layout/Eligibility";
import FounderMessage from "../Components/Elements/About/FounderMessage.js";

export default function About() {
  return (
    <Layout2>
      <AboutBreadCumb />
      <OurIntro />
      <FounderMessage />
      <ChairmanMessage />
      <OurIdentity />
      {/* <OurPrincipal /> */}
      {/* <VissionMission /> */}
      <AboutFeatureArea />
      <Eligibility />
      {/* <AboutVideoArea /> */}
    </Layout2>
  );
}
