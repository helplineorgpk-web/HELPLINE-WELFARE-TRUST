import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import Health2 from "../Components/Layout/Health2";
import Health3 from "../Components/Layout/Health3";
import AppealHeader from "../Components/Layout/AppealHeader";
import { HelplineData } from "../pages/api/data";

export default function health() {
  return (
    <Layout2>
      <AppealHeader content={HelplineData.HelplineHealthData} />
      <Health2 />
      <Health3 />
    </Layout2>
  );
}
