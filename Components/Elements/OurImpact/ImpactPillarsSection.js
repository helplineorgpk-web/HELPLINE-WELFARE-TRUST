"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaGraduationCap,
  FaTint,
  FaHandsHelping,
} from "react-icons/fa";
import styles from "./ImpactPillarsSection.module.css";

const PILLARS = [
  {
    icon: FaHeartbeat,
    title: "Primary Healthcare",
    color: "#e07a5f",
    image: "/img/campaigns-opt/img_campaigns_medical.webp",
    description:
      "From medical camps to hospitals and mobile dispensaries — ensuring every family has access to quality, affordable healthcare.",
    stat: "263K+",
    statLabel: "Individuals served",
  },
  {
    icon: FaGraduationCap,
    title: "Education & Literacy",
    color: "#0d9488",
    image: "/img/campaigns-opt/img_causes_school-1-scaled.webp",
    description:
      "Opening schools, training teachers, and ensuring girls' enrollment — building futures one classroom at a time.",
    stat: "7,205",
    statLabel: "Students enrolled",
  },
  {
    icon: FaTint,
    title: "Clean Water & Environment",
    color: "#3b82f6",
    image: "/img/campaigns-opt/img_causes_blochistanwater.webp",
    description:
      "Solar filtration plants, hand pumps, latrines, and tree planting — creating healthier, greener communities.",
    stat: "98%",
    statLabel: "Access to clean water",
  },
  {
    icon: FaHandsHelping,
    title: "Livelihood & Empowerment",
    color: "#8b5cf6",
    image: "/img/campaigns-opt/img_causes_studentsupportprogram.webp",
    description:
      "Vocational training, micro-enterprises, and community organizations — helping families break the cycle of poverty.",
    stat: "12K+",
    statLabel: "Skills gained",
  },
];

export default function ImpactPillarsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.eyebrow}>Four Pillars of Change</span>
          <h2 className={styles.title}>Where Your Support Goes</h2>
          <div className={styles.underline} />
        </motion.div>

        <div className={styles.grid}>
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                className={styles.card}
                initial={{ opacity: 0, y: 32 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay} />
                  <div
                    className={styles.iconBadge}
                    style={{ background: pillar.color }}
                  >
                    <Icon size={22} color="#fff" />
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{pillar.title}</h3>
                  <p className={styles.cardDesc}>{pillar.description}</p>
                  <div className={styles.cardStat}>
                    <span className={styles.cardStatValue} style={{ color: pillar.color }}>
                      {pillar.stat}
                    </span>
                    <span className={styles.cardStatLabel}>{pillar.statLabel}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
