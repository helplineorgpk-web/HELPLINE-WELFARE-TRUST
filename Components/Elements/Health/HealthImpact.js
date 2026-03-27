import React from "react";
import styles from "./HealthImpact.module.css";

const STATS = [
  { value: "2,000+", label: "Water Pumps Installed Across Pakistan" },
  { value: "1,000+", label: "Free Cataract Operations" },
  { value: "3,000+", label: "Free Medical Care Cases" },
  { value: "855", label: "Medical Camps Organized" },
  { value: "36,923", label: "Households Provided Primary Healthcare" },
  { value: "2", label: "Hospitals" },
  { value: "1", label: "Mobile Dispensary" },
  { value: "3", label: "Free Meal Services" },
  { value: "1", label: "Ambulance" },
  { value: "2", label: "Rehabilitation Hospitals" },
  { value: "939,129", label: "Beneficiaries" },
  { value: "2", label: "Million / Year Expenditure" },
];

export default function HealthImpact() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>OUR IMPACT</h2>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          This focus area combines immediate relief with preventive benefit. A patient treated in time avoids deeper crisis. A person who receives cataract support regains confidence and function. A community with clean water is less exposed to avoidable illness.
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
