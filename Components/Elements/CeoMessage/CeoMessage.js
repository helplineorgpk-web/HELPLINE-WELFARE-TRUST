import React from "react";
import styles from "../../../public/css/CeoMessage.module.css";

const ChairmanMessage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chairmansection}>
        <div className={styles.chairmanname}>
          <h3>Muhammad Iqbal Khan</h3>
        </div>
        <div className={styles.chairmanmessage}>
          <div className={styles.chairmanimage}>
            <img src="img/team/ceo.png" alt="Chairman" />
          </div>
          <div className={styles.messagecontent}>
            <h2>Chairman's Message</h2>
            <p>
              I feel proud to present Helpline as a remedy for all those who
              suffer from calamity, mishap, or misfortune. Helpline has always
              been among the first responders to reach for the rescue of
              humankind. Here we serve humanity without any discrimination and
              strive hard to fulfill our obligation towards the social cause.
              Helping orphan children so they may become independent, bringing
              employment and entrepreneurial opportunities to help households to
              earn their livelihood with dignity and honor.
            </p>
            <p>
              We extend hands towards the needy facing extreme situations due to
              natural or manmade disasters, giving medical treatment to the
              sick, providing clean drinking water to the water-deficient
              people, and bringing light to the life of the nation through
              education and skills development.
            </p>
            <p>
              We remained steadfast in the service to humanity for providing
              relief to the needy. I am thankful to all those who trusted us and
              helped us serve this social cause of humanity, and I wish that
              this cooperation for the mutual cause of humanity remains thriving
              forever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanMessage;
