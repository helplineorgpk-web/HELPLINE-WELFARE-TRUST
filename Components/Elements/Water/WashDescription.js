import React from "react";
import styles from "./WashDescription.module.css";

export default function WashDescription() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          Unsafe water adds a serious layer of risk to vulnerable communities. When people do not have reliable access to clean water, the effects reach every aspect of life. Waterborne illness, physical burden, lost time, and repeated medical problems all become part of the daily struggle.
        </p>
        <p className={styles.paragraph}>
          Clean water is therefore not separate from healthcare. It is one of the most important foundations of it. Helpline has installed over 2,000 water pumps in different areas of Pakistan, addressing one of the most basic causes of poor health.
        </p>
        <p className={styles.paragraph}>
          By installing water pumps and other water access solutions in underserved communities, this work helps reduce disease risk, save time, and ease the burden on families who otherwise travel long distances for unsafe water.
        </p>
        <p className={styles.paragraph}>
          Healthcare costs can push vulnerable families deeper into crisis. Many delay treatment because they cannot pay for consultations, tests, medicines, or procedures. In remote and underserved areas, the challenge is even greater.
        </p>
        <p className={styles.paragraph}>
          Helpline&rsquo;s healthcare work includes medical support, medicine service, cataract operations, and clean water initiatives. Together, these efforts show a focus on accessible, outcome-driven service that addresses ongoing health burdens affecting poor families every day.
        </p>
        <p className={styles.paragraph}>
          Support healthcare and clean water. Help Helpline deliver treatment, medicine, safe water, and life-changing care to families who need it most.
        </p>
      </div>
    </section>
  );
}
