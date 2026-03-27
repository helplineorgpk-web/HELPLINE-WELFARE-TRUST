import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./SpecialProjectsList.module.css";

const SPECIAL_PROJECTS = [
  {
    id: "alkitab",
    title: "Alkitab Project",
    description:
      "The Alkitab Education System provides quality education to underprivileged children across Pakistan. From Alkitab Primary and Higher Secondary Schools to Alkitab University of Emerging Sciences, we offer a complete educational pathway. Our network includes own schools in Punjab, adopted schools, and orphanage support—empowering young minds and fostering community development through learning.",
    href: "/edu",
    image: "/img/causes/alkitabghani1.jpg",
    links: [
      { label: "Education & Al-Kitab Schools", href: "/edu" },
      { label: "Own Schools", href: "/ownSchools" },
      { label: "Adopted Schools", href: "/adoptedSchools" },
    ],
  },
  {
    id: "vtc",
    title: "Vocational Training Center (VTC)",
    description:
      "Our Vocational Training Centers equip underprivileged youth and women with technical and vocational skills for sustainable employment and self-reliance. Through training in tailoring, IT, handicrafts, and entrepreneurship, we help break the cycle of poverty. VTC focuses on job placement and entrepreneurship support so graduates can build better futures for themselves and their communities.",
    href: "/vocationalTrainingCenters",
    image: "/img/Campaigns/Vocational.jpg",
    links: [
      { label: "VTC Overview", href: "/vocationalTrainingCenters" },
      { label: "Donate to VTC", href: "/donation" },
    ],
  },
];

export default function SpecialProjectsList() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Special Projects</h2>
          <p className={styles.sectionSubtitle}>
            Focused initiatives that create lasting impact in education and livelihoods
          </p>
        </div>

        <div className={styles.grid}>
          {SPECIAL_PROJECTS.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.links}>
                  {project.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={styles.learnMore}
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
