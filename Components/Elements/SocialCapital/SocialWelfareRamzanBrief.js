import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SocialWelfareBrief.module.css";

export default function SocialWelfareRamzanBrief() {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src="/img/rashan/bahawalpurrashan2.jpg"
          alt="Ramzan Rashan distribution in Pakistan"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Ramzan Support Across Pakistan</h2>
        <p className={styles.subtitle}>Ramzan Rashan Distribution Program</p>
        <p className={styles.text}>
          Ramzan is a month of worship, mercy, and generosity, but it can be
          difficult for poor households to manage food and daily expenses.
          Helpline distributes Ramzan Rashan packages across Punjab, Sindh,
          Balochistan, KPK, and Kashmir.
        </p>
        <p className={styles.text}>
          Packages include Atta, Ghee, Rice, Sugar, Daal, Dates, and other
          necessities so families can observe the month with peace and dignity.
        </p>
        <div className={styles.metaGrid}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Coverage</span>
            <span className={styles.metaValue}>Nationwide</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Beneficiaries</span>
            <span className={styles.metaValue}>5,000+ Families</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Core Items</span>
            <span className={styles.metaValue}>Atta, Ghee, Daal</span>
          </div>
        </div>
        <ul className={styles.points}>
          <li>Province-wide distribution through local field teams.</li>
          <li>Essential food package for vulnerable households.</li>
          <li>Focused support during the most financially difficult month.</li>
        </ul>
        <Link href="/ramzanRashan" className={styles.detailButton}>
          View Ramzan Detail
        </Link>
      </div>
    </article>
  );
}
