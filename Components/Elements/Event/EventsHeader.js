"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITETQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEA/ANlg3O6Kv0yPMuTjkJoBLDJYaAaUc5B4ycgjn5Ugb67S+GlJrSlSOYn/2Q==";

const HERO_IMAGE = "/img/bg/breadcrum_bg_2.jpg";

export default function EventsHeader() {
  const heading = "Events";
  const description =
    "Join Helpline Welfare Trust events that unite communities, inspire action, and fuel lasting change.";

  return (
    <>
      <style>{`
        .ev-hero-section {
          position: relative;
          width: 100%;
          max-width: 100vw;
          height: 100vh;
          min-height: 100vh;
          overflow: hidden;
        }
        .ev-hero-image-wrap {
          position: absolute;
          inset: 0;
        }
        .ev-hero-slide-image {
          object-fit: cover;
          object-position: center;
        }
        .ev-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.35) 50%,
            transparent 100%
          );
          z-index: 1;
        }
        .ev-hero-content {
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
        .ev-hero-text {
          max-width: 620px;
          color: #fff;
        }
        .ev-breadcrumb {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.25rem;
        }
        .ev-breadcrumb a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ev-breadcrumb a:hover {
          color: #fff;
        }
        .ev-breadcrumb span {
          margin: 0 0.35rem;
        }
        .ev-hero-heading {
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.15;
          margin: 0 0 1.25rem 0;
          color: #fff;
        }
        .ev-hero-desc {
          font-size: 1.05rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.95);
          margin: 0 0 1.5rem 0;
        }
        .ev-hero-bar {
          display: flex;
          align-items: stretch;
          width: 160px;
          height: 4px;
          border-radius: 2px;
          overflow: hidden;
        }
        .ev-hero-bar-left {
          width: 40px;
          background: #e85d4a;
        }
        .ev-hero-bar-right {
          flex: 1;
          background: #333;
        }
        @media (max-width: 1024px) {
          .ev-hero-content {
            justify-content: center;
            align-items: center;
            padding: 120px 30px 40px;
            text-align: center;
          }
          .ev-hero-text {
            text-align: center;
          }
          .ev-hero-bar {
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .ev-hero-section {
            min-height: 85vh;
            height: auto;
          }
          .ev-hero-content {
            padding-top: 100px;
            padding-bottom: 40px;
          }
          .ev-hero-heading {
            font-size: 2rem;
          }
          .ev-hero-desc {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section className="ev-hero-section">
        <div className="ev-hero-image-wrap">
          <Image
            src={HERO_IMAGE}
            alt="Events"
            fill
            priority
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            sizes="100vw"
            quality={85}
            className="ev-hero-slide-image"
          />
        </div>

        <div className="ev-hero-overlay" />

        <div className="ev-hero-content">
          <div className="ev-hero-text">
            <div className="ev-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Events</span>
            </div>
            <h1 className="ev-hero-heading">{heading}</h1>
            <p className="ev-hero-desc">{description}</p>
            <div className="ev-hero-bar">
              <span className="ev-hero-bar-left" />
              <span className="ev-hero-bar-right" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
