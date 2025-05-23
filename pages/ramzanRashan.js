import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import Header from "../Components/Elements/Header/Header";
import RamzanRashanInfo from "../Components/Elements/RamzanRashan/RamzanRashanInfo";
import RamzanDistributionJourney from "../Components/Elements/RamzanRashan/RamzanDistributionJourney";
import RamzanDistributionArea from "../Components/Elements/RamzanRashan/RamzanDistributionArea";
import styles from "../styles/RamzanRashan.module.css";

export default function RamzanRashan() {
  const img = "/img/causes/cause25.jpg";

  return (
    <Layout2>
      <Header 
        background={img} 
        Detail={"Ramzan Rashan"} 
        datainfo={"Ramzan Rashan Program"} 
      />
      <div className={styles.ramzanContainer}>
        <RamzanRashanInfo />
        <div className={styles.distributionSection}>
          <RamzanDistributionJourney />
        </div>
        <div className={styles.areaSection}>
          <RamzanDistributionArea />
        </div>
      </div>
    </Layout2>
  );
}
