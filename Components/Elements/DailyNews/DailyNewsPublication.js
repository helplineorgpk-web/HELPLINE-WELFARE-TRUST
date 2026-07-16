"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  getPublication,
  getKitabchaBook,
} from "../../../data/dailyNewsPublications";
import styles from "./DailyNewsPublication.module.css";

export default function DailyNewsPublication({ publicationId }) {
  const pub = getPublication(publicationId);
  const [activeBookId, setActiveBookId] = useState(null);

  useEffect(() => {
    setActiveBookId(null);
  }, [publicationId]);

  if (!pub) return null;

  const isKitabchaLibrary = publicationId === "kitabcha" && pub.books?.length;
  const activeBook = activeBookId ? getKitabchaBook(activeBookId) : null;
  const showPdf = Boolean(activeBook?.pdf || (!isKitabchaLibrary && pub.embedPdf));
  const pdfSrc = activeBook?.pdf || pub.embedPdf;
  const pdfTitle = activeBook
    ? `${activeBook.title} ${activeBook.year}`
    : pub.title;

  return (
    <div className={`${styles.page} ${showPdf ? styles.pageFull : ""}`}>
      <div className={`${styles.inner} ${showPdf ? styles.innerFull : ""}`}>
        {activeBook ? (
          <header className={styles.viewerBar}>
            <button
              type="button"
              className={styles.backBtn}
              onClick={() => setActiveBookId(null)}
              dir="rtl"
            >
              ← تمام کتابیں
            </button>
            <div className={styles.viewerMeta} dir="rtl">
              <strong>{activeBook.title}</strong>
              <span>{activeBook.titleEn} · {activeBook.year}</span>
            </div>
            <a
              href={activeBook.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadBtn}
              dir="rtl"
            >
              PDF ڈاؤن لوڈ
            </a>
          </header>
        ) : (
          <header className={styles.hero}>
            <span className={styles.badge} dir="rtl">
              {pub.badge}
            </span>
            <h1 className={styles.title} dir="rtl">
              {pub.title}
            </h1>
            <p className={styles.subtitle} dir="rtl">
              {pub.subtitle}
            </p>
            <p className={styles.description} dir="rtl">
              {pub.description}
            </p>
            {pub.downloadHref && (
              <a
                href={pub.downloadHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadBtn}
                dir="rtl"
              >
                {pub.downloadLabel}
              </a>
            )}
          </header>
        )}

        {showPdf && pdfSrc ? (
          <div className={styles.pdfFrameWrap}>
            <iframe
              key={pdfSrc}
              src={`${pdfSrc}#view=FitH`}
              title={pdfTitle}
              className={styles.pdfFrame}
            />
          </div>
        ) : isKitabchaLibrary ? (
          <div className={styles.booksGrid}>
            {pub.books.map((book) => (
              <button
                key={book.id}
                type="button"
                className={styles.bookCard}
                onClick={() => setActiveBookId(book.id)}
              >
                <div className={styles.bookCover}>
                  <Image
                    src={book.cover}
                    alt={book.titleEn}
                    fill
                    sizes="(max-width: 768px) 50vw, 220px"
                    className={styles.bookCoverImg}
                  />
                  <span className={styles.bookYear}>{book.year}</span>
                </div>
                <div className={styles.bookBody} dir="rtl">
                  <h2 className={styles.bookTitle}>{book.title}</h2>
                  <p className={styles.bookEn}>{book.titleEn}</p>
                  <p className={styles.bookDesc}>{book.description}</p>
                  <span className={styles.bookOpen}>کھولیں →</span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className={styles.grid}>
            {(pub.pages || []).map((page) => (
              <article key={page.src} className={styles.card}>
                <div
                  className={`${styles.imageWrap} ${page.landscape ? styles.landscape : ""}`}
                >
                  <Image
                    src={page.src}
                    alt={page.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.image}
                  />
                </div>
                {page.caption && (
                  <p className={styles.caption} dir="rtl">
                    {page.caption}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
