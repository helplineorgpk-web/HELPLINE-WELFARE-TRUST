import React from "react";
import styles from "../../../public/css/Certification.module.css";
import { HelplineData } from "../../../pages/api/data";

function Journey() {
  const data = HelplineData.journeyData[0];
  return (
    <section className={styles.certificationSection}>
      <div className={styles.container}>
        <div className={styles.certificationContent}>
          <h4 className={styles.certificationTitle}>{data.title}</h4>
          <h2 className={styles.certificationTitle}>{data.title1}</h2>

          <p className={styles.certificationAnnouncement}>
            {data.announcement}
          </p>
          <h4 className={styles.certificationConclusion}>{data.conclusion}</h4>
          <p className={styles.certificationAnnouncement}>
            {data.announcement1}
          </p>
        </div>
        <div className={styles.certificationImages}>
          {data.datayearly.map((item) => (
            <div key={item.id} className={styles.certificationItem}>
              <h2 className={styles.certificationTitle}>{item.year}</h2>
              <p className={styles.certificationAnnouncement}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
