import React from "react";
import { useRouter } from "next/router";
import styles from "../../public/css/QurbaniDetail.module.css";
import { qurbaniData } from "../../pages/api/qurbaniData";
import Layout2 from "../../Components/Layout/Layout2";

export default function QurbaniDetail() {
  const router = useRouter();
  const { id } = router.query;

  const qurbaniItem = qurbaniData?.find(
    (item) => item.id === id || item.id === parseInt(id)
  );

  if (!qurbaniItem) {
    return (
      <Layout2>
        <div className={styles.container}>
          <div className={styles.errorMessage}>
            <h1>Item not found</h1>
            <button
              onClick={() => router.push("/qurbani")}
              className={styles.backButton}
            >
              Back to Qurbani
            </button>
          </div>
        </div>
      </Layout2>
    );
  }

  return (
    <Layout2>
      <div className={styles.container}>
        <div className={styles.detailContainer}>
          <div
            className={styles.imageContainer}
            style={{ backgroundImage: `url(${qurbaniItem.image})` }}
          >
            <div className={styles.imageOverlay}>
              <div className={styles.yearBadge}>{qurbaniItem.year}</div>
              {qurbaniItem.location && (
                <div className={styles.locationBadge}>
                  <span className={styles.locationIcon}>📍</span>
                  {qurbaniItem.location}
                </div>
              )}
            </div>
          </div>
          <div className={styles.contentContainer}>
            <button
              onClick={() => router.push("/qurbani")}
              className={styles.backButton}
            >
              ← Back to Qurbani
            </button>
            <h1 className={styles.title}>{qurbaniItem.detailHeader}</h1>
            <div className={styles.detailContent}>
              <p className={styles.description}>{qurbaniItem.detail}</p>
              {qurbaniItem.additionalDetails && (
                <div className={styles.additionalInfo}>
                  {qurbaniItem.additionalDetails.map((detail, index) => (
                    <div key={index} className={styles.infoSection}>
                      <h3>{detail.title}</h3>
                      <p>{detail.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
}
