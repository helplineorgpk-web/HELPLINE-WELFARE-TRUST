import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./LivelihoodSuccessStories.module.css";

const STORIES = [
  {
    id: "majeed",
    name: "Majeed",
    tagline: "From Struggle to Strength",
    snippet:
      "Majeed: Rising Beyond Barriers Every morning, Majeed would wake up not to a day of comfort, but to a quiet battle; one that began the day he was born with a disability. In a world where physical strength often defines survival, Majid struggled not just with mobility, but with how others saw him: limited and dependent. But Majid never accepted that narrative. In a small home crowded with the needs...",
    image: "/img/causes/majeed-story.jpg",
    readMoreHref: "/cause",
  },
  {
    id: "fatima",
    name: "Fatima",
    tagline: "Stitching a New Future",
    snippet:
      "Fatima, a young widow from rural Sindh, had no source of income and three children to feed. Through Helpline Welfare Trust vocational training program, she learned tailoring and received a sewing machine. Within months, she started her own small business from home, earning enough to send her children to school and put food on the table. Today, Fatima trains other women in her community...",
    image: "/img/causes/DSC_0144.JPG",
    readMoreHref: "/cause",
  },
  {
    id: "ahmed",
    name: "Ahmed",
    tagline: "From Farmer to Entrepreneur",
    snippet:
      "Ahmed was a subsistence farmer in Tharparkar, barely growing enough to feed his family. After receiving climate-smart agriculture training from Helpline Welfare Trust, he diversified his crops and adopted water-efficient techniques. With a small livestock grant, he built a thriving poultry business alongside his farm. Ahmed now employs two other villagers and serves as a mentor to neighboring farmers...",
    image: "/img/causes/DSC_0290.JPG",
    readMoreHref: "/cause",
  },
];

export default function LivelihoodSuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const story = STORIES[currentIndex];

  const goPrev = () =>
    setCurrentIndex((i) => (i === 0 ? STORIES.length - 1 : i - 1));
  const goNext = () =>
    setCurrentIndex((i) => (i === STORIES.length - 1 ? 0 : i + 1));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>OUR SUCCESS STORIES</h2>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          This program has touched lives and created real impact. Explore these
          success stories to see the difference it made.
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
              <span className={styles.overlayName}>
                {story.name.toUpperCase()}
              </span>
              <span className={styles.tagline}>{story.tagline}</span>
            </div>
          </div>
          <div className={styles.cardRight}>
            <h3 className={styles.storyTitle}>
              Story of {story.name}: {story.tagline}
            </h3>
            <p className={styles.snippet}>{story.snippet}</p>
            <Link href={story.readMoreHref} className={styles.readBtn}>
              Read Story
            </Link>
            <div className={styles.nav}>
              <button
                type="button"
                onClick={goPrev}
                className={styles.navBtn}
                aria-label="Previous story"
              >
                &#8249;
              </button>
              <span className={styles.navIndicator}>
                {currentIndex + 1} / {STORIES.length}
              </span>
              <button
                type="button"
                onClick={goNext}
                className={styles.navBtn}
                aria-label="Next story"
              >
                &#8250;
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
