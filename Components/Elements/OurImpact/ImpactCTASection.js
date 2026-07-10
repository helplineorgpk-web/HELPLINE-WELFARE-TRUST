"use client";
import React from "react";
import Link from "next/link";
import { FaHandHoldingHeart, FaHandsHelping } from "react-icons/fa";
import styles from "./ImpactCTASection.module.css";

export default function ImpactCTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Take Action Today</span>
          <h2 className={styles.title}>Be Part of the Next Chapter</h2>
          <p className={styles.description}>
            Every donation, every volunteer hour, every share — it all adds up to real change
            in villages across Pakistan.
          </p>
        </div>

        <div className={styles.cards}>
          <article className={`${styles.card} ${styles.cardDonate}`}>
            <div className={styles.iconWrap}>
              <FaHandHoldingHeart size={28} />
            </div>
            <h3 className={styles.cardTitle}>Make a Donation</h3>
            <p className={styles.cardDesc}>
              Your contribution funds schools, healthcare, clean water, and livelihood programs
              that transform entire communities.
            </p>
            <Link href="/donation" className={styles.primaryBtn}>
              Donate Now
            </Link>
          </article>

          <article className={`${styles.card} ${styles.cardVolunteer}`}>
            <div className={styles.iconWrap}>
              <FaHandsHelping size={28} />
            </div>
            <h3 className={styles.cardTitle}>Join Our Team</h3>
            <p className={styles.cardDesc}>
              Lend your time and skills to help us reach more families. Volunteers are the
              backbone of lasting community change.
            </p>
            <Link href="/volunteer" className={styles.secondaryBtn}>
              Become a Volunteer
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
