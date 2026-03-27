import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./WaterProjectHighlights.module.css";

const WATER_PROJECTS = [
  {
    title: "Solar Water Filtration Projects",
    image: "/img/causes/water1.jpg",
    text: "Helpline installs solar-powered water filtration plants in underserved areas to provide safe drinking water and reduce waterborne disease risk for vulnerable families.",
    stats: [
      { label: "Filtration Plants", value: "33" },
      { label: "Access Improvement", value: "98%" },
      { label: "Service Areas", value: "Multiple Provinces" },
    ],
  },
  {
    title: "Hand Pumps & Community Water Access",
    image: "/img/causes/blochistanwater.jpg",
    text: "Community water access projects reduce daily burden on women and children by bringing reliable water closer to homes, schools, and neighborhoods.",
    stats: [
      { label: "Hand Pumps", value: "1629" },
      { label: "Water Chillers", value: "49" },
      { label: "Hand Washing Units", value: "60" },
    ],
  },
  {
    title: "Water Resilience & Environmental WASH",
    image: "/img/causes/water2.jpg",
    text: "Through dam support, sanitation infrastructure, and tree plantation, Helpline strengthens long-term environmental resilience and healthier living conditions.",
    stats: [
      { label: "Dams Constructed", value: "5" },
      { label: "Latrines", value: "1004" },
      { label: "Trees Planted", value: "986,815" },
    ],
  },
];

export default function WaterProjectHighlights() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Water Project Highlights</h2>
          <p className={styles.subtitle}>
            Sustainable water and WASH interventions that improve health,
            dignity, and long-term resilience for communities across Pakistan.
          </p>
        </div>

        <div className={styles.grid}>
          {WATER_PROJECTS.map((project) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.text}>{project.text}</p>

                <div className={styles.stats}>
                  {project.stats.map((item) => (
                    <div key={item.label} className={styles.stat}>
                      <span className={styles.statLabel}>{item.label}</span>
                      <span className={styles.statValue}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/sustainable-environment-wash"
                  className={styles.detailButton}
                >
                  View Water Detail
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
