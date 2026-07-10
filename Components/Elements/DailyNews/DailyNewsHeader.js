"use client";
import React from "react";
import Link from "next/link";
import styles from "./DailyNewsHeader.module.css";

function getFormattedDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function DailyNewsHeader() {
  const today = getFormattedDate();

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <span className={styles.publisher}>Helpline Welfare Trust</span>
        <span className={styles.date}>{today}</span>
      </div>

      <div className={styles.ruleThin} />

      <div className={styles.masthead}>
        <p className={styles.edition}>Community Edition</p>
        <h1 className={styles.title}>Daily News</h1>
        <p className={styles.tagline}>
          Stories of impact, hope &amp; community across Pakistan
        </p>
      </div>

      <div className={styles.ruleThick} />
      <div className={styles.ruleThin} />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className={styles.separator}>/</span>
        <span className={styles.current}>Daily News</span>
      </nav>
    </header>
  );
}
