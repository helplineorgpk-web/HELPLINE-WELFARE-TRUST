import React from "react";
import styles from "../../../public/css/headArea.module.css";

export default function HeadArea() {
  return (
    <div className={styles.head_area}>
      <div className={styles.overlay}></div>
      <div className={styles.text_container}>
        <h1 className={styles.heading}>HELPLINE</h1>
        <p className={styles.pergraph}>
          Helpline Welfare Trust, a project of community development through education.
        </p>
      </div>
      <div className={styles.wave}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="#fff"
        >
          <path
            className="elementor-shape-fill"
            d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,106.7C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64V320H0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
