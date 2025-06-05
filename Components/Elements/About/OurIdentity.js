import React from "react";
import styles from "../../../public/css/OurIdentity.module.css";

export default function OurIdentity() {
  const identityItems = [
    {
      id: 1,
      title: "Our Vision",
      icon: "/img/icons/vision.svg",
      description:
        "To create a society based on the principles of Mawakhat-e-Madina, where every individual has access to basic necessities and opportunities for growth.",
    },
    {
      id: 2,
      title: "Our Mission",
      icon: "/img/icons/mission.svg",
      description:
        "Mobilize the society to elevate the HAVE NOT’s through religious as well as modern education, technical training to make them productive members of Pakistani society.",
    },
    {
      id: 3,
      title: "Our Values",
      icon: "/img/icons/values.svg",
      description:
        "Transparency, compassion, and dedication guide our every action. We believe in empowering communities through collective responsibility and mutual support.",
    },
  ];

  return (
    <section className={styles.identitySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Who We Are</h2>
          <p>
            Helpline Welfare Trust is committed to creating positive change
            through sustainable social welfare initiatives, guided by the
            principles of compassion and community service.
          </p>
        </div>
        <div className={styles.identityGrid}>
          {identityItems.map((item) => (
            <div key={item.id} className={styles.identityCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
              </div>
              <div className={styles.cardContent}>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
