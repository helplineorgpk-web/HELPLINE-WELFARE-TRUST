"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE = "/img/Campaigns/Vocational.jpg";

export default function SpecialProjectsHeader() {
  const heading = "Special Projects";
  const description =
    "Helpline's special initiatives that create lasting change—from the Alkitab education system to vocational training centers empowering youth and women with skills for a better future.";

  return (
    <>
      <style>{`
        .sp-hero-section {
          position: relative;
          width: 100%;
          max-width: 100vw;
          height: 100vh;
          min-height: 100vh;
          overflow: hidden;
          background: #fff;
        }
        .sp-hero-image-wrap {
          position: absolute;
          inset: 0;
        }
        .sp-hero-slide-image {
          object-fit: cover;
          object-position: center;
        }
        .sp-hero-overlay {
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
        .sp-hero-content {
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
        .sp-hero-text {
          max-width: 620px;
          color: #fff;
        }
        .sp-breadcrumb {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.25rem;
        }
        .sp-breadcrumb a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: color 0.2s;
        }
        .sp-breadcrumb a:hover {
          color: #fff;
        }
        .sp-breadcrumb span {
          margin: 0 0.35rem;
        }
        .sp-hero-heading {
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.15;
          margin: 0 0 1.25rem 0;
          color: #fff;
        }
        .sp-hero-desc {
          font-size: 1.05rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.95);
          margin: 0 0 1.5rem 0;
        }
        .sp-hero-bar {
          display: flex;
          align-items: stretch;
          width: 160px;
          height: 4px;
          border-radius: 2px;
          overflow: hidden;
        }
        .sp-hero-bar-left {
          width: 40px;
          background: #e85d4a;
        }
        .sp-hero-bar-right {
          flex: 1;
          background: #333;
        }
        @media (max-width: 1024px) {
          .sp-hero-content {
            justify-content: center;
            align-items: center;
            padding: 120px 30px 40px;
            text-align: center;
          }
          .sp-hero-text {
            text-align: center;
          }
          .sp-hero-bar {
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .sp-hero-section {
            min-height: 85vh;
            height: auto;
          }
          .sp-hero-content {
            padding-top: 100px;
            padding-bottom: 40px;
          }
          .sp-hero-heading {
            font-size: 2rem;
          }
          .sp-hero-desc {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section className="sp-hero-section">
        <div className="sp-hero-image-wrap">
          <Image
            src={HERO_IMAGE}
            alt="Special Projects"
            fill
            priority
            placeholder="empty"
            sizes="100vw"
            quality={85}
            className="sp-hero-slide-image"
          />
        </div>

        <div className="sp-hero-overlay" />

        <div className="sp-hero-content">
          <div className="sp-hero-text">
            <div className="sp-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/health">What We Do</Link>
              <span>/</span>
              <span>Special Projects</span>
            </div>
            <h1 className="sp-hero-heading">{heading}</h1>
            <p className="sp-hero-desc">{description}</p>
            <div className="sp-hero-bar">
              <span className="sp-hero-bar-left" />
              <span className="sp-hero-bar-right" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
