import React from "react";
import styles from "./HealthWomenChildren.module.css";

const ITEMS = [
  {
    id: "maternity",
    title: "Patient Care",
    description: "Support can be directed toward patient care for those who cannot afford medical consultations or treatment",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M14 38c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 24v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 34h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 14c2 2 2 6 0 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "immunity",
    title: "Medicines & Medical Outreach",
    description: "Your support helps provide essential medicines and medical outreach to families in underserved areas",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <path d="M24 8v4M24 36v4M8 24h4M36 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M24 20v8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 16l-4-4M28 16l4-4M20 32l-4 4M28 32l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "planning",
    title: "Cataract Procedures",
    description: "Support helps restore sight for patients who would otherwise continue to suffer in silence",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <circle cx="18" cy="14" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="14" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M8 36c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 36c0-4.4 1.8-7 4-7s4 2.6 4 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 26v4M26 30h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "training",
    title: "Water Pumps & Filtration",
    description: "Support clean water infrastructure including water pumps and filtration systems for communities",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <rect x="10" y="10" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M10 18h28" stroke="currentColor" strokeWidth="2" />
        <path d="M18 38h12M24 30v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 24h4M18 26h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "school",
    title: "Give Where Needed Most",
    description: "Some donors prefer to give where the need is greatest. Your support can go to the area of healthcare that needs it most",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <path d="M8 18l16-8 16 8v20H8V18z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 38v-8h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 18v6M21 21h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function HealthWomenChildren() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          HOW YOUR SUPPORT HELPS
        </h2>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          Your support can help a family access treatment, a patient receive needed medicine, a person regain sight, or a community drink safe water. These are direct, visible acts of care that protect life and reduce suffering.
        </p>
        <div className={styles.grid}>
          {ITEMS.slice(0, 3).map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.iconWrap}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </article>
          ))}
        </div>
        <div className={styles.bottomRow}>
          {ITEMS.slice(3).map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.iconWrap}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
