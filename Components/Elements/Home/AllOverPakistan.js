"use client";
import React, { useEffect, useState, useRef } from "react";

const statsData = [
  { id: 1, value: "3.7M", label: "Beneficiaries", isLarge: true },
  { id: 2, value: "533K+", label: "Households", isLarge: true },
  { id: 3, value: "7K", label: "Villages", isLarge: true },
  { id: 4, value: "8", label: "Regional Offices", isLarge: false },
  { id: 5, value: "53", label: "Districts", isLarge: false },
  { id: 6, value: "86", label: "Tehsils", isLarge: false },
  { id: 7, value: "917", label: "Union Councils", isLarge: false },
];

const AllOverPakistan = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const topStats = statsData.filter((s) => s.isLarge);
  const bottomStats = statsData.filter((s) => !s.isLarge);

  return (
    <>
      <style>{`
        .impact-section {
          background: #fff;
          padding: 60px 0 70px;
          width: 100%;
          overflow-x: hidden;
        }

        .impact-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
          box-sizing: border-box;
          overflow: visible;
        }

        .impact-title {
          font-size: 26px;
          font-weight: 600;
          color: #1a2a3a;
          margin-bottom: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .impact-line {
          width: 60px;
          height: 3px;
          background: #c75b39;
          margin: 0 auto 20px;
        }

        .impact-description {
          font-size: 14px;
          color: #777;
          line-height: 1.8;
          max-width: 650px;
          margin: 0 auto 50px;
          padding: 0 8px;
          box-sizing: border-box;
        }

        .stats-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          gap: 20px;
          flex-wrap: wrap;
        }

        .stats-row-top {
          margin-bottom: 35px;
        }

        .stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-value {
          font-weight: 700;
          color: #c75b39;
          margin: 0;
          line-height: 1;
          transition: all 0.6s ease-out;
        }

        .stat-value-large {
          font-size: 52px;
        }

        .stat-value-small {
          font-size: 40px;
        }

        .stat-value.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-value.hidden {
          opacity: 0;
          transform: translateY(20px);
        }

        .stat-label {
          font-size: 12px;
          color: #888;
          margin-top: 8px;
        }

        .stat-divider {
          width: 1px;
          background: #ddd;
        }

        .stat-divider-large {
          height: 55px;
        }

        .stat-divider-small {
          height: 45px;
        }

        @media (max-width: 992px) {
          .stat-value-large {
            font-size: 42px;
          }

          .stat-value-small {
            font-size: 32px;
          }
        }

        @media (max-width: 768px) {
          .impact-section {
            padding: 40px 0 64px;
          }

          .impact-container {
            padding: 0 16px;
          }

          .impact-title {
            margin-bottom: 12px;
          }

          .impact-description {
            margin-bottom: 40px;
            padding: 0 4px;
            font-size: 13px;
            line-height: 1.75;
          }

          .stats-row {
            flex-wrap: wrap;
            gap: 24px 16px;
            justify-content: center;
          }

          .stats-row-top {
            margin-bottom: 24px;
          }

          .stat-divider {
            display: none;
          }

          .stat-item {
            flex: 1 1 45%;
            min-width: 0;
            max-width: 50%;
          }
        }

        @media (max-width: 480px) {
          .impact-section {
            padding: 32px 0 56px;
          }

          .impact-container {
            padding: 0 12px;
          }

          .impact-title {
            font-size: 20px;
            letter-spacing: 1px;
            margin-bottom: 10px;
          }

          .impact-line {
            margin-bottom: 16px;
          }

          .impact-description {
            font-size: 13px;
            line-height: 1.75;
            margin-bottom: 28px;
            padding: 0 4px;
          }

          .stats-row {
            gap: 20px 12px;
            justify-content: center;
          }

          .stats-row-top {
            margin-bottom: 20px;
          }

          .stat-value-large {
            font-size: 34px;
          }

          .stat-value-small {
            font-size: 26px;
          }

          .stat-item {
            flex: 1 1 46%;
            min-width: 0;
            max-width: 48%;
          }

          .stat-label {
            font-size: 11px;
            margin-top: 6px;
          }
        }

        @media (max-width: 360px) {
          .impact-container {
            padding: 0 10px;
          }

          .stat-item {
            flex: 1 1 100%;
            max-width: 100%;
          }
        }
      `}</style>

      <section ref={sectionRef} className="impact-section">
        <div className="impact-container">
          <h2 className="impact-title">Helpline's Impact In Numbers</h2>
          <div className="impact-line" />

          <p className="impact-description">
            At Helpline, every number reflects a human story, a child gaining access to education,
            a mother receiving healthcare, a family finding clean water, or a community building
            a sustainable future. These impact figures are more than statistics, they are milestones
            of progress and hope made possible through your trust and support.
          </p>

          {/* Top row */}
          <div className="stats-row stats-row-top">
            {topStats.map((stat, index) => (
              <React.Fragment key={stat.id}>
                <div className="stat-item">
                  <h3
                    className={`stat-value stat-value-large ${
                      isVisible ? "visible" : "hidden"
                    }`}
                  >
                    {stat.value}
                  </h3>
                  <p className="stat-label">{stat.label}</p>
                </div>

                {index < topStats.length - 1 && (
                  <div className="stat-divider stat-divider-large" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom row */}
          <div className="stats-row">
            {bottomStats.map((stat, index) => (
              <React.Fragment key={stat.id}>
                <div className="stat-item">
                  <h3
                    className={`stat-value stat-value-small ${
                      isVisible ? "visible" : "hidden"
                    }`}
                  >
                    {stat.value}
                  </h3>
                  <p className="stat-label">{stat.label}</p>
                </div>

                {index < bottomStats.length - 1 && (
                  <div className="stat-divider stat-divider-small" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllOverPakistan;