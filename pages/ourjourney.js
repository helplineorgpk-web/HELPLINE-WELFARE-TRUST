import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import AboutBreadCumb from "../Components/Elements/About/AboutBreadCumb";
import AboutJourney from "../Components/Elements/About/AboutJourney";

export default function ourjourney() {
  return (
    <Layout2>
      <AboutBreadCumb
        title="Our Journey"
        description="Explore Helpline's journey of impact, growth, and community transformation across the years."
        backgroundImage="/img/Campaigns/OurJoureney.webp"
      />
      <AboutJourney />
    </Layout2>
  );
}
