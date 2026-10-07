"use client";
import React from "react";
import Link from "next/link";
import styles from "./AlkitabEzaazDetail.module.css";

const HEADER_IMAGE = "/img/alkitabiankaezaz.jpg";
const YOUTUBE_ID = "gXPb_hE6GUg";
const YOUTUBE_EMBED = `https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1&playsinline=1`;

export default function AlkitabEzaazDetail() {
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
    </>
  );
}
