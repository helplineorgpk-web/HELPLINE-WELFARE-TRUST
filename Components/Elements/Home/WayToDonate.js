import React from "react";
import styles from "../../../public/css/WayToDonate.module.css";
import { HelplineData } from "../../../pages/api/data";
function WayToDonate() {
  const donationMethods = HelplineData.donationMethods;
  return (
    <section className={styles.container}>
      <div className={styles.main}>
        <p className={styles.heading1}>Ways To Donate</p>
      </div>
      <h3 className={styles.heading2}>Donate a little bit of money</h3>
      <h5 className={styles.heading3}>A Difference Can Be Made</h5>
      <div className={styles.blockContainer}>
        {donationMethods.map((method, index) => (
          <div className={styles.block} key={index}>
            <h6>{method.title}</h6>
            <p>{method.description}</p>
            <a href="/donation">
              <div className={styles[method.buttonType]}>
                {method.buttonLabel}
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WayToDonate;
