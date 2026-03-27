import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HealthSuccessStories.module.css";

const STORIES = [
  {
    id: "ambreen",
    name: "Ambreen",
    tagline: "Journey to Motherhood",
    snippet:
      "In the remote village of Khair Muhammad Goth, Gadap Town, Karachi, 26-year-old Ambreen stepped into motherhood with both joy and uncertainty. As a first-time mother who had just undergone a surgery, she found herself surrounded by misinformation. Like many women in her community, Ambreen believed that due to her surgery, she wouldn't be able to produce enough breast milk. Her mother-in-law, also unaware of the facts, encouraged bottle feeding as...",
    image: "/img/causes/Health-Care-qem5tse0cyp4tdwq5pet84x12rexveu2iwxn31m8im.png",
    readMoreHref: "/cause",
  },
  {
    id: "fatima",
    name: "Fatima",
    tagline: "A Safe Delivery Against All Odds",
    snippet:
      "Fatima, a 30-year-old mother from a remote village in Tharparkar, had no access to a hospital or trained midwife during her previous pregnancies. When Helpline's community health workers reached her village, they ensured she received regular antenatal checkups throughout her pregnancy. When complications arose during delivery, the team arranged emergency transport to the nearest health facility, saving both Fatima and her newborn...",
    image: "/img/causes/DSC_0144.JPG",
    readMoreHref: "/cause",
  },
  {
    id: "zainab",
    name: "Zainab",
    tagline: "Beating Malnutrition",
    snippet:
      "Little Zainab was brought to a Helpline medical camp severely malnourished at just 18 months old. Her mother, unaware of proper infant nutrition, had been feeding her only rice water. Through our nutrition counseling and growth monitoring program, Zainab's mother learned about balanced diets and breastfeeding practices. Within six months, Zainab's health improved dramatically and she reached healthy growth milestones...",
    image: "/img/causes/DSC_0290.JPG",
    readMoreHref: "/cause",
  },
];

export default function HealthSuccessStories() {
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
