import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styles from "../../../public/css/OurPresence.module.css";
import { citiesData } from "../../../pages/api/data";

export default function CitiesCards() {
  const router = useRouter();

  const handleCityClick = (city) => {
    router.push({
      pathname: `/cityDetails`,
      query: { cityId: city.id },
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className={styles.citiesContainer}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.mainTitle}
      >
        Our Presence - Pakistan
      </motion.h2>
      <div className={styles.cardsGrid}>
        {citiesData.cities.map((city, index) => (
          <motion.div
            key={city.id}
            className={styles.cityCard}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCityClick(city)}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.cardImageContainer}>
              <img
                src={city.image}
                alt={city.name}
                className={styles.cityImage}
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cityName}>{city.name}</h3>
              <p className={styles.cityDescription}>{city.description}</p>
              <div className={styles.projectCount}>
                <span className={styles.number}>{city.projects}</span>
                <span className={styles.label}>Active Projects</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
