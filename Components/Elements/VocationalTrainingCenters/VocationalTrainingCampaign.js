import React from "react";
import Image from "next/image";
import styles from "./VocationalTrainingCampaign.module.css";
import Link from "next/link";
import Programs from "./programs";

export default function VocationalTrainingCampaign() {
  return (
    <main className={styles.container}>
      <div className={styles.backgroundOverlay}></div>

      <h1 className={styles.title}>
        <span>Vocational</span> Training Center
      </h1>

      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Helpline&apos;s vocational training work creates structured learning opportunities for people who need practical skills rather than academic pathways alone. These centres help participants gain the confidence and hands-on ability needed to begin earning or contributing to household income. Skill-building replaces uncertainty with ability and dependence with confidence, giving people a practical route toward income, dignity, and self-respect under the umbrella of{" "}
          <span style={{ fontWeight: "bold", color: "#f15b43" }}>
            MAWAKHAT-E-MADINA
          </span>
          .
        </p>
      </div>
      <Programs />
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
                Workshop-based skills training designed around outcomes: better preparation, greater confidence, and stronger income potential for deserving individuals.
              </p>
            </div>

            <div className={styles.quoteContainer}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quoteText}>
                A trained person is more prepared. A skilled person has more choices. A family with income potential has more room to breathe.
              </p>
              <p className={styles.quoteReference}>
                - Vocational Training Initiative
              </p>
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
                <span className={styles.costValue}>PKR 1.3 million (per month)</span>
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
