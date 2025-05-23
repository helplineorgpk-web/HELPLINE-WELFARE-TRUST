import React from "react";
import styles from "./RamzanRashan.module.css";
import { HelplineData } from "../../../data/helplineData";

const RamzanDistributionArea = () => {
  return (
    <section className={styles.main}>
      <section className={styles.rashandetails}>
        <div className="container">
          <h3>Ramzan Rashan Distribution Program</h3>
          <p>
            During the blessed month of Ramzan, Pak Helpline distributes special
            Rashan packages among the needy families and individuals. The
            packages include essential items like Atta, Ghee, Rice, Sugar, Daal,
            Dates, and other necessities. Our program reaches across Pakistan
            including Punjab, Sindh, Baluchistan, KPK, and Kashmir.
          </p>
        </div>
      </section>
      <h3 className={styles.heading}>Ramzan Program In Cities</h3>
      <div className={styles.cardGrid}>
        {HelplineData.RashanData.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.cardImage}>
                  <img src={item.imagebg} alt={item.title} />
                  <div className={styles.cardOverlay}>
                    <h2 className={styles.cardTitle}>{item.title}</h2>
                    <h3 className={styles.cardProgramTitle}>
                      {item.programTitle}
                    </h3>
                  </div>
                </div>
              </div>

              <div className={styles.cardBack}>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.cardDescription}>{item.description}</p>
                <div className={styles.cardStats}>
                  <div className={styles.statItem}>
                    <div className={styles.statValue}>1000+</div>
                    <div className={styles.statLabel}>Families Helped</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statValue}>6</div>
                    <div className={styles.statLabel}>Cities Covered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RamzanDistributionArea;
