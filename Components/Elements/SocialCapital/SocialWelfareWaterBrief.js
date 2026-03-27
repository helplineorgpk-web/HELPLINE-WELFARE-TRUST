import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SocialWelfareBrief.module.css";

export default function SocialWelfareWaterBrief() {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src="/img/causes/water1.jpg"
          alt="Water and WASH project support"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Water & WASH Support</h2>
        <p className={styles.subtitle}>Sustainable Environment Projects</p>
        <p className={styles.text}>
          Safe water access protects health, saves time, and reduces hardship
          for families in underserved communities. Helpline supports practical
          WASH interventions for long-term community resilience.
        </p>
        <div className={styles.metaGrid}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Hand Pumps</span>
            <span className={styles.metaValue}>1629</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Filtration Plants</span>
            <span className={styles.metaValue}>33</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Dams</span>
            <span className={styles.metaValue}>5</span>
          </div>
        </div>
        <ul className={styles.points}>
          <li>Improved water access across program areas.</li>
          <li>Lower disease risk through clean water interventions.</li>
          <li>Integrated support with sanitation and environment work.</li>
        </ul>
        <Link href="/water-projects" className={styles.detailButton}>
          View Water Detail
        </Link>
      </div>
    </article>
  );
}
