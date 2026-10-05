import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HelplineData } from "../../../pages/api/data";
import styles from "./SchoolMeals.module.css";

const mealPlaces = (HelplineData.causes || []).filter((item) =>
  item.category?.some((category) => category.toLowerCase() === "food")
);

const mealPhotos = [
  { src: "/img/headerofood.png", alt: "Students eating lunch at school" },
  { src: "/img/shadabschool-lunch.png", alt: "Students eating together at a school table" },
  { src: "/img/shadabschool-lunch-straight.png", alt: "Students seated with plates during school lunch" },
];

export default function SchoolMeals() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1 className={styles.title}>School Meal Program</h1>
          <p className={styles.description}>
            Helpline serves hot meals so children can sit, eat, and stay in
            class. The same kitchens also prepare food for patients and
            families at hospitals who cannot afford a meal.
          </p>
        </div>

        <div className={styles.heroWrap}>
          <img
            src="/img/schoolmealsheadermainislider.jpg"
            alt="Children eating meals at school"
            className={styles.heroImage}
          />
        </div>

        <h2 className={styles.placesTitle}>Meals being served</h2>
        <div className={styles.photoGrid}>
          {mealPhotos.map((photo) => (
            <div key={photo.src} className={styles.photoFrame}>
              <img src={photo.src} alt={photo.alt} className={styles.photo} />
            </div>
          ))}
        </div>

        <h2 className={styles.placesTitle}>Where meals are served</h2>
        <div className={styles.grid}>
          {mealPlaces.map((place) => (
            <Link
              key={place.id}
              href={{ pathname: "/cause-details", query: { id: place.id } }}
              className={styles.card}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={place.img}
                  alt={place.desc || place.ActualName || "Meal service"}
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{place.desc}</h3>
                <p className={styles.cardText}>{place.detail}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
