"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./ImpactTimelineSection.module.css";

const MILESTONES = [
  {
    year: "1997",
    title: "A Bold Vision Born",
    description:
      "Pakistani-Americans founded Helpline Welfare Trust with a dream: a Pakistan free from poverty.",
  },
  {
    year: "1999",
    title: "Operations Begin in Pakistan",
    description:
      "Helpline Welfare Trust Pakistan launched, turning vision into on-the-ground action across communities.",
  },
  {
    year: "2005+",
    title: "Healthcare & Education Scale",
    description:
      "Medical camps, schools, and primary healthcare programs expanded to reach hundreds of thousands.",
  },
  {
    year: "2010+",
    title: "WASH & Environment Programs",
    description:
      "Solar water filtration, hand pumps, latrines, and massive tree-planting initiatives launched nationwide.",
  },
  {
    year: "2015+",
    title: "Community Empowerment",
    description:
      "1,600+ Village Development Organizations formed, with women leading change at the grassroots level.",
  },
  {
    year: "Today",
    title: "3.7 Million Lives Touched",
    description:
      "Across 53 districts and 7,000+ villages, Helpline continues building self-reliant, thriving communities.",
  },
];

export default function ImpactTimelineSection() {
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
          <span className={styles.eyebrow}>Our Journey</span>
          <h2 className={styles.title}>Decades of Dedicated Service</h2>
          <div className={styles.underline} />
        </motion.div>

        <div className={styles.timeline}>
          {MILESTONES.map((item, i) => (
            <motion.div
              key={item.year}
              className={styles.item}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className={styles.yearBadge}>{item.year}</div>
              <div className={styles.content}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
