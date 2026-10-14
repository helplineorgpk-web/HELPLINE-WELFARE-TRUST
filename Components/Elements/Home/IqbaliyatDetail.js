import React from "react";
import styles from "./UrduArticle.module.css";
import UrduArticleBlocks from "./UrduArticleBlocks";
import {
  IQBALIYAT_INTRO,
  IQBALIYAT_PARTS,
  IQBALIYAT_TAGLINE,
  IQBALIYAT_TITLE,
} from "./iqbaliyatContent";

const HEADER_IMAGE = "/img/iqbaliyatheadermainislider.jpg";

export default function IqbaliyatDetail() {
  return (
    <>
      <header className={styles.hero}>
        <img src={HEADER_IMAGE} alt="اقبالیات" className={styles.heroImage} />
      </header>

      <section className={styles.page} dir="rtl">
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <p className={styles.kicker}>اقبالیات</p>
            <h1 className={styles.title}>{IQBALIYAT_TITLE}</h1>
            <p className={styles.subtitle}>{IQBALIYAT_TAGLINE}</p>
            <p className={styles.lead}>{IQBALIYAT_INTRO}</p>
          </div>

          <nav className={styles.toc} aria-label="فہرستِ مضامین">
            <h2 className={styles.tocTitle}>فہرستِ مضامین</h2>
            <ol className={styles.tocList}>
              {IQBALIYAT_PARTS.map((part) => (
                <li key={part.id}>
                  <a href={`#${part.id}`} className={styles.tocPart}>
                    {part.label ? <span className={styles.tocLabel}>{part.label}</span> : null}
                    {part.title}
                  </a>
                  {part.sections.length > 0 ? (
                    <ol className={styles.tocSections}>
                      {part.sections.map((section) => (
                        <li key={section.id}>
                          <a href={`#${section.id}`}>
                            {section.number}۔ {section.title}
                          </a>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </li>
              ))}
            </ol>
          </nav>

          {IQBALIYAT_PARTS.map((part) => (
            <section key={part.id} id={part.id} className={styles.part}>
              <div className={styles.partHead}>
                {part.label ? <span className={styles.partLabel}>{part.label}</span> : null}
                <h2 className={styles.partTitle}>{part.title}</h2>
              </div>

              {part.blocks.length > 0 ? (
                <div className={styles.card}>
                  <UrduArticleBlocks blocks={part.blocks} />
                </div>
              ) : null}

              {part.sections.map((section) => (
                <article key={section.id} id={section.id} className={styles.card}>
                  <h3 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>{section.number}</span>
                    {section.title}
                  </h3>
                  <UrduArticleBlocks blocks={section.blocks} />
                </article>
              ))}
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
