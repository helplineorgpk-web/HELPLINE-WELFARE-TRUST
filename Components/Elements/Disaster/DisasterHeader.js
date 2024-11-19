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
            <button className={styles.supportButton}>
              {content.supportButtonText}
            </button>
          )}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.videoWrapper}>
          <iframe
            className={styles.videoIframe}
            width="560"
            height="315"
            src={content.videoSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.desContainer}>
          <h2 className={styles.heading}>{content.heading}</h2>
          <p className={styles.description}>{content.description}</p>
        </div>
      </div>
    </section>
  );
}

export default DisasterHeader;
