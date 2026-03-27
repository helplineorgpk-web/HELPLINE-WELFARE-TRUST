import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./LivelihoodDisasterReliefTopics.module.css";
import { livelihoodDisasterCards } from "./livelihoodDisasterData";

export default function LivelihoodDisasterReliefTopics() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Disaster Relief &amp; Rehabilitation</h2>
        <p className={styles.intro}>
          Alongside livelihood and food security work, Helpline responds to major
          disasters through immediate rescue and relief, followed by long-term
          rehabilitation for affected families.
        </p>

        <div className={styles.grid}>
           {livelihoodDisasterCards.map((topic) => (
            <article key={topic.title} className={styles.card}>
              <div className={styles.cardImageWrap}>
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <h3 className={styles.cardTitle}>{topic.title}</h3>
              <p className={styles.cardText}>{topic.description}</p>
              <Link href={`/livelihood-disaster/${topic.slug}`} className={styles.ctaBtn}>
                View Details
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
