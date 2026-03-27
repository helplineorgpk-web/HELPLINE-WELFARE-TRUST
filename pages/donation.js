import React from "react";
import DonationBreadCrumb from "../Components/Elements/Donation/DonationBreadCrumb";
import DonationDonationArea from "../Components/Elements/Donation/DonationDonationArea";
import DonationExpenseRatios from "../Components/Elements/Donation/DonationExpenseRatios";
import DonationWhereMoneyGoes from "../Components/Elements/Donation/DonationWhereMoneyGoes";
import DonationFAQ from "../Components/Elements/Donation/DonationFAQ";
import Layout2 from "../Components/Layout/Layout2";
import WayToDonate from "../Components/Elements/Home/WayToDonate";
import DonationHeader from "../Components/Elements/Home/DonationHeader";

export default function donation() {
  return (
    <Layout2>
      {/* <DonationBreadCrumb /> */}
      <DonationHeader />
      <WayToDonate />
      <DonationDonationArea />
      <DonationExpenseRatios />
      <DonationWhereMoneyGoes />
      <DonationFAQ />
    </Layout2>
  );
}
