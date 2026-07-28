import React from "react";
import Image from "next/image";
import styles from "./FloodReliefCampaign.module.css";
import Link from "next/link";

export default function FloodReliefCampaign() {
  return (
    <main className={styles.container}>
      <div className={styles.backgroundOverlay}></div>

      <h1 className={styles.title}>
        <span>Flood Relief</span> Project
      </h1>

      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Join our mission to provide immediate relief to flood-affected families across Pakistan. 
          Our Flood Relief Project ensures that families who have lost everything in devastating floods 
          receive essential supplies, shelter, and support to rebuild their lives.
        </p>
        <div className={styles.arabicCalligraphy}>
          <span>وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ</span>
          <p>
            "And whoever relies upon Allah - then He is sufficient for him"
          </p>
        </div>
      </div>

      <section className={styles.imageGrid}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/img/Campaigns/Flood.jpg"
            alt="Flood Relief Project Main Image"
            width={600}
            height={600}
            className={styles.heroImage}
            priority
          />
        </div>

        <section className={styles.posterSection}>
          <div className={styles.posterContent}>
            <div className={styles.posterHeader}>
              <h2 className={styles.posterTitle}>FLOOD RELIEF PROJECT</h2>
              <h3 className={styles.posterSubtitle}>
                - HELPING FAMILIES REBUILD -
              </h3>
            </div>
            <div className={styles.posterBody}>
              <p className={styles.posterDescription}>
                Your contribution can provide immediate relief to families affected by devastating floods. 
                Each relief package contains essential items including food, clean water, medical supplies, 
                and temporary shelter materials.
              </p>
              <div className={styles.quoteContainer}>
                <div className={styles.quoteIcon}>❝</div>
                <p className={styles.quoteText}>
                  "The believer's shade on the Day of Resurrection will be his charity"
                </p>
                <p className={styles.quoteReference}>[Tirmidhi]</p>
              </div>
            </div>

            <div className={styles.estimateBanner}>
              <span>RELIEF PACKAGES</span>
              <div className={styles.ribbonEnd}></div>
            </div>

            <div className={styles.costBreakdown}>
              <div className={styles.costItem}>
                <span className={styles.costLabel}>FOOD PACKAGE</span>
                <span className={styles.costValue}>PKR 8,500</span>
              </div>
              <div className={styles.costItem}>
                <span className={styles.costLabel}>SHELTER TENTS</span>
                <span className={styles.costValue}>PKR 26,000</span>
              </div>

              <div className={styles.totalCost}>
                <span className={styles.totalLabel}>TARGET FAMILIES</span>
                <span className={styles.totalValue}>500+ FAMILIES</span>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Video Section */}
      <section className={styles.videoSection}>
        <h3 className={styles.videoTitle}>Field Highlights</h3>
        <div className={styles.videoGrid}>
          {[
            "https://www.youtube.com/embed/ZInXZyg415I",
            "https://www.youtube.com/embed/jLenr6vBc8Q",
            "https://www.youtube.com/embed/jCcZ6VaiTpg",
          ].map((src, idx) => (
            <div className={styles.videoWrapper} key={idx}>
              <iframe
                className={styles.videoIframe}
                src={src}
                title={`Flood Relief - Video ${idx + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.gallerySection}>
        <h3 className={styles.galleryTitle}>Relief Distribution & Impact</h3>
        <div className={styles.imageGrids}>
          {[
            "/img/ranatownflood/ranatownflood1.png",
            "/img/ranatownflood/ranatownflood2.png",
            "/img/ranatownflood/ranatownflood3.png",
            "/img/ranatownflood/ranatownflood4.png",
            "/img/ranatownflood/ranatownflood5.png",
            "/img/ranatownflood/ranatownflood6.png",
            "/img/ranatownflood/ranatownflood7.png",
            "/img/ranatownflood/ranatownflood8.png",
            "/img/ranatownflood/ranatownflood9.png",
            "/img/ranatownflood/ranatownflood10.png",
            "/img/ranatownflood/ranatownflood11.png",
            "/img/ranatownflood/ranatownflood12.png",
            "/img/Campaigns/Flood.jpg",
            "/img/causes/causeheader.png",
            "/img/causes/freemedical.jpg",
            "/img/causes/karbathhospital.JPG",
            "/img/causes/labtest.png",
            "/img/causes/ultrasound.jpg",
          ].map((src, index) => (
            <div className={styles.imageCard} key={src}>
              <div className={styles.imageWrapper}>
                <Image
                  src={src}
                  alt={`Flood Relief Distribution ${index + 1}`}
                  width={500}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.imageOverlay}>
                <span>
                  {src.includes("ranatownflood")
                    ? `Rana Town Flood ${index + 1}`
                    : `Relief Distribution ${index + 1}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contactInfo}>
        <div className={styles.contactHeader}>
          <p className={styles.contactSubtitle}>For emergency donations and inquiries</p>
        </div>

        <div className={styles.donationCta}>
          <Link href="/donation" className={styles.donateButton}>
            Contact Us
            <span className={styles.buttonIcon}>🤲</span>
          </Link>
          <p className={styles.donationNote}>
            Your contribution can help a family rebuild their life after flood devastation
          </p>
        </div>
      </section>
    </main>
  );
}
