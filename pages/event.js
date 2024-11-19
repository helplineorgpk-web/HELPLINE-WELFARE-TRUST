import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import EventBreadCrumb from "../Components/Elements/Event/EventBreadCrumb";
import EventDonationArea from "../Components/Elements/Event/EventDonationArea";
import { HelplineData } from "../pages/api/data";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";

const data = {
  AllCategories: "All Categories",
  HouseConstructions: "House Constructions",
  Water: "Water",
  Education: "Education",
  Medical: "Medical",
  Food: "Food",
  Education2: "Idara-e-Nazariya-e-Pakistan",
  Education3: "Al Kitab Education System",
};
export default function Event() {
  const cause = HelplineData.causes;
  return (
    <Layout2>
      <EventBreadCrumb />
      <CauseRecentCause categories={data} causes={cause} />
      <EventDonationArea />
    </Layout2>
  );
}
