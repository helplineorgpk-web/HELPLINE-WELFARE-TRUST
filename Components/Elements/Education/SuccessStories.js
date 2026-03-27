import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./SuccessStories.module.css";

const STORIES = [
  {
    id: "ayaan",
    name: "Ayaan",
    tagline: "Journey to Education",
    snippet:
      "At just 11 years old, Ayaan carries a weight far beyond his years. His mornings begin not with books or play, but in the dim light of an automobile workshop, where he helps fix tools and earn a few extra rupees for his struggling family. Born into a household where survival takes priority, education was never seen as an option — just a distant dream.",
    image: "/img/Campaigns/Student.jpg",
    readMoreHref: "/cause",
  },
  {
    id: "sana",
    name: "Sana",
    tagline: "From Dropout to Scholar",
    snippet:
      "Sana had to leave school after fifth grade to help at home. Through our re-enrollment program and community engagement, her family agreed to let her return. Today she is one of the top students in her class and dreams of becoming a teacher.",
    image: "/img/orphanage/PHOTO-2025-02-19-11-59-36.jpg",
    readMoreHref: "/cause",
  },
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const story = STORIES[currentIndex];

  const goPrev = () => setCurrentIndex((i) => (i === 0 ? STORIES.length - 1 : i - 1));
  const goNext = () => setCurrentIndex((i) => (i === STORIES.length - 1 ? 0 : i + 1));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>OUR SUCCESS STORIES</h2>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          This program has touched lives and created real impact. Explore these success stories to see the difference it made.
        </p>
        <article className={styles.card}>
          <div className={styles.cardLeft}>
            <div className={styles.imageWrap}>
              <Image
                src={story.image}
                alt={`Story of ${story.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className={styles.image}
              />
            </div>
            <div className={styles.overlay}>
              <span className={styles.overlayLabel}>STORY OF</span>
              <span className={styles.overlayName}>{story.name.toUpperCase()}</span>
              <span className={styles.tagline}>{story.tagline}</span>
            </div>
          </div>
          <div className={styles.cardRight}>
            <h3 className={styles.storyTitle}>
              Story of {story.name}: {story.tagline}
            </h3>
            <p className={styles.snippet}>{story.snippet}...</p>
            <Link href={story.readMoreHref} className={styles.readBtn}>
              Read Story
            </Link>
            <div className={styles.nav}>
              <button type="button" onClick={goPrev} className={styles.navBtn} aria-label="Previous story">
                ‹
              </button>
              <button type="button" onClick={goNext} className={styles.navBtn} aria-label="Next story">
                ›
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
