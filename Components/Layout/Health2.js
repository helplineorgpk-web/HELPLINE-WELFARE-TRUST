import React, { useEffect, useState } from "react";
import styles from "../../public/css/HelplineHealth.module.css";

const statsData = [
  { id: 1, title: "Hospitals", target: 2 },
  { id: 2, title: "Mobile Dispensary", target: 1 },
  { id: 3, title: "Free Meal Service", target: 3 },
  { id: 4, title: "Ambulance", target: 1 },
  { id: 5, title: "Rehabilitation Hospitals", target: 2 },
  { id: 6, title: "Beneficiaries", target: 939129 },
  { id: 7, title: "Million / Year Expenditure", target: 2 },
];

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
