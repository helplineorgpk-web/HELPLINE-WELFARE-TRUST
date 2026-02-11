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
    <div className={styles.container}>
      <h3>Al-Kitab Education System</h3>
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
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <Link className={`${styles.button} g_btn hbtn_1 to_right1 rad-30 nav-donate-btn`} href={card.href}>
                    Learn More<span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.description}>
        <p>
          Education is the key to a brighter future, yet millions of children
          lack access due to financial constraints. Charity for education
          services helps bridge this gap by providing quality learning
          resources, scholarships, and safe environments. By supporting such
          initiatives, we empower young minds, break the cycle of poverty, and
          create opportunities for a more equitable society. Education fosters
          confidence, critical thinking, and better job prospects, strengthening
          communities and driving progress. Every contribution, big or small,
          helps turn education from a privilege into a right, ensuring every
          child has the chance to learn, grow, and succeed. Together, we can
          create a world where no child is left behind in their pursuit of
          knowledge.
        </p>
        <div className={styles.videoContainer}>
          <div className={styles.videoWrapper}>
            <video controls className={styles.video}>
              <source
                src="/img/orphanage/VIDEO-2025-02-19-12-04-34.mp4"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link
          href="/cause"
          className="g_btn hbtn_1 to_right1 rad-30 nav-donate-btn"
        >
          See More<span></span>
        </Link>
      </div>
    </div>
  );
}
