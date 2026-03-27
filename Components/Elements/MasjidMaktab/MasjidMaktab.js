import React from "react";
import Image from "next/image";
import styles from "./MasjidMaktab.module.css";
import Link from "next/link";

export default function MasjidMaktab() {
  return (
    <main className={styles.container}>
      <div className={styles.backgroundOverlay}></div>

      <h1 className={styles.title}>
        <span>Al-Kitab</span> Masjid & Maktab School
      </h1>

      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Masjid and Maktab support helps strengthen community worship and religious learning. When this work is linked to education spaces such as Al-Kitab, it supports both spiritual development and community connection. Helpline has established primary schools in the masjid basement, where association of younger children is gradually developed with the masjid. This school, besides teaching the regular syllabus, focuses on Tarbiyat of students. The masjid serves as a community hub for addressing social and other needs of the dependent population.
        </p>
        <div className={styles.arabicCalligraphy}>
          <span>مَسْجِدٌ أُسِّسَ عَلَى التَّقْوَىٰ</span>
          <p>"A mosque founded on righteousness" (Quran 9:108)</p>
        </div>
      </div>

      <section className={styles.imageGrid}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/img/Campaigns/MASJID.jpg"
            alt="Main Masjid Poster"
            width={600}
            height={600}
            className={styles.heroImage}
            priority
          />
        </div>

        <section className={styles.posterSection}>
          <div className={styles.posterContent}>
            <div className={styles.posterHeader}>
              <h2 className={styles.posterTitle}>BUILD MASJID</h2>
              <h3 className={styles.posterSubtitle}>
                - SUPPORT FOR MAKING MOSQUE -
              </h3>
            </div>
            <div className={styles.posterBody}>
              <p className={styles.posterDescription}>
                Take a small step for a big reward! Let's donate and build a
                masjid where students learn Quran and perform all Islamic
                activities. Every contribution you make brings Barakah!
              </p>
              <div className={styles.quoteContainer}>
                <div className={styles.quoteIcon}>❝</div>
                <p className={styles.quoteText}>
                  "Whoever builds a mosque for Allah, Allah will build for him a
                  house like it in Paradise."
                </p>
                <p className={styles.quoteReference}>[Sahih al-Bukhari 450]</p>
              </div>
            </div>

            <div className={styles.estimateBanner}>
              <span>OVERALL ESTIMATE COST</span>
              <div className={styles.ribbonEnd}></div>
            </div>
          </div>
        </section>
      </section>
      <div className={styles.costBreakdown}>
        <div className={styles.costItem}>
          <span className={styles.costLabel}>BASEMENT</span>
          <span className={styles.costValue}>PKR 50 MILLIONS (Completed)</span>
        </div>
        <div className={styles.costItem}>
          <span className={styles.costLabel}>GROUND FLOOR</span>
          <span className={styles.costValue}>
            PKR 40 MILLIONS (Under Construction)
          </span>
        </div>
        <div className={styles.costItem}>
          <span className={styles.costLabel}>
            1<sup>ST</sup> FLOOR
          </span>
          <span className={styles.costValue}>PKR 38 MILLION</span>
        </div>
        <div className={styles.totalCost}>
          <span className={styles.totalLabel}> REQUIRED TOTAL</span>
          <span className={styles.totalValue}>PKR 78 MILLIONS</span>
        </div>
     
      </div>

      <section className={styles.gallerySection}>
        <h3 className={styles.galleryTitle}>Project Progress & Visuals</h3>
        <div className={styles.imageGrids}>
          {[
            "/img/masjid/PHOTO-2025-06-04-14-17-46.jpg",
            "/img/masjid/PHOTO-2025-06-04-17-04-02.jpg",
            "/img/masjid/PHOTO-2025-06-04-17-04-03.jpg",
            "/img/masjid/PHOTO-2025-06-04-17-04-022.jpg",
            "/img/masjid/PHOTO-2025-06-04-17-04-032.jpg",
            "/img/masjid/PHOTO-2025-06-04-17-04-033.jpg",
          ].map((src, index) => (
            <div className={styles.imageCard} key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  src={src}
                  alt={`Masjid Image ${index + 1}`}
                  width={500}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.imageOverlay}>
                <span>Phase {index + 1}</span>
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
              <p>+92 321 4388352</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📧</div>
            <div className={styles.contactText}>
              <span>Email</span>
              <p>info@helpline.org.pk</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>🏢</div>
            <div className={styles.contactText}>
              <span>Address</span>
              <p>Al-Kitab Masjid, Lahore, Pakistan</p>
            </div>
          </div>
        </div>
        <div className={styles.donationCta}>
          <Link href="/donation" className={styles.donateButton}>
            Donate Now
            <span className={styles.buttonIcon}>🕌</span>
          </Link>
          <p className={styles.donationNote}>
            Every contribution brings us closer to completing this blessed
            project
          </p>
        </div>
      </section>
    </main>
  );
}
