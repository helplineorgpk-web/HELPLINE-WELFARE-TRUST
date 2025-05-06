import React from "react";
import Image from "next/image";
import styles from "../../../public/css/supporter.module.css";

export default function SupportersCard() {
  const supporters = [
    "TransData",
    "Benchmark",
    "Ilaan",
    "Mahir (Gp of Cos)",
    "Ezhar Industries",
    "Descon",
    "Haleeb Foods",
    "HP AirTravels-Tours",
    "Henkel-Pak (Ger-Firm)",
  ];

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Our Valued Supporters</h2>
        <div className={styles.imageContainer}>
          {/* <Image
            src="/img/causes/sponser.jpg"
            alt="Our Supporters"
            fill
            className={styles.image}
          /> */}
        </div>
        <div className={styles.supporterGrid}>
          {supporters.map((supporter, index) => (
            <div key={index} className={styles.supporterCard}>
              <div className={styles.supporterInfo}>
                <div className={styles.avatar}>
                  <span>{supporter.charAt(0)}</span>
                </div>
                <div>
                  <h3 className={styles.supporterName}>{supporter}</h3>
                  <p className={styles.supporterRole}>Trusted Partner</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
