"use client";
import React from "react";
import Image from "next/image";
import {
  getSection,
  getAllDailyUpdates,
} from "../../../data/dailyNewsSections";
import styles from "./DailyNewsSectionPage.module.css";

function formatCardDate(dateStr, timeStr) {
  const d = new Date(dateStr + "T12:00:00");
  const formatted = d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return `${formatted} | ${timeStr}`;
}

function UpdateCard({ update, sectionTitle, showSection, horizontal }) {
  return (
    <article
      className={`${styles.updateCard} ${horizontal ? styles.updateCardHorizontal : ""}`}
    >
      {update.image && (
        <div className={styles.cardImageWrap}>
          <Image
            src={update.image}
            alt={update.title}
            fill
            sizes={horizontal ? "280px" : "(max-width: 768px) 100vw, 33vw"}
            className={styles.cardImage}
          />
        </div>
      )}
      <div className={styles.cardBody}>
        <p className={styles.cardMeta}>
          <span className={styles.cardMetaDot} />
          {formatCardDate(update.date, update.time)}
        </p>
        {showSection && sectionTitle && (
          <span className={styles.sectionTag} dir="rtl">
            {sectionTitle}
          </span>
        )}
        <h3 className={styles.cardTitle} dir="rtl">
          {update.title}
        </h3>
        <p className={styles.cardExcerpt} dir="rtl">
          {update.body}
        </p>
      </div>
    </article>
  );
}

function FeaturedUpdate({ update }) {
  return (
    <article className={styles.featuredCard}>
      {update.image && (
        <div className={styles.featuredImageWrap}>
          <Image
            src={update.image}
            alt={update.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.featuredImage}
            priority
          />
        </div>
      )}
      <div className={styles.featuredBody}>
        <span className={styles.featuredLabel} dir="rtl">
          آج کی بڑی خبر
        </span>
        <h2 className={styles.featuredTitle} dir="rtl">
          {update.title}
        </h2>
        <p className={styles.featuredExcerpt} dir="rtl">
          {update.body}
        </p>
        <p className={styles.featuredMeta}>
          {formatCardDate(update.date, update.time)}
        </p>
      </div>
    </article>
  );
}

function SectionSidebar({ childSections, activeTab, onTabChange }) {
  if (!childSections?.length) return null;
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.sidebarTitle} dir="rtl">
        متعلقہ سیکشن
      </h3>
      <ul className={styles.sidebarList}>
        {childSections.map((id) => {
          const child = getSection(id);
          if (!child) return null;
          return (
            <li key={id} className={styles.sidebarItem}>
              <button
                type="button"
                className={`${styles.sidebarLink} ${activeTab === id ? styles.active : ""}`}
                onClick={() => onTabChange(id)}
              >
                {child.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

function UpdatesFeed({ updates, showSection, sectionTitle }) {
  const [featured, ...rest] = updates;
  const useHorizontal = rest.length <= 2;

  return (
    <>
      {featured && <FeaturedUpdate update={featured} />}
      {rest.length > 0 && (
        <div
          className={`${styles.updatesGrid} ${useHorizontal ? styles.updatesGridWide : ""}`}
        >
          {rest.map((update) => (
            <UpdateCard
              key={`${update.date}-${update.title}`}
              update={update}
              sectionTitle={sectionTitle}
              showSection={showSection}
              horizontal={useHorizontal}
            />
          ))}
        </div>
      )}
    </>
  );
}

function FeedHeader({ title, label }) {
  return (
    <div className={styles.feedHeader}>
      <div className={styles.feedTitleWrap}>
        {label && (
          <span className={styles.feedLabel} dir="rtl">
            {label}
          </span>
        )}
        <h2 className={styles.feedTitle} dir="rtl">
          {title}
        </h2>
      </div>
      <span className={styles.feedDate}>
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
    </div>
  );
}

function SectionHero({ section }) {
  if (section.image) {
    return (
      <header className={styles.hero}>
        <div className={styles.heroBanner}>
          <Image
            src={section.image}
            alt={section.title}
            fill
            sizes="1280px"
            className={styles.heroBannerBg}
            priority
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroBannerContent}>
            <span className={styles.heroBadge} dir="rtl">
              {section.location}
            </span>
            <h1 className={styles.heroTitle} dir="rtl">
              {section.title}
            </h1>
            <p className={styles.heroSubtitle} dir="rtl">
              {section.subtitle}
            </p>
            {section.summary && (
              <p className={styles.heroSummary} dir="rtl">
                {section.summary}
              </p>
            )}
          </div>
        </div>
        {section.stats?.length > 0 && (
          <div className={styles.statsBar}>
            {section.stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel} dir="rtl">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </header>
    );
  }

  return (
    <header className={styles.hero}>
      <div className={styles.heroPlain}>
        <span className={styles.heroBadge} dir="rtl">
          {section.location}
        </span>
        <h1 className={styles.heroTitle} dir="rtl">
          {section.title}
        </h1>
        <p className={styles.heroSubtitle} dir="rtl">
          {section.subtitle}
        </p>
        {section.summary && (
          <p className={styles.heroSummary} dir="rtl">
            {section.summary}
          </p>
        )}
      </div>
      {section.stats?.length > 0 && (
        <div className={styles.statsBar}>
          {section.stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel} dir="rtl">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default function DailyNewsSectionPage({ sectionId, onTabChange, activeTab }) {
  const section = getSection(sectionId);
  if (!section) return null;

  const hasSidebar = section.childSections?.length > 0;

  return (
    <div className={styles.sectionPage}>
      <div className={styles.inner}>
        <SectionHero section={section} />

        <div className={hasSidebar ? styles.bodyGrid : styles.bodyFull}>
          {hasSidebar && (
            <SectionSidebar
              childSections={section.childSections}
              activeTab={activeTab}
              onTabChange={onTabChange}
            />
          )}

          <div className={styles.mainPanel}>
            <FeedHeader title="روزانہ اپڈیٹ" label="تازہ ترین" />
            <UpdatesFeed updates={section.dailyUpdates} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function DailyNewsLatestFeed({ onTabChange }) {
  const allUpdates = getAllDailyUpdates();

  const latestSection = {
    title: "تازہ ترین — آج کی خبریں",
    subtitle: "ہیلپ لائن کے تمام اسکولوں، منصوبوں اور فیلڈ رپورٹس کی روزانہ اپڈیٹ",
    location: "تمام منصوبے",
    summary: null,
    image: "/img/roznama-dunya/child15.avif",
    stats: [
      { label: "منصوبے", value: "15+" },
      { label: "اسکول", value: "21" },
      { label: "آج کی خبریں", value: allUpdates.length.toString() },
    ],
  };

  return (
    <div className={styles.sectionPage}>
      <div className={styles.inner}>
        <SectionHero section={latestSection} />

        <div className={styles.mainPanel}>
          <FeedHeader title="تمام منصوبوں کی تازہ خبریں" label="تازہ ترین" />
          <div className={styles.updatesGrid}>
            {allUpdates.map((update) => (
              <button
                key={`${update.sectionId}-${update.date}-${update.title}`}
                type="button"
                className={styles.cardLink}
                onClick={() => onTabChange?.(update.sectionId)}
              >
                <UpdateCard
                  update={update}
                  sectionTitle={update.sectionTitle}
                  showSection
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
