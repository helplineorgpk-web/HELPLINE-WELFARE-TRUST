import React, { useEffect, useRef } from "react";
import styles from "../../../public/css/Certification.module.css";
import { HelplineData } from "../../../pages/api/data";

function Journey() {
  const timelineRef = useRef(null);
  const data = HelplineData.journeyData[0];
  const sortedYearlyData = [...data.datayearly].sort((a, b) => {
    const yearA = parseInt(a.year.split('-')[0]);
    const yearB = parseInt(b.year.split('-')[0]);
    return yearB - yearA;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${entry.target.dataset.index * 0.1}s`;
            entry.target.style.animationPlayState = 'running';
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const timelineItems = timelineRef.current?.querySelectorAll(`.${styles.certificationItem}`);
    timelineItems?.forEach((item, index) => {
      item.style.animationPlayState = 'paused';
      item.dataset.index = index;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.certificationSection}>
      <div className={styles.container}>
        <div className={styles.certificationContent}>
          <h2 className={styles.certificationTitle}>{data.title1}</h2>
          <h4 className={styles.certificationTitle}>{data.title}</h4>
          <p className={styles.certificationAnnouncement}>
            {data.announcement}
          </p>
          <h4 className={styles.certificationConclusion}>{data.conclusion}</h4>
          <p className={styles.certificationAnnouncement}>
            {data.announcement1}
          </p>
        </div>
        <div className={styles.certificationImages} ref={timelineRef}>
          {sortedYearlyData.map((item) => (
            <div key={item.id} className={styles.certificationItem}>
              <h2 className={styles.certificationTitle}>{item.year}</h2>
              <p className={styles.certificationAnnouncement}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
