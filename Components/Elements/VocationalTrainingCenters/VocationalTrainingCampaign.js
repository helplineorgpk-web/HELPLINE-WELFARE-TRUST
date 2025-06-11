import React from "react";
import Image from "next/image";
import styles from "./Campaign.module.css";

export default function VocationalTrainingCampaign() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <Image
          src="/img/Campaigns/Vocational.png"
          alt="Mohammad Yousaf Vocational Training Centre"
          width={600}
          height={800}
          className={styles.mainImage}
          priority
        />
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.content}>
          <div className={styles.donateSection}>
            <h2 className={styles.donateTitle}>DONATE</h2>
            <h3 className={styles.forMaking}>FOR MAKING</h3>
            <h3 className={styles.centerTitle}>Vocational Training Center</h3>
          </div>

          <div className={styles.grid}>
            <div className={styles.projectsSection}>
              <h3 className={styles.sectionTitle}>Training Projects</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>Domestic Tailoring</li>
                <li className={styles.listItem}>Home Appliance Repair</li>
                <li className={styles.listItem}>Computer Lab</li>
                <li className={styles.listItem}>Electrician</li>
              </ul>
            </div>

            <div className={styles.costSection}>
              <h3 className={styles.sectionTitle}>Estimate Cost Support</h3>
              <div className={styles.costItem}>
                Tools / Machines / Furniture — <strong>11 Million PKR</strong>
              </div>
              <div className={styles.costItem}>
                Recurring Expenditure — <strong>635,000 PKR / month</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
