import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./OwnSchoolsDetail.module.css";

const IMAGE_SRC = "/img/causes/future.jpg";

export default function OwnSchoolsDetail() {
  return (
    <section className={styles.section} id="own-schools">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.contentBlock}>
            <span className={styles.badge}>Owned Schools</span>
            <h2 className={styles.sectionTitle}>Owned Schools</h2>
            <p className={styles.subtitle}>
              Structured, consistent, and values-based education for low-income communities
            </p>
            <div className={styles.content}>
              <p>
                Helpline operates its own schools to provide structured, consistent, and values-based education in communities where quality education is often out of reach for low-income families. These schools are more than physical buildings. They are daily spaces of discipline, growth, and belonging, where children are given the opportunity to learn in a stable environment.
              </p>
              <p>
                Your support helps us maintain schools, improve classrooms, strengthen learning environments, and expand access where more seats and more space are needed.
              </p>
            </div>
            <Link href="/ownSchools" className={styles.cta}>
              Learn More About Our Schools
            </Link>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imageFrame}>
              <Image
                src={IMAGE_SRC}
                alt="Students at an Al-Kitab school in Punjab"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
