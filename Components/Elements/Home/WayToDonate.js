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
        {donationMethods.map((method, index) => {
          const href =
            method.href ||
            (method.buttonType === "callButton"
              ? `tel:${(method.buttonLabel || "").replace(/\s/g, "")}`
              : "#");
          return (
            <div className={styles.block} key={index}>
              <h6 className={styles.blocktitle}>{method.title}</h6>
              <p>{method.description}</p>
              <a
                href={href}
                className="g_btn hbtn_1 to_right1 nav-donate-btn"
                style={{
                  cursor: "pointer",
                  marginTop: "20px",
                  borderRadius: 10,
                  padding: "8px 20px",
                  minHeight: "auto",
                  height: "auto",
                  lineHeight: 1.4,
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                {method.buttonLabel}
                <span></span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WayToDonate;
