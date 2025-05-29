import styles from "../../../public/css/Header.module.css";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const campaignsData = [
  {
    id: "education-support",
    title: "Education Support Program",
    description: "Support underprivileged students with education expenses and supplies",
    image: "/img/causes/School-1-scaled.jpg",
    details: {
      goal: 1500000,
      raised: 750000,
      packages: [
        {
          name: "School Supplies Kit",
          price: 3000,
          items: ["Textbooks", "Notebooks", "Stationery Set", "School Bag", "Uniform"]
        },
        {
          name: "Annual Scholarship",
          price: 25000,
          items: ["School Fees", "Books", "Uniform", "Transportation", "Supplies"]
        }
      ],
      endDate: "2025-07-31"
    },
    status: "active"
  },
  {
    id: "medical-aid",
    title: "Medical Support Initiative",
    description: "Help provide medical care and support to those who cannot afford it",
    image: "/img/causes/PHOTO-2025-02-19-11-40-10.jpg",
    details: {
      goal: 2000000,
      raised: 1200000,
      packages: [
        {
          name: "Basic Health Package",
          price: 5000,
          description: "Basic medical checkup and medicine support"
        },
        {
          name: "Surgery Support",
          price: 50000,
          description: "Support for major medical procedures"
        }
      ],
      endDate: "2025-12-31"
    },
    status: "active"
  },
  {
    id: "qurbani-2025",
    title: "Qurbani Program 2025",
    description: "Participate in our Qurbani program to help distribute meat to deserving families",
    image: "/img/causes/PHOTO-2025-02-19-11-45-30.jpg",
    details: {
      goal: 2000000,
      raised: 800000,
      packages: [
        {
          name: "Goat Share",
          price: 25000,
          description: "1/7th share in a collective sacrifice"
        },
        {
          name: "Full Goat",
          price: 175000,
          description: "Complete sacrifice of one goat"
        },
        {
          name: "Cow Share",
          price: 20000,
          description: "1/7th share in a cow"
        }
      ],
      endDate: "2025-06-15"
    },
    status: "upcoming"
  },
  {
    id: "ramzan-2025",
    title: "Ramzan Food Package 2025",
    description: "Provide essential food items to families during Ramzan",
    image: "/img/causes/PHOTO-2025-02-19-11-45-31.jpg",
    details: {
      goal: 1000000,
      raised: 300000,
      packages: [
        {
          name: "Basic Package",
          price: 5000,
          items: ["10kg Flour", "5kg Rice", "3kg Sugar", "3L Cooking Oil", "1kg Dates", "Tea", "Spices"]
        },
        {
          name: "Family Package",
          price: 8000,
          items: ["20kg Flour", "10kg Rice", "5kg Sugar", "5L Cooking Oil", "2kg Dates", "Tea", "Spices", "Lentils"]
        }
      ],
      endDate: "2025-03-15"
    },
    status: "upcoming"
  }
];

const sliderData = {
  slider1: campaignsData.map((campaign) => ({
    id: campaign.id,
    News: "Campaigns Alert",
    title: "Islamic Programs",
    project: campaign.title,
    content: campaign.description,
    image1: campaign.image,
  })),
};

const idealProjects = [
  {
    id: 1,
    title: "Al-Kitab Education System",
    description: "Empowering children through quality education",
    image: "/img/causes/School-1-scaled.jpg",
    stats: {
      students: "8000+",
      teachers: "400+",
      classrooms: "200+",
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

  const handleProjectLearnMore = () => {
    router.push(`/cause-details?id=23`);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftSection}>
        <div className={styles.contentArea}>
          {/* <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            <span>EDUCATION</span> - <span>HEALTH</span> -<span>WELFARE</span> -{" "}
            <span>REHABILITATION</span> -<span>CAPACITY BUILDING</span> -{" "}
            <span>SKILL DEVELOPMENT</span> -<span>COMMUNITY DEVELOPMENT</span>
          </div>
        </div> */}
          <div className={styles.headerNewTag}>
            <span className={styles.newLabel}>NEW</span>
            <span className={styles.brand}>
              HELPLINE <span className={styles.airo}>Pakistan</span>
            </span>
          </div>

          <h1 className={styles.headline}>
            Helpline <br />{" "}
            <span className={styles.welfare}>Welfare Trust</span>
          </h1>
          <p className={styles.subtext}>
            Charity isn’t just a task, it’s a sacred calling to serve humanity
            with unwavering grace, deep humility, compassion, and true purpose.
          </p>

          <div style={{ marginBottom: "20px" }}>
            <h6 style={{ color: "#f15b43", fontWeight: "bold" }}>
              Core Values
            </h6>
            <p style={{ color: "#343434" }}>Sincerity, Service & Commitment</p>
          </div>

          <div className={styles.visionMissionContainer}>
            <div className={styles.visionBox}>
              <h6 className={styles.sectionHeading}>Vision</h6>
              <p>
                A world where every individual in distress finds a listening
                ear, timely help, and renewed hope.
              </p>
            </div>
            <div className={styles.missionBox}>
              <h6 className={styles.sectionHeading}>Mission</h6>
              <p>
                Providing immediate support, and hope to those in crisis through
                compassionate helpline services.
              </p>
            </div>
          </div>

          <div className={styles.ctaButtons}>
            <button className={styles.btnPrimary} onClick={handleDonateClick}>
              Donate Now
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
                    : { delay: 4000, disableOnInteraction: false }
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
                        </div>
                        <Image
                          src={slide.image1}
                          alt={slide.title}
                          width={200}
                          height={235}
                          className={styles.cardImage}
                        />
                      </div>
                    </div>
                    <div className={styles.slideButtons}>
                      <Link
                        href={`/campaign/${slide.id}#donate`}
                        className={styles.donate_now}
                      >
                        Donate Now
                      </Link>
                      <Link
                        href={`/campaign/${slide.id}`}
                        className={styles.campaign_details}
                      >
                        Campaign Details
                      </Link>
                    </div>
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
                  <span className={styles.statNumber}>
                    {project.stats.students}
                  </span>
                  <span className={styles.statLabel}>Students</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>
                    {project.stats.teachers}
                  </span>
                  <span className={styles.statLabel}>Teachers</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>
                    {project.stats.classrooms}
                  </span>
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
