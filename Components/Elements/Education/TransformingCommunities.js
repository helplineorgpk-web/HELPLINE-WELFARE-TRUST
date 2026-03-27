import React from "react";
import styles from "./TransformingCommunities.module.css";

const ITEMS = [
  {
    id: "education",
    title: "School Access & Support",
    description:
      "Creating safe, functional learning spaces in communities where quality education is often out of reach for low-income families",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <path d="M8 38V18l16-8 16 8v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 26v12M16 34h16M20 22l4-2 4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "educators",
    title: "Student Sponsorship",
    description:
      "Some children only need one support bridge to remain in school. Sponsorship helps cover the cost of continued education for deserving children",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 38c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 26v8M24 34h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "communities",
    title: "Quran Education",
    description:
      "Education at Helpline includes moral and spiritual learning, helping children grow with values, discipline, and identity alongside academic development",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 16l4 4 4-4M16 32l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "lifelong",
    title: "School Expansion",
    description:
      "As student numbers grow, educational work must also grow. New school infrastructure and building expansion ensure education is available to more children",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <path d="M12 36V20l12-8 12 8v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 20l12 8 12-8M24 28v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="14" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function TransformingCommunities() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          WHY THIS <span className={styles.titleUnderline}>MATTERS</span>
        </h2>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          Many deserving families want their children to study, but limited income makes even basic school expenses difficult. Helpline&apos;s education work combines direct school support with student care, values-based learning, and long-term expansion.
        </p>
        <div className={styles.grid}>
          {ITEMS.map((item) => (
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
