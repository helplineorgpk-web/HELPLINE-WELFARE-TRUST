import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import AboutBreadCumb from "../Components/Elements/About/AboutBreadCumb";
import AboutJourney from "../Components/Elements/About/AboutJourney";

export default function ourjourney() {
  return (
    <Layout2>
      <AboutBreadCumb content={"Our Journey"} />
      <AboutJourney />
    </Layout2>
  );
}
