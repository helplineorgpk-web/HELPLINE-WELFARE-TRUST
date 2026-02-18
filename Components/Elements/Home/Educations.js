import React from "react";
import styles from "../../../public/css/EducationsSection.module.css";
import Link from "next/link";

export default function Educations() {
  const cards = [
    {
      title: "8 Own School In Punjab",
      image: "/img/causes/cause13.jpg",
      description:
        "A network of schools providing quality education in Punjab.",
      href: "/ownSchools",
    },
    {
      title: "15 Adopted Schools",
      image: "/img/causes/bheel2.jpg",
      description: "Supporting and nurturing adopted schools with passion.",
      href: "/adoptedSchools",
    },
    {
      title: "Orphanage Home",
      image: "/img/orphanage/PHOTO-2025-02-19-11-48-26.jpg",
      description: "Empowering orphanage children with education and care.",
      href: "/orphanage",
    },
    {
      title: "Vocational Training Centers",
      image: "/img/orphanage/PHOTO-2025-02-19-11-59-36.jpg",
      description: "Providing vocational training for a better future.",
      href: "/vocationalTrainingCenters",
    },
  ];

  return (
    <section className={styles.container} aria-labelledby="education-heading">
      <header className={styles.sectionHeader}>
        <p className={styles.sectionLabel}>Our Impact</p>
        <h2 id="education-heading" className={styles.sectionTitle}>
          Al-Kitab Education System
        </h2>
        <p className={styles.sectionSubtitle}>
          Quality education and care for thousands of children across Pakistan
        </p>
      </header>
      <div className={styles.content_container}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardInner}>
              <div
                className={styles.cardFront}
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className={styles.cardTitle}>{card.title}</div>
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitleBack}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <Link className={styles.button} href={card.href}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.description}>
        <div className={styles.descriptionContent}>
          <h3 className={styles.descriptionTitle}>
            Education is the key to a brighter future
          </h3>
          <p className={styles.descriptionText}>
            Millions of children lack access due to financial constraints.{" "}
            <strong>Charity for education</strong> helps bridge this gap by
            providing quality learning resources, scholarships, and safe
            environments. By supporting our initiatives, we{" "}
            <strong>empower young minds</strong>, break the cycle of poverty,
            and create opportunities for a more equitable society.
          </p>
          <p className={styles.descriptionText}>
            Education fosters confidence, critical thinking, and better job
            prospects, strengthening communities and driving progress. Every
            contribution, big or small, helps turn education from a privilege
            into a right—ensuring every child can{" "}
            <strong>learn, grow, and succeed</strong>. Together, we can create
            a world where{" "}
            <strong className={styles.highlight}>no child is left behind</strong>{" "}
            in their pursuit of knowledge.
          </p>
        </div>
        <div className={styles.videoContainer}>
          <div className={styles.videoWrapper}>
            <video
              controls
              className={styles.video}
              poster="/img/causes/cause13.jpg"
              preload="metadata"
              aria-label="Helpline education and orphanage impact video"
            >
              <source
                src="/img/orphanage/VIDEO-2025-02-19-12-04-34.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className={styles.ctaWrapper}>
        <Link
          href="/cause"
          className={`${styles.ctaButton} g_btn hbtn_1 to_right1 rad-30 nav-donate-btn`}
        >
          Explore Our Education Programs<span></span>
        </Link>
      </div>
    </section>
  );
}
