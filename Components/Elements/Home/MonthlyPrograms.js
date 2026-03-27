import React from "react";
import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    title: "Monthly Rashan",
    description: "Essential food packages for deserving families every month.",
    image: "/img/causes/cause24.jpg",
    link: "/projects/monthly-programs",
    icon: "🛒",
  },
  {
    title: "Monthly Medical",
    description: "Free medical camps and healthcare for underserved communities.",
    image: "/img/causes/cause13.jpg",
    link: "/projects/monthly-programs",
    icon: "🩺",
  },
  {
    title: "Support a Student",
    description: "Sponsor a child's education and help them stay in school.",
    image: "/img/causes/School-1-scaled.jpg",
    link: "/projects/monthly-programs",
    icon: "📚",
  },
];

const styles = {
  section: {
    padding: "80px 20px",
    background: "#f8f9fa",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#263b5d",
    marginBottom: "0.5rem",
    textAlign: "center",
  },
  subHeading: {
    color: "#666",
    textAlign: "center",
    marginBottom: "3rem",
    maxWidth: "600px",
    margin: "0 auto 3rem",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
    height: "100%",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  imageWrap: {
    position: "relative",
    height: "180px",
    overflow: "hidden",
  },
  cardContent: {
    padding: "24px",
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#263b5d",
    marginBottom: "8px",
  },
  cardDesc: {
    color: "#555",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    marginBottom: "16px",
  },
  link: {
    color: "#65cabb",
    fontWeight: "600",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  },
};

export default function MonthlyPrograms() {
  return (
    <section style={styles.section} className="monthly-programs-area monthly-programs-section">
      <style>{`
        .monthly-programs-section .container {
          max-width: 100%;
          padding-left: 20px;
          padding-right: 20px;
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box;
        }
        @media (max-width: 768px) {
          .monthly-programs-section {
            padding: 50px 16px 60px !important;
          }
          .monthly-programs-section .container {
            padding-left: 16px;
            padding-right: 16px;
          }
          .monthly-programs-section .sub_title {
            font-size: 0.9rem;
          }
          .monthly-programs-section h2.mt-2 {
            font-size: 1.6rem !important;
          }
          .monthly-programs-section .monthly-program-card {
            margin-bottom: 0;
          }
          .monthly-programs-section .monthly-program-card > div:first-of-type {
            height: 160px !important;
          }
          .monthly-programs-section .monthly-program-card > div:last-of-type {
            padding: 18px !important;
          }
        }
        @media (max-width: 480px) {
          .monthly-programs-section {
            padding: 40px 12px 50px !important;
          }
          .monthly-programs-section .container {
            padding-left: 12px;
            padding-right: 12px;
          }
          .monthly-programs-section h2.mt-2 {
            font-size: 1.4rem !important;
          }
          .monthly-programs-section .row.mb-4 p {
            font-size: 0.9rem !important;
            margin-bottom: 2rem !important;
          }
          .monthly-programs-section .monthly-program-card > div:first-of-type {
            height: 140px !important;
          }
          .monthly-programs-section .monthly-program-card > div:last-of-type {
            padding: 16px !important;
          }
          .monthly-programs-section .monthly-program-card h3 {
            font-size: 1.1rem !important;
          }
          .monthly-programs-section .monthly-program-card p {
            font-size: 0.875rem !important;
          }
        }
      `}</style>
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <span className="sub_title d-block text-center">
              <i className="fal fa-calendar-check"></i> Ongoing Programs
            </span>
            <h2 style={styles.heading} className="mt-2">
              Monthly Programs
            </h2>
            <p style={styles.subHeading}>
              Support our regular monthly initiatives: Rashan distribution, medical projects, and student sponsorship.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {programs.map((program, index) => (
            <div
              key={index}
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12"
            >
              <Link href={program.link} className="d-block h-100">
                <div
                  style={styles.card}
                  className="monthly-program-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                  }}
                >
                  <div style={styles.imageWrap}>
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div style={styles.cardContent}>
                    <h3 style={styles.cardTitle}>
                      <span style={{ marginRight: "8px" }}>{program.icon}</span>
                      {program.title}
                    </h3>
                    <p style={styles.cardDesc}>{program.description}</p>
                    <span style={styles.link}>
                      Learn more <i className="fal fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <Link
              href="/projects/monthly-programs"
              className="g_btn hbtn_1 to_right1 rad-30 nav-donate-btn"
            >
              View All Monthly Programs<span></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
