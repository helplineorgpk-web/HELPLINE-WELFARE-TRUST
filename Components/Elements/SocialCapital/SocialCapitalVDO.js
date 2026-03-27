import React from "react";
import styles from "./SocialCapitalVDO.module.css";

export default function SocialCapitalVDO() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.intro}>
          At Helpline Welfare Trust, we believe lasting change begins within the community. That&apos;s
          why our work is powered by Village Development Organizations
          (VDOs)&mdash;local groups formed by the people, for the people.
        </p>
        <ul className={styles.list}>
          <li>1,600+ VDOs active across Helpline Welfare Trust program areas</li>
          <li>Led by both men and women for inclusive representation</li>
          <li>Serve as the first point of contact for community action and support</li>
        </ul>
        <h3 className={styles.philosophy}>
          Our Philosophy: Mobilize. Empower. Sustain.
        </h3>
        <p className={styles.closing}>
          VDOs are not temporary projects, they are community-owned institutions
          that continue to serve long after programs end. When communities
          organize, they rise.
        </p>
      </div>
    </section>
  );
}
