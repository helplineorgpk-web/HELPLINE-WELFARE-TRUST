"use client";
import React from "react";
import styles from "../../../public/css/DonationSections.module.css";

const PROGRAMS = [
  {
    title: "Education",
    description:
      "Helping children from underserved communities stay in school through owned and adopted schools, student sponsorship, and learning support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 7h8M8 11h5" />
      </svg>
    ),
  },
  {
    title: "Healthcare & Clean Water",
    description:
      "Free medical care, medicine access, cataract treatment, and clean water projects that protect health and restore dignity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
        <path d="M12 8h.01M12 11h.01M12 14h.01" />
      </svg>
    ),
  },
  {
    title: "Skills, Training & Livelihoods",
    description:
      "Practical skills, vocational training, and livelihood pathways that help people earn with dignity and move toward self-reliance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Social Welfare & Family Support",
    description:
      "Food support, essential household needs, and welfare programs that protect families facing hardship with dignity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    title: "Islamic Programs & Community Support",
    description:
      "Faith-driven care including Ramzan, Qurbani, masjid support, and Muwakhat-e-Madina community services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M8 11h8M8 15h4" />
      </svg>
    ),
  },
];

export default function DonationWhereMoneyGoes() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>WHERE DOES YOUR MONEY GO</h2>
        <span className={styles.sectionTitleUnderline} />
        <p className={styles.moneyGoesIntro}>
          At Helpline Welfare Trust, we believe in complete transparency. Your donations are carefully directed toward practical, community-driven programs that create lasting change. From education and healthcare to livelihoods and disaster relief, every contribution supports families in their journey toward dignity and self-reliance.
        </p>
        <div className={styles.programGrid}>
          {PROGRAMS.map((program, i) => (
            <div
              key={i}
              className={`${styles.programCard} ${i === 4 ? styles.programCardLast : ""}`}
            >
              <div className={styles.programIconWrap}>{program.icon}</div>
              <h4>{program.title}</h4>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
