import React, { useEffect, useState } from "react";
import styles from "../../public/css/HelplineHealth.module.css";
import { HelplineData } from "../../pages/api/data";

function StatCard({ title, target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000;
    const increment = target / (duration / 10);

    const updateCount = () => {
      start = Math.ceil(start + increment);
      if (start < target) {
        setCount(start);
        setTimeout(updateCount, 10);
      } else {
        setCount(target);
      }
    };

    updateCount();
  }, [target]);

  return (
    <div className={styles.statCard}>
      <div className={styles.number}>{count.toLocaleString()}</div>
      <div className={styles.label}>{title}</div>
    </div>
  );
}

function Health2() {
  const statsData = HelplineData.statsData;
  return (
    <section className={styles.container}>
      <h2 className={styles.mainTitle}>Helpline Health</h2>
      <p className={styles.quote}>
        “Protect yourself from hell-fire even by giving a piece of date as
        charity”
      </p>
      <div className={styles.grid}>
        {statsData.map((stat) => (
          <StatCard key={stat.id} title={stat.title} target={stat.target} />
        ))}
      </div>
    </section>
  );
}

export default Health2;
