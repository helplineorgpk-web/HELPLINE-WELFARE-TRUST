"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MoreSuccessStories.module.css";

const STORIES = [
  {
    id: "education",
    overlayTitle: "Education",
    tagline: "Learning that opens doors for children and communities.",
    title: "Education: Building Brighter Futures",
    description:
      "From adopted schools to scholarships and literacy support, Helpline helps underserved children stay in school, learn with dignity, and dream beyond their circumstances.",
    image: "/img/causes/DSC_0172.JPG",
    imageAlt:
      "Students and learning spaces at a Helpline-supported school in Pakistan",
    readMoreHref: "/edu",
  },
  {
    id: "health",
    overlayTitle: "Health",
    tagline: "Care where it is needed most.",
    title: "Health: Dignity Through Primary Care",
    description:
      "Medical camps, facility support, and community health outreach bring essential treatment and prevention to families who would otherwise go without.",
    image: "/img/causes/Health-Care-qem5tse0cyp4tdwq5pet84x12rexveu2iwxn31m8im.png",
    imageAlt:
      "Helpline primary healthcare outreach supporting patients in the field",
    readMoreHref: "/health",
  },
  {
    id: "construction",
    overlayTitle: "Construction",
    tagline: "Rebuilding lives alongside resilient communities.",
    title: "Construction & Recovery",
    description:
      "Shelter, safe spaces, and infrastructure after disaster—paired with livelihoods—help families not only survive emergencies but recover with hope.",
    image: "/img/causes/houseconstruction4.jpeg",
    imageAlt:
      "Housing and reconstruction work with communities supported by Helpline",
    readMoreHref: "/livelihood",
  },
  {
    id: "vtc",
    overlayTitle: "Vocational Training",
    tagline: "Skills for employment and self-reliance.",
    title: "Vocational Training Centers (VTC)",
    description:
      "Hands-on training equips youth and women with marketable skills—stitching, IT, beauty care, and more—so they can earn with confidence.",
    image: "/img/causes/VocationalTrainingCenter.jpg",
    imageAlt:
      "Trainees learning practical skills at a Helpline vocational training center",
    readMoreHref: "/vocationalTrainingCenters",
  },
];

export default function MoreSuccessStories() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>MORE SUCCESS STORIES</h2>
        <div className={styles.underline} />
        <p className={styles.subtitle}>
          Our success stories highlight the impact of our programs and the lives
          transformed through our work.
        </p>

        <div className={styles.stack}>
          {STORIES.map((story, index) => (
            <article key={story.id} className={styles.card}>
              <div className={styles.cardImageWrap}>
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, min(1280px, 96vw)"
                  className={styles.cardImage}
                  priority={index === 0}
                  quality={88}
                />
                <div className={styles.cardImageOverlay} aria-hidden="true" />
                <div className={styles.cardImageFrame}>
                  <span className={styles.cardLogo}>Helpline Welfare Trust</span>
                  <div className={styles.cardImageTextBlock}>
                    <p className={styles.cardTitleOverlay}>
                      {story.overlayTitle.toUpperCase()}
                    </p>
                    <p className={styles.cardSubtitleOverlay}>{story.tagline}</p>
                  </div>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardBodyInner}>
                  <span className={styles.cardMeta}>{story.overlayTitle}</span>
                  <h3 className={styles.cardTitle}>{story.title}</h3>
                  <p className={styles.cardDesc}>{story.description}</p>
                  <Link href={story.readMoreHref} className={styles.readBtn}>
                    Learn more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
