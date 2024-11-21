import React from "react";
import DonationBreadCrumb from "../Components/Elements/Donation/DonationBreadCrumb";
import DonationDonationArea from "../Components/Elements/Donation/DonationDonationArea";
import Layout2 from "../Components/Layout/Layout2";
import WayToDonate from "../Components/Elements/Home/WayToDonate";

export default function donation() {
  return (
    <Layout2>
      <DonationBreadCrumb />
      <WayToDonate />
      <DonationDonationArea />
    </Layout2>
  );
}
