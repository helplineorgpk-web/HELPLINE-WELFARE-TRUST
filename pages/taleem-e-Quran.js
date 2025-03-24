import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import Image from "next/image";
import styles from "../public/css/TaleemQuran.module.css";

export default function TaleemQuran() {
  return (
    <Layout2>
      <div className={styles.breadcrumbArea}>
        <div className={styles.breadcrumbArea}>
          <h1>Taleem-e-Quran</h1>
          <p>Learn and understand the Holy Quran</p>
        </div>
      </div>

      <div className={styles.breadcrumbArea}>
        <div className={styles.breadcrumbArea}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/img/bg/support1.jpg"
                alt="Quran Learning"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <h3 className={styles.breadcrumbArea}>Online Quran Classes</h3>
            <p className={styles.breadcrumbArea}>
              Learn Quran from qualified teachers in interactive online
              sessions.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/img/bg/support2.jpg"
                alt="Tajweed Learning"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <h3 className={styles.breadcrumbArea}>Tajweed Classes</h3>
            <p className={styles.breadcrumbArea}>
              Master the rules of Quranic recitation with proper Tajweed.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/img/bg/support3.jpg"
                alt="Quran Translation"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <h3 className={styles.breadcrumbArea}>Quran Translation</h3>
            <p className={styles.breadcrumbArea}>
              Understand the meaning of the Holy Quran with detailed
              translation.
            </p>
          </div>
        </div>

        <div className={styles.breadcrumbArea}>
          <h2 className={styles.sectionTitle}>Our Learning Programs</h2>
          <div className={styles.programWrapper}>
            <div className={styles.breadcrumbArea}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/img/bg/mission.jpg"
                  alt="Quran Learning Mission"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className={styles.programContent}>
                <h3 className={styles.programTitle}>
                  Comprehensive Islamic Education
                </h3>
                <ul className={styles.programList}>
                  <li>
                    <span className={styles.breadcrumbArea}>•</span>Basic Quran
                    Reading (Qaida)
                  </li>
                  <li>
                    <span className={styles.breadcrumbArea}>•</span>Quran
                    Memorization (Hifz)
                  </li>
                  <li>
                    <span className={styles.breadcrumbArea}>•</span>Tajweed
                    Rules
                  </li>
                  <li>
                    <span className={styles.breadcrumbArea}>•</span>Translation
                    & Tafseer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
}
