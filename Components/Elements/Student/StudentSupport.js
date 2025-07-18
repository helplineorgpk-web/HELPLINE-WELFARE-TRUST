import React from "react";
import Image from "next/image";
import styles from "./StudentSupport.module.css";
import Link from "next/link";

export default function StudentSupport() {
  return (
    <main className={styles.container}>
      <div className={styles.backgroundOverlay}></div>

      <h1 className={styles.title}>
        <span>Support</span> A Student
      </h1>

      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Join Helpline to bring out of school children to school. our mission
          is to support destitude Families empower their children through
          education. Our Support A Student Campaign has succeeded in bringing
          over 2000 such children Who's parents cannot afford to send their
          children to schools. Together, we can build a brighter future for such
          deserving students.
        </p>
        <div className={styles.arabicCalligraphy}>
          <span>طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ</span>
          <p>"Seeking knowledge is obligatory upon every Muslim"</p>
        </div>
      </div>

      <section className={styles.imageGrid}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/img/Campaigns/student.png"
            alt="Support A Student Campaign"
            width={600}
            height={600}
            className={styles.heroImage}
            priority
          />
        </div>

        <section className={styles.posterSection}>
          <div className={styles.posterContent}>
            <div className={styles.posterHeader}>
              <h2 className={styles.posterTitle}>STUDENT A SUPPORT</h2>
              <h3 className={styles.posterSubtitle}>
                - EMPOWER THROUGH EDUCATION -
              </h3>
            </div>
            <div className={styles.posterBody}>
              <p className={styles.posterDescription}>
                Your contribution can help an out of school student to seek
                brighter future achieve their dreams. Each sponsorship package
                covers essential educational expenses including tuition, books,
                and supplies.
              </p>
              <div className={styles.quoteContainer}>
                <div className={styles.quoteIcon}>❝</div>
                <p className={styles.quoteText}>
                  "Whoever follows a path in pursuit of knowledge, Allah will
                  make easy for them a path to Paradise"
                </p>
                <p className={styles.quoteReference}>[Sahih Muslim]</p>
              </div>
            </div>

            <div className={styles.estimateBanner}>
              <span>CAMPAIGN DETAILS</span>
              <div className={styles.ribbonEnd}></div>
            </div>

            <div className={styles.costBreakdown}>
              <div className={styles.costItem}>
                <span className={styles.costLabel}>CAMPAIGN GOAL</span>
                <span className={styles.costValue}>
                  PKR 211.2 Million (per year)
                </span>
              </div>
              <div className={styles.costItem}>
                <span className={styles.costLabel}>RAISED SO FAR</span>
                <span className={styles.costValue}>PKR 27.6 Million</span>
              </div>
              <div className={styles.costItem}>
                <span className={styles.costLabel}>BASIC PACKAGE</span>
                <span className={styles.costValue}>PKR 2200</span>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className={styles.gallerySection}>
        <h3 className={styles.galleryTitle}>Our Impact & Success Stories</h3>
        <div className={styles.imageGrids}>
          {[
            "/img/causes/alkitab.jpg",
            "/img/causes/bheel1.jpg",
            "/img/causes/roru1.jpg",
            "/img/causes/nimro1.jpg",
            "/img/causes/tandusindh1.jpg",
            "/img/causes/cause13.jpg",
          ].map((src, index) => (
            <div className={styles.imageCard} key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  src={src}
                  alt={`Student Success Story ${index + 1}`}
                  width={500}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.imageOverlay}>
                <span>Success Story {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contactInfo}>
        <div className={styles.contactHeader}>
          <h3 className={styles.contactTitle}>Contact Us</h3>
          <p className={styles.contactSubtitle}>
            For sponsorship and inquiries
          </p>
        </div>
        <div className={styles.contactItems}>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📞</div>
            <div className={styles.contactText}>
              <span>Phone</span>
              <p>+92 300 1234567</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📧</div>
            <div className={styles.contactText}>
              <span>Email</span>
              <p>education@helpline.org</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>🏢</div>
            <div className={styles.contactText}>
              <span>Address</span>
              <p>Helpline Office, Lahore, Pakistan</p>
            </div>
          </div>
        </div>
        <div className={styles.donationCta}>
          <Link href="/donation" className={styles.donateButton}>
            Sponsor Now
            <span className={styles.buttonIcon}>📚</span>
          </Link>
          <p className={styles.donationNote}>
            Your contribution can help shape a student's future
          </p>
        </div>
      </section>
    </main>
  );
}
