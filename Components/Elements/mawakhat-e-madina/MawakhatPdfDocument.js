"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MawakhatPdfDocument.module.css";

const PDF_PATH = "/img/Mawakhat-e-Madina4Pager.pdf";
const TOTAL_PAGES = 10;

const PAGE_CONFIG = [
  { page: 1, alt: "Mawakhat-e-Madina cover — Quranic verse and title" },
  { page: 2, alt: "Obedience to Allah and teachings of Prophethood" },
  { page: 3, alt: "Helpline Welfare Trust programs and community welfare" },
  { page: 4, alt: "Al-Kitab Masjid architectural rendering", rotate: true },
  { page: 5, alt: "Al-Kitab Masjid character-building workshops" },
  { page: 6, alt: "Al-Kitab Higher Secondary School building", rotate: true },
  { page: 7, alt: "Al-Kitab educational system and character project" },
  { page: 8, alt: "Social and demographic welfare report 2026" },
  { page: 9, alt: "Mawakhat Town and Rana Town field map", landscape: true },
  { page: 10, alt: "Union Council 23 village school data and contact" },
];

export default function MawakhatPdfDocument() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.toolbar}>
          <p className={styles.note}>
            The complete Mawakhat-e-Madina brochure is presented below — every page
            from the official document, preserved in full.
          </p>
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtn}
          >
            Download PDF
          </a>
        </div>

        <div className={styles.document}>
          {PAGE_CONFIG.map(({ page, alt, rotate, landscape }) => (
            <article key={page} className={styles.pageWrap}>
              <span className={styles.pageLabel}>Page {page}</span>
              <div
                className={[
                  styles.pageFrame,
                  rotate ? styles.rotate : "",
                  landscape ? styles.landscape : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <Image
                  src={`/img/mawakhat-pdf/page-${page}.png`}
                  alt={alt}
                  width={landscape ? 1684 : 1190}
                  height={landscape ? 1190 : 1684}
                  className={styles.pageImage}
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={page <= 2}
                />
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <p>Want to support Mawakhat-e-Madina programs?</p>
          <Link href="/donation" className={styles.donateBtn}>
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
}
