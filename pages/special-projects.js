import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import SpecialProjectsHeader from "../Components/Elements/SpecialProjects/SpecialProjectsHeader";
import SpecialProjectsList from "../Components/Elements/SpecialProjects/SpecialProjectsList";

export default function SpecialProjectsPage() {
  return (
    <Layout2>
      <SpecialProjectsHeader />
      <SpecialProjectsList />
    </Layout2>
  );
}
