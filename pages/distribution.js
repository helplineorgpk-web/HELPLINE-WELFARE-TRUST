import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import styles from "../public/css/theme.module.css";
import DisasterHeader from "../Components/Elements/Disaster/DisasterHeader";
import { HelplineData } from "./api/data";
import HasneDistribution from "../Components/Elements/Hasne/HasneDistribution";
import HasneDistribute from "./hasneDistribution";
import EligibilityCriteria from "../Components/Layout/Eligibility";
import FamilyWelfareInfo from "../Components/Elements/FamilyWelfare/FamilyWelfareInfo";
import Header from "../Components/Elements/Header/Header";
export default function Distribution() {
  const data = HelplineData.HelplineRajanpurData;
  return (
    <Layout2>
      <div className={styles.themeWrapper}>
        <Header
          background={HelplineData.HelplineRajanpurData.headerBg}
          Detail={"Family Welfare"}
          datainfo={"Family Welfare"}
        />

        <FamilyWelfareInfo content={HelplineData.familyWelfareContent} />
        <HasneDistribution data={data} />
        <HasneDistribute />
        <EligibilityCriteria />
      </div>
    </Layout2>
  );
}
