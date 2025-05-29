import React from "react";
import Layout1 from "../Components/Layout/Layout1";
import DarulTarbiyahHeader from "../Components/Elements/darultarbiyah/DarulTarbiyahHeader";
import styles from "../public/css/DarulPages.module.css";

export default function DarulTarbiyah() {
  return (
    <Layout1>
      <div className={styles.pageContainer}>
        <DarulTarbiyahHeader />
        <section className={styles.sectionContainer}>
          <h1 className={styles.pageTitle}>
            Dar ul Tarbiyah
          </h1>
          <div className="container">
            <div className="row">
              {/* Left Column */}
              <div className="col-md-6" style={{ marginBottom: "30px" }}>
                <div className={styles.contentCard}>
                  <h2 className={styles.cardTitle}>
                    Our Educational Initiative
                  </h2>
                  <div className={styles.cardContent}>
                    <p>
                      Dar ul Tarbiyah is our dedicated educational initiative aimed
                      at providing quality education to underprivileged children. We
                      believe that education is the most powerful tool for breaking
                      the cycle of poverty and creating lasting positive change in
                      our communities.
                    </p>
                    <div style={{ marginTop: "30px" }}>
                      <img
                        src="/img/muwakhat/darultarbiyah.png"
                        alt="Dar ul Tarbiyah"
                        className={styles.featureImage}
                      />
                    </div>
                    <div style={{ marginTop: "30px" }}>
                      <p className={styles.quote}>
                        "Education is not just about going to school and getting a
                        degree. It's about widening your knowledge and absorbing the
                        truth about life."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-md-6">
                <div className={styles.initiativesCard}>
                  <h3 className={styles.initiativesTitle}>
                    Our Programs Include:
                  </h3>
                  <ul className={styles.initiativesList}>
                    {[
                      "Capacity Building",
                      "Personnelity Development",
                      "Professional Development",
                      "Character Building & Child Grooming",
                      "Career Counseling",
                      "phychological Counseling",
                      "Intershipship",
                      "Skills Development Workshops",
                      "Job Placement",
                      "Character Building Sessions",
                      "Parent-Teacher Engagement",
                      "Educational Resources Distribution",
                    ].map((item) => (
                      <li
                        key={item}
                        className={styles.initiativeItem}
                      >
                        <span className={styles.bulletPoint}>
                          ●
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout1>
  );
}
