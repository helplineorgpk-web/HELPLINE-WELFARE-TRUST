import React from "react";
import HistoryHeader from "../Components/Elements/Cause-Details/HistoryHeader";
import Layout2 from "../Components/Layout/Layout2";
import styles from "../styles/History.module.css";
import { useRouter } from 'next/router';

const History = () => {
  const router = useRouter();
  const { history } = router.query;
  const historyData = history ? JSON.parse(history) : [];
  return (
    <Layout2>
      <HistoryHeader />
      <section className={`${styles.historySection} pt-120 pb-120`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className={styles.sectionTitle}>
                <h3
                  className={`${styles.title} wow fadeInUp`}
                  data-wow-delay=".2s"
                >
                  Our Journey Through Time
                </h3>
                <p
                  className={`${styles.description} wow fadeInUp`}
                  data-wow-delay=".4s"
                >
                  Since our establishment, we have been dedicated to serving
                  humanity and making a positive impact in the lives of those in
                  need.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {historyData.map((item, index) => (
              <div className="col-lg-6 mb-4" key={item.year}>
                <div
                  className={`${styles.historyItem} wow fadeInUp`}
                  data-wow-delay={`.${index + 2}s`}
                >
                  <div className={styles.historyImage}>
                    <img src={item.image} alt={`History ${item.year}`} />
                  </div>
                  <div className={styles.historyYear}>{item.year}</div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout2>
  );
};

export default History;
