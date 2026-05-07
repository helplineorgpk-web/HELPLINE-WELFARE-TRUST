import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../SuccessStories/GulNazStoryDetail.module.css";

export default function EducationSuccessStoryDetail({ story }) {
  if (!story) return null;

  const badge = story.badge || "Education";

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/edu">Education</Link>
          <span aria-hidden="true">/</span>
          <span className={styles.current}>{story.name}</span>
        </nav>

        <article className={styles.article}>
          <div className={styles.hero}>
            <Image
              src={story.image}
              alt={story.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 900px"
              className={styles.heroImage}
              quality={85}
            />
          </div>
          <div className={styles.body}>
            <span className={styles.badge}>{badge}</span>
            <h1 className={styles.title}>{story.headline}</h1>
            <div className={styles.taglineRow}>
              <div className={styles.taglineAccent} aria-hidden="true" />
              <p className={styles.tagline}>{story.tagline}</p>
            </div>
            <p className={styles.lead}>{story.description}</p>

            {story.detailSections.map((block) => (
              <section key={block.title} className={styles.section}>
                <h2 className={styles.sectionTitle}>{block.title}</h2>
                <p className={styles.sectionBody}>{block.body}</p>
              </section>
            ))}

            <blockquote className={styles.quote}>
              <p>&ldquo;{story.pullQuote}&rdquo;</p>
              <cite>{story.quoteCite}</cite>
            </blockquote>

            <div className={styles.actions}>
              <Link href="/edu" className={styles.btnPrimary}>
                Explore our education work
              </Link>
              <Link href="/edu#success-stories-heading" className={styles.btnSecondary}>
                More education stories
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
