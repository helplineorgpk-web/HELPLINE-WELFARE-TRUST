import React from 'react';
import styles from '../../../public/css/FamilyWelfare.module.css';

const FamilyWelfareInfo = ({ content }) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <p className={styles.title}>{content.title}</p>
        <h2 className={styles.heading}>{content.heading}</h2>
        <div className={styles.content}>
          <div className={styles.textColumn}>
            <p className={styles.description}>{content.description}</p>
          </div>
          <div className={styles.videoColumn}>
            <div className={styles.videoWrapper}>
              <iframe
                src={content.videoSrc}
                title="Family Welfare Program"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyWelfareInfo;
