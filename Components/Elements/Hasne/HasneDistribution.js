import React from "react";
import styles from "../../../public/css/Hasne.module.css";

function HasneDistribution({ data }) {
  return (
    <div className={styles.main}>
      <div className={`${styles.container} container`}>
        <p className={styles.title}>{data.title}</p>
        <div className={styles.content}>
          <h2 className={styles.heading}>{data.detailHeader}</h2>
          <p className={styles.description}>{data.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default HasneDistribution;
