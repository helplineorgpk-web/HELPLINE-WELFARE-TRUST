import React from "react";
import styles from "../../../public/css/Certification.module.css";
import Image from "next/image";
import { HelplineData } from "../../../pages/api/data";

export default function Certification() {
  const certificationData = HelplineData.certificationData[0];

  return (
    <section className={styles.certificationSection}>
      <div className={styles.container}>
        <div className={styles.certificationContent}>
          <h2 className={styles.certificationTitle}>
            {certificationData.title}
          </h2>
          <p className={styles.certificationAnnouncement}>
            {certificationData.announcement}
          </p>
          <p className={styles.certificationDetails}>
            {certificationData.details}
          </p>
          <p className={styles.certificationConclusion}>
            {certificationData.conclusion}
          </p>
        </div>

        <div className={styles.certificationImages}>
          {certificationData.img.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={400}
              height={600}
              className={styles.certificationImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
