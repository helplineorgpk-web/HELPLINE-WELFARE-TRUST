import React from "react";
import AboutBreadCumb from "../Components/Elements/About/AboutBreadCumb";
import Layout2 from "../Components/Layout/Layout2";
import { NextSeo } from "next-seo";
import AnnualReportsFeatured from "../Components/Elements/AnnualReports/AnnualReportsFeatured";
import AnnualReportsGrid from "../Components/Elements/AnnualReports/AnnualReportsGrid";

export default function AnnualReportsPage() {
  return (
    <Layout2>
      <NextSeo
        title="Annual Reports | Our Impact | Helpline Welfare Organization"
        description="Our annual reports showcase transparency, accountability, and impact. Explore 990 Forms, Audited Statements, and Annual Reports year after year."
        canonical="https://helplinewelfare.org/annual-reports"
      />
      <AboutBreadCumb
        title="Annual Reports"
        description="Our annual reports showcase the difference your support makes. Each report highlights milestones, financial accountability, and the lives transformed through Helpline Welfare Trust programs in education, healthcare, economic empowerment, environment, and community development. Discover how, year after year, we are building a stronger, self-reliant Pakistan together."
        backgroundImage="/img/Campaigns/Report.webp"
      />
      <AnnualReportsFeatured />
      <AnnualReportsGrid />
    </Layout2>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400,
  };
}
