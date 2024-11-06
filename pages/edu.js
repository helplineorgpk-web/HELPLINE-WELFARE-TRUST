import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import AppealHeader from "../Components/Layout/AppealHeader";
import { HelplineData } from "../pages/api/data";
export default function edu() {
  return (
    <Layout2>
      <AppealHeader content={HelplineData.educationContent} />
    </Layout2>
  );
}
