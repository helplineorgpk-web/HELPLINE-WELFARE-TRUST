import React from "react";
import Image from "next/image";
import styles from "./RealChangeSection.module.css";

const IMPACT_BULLETS = [
  "Poverty has dropped in Helpline Welfare Trust areas from 46% to 40%, while it remains 49% in the rest of Pakistan",
  "Thousands of girls are in school, many for the first time in their families",
  "Women are leading change in over 1,600 Village Development Organizations",
  "12,000+ men and women have gained vocational skills and improved their livelihoods",
  "99.5% of children under age 2 in Helpline Welfare Trust areas are fully immunized against preventable diseases",
];

const HERO_IMAGE = "/img/causes/cause1.jpg";

export default function RealChangeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <Image
              src={HERO_IMAGE}
              alt="Children and community beneficiaries"
              width={640}
              height={420}
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>Real Change. Because of You.</h2>
            <p className={styles.paragraph}>
            Helpline Welfare Trust is not a traditional relief organization. We don&apos;t offer band-aid solutions, we build futures.
            </p>
            <p className={styles.paragraph}>
              In 1997, a group of passionate Pakistani-Americans founded the <strong>Helpline Welfare Trust</strong>. By 1999, Helpline Welfare Trust Pakistan was launched to turn a bold vision into action:
            </p>
            <p className={styles.paragraph}>
              A Pakistan where every child goes to school, every family has access to healthcare, and every village is vibrant, self-reliant, and free from poverty.
            </p>
            <p className={styles.tagline}>Together, We&apos;re Making That Vision Real</p>
          </div>
        </div>

        <div className={styles.becauseOf}>
          <h3 className={styles.becauseTitle}>Because of supporters like you:</h3>
          <ul className={styles.bulletList}>
            {IMPACT_BULLETS.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className={styles.philosophy}>
            <strong>We Don&apos;t Just Fight Poverty—We End It</strong> By integrating education, health, livelihoods, and social empowerment, Helpline Welfare Trust helps communities build lasting, local solutions. And every milestone we reach is made possible by donors like you.
          </p>
        </div>
      </div>
    </section>
  );
}
