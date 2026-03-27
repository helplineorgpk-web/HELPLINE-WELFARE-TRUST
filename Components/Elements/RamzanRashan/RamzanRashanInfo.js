import React from 'react';
import styles from './RamzanRashan.module.css';

export default function RamzanRashanInfo() {
  return (
    <div className={styles.rashanpage}>
      <section className={styles.rashanintro}>
        <div className={styles.container}>
          <div className="container">
            <div className={styles.row}>
              <div className={styles.colmd6}>
                <h2 className={styles.sectiontitle}>Ramzan Rashan Support</h2>
                <div className={styles.line}></div>
                <p>
                  During Ramzan, the burden on poor families often increases. Helpline&apos;s Ramzan Rashan work helps deserving households observe the holy month with greater stability and dignity by providing food packages and essential supplies. This is one of the most impactful ways donors can support families during a sacred time.
                </p>
              </div>
              <div className={styles.colmd6}>
                <div className={styles.imageContainer}>
                  <img
                    src="/img/causes/cause26.jpg"
                    alt="Ramzan Rashan Distribution"
                    className={styles.mainImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.rashandetails}>
        <div className="container">
          <h3>Ramzan Support Across Pakistan</h3>
          <p>
            Ramzan is a month of worship, mercy, and generosity, but it can also be a difficult time for poor households trying to manage food and daily expenses. Helpline distributes thousands of Ramzan Rashan packages across Pakistan including Punjab, Sindh, Balochistan, KPK, and Kashmir. Each package includes Atta, Ghee, Rice, Sugar, Daal, Dates, and other essential items to help families observe the month with peace and dignity.
          </p>
        </div>
      </section>
    </div>
  );
}
