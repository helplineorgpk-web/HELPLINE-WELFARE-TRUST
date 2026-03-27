import React from "react";
import styles from "../../../public/css/EducationsSection.module.css";
import Link from "next/link";

export default function Educations() {
  const cards = [
    {
      title: "Owned Schools",
      image: "/img/causes/cause13.jpg",
      description:
        "Structured, consistent, and values-based education for low-income communities.",
      href: "/ownSchools",
    },
    {
      title: "Adopted Schools",
      image: "/img/causes/bheel2.jpg",
      description: "Strengthening educational access through practical partnership and support.",
      href: "/adoptedSchools",
    },
    {
      title: "Orphan Care",
      image: "/img/orphanage/PHOTO-2025-02-19-11-48-26.jpg",
      description: "Connecting learning with care, routine, and belonging for orphaned children.",
      href: "/orphanage",
    },
    {
      title: "Vocational Training",
      image: "/img/orphanage/PHOTO-2025-02-19-11-59-36.jpg",
      description: "Skills-based training for employability, self-reliance, and dignity.",
      href: "/vocationalTrainingCenters",
    },
  ];

  return (
    <section className={styles.container} aria-labelledby="education-heading">
      <header className={styles.sectionHeader}>
        <h2 id="education-heading" className={styles.sectionTitle}>
          Education that Opens Doors
        </h2>
        <div className={styles.sectionLine} />
        <p className={styles.sectionSubtitle}>
          Helpline Welfare Trust works to make education possible for children from low-income and underserved communities across Pakistan
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
            Help a child continue learning
          </h3>
          <p className={styles.descriptionText}>
            Education changes the direction of a child&apos;s life. It gives confidence, discipline, hope, and the ability to dream beyond present circumstances. For families facing poverty,{" "}
            <strong>education is often the first thing to be interrupted</strong>. School fees, uniforms, books, and daily survival pressures can push children out of the classroom.
          </p>
          <p className={styles.descriptionText}>
            Helpline Welfare Trust works to{" "}
            <strong>keep that future alive</strong>. When a child stays in school, the impact reaches the entire family and often the next generation as well. Support education through student sponsorship, school operations, or school expansion and become part of a future built on{" "}
            <strong className={styles.highlight}>knowledge, dignity, and opportunity</strong>.
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
          href="/cause?category=Education"
          className={`${styles.ctaButton} g_btn hbtn_1 to_right1 rad-30 nav-donate-btn`}
        >
          Explore Our Education Programs<span></span>
        </Link>
      </div>
    </section>
  );
}
