import React from "react";
import { useRouter } from "next/router";
import styles from "../../../public/css/Qurbani.module.css";

export default function MasjidProgram({ swiperData }) {
  const router = useRouter();
  const groupedByYear = swiperData.reduce((acc, item) => {
    const year = item.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => {
    const yearA = parseInt(a.split(" ")[1]);
    const yearB = parseInt(b.split(" ")[1]);
    return yearB - yearA;
  });

  const handleSeeMore = (id) => {
    router.push(`/masjid/${id}`);
  };

  const renderQurbaniSection = (year, items) => (
    <div key={year} className={styles.qurbaniSection}>
      <div className={styles.yearHeader}>
        <h2>{year}</h2>
      </div>
      <div className={styles.qurbaniGrid}>
        {items.map((item) => (
          <div key={item.id} className={styles.qurbaniCard}>
            <div className={styles.imageContainer}>
              <img src={item.image} alt={item.detailHeader} />
              <div className={styles.cardOverlay}>
                <div className={styles.locationBadge}>
                  <span className={styles.locationIcon}>📍</span>
                  {item.detailHeader}
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>{item.detailHeader}</h3>
              <p>{item.detail}</p>
              <button
                onClick={() => handleSeeMore(item.id)}
                className={styles.seeMoreButton}
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.qurbaniContainer}>
      <div className={styles.mainHeader}>
        <h1>Masjid Programs</h1>
        <p>Supporting communities through our annual Masjid initiatives</p>
      </div>
      {sortedYears.map((year) => (
        <React.Fragment key={year}>
          {renderQurbaniSection(year, groupedByYear[year])}
          {year !== sortedYears[sortedYears.length - 1] && (
            <div className={styles.sectionDivider} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
