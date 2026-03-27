import React from "react";
import styles from "./LivelihoodStats.module.css";

const STATS_ROW1 = [
  { value: "11814", label: "Participants trained in technical/vocational skills training" },
  { value: "6982", label: "Families Supported to grow food (Kitchen Gardening)" },
  { value: "555", label: "Goats/Sheep Assets transfer for Entrepreneurs livestock (Goat/Sheep Sets)" },
  { value: "218", label: "Micro Enterprises Established" },
];

const STATS_ROW2 = [
  { value: "205", label: "Employable skills for youth at the local Institute" },
  { value: "789", label: "Farmers trained in Climate Smart Agriculture" },
  { value: "455", label: "# of persons trained in diploma course" },
  { value: "150", label: "Animal breed improvement (artificial Insemination)" },
];

const STATS_ROW3 = [
  { value: "7384", label: "Poultry set distributed" },
  { value: "17196", label: "Families provided Ramadan food packages" },
  { value: "671", label: "Families distributed meat through the Qurbani Project" },
];

export default function LivelihoodStats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>SKILLS, TRAINING &amp; LIVELIHOODS</h2>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          Support for this focus area helps people move from vulnerability toward self-reliance. It is practical, measurable, and deeply dignified work. Donors are not only helping someone survive today; they are helping them become stronger tomorrow.
        </p>

        <div className={styles.statsGrid}>
          {STATS_ROW1.map((stat, index) => (
            <div
              key={stat.label}
              className={`${styles.stat} ${index < STATS_ROW1.length - 1 ? styles.statBorder : ""}`}
            >
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.statsGrid}>
          {STATS_ROW2.map((stat, index) => (
            <div
              key={stat.label}
              className={`${styles.stat} ${index < STATS_ROW2.length - 1 ? styles.statBorder : ""}`}
            >
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={`${styles.statsGrid} ${styles.statsGridThree}`}>
          {STATS_ROW3.map((stat, index) => (
            <div
              key={stat.label}
              className={`${styles.stat} ${index < STATS_ROW3.length - 1 ? styles.statBorder : ""}`}
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
