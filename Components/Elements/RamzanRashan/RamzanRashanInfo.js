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
                <h2 className={styles.sectiontitle}>Ramzan Rashan Program</h2>
                <div className={styles.line}></div>
                <p>
                  Helpline distributs every year a wide range of rashan among
                  the needy families and individuals during the Specially blessed month of Ramzan. 
      
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
          <h3>Ramzan Rashan Program in Provinces</h3>
          <p>
            During the holy month of Ramzan, Pak Helpline distributed thousands of Ramzan Rashan
            packages among the needy families and individuals. The packages include Atta, Ghee, 
            Rice, Sugar, Daal, Dates, and other essential items. The program covers different 
            areas of Pakistan including Punjab, Sindh, Baluchistan, KPK, and Kashmir.
          </p>
        </div>
      </section>
    </div>
  );
}
