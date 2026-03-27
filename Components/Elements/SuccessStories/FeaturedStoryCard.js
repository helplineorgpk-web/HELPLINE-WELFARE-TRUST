"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./FeaturedStoryCard.module.css";
import { FEATURED_STORY } from "./featuredStoryData";

function LogoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "Twitter", href: "#", icon: "𝕏" },
  { label: "Facebook", href: "#", icon: "f" },
  { label: "Instagram", href: "#", icon: "📷" },
  { label: "YouTube", href: "#", icon: "▶" },
];

export default function FeaturedStoryCard() {
  const story = FEATURED_STORY;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <article className={styles.card}>
          <div className={styles.left}>
            <div className={styles.logoWrap}>
              <div className={styles.logoIcon}>
                <LogoIcon />
              </div>
              <span className={styles.logoText}>Helpline Welfare Trust</span>
            </div>
            <div className={styles.titleWrap}>
              <div className={styles.overlayLabel}>STORY OF</div>
              <div className={styles.overlayName}>{story.name.toUpperCase()}</div>
            </div>
            <p className={styles.tagline}>{story.tagline}</p>
            <div className={styles.mediaWrap}>
              <Image
                src={story.image}
                alt={`Story of ${story.name}`}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.mediaImage}
              />
              <a
                href={story.videoHref}
                className={styles.playBtn}
                aria-label="Play video"
              >
                <PlayIcon />
              </a>
            </div>
            <div className={styles.socialWrap}>
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.href} title={s.label} aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <span className={styles.featuredTag}>Featured</span>
            <h2 className={styles.headline}>{story.headline}</h2>
            <p className={styles.description}>{story.description}</p>
            <Link href={story.detailHref} className={styles.readBtn}>
              Read Full Story
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
