import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SocialWelfareBrief.module.css";

export default function SocialWelfareMawakhatBalochistanBrief() {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src="/img/mainimagefullsize.png"
          alt="Tahreek-e-Mawakhat Balochistan at Bhit Gaaj, Khuzdar"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Tahreek-e-Mawakhat Balochistan</h2>
        <p className={styles.subtitle}>
          Bhit Gaaj, Tehsil Zeedi, District Khuzdar, Balochistan
        </p>
        <p className={styles.text}>
          Helpline Welfare Trust has adopted Masjid and Madrassa Anwar-ul-Quran
          in a remote valley of Khuzdar, where 80 children already learn Hifz
          and Nazra under Hafiz Abdul Kareem Sahib. From this masjid we will
          raise a full Mawakhat Community.
        </p>
        <div className={styles.metaGrid}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Students</span>
            <span className={styles.metaValue}>~80 Children</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Taught</span>
            <span className={styles.metaValue}>Hifz & Nazra</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Supervisor</span>
            <span className={styles.metaValue}>Hafiz Abdul Kareem</span>
          </div>
        </div>
        <Link href="/tahreek-e-mawakhat-balochistan" className={styles.detailButton}>
          View Detail
        </Link>
        <Link href="/campaign/tahreek-e-mawakhat-balochistan" className={styles.detailButton}>
          Donate to Campaign
        </Link>
      </div>
    </article>
  );
}
