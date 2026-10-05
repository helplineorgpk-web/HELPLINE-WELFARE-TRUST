import React from "react";
import styles from "../../../public/css/Itlab.module.css";

const labPlaces = [
  {
    title: "315-C Faisal Town IT Lab",
    address: "House# 315, Sector C, Faisal Town, Lahore",
    photos: [
      { src: "/img/315cfaysaltownitlab.png", alt: "315-C Faisal Town vocational training center" },
      { src: "/img/315cfaysaltownitlab1.png", alt: "Students working at computers in the Faisal Town IT lab" },
      { src: "/img/315cfaysaltownitlab2.png", alt: "Faisal Town IT lab workstations" },
      { src: "/img/315cfaysaltownitlab3.png", alt: "Students seated at computers in the Faisal Town IT lab" },
      { src: "/img/315cfaysaltownitlab4.png", alt: "IT class at the Faisal Town lab" },
    ],
  },
  {
    title: "Al-Kitab Computer Lab",
    address: "Al-Kitab School",
    photos: [
      { src: "/img/alkitabcomputerlab.png", alt: "Al-Kitab computer lab" },
      { src: "/img/alkitabcomputerlab1.png", alt: "Al-Kitab computer lab desks and monitors" },
    ],
  },
  {
    title: "Vocational Training Centre IT Lab",
    address: "Mohammad Yousaf Vocational Training Centre",
    photos: [
      { src: "/img/vtcitlab.png", alt: "Vocational training centre IT classroom" },
      { src: "/img/vtcitlab1.png", alt: "Students practicing on computers at the vocational centre" },
      { src: "/img/vtcitlab2.png", alt: "Students typing at the vocational centre lab" },
      { src: "/img/vtcitlab3.png", alt: "Students working side by side in the vocational centre lab" },
    ],
  },
];

const ITLabs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>IT Labs</h1>
      <p className={styles.subtitle}>
        Computer labs at Helpline centres, shown at the place each photo belongs to.
      </p>

      {labPlaces.map((place) => (
        <section key={place.title} className={styles.placeSection}>
          <h2 className={styles.placeTitle}>{place.title}</h2>
          <p className={styles.placeAddress}>{place.address}</p>
          <div className={styles.photoGrid}>
            {place.photos.map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className={styles.photo}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ITLabs;
