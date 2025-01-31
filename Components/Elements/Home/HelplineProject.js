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
            <Link href={slide.link} className="img_effect_white">
              <img src={slide.image} alt="img" />
            </Link>
            <div
              className="single_cause_contents"
              style={{
                background: `linear-gradient(135deg,#d6cbc6, #65cabb)`,
                padding: "20px",
              }}
            >
              <p
                style={{
                  color: "#263b5d",
                }}
              >
                {slide.label}
              </p>
              <div>
                <Link href={slide.link} className="cause_title_link">
                  {slide.description}
                </Link>
              </div>
              <Link href={slide.link} className="g_btn theme1_bg to_right2 rad-50">
                Donate Now <span></span>
              </Link>
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
