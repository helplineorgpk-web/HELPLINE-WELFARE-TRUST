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
      <h2 style={styles.heading}>How You Can Help</h2>
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
          <SwiperSlide className="single_cause" key={index}>
            <div style={styles.card}>
              <Link href={slide.link} className="img_effect_white">
                <img src={slide.image} alt="img" style={styles.image} />
              </Link>
              <div style={styles.cardContent}>
                <p style={styles.label}>{slide.label}</p>
                <Link href={slide.link} style={styles.description}>
                  {slide.description}
                </Link>
                <Link href={slide.link} style={styles.donateButton}>
                  Donate Now <span></span>
                </Link>
              </div>
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
      "linear-gradient(135deg, rgba(30, 40, 55, 0.9), rgba(66, 180, 200, 0.9)), url(/img/featureEvent/fevent_bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "80px 20px",
    borderRadius: "12px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.8rem",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "3rem",
    textTransform: "uppercase",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  },
  cardContent: {
    padding: "20px",
    background: "linear-gradient(135deg, #d6cbc6, #65cabb)",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    textAlign: "center",
  },
  label: {
    color: "#263b5d",
    fontSize: "1rem",
    fontWeight: "600",
    marginBottom: "10px",
  },
  description: {
    color: "#333",
    fontSize: "1.1rem",
    textDecoration: "none",
    fontWeight: "500",
    display: "block",
    marginBottom: "15px",
  },
  donateButton: {
    display: "inline-block",
    padding: "12px 25px",
    background: "#ff6f61",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "50px",
    textDecoration: "none",
    transition: "0.3s",
  },
};

export default HelplineProject;
