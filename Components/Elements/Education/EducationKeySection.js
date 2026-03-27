import React from "react";
import Link from "next/link";
import styles from "./EducationKeySection.module.css";

export default function EducationKeySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Help a child continue learning
        </h2>
        <div className={styles.content}>
          <p>
            Education changes the direction of a child&apos;s life. It gives confidence, discipline, hope, and the ability to dream beyond present circumstances. For families facing poverty, education is often the first thing to be interrupted. School fees, uniforms, books, transport, and daily survival pressures can push children out of the classroom long before they have the chance to build a future.
          </p>
          <p>
            Helpline Welfare Trust works to keep that future alive. When a child stays in school, the impact reaches the entire family and often the next generation as well. Support education through student sponsorship, school operations, or school expansion projects and become part of a future built on knowledge, dignity, and opportunity.
          </p>
        </div>
        <Link href="/donation" className={styles.cta}>
          Support Education
        </Link>
      </div>
    </section>
  );
}
