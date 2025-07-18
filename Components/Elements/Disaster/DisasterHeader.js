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
    </section>
  );
}

export default DisasterHeader;
