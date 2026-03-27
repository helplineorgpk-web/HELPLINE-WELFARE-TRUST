import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./VocationalTrainingDetail.module.css";

const IMAGE_SRC = "/img/Campaigns/Vocational.jpg";

export default function VocationalTrainingDetail() {
  return (
    <section className={styles.section} id="vocational-training">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageFrame}>
              <Image
                src={IMAGE_SRC}
                alt="Vocational training at a Helpline center"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.contentBlock}>
            <span className={styles.badge}>Skills for Life</span>
            <h2 className={styles.sectionTitle}>Vocational Training Centers</h2>
            <p className={styles.subtitle}>
              Practical skills that help families stand on their own feet
            </p>
            <div className={styles.content}>
              <p>
                Helpline&apos;s vocational training work creates structured learning opportunities for people who need practical skills rather than academic pathways alone. These centres help participants gain the confidence and hands-on ability needed to begin earning or contributing to household income.
              </p>
              <p>
                Training includes hands-on practice, certification where applicable, and guidance on finding work or starting small businesses. Your support helps us run centres, buy equipment, and keep programs accessible to those who need them most.
              </p>
            </div>
            <Link href="/vocationalTrainingCenters" className={styles.cta}>
              Explore Vocational Training
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
