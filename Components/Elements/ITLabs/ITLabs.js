import React from "react";
import Link from 'next/link';
import styles from "../../../public/css/Itlab.module.css";
import { HelplineData } from "../../../pages/api/data";

const ITLabs = () => {
  const labData = HelplineData.ITData;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>IT Labs Training Programs</h1>
      <p className={styles.subtitle}>Discover our comprehensive range of IT training programs designed to help you succeed in the digital world.</p>
      
      <div className={styles.cardGrid}>
        {labData.map((lab, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardImageWrapper}>
              <img
                src={lab.image}
                alt={lab.title}
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay}>
                <p className={styles.location}>{lab.title}</p>
              </div>
            </div>
            
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{lab.programTitle}</h2>
              <p className={styles.cardDescription}>{lab.description}</p>
              
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Students</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>4</span>
                  <span className={styles.statLabel}>Courses</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>95%</span>
                  <span className={styles.statLabel}>Success</span>
                </div>
              </div>
              
              <div className={styles.cardActions}>
                <Link href="/learn-more" className={styles.learnMore}>
                  Learn More
                </Link>
                <Link href="/enroll" className={styles.enroll}>
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ITLabs;
