"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const pillarsData = [
  {
    id: 1,
    title: "Education & Literacy",
    description:
      "Helpline's Education & Literacy Program ensures that every child especially girls have access to quality learning. By building schools, training teachers and engaging communities, we break cycles of poverty and open doors to brighter futures.",
    subDescription:
      "Education is not just a right, it's a powerful tool for breaking the cycle of poverty. At Helpline Welfare Organization, we believe every child, regardless of gender or geography, deserves access to quality education.",
    link: "/cause?category=Education",
    image: "/img/causes/cause17.jpg",
  },
  {
    id: 2,
    title: "Healthcare & Nutrition",
    description:
      "Helpline's Healthcare & Nutrition Program provides essential medical services and nutritional support to underserved communities. Through mobile health units, clinics, and awareness campaigns, we ensure families receive the care they need.",
    subDescription:
      "Good health is the foundation of a productive life. We work to ensure that every family has access to quality healthcare and proper nutrition, especially mothers and children.",
    link: "/cause?category=Healthcare",
    image: "/img/causes/cause12.jpg",
  },
  {
    id: 3,
    title: "Water & Sanitation",
    description:
      "Helpline's Water & Sanitation Program brings clean drinking water and proper sanitation facilities to remote and underserved areas. We install hand pumps, water filtration plants, and build washrooms to improve community health.",
    subDescription:
      "Access to clean water is a basic human right. Our water projects have transformed thousands of lives by providing safe drinking water and reducing waterborne diseases.",
    link: "/cause?category=Water",
    image: "/img/water/Filter1.jpg",
  },
  {
    id: 4,
    title: "Economic Empowerment",
    description:
      "Helpline's Economic Empowerment Program provides vocational training, microfinance opportunities, and skill development to help families become self-sufficient. We focus on empowering women and youth with marketable skills.",
    subDescription:
      "Breaking the cycle of poverty requires economic independence. Through vocational training and livelihood support, we help families build sustainable futures.",
    link: "/vocationalTrainingCenters",
    image: "/img/orphanage/PHOTO-2025-02-19-11-59-36.jpg",
  },
  {
    id: 5,
    title: "Disaster Relief & Rehabilitation",
    description:
      "Helpline's Disaster Relief Program provides immediate assistance during natural disasters and emergencies. From food and shelter to medical aid and long-term rehabilitation, we stand with affected communities.",
    subDescription:
      "When disaster strikes, we respond. Our emergency relief efforts provide immediate support while our rehabilitation programs help communities rebuild stronger.",
    link: "/cause?category=Disaster%20Relief",
    image: "/img/rehab/houseconstruction2.jpeg",
  },
];

