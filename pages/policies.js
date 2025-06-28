import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { NextSeo } from "next-seo";
import PoliciesBreadCrumb from "../Components/Elements/Policies/PoliciesBreadCrumb";
import PoliciesContent from "../Components/Elements/Policies/PoliciesContent";
import OurPolicy from "../Components/Elements/Policies/OurPolicy";

export default function PoliciesPage() {
  return (
    <Layout2>
      <NextSeo
        title="Our Policies | Helpline Welfare Organization"
        description="Learn about Helpline Welfare Organization's policies, guidelines, and principles that govern our operations and ensure transparency."
        canonical="https://helplinewelfare.org/policies"
      />
      <PoliciesBreadCrumb />
      <OurPolicy />
      <PoliciesContent />
    </Layout2>
  );
}
