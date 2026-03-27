import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
import SocialCapitalHeader from "../Components/Elements/SocialCapital/SocialCapitalHeader";
import MasjidProgram from "../Components/Elements/Masjid/MasjidProgram";
import MasjidMaktab from "../Components/Elements/MasjidMaktab/MasjidMaktab";

export default function masjid() {
  const Data = HelplineData.masjidData;
  return (
    <Layout2>
      <SocialCapitalHeader layout="donation" />
      <MasjidMaktab />
      <MasjidProgram swiperData={Data} />
    </Layout2>
  );
}
