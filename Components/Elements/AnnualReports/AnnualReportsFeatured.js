"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const FEATURED_IMAGE = "/img/bg/breadcrumb_bg_4.jpg";
const IRS_LETTER_URL = "#";
const ANNUAL_REPORT_2024_URL = "#";

export default function AnnualReportsFeatured() {
  return (
    <>
      <style>{`
        .ar-featured {
          background: #fff;
          padding: 80px 0;
        }
        .ar-featured-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .ar-featured-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 8px;
          overflow: hidden;
        }
        .ar-featured-image {
          object-fit: cover;
          object-position: center;
        }
        .ar-featured-content {
          max-width: 540px;
        }
        .ar-featured-badge {
          display: inline-block;
          background: #20B2AA;
          color: #fff;
          font-size: 1.25rem;
          font-weight: 700;
          padding: 10px 20px;
          border-radius: 6px;
          margin-bottom: 1.5rem;
        }
        .ar-featured-p1, .ar-featured-p2 {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          font-size: 1rem;
          line-height: 1.65;
          color: #333;
          margin: 0 0 1rem 0;
        }
        .ar-featured-p1 a, .ar-featured-p2 a {
          color: #000;
          text-decoration: underline;
        }
        .ar-featured-p1 a:hover, .ar-featured-p2 a:hover {
          color: #333;
        }
        .ar-featured-link {
          display: inline-block;
          margin-top: 0.5rem;
          font-size: 1rem;
          color: #000;
          text-decoration: underline;
          font-weight: 500;
        }
        .ar-featured-link:hover {
          color: #333;
        }
        @media (max-width: 900px) {
          .ar-featured-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .ar-featured-image-wrap {
            max-width: 100%;
            aspect-ratio: 16/10;
          }
          .ar-featured-content {
            max-width: 100%;
          }
        }
      `}</style>

      <section className="ar-featured">
        <div className="ar-featured-inner">
          <div className="ar-featured-image-wrap">
            <Image
              src={FEATURED_IMAGE}
              alt="Community impact"
              fill
              className="ar-featured-image"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="ar-featured-content">
            <span className="ar-featured-badge">Annual Report 2024</span>
            <p className="ar-featured-p1">
              The Human Development Foundation is an Illinois not for profit corporation, with federal <strong>Tax ID 36-4184940</strong>. Helpline Welfare Trust is an exempt organization under Section 501(c)(3) of the Internal Revenue Code. See <Link href={IRS_LETTER_URL}>IRS Determination Letter</Link> for details.
            </p>
            <p className="ar-featured-p2">
              Honesty, Integrity, Accountability, Transparency, Efficiency, and Fiscal Responsibility are our Core Values. With this in mind, we strive to remain in open communication with our donors. Below you can find recent 990 Forms, Audited Statements, and Annual Reports.
            </p>
            <Link href={ANNUAL_REPORT_2024_URL} className="ar-featured-link">
              View Annual Report
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
