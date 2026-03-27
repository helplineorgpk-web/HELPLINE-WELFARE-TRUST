import React from "react";
import styles from "./EmpoweringGirls.module.css";

const ITEMS = [
  {
    id: "norms",
    title: "Support a Student Monthly",
    description:
      "Some donors want to support one student each month through student sponsorship, directly keeping a child in school",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <path d="M24 8l4 12h12l-10 8 4 12-10-7-10 7 4-12-10-8h12l4-12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "reenroll",
    title: "Contribute to School Operations",
    description:
      "Others may want to contribute to school operations, classroom needs, or teacher support to sustain everyday education",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <path d="M14 38V22l10-6 10 6v16M24 16v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 28h12M20 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "leadership",
    title: "Support Infrastructure Growth",
    description:
      "Larger gifts can help strengthen facilities, build new classrooms, and support long-term infrastructure development",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <path d="M24 12v24M24 12l-8 8M24 12l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 36l-6-6 6-6 6 6-6 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "vdo",
    title: "Give Where Needed Most",
    description:
      "A donation can go where the need is greatest, helping sustain the everyday costs of education across Helpline\u2019s network of schools",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.iconSvg}>
        <path d="M8 38V18l16-10 16 10v20M24 28v10M16 34h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 24h4v4h-4zM20 24h4v4h-4zM28 24h4v4h-4z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function EmpoweringGirls() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          HOW SUPPORT <span className={styles.titleLine}>HELPS</span>
        </h2>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          Support for education helps Helpline maintain schools, support deserving students, improve classrooms, strengthen learning environments, and expand access where more seats and space are needed. Every form of support helps a child stay connected to education.
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
