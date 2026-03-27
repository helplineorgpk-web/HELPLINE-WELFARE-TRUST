import React from "react";
import styles from "./WashStats.module.css";

const STATS = [
  { value: "5", label: "No. of Dams Constructed" },
  { value: "33", label: "Solar-Powered Water Filtration Plants Installed" },
  { value: "1629", label: "Hand Pumps Installed" },
  { value: "98%", label: "of the Population with Access to Improved Water Sources in Helpline Welfare Trust Program Areas" },
  { value: "1004", label: "Latrines Constructed" },
  { value: "986815", label: "Trees Planted" },
  { value: "608", label: "No. of Housing Units Completed" },
  { value: "60", label: "No. of Hands Washing Units" },
  { value: "49", label: "No. of Water Chillers Installed" },
  { value: "156", label: "Solarization of housing units" },
];

export default function WashStats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>SUSTAINABLE ENVIRONMENT &amp; WASH</h2>
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
