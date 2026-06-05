import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HealthWomenChildren.module.css";
import {
  dispensaryProjects,
  formatPkr,
} from "./dispensaryProjectsData";

export default function HealthWomenChildren() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>HOW YOUR SUPPORT HELPS</h2>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          Your support can open a dispensary door for a family who cannot reach the city, put medicine
          in a patient&apos;s hands, connect a village to a specialist through telemedicine, and turn an
          empty room into a place of healing and dignity. These are direct, visible acts of care that
          protect life and reduce suffering.
        </p>
        <div className={styles.grid}>
          {dispensaryProjects.map((project) => (
            <article key={project.slug} className={styles.card}>
              <Link
                href={`/health/dispensary/${project.slug}`}
                className={styles.cardLink}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className={styles.costBadge}>
                    {formatPkr(project.monthlyGrandTotal)}/mo
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardTagline}>{project.tagline}</p>
                  <p className={styles.cardDesc}>{project.cardDescription}</p>
                  <span className={styles.detailBtn}>View Project Details</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
