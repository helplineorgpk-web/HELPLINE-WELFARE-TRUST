"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const IMAGE_SRC = "/img/causes/cause1.jpg";

export default function ScholarshipsHowItWorks() {
  return (
    <>
      <style>{`
        .sch-how {
          background: #fff;
          padding: 80px 24px;
        }
        .sch-how-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .sch-how-image {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          aspect-ratio: 4/3;
        }
        .sch-how-image img {
          object-fit: cover;
        }
        .sch-how-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 1.25rem 0;
        }
        .sch-how-content p {
          font-size: 1rem;
          line-height: 1.7;
          color: #333;
          margin: 0 0 1rem 0;
        }
        .sch-how-content p:last-of-type {
          margin-bottom: 1.5rem;
        }
        .sch-how-btn {
          display: inline-block;
          padding: 12px 24px;
          background: #fff;
          color: #1a1a1a;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .sch-how-btn:hover {
          background: #f5f5f5;
          border-color: #999;
        }
        @media (max-width: 900px) {
          .sch-how-inner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .sch-how-image {
            order: 1;
            max-height: 320px;
            aspect-ratio: 16/10;
          }
          .sch-how-content {
            order: 2;
          }
        }
        @media (max-width: 600px) {
          .sch-how {
            padding: 56px 20px;
          }
          .sch-how-content h2 {
            font-size: 1.5rem;
          }
          .sch-how-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <section className="sch-how">
        <div className="sch-how-inner">
          <div className="sch-how-image">
            <Image
              src={IMAGE_SRC}
              alt="Students in learning environment"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="sch-how-content">
            <h2>How It Works</h2>
            <p>
              The minimum donation of $10,000 is needed to establish one Helpline scholarship.
            </p>
            <p>
              This donation will become part of Helpline Endowment Trust. Every year a maximum of only 10% of the endowment funds is disbursed as awards. At least ninety % of the donations/income from investment remains in the Endowment Trust. The scholarships are given in perpetuity.
            </p>
            <p>
              The first distribution for the scholarship takes place approximately one year after the full donation for a scholarship has been received at Helpline.
            </p>
            <Link href="/campaigns" className="sch-how-btn">
              View Current Scholarships
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
