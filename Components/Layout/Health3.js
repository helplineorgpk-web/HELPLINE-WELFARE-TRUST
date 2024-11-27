import React from "react";
import styles from "../../public/css/DonationGrid.module.css";
import { HelplineData } from "../../pages/api/data";

function Health3() {
  const statsData = HelplineData.donationItems;
  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.mainTitle}>Helpline Health</h2>
        <p className={styles.quote}>
          “Protect yourself from hell-fire even by giving a piece of date as
          charity”
        </p>
      </div>
      <div className={styles.grid}>
        {statsData.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.title}>
              {item.title} {item.amount}
            </div>
            <a href="/donation">
              <div className={styles.button}>Donate Now</div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Health3;
