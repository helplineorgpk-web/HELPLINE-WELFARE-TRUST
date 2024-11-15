import React from "react";
import CauseBreadCrumb from "../Components/Elements/Cause/CauseBreadCrumb";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
const data = {
  HouseConstructions: "House Constructions",
  Water: "Water",
  Education: "Education",
  Medical: "Medical",
  Food: "Food",
  AllCategories: "All Categories",
};

export default function Cause() {
  const cause = HelplineData.causes;
  return (
    <Layout2>
      <CauseBreadCrumb />
      <CauseRecentCause categories={data} causes={cause} />
    </Layout2>
  );
}
