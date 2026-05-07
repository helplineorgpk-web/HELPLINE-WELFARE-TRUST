import React, { useMemo, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./SuccessStories.module.css";
import { EDUCATION_SUCCESS_STORIES } from "../../../data/educationSuccessStoriesData";

const AUTO_SLIDE_MS = 6500;

function storyCardProps(story) {
  return {
    id: story.id,
    name: story.name,
    tagline: story.tagline,
    snippet: story.snippet,
    image: story.image,
    readMoreHref: `/edu/success-stories/${story.id}`,
  };
}

export default function SuccessStories() {
  const stories = useMemo(
    () => EDUCATION_SUCCESS_STORIES.map(storyCardProps),
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pauseAuto, setPauseAuto] = useState(false);
  const story = stories[currentIndex];

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? stories.length - 1 : i - 1));
  }, [stories.length]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i === stories.length - 1 ? 0 : i + 1));
  }, [stories.length]);

  useEffect(() => {
    if (stories.length <= 1 || pauseAuto) return undefined;
    const id = window.setInterval(goNext, AUTO_SLIDE_MS);
    return () => window.clearInterval(id);
  }, [stories.length, pauseAuto, goNext]);

  return (
    <section
      className={styles.section}
      aria-labelledby="success-stories-heading"
      onMouseEnter={() => setPauseAuto(true)}
      onMouseLeave={() => setPauseAuto(false)}
    >
      <div className={styles.container}>
        <h2 id="success-stories-heading" className={styles.title}>
          OUR SUCCESS STORIES
        </h2>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          This program has touched lives and created real impact. Explore these success stories to see the difference it made.
        </p>
        <article
          className={styles.card}
          aria-roledescription="carousel"
          aria-label={`Success story ${currentIndex + 1} of ${stories.length}`}
        >
          <div key={story.id} className={styles.slideTrack}>
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
              <p className={styles.snippet}>{story.snippet}</p>
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
          </div>
        </article>
      </div>
    </section>
  );
}
