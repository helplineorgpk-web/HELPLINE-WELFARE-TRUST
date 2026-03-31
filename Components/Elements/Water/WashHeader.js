"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITETQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEQ/ANlg3O6Kv0yPMuTjkJoBLDJYaAaUc5B4ycgjn5Ugb67S+GlJrSlSOYn/2Q==";

export default function WashHeader() {
  const heading = "Healthcare &\nClean Water";
  const description =
    "Good health is not a luxury. It is a basic need that affects every part of life, from a parent\u2019s ability to work to a child\u2019s ability to study. Helpline\u2019s healthcare and clean water work responds to this reality by supporting free medical services, medicine access, eye care, and water solutions that reduce illness and make daily life safer.";

  return (
    <>
      <style>{`
        .wash-hero-section {
          position: relative;
          width: 100%;
          max-width: 100vw;
          height: 100vh;
          min-height: 100vh;
          overflow: hidden;
        }
        .wash-hero-image-wrap {
          position: absolute;
          inset: 0;
        }
        .wash-hero-slide-image {
          object-fit: cover;
          object-position: center;
        }
        .wash-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.65) 0%,
            rgba(0, 0, 0, 0.35) 50%,
            transparent 100%
          );
          z-index: 1;
        }
        .wash-hero-content {
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
        .wash-hero-text {
          max-width: 620px;
          color: #fff;
        }
        .wash-breadcrumb {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.25rem;
        }
        .wash-breadcrumb a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.2s;
        }
        .wash-breadcrumb a:hover {
          color: #fff;
        }
        .wash-breadcrumb span {
          margin: 0 0.5rem;
        }
        .wash-hero-heading {
          font-size: clamp(2.5rem, 6vw, 3.75rem);
          font-weight: 700;
          line-height: 1.1;
          margin: 0 0 1.5rem 0;
          color: #fff;
          white-space: pre-line;
        }
        .wash-hero-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 2rem 0;
        }
        .wash-hero-bar {
          width: 120px;
          height: 4px;
          background: #f15b43;
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }
        .wash-hero-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          background: #333;
          animation: washBarSlide 2.5s ease-in-out infinite;
        }
        @keyframes washBarSlide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(200%); }
          100% { transform: translateX(-100%); }
        }
        @media (max-width: 1024px) {
          .wash-hero-content {
            justify-content: center;
            align-items: center;
            padding: 120px 30px 40px;
            text-align: center;
          }
          .wash-hero-text {
            text-align: center;
          }
          .wash-hero-bar {
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .wash-hero-section {
            min-height: 80vh;
            height: auto;
          }
          .wash-hero-content {
            padding-top: 100px;
            padding-bottom: 40px;
          }
        }
      `}</style>

      <section className="wash-hero-section">
        <div className="wash-hero-image-wrap">
          <Image
            src="/img/Campaigns/Environment.webp"
            alt="Sustainable Environment & WASH"
            fill
            priority
            loading="eager"
            fetchPriority="high"
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            sizes="100vw"
            quality={75}
            decoding="async"
            className="wash-hero-slide-image"
          />
        </div>

        <div className="wash-hero-overlay" />

        <div className="wash-hero-content">
          <div className="wash-hero-text">
            <div className="wash-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              Sustainable Environment &amp; WASH
            </div>
            <h1 className="wash-hero-heading">{heading}</h1>
            <p className="wash-hero-desc">{description}</p>
            <div className="wash-hero-bar" />
          </div>
        </div>
      </section>
    </>
  );
}
