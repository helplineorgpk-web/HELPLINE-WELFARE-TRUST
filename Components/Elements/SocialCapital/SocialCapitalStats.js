import React from "react";
import styles from "./SocialCapitalStats.module.css";

const STATS = [
  { value: "332", label: "# of VDO\u2019s formed" },
  { value: "5050", label: "Participant of CBDRM" },
  { value: "25069", label: "Participant trained in CMST" },
  { value: "533", label: "Participant trained in Advocacy & Human Right" },
  { value: "4433", label: "Capacity building of Sector Committees" },
  { value: "4151", label: "Gender mainstream and woman empowerment training" },
];

export default function SocialCapitalStats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>SOCIAL CAPITAL DEVELOPMENT</h2>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          These key stats reflect our commitment to empowering communities
          across Pakistan. Each number tells a story of hope, growth, and lasting
          impact created through your support
        </p>
        <div className={styles.statsGrid}>
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`${styles.stat} ${(index + 1) % 3 !== 0 ? styles.statBorder : ""}`}
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
