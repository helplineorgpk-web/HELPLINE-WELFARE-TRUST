import React from "react";
import OurPresenceBreadCrumb from "../Components/Elements/OurPresence/OurPresenceBreadCrumb";
import Layout2 from "../Components/Layout/Layout2";
import CitiesCards from "../Components/Elements/OurPresence/CitiesCards";
export default function OurPresence() {
  return (
    <Layout2>
      <OurPresenceBreadCrumb />
      <CitiesCards />
    </Layout2>
  );
}
