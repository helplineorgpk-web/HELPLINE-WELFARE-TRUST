import React, { useState } from "react";
import styles from "../../../public/css/RashanArea.module.css";
import { HelplineData } from "../../../pages/api/data";

const RashanDistributionArea = () => {
  const RashanData = HelplineData.RashanData;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === RashanData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? RashanData.length - 1 : prevIndex - 1
    );
  };

  const currentSlide = RashanData[currentIndex];

  return (
    <section className={styles.main}>
      <section className={styles.rashandetails}>
        <div className="container">
          <h3>Rashan Distribution Program</h3>
          <p>
            By helping mankind, Pak Helpline distributed 11,644 Ramzan Rashan
            packages among the needy families and individuals in 2019. The
            packages include Atta, Ghee, Rice, Sugar, Daal, and tea. In
            different areas of Pakistan like Punjab (Gojra, Bahawalpur, R.Y.
            Khan, Rajan Pur, Sheikhupura, and Lahore), Sindh, Baluchistan, KPK,
            and Kashmir, the program has been running since 1992.
          </p>
        </div>
      </section>
      <h3 className={styles.heading}>Rashan Program In Cities</h3>
      <div
        className={styles.slide}
        style={{
          backgroundImage: `url(${currentSlide.imagebg})`,
        }}
      >
        <div className={styles.overlay}>
          <div className={styles.contentWrapper}>
            <div className={styles.textSection}>
              <h1 className={styles.programTitle}>{currentSlide.title}</h1>
              <p className={styles.description}>{currentSlide.description}</p>
              <h2 className={styles.programTitle}>
                {currentSlide.programTitle}
              </h2>
            </div>
            <div className={styles.imageSection}>
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.controls}>
            <button className={styles.arrow} onClick={handlePrev}>
              &#9664;
            </button>
            <button className={styles.arrow} onClick={handleNext}>
              &#9654;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RashanDistributionArea;
