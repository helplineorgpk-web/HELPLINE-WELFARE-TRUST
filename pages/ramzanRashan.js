import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import SocialCapitalHeader from "../Components/Elements/SocialCapital/SocialCapitalHeader";
import RamzanRashanInfo from "../Components/Elements/RamzanRashan/RamzanRashanInfo";
import RamzanDistributionJourney from "../Components/Elements/RamzanRashan/RamzanDistributionJourney";
import RamzanDistributionArea from "../Components/Elements/RamzanRashan/RamzanDistributionArea";
import styles from "../styles/RamzanRashan.module.css";
import RashanGallery from "../Components/Elements/Rashan/RashanGallery";

export default function RamzanRashan() {
  return (
    <Layout2>
      <SocialCapitalHeader layout="donation" />
      <div className={styles.ramzanContainer}>
        <RamzanRashanInfo />
        <div className={styles.distributionSection}>
          <RamzanDistributionJourney />
        </div>
        <RashanGallery />
        <div className={styles.areaSection}>
          <RamzanDistributionArea />
        </div>
      </div>
    </Layout2>
  );
}
