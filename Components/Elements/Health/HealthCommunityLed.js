import React from "react";
import styles from "./HealthCommunityLed.module.css";

const ITEMS = [
  {
    id: "chc",
    title: "Medical Support",
    description: "Helpline supports basic healthcare access for deserving patients who need consultation, treatment, or organized medical help",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <rect x="10" y="14" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M24 20v12M18 26h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 38v-6h12v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 8v6M20 10h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "doorstep",
    title: "Medicine Service",
    description: "For many patients, the real challenge begins when they cannot afford the medicine they need. Medicine support helps close that gap",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <rect x="8" y="22" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M8 22l9-10 9 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 34v6h8v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="30" y="16" width="10" height="14" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M33 20v2M37 20v2M33 25v2M37 25v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "maternal",
    title: "Cataract & Vision Support",
    description: "Cataract support restores more than vision. It restores independence and dignity, especially for elderly and low-income patients",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <circle cx="20" cy="14" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M10 38c0-5.5 4.5-10 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="22" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M24 38c0-4.4 3.6-8 8-8s8 3.6 8 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 30l4-2 4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "detection",
    title: "Clean Water",
    description: "By installing water pumps and water access solutions, this work helps reduce disease risk and ease the burden on families",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <circle cx="22" cy="22" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M30 30l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 22h8M22 18v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "education",
    title: "Mobile & Community-Based Care",
    description: "Healthcare must reach people where the need is greatest, especially for remote, low-income, and underserved populations",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <path d="M8 14l16-6 16 6-16 6-16-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 16v12c0 4 5.4 6 12 6s12-2 12-6V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 14v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="30" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function HealthCommunityLed() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>WHAT HELPLINE DOES</h2>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          Helpline Welfare Trust supports free medical services, medicine access, eye care, and water solutions that reduce illness and make daily life safer. This focus area is a direct service to human dignity: helping people see, heal, recover, and live with less fear of avoidable suffering.
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
