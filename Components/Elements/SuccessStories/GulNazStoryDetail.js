"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GUL_NAZ_STORY } from "./featuredStoryData";
import styles from "./GulNazStoryDetail.module.css";

export default function GulNazStoryDetail() {
  const story = GUL_NAZ_STORY;

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/success-stories">Success Stories</Link>
          <span aria-hidden="true">/</span>
          <span className={styles.current}>Gul Naz</span>
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
              quality={88}
            />
          </div>
          <div className={styles.body}>
            <span className={styles.badge}>Featured</span>
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
              <cite>— Helpline Education Program, Rahimyar Khan</cite>
            </blockquote>

            <div className={styles.actions}>
              <Link href="/edu" className={styles.btnPrimary}>
                Explore our education work
              </Link>
              <Link href="/success-stories" className={styles.btnSecondary}>
                Back to success stories
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
