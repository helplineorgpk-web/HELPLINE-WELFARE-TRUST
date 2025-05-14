import React from "react";
import styles from "../../../public/css/WayToDonate.module.css";
import { HelplineData } from "../../../pages/api/data";
function WayToDonate() {
  const donationMethods = HelplineData.donationMethods;
  return (
    <section className={styles.container}>
      <h3 className={styles.heading2}>Donate to Help the Needy</h3>
      <div className={styles.main}>
        <p className={styles.heading1}>Ways To Donate</p>
      </div>

      <div className={styles.blockContainer}>
        {donationMethods.map((method, index) => (
          <div className={styles.block} key={index}>
            <h6 className={styles.blocktitle}>{method.title}</h6>
            <p>{method.description}</p>
            <a href={method.href}>
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
