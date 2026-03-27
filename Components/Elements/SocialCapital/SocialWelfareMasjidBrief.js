import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SocialWelfareBrief.module.css";

export default function SocialWelfareMasjidBrief() {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src="/img/masjid/PHOTO-2025-06-04-14-17-46.jpg"
          alt="Al-Kitab Masjid and Maktab School"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Al-Kitab Masjid & Maktab School</h2>
        <p className={styles.subtitle}>Masjid Construction at Lintel Stage</p>
        <p className={styles.text}>
          Masjid and Maktab support strengthens community worship and religious
          learning. Linked with Al-Kitab education spaces, this initiative
          supports spiritual development and community connection.
        </p>
        <p className={styles.text}>
          Helpline has established primary classes in the masjid basement where
          students learn regular subjects with a strong focus on tarbiyat.
        </p>
        <div className={styles.metaGrid}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Current Stage</span>
            <span className={styles.metaValue}>Lintel Stage</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Basement</span>
            <span className={styles.metaValue}>Completed</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Ground Floor</span>
            <span className={styles.metaValue}>Under Construction</span>
          </div>
        </div>
        <ul className={styles.points}>
          <li>Construction progressing from structure to finishing work.</li>
          <li>Integrated setup for worship, learning, and community support.</li>
          <li>Required total estimate: PKR 78 million.</li>
        </ul>
        <Link href="/masjid" className={styles.detailButton}>
          View Masjid Detail
        </Link>
      </div>
    </article>
  );
}
