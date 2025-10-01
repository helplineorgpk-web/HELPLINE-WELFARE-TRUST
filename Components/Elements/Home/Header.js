import styles from "../../../public/css/Header.module.css";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import UBLPaymentForm from "../Payment/UBLPaymentForm";

export const campaignsData = [

  {
    id: "school-masjid-project",
    title: "School Masjid Project",
    href: "/masjid",
    description:
      "Building integrated school and masjid facilities to uplift communities.",
    image: "/img/Campaigns/MASJID.jpg",
    details: {
      goal: 1000000,
      raised: 250000,
      packages: [
        {
          name: "Basic Package",
          price: 5000,
          description: "Support with basic contribution",
        },
      ],
      endDate: "2025-06-30",
    },
    status: "upcoming",
  },
  {
    id: "vocational-training-center",
    title: "Vocational Training Center",
    href: "/vocationalTrainingCenters",
    description:
      "Equip youth with technical skills for sustainable employment.",
    image: "/img/Campaigns/Vocational.png",
    details: {
      goal: 1000000,
      raised: 250000,
      packages: [
        {
          name: "Basic Package",
          price: 5000,
          description: "Support with basic contribution",
        },
      ],
      endDate: "2025-06-30",
    },
    status: "upcoming",
  },
  {
    id: "rashan-program",
    title: "Rashan Program",
    href: "/rashan",
    description:
      "Provide essential food supplies to struggling families across Pakistan.",
    image: "/img/Campaigns/Grocery.png",
    details: {
      goal: 1000000,
      raised: 250000,
      packages: [
        {
          name: "Basic Package",
          price: 5000,
          description: "Support with basic contribution",
        },
      ],
      endDate: "2025-06-30",
    },
    status: "upcoming",
  },
  {
    id: "support-the-student",
    title: "Support A Student",
    href: "/student-support",
    description:
      "Sponsor students’ education, ensuring they don’t drop out due to financial constraints.",
    image: "/img/Campaigns/student.png",
    details: {
      goal: 1000000,
      raised: 250000,
      packages: [
        {
          name: "Basic Package",
          price: 5000,
          description: "Support with basic contribution",
        },
      ],
      endDate: "2025-06-30",
    },
    status: "upcoming",
  },
];

const sliderData = {
  slider1: campaignsData.map((campaign) => ({
    id: campaign.id,
    News: "Campaigns Alert",
    title: "Islamic Programs",
    project: campaign.title,
    content: campaign.description,
    image1: campaign.image,
    href: campaign.href,
  })),
};

const idealProjects = [
  {
    id: 1,
    title: "Al-Kitab Education System",
    description: "Empowering every child with quality education, life skills, and the chance to thrive.",
    image: "/img/causes/School-1-scaled.jpg",
    image2:  "/img/causes/future.jpg",

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
  const [selectedCause, setSelectedCause] = useState("Support A Student");
  const [amount, setAmount] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
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

  const handleCauseChange = (event) => {
    setSelectedCause(event.target.value);
    setAmount("");
  };

  const handleAmountSelect = (amount) => {
    if (amount === "") {
      setAmount("");
      return;
    }
    const numericAmount = amount.replace(/[^0-9]/g, "");
    setAmount(numericAmount);
  };

  const handleDonateClick = () => {
    setShowPaymentForm(true);
  };

  const handlePaymentInitiated = (paymentData) => {
    console.log('Payment initiated:', paymentData);
  };

  const handlePaymentCompleted = (paymentData) => {
    console.log('Payment completed:', paymentData);
    setShowPaymentForm(false);
  };

  const handlePaymentFailed = (error) => {
    console.error('Payment failed:', error);
  };

  const handleProjectLearnMore = (slug) => {
    router.push(`/learn-more?project=${slug}`);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftSection}>
        <div className={styles.contentArea}>
          <div className={styles.headerNewTag}>
            <span className={styles.brand}>
              HELPLINE <span className={styles.airo}>Pakistan</span>
            </span>
          </div>

          <h1 className={styles.headline}>
            Helpline <br />{" "}
            <span className={styles.welfare} style={{ position: "relative" }}>
              Welfare Trust
              <span
                style={{
                  fontSize: "20px",
                  position: "absolute",
                  top: "0px",
                  right: "-18px",
                }}
              >
                ®
              </span>
            </span>
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
                Building Islamic Welfare Society on the Golden Principles of
                "Mawakhat-e-Madina"
              </p>
            </div>
            <div className={styles.missionBox}>
              <h6 className={styles.sectionHeading}>Mission</h6>
              <p>
                Mobilize society to elevate the have-nots through religious,
                modern education, and technical training.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.sliders}>
          <div
            className={styles.sideSlider}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Swiper
              direction="horizontal"
              spaceBetween={30}
              slidesPerView={1}
              autoplay={
                isPaused
                  ? false
                  : { delay: 6000, disableOnInteraction: false }
              }
              loop={true}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className={styles.swiperContainer}
            >
              {sliderData.slider1.map((slide) => (
                <SwiperSlide key={slide.id} className={styles.slideItem}>
                  <h5 className={styles.news}>{slide.News}</h5>
                  <div
                    className={styles.card}
                  >
                    <div className={styles.imageCard}>
                  
                      <Image
                        src={slide.image1}
                        alt={slide.title}
                        width={400}
                        height={350}
                        className={styles.cardImage}
                      />
                    </div>
                    <div className={styles.slideButtons}>
                      <button 
                        className={styles.donate_now}
                        onClick={handleDonateClick}
                      >
                        Donate Now
                      </button>
                      <Link
                        href={slide.href}
                        className={styles.campaign_details}
                      >
                        Campaign Details
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
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
              <Image
                src={project.image2}
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
      
      {showPaymentForm && (
        <div className={styles.paymentModal}>
          <div className={styles.paymentModalContent}>
            <div className={styles.paymentModalHeader}>
              <h3>Make a Donation</h3>
              <button 
                onClick={() => setShowPaymentForm(false)}
                className={styles.closeButton}
              >
                ×
              </button>
            </div>
            <UBLPaymentForm
              donationAmount={amount ? parseFloat(amount) : 0}
              donationType={selectedCause}
              onPaymentInitiated={handlePaymentInitiated}
              onPaymentCompleted={handlePaymentCompleted}
              onPaymentFailed={handlePaymentFailed}
            />
          </div>
        </div>
      )}
    </div>
  );
}
