import React, { useState, useEffect } from "react";
import styles from "../../../public/css/Itlab.module.css";
import { HelplineData } from "../../../pages/api/data";

const ITLabs = () => {
  const RashanData = HelplineData.ITData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === RashanData.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? RashanData.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const autoSlide = setInterval(handleNext, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  const currentSlide = RashanData[currentIndex];

  return (
    <section>
      <div className={styles.slide}>
        <div className={styles.overlay}>
          <h3 className={styles.heading}>IT Labs Program In Cities</h3>
          <div className={styles.contentWrapper}>
            <div
              className={`${styles.textSection} ${
                isAnimating ? styles.textAnimate : ""
              }`}
            >
              <h4 className={styles.programTitle}>{currentSlide.title}</h4>
              <p className={styles.description}>{currentSlide.description}</p>
              <h2 className={styles.programTitle}>
                {currentSlide.programTitle}
              </h2>
            </div>
            <div
              className={`${styles.imageSection} ${
                isAnimating ? styles.imageAnimate : ""
              }`}
            >
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

export default ITLabs;
