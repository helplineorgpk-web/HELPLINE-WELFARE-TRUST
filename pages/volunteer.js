import React from "react";
import dynamic from "next/dynamic";
import AboutBreadCumb from "../Components/Elements/About/AboutBreadCumb";
import Layout2 from "../Components/Layout/Layout2";

const VolunteerPageSection = dynamic(
  () => import("../Components/Elements/Volunteer/VolunteerPageSection"),
  { ssr: false }
);

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

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400,
  };
}
