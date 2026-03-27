import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./OrphanageDetail.module.css";

const IMAGE_SRC = "/img/orphanage/PHOTO-2025-02-19-11-59-36.jpg";

export default function OrphanageDetail() {
  return (
    <section className={styles.section} id="orphanage">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.contentBlock}>
            <span className={styles.badge}>Care & Education</span>
            <h2 className={styles.sectionTitle}>Orphan Care within Education</h2>
            <p className={styles.subtitle}>
              Connecting learning with care, routine, and belonging
            </p>
            <div className={styles.content}>
              <p>
                For children without stable family support, education becomes even more important. Helpline&apos;s education work connects learning with care, routine, and belonging so orphaned children do not lose their chance to build a stable life.
              </p>
              <p>
                Supporting this program helps cover school fees, books, uniforms, and daily care so each child can build confidence, learn consistently, and begin to imagine a different future.
              </p>
            </div>
            <Link href="/orphanage" className={styles.cta}>
              Learn More About Orphanage Care
            </Link>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imageFrame}>
              <Image
                src={IMAGE_SRC}
                alt="Children at Helpline orphanage home"
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
