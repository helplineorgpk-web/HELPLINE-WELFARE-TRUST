import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import OrphanageHeader from "../Components/Elements/Orphanage/OrphanageHeader";
import OrphanageDetails from "../Components/Elements/Orphanage/OrphanageDetails";
import WayToDonate from "../Components/Elements/Home/WayToDonate";

export default function Orphanage() {
  return (
    <Layout2>
      <OrphanageHeader />
      <OrphanageDetails />
      <WayToDonate />
    </Layout2>
  );
}
