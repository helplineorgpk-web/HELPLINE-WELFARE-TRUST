import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import Qurbani from "../Components/Elements/Qurbani/Qurbani";

export default function masjid() {
  const Data = HelplineData.masjidData;
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.MasjidContent}
        image={HelplineData.MasjidContent.headerBg}
      />
      <Qurbani swiperData={Data} />
    </Layout2>
  );
}
