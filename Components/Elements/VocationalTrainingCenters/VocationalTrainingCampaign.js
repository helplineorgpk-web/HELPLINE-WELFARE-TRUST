import React from "react";
import Image from "next/image";
import styles from "./VocationalTrainingCampaign.module.css";
import Link from "next/link";

export default function VocationalTrainingCampaign() {
  return (
    <main className={styles.container}>
      <div className={styles.backgroundOverlay}></div>

      <h1 className={styles.title}>
        <span>Vocational</span> Training Center
      </h1>

      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Join our mission to empower individuals through skill development and vocational training.
          Our Vocational Training Center provides quality education and hands-on experience in various
          technical fields to help create sustainable livelihoods.
        </p>
      </div>

      <section className={styles.imageGrid}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/img/Campaigns/Vocational.png"
            alt="Mohammad Yousaf Vocational Training Centre"
            width={600}
            height={600}
            className={styles.heroImage}
            priority
          />
        </div>

        <section className={styles.posterSection}>
          <div className={styles.posterContent}>
            <div className={styles.posterHeader}>
              <h2 className={styles.posterTitle}>Training Programs</h2>
              <p className={styles.posterDescription}>
                We offer comprehensive training in various technical fields to help
                individuals gain valuable skills for employment and entrepreneurship.
              </p>
            </div>

            <div className={styles.quoteContainer}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quoteText}>
                Empowering individuals through skill development is the key to
                creating sustainable livelihoods and stronger communities.
              </p>
              <p className={styles.quoteReference}>- Vocational Training Initiative</p>
            </div>

            <div className={styles.estimateBanner}>
              <span>ESTIMATE COST BREAKDOWN</span>
              <div className={styles.ribbonEnd}></div>
            </div>

            <div className={styles.costBreakdown}>
              <div className={styles.costItem}>
                <span className={styles.costLabel}>Tools & Machines</span>
                <span className={styles.costValue}>PKR 7 Million</span>
              </div>
              <div className={styles.costItem}>
                <span className={styles.costLabel}>Furniture</span>
                <span className={styles.costValue}>PKR 4 Million</span>
              </div>
              <div className={styles.costItem}>
                <span className={styles.costLabel}>Monthly Expense</span>
                <span className={styles.costValue}>PKR 635,000</span>
              </div>
              <div className={styles.totalCost}>
                <span className={styles.totalLabel}>TOTAL SETUP COST</span>
                <span className={styles.totalValue}>PKR 11 Million</span>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className={styles.contactInfo}>
        <div className={styles.contactHeader}>
          <h3 className={styles.contactTitle}>Contact Us</h3>
          <p className={styles.contactSubtitle}>For enrollment and inquiries</p>
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
              <p>vocational@helpline.org.pk</p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.donationCta}>
        <Link href="/donate" className={styles.donateButton}>
          <span>Support Our Cause</span>
          <span className={styles.buttonIcon}>❤️</span>
        </Link>
        <p className={styles.donationNote}>
          Your contribution helps us provide quality education and training
        </p>
      </div>
    </main>
  );
}
