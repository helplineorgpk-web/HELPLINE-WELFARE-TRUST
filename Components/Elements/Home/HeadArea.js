import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "../../../public/css/headArea.module.css";
import Image from "next/image";
import image1 from "/public/img/causes/cause4.jpg";
import image2 from "/public/img/causes/cause23.jpg";
import image3 from "/public/img/causes/cause24.jpg";

const sliderData = [
  {
    id: 1,
    title: "Previous Projects",
    content:
      "A look at our past successful projects. A look at our past successful projects.",
    images: image1,
  },
  {
    id: 2,
    title: "Current Projects",
    content:
      "Ongoing projects making a difference. Ongoing projects making a difference.",
    images: image2,
  },
  {
    id: 3,
    title: "Upcoming Projects",
    content:
      "Exciting future initiatives. Exciting future initiatives. Exciting future initiatives.Exciting future initiatives.",
    images: image3,
  },
];

export default function HeadArea() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className={styles.head_area}>
      <div className={styles.overlay}></div>
      <div className={styles.main_container}>
        <div className={styles.text_container}>
          <h1 className={styles.heading}>HELPLINE</h1>
          <p className={styles.pergraph}>
            Helpline Welfare Trust, a project of community development through
            education.
          </p>
        </div>

        <div
          className={styles.sideSlider}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Swiper
            direction="vertical"
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: isPaused,
            }}
            loop={true}
            modules={[Autoplay]}
            className={styles.swiperContainer}
          >
            {sliderData.map((slide) => (
              <SwiperSlide key={slide.id} className={styles.slideItem}>
                <div className={styles.card}>
                  <h3 className={styles.slideTitle}>{slide.title}</h3>

                  <div className={styles.imageCard}>
                    <p className={styles.slideDescription}>{slide.content}</p>
                    <Image
                      src={slide.images}
                      alt={slide.title}
                      width={100}
                      height={100}
                      className={styles.cardImage}
                    />
                  </div>
                </div>
                <div className={styles.card}>
                  <h3 className={styles.slideTitle}>{slide.title}</h3>

                  <div className={styles.imageCard}>
                    <Image
                      src={slide.images}
                      alt={slide.title}
                      width={100}
                      height={100}
                      className={styles.cardImage}
                    />
                    <p className={styles.slideDescription}>{slide.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className={styles.wave}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="#fff"
        >
          <path
            className="elementor-shape-fill"
            d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,106.7C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64V320H0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
