import React from "react";
import AboutBreadCumb from "../Components/Elements/About/AboutBreadCumb";
import Layout2 from "../Components/Layout/Layout2";
import VolunteerPageSection from "../Components/Elements/Volunteer/VolunteerPageSection";

export default function volunteer() {
  return (
    <Layout2>
      <AboutBreadCumb
        title="Volunteer"
        description="Join our volunteer network and help transform lives through education, healthcare, and community support initiatives across Pakistan."
        backgroundImage="/img/Campaigns/Volounteer.webp"
      />
      <VolunteerPageSection />
    </Layout2>
  );
}
