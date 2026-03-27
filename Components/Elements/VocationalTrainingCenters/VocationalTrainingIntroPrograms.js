import React from "react";
import Programs from "./programs";
import styles from "./VocationalTrainingIntroPrograms.module.css";

export default function VocationalTrainingIntroPrograms() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span>Vocational</span> Training Center
        </h2>
        <p className={styles.description}>
          Helpline&apos;s vocational training work creates structured learning
          opportunities for people who need practical skills rather than
          academic pathways alone. These centres help participants gain
          confidence and hands-on ability to begin earning and contributing to
          household income under the umbrella of{" "}
          <strong>MAWAKHAT-E-MADINA</strong>.
        </p>
        <Programs />
      </div>
    </section>
  );
}
