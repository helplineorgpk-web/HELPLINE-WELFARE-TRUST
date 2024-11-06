import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { HelplineData } from "../../../pages/api/data";


function HelplineProject() {
  const HelplineProject = HelplineData.slidesData;
  return (
    <section style={styles.ctaArea}>
      <h2 style={styles.heading}>How you can help</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        {HelplineProject.map((slide, index) => (
          <SwiperSlide className="single_cause mb-0" key={index}>
            <div className="single_cause_img img_effect_white p-rel">
              <Link href={slide.link}>
                <a>
                  <img src={slide.image} alt="img" />
                </a>
              </Link>
              <div className={`progress_wrapper ${slide.Color}`}>
                <div
                  className="progress_circle"
                  data-percentage={slide.percentage}
                >
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">
                    <div>{slide.percentage}%</div>
                  </div>
                </div>
                <span>{slide.label}</span>
              </div>
            </div>
            <div
              className="single_cause_contents"
              style={{
                background: `linear-gradient(135deg, ${slide.bgColor})`,
                padding: "20px",
                color: "#fff",
              }}
            >
              <div>
                <span>
                  <a>{slide.description}</a>
                </span>
              </div>
              <h6 style={styles.readmore}>
                <Link href={slide.link}>
                  <a>Read More</a>
                </Link>
              </h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const styles = {
  ctaArea: {
    background:
      "linear-gradient(135deg, rgba(48, 65, 88, 0.8), rgba(76, 161, 175, 0.8)), url(/img/featureEvent/fevent_bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "60px",
    borderRadius: "8px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#f8f9fa",
    marginBottom: "2.5rem",
    textTransform: "uppercase",
    textAlign: "center",
  },
  readmore: {
    marginTop: "20px",
    color: "white",
  },
};
export default HelplineProject;
