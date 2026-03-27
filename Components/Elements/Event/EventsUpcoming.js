"use client";
import React from "react";
import Image from "next/image";

const UPCOMING_TITLE = "UPCOMING EVENTS";
const UPCOMING_DESC =
  "Helpline Welfare Trust events are more than gatherings, they are moments of hope, unity, and action. From fundraising galas and awareness campaigns to community-driven initiatives across Pakistan, each event brings people together to uplift lives and build a brighter future.";

const UPCOMING_EVENTS = [
  {
    id: "michigan-gala",
    title: "MICHIGAN NETWORK ANNUAL GALA",
    slogan1: "LET'S MAKE A LASTING IMPACT",
    slogan2: "CELEBRATING 25 YEARS OF IMPACTFUL SERVICE",
    dateText: "TBA — Reserve your seat today!",
    // Replace with your event image, e.g. /img/events/michigan-gala.jpg
    eventImage: "/img/bg/breadcrum_bg_2.jpg",
  },
];

export default function EventsUpcoming() {
  return (
    <>
      <style>{`
        .ev-upcoming {
          background: #fff;
          padding: 4rem 1.5rem 5rem;
        }
        .ev-upcoming .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .ev-upcoming-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .ev-upcoming-title {
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 0.5rem 0;
          letter-spacing: 0.02em;
        }
        .ev-upcoming-underline {
          width: 80px;
          height: 3px;
          background: #5dade2;
          margin: 0 auto 1.25rem;
        }
        .ev-upcoming-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: #718096;
          max-width: 800px;
          margin: 0 auto;
        }
        .ev-upcoming-cards {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .ev-upcoming-poster {
          background: #0f766e;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
          min-height: 420px;
        }
        .ev-poster-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border-radius: 16px;
        }
        .ev-poster-image img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        @media (max-width: 768px) {
          .ev-upcoming-poster {
            min-height: 320px;
          }
        }
      `}</style>

      <section className="ev-upcoming">
        <div className="container">
          <div className="ev-upcoming-header">
            <h2 className="ev-upcoming-title">{UPCOMING_TITLE}</h2>
            <div className="ev-upcoming-underline" />
            <p className="ev-upcoming-desc">{UPCOMING_DESC}</p>
          </div>

          <div className="ev-upcoming-cards">
            {UPCOMING_EVENTS.map((event) => (
              <div key={event.id} className="ev-upcoming-poster">
                <div className="ev-poster-image">
                  <Image
                    src={event.eventImage}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
