import React from "react";
import styles from "../../../public/css/OurIntro.module.css";

export default function OurIntro() {
  const stats = [
    {
      id: 1,
      number: "30+",
      label: "Years of Service",
    },
    {
      id: 2,
      number: "50,000+",
      label: "Families Supported",
    },
    {
      id: 3,
      number: "20+",
      label: "Educational Institutions",
    },
    {
      id: 4,
      number: "100,000+",
      label: "Lives Impacted",
    },
  ];

  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Welcome to Helpline</h2>
          </div>
          <div className={styles.description}>
            <p>
              Since 1993, Helpline Welfare Organization has been at the
              forefront of social welfare in Pakistan. Our journey began with a
              simple school construction project in PakPatan, Punjab, and has
              evolved into a comprehensive initiative addressing Education,
              Healthcare and Community Development.
            </p>
            <p>
              We believe in the power of sustainable development and community
              empowerment. Our approach combines immediate relief with long-term
              solutions, ensuring lasting positive change in the lives we touch.
            </p>
          </div>
          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.id} className={styles.statItem}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{display: "flex", gap: "20px"}}>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/GWD4sUwkroA"
            title="Helpline Introduction | 2021 | Full Documentary"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/tKMMzq1dA5I"
            title="Helpline Introduction | 2021 | Full Documentary"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className={styles.overlay}></div>
        </div>
        </div>
      </div>
    </section>
  );
}
