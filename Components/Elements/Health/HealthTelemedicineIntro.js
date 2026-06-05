import React from "react";
import styles from "./HealthTelemedicineIntro.module.css";

export default function HealthTelemedicineIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>TELE-MEDICINE DISPENSARIES</h2>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          Helpline Welfare Trust is establishing tele-medicine medical units in Rana Town, Umar Kot,
          and Shamki Village — underserved communities where families cannot reach city hospitals.
          Each dispensary provides free medicines, doctor checkups, and online specialist consultations,
          reducing travel burden and bringing dignified care closer to home.
        </p>
      </div>
    </section>
  );
}
