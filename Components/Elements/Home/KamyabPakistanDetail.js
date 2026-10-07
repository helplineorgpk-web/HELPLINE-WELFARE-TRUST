"use client";
import React from "react";
import Link from "next/link";
import {
  KAMYAB_PAKISTAN_INTRO,
  KAMYAB_PAKISTAN_PROGRAMS,
} from "../../../data/kamyabPakistanPrograms";
import styles from "./KamyabPakistanDetail.module.css";

const HEADER_IMAGE = "/img/kamyabpakistanheadermainislider.jpg";

export default function KamyabPakistanDetail() {
  return (
    <>
      <header className={styles.hero}>
        <img
          src={HEADER_IMAGE}
          alt="کامیاب پاکستان پروگرام — مواخاتِ مدینہ کے نظریہ فلاحی نظام"
          className={styles.heroImage}
        />
      </header>

      <section className={styles.page} dir="rtl">
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <p className={styles.kicker}>{KAMYAB_PAKISTAN_INTRO.kicker}</p>
            <h1 className={styles.title}>{KAMYAB_PAKISTAN_INTRO.title}</h1>
            <p className={styles.subtitle}>{KAMYAB_PAKISTAN_INTRO.subtitle}</p>
            <p className={styles.lead}>{KAMYAB_PAKISTAN_INTRO.lead}</p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>18</span>
                <span className={styles.statLabel}>قومی و فلاحی پروگرامز</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>مواخاتِ مدینہ</span>
                <span className={styles.statLabel}>اخوت، بھائی چارہ، خود کفالت</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>خوشحال معاشرہ</span>
                <span className={styles.statLabel}>تعلیم، صحت، روزگار، رہائش</span>
              </div>
            </div>
          </div>

          <nav className={styles.jumpNav} aria-label="پروگرامز کی فہرست">
            {KAMYAB_PAKISTAN_PROGRAMS.map((program) => (
              <a key={program.id} href={`#program-${program.id}`} className={styles.jumpLink}>
                <span className={styles.jumpNum}>{program.number}</span>
                <span className={styles.jumpTitle}>{program.title}</span>
              </a>
            ))}
          </nav>

          <div className={styles.list}>
            {KAMYAB_PAKISTAN_PROGRAMS.map((program) => (
              <article
                key={program.id}
                id={`program-${program.id}`}
                className={styles.card}
              >
                <div className={styles.cardHead}>
                  <span className={styles.number}>{program.number}</span>
                  <h2 className={styles.cardTitle}>{program.title}</h2>
                </div>

                <p className={styles.cardIntro}>{program.intro}</p>

                <div className={styles.blocks}>
                  <div className={styles.block}>
                    <h3 className={styles.blockTitle}>بنیادی مقاصد</h3>
                    <ul className={styles.goals}>
                      {program.goals.map((goal) => (
                        <li key={goal}>{goal}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.block}>
                    <h3 className={styles.blockTitle}>
                      {program.activitiesLabel || "اہم سرگرمیاں"}
                    </h3>
                    <p className={styles.blockText}>{program.activities}</p>
                  </div>

                  <div className={`${styles.block} ${styles.impactBlock}`}>
                    <h3 className={styles.blockTitle}>متوقع اثرات</h3>
                    <p className={styles.blockText}>{program.impact}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.cta}>
            <p className={styles.ctaText}>
              ان پروگرامز کا حصہ بنیں — ایک عطیہ ایک خاندان کو خود کفالت کی طرف لے جا سکتا ہے۔
            </p>
            <Link href="/donation" className={styles.ctaBtn}>
              ابھی عطیہ کریں
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
