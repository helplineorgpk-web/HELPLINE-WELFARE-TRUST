import React from "react";
import Link from "next/link";
import styles from "./AlKitabSchoolsSection.module.css";

const SCHOOLS_DATA = [
  {
    id: "own-schools",
    title: "Owned Schools",
    description: "Helpline operates its own schools to provide structured, consistent, and values-based education in communities where quality education is often out of reach for low-income families.",
    href: "/ownSchools",
  },
  {
    id: "adopted-schools",
    title: "Adopted Schools",
    description: "Helpline supports adopted schools, helping strengthen educational access in areas where children need better academic support, improved facilities, and stronger continuity in learning.",
    href: "/adoptedSchools",
  },
  {
    id: "orphanage",
    title: "Orphan Care within Education",
    description: "For children without stable family support, education becomes even more important. Helpline connects learning with care, routine, and belonging so orphaned children do not lose their chance to build a stable life.",
    href: "/orphanage",
  },
  {
    id: "vocational",
    title: "Vocational Training Centers",
    description: "Skills-based training for employability and self-reliance, equipping youth and adults with practical qualifications so they can earn a living and support their families.",
    href: "/vocationalTrainingCenters",
  },
];

export default function AlKitabSchoolsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Education that Opens Doors</h2>
          <p className={styles.sectionSubtitle}>
            Helpline Welfare Trust works to make education possible for children from low-income and underserved communities by supporting schools, students, and learning environments across Pakistan.
          </p>
        </div>

        <div className={styles.grid}>
          {SCHOOLS_DATA.map((item) => (
            <article key={item.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <Link href={item.href} className={styles.learnMore}>
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
