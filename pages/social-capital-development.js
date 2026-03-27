import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import SocialCapitalHeader from "../Components/Elements/SocialCapital/SocialCapitalHeader";
import WashStats from "../Components/Elements/Water/WashStats";
import WashDescription from "../Components/Elements/Water/WashDescription";
import WashSuccessStories from "../Components/Elements/Water/WashSuccessStories";
import SocialWelfareMasjidBrief from "../Components/Elements/SocialCapital/SocialWelfareMasjidBrief";
import SocialWelfareRamzanBrief from "../Components/Elements/SocialCapital/SocialWelfareRamzanBrief";
import SocialWelfareRashanBrief from "../Components/Elements/SocialCapital/SocialWelfareRashanBrief";
import SocialWelfareWaterBrief from "../Components/Elements/SocialCapital/SocialWelfareWaterBrief";
import styles from "../Components/Elements/SocialCapital/SocialWelfareBrief.module.css";

export default function SocialCapitalDevelopment() {
  return (
    <Layout2>
      <SocialCapitalHeader layout="donation" />
      <WashStats />
      <WashDescription />
      <WashSuccessStories />
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <SocialWelfareMasjidBrief />
            <SocialWelfareRamzanBrief />
            <SocialWelfareRashanBrief />
            <SocialWelfareWaterBrief />
          </div>
        </div>
      </section>

    </Layout2>
  );
}
