"use client";
import React from "react";

const PURPOSE_ITEMS = [
  {
    title: "Breaking Barriers",
    description:
      "Provides opportunities for students from low-income families to pursue education without financial constraints.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#e85d4a" strokeWidth="1.5" strokeLinecap="round">
        <path d="M24 8v8M20 12h8M18 20l4 4 8-8M14 36h20M24 28v8" />
        <circle cx="24" cy="24" r="18" strokeOpacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Equal Access",
    description:
      "Ensures that deserving students can attend schools, colleges, and universities that might otherwise be out of reach.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#e85d4a" strokeWidth="1.5">
        <circle cx="16" cy="24" r="6" />
        <circle cx="32" cy="24" r="6" />
        <path d="M22 24h4M16 18l4 6M32 18l-4 6" />
      </svg>
    ),
  },
  {
    title: "Lifelong Impact",
    description:
      "Creates sustainable scholarships through an endowment model, benefiting generations of students.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#e85d4a" strokeWidth="1.5">
        <path d="M24 12v24M24 12l-8 8M24 12l8 8M24 28l-6 6M24 28l6 6" />
      </svg>
    ),
  },
  {
    title: "Talent Nurturing",
    description:
      "Identifies and supports bright minds, empowering them to reach their full academic and professional potential.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#e85d4a" strokeWidth="1.5">
        <path d="M24 8l4 12 12 2-9 8 3 12-10-6-10 6 3-12-9-8 12-2L24 8z" />
      </svg>
    ),
  },
  {
    title: "Community Growth",
    description:
      "Builds stronger communities by enabling educated youth to give back and uplift others.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#e85d4a" strokeWidth="1.5">
        <circle cx="24" cy="18" r="5" />
        <path d="M12 38c0-6 5-10 12-10s12 4 12 10M18 28h-4l-2 10M30 28h4l2 10" />
        <path d="M14 32l4-4 4 4 6-8" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: "From Gratitude to Opportunity",
    description:
      "Turns alumni and donor support into lasting educational pathways for underprivileged students.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#e85d4a" strokeWidth="1.5">
        <path d="M24 8c-2 4-8 6-12 4s-4 8 0 12c4 4 10 2 12-2" />
        <path d="M24 8c2 4 8 6 12 4s4 8 0 12c-4 4-10 2-12-2" />
        <path d="M20 22l4 4 8-8" />
        <circle cx="24" cy="32" r="8" strokeOpacity="0.4" />
      </svg>
    ),
  },
];

export default function ScholarshipsPurpose() {
  return (
    <>
      <style>{`
        .sch-purpose {
          background: #f8f6f3;
          padding: 80px 24px 100px;
        }
        .sch-purpose-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .sch-purpose-title {
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          font-weight: 700;
          color: #1a1a1a;
          text-align: center;
          margin: 0 0 1.25rem 0;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }
        .sch-purpose-intro {
          font-size: 1rem;
          line-height: 1.7;
          color: #333;
          text-align: center;
          max-width: 720px;
          margin: 0 auto 3.5rem;
        }
        .sch-purpose-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem 2rem;
        }
        .sch-purpose-card {
          text-align: center;
        }
        .sch-purpose-icon-wrap {
          width: 70px;
          height: 70px;
          margin: 0 auto 1.25rem;
          border-radius: 50%;
          background: #b8d4e3;
          border: 2px solid #8eb8cc;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sch-purpose-icon-wrap svg {
          width: 36px;
          height: 36px;
        }
        .sch-purpose-card h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 0.75rem 0;
        }
        .sch-purpose-card p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #444;
          margin: 0;
        }
        @media (max-width: 900px) {
          .sch-purpose-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem 1.5rem;
          }
        }
        @media (max-width: 600px) {
          .sch-purpose {
            padding: 56px 20px 72px;
          }
          .sch-purpose-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .sch-purpose-intro {
            margin-bottom: 2.5rem;
          }
        }
      `}</style>

      <section className="sch-purpose">
        <div className="sch-purpose-inner">
          <h2 className="sch-purpose-title">Purpose of Scholarship</h2>
          <p className="sch-purpose-intro">
            The purpose of Helpline&apos;s scholarship program is to support talented and underprivileged students in accessing quality education. It aims to break the cycle of poverty by enabling youth to achieve their academic and career goals.
          </p>
          <div className="sch-purpose-grid">
            {PURPOSE_ITEMS.map((item) => (
              <div key={item.title} className="sch-purpose-card">
                <div className="sch-purpose-icon-wrap">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
