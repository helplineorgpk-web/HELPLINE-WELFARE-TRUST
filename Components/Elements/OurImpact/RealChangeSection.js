"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./RealChangeSection.module.css";

const IMPACT_BULLETS = [
  "Poverty has dropped in Helpline Welfare Trust areas from 46% to 40%, while it remains 49% in the rest of Pakistan",
  "Thousands of girls are in school, many for the first time in their families",
  "Women are leading change in over 1,600 Village Development Organizations",
  "12,000+ men and women have gained vocational skills and improved their livelihoods",
  "99.5% of children under age 2 in Helpline Welfare Trust areas are fully immunized against preventable diseases",
  "855+ medical camps organized, bringing healthcare to the doorsteps of remote communities",
  "986,000+ trees planted, restoring ecosystems and fighting climate change at the village level",
];

const QUICK_STATS = [
  { value: "28+", label: "Years of Service" },
  { value: "46%→40%", label: "Poverty Reduction" },
  { value: "63%", label: "Girls' Enrollment" },
  { value: "0", label: "Maternal Deaths" },
];

const HERO_IMAGE = "/img/campaigns-opt/img_causes_cause25.webp";

export default function RealChangeSection() {
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
        <div className={styles.grid}>
          <motion.div
            className={styles.imageWrap}
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={HERO_IMAGE}
              alt="Children and community beneficiaries"
              width={640}
              height={420}
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.imageAccent} />
          </motion.div>

          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className={styles.eyebrow}>Our Story</span>
            <h2 className={styles.title}>Real Change. Because of You.</h2>
            <p className={styles.paragraph}>
              Helpline Welfare Trust is not a traditional relief organization. We don&apos;t offer
              band-aid solutions — we build futures.
            </p>
            <p className={styles.paragraph}>
              In 1997, a group of passionate Pakistani-Americans founded the{" "}
              <strong>Helpline Welfare Trust</strong>. By 1999, Helpline Welfare Trust Pakistan was
              launched to turn a bold vision into action:
            </p>
            <p className={styles.vision}>
              A Pakistan where every child goes to school, every family has access to healthcare,
              and every village is vibrant, self-reliant, and free from poverty.
            </p>
            <p className={styles.tagline}>Together, We&apos;re Making That Vision Real</p>
          </motion.div>
        </div>

        <motion.div
          className={styles.quickStats}
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {QUICK_STATS.map((s) => (
            <div key={s.label} className={styles.quickStat}>
              <span className={styles.quickValue}>{s.value}</span>
              <span className={styles.quickLabel}>{s.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className={styles.becauseOf}
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className={styles.becauseTitle}>Because of supporters like you:</h3>
          <ul className={styles.bulletList}>
            {IMPACT_BULLETS.map((item, i) => (
              <li key={i}>
                <FaCheckCircle className={styles.bulletIcon} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className={styles.philosophy}>
            <strong>We Don&apos;t Just Fight Poverty—We End It</strong>
            <p>
              By integrating education, health, livelihoods, and social empowerment, Helpline
              Welfare Trust helps communities build lasting, local solutions. And every milestone
              we reach is made possible by donors like you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
