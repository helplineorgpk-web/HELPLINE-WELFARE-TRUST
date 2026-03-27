"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const IMAGE_SRC = "/img/causes/cause3.jpg";

export default function ScholarshipsBecomeSponsor() {
  return (
    <>
      <style>{`
        .sch-sponsor {
          background: #fff;
          padding: 80px 24px;
        }
        .sch-sponsor-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .sch-sponsor-image {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          aspect-ratio: 4/3;
        }
        .sch-sponsor-image img {
          object-fit: cover;
        }
        .sch-sponsor-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 1.25rem 0;
        }
        .sch-sponsor-content p {
          font-size: 1rem;
          line-height: 1.7;
          color: #333;
          margin: 0 0 1rem 0;
        }
        .sch-sponsor-content p:last-of-type {
          margin-bottom: 1.5rem;
        }
        .sch-sponsor-btn {
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
        .sch-sponsor-btn:hover {
          background: #f5f5f5;
          border-color: #999;
        }
        @media (max-width: 900px) {
          .sch-sponsor-inner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .sch-sponsor-image {
            order: 1;
            max-height: 320px;
            aspect-ratio: 16/10;
          }
          .sch-sponsor-content {
            order: 2;
          }
        }
        @media (max-width: 600px) {
          .sch-sponsor {
            padding: 56px 20px;
          }
          .sch-sponsor-content h2 {
            font-size: 1.5rem;
          }
          .sch-sponsor-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <section className="sch-sponsor">
        <div className="sch-sponsor-inner">
          <div className="sch-sponsor-image">
            <Image
              src={IMAGE_SRC}
              alt="Student in classroom"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="sch-sponsor-content">
            <h2>How To Become A Sponsor</h2>
            <p>
              To start a scholarship, the sponsor sends a donation of any multiple of $10,000 to the Helpline Welfare Trust.
            </p>
            <p>
              The scholarship fund can also be started as a recurring donation with monthly/quarterly installments until $10,000 is collected.
            </p>
            <p>
              Smaller contributions are also welcome; however, a scholarship can only be set up once a minimum donation sum of $10,000 has been received.
            </p>
            <p>
              To initiate the process and learn more about the program you can contact the Helpline office or one of the Helpline Scholarships Committee members.
            </p>
            <Link href="/donation" className="sch-sponsor-btn">
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
