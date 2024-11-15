import React from "react";
import styles from "../../../public/css/DisasterManagement.module.css";

const DisasterReliefProgram = ({ data }) => {
  return (
    <section
      className={styles.container}
      style={{
        backgroundImage: `url(${data.headerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.header}>
          <h1 className={styles.title}>{data.title}</h1>
          <button className={styles.supportButton}>
            {data.supportButtonText}
          </button>
        </div>

        <div className={styles.stats}>
          {data.stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <h2 className={styles.statValue}>{stat.value}</h2>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className={styles.content}>
          <h2 className={styles.heading}>{data.heading}</h2>
          <p className={styles.description}>{data.description}</p>
        </div>

        <div className={styles.videoSection}>
          <iframe
            src={data.videoSrc2}
            title={data.heading}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          ></iframe>
        </div>

        <div className={styles.donationOptions}>
          {data.donationOptions.map((option, index) => (
            <div key={index} className={styles.donationCard}>
              <h5 className={styles.title}>{option.label}</h5>
              <p>{option.price}</p>
              <button className={styles.donationButton}>
                {option.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisasterReliefProgram;
