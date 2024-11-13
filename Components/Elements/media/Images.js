import React, { useState } from "react";
import { HelplineData } from "../../../pages/api/data";
import styles from "../../../public/css/Images.module.css";

function Images() {
  const images = HelplineData.images;
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
      <div className={styles.gallery}>
        {images.map((item, index) => (
          <div key={item.id} className={styles.galleryItem}>
            <img
              src={item.image}
              alt={`Image ${item.id}`}
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
            src={images[selectedIndex].image}
            alt={`Image ${selectedIndex + 1}`}
            className={styles.modalImage}
          />
        </div>
      )}
    </div>
  );
}

export default Images;
