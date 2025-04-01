import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import Image from "next/image";
import styles from "../public/css/TaleemQuran.module.css";
import Header from "../Components/Elements/Header/Header";
export default function TaleemQuran() {
  const img = "/img/taleemQuran/taleemQuran2.png";
  return (
    <Layout2>
      <Header
        background={img}
        Detail={"Taleem-e-Quran"}
        datainfo={"Taleem-e-Quran"}
      />

      <div className={styles.cardSection}>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src="/img/taleemQuran/taleemQuran.png"
              alt="Quran Learning"
              height={300}
              width={300}
            />
          </div>
          <h3>Online Quran Classes</h3>
          <p>
            Learn Quran from qualified teachers in interactive online sessions.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src="/img/taleemQuran/taleemQuran3.png"
              alt="Tajweed Learning"
              height={300}
              width={300}
            />
          </div>
          <h3>Jamia Quran Classes</h3>
          <p>
            Learn Quran from qualified teachers in interactive online sessions.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src="/img/taleemQuran/taleemQuran4.png"
              alt="Quran Translation"
              height={300}
              width={300}
            />
          </div>
          <h3>Quran Translation</h3>
          <p>
            Understand the meaning of the Holy Quran with detailed translation.
          </p>
        </div>
      </div>

      <div className={styles.programSection}>
        <h2>Our Learning Programs</h2>
        <div className={styles.programCard}>
          <Image
            src="/img/taleemQuran/taleemQuran2.png"
            alt="Quran Learning Mission"
            height={300}
            width={300}
          />
          <div>
            <h3>Comprehensive Islamic Education</h3>
            <ul>
              <li>Basic Quran Reading (Qaida)</li>
              <li>Quran Memorization (Hifz)</li>
              <li>Tajweed Rules</li>
              <li>Quran Translation & Tafseer</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout2>
  );
}
