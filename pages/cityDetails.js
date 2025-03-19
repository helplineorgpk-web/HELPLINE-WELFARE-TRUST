import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Layout2 from "../Components/Layout/Layout2";
import styles from "../public/css/cityDetail.module.css";
import Image from "next/image";
import { citiesData } from "../pages/api/data";
import CityDetailsBreadCrumb from "../Components/Elements/OurPresence/CityDetailsBreadCrumb";

export default function CityDetail() {
  const router = useRouter();
  const { cityId } = router.query;

  if (!router.isReady) return null;

  const city = citiesData.cities.find((c) => c.id === Number(cityId));

  if (!city) {
    return (
      <Layout2>
        <div className={styles.cityDetailContainer}>
          <h2>City not found</h2>
          <p>The requested city could not be found.</p>
        </div>
      </Layout2>
    );
  }

  return (
    <Layout2>
      <CityDetailsBreadCrumb />
      <div className={styles.cityDetailContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.cityDetailContent}
        >
          <div className={styles.imageContainer}>
            <Image
              src={city.image}
              alt={city.name}
              width={1200}
              height={600}
              className={styles.cityImage}
              priority
            />
          </div>
          <div className={styles.cityInfo}>
            <div className={styles.cityNameContainer}>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
                  }}
                >
                  <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className={styles.cityName}
                  >
                    {city.name}
                  </motion.h1>
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className={styles.backButton}
                    onClick={() => router.back()}
                  >
                    Back to Cities
                  </motion.button>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className={styles.cityDescription}
                >
                  {city.description}
                </motion.p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className={styles.statsContainer}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={styles.statItem}
              >
                <span className={styles.statNumber}>{city.projects}</span>
                <span className={styles.statLabel}>Active Projects</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={styles.statItem}
              >
                <span className={styles.statNumber}>{city.stats.students}</span>
                <span className={styles.statLabel}>Students</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={styles.statItem}
              >
                <span className={styles.statNumber}>
                  {city.stats.volunteers}
                </span>
                <span className={styles.statLabel}>Volunteers</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className={styles.initiativesSection}
        >
          <h2 className={styles.initiativesTitle}>Our Initiatives</h2>
          {city.initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.2, duration: 0.5 }}
              className={styles.initiativeCard}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "space-between",
                }}
              >
                <h3 className={styles.initiativeTitle}>{initiative.title}</h3>
                <span className={styles.status}>Active</span>
              </div>
              <p className={styles.initiativeDescription}>
                {initiative.description}
              </p>
              <div className={styles.projectCards}>
                {initiative.projects.map((project, pIndex) => (
                  <div
                    key={pIndex}
                    whileHover={{ scale: 1.03 }}
                    className={styles.projectCard}
                  >
                    <h5 className={styles.initiativeHeading}>{project.name}</h5>
                    <p className={styles.initiativedesc}>
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout2>
  );
}
