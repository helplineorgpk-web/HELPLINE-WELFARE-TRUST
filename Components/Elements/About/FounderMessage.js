import React from "react";
import styles from "../../../public/css/FounderMessage.module.css";

export default function FounderMessage() {
  return (
    <div className={styles.container}>
      <div className={styles.founderSection}>
        <h4 className={styles.founderHeading}>GENERAL SECRETARY MESSAGE</h4>
        
        <div className={styles.messageContent}>
          <div className={styles.profileSection}>
            <div className={styles.imageWrapper}>
              <img
                src="/img/about/mianakhlaqurrehman.jpg"
                alt="Mian Akhalq Ur Rehman"
                className={styles.founderImage}
              />
              <div className={styles.founderInfo}>
                <h5 className={styles.founderName}>Mian Akhalq Ur Rehman</h5>
                <p className={styles.founderTitle}>Founder & General Secretary</p>
              </div>
            </div>
          </div>

          <div className={styles.messageText}>
            <p>
              As the General Secretary of Mawakhat-e-Madina, I am deeply honored
              to represent an organization that embodies the true spirit of
              brotherhood and community service. Our mission extends beyond mere
              charitable work; we strive to create lasting bonds within our
              community that reflect the principles of mutual support and
              compassion.
            </p>
            <p>
              Mawakhat-e-Madina stands as a beacon of hope, fostering
              relationships that transcend social barriers and create a network
              of support for those in need. Through our various initiatives and
              programs, we aim to build a community where no one feels alone in
              their time of need.
            </p>
            <p>
              Our commitment to serving humanity is unwavering, and we continue
              to expand our reach to touch more lives and create positive
              change. Together, we can build a stronger, more compassionate
              society that upholds the values of brotherhood and mutual
              support.
            </p>

            <div className={styles.signature}>
              <p className={styles.signatureName}>Mian Akhalq Ur Rehman</p>
              <p className={styles.signatureTitle}>Founder & General Secretary</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
