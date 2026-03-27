import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SocialWelfareBrief.module.css";

export default function SocialWelfareRashanBrief() {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src="/img/rashan/gojrarashan2.jpg"
          alt="Monthly Rashan support campaign"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Monthly Rashan Support</h2>
        <p className={styles.subtitle}>Rashan Campaign</p>
        <p className={styles.text}>
          Many families need timely practical help to stay stable with dignity.
          Monthly food support is especially important for single mothers,
          low-income households, elderly people, and daily wage families.
        </p>
        <p className={styles.text}>
          Helpline provides quality grocery support across Pakistan, including
          Atta, Ghee, Rice, Sugar, Daal, and tea.
        </p>
        <div className={styles.metaGrid}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Monthly Support</span>
            <span className={styles.metaValue}>50+ Families</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Priority Group</span>
            <span className={styles.metaValue}>Single Mothers</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Package Type</span>
            <span className={styles.metaValue}>Dry Rashan</span>
          </div>
        </div>
        <ul className={styles.points}>
          <li>50+ deserving families supported every month.</li>
          <li>Priority for single mothers and elderly households.</li>
          <li>Reliable monthly grocery support with dignity.</li>
        </ul>
        <p className={styles.quote}>
          مَن فَرَّجَ عَن مُؤمِنٍ كُربَةً
          <span className={styles.quoteNote}>
            "Whoever relieves a believer&apos;s hardship, Allah will relieve their
            hardship on the Day of Judgment"
          </span>
        </p>
        <Link href="/rashan" className={styles.detailButton}>
          View Rashan Detail
        </Link>
      </div>
    </article>
  );
}
