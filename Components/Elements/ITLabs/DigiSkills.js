import React, { useState } from "react";
import styles from "../../../public/css/DigiSkills.module.css";
import { HelplineData } from "../../../pages/api/data";

export default function DigiSkills() {
  const digiLabs = HelplineData.digiLabs;
  const img1 = "img/causes/freetraining1.jpg";
  const img2 = "img/causes/freetraining2.jpeg";

  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.container}>
      <img src={img1} alt="Free Training" className={styles.headerImage} />
      <header className={styles.header}>
        <h1>Free IT Courses for Students</h1>
        <p>
          Learn valuable skills and earn through freelancing with free courses
          from DigiSkills and PSDF.
        </p>
      </header>
      <div className={styles.faqContainer}>
        <section className={styles.programSection}>
          <h2 className={styles.programTitle}>DigiSkills Training Program</h2>
          <div className={styles.scrollableContainer}>
            {digiLabs.map((item, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  expandedQuestion === index ? styles.expandedCard : ""
                }`}
              >
                {item.title && (
                  <h3
                    className={styles.cardTitle}
                    onClick={() => toggleAnswer(index)}
                  >
                    {item.title}
                  </h3>
                )}

                {expandedQuestion === index && (
                  <div className={styles.answer}>
                    {item.description && (
                      <p className={styles.cardDescription}>
                        {item.description}
                      </p>
                    )}

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardLink}
                      >
                        Click here
                      </a>
                    )}

                    {item.courses && (
                      <ul className={styles.courseList}>
                        {item.courses.map((course, idx) => (
                          <li key={idx} className={styles.courseItem}>
                            {course}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <img src={img2} alt="Free Training 2" className={styles.footerImage} />
      </div>
      <section className={styles.psdfSection}>
        <h2 className={styles.psdfTitle}>
          Punjab Skills Development Fund (PSDF)
        </h2>
        <p className={styles.psdfDescription}>
          PSDF is the largest skills development fund in Pakistan, offering
          demand-driven training programs to youth in various trades.
        </p>
        <address className={styles.psdfAddress}>
          <strong>Contact:</strong>
          <br />
          1st Floor, Centro 81-A, B-II, Gulberg III, Off M.M.Alam Rd, Lahore,
          Pakistan
          <br />
          <strong>Phone:</strong> (+92) 42 35752190
        </address>
      </section>
    </div>
  );
}
