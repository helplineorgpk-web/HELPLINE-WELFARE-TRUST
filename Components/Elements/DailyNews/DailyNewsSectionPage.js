"use client";
import React from "react";
import Image from "next/image";
import {
  getSection,
  getAllDailyUpdates,
  getUpdatesByCategory,
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

function youtubeThumb(videoId) {
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
}

function UpdateCard({ update, sectionTitle, showSection, horizontal }) {
  const cardImage = update.image || youtubeThumb(update.youtubeId);
  const textOnly = !cardImage;
  const cardText = update.excerpt || update.body;
  const hasPlayBadge = Boolean(
    update.video || update.videos?.length || update.youtubeId
  );
  return (
    <article
      className={`${styles.updateCard} ${horizontal ? styles.updateCardHorizontal : ""} ${textOnly ? styles.updateCardTextOnly : ""}`}
    >
      {cardImage && (
        <div className={styles.cardImageWrap}>
          <Image
            src={cardImage}
            alt={update.title}
            fill
            sizes={horizontal ? "280px" : "(max-width: 768px) 100vw, 33vw"}
            className={styles.cardImage}
          />
          {hasPlayBadge ? (
            <span className={styles.cardVideoBadge} aria-hidden>
              ▶
            </span>
          ) : null}
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
        <p className={`${styles.cardExcerpt} ${textOnly ? styles.cardExcerptLong : ""}`} dir="rtl">
          {cardText}
        </p>
        {update.excerpt ? (
          <span className={styles.cardReadMore} dir="rtl">
            تفصیل پڑھیں ←
          </span>
        ) : null}
      </div>
    </article>
  );
}

function FeaturedGallery({ images, title }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const selectImage = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveIndex(index);
  };

  return (
    <div className={styles.featuredGallery}>
      <div className={styles.galleryMain}>
        <Image
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={`${title} — تصویر ${activeIndex + 1}`}
          width={1600}
          height={1067}
          sizes="(max-width: 768px) 100vw, 70vw"
          className={styles.galleryMainImage}
          priority
        />
      </div>
      <div className={styles.galleryThumbs}>
        {images.map((src, index) => (
          <span
            key={src}
            role="button"
            tabIndex={0}
            aria-label={`تصویر ${index + 1} دیکھیں`}
            className={`${styles.galleryThumb} ${index === activeIndex ? styles.galleryThumbActive : ""}`}
            onClick={(event) => selectImage(event, index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                selectImage(event, index);
              }
            }}
          >
            <Image
              src={src}
              alt={`${title} — تھمب نیل ${index + 1}`}
              fill
              sizes="140px"
              className={styles.galleryThumbImage}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

function FeaturedUpdate({ update }) {
  const gallery = update.images?.length
    ? update.images
    : update.image
      ? [update.image]
      : [];
  const videoSources = update.videos?.length
    ? update.videos
    : update.video
      ? [update.video]
      : [];
  const youtubeId = update.youtubeId;
  const hasVideo = videoSources.length > 0 || Boolean(youtubeId);
  const textOnly = gallery.length === 0 && !hasVideo;
  const multiImage = gallery.length > 1;

  return (
    <article
      className={`${styles.featuredCard} ${textOnly ? styles.featuredCardTextOnly : ""} ${update.stacked ? styles.featuredCardStacked : ""} ${multiImage ? styles.featuredCardGallery : ""} ${hasVideo ? styles.featuredCardVideo : ""}`}
    >
      {update.schoolName && (
        <div className={styles.schoolHeadingBlock}>
          <p className={styles.schoolHeading} dir="rtl">
            {update.schoolName}
          </p>
          {update.schoolPlace ? (
            <p className={styles.schoolPlace} dir="rtl">
              {update.schoolPlace}
            </p>
          ) : null}
        </div>
      )}
      {youtubeId && (
        <div className={styles.featuredVideoWrap}>
          <iframe
            className={styles.featuredYoutube}
            src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1`}
            title={update.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
      {!youtubeId && hasVideo && (
        <div
          className={`${styles.featuredVideoWrap} ${videoSources.length > 1 ? styles.featuredVideoGrid : ""}`}
        >
          {videoSources.map((src, index) => (
            <video
              key={src}
              className={styles.featuredVideo}
              src={src}
              poster={update.image || gallery[index] || gallery[0]}
              controls
              playsInline
              preload="metadata"
            />
          ))}
        </div>
      )}
      {!hasVideo && gallery.length === 1 && (
        <div className={styles.featuredImageWrap}>
          <Image
            src={gallery[0]}
            alt={update.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.featuredImage}
            priority
          />
        </div>
      )}
      {multiImage && (
        <FeaturedGallery images={gallery} title={update.title} />
      )}
      <div className={styles.featuredBody}>
        <span className={styles.featuredLabel} dir="rtl">
          آج کی بڑی خبر
        </span>
        <h2 className={styles.featuredTitle} dir="rtl">
          {update.title}
        </h2>
        <p
          className={`${styles.featuredExcerpt} ${textOnly ? styles.featuredExcerptLong : ""}`}
          dir="rtl"
        >
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

function PhotoGallery({ images, title }) {
  if (!images?.length) return null;

  return (
    <section className={styles.photoGallery}>
      <FeedHeader title={title || "تصویری گیلری"} label="البم" />
      <div className={styles.photoGrid}>
        {images.map((src) => (
          <div key={src} className={styles.photoItem}>
            <Image
              src={src}
              alt={title || "گیلری تصویر"}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className={styles.photoImg}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedReport({ report }) {
  if (!report) return null;

  return (
    <section className={styles.featuredReport} dir="rtl">
      <div className={styles.featuredReportHero}>
        {report.image && (
          <div className={styles.featuredReportImgWrap}>
            <Image
              src={report.image}
              alt={report.title}
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className={styles.featuredReportImg}
              priority
            />
          </div>
        )}
        <div className={styles.featuredReportIntro}>
          <span className={styles.featuredReportBadge}>{report.badge}</span>
          <h2 className={styles.featuredReportTitle}>{report.title}</h2>
          <p className={styles.featuredReportSubtitle}>{report.subtitle}</p>
          <p className={styles.freeEduBanner}>{report.freeEducationNote}</p>
          <div className={styles.featuredReportMeta}>
            <span>{report.school}</span>
            <span>{report.program}</span>
            <span>سیشن شروع: {report.sessionStart}</span>
            <span>{report.reportingPeriod}</span>
          </div>
        </div>
      </div>

      {report.reportPages?.length > 0 && (
        <div className={styles.featuredReportPages}>
          <h3 className={styles.featuredReportH3}>1. مکمل رپورٹ</h3>
          <div className={styles.reportPagesStack}>
            {report.reportPages.map((src, i) => (
              <div key={src} className={styles.reportPageItem}>
                <Image
                  src={src}
                  alt={`${report.title} — صفحہ ${i + 1}`}
                  width={1200}
                  height={1600}
                  sizes="(max-width: 900px) 100vw, 900px"
                  className={styles.reportPageImg}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.featuredReportBlock}>
        <h3 className={styles.featuredReportH3}>
          2. بحال شدہ طلبہ — مین سٹریم میں منتقل ({report.recoveredStudents.length})
        </h3>
        <div className={styles.studentTableWrap}>
          <table className={styles.studentTable}>
            <thead>
              <tr>
                <th>طالب علم</th>
                <th>ابتدائی حالت (اپریل 2025)</th>
                <th>6 ماہ تھراپی و امتحان</th>
                <th>موجودہ حیثیت</th>
              </tr>
            </thead>
            <tbody>
              {report.recoveredStudents.map((s) => (
                <tr key={s.name}>
                  <td>{s.name}</td>
                  <td>{s.initial}</td>
                  <td>{s.progress}</td>
                  <td>{s.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.featuredReportBlock}>
        <h3 className={styles.featuredReportH3}>
          3. موجودہ فعال طلبہ ({report.activeStudents.length})
        </h3>
        <div className={styles.studentTableWrap}>
          <table className={styles.studentTable}>
            <thead>
              <tr>
                <th>طالب علم</th>
                <th>حیثیت</th>
                <th>تشخیص</th>
                <th>عملی منصوبہ</th>
              </tr>
            </thead>
            <tbody>
              {report.activeStudents.map((s) => (
                <tr key={s.name}>
                  <td>{s.name}</td>
                  <td>{s.status}</td>
                  <td>{s.diagnosis}</td>
                  <td>{s.plan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.featuredReportGrid2}>
        <div className={styles.featuredReportBlock}>
          <h3 className={styles.featuredReportH3}>4. {report.dailyDiet.title}</h3>
          <ul className={styles.featuredReportList}>
            {report.dailyDiet.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className={styles.featuredReportBlock}>
          <h3 className={styles.featuredReportH3}>5. جمعہ کی سرگرمیاں</h3>
          <ul className={styles.featuredReportList}>
            {report.fridayActivities.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.featuredReportBlock}>
        <h3 className={styles.featuredReportH3}>6. ہفتہ وار سرگرمیاں و مداخلت</h3>
        <div className={styles.activityGrid}>
          {report.weeklyActivities.map((a, i) => (
            <div key={a.title} className={styles.activityCard}>
              <h4 className={styles.activityTitle}>
                6.{i + 1} {a.title}
              </h4>
              <ul className={styles.featuredReportList}>
                {a.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.featuredReportBlock}>
        <h3 className={styles.featuredReportH3}>7. داخلہ و گنجائش</h3>
        <ul className={styles.featuredReportList}>
          <li>
            <strong>موجودہ فہرست:</strong> {report.enrollment.current}
          </li>
          <li>
            <strong>حد:</strong> {report.enrollment.limitation}
          </li>
          <li>
            <strong>استادہ کی گنجائش:</strong> {report.enrollment.teacherCapacity}
          </li>
          <li>
            <strong>مستقبل کی ضرورت:</strong> {report.enrollment.futureNeed}
          </li>
        </ul>
      </div>

      <div className={styles.featuredReportBlock}>
        <h3 className={styles.featuredReportH3}>8. درکار مواد و بجٹ تخمینہ</h3>
        <div className={styles.studentTableWrap}>
          <table className={styles.studentTable}>
            <thead>
              <tr>
                <th>آئٹم</th>
                <th>تخمینی بجٹ (PKR)</th>
              </tr>
            </thead>
            <tbody>
              {report.materials.map((m) => (
                <tr key={m.item}>
                  <td>{m.item}</td>
                  <td>{m.budget}</td>
                </tr>
              ))}
              <tr className={styles.budgetTotalRow}>
                <td>
                  <strong>کل درکار بجٹ</strong>
                </td>
                <td>
                  <strong>{report.totalBudget}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {report.budgetNote && (
          <p className={styles.featuredReportNote}>{report.budgetNote}</p>
        )}
      </div>
    </section>
  );
}

function SectionMediaHeader({ section }) {
  if (!section.youtubeId && !section.bannerImage) return null;
  return (
    <div className={styles.mediaHeader}>
      {section.youtubeId && (
        <>
          <p className={styles.mediaHeaderTitle} dir="rtl">
            {section.title}
          </p>
          <p className={styles.mediaHeaderSubtitle} dir="rtl">
            ہندو مسلم سکھ عیسائی — سب کو میرا سلام
          </p>
        </>
      )}
      {section.youtubeId && (
        <div className={styles.videoEmbedWrap}>
          <iframe
            className={styles.videoEmbed}
            src={`https://www.youtube.com/embed/${section.youtubeId}`}
            title={section.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
      {section.bannerImage && (
        <div className={styles.pageBanner}>
          <Image
            src={section.bannerImage}
            alt={section.title}
            width={1600}
            height={1131}
            sizes="(max-width: 1400px) 100vw, 1400px"
            className={styles.pageBannerImg}
            priority
          />
        </div>
      )}
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
  const isStoryDetail = section.dailyUpdates?.length === 1 && Boolean(section.dailyUpdates[0]?.excerpt);

  return (
    <div className={styles.sectionPage}>
      <div className={styles.inner}>
        {isStoryDetail ? (
          <button
            type="button"
            className={styles.backLink}
            onClick={() => onTabChange?.("taza-tareen")}
          >
            ← تازہ ترین پر واپس
          </button>
        ) : null}

        <SectionMediaHeader section={section} />

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
            <FeaturedReport report={section.featuredReport} />
            <FeedHeader
              title={isStoryDetail ? "تفصیلی رپورٹ" : "روزانہ اپڈیٹ"}
              label={isStoryDetail ? "مکمل تفصیل" : "تازہ ترین"}
            />
            <UpdatesFeed updates={section.dailyUpdates} />
            <PhotoGallery
              images={section.gallery}
              title={`${section.title} — تمام تصاویر`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function DailyNewsLatestFeed({ onTabChange }) {
  const allUpdates = getAllDailyUpdates();
  const categoryGroups = getUpdatesByCategory();
  const pinnedUpdates = allUpdates.filter((u) => u.pinFirst || u.pinSecond);
  const hideUpdate = (u) =>
    pinnedUpdates.some(
      (p) =>
        p.sectionId === u.sectionId &&
        p.title === u.title &&
        p.date === u.date
    );
  const groupsWithoutFeatured = categoryGroups
    .map((group) => ({
      ...group,
      updates: group.updates.filter((u) => !hideUpdate(u)),
    }))
    .filter((group) => group.updates.length > 0);

  const latestSection = {
    title: "تازہ ترین — آج کی خبریں",
    subtitle: "ہیلپ لائن کے تمام اسکولوں، منصوبوں اور فیلڈ رپورٹس کی روزانہ اپڈیٹ",
    location: "تمام منصوبے",
    summary: null,
    image: "/img/causes/DJI_0010.JPG",
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

          {pinnedUpdates.length > 0 ? (
            <div className={styles.updatesGrid}>
              {pinnedUpdates.map((update) => (
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
          ) : null}

          {groupsWithoutFeatured.map((group) => (
            <section key={group.key} className={styles.categoryBlock}>
              <div className={styles.categoryHeader}>
                <h3 className={styles.categoryTitle} dir="rtl">
                  {group.label}
                </h3>
                <span className={styles.categoryCount}>{group.updates.length}</span>
              </div>
              <div className={styles.updatesGrid}>
                {group.updates.map((update) => (
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
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
