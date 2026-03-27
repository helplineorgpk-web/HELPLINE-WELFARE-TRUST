import React, { useState } from "react";
import styles from "../../../public/css/IslamicActivities.module.css";
import { HelplineData } from "../../../pages/api/data";

const IslamicActivities = () => {
  const activities = HelplineData.activities;

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Islamic Programs</h1>
        <p>
          Helpline Welfare Trust turns acts of worship and charity into organized support for families, students, and communities through Islamic programs rooted in service and compassion. Whether a donor gives during Ramzan, contributes to Qurbani, or supports Islamic learning spaces, the outcome is practical support delivered with care.
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        {activities.map((activity, index) => (
          <button
            key={index}
            className={`${styles.activityButton} ${
              activeIndex === index ? styles.activeButton : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {activity.title}
          </button>
        ))}
      </div>
      <div className={styles.slide}>
        <h2 className={styles.activityTitle}>
          {activities[activeIndex].title}
        </h2>
        <p className={styles.activityDescription}>
          {activities[activeIndex].description}
        </p>
        {activities[activeIndex].videoUrl ? (
          <iframe
            className={styles.activityVideo}
            src={activities[activeIndex].videoUrl}
            title={activities[activeIndex].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p style={{ color: "gray" }}>
            Video will be added for this activity soon.
          </p>
        )}
        <div className={styles.questions}>
          {activities[activeIndex].questions.map((q, qIndex) => (
            <div key={qIndex} className={styles.question}>
              <h6 className={styles.que}>{q.question}</h6>
              <p>{q.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IslamicActivities;
