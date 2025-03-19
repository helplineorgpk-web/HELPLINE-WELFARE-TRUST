import React from "react";
import SupportersBreadCrumb from "../Components/Elements/Supporters/SupportersBreadCrumb";
import Layout2 from "../Components/Layout/Layout2";
import SupportersCard from "../Components/Elements/Supporters/SupportersCard";
export default function Supporters() {
  return (
    <Layout2>
      <SupportersBreadCrumb />
      <SupportersCard />
    </Layout2>
  );
}
