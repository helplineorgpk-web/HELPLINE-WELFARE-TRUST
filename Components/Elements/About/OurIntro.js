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
    <>
      <section className={styles.introSection}>
        <h2 style={{ textAlign: "center", marginBottom: "80px" }}>
          Welcome to Helpline
        </h2>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h2>Introduction</h2>
            </div>
            <div className={styles.description}>
              <p>
                Helpline is a social welfare organization working since 2000 for
                the poor, deserving and underprivileged people of Pakistan. The
                organization is registered under the Voluntary Social Welfare
                Agencies (Registration and Control) Ordinance, 1961 (XLVI of
                1961) of the Government of the Punjab since 2000 and is also
                registered with Punbjab cherity Commission wide
                PB-8758670743461099.
              </p>
              <p>
                The organization is also collaborating with the federal
                government. Helpline has signed different MOU’s with Economic
                Affair Division (EAD) in Islamabad (Govt. of Pakistan),
                concerning various Europe based NGO’s and is authorized to
                receive donation from abroad. The contributions to the Helpline
                (NTN 3133443) are exempted from Tax by the FBR under Section
                2(36) of the Income Tax Ordinance, 2001.
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
          <div style={{ display: "flex", gap: "20px" }}>
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
    </>
  );
}
