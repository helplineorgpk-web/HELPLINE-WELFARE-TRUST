import React from "react";
import Layout1 from "../Components/Layout/Layout1";
import DarulEhsanHeader from "../Components/Elements/darulehsan/DarulEhsanHeader";
import styles from "../public/css/DarulPages.module.css";

export default function DarulEhsan() {
  return (
    <Layout1>
      <div className={styles.pageContainer}>
        <DarulEhsanHeader />
        <section className={styles.sectionContainer}>
          <h1 className={styles.pageTitle}>
            Dar ul Ehsan
          </h1>
          <div className="container">
            <div className="row">
              {/* Left Column */}
              <div className="col-md-6" style={{ marginBottom: "30px" }}>
                <div className={styles.contentCard}>
                  <h2 className={styles.cardTitle}>
                    Serving Humanity with Compassion
                  </h2>
                  <div className={styles.cardContent}>
                    <p>
                      Dar ul Ehsan represents our commitment to serving humanity
                      through various welfare initiatives. We believe in
                      creating a positive impact in the lives of those who need
                      it most, fostering hope and dignity through our programs.
                    </p>
                    <div style={{ marginTop: "30px" }}>
                      <img
                        src="/img/muwakhat/darulehsan.png"
                        alt="Dar ul Ehsan"
                        className={styles.featureImage}
                      />
                    </div>
                    <div style={{ marginTop: "30px" }}>
                      <p className={styles.quote}>
                        "The best among you are those who bring greatest
                        benefits to others."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-md-6">
                <div className={styles.initiativesCard}>
                  <h3 className={styles.initiativesTitle}>
                    Our Key Initiatives:
                  </h3>
                  <ul className={styles.initiativesList}>
                    {[
                      "Food Distribution Programs",
                      "Healthcare Support Services",
                      "Emergency Relief Operations",
                      "Widow Support Program",
                      "Clean Water Projects",
                      "Community Development",
                      "Educational Support",
                      "Orphan Care Program",
                      "Elderly Support Services",
                      "Skills Development",
                      "Housing Assistance",
                      "Emergency Aid Distribution",
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
