"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITETQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ANlg3O6Kv0yPMuTjkJoBLDJYaAaUc5B4ycgjn5Ugb67S+GlJrSlSOYn/2Q==";

const HERO_IMAGE = "/img/Campaigns/Student.jpg";

export default function ScholarshipsHeader() {
  const heading = "Helpline Scholarships";
  const description =
    "Empowering bright and deserving students through scholarships that remove financial barriers and open doors to education and opportunity.";

  return (
    <>
      <style>{`
        .sch-hero-section {
          position: relative;
          width: 100%;
          max-width: 100vw;
          height: 100vh;
          min-height: 100vh;
          overflow: hidden;
        }
        .sch-hero-image-wrap {
          position: absolute;
          inset: 0;
        }
        .sch-hero-slide-image {
          object-fit: cover;
          object-position: center;
        }
        .sch-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.3) 50%,
            transparent 100%
          );
          z-index: 1;
        }
        .sch-hero-content {
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
        .sch-hero-text {
          max-width: 620px;
          color: #fff;
        }
        .sch-breadcrumb {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.25rem;
        }
        .sch-breadcrumb a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: color 0.2s;
        }
        .sch-breadcrumb a:hover {
          color: #fff;
        }
        .sch-breadcrumb span {
          margin: 0 0.35rem;
        }
        .sch-hero-heading {
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.15;
          margin: 0 0 1.25rem 0;
          color: #fff;
        }
        .sch-hero-desc {
          font-size: 1.05rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.95);
          margin: 0 0 1.5rem 0;
        }
        .sch-hero-bar {
          display: flex;
          align-items: stretch;
          width: 160px;
          height: 4px;
          border-radius: 2px;
          overflow: hidden;
        }
        .sch-hero-bar-left {
          width: 40px;
          background: #e85d4a;
        }
        .sch-hero-bar-right {
          flex: 1;
          background: #333;
        }
        @media (max-width: 1024px) {
          .sch-hero-content {
            justify-content: center;
            align-items: center;
            padding: 120px 30px 40px;
            text-align: center;
          }
          .sch-hero-text {
            text-align: center;
          }
          .sch-hero-bar {
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .sch-hero-section {
            min-height: 85vh;
            height: auto;
          }
          .sch-hero-content {
            padding-top: 100px;
            padding-bottom: 40px;
          }
          .sch-hero-heading {
            font-size: 2rem;
          }
          .sch-hero-desc {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section className="sch-hero-section">
        <div className="sch-hero-image-wrap">
          <Image
            src={HERO_IMAGE}
            alt="Helpline Scholarships"
            fill
            priority
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            sizes="100vw"
            quality={85}
            className="sch-hero-slide-image"
          />
        </div>

        <div className="sch-hero-overlay" />

        <div className="sch-hero-content">
          <div className="sch-hero-text">
            <div className="sch-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Helpline Scholarships</span>
            </div>
            <h1 className="sch-hero-heading">{heading}</h1>
            <p className="sch-hero-desc">{description}</p>
            <div className="sch-hero-bar">
              <span className="sch-hero-bar-left" />
              <span className="sch-hero-bar-right" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