const PowerOfFive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? pillarsData.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === pillarsData.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentPillar = pillarsData[currentIndex];

  return (
    <>
      <style>{`
        .power-section {
          background: #fff;
          padding: 60px 0 70px;
          width: 100%;
        }

        .power-container {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .power-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .power-title {
          font-size: 26px;
          font-weight: 600;
          color: #1a2a3a;
          margin-bottom: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .power-line {
          width: 60px;
          height: 3px;
          background: #5a8a9a;
          margin: 0 auto 20px;
        }

        .power-description {
          font-size: 14px;
          color: #777;
          line-height: 1.8;
          max-width: 650px;
          margin: 0 auto;
        }

        .power-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          min-height: 420px;
          width: 100%;
          overflow: visible;
        }

        .power-text {
          flex: 0 0 50%;
          max-width: 50%;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          opacity: ${isVisible ? 1 : 0};
          transform: translateX(${isVisible ? "0" : "-30px"});
          transition: all 0.6s ease-out;
        }

        .pillar-title {
          font-size: 24px;
          font-weight: 600;
          color: #1a2a3a;
          margin-bottom: 20px;
          min-height: 32px;
        }

        .pillar-description {
          font-size: 14px;
          color: #555;
          line-height: 1.8;
          margin-bottom: 15px;
          min-height: 75px;
        }

        .pillar-sub-description {
          font-size: 14px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 25px;
          min-height: 50px;
          flex-grow: 1;
        }

        .learn-more-btn {
          display: inline-block;
          padding: 12px 32px;
          border: 1px solid #333;
          color: #333;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.3s ease;
          background: transparent;
          border-radius: 30px;
          width: fit-content;
        }

        .learn-more-btn:hover {
          background: #333;
          color: #fff;
        }

        .power-visual {
          flex: 0 0 45%;
          max-width: 45%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          opacity: ${isVisible ? 1 : 0};
          transform: translateX(${isVisible ? "0" : "30px"});
          transition: all 0.6s ease-out 0.2s;
        }

        .image-container {
          position: relative;
          width: 100%;
          max-width: 480px;
          height: 420px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .pillar-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .pillar-image.changing {
          opacity: 0;
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }

        .image-number {
          font-size: 48px;
          font-weight: 700;
          color: #fff;
          opacity: 0.9;
          line-height: 1;
        }

        .image-label {
          font-size: 14px;
          color: #fff;
          margin-left: 15px;
          margin-bottom: 8px;
          opacity: 0.9;
        }

        .navigation {
          display: flex;
          gap: 15px;
          margin-top: 30px;
        }

        .nav-btn {
          width: 40px;
          height: 40px;
          border: 1px solid #ddd;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #666;
          border-radius: 50%;
        }

        .nav-btn:hover {
          border-color: #333;
          color: #333;
          background: #f5f5f5;
        }

        .nav-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pillar-indicators {
          display: flex;
          gap: 8px;
          margin-top: 20px;
        }

        .indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ddd;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #c75b39;
          width: 24px;
          border-radius: 4px;
        }

        @media (max-width: 992px) {
          .power-content {
            flex-direction: column-reverse;
            gap: 40px;
          }

          .power-text {
            flex: 0 0 100%;
            max-width: 100%;
            text-align: center;
            min-height: auto;
            align-items: center;
          }

          .power-visual {
            flex: 0 0 100%;
            max-width: 100%;
            justify-content: center;
          }

          .learn-more-btn {
            margin: 0 auto;
          }

          .navigation {
            justify-content: center;
          }

          .pillar-indicators {
            justify-content: center;
          }

          .image-container {
            width: 350px;
            max-width: 350px;
            height: 350px;
          }
        }

        @media (max-width: 768px) {
          .power-section {
            padding: 50px 0 80px;
          }

          .power-container {
            padding: 0 16px;
          }

          .power-header {
            margin-bottom: 36px;
          }

          .power-description {
            margin-bottom: 0;
          }

          .power-title {
            font-size: 22px;
          }

          .power-content {
            min-height: auto;
            gap: 32px;
          }

          .pillar-title {
            font-size: 20px;
            min-height: auto;
          }

          .pillar-description,
          .pillar-sub-description {
            min-height: auto;
          }

          .image-container {
            width: 100%;
            max-width: 300px;
            height: 300px;
          }

          .image-number {
            font-size: 36px;
          }
        }

        @media (max-width: 480px) {
          .power-section {
            padding: 48px 0 64px;
          }

          .power-container {
            padding: 0 12px;
          }

          .power-header {
            margin-bottom: 28px;
          }

          .power-title {
            font-size: 18px;
            letter-spacing: 1px;
          }

          .power-description {
            font-size: 13px;
            line-height: 1.7;
            padding: 0 4px;
          }

          .power-content {
            gap: 24px;
          }

          .pillar-title {
            font-size: 18px;
          }

          .pillar-description,
          .pillar-sub-description {
            font-size: 13px;
          }

          .learn-more-btn {
            padding: 10px 24px;
            font-size: 12px;
          }

          .image-container {
            width: 100%;
            max-width: 100%;
            height: 260px;
          }

          .image-number {
            font-size: 32px;
          }

          .image-label {
            font-size: 12px;
          }

          .navigation {
            margin-top: 20px;
            gap: 12px;
          }

          .nav-btn {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>

      <section ref={sectionRef} className="power-section">
        <div className="power-container">
          <div className="power-header">
            <h2 className="power-title">Power of 5</h2>
            <div className="power-line" />
            <p className="power-description">
              Poverty is more than lack of income. It's the absence of healthcare,
              education, opportunities, safe environments, and equality, especially for
              women and children. Helpline tackles these challenges through five
              interconnected pillars of human development, creating resilient and
              self-sustaining communities.
            </p>
          </div>

          <div className="power-content">
            <div className="power-text">
              <h3 className="pillar-title">{currentPillar.title}</h3>
              <p className="pillar-description">{currentPillar.description}</p>
              <p className="pillar-sub-description">{currentPillar.subDescription}</p>
              <Link href={currentPillar.link} className="learn-more-btn">
                Learn More
              </Link>

              <div className="navigation">
                <button
                  className="nav-btn"
                  onClick={handlePrev}
                  disabled={isAnimating}
                  aria-label="Previous pillar"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  className="nav-btn"
                  onClick={handleNext}
                  disabled={isAnimating}
                  aria-label="Next pillar"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              <div className="pillar-indicators">
                {pillarsData.map((_, index) => (
                  <div
                    key={index}
                    className={`indicator ${index === currentIndex ? "active" : ""}`}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentIndex(index);
                        setTimeout(() => setIsAnimating(false), 500);
                      }
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="power-visual">
              <div className="image-container">
                <img
                  src={currentPillar.image}
                  alt={currentPillar.title}
                  className={`pillar-image ${isAnimating ? "changing" : ""}`}
                />
                <div className="image-overlay">
                  <span className="image-number">0{currentIndex + 1}</span>
                  <span className="image-label">of 05</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PowerOfFive;
