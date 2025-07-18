import React from "react";
import Image from "next/image";
import styles from "./RashanCampaign.module.css";
import Link from "next/link";

export default function RashanCampaign() {
  return (
    <main className={styles.container}>
      <div className={styles.backgroundOverlay}></div>

      <h1 className={styles.title}>
        <span>Rashan</span> Campaign
      </h1>

      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Join our mission to provide essential food supplies to families in
          need. Our Rashan Campaign ensures that no family goes hungry by
          distributing quality grocery packages to those facing financial
          hardship.
        </p>
        <div className={styles.arabicCalligraphy}>
          <span>مَن فَرَّجَ عَن مُؤمِنٍ كُربَةً</span>
          <p>
            "Whoever relieves a believer's hardship, Allah will relieve their
            hardship on the Day of Judgment"
          </p>
        </div>
      </div>

      <section className={styles.imageGrid}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/img/Campaigns/Grocery.png"
            alt="Rashan Campaign Main Image"
            width={600}
            height={600}
            className={styles.heroImage}
            priority
          />
        </div>

        <section className={styles.posterSection}>
          <div className={styles.posterContent}>
            <div className={styles.posterHeader}>
              <h2 className={styles.posterTitle}>RASHAN CAMPAIGN</h2>
              <h3 className={styles.posterSubtitle}>
                - SUPPORT FAMILIES IN NEED -
              </h3>
            </div>
            <div className={styles.posterBody}>
              <p className={styles.posterDescription}>
                Your contribution can make a significant difference in someone's
                life. Each Rashan package contains essential food items that can
                sustain a family for up to one month.
              </p>
              <div className={styles.quoteContainer}>
                <div className={styles.quoteIcon}>❝</div>
                <p className={styles.quoteText}>
                  "The best charity is giving food to the hungry"
                </p>
                <p className={styles.quoteReference}>[Musnad Ahmad]</p>
              </div>
            </div>

            <div className={styles.estimateBanner}>
              <span>PACKAGE BREAKDOWN</span>
              <div className={styles.ribbonEnd}></div>
            </div>

            <div className={styles.costBreakdown}>
              <div className={styles.costItem}>
                <span className={styles.costLabel}>BASIC PACKAGE</span>
                <span className={styles.costValue}>PKR 6,000</span>
              </div>

              <div className={styles.totalCost}>
                <span className={styles.totalLabel}>MONTHLY TARGET</span>
                <span className={styles.totalValue}>100+ FAMILIES</span>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className={styles.gallerySection}>
        <h3 className={styles.galleryTitle}>Distribution & Impact</h3>
        <div className={styles.imageGrids}>
          {[
            "/img/rashan/bahawalpurrashan.jpg",
            "/img/rashan/bahawalpurrashan2.jpg",
            "/img/rashan/gojrarashan2.jpg",
            "/img/rashan/irtikaschoolrashan2.jpg",
            "/img/rashan/noshkirashan2.jpg",
            "/img/rashan/rajanpurrashan2.jpg",
          ].map((src, index) => (
            <div className={styles.imageCard} key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  src={src}
                  alt={`Rashan Distribution ${index + 1}`}
                  width={500}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.imageOverlay}>
                <span>Distribution {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contactInfo}>
        <div className={styles.contactHeader}>
          <h3 className={styles.contactTitle}>Contact Us</h3>
          <p className={styles.contactSubtitle}>For donations and inquiries</p>
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
              <p>rashan@helpline.org</p>
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
            Donate Now
            <span className={styles.buttonIcon}>🤲</span>
          </Link>
          <p className={styles.donationNote}>
            Your contribution can help feed a family for an entire month
          </p>
        </div>
      </section>
    </main>
  );
}
