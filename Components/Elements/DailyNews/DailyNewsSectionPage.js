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

function UpdateCard({ update, sectionTitle, showSection, horizontal }) {
  const textOnly = !update.image;
  return (
    <article
      className={`${styles.updateCard} ${horizontal ? styles.updateCardHorizontal : ""} ${textOnly ? styles.updateCardTextOnly : ""}`}
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
        <p className={`${styles.cardExcerpt} ${textOnly ? styles.cardExcerptLong : ""}`} dir="rtl">
          {update.body}
        </p>
      </div>
    </article>
  );
}

function FeaturedUpdate({ update }) {
  const textOnly = !update.image;
  return (
    <article
      className={`${styles.featuredCard} ${textOnly ? styles.featuredCardTextOnly : ""}`}
    >
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
            <FeaturedReport report={section.featuredReport} />
            <FeedHeader title="روزانہ اپڈیٹ" label="تازہ ترین" />
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
  const featuredUpdate = allUpdates.find((u) => u.pinFirst) || allUpdates[0];
  const groupsWithoutFeatured = categoryGroups
    .map((group) => ({
      ...group,
      updates: group.updates.filter(
        (u) =>
          !(
            featuredUpdate &&
            u.sectionId === featuredUpdate.sectionId &&
            u.title === featuredUpdate.title &&
            u.date === featuredUpdate.date
          )
      ),
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

          {featuredUpdate && (
            <button
              type="button"
              className={styles.featuredLink}
              onClick={() => onTabChange?.(featuredUpdate.sectionId)}
            >
              <FeaturedUpdate update={featuredUpdate} />
            </button>
          )}

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
