"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./ImpactOverviewSection.module.css";

const OVERVIEW_STATS = [
  { value: "3.7M+", label: "Lives Touched", highlight: true },
  { value: "533K+", label: "Households Reached", highlight: true },
  { value: "7K+", label: "Villages Served", highlight: true },
  { value: "939K+", label: "Healthcare Beneficiaries", highlight: false },
  { value: "274+", label: "Schools Opened", highlight: false },
  { value: "986K+", label: "Trees Planted", highlight: false },
  { value: "53", label: "Districts Covered", highlight: false },
  { value: "1,600+", label: "Village Development Orgs", highlight: false },
];

export default function ImpactOverviewSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const topStats = OVERVIEW_STATS.filter((s) => s.highlight);
  const bottomStats = OVERVIEW_STATS.filter((s) => !s.highlight);

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className={styles.eyebrow}>By The Numbers</span>
          <h2 className={styles.title}>Helpline&apos;s Impact Across Pakistan</h2>
          <div className={styles.underline} />
          <p className={styles.description}>
            Every figure represents a family, a child, a community building a better future.
            From remote villages to urban centers, your support powers lasting change in health,
            education, clean water, and economic empowerment.
          </p>
        </motion.div>

        <div className={styles.highlightRow}>
          {topStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.highlightCard}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <span className={styles.highlightValue}>{stat.value}</span>
              <span className={styles.highlightLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className={styles.statsGrid}>
          {bottomStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.statCard}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
