import React from "react";
import styles from "./UrduArticle.module.css";
import UrduArticleBlocks from "./UrduArticleBlocks";
import {
  GIRL_GUIDE_CLOSING,
  GIRL_GUIDE_INTRO,
  GIRL_GUIDE_SECTIONS,
  GIRL_GUIDE_TITLE,
} from "./girlGuideContent";

const HEADER_IMAGE = "/img/girlguideheadermainislider.jpg";

export default function GirlGuideDetail() {
  return (
    <>
      <header className={styles.hero}>
        <img src={HEADER_IMAGE} alt="گرل گائیڈ" className={styles.heroImage} />
      </header>

      <section className={styles.page} dir="rtl">
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <p className={styles.kicker}>تربیتی و اصلاحی پروگرام</p>
            <h1 className={styles.title}>{GIRL_GUIDE_TITLE}</h1>
            <p className={styles.subtitle}>اہم نکات اور تفصیلی وضاحت</p>
            <p className={styles.lead}>{GIRL_GUIDE_INTRO}</p>
          </div>

          <nav className={styles.toc} aria-label="فہرستِ مضامین">
            <h2 className={styles.tocTitle}>فہرستِ مضامین</h2>
            <ol className={`${styles.tocList} ${styles.tocSections}`}>
              {GIRL_GUIDE_SECTIONS.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    {section.number}۔ {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {GIRL_GUIDE_SECTIONS.map((section) => (
            <article key={section.id} id={section.id} className={styles.card}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionNumber}>{section.number}</span>
                {section.title}
              </h2>
              <UrduArticleBlocks blocks={section.blocks} />
            </article>
          ))}

          <div className={styles.closing}>
            <h2 className={styles.closingTitle}>{GIRL_GUIDE_CLOSING.title}</h2>
            <p className={styles.closingSubtitle}>{GIRL_GUIDE_CLOSING.subtitle}</p>
            <p className={styles.closingText}>{GIRL_GUIDE_CLOSING.text}</p>
          </div>
        </div>
      </section>
    </>
  );
}
