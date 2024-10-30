import React from "react";
import styles from "../../../public/css/WayToDonate.module.css";

function WayToDonate() {
  return (
    <section className={styles.container}>
      <div className={styles.main}>
        <p className={styles.heading1}>Ways To Donate</p>
      </div>
      <h3 className={styles.heading2}>Donate a little bit of money</h3>
      <h5 className={styles.heading3}>A Difference Can Be Made</h5>
      <div className={styles.blockContainer}>
        <div className={styles.block}>
          <h6>Direct Deposit</h6>
          <p>
            Direct deposits or transfers can be made into our accounts at any of
            the banks.
          </p>
          <button className={styles.bankButton}>
            Bank Details
            </button>
        </div>
        <div className={styles.block}>
          <h6>Cash Pickup</h6>
          <p>
            To pick-up donations from your doorstep, simply call us at the given
            number, and we'll collect it.
          </p>
          <button className={styles.callButton}>0321 4388352</button>
        </div>
        <div className={styles.block}>
          <h6>Donate Online</h6>
          <p>
            You can donate online using any Visa or MasterCard anywhere from the
            World.
          </p>
          <button className={styles.donateButton}>Donate Now</button>
        </div>
      </div>
    </section>
  );
}

export default WayToDonate;
