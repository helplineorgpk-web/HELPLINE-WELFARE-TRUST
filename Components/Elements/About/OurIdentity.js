import React from 'react';
import styles from '../../../public/css/OurIdentity.module.css';

export default function OurIdentity() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Our Identity</h2>
        <p className={styles.description}>
          Helpline embodies Mawakhat (solidarity) as a vision towards a poverty-free society based
          on the values of solidarity, equity, and compassion. Helpline values financial inclusion,
          financial inclusion, education, and healthcare as fundamental human rights.
        </p>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.card + ' ' + styles.story}>
          <div className={styles.islamicPattern}></div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Our Story</h3>
            <p className={styles.cardText}>
              Before 2001, Mr. Muhammad Aslam Khan Kakkarh was affiliated with
              the Punjab Rural Support Program (PRSP) where he worked
              with marginalized families and witnessed their struggles
              firsthand. Learning from his experiences, he founded
              Akhuwat and decided to dedicate his life to providing
              support to those in need.
            </p>
            <button className={styles.readMore}>
              <span>+</span>
            </button>
          </div>
        </div>
        <div className={styles.card + ' ' + styles.work}>
          <div className={styles.islamicPattern}></div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Our Work</h3>
            <p className={styles.cardText}>
              Helpline offers interest-free loans such as Qarz-e-Hassan
              to financially disadvantaged families and individuals.
              Helpline provides three types of loans; enterprise,
              agriculture, and housing. Beyond the realm of microfinance,
              Helpline also works in the areas of education, healthcare
              services, transgender support, and disaster relief.
            </p>
            <button className={styles.readMore}>
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
