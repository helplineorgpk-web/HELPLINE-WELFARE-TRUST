import React from "react";
import styles from "../../../public/css/Contact.module.css";

export default function DonationDonationArea() {
  return (
    <div className={styles.donationArea}>
      <div className="container">
        {/* Bank Details Section */}
        <div className={styles.bankDetails}>
          <h3 className={styles.bankHeading}>HELPLINE BANK ACCOUNT DETAILS</h3>
          <div className={styles.bankContent}>
            <p>
              <strong>UBL to UBL:</strong> 063501118170
            </p>
            <p>
              <strong>IBAN:</strong> PK69UNIL0112063501118170
            </p>
            <p>
              <strong>Other Bank to UBL:</strong> 063563501118170
            </p>
            <p>
              <strong>Bank:</strong> UBL C Block Model Town, Lahore
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="row align-items-center">
          <div className="col-12">
            <div className={styles.imageWrapper}>
              <img
                src="/img/causes/cause16.jpg"
                alt="Donation Image 1"
                className={styles.image}
              />
              <img
                src="/img/causes/cause3.jpg"
                alt="Donation Image 2"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
