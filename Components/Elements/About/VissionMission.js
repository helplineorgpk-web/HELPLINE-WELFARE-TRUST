import React from "react";
import styles from "../../../public/css/VisionMission.module.css";

const content = {
  mission: {
    title: "Mission",
    description: "To alleviate poverty by empowering socially and economically marginalized segments of society through interest-free microfinance and education.",
  },
  vision: {
    title: "Vision",
    description: "A poverty-free society built on the principles of compassion and equity.",
  },
  objective: {
    title: "Objective",
    description: "To develop and sustain a social system based on mutual support where each individual lives a life full of respect and dignity.",
  },
};

export default function VissionMission() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Helpline is Committed to Changing Lives</h2>
      </div>
      <div className={styles.cardsContainer}>
        <div className={`${styles.card} ${styles.mission}`}>
          <h3>{content.mission.title}</h3>
          <p>{content.mission.description}</p>
        </div>
        <div className={`${styles.card} ${styles.vision}`}>
          <h3>{content.vision.title}</h3>
          <p>{content.vision.description}</p>
        </div>
        <div className={`${styles.card} ${styles.objective}`}>
          <h3>{content.objective.title}</h3>
          <p>{content.objective.description}</p>
        </div>
      </div>
    </div>
  );
}
