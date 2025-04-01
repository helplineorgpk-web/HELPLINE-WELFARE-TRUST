import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "../../../public/css/headArea.module.css";
import Image from "next/image";
import Link from "next/link";

const sliderData = {
  slider1: [
    {
      id: 1,
      News: "Compaigns Alert",
      title: "Previous Projects",
      project: "Schools",
      content:
        "A look at our past successful projects. A look at our past successful projects.",
      image1: "/img/causes/alkitab.jpg",
      image2: "/img/causes/alkitab2.jpg",
    },
    {
      id: 2,
      News: "Compaigns Alert",
      title: "Current Projects",
      project: "Medical",
      content:
        "Ongoing projects making a difference. Ongoing projects making a difference.",
      image1: "/img/causes/cataract1.jpg",
      image2: "/img/causes/cataract2.jpeg",
    },
    {
      id: 3,
      News: "Compaigns Alert",
      title: "Upcoming Projects",
      project: "Ramzan Rashan",
      content:
        "Helpline distributes Ramzan rations, 2 tons of dates, and organizes a Sports Gala for students.",
      image1: "/img/causes/rashan1.jpeg",
      image2: "/img/causes/PHOTO-2025-02-19-11-45-30(2).jpg",
    },
  ],
  slider2: [
    {
      id: 1,

      News: "Events Alert",
      title: "Previous Projects",
      project: "Schools",
      content:
        "A look at our past successful projects. A look at our past successful projects.",
      image1: "/img/causes/alkitab3.jpg",
      image2: "/img/causes/alkitab4.jpg",
    },
    {
      id: 2,
      News: "Events Alert",
      title: "Current Projects",
      project: "Medical",
      content:
        "Ongoing projects making a difference. Ongoing projects making a difference.",
      image1: "/img/causes/cataractbg.jpeg",
      image2:
        "/img/causes/Health-Care-qem5tse0cyp4tdwq5pet84x12rexveu2iwxn31m8im.png",
    },
    {
      id: 3,
      News: "Events Alert",
      title: "Upcoming Projects",
      project: "Ramzan Rashan",
      content:
        "Helpline distributes Ramzan rations, 2 tons of dates, and organizes a Sports Gala for students.",
      image1: "/img/causes/PHOTO-2025-02-19-11-40-10(1).jpg",
      image2: "/img/causes/PHOTO-2025-02-19-11-40-10(2).jpg",
    },
  ],
  slider3: [
    {
      id: 1,
      News: "News Alert",
      title: "Previous Projects",
      project: "Schools",
      content:
        "A look at our past successful projects. A look at our past successful projects.",
      image1: "/img/causes/alkitabghani1.jpg",
      image2: "/img/causes/Jinnah2.jpg",
    },
    {
      id: 2,

      News: "News Alert",
      title: "Previous Projects",
      project: "Schools",
      content:
        "A look at our past successful projects. A look at our past successful projects.",
      image1: "/img/causes/alkitabghani1.jpg",
      image2: "/img/causes/Jinnah2.jpg",
    },
    {
      id: 3,
      News: "News Alert",
      title: "Upcoming Projects",
      project: "Ramzan Rashan",
      content:
        "Helpline distributes Ramzan rations, 2 tons of dates, and organizes a Sports Gala for students.",
      image1: "/img/causes/PHOTO-2025-02-19-11-45-31(1).jpg",
      image2: "/img/causes/PHOTO-2025-02-19-11-45-31(2).jpg",
    },
  ],
};

export default function HeadArea() {
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div className={styles.head_area}>
      <div className={styles.overlay}></div>
      <div className={styles.main_container}>
        <div className={styles.sliders}>
          {[...(isMobile ? [0] : [0, 1, 2])].map((index) => (
            <div
              key={index}
              className={styles.sideSlider}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <Swiper
                direction="vertical"
                spaceBetween={20}
                slidesPerView={1}
                autoplay={
                  isPaused
                    ? false
                    : { delay: 2000, disableOnInteraction: false }
                }
                loop={true}
                modules={[Autoplay]}
                className={styles.swiperContainer}
              >
                {sliderData[`slider${index + 1}`].map((slide) => (
                  <SwiperSlide key={slide.id} className={styles.slideItem}>
                    <h5 className={styles.news}>{slide.News}</h5>
                    <div className={styles.card}>
                      <h3 className={styles.slideTitle}>{slide.title}</h3>
                      <div className={styles.imageCard}>
                        <div>
                          <h6 className={styles.project}>{slide.project}</h6>
                          <p className={styles.slideDescription}>
                            {slide.content}
                          </p>
                        </div>
                        <div>
                          <Image
                            src={slide.image1}
                            alt={slide.title}
                            width={100}
                            height={100}
                            className={styles.cardImage}
                          />
                          <Image
                            src={slide.image2}
                            alt={slide.title}
                            width={100}
                            height={100}
                            className={styles.cardImage}
                          />
                        </div>
                      </div>
                    </div>
                    <Link href="/donation" className={styles.donate_now}>
                      donate now
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
        <div className={styles.text_container}>
          <h1 className={styles.heading}>HELPLINE WELFARE TRUST</h1>
          <p className={styles.pergraph}>
            (A Project of Community Development.)
          </p>
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
