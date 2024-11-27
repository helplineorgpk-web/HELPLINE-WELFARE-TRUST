import React, { useEffect, useState } from "react";
import { HelplineData } from "../../../pages/api/data";
import styles from "../../../public/css/AllOverPakistan.module.css";

const StatItem = ({ title, target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000;
    const increment = target / (duration / 5);

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
    <div className={styles.col}>
      <div className={styles.statItem}>
        <h3 className={styles.count}>{count.toLocaleString()}</h3>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

const AllOverPakistan = () => {
  const statsData = HelplineData.allOverPakistanStats;

  return (
    <section className={styles.ctaArea}>
      <div className={styles.container}>
        <h2 className={styles.heading}>HELPLINE in All Over Pakistan</h2>
        <div className={styles.row}>
          {statsData.map((stat) => (
            <StatItem key={stat.id} title={stat.title} target={stat.target} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllOverPakistan;
