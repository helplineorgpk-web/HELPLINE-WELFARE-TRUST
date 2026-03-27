import React from "react";
import styles from "./SocialCapitalDriveChange.module.css";

const ITEMS = [
  {
    id: "disaster",
    title: "Disaster Preparedness",
    description: "Develop Disaster Preparedness Plans",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M18 24c0-3.3 2.7-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 14l2 2M32 32l2 2M14 34l2-2M32 14l2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 28l4-8 4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "funding",
    title: "Funding Access",
    description: "Write proposals to access funding for local projects",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <rect x="8" y="16" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="12" y="20" width="24" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M16 28h8M16 32h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="28" y="26" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M32 28v4M30 30h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "conflict",
    title: "Conflict Resolution Training",
    description: "Receive training in communication and conflict resolution",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M8 36c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 24h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 20v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "village",
    title: "Village Development Plans",
    description: "Create Village Development Plans for government support",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <rect x="8" y="10" width="20" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 16h12M12 22h12M12 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="30" y="18" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M33 24h4M33 28h4M33 32h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "enrollment",
    title: "Out of School Children Enrollment",
    description: "Enroll out-of-school children into education",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <path d="M8 18l16-8 16 8-16 8-16-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 20v10c0 4 5.4 6 12 6s12-2 12-6V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 18v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="32" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "district",
    title: "District Networks",
    description: "Build district-level networks for collaboration and impact",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <circle cx="24" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="32" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="36" cy="32" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M24 16v4M20 22l-6 8M28 22l6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 32h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="18" y="20" width="12" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function SocialCapitalDriveChange() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>HOW VDOS DRIVE CHANGE</h2>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          With Helpline Welfare Trust&apos;s support, VDOs lead local planning, collaboration, and
          education to build stronger, resilient communities
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
