import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../public/css/Qurbani.module.css";
import { HelplineData } from "../../../pages/api/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Qurbani() {
  const { swiperData } = HelplineData;

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className={styles.swiperContainer}
        >
          {swiperData.map((item, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div
                className={styles.slideContent}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className={styles.textOverlay}>
                  <h2 className={styles.detailHeader}>{item.detailHeader}</h2>
                  <p className={styles.detail}>{item.detail}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
