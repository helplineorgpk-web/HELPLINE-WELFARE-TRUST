import React, { useState } from "react";
import styles from "../../../public/css/Images.module.css";

function RashanGallery() {
  const images = [
    {
      id: 1,
      img: "/img/rashan/rashan24.JPG",
      alt: "Rashan Distribution 1"
    },
    {
      id: 2,
      img: "/img/rashan/rashan124.JPG",
      alt: "Rashan Distribution 2"
    },
    {
      id: 3,
      img: "/img/rashan/rashan242.JPG",
      alt: "Rashan Distribution 3"
    },
    {
      id: 4,
      img: "/img/rashan/rashan244.JPG",
      alt: "Rashan Distribution 4"
    },
    {
      id: 5,
      img: "/img/rashan/rashan245.JPG",
      alt: "Rashan Distribution 5"
    },
    {
      id: 6,
      img: "/img/rashan/rashan246.JPG",
      alt: "Rashan Distribution 6"
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <div style={{ textAlign: "center", padding: "40px 20px 20px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "10px" }}>
          Rashan Distribution Gallery
        </h2>
        <p style={{ fontSize: "16px", color: "#666" }}>
          View our rashan distribution program in action
        </p>
      </div>
      
      <div className={styles.gallery}>
        {images.map((item, index) => (
          <div key={item.id} className={styles.galleryItem}>
            <img
              src={item.img}
              alt={item.alt}
              className={styles.image}
              onClick={() => openImage(index)}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className={styles.modal} onClick={closeImage}>
          <span className={styles.close} onClick={closeImage}>
            &times;
          </span>
          <span
            className={styles.prev}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            &#10094;
          </span>
          <span
            className={styles.next}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            &#10095;
          </span>
          <img
            src={images[selectedIndex].img}
            alt={images[selectedIndex].alt}
            className={styles.modalImage}
          />
        </div>
      )}
    </div>
  );
}

export default RashanGallery;

