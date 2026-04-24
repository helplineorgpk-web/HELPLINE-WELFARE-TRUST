"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getHeroAsset } from "../../../lib/heroImage";

const HERO_IMAGE = "/img/bg/breadcrumb_bg_4.jpg";
const HERO_ASSET = getHeroAsset(HERO_IMAGE);

export default function AnnualReportsHero() {
  const description =
    "Our annual reports showcase the difference your support makes. Each report highlights milestones, financial accountability, and the lives transformed through Helpline Welfare Trust programs in education, healthcare, economic empowerment, environment, and community development. Discover how, year after year, we are building a stronger, self-reliant Pakistan together.";

  return (
    <>
      <style>{`
        .ar-hero-section {
          position: relative;
          width: 100%;
          max-width: 100vw;
          height: 100vh;
          min-height: 100vh;
          overflow: hidden;
          background: #fff;
        }
        .ar-hero-image-wrap {
          position: absolute;
          inset: 0;
          filter: blur(4px);
          transform: scale(1.05);
        }
        .ar-hero-slide-image {
          object-fit: cover;
          object-position: center;
        }
        .ar-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }
        .ar-hero-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          max-width: 1400px;
          margin: 0 auto;
          padding: 100px 60px 60px;
        }
        .ar-hero-text {
          max-width: 640px;
          color: #fff;
        }
        .ar-breadcrumb {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.25rem;
        }
        .ar-breadcrumb a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ar-breadcrumb a:hover {
          color: #fff;
        }
        .ar-breadcrumb span {
          margin: 0 0.35rem;
        }
        .ar-hero-heading {
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 1.25rem 0;
          color: #fff;
        }
        .ar-hero-heading .ar-heading-line {
          display: block;
        }
        .ar-hero-desc {
          font-size: 1.05rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.95);
          margin: 0 0 1.5rem 0;
        }
        .ar-hero-underline {
          display: flex;
          width: 100%;
          max-width: 320px;
          height: 4px;
          border-radius: 0;
          overflow: hidden;
        }
        .ar-hero-underline-left {
          width: 66.66%;
          height: 100%;
          background: #c44;
        }
        .ar-hero-underline-right {
          width: 33.34%;
          height: 100%;
          background: #2c2c2c;
        }
        @media (max-width: 1024px) {
          .ar-hero-content {
            justify-content: center;
            align-items: center;
            padding: 120px 30px 40px;
            text-align: center;
          }
          .ar-hero-text {
            text-align: center;
          }
          .ar-hero-underline {
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .ar-hero-section {
            min-height: 85vh;
            height: auto;
          }
          .ar-hero-content {
            padding-top: 100px;
            padding-bottom: 40px;
          }
          .ar-hero-heading {
            font-size: 2rem;
          }
          .ar-hero-desc {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section className="ar-hero-section">
        <div className="ar-hero-image-wrap">
          <Image
            src={HERO_ASSET.src}
            alt="Annual Reports"
            fill
            priority
            placeholder="blur"
            blurDataURL={HERO_ASSET.blurDataURL}
            sizes="100vw"
            quality={55}
            className="ar-hero-slide-image"
          />
        </div>

        <div className="ar-hero-overlay" />

        <div className="ar-hero-content">
          <div className="ar-hero-text">
            <div className="ar-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Annual Reports</span>
            </div>
            <h1 className="ar-hero-heading">
              <span className="ar-heading-line">Transparency.</span>
              <span className="ar-heading-line">Accountability.</span>
              <span className="ar-heading-line">Impact.</span>
            </h1>
            <p className="ar-hero-desc">{description}</p>
            <div className="ar-hero-underline">
              <span className="ar-hero-underline-left" />
              <span className="ar-hero-underline-right" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
