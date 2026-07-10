"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./ImpactStatsSection.module.css";

export default function ImpactStatsSection({
  title,
  subtitle,
  underlineColor = "teal",
  variant = "default",
  stats,
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const underlineClass =
    underlineColor === "blue" ? styles.underlineBlue : styles.underlineTeal;
  const sectionClass =
    variant === "alt" ? `${styles.section} ${styles.sectionAlt}` : styles.section;

  return (
    <section ref={ref} className={sectionClass}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>{title}</h2>
          <div className={`${styles.underline} ${underlineClass}`} />
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </motion.div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={styles.statCard}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + index * 0.04 }}
            >
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
