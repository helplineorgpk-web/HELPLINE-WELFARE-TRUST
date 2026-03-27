import React from "react";
import styles from "./ImpactStatsSection.module.css";

export default function ImpactStatsSection({ title, underlineColor = "teal", stats }) {
  const underlineClass = underlineColor === "blue" ? styles.underlineBlue : styles.underlineTeal;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={`${styles.underline} ${underlineClass}`} />
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
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
