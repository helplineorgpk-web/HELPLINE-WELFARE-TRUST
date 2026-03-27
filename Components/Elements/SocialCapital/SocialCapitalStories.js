import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./SocialCapitalStories.module.css";

const STORIES = [
  {
    id: "maula-bakhsh",
    name: "Maula Bakhsh Brohi",
    tagline: "Building Futures Through Collective Resolve",
    snippet:
      "In the quiet, resilient village of Khair Muhammad Village in Sindh, where generations have lived without electricity, clean water, or basic infrastructure, a remarkable journey of transformation began in 2022. Maula Bukhsh Brohi, a long-time resident and community leader, recalls the turning point vividly. \u201COur village had been settled for over a century, but we had no school, no healthcare, and no facilities. When the Helpline Welfare Trust team arrived and proposed...",
    image: "/img/causes/social-capital-story1.jpg",
    readMoreHref: "/cause",
  },
];

export default function SocialCapitalStories() {
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
                {story.name.toUpperCase()}:
              </span>
              <span className={styles.tagline}>{story.tagline}</span>
              <div className={styles.socialIcons}>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a>
              </div>
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
            {STORIES.length > 1 && (
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
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
