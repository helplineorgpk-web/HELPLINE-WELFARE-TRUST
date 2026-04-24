"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getHeroAsset } from "../../../lib/heroImage";

const HERO_IMAGE = "/img/bg/breadcrumb_bg_4.jpg";
const HERO_ASSET = getHeroAsset(HERO_IMAGE);

export default function SuccessStoriesHeader() {
  const heading = "Success Stories";
  const description =
    "Our success stories highlight the impact of our programs and the lives transformed through our work.";

  return (
    <>
      <style>{`
        .ss-hero-section {
          position: relative;
          width: 100%;
          max-width: 100vw;
          height: 100vh;
          min-height: 100vh;
          overflow: hidden;
          background: #fff;
        }
        .ss-hero-image-wrap {
          position: absolute;
          inset: 0;
        }
        .ss-hero-slide-image {
          object-fit: cover;
          object-position: center;
        }
        .ss-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(59, 48, 80, 0.55);
          z-index: 1;
        }
        .ss-hero-content {
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
        .ss-hero-text {
          max-width: 640px;
          color: #fff;
        }
        .ss-breadcrumb {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.25rem;
        }
        .ss-breadcrumb a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ss-breadcrumb a:hover {
          color: #fff;
        }
        .ss-breadcrumb span {
          margin: 0 0.35rem;
        }
        .ss-hero-heading {
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.15;
          margin: 0 0 1.25rem 0;
          color: #fff;
        }
        .ss-hero-desc {
          font-size: 1.05rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.95);
          margin: 0 0 1.5rem 0;
        }
        .ss-hero-bar-wrap {
          display: flex;
          align-items: center;
          gap: 0;
        }
        .ss-hero-bar-accent {
          width: 48px;
          height: 4px;
          background: #f15b43;
          border-radius: 2px;
        }
        .ss-hero-bar-line {
          flex: 1;
          max-width: 200px;
          height: 1px;
          background: rgba(255, 255, 255, 0.4);
          margin-left: 0;
        }
        @media (max-width: 1024px) {
          .ss-hero-content {
            justify-content: center;
            align-items: center;
            padding: 120px 30px 40px;
            text-align: center;
          }
          .ss-hero-text {
            text-align: center;
          }
          .ss-hero-bar-wrap {
            justify-content: center;
          }
        }
        @media (max-width: 768px) {
          .ss-hero-section {
            min-height: 85vh;
            height: auto;
          }
          .ss-hero-content {
            padding-top: 100px;
            padding-bottom: 40px;
          }
          .ss-hero-heading {
            font-size: 2rem;
          }
          .ss-hero-desc {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section className="ss-hero-section">
        <div className="ss-hero-image-wrap">
          <Image
            src={HERO_ASSET.src}
            alt="Success Stories"
            fill
            priority
            placeholder="blur"
            blurDataURL={HERO_ASSET.blurDataURL}
            sizes="100vw"
            quality={70}
            className="ss-hero-slide-image"
          />
        </div>

        <div className="ss-hero-overlay" />

        <div className="ss-hero-content">
          <div className="ss-hero-text">
            <div className="ss-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Success Stories</span>
            </div>
            <h1 className="ss-hero-heading">{heading}</h1>
            <p className="ss-hero-desc">{description}</p>
            <div className="ss-hero-bar-wrap">
              <div className="ss-hero-bar-accent" />
              <div className="ss-hero-bar-line" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
