"use client";
import React from "react";
import { HelplineData } from "../../../pages/api/data";

export default function AnnualReportsGrid() {
  const auditReports = HelplineData.pdfDocuments.filter(
    (doc) => doc.title !== "2020-24"
  );

  return (
    <>
      <style>{`
        .ar-grid-section {
          background: #f3f5f7;
          padding: 70px 0;
        }
        .ar-audit-card {
          max-width: 980px;
          margin: 0 auto;
          background: #f8f8f8;
          border-radius: 14px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          padding: 30px 24px 26px;
        }
        .ar-audit-heading {
          margin: 0;
          text-align: center;
          font-size: clamp(1.7rem, 3vw, 2.2rem);
          line-height: 1.2;
          color: #233549;
          font-weight: 700;
        }
        .ar-audit-heading-line {
          width: 54px;
          height: 3px;
          background: #4a90d9;
          margin: 10px auto 24px;
          border-radius: 2px;
        }
        .ar-audit-buttons {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 12px;
        }
        .ar-audit-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-height: 44px;
          padding: 10px 16px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #34495e, #2c3e50);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ar-audit-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 14px rgba(44, 62, 80, 0.2);
        }
        @media (max-width: 900px) {
          .ar-audit-card {
            margin: 0 18px;
          }
          .ar-audit-buttons {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        @media (max-width: 560px) {
          .ar-grid-section {
            padding: 50px 0;
          }
          .ar-audit-card {
            margin: 0 12px;
            padding: 24px 16px 20px;
          }
          .ar-audit-buttons {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }
          .ar-audit-button {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <section className="ar-grid-section">
        <div className="ar-audit-card">
          <h2 className="ar-audit-heading">Annual Audit Reports</h2>
          <div className="ar-audit-heading-line" />
          <div className="ar-audit-buttons">
            {auditReports.map((doc) => (
              <a
                key={doc.id}
                className="ar-audit-button"
                href={doc.pdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                {doc.title}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
