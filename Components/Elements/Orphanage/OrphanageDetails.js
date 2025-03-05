import React from "react";
import Image from "next/image";
import styles from "../../../public/css/OrphanageDetails.module.css";

export default function OrphanageDetails() {
  return (
    <section className={styles.container}>
      <div className={styles.textCenter}>
        <h2 className={styles.heading}>Orphanage in Abbottabad</h2>
        <div className={styles.divider}></div>
        <p className={styles.description}>
          Helpline’s orphanage in Abbottabad, namely
          <strong className={styles.highlight}>
            {" "}
            Al-Kitab Wafaq Children Home
          </strong>
          , houses 25 orphans, offering them{" "}
          <strong>state-of-the-art facilities, nutritious food,</strong>
          and access to private schooling. We provide a{" "}
          <strong>safe, nurturing environment</strong> where every child grows
          with love and care. ❤️
        </p>
      </div>
      <div className={styles.imageGrid}>
        {[
          "PHOTO-2025-02-19-11-48-25.jpg",
          "PHOTO-2025-02-19-11-48-26.jpg",
          "PHOTO-2025-02-19-11-48-26(1).jpg",
          "PHOTO-2025-02-19-11-48-26(2).jpg",
          "PHOTO-2025-02-19-11-48-26(3).jpg",
        ].map((img, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={`/img/orphanage/${img}`}
              layout="intrinsic"
              width={498}
              height={575}
              alt={`Orphanage image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <video controls className={styles.video}>
            <source
              src="/img/orphanage/VIDEO-2025-02-19-11-48-28.mp4"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
