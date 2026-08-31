import React from "react";
import styles from "./OurImpact.module.css";

const STATS = [
  { value: "9", label: "Own Schools in Punjab" },
  { value: "15", label: "Adopted Schools" },
  { value: "1", label: "Orphanage Home" },
  { value: "1", label: "Vocational Training Center" },
  { value: "24+", label: "Schools Running Across Pakistan" },
  { value: "6727+", label: "Students Enrollment" },
  { value: "67%", label: "Girl's Enrollment Ensured" },
  { value: "100%", label: "Digitally Connected Focus" },
];

export default function OurImpact() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>OUR IMPACT</h2>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          Education is one of Helpline&apos;s strongest and most established areas of work. The impact of education is measured in more than enrollment. It is seen when a child stays in school, gains confidence, learns consistently, and begins to imagine a different future.
        </p>
        <div className={styles.statsGrid}>
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`${styles.stat} ${(index + 1) % 4 !== 0 ? styles.statBorder : ""}`}
            >
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
