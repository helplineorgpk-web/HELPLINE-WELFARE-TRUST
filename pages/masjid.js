import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import MasjidProgram from "../Components/Elements/Masjid/MasjidProgram";
import MasjidMaktab from "../Components/Elements/MasjidMaktab/MasjidMaktab";

export default function masjid() {
  const Data = HelplineData.masjidData;
  return (
    <Layout2>
      <DisasterHeader
        content={HelplineData.MasjidContent}
        image={HelplineData.MasjidContent.headerBg}
      />
      <MasjidMaktab />
      <MasjidProgram swiperData={Data} />
    </Layout2>
  );
}
