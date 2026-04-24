"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE = "/img/bg/breadcrumb_bg_4.jpg";

export default function OurImpactHeader() {
  const heading = "Our Impact";
  const description =
    "These key stats reflect our commitment to empowering communities across Pakistan. Each number tells a story of hope, growth, and lasting impact created through your support.";

  return (
    <>
      <style>{`
        .oi-hero-section {
          position: relative;
          width: 100%;
          max-width: 100vw;
          height: 100vh;
          min-height: 100vh;
          overflow: hidden;
          background: #fff;
        }
        .oi-hero-image-wrap {
          position: absolute;
          inset: 0;
        }
        .oi-hero-slide-image {
          object-fit: cover;
          object-position: center;
        }
        .oi-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }
        .oi-hero-content {
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
        .oi-hero-text {
          max-width: 640px;
          color: #fff;
        }
        .oi-breadcrumb {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.25rem;
        }
        .oi-breadcrumb a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: color 0.2s;
        }
        .oi-breadcrumb a:hover {
          color: #fff;
        }
        .oi-breadcrumb span {
          margin: 0 0.35rem;
        }
        .oi-hero-heading {
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.15;
          margin: 0 0 1.25rem 0;
          color: #fff;
        }
        .oi-hero-desc {
          font-size: 1.05rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.95);
          margin: 0 0 1.5rem 0;
        }
        .oi-hero-bar {
          width: 80px;
          height: 4px;
          background: #f15b43;
          border-radius: 2px;
        }
        @media (max-width: 1024px) {
          .oi-hero-content {
            justify-content: center;
            align-items: center;
            padding: 120px 30px 40px;
            text-align: center;
          }
          .oi-hero-text {
            text-align: center;
          }
          .oi-hero-bar {
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .oi-hero-section {
            min-height: 85vh;
            height: auto;
          }
          .oi-hero-content {
            padding-top: 100px;
            padding-bottom: 40px;
          }
          .oi-hero-heading {
            font-size: 2rem;
          }
          .oi-hero-desc {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section className="oi-hero-section">
        <div className="oi-hero-image-wrap">
          <Image
            src={HERO_IMAGE}
            alt="Our Impact"
            fill
            priority
            placeholder="empty"
            sizes="100vw"
            quality={85}
            className="oi-hero-slide-image"
          />
        </div>

        <div className="oi-hero-overlay" />

        <div className="oi-hero-content">
          <div className="oi-hero-text">
            <div className="oi-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Our Impact</span>
            </div>
            <h1 className="oi-hero-heading">{heading}</h1>
            <p className="oi-hero-desc">{description}</p>
            <div className="oi-hero-bar" />
          </div>
        </div>
      </section>
    </>
  );
}
