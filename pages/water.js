import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
import WaterHeader from "../Components/Elements/Water/WaterHeader";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";
import WaterGallary from "../Components/waterGallary";
const data = {
  Water: "Water",
};
export default function water() {
  const cause = HelplineData.causes;
  return (
    <Layout2>
      <WaterHeader image={"/img/causes/watercover.png"} />
      <CauseRecentCause categories={data} causes={cause} />
      <WaterGallary />
    </Layout2>
  );
}
