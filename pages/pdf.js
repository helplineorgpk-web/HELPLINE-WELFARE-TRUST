import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import { HelplineData } from "../pages/api/data";
import ITLabs from "../Components/Elements/ITLabs/ITLabs";
export default function pdf() {
  const data = HelplineData.HelplineItLabsData;
  return (
    <Layout2>
      <div>pdfs</div>
    </Layout2>
  );
}
