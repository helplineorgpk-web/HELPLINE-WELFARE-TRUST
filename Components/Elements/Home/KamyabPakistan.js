"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./KamyabPakistan.module.css";

const posters = [
  {
    src: "/img/kamyabpakistanenglishversion.png",
    alt: "Kamyab Pakistan — English version",
  },
  {
    src: "/img/kamyabpakistanurduversion.jpg",
    alt: "کامیاب پاکستان — اردو ورژن",
  },
];

export default function KamyabPakistan() {
  return (
    <section className={styles.section} aria-label="Kamyab Pakistan">
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        loop
        speed={800}
        pagination={{ clickable: true }}
        navigation
        className={styles.slider}
      >
        {posters.map((poster) => (
          <SwiperSlide key={poster.src} className={styles.slide}>
            <img src={poster.src} alt={poster.alt} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
