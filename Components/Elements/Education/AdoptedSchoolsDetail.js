import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./AdoptedSchoolsDetail.module.css";

const IMAGE_SRC = "/img/causes/cause13.jpg";

export default function AdoptedSchoolsDetail() {
  return (
    <section className={styles.section} id="adopted-schools">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageFrame}>
              <Image
                src={IMAGE_SRC}
                alt="Children at an adopted school supported by Helpline"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.contentBlock}>
            <span className={styles.badge}>Partnership</span>
            <h2 className={styles.sectionTitle}>Adopted Schools</h2>
            <p className={styles.subtitle}>
              Extending impact beyond a single campus through practical partnership
            </p>
            <div className={styles.content}>
              <p>
                Helpline supports adopted schools, helping strengthen educational access in areas where children need better academic support, improved facilities, and stronger continuity in learning. This approach extends impact beyond a single campus and allows the Trust to serve more communities through practical partnership and support.
              </p>
              <p>
                Your donations help these schools deliver better learning outcomes for children who might otherwise fall behind, drop out, or never start school at all.
              </p>
            </div>
            <Link href="/adoptedSchools" className={styles.cta}>
              Explore Adopted Schools
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
