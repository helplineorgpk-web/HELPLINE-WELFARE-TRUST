import React from "react";
import Image from "next/image";
import styles from "../../../public/css/Rehabilitation.module.css";

const RehabGallery = () => {
  const images = [
    {
      src: "/img/rehab/rehabe1.jpeg",
      alt: "Rehabilitation Program 1",
      title: "Community Support",
    },
    {
      src: "/img/rehab/rehab2.jpeg",
      alt: "Rehabilitation Program 2",
      title: "Community Support",
    },
    {
      src: "/img/rehab/rehab3.jpeg",
      alt: "Rehabilitation Program 3",
      title: "Community Support",
    },
    {
      src: "/img/rehab/rehab4.jpeg",
      alt: "Rehabilitation Program 4",
      title: "Community Support",
    },
    {
      src: "/img/rehab/houseconstruction1.jpeg",
      alt: "Rehabilitation Program 1",
      title: "Community Support",
    },
    {
      src: "/img/rehab/houseconstruction2.jpeg",
      alt: "Rehabilitation Program 2",
      title: "Community Support",
    },
    {
      src: "/img/rehab/houseconstruction3.jpeg",
      alt: "Rehabilitation Program 3",
      title: "Community Support",
    },
    {
      src: "/img/rehab/houseconstruction4.jpeg",
      alt: "Rehabilitation Program 4",
      title: "Community Support",
    },
  ];

  return (
    <section className={styles.rehabSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Rehabilitation Programs</h2>
          <p>Empowering Lives Through Comprehensive Rehabilitation Support</p>
        </div>
        <div className={styles.galleryGrid}>
          {images.map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <div className={styles.imageWrapper}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  layout="responsive"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <h3 className={styles.overlayTitle}>{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RehabGallery;
