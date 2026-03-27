import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./WashSuccessStories.module.css";

const STORIES = [
  {
    id: "abida",
    name: "Abida",
    tagline: "Bringing Clean Water to Viala",
    snippet:
      "In the rugged, far-flung village of Viala, nestled deep within UC Omzha Vilala, District Zhob, Balochistan, life moves with quiet resilience. Here, basic necessities are a daily struggle and clean water was once the greatest of them all. For Abida Younus, a mother of young girls, every day began with anxiety. Her daughters would walk over 1.5 kilometers under the harsh sun, over uneven terrain just to fetch water. The burden...",
    image: "/img/causes/blochistanwater.jpg",
    readMoreHref: "/cause",
  },
  {
    id: "community",
    name: "Community",
    tagline: "Solar Water Filtration Impact",
    snippet:
      "In remote villages of Sindh and Balochistan, communities that once relied on contaminated water sources now have access to clean, safe drinking water through Helpline Welfare Trust solar-powered water filtration plants. These sustainable systems have transformed the health and well-being of thousands of families, reducing waterborne diseases and giving children the chance to grow up healthy...",
    image: "/img/causes/water1.jpg",
    readMoreHref: "/cause",
  },
  {
    id: "village",
    name: "Village",
    tagline: "Dam Construction Changes Lives",
    snippet:
      "The construction of delay action dams in drought-prone areas has been a game-changer for farming communities. By capturing rainwater and recharging groundwater, these dams have restored agricultural productivity and provided a reliable water source for livestock. Families that once faced severe water scarcity now have hope for a sustainable future...",
    image: "/img/causes/water2.jpg",
    readMoreHref: "/cause",
  },
];

export default function WashSuccessStories() {
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
