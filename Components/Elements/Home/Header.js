import styles from "../../../public/css/Header.module.css";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const sliderData = {
  slider1: [
    {
      id: 1,
      News: "Campaigns Alert",
      title: "Previous Projects",
      project: "Schools",
      content:
        "A look at our past successful projects. A look at our past successful projects.",
      image1: "/img/causes/alkitab.jpg",
      image2: "/img/causes/alkitab2.jpg",
    },
    {
      id: 2,
      News: "Campaigns Alert",
      title: "Current Projects",
      project: "Medical",
      content:
        "Ongoing projects making a difference. Ongoing projects making a difference.",
      image1: "/img/causes/cataract1.jpg",
      image2: "/img/causes/cataract2.jpeg",
    },
    {
      id: 3,
      News: "Campaigns Alert",
      title: "Upcoming Projects",
      project: "Ramzan Rashan",
      content:
        "Helpline distributes Ramzan rations, 2 tons of dates, and organizes a Sports Gala for students.",
      image1: "/img/causes/rashan1.jpeg",
      image2: "/img/causes/PHOTO-2025-02-19-11-45-30(2).jpg",
    },
  ],
};

const idealProjects = [
  {
    id: 1,
    title: "Al-Kitab School",
    description: "Empowering children through quality education",
    image: "/img/causes/alkitab2.jpg",
    stats: {
      students: "8000+",
      teachers: "50",
      classrooms: "12",
    },
    slug: "al-kitab-school",
  },
];

export default function Header() {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const handleDonateClick = () => {
    router.push("/donation");
  };

  const handleLearnMoreClick = () => {
    router.push("/about");
  };

  const handleProjectLearnMore = () => {
    router.push(`/cause-details?id=23`);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftSection}>
        <div className={styles.contentArea}>
          <div className={styles.headerNewTag}>
            <span className={styles.newLabel}>NEW</span>
            <span className={styles.brand}>
              HELPLINE <span className={styles.airo}>Pakistan</span>
            </span>
          </div>
          <h1 className={styles.headline}>Helpline Welfare Trust</h1>
          <p className={styles.subtext}>
            A project of community development through education.
          </p>
          <ul className={styles.features}>
            <li>Supporting Education Initiatives</li>
            <li>Healthcare Programs</li>
            <li>Community Development</li>
          </ul>
          <div className={styles.ctaButtons}>
            <button className={styles.btnPrimary} onClick={handleDonateClick}>
              Donate Now
            </button>
            <button className={styles.btnSecondary} onClick={handleLearnMoreClick}>
              Learn More
            </button>
          </div>
        </div>

        {!isMobile && (
          <div className={styles.sliders}>
            <div
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
                {sliderData.slider1.map((slide) => (
                  <SwiperSlide key={slide.id} className={styles.slideItem}>
                    <h5 className={styles.news}>{slide.News}</h5>
                    <div className={styles.card}>
                      <h3 className={styles.slideTitle}>{slide.title}</h3>
                      <div className={styles.imageCard}>
                        <div className={styles.cardContent}>
                          <h6 className={styles.project}>{slide.project}</h6>
                          <p className={styles.slideDescription}>
                            {slide.content}
                          </p>
                        </div>
                        <div className={styles.cardImages}>
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
                      Donate Now
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>

      <div className={styles.rightSection}>
        {idealProjects.map((project) => (
          <div key={project.id} className={styles.headerContainer}>
            <div className={styles.projectContent}>
              <span className={styles.newLabel}>NEW</span>
              <p className={styles.smallHeading}>Ideal Projects</p>
              <h2 className={styles.rightHeadline}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>{project.stats.students}</span>
                  <span className={styles.statLabel}>Students</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>{project.stats.teachers}</span>
                  <span className={styles.statLabel}>Teachers</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>{project.stats.classrooms}</span>
                  <span className={styles.statLabel}>Classrooms</span>
                </div>
              </div>
            </div>
            <div className={styles.projectImage}>
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={150}
                className={styles.rightSectionImage}
              />
            </div>
            <button 
              className={styles.btnWhite}
              onClick={() => handleProjectLearnMore(project.slug)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
