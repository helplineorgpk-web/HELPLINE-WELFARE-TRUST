import React from "react";
import styles from "../../../public/css/Edu.module.css";
function DisasterHeader({ content, image }) {
  return (
    <section className={styles.container}>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className={styles.overlay}>
          <h1 className={styles.title}>{content.title}</h1>
          {content.supportButtonText && (
            <a href="/donation">
              <button className={styles.supportButton}>
                {content.supportButtonText}
              </button>
            </a>
          )}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.desContainer}>
          <h2 className={styles.heading}>{content.heading}</h2>
          <p className={styles.description}>{content.description1}</p>
          <p className={styles.description}>{content.description}</p>

          <p className={styles.description}>{content.description2}</p>
        </div>
        <div className={styles.videoWrapper}>
          <iframe
            className={styles.videoIframe}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GWD4sUwkroA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default DisasterHeader;
