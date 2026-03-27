"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const PAST_TITLE = "PAST EVENTS";
const PAST_DESC =
  "Past events highlight the milestones and collective efforts that have shaped the journey";

const PAST_EVENTS = [
  {
    id: "seattle",
    type: "card",
    title: "Seattle Annual Fundraiser",
    subtitle: "Join us for our Annual Fundraiser Dinner",
    dateBadge: "Jan 24, 2026 7:00 PM",
    location: "Muslim Association of Puget Sound, 17550 NE 67th Ct. Redmond WA 98052",
    description:
      "Celebrating 25 years of Impactful Service. Join us for an inspiring evening hosted by Helpline Welfare Trust.",
    image: "/img/causes/karbathheader.png",
  },
  {
    id: "dmv",
    type: "card",
    title: "Helpline Welfare Trust DMV Network Annual Fundraiser Gala",
    dateBadge: "Sep 20, 2025 6:00 PM",
    location: "Martin's Crosswinds 7400 Greenway Center Dr. Greenbelt, MD 20770",
    description:
      "Entertainment by Ahmed Jehanzeb. Join us for an inspiring evening hosted by Helpline Welfare Trust.",
    image: "/img/bg/breadcrum_bg_2.jpg",
  },
  {
    id: "tampa",
    type: "card",
    title: "Helpline Welfare Trust Tampa Network Annual Fundraiser Gala",
    dateBadge: "Sep 13, 2025 6:30 PM",
    location: "CEC 5514 Baptist Church Rd., Tampa, FL 33610",
    description:
      "Join us for an inspiring evening hosted by Helpline Welfare Trust, dedicated to giving back and empowering communities.",
    image: "/img/bg/breadcrum_bg_2.jpg",
  },
];

export default function EventsPast() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  React.useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const step = 340;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
    setTimeout(checkScroll, 350);
  };

  return (
    <>
      <style>{`
        .ev-past {
          background: #fff;
          padding: 4rem 0 5rem;
        }
        .ev-past .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .ev-past-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .ev-past-title {
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 0.5rem 0;
          letter-spacing: 0.02em;
        }
        .ev-past-underline {
          width: 80px;
          height: 3px;
          background: #5dade2;
          margin: 0 auto 1.25rem;
        }
        .ev-past-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: #718096;
          max-width: 700px;
          margin: 0 auto;
        }
        .ev-past-carousel-wrap {
          position: relative;
          padding: 0 3rem;
        }
        .ev-past-carousel {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 0.5rem 0;
        }
        .ev-past-carousel::-webkit-scrollbar {
          display: none;
        }
        .ev-past-card-wrap {
          flex: 0 0 auto;
          scroll-snap-align: start;
          width: 320px;
          min-height: 400px;
        }
        .ev-past-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #e2e8f0;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: background 0.2s;
        }
        .ev-past-arrow:hover {
          background: #cbd5e0;
        }
        .ev-past-arrow:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .ev-past-arrow.left {
          left: 0;
        }
        .ev-past-arrow.right {
          right: 0;
        }
        .ev-past-arrow svg {
          width: 20px;
          height: 20px;
          color: #4a5568;
        }
        /* Poster-style card (Seattle) */
        .ev-card-poster {
          background: #e0f2fe;
          border-radius: 12px;
          overflow: hidden;
          padding: 1.25rem;
          min-height: 420px;
          display: flex;
          flex-direction: column;
        }
        .ev-card-poster-logo {
          font-size: 0.65rem;
          font-weight: 700;
          color: #1e3a5f;
          margin-bottom: 0.5rem;
          letter-spacing: 0.03em;
        }
        .ev-card-poster-logo-tag {
          font-size: 0.6rem;
          font-weight: 500;
          color: #475569;
        }
        .ev-card-poster-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0.5rem 0 0.2rem 0;
          line-height: 1.3;
        }
        .ev-card-poster-sub {
          font-size: 0.8rem;
          color: #64748b;
          margin-bottom: 0.75rem;
        }
        .ev-card-poster-img {
          width: 100%;
          height: 160px;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          background: #94a3b8;
          margin-bottom: 0.75rem;
        }
        .ev-card-poster-info {
          font-size: 0.75rem;
          color: #334155;
          line-height: 1.5;
          margin-bottom: 0.5rem;
        }
        .ev-card-poster-badge {
          margin-top: auto;
          display: inline-block;
          background: #334155;
          color: #fff;
          font-size: 0.7rem;
          padding: 0.35rem 0.6rem;
          border-radius: 4px;
          font-weight: 600;
        }
        .ev-card-poster-summary {
          margin-top: 0.75rem;
        }
        .ev-card-poster-summary-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 0.25rem 0;
        }
        .ev-card-poster-summary-loc {
          font-size: 0.8rem;
          color: #475569;
        }
        /* Standard card */
        .ev-card-standard {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
          min-height: 400px;
          height: 100%;
        }
        .ev-card-standard:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.12);
        }
        .ev-card-standard-banner {
          width: 100%;
          height: 140px;
          position: relative;
          background: #cbd5e0;
        }
        .ev-card-standard-body {
          padding: 1rem 1.25rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .ev-card-standard-badge {
          display: inline-block;
          background: #334155;
          color: #fff;
          font-size: 0.7rem;
          padding: 0.35rem 0.6rem;
          border-radius: 4px;
          font-weight: 600;
          margin-bottom: 0.5rem;
          align-self: flex-start;
        }
        .ev-card-standard-title {
          font-size: 1rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 0.5rem 0;
          line-height: 1.35;
        }
        .ev-card-standard-loc {
          font-size: 0.8rem;
          color: #475569;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }
        .ev-card-standard-desc {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.5;
          flex: 1;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .ev-card-standard-btn {
          display: inline-block;
          padding: 0.5rem 1rem;
          border: 1px solid #cbd5e0;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          align-self: flex-start;
        }
        .ev-card-standard-btn:hover {
          background: #f1f5f9;
          color: #1e293b;
        }
        @media (max-width: 768px) {
          .ev-past-carousel-wrap {
            padding: 0 0.5rem;
          }
          .ev-past-arrow {
            width: 36px;
            height: 36px;
          }
          .ev-past-arrow.left { left: -4px; }
          .ev-past-arrow.right { right: -4px; }
          .ev-past-card-wrap {
            width: 280px;
          }
        }
      `}</style>

      <section className="ev-past">
        <div className="container">
          <div className="ev-past-header">
            <h2 className="ev-past-title">{PAST_TITLE}</h2>
            <div className="ev-past-underline" />
            <p className="ev-past-desc">{PAST_DESC}</p>
          </div>

          <div className="ev-past-carousel-wrap">
            <button
              type="button"
              className="ev-past-arrow left"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous events"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            <div
              className="ev-past-carousel"
              ref={scrollRef}
              onScroll={checkScroll}
            >
              {PAST_EVENTS.map((event) => (
                <div key={event.id} className="ev-past-card-wrap">
                  <div className="ev-card-standard">
                    <div className="ev-card-standard-banner">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        sizes="320px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="ev-card-standard-body">
                      <span className="ev-card-standard-badge">
                        {event.dateBadge}
                      </span>
                      <h3 className="ev-card-standard-title">
                        {event.title}
                      </h3>
                      <p className="ev-card-standard-loc">
                        Location: {event.location}
                      </p>
                      <p className="ev-card-standard-desc">
                        {event.description}
                      </p>
                      <Link
                        href={`/event-details?id=${event.id}`}
                        className="ev-card-standard-btn"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="ev-past-arrow right"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next events"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
