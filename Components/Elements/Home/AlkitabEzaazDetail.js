"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaPlay, FaTimes } from "react-icons/fa";
import styles from "./AlkitabEzaazDetail.module.css";

const HEADER_IMAGE = "/img/alkitabiankaezaz.jpg";
const YOUTUBE_ID = "gXPb_hE6GUg";
const YOUTUBE_EMBED = `https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1&playsinline=1`;

const SHORTS = [
  { id: "MX5W8-upWnQ", title: "Samia Maqsood" },
  { id: "69OmS5YzfaY", title: "Tasmia" },
  { id: "umAyb1-esCI", title: "Bisma Shahzadi" },
  { id: "ASQIllSrhGY", title: "Barza Shabbir" },
  { id: "VZZ2Wn1zm-4", title: "Aqsa Shoukat" },
  { id: "QWQhfy3EnxI", title: "Husaal Mili Nagma" },
  {
    id: "kDipds4NuOA",
    title: "A Charismatic And Determined Speech By An Irteqa Atfal School Student",
  },
  {
    id: "BOuMIXHyElA",
    title:
      "The Talented Student Spoke About The Temptations Of Modern Education, With The Poetry Of Allama Iqbal",
  },
  {
    id: "LLYrxXMhjcY",
    title: "The Al-Kitab School Student Delivered A Charming And Effective Speech On The Five Senses",
  },
  { id: "iVqj7spEkRg", title: "Young Age Big Passion Witness Their Talent And Determination" },
];

export default function AlkitabEzaazDetail() {
  const [activeShort, setActiveShort] = useState(null);
  const shortTriggerRef = useRef(null);
  const currentShort = activeShort === null ? null : SHORTS[activeShort];
  const isShortOpen = currentShort !== null;

  const closeShort = useCallback(() => {
    setActiveShort(null);
    shortTriggerRef.current?.focus();
  }, []);

  const stepShort = useCallback((step) => {
    setActiveShort((index) =>
      index === null ? index : (index + step + SHORTS.length) % SHORTS.length
    );
  }, []);

  useEffect(() => {
    if (!isShortOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeShort();
      else if (e.key === "ArrowRight") stepShort(1);
      else if (e.key === "ArrowLeft") stepShort(-1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isShortOpen, closeShort, stepShort]);

  return (
    <>
      <header className={styles.hero}>
        <img
          src={HEADER_IMAGE}
          alt="الکتاب کا اعزاز"
          className={styles.heroImage}
        />
      </header>

      <section className={styles.page} dir="rtl">
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <p className={styles.kicker}>الکتاب ایجوکیشن سسٹم</p>
            <h1 className={styles.title}>الکتاب کا اعزاز</h1>
            <p className={styles.subtitle}>
              وہ لمحہ جب محرومی انعام بن جاتی ہے — اور ایک بچہ قوم کا فخر بن جاتا ہے
            </p>
            <p className={styles.lead}>
              یہ تصویر صرف ایک انعام کی نہیں۔ یہ ان آنکھوں کی ہے جنہوں نے مفت تعلیم میں امید دیکھی،
              ان ہاتھوں کی ہے جنہوں نے سرٹیفکیٹ تھاما، اور ان استادوں کی ہے جنہوں نے کہا: تمہاری فیس
              ہماری، تمہارا مستقبل تمہارا۔ الکتاب کا اعزاز ہیلپ لائن ویلفیئر ٹرسٹ کے اس وعدے کی گواہی
              ہے کہ غربت کسی بچے کی صلاحیت کا دروازہ نہیں بند کر سکتی۔
            </p>
          </div>

          <div className={styles.videoCard}>
            <div className={styles.videoWrap}>
              <iframe
                className={styles.video}
                src={YOUTUBE_EMBED}
                title="الکتاب کا اعزاز"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a
              href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.watchLink}
            >
              یوٹیوب پر دیکھیں ↗
            </a>
          </div>

          <article className={styles.story}>
            <p>
              جب ایک چھوٹا طالب علم اسٹیج پر کھڑا ہوتا ہے اور اعزاز اس کے ہاتھ میں آتا ہے، تو پورا
              ہال ایک کہانی سن لیتا ہے — کتابوں کی، محنت کی، اور اس ادارے کی جس نے اسے اکیلا نہیں
              چھوڑا۔ الکتاب کے یہ لمحات ہمیں یاد دلاتے ہیں کہ تعلیم صرف نصاب نہیں، عزت کی واپسی ہے۔
            </p>
            <p>
              یہ ویڈیو اسی جذبے کی دستاویز ہے: الکتاب کے بچے، ان کے سرپرست، اور وہ قومی فخر جو ایک
              سکول کی چھت تلے جنم لیتا ہے۔ اللہ تعالیٰ ان بچوں کو علم، ایمان اور بلند مقام عطا فرمائے،
              اور ہیلپ لائن کو توفیق دے کہ ایسے اعزاز کے لمحات بڑھتے رہیں۔
            </p>
          </article>

          <div className={styles.shorts}>
            <div className={styles.shortsHead}>
              <h2 className={styles.shortsTitle}>مزید ویڈیوز</h2>
              <p className={styles.shortsSub}>
                ہمارے طلبہ کی صلاحیتوں کی جھلکیاں — دیکھنے کے لیے کسی بھی ویڈیو پر کلک کریں
              </p>
            </div>
            <div className={styles.shortsGrid} dir="ltr">
              {SHORTS.map((short, index) => (
                <button
                  key={short.id}
                  type="button"
                  className={styles.shortCard}
                  aria-label={`Play video: ${short.title}`}
                  onClick={(e) => {
                    shortTriggerRef.current = e.currentTarget;
                    setActiveShort(index);
                  }}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${short.id}/oar2.jpg`}
                    alt=""
                    className={styles.shortThumb}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={styles.shortPlay} aria-hidden="true">
                    <FaPlay />
                  </span>
                  <span className={styles.shortTitle}>{short.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.cta}>
            <p className={styles.ctaText}>
              الکتاب کے اگلے اعزاز کا حصہ بنیں — ایک طالب علم کی تعلیم ایک قوم کی بنیاد ہے۔
            </p>
            <Link href="/donation" className={styles.ctaBtn}>
              ابھی عطیہ کریں
            </Link>
          </div>
        </div>
      </section>

      {currentShort ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={currentShort.title}
          onClick={closeShort}
        >
          <button
            type="button"
            className={styles.lightboxClose}
            aria-label="Close video"
            onClick={closeShort}
            autoFocus
          >
            <FaTimes />
          </button>
          <button
            type="button"
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            aria-label="Previous video"
            onClick={(e) => {
              e.stopPropagation();
              stepShort(-1);
            }}
          >
            <FaChevronLeft />
          </button>
          <div className={styles.lightboxBody} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxFrame}>
              <iframe
                key={currentShort.id}
                className={styles.video}
                src={`https://www.youtube.com/embed/${currentShort.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={currentShort.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className={styles.lightboxMeta}>
              <p className={styles.lightboxTitle}>{currentShort.title}</p>
              <a
                href={`https://www.youtube.com/shorts/${currentShort.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.lightboxLink}
                dir="rtl"
              >
                یوٹیوب پر دیکھیں ↗
              </a>
            </div>
          </div>
          <button
            type="button"
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            aria-label="Next video"
            onClick={(e) => {
              e.stopPropagation();
              stepShort(1);
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      ) : null}
    </>
  );
}
