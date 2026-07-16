"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  VIDEO_KHABRAIN_FEATURED,
  VIDEO_KHABRAIN_GRID,
  VIDEO_CATEGORIES,
  getYoutubeEmbedUrl,
  getYoutubeWatchUrl,
  getYoutubeThumbnail,
  getVideosByCategory,
} from "../../../data/dailyNewsVideoKhabrain";
import styles from "./DailyNewsVideoKhabrain.module.css";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.playIcon}>
      <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.55)" />
      <path d="M10 8l6 4-6 4V8z" fill="#fff" />
    </svg>
  );
}

function VideoModal({ video, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!video) return null;

  const embedUrl = getYoutubeEmbedUrl(video.videoId, video.startSeconds || 0);
  const watchUrl = getYoutubeWatchUrl(video.videoId, video.startSeconds || 0);

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label={video.title}
      >
        <button
          type="button"
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className={styles.modalVideoWrap}>
          <iframe
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.modalFrame}
          />
        </div>
        <div className={styles.modalFooter} dir="rtl">
          <h3 className={styles.modalTitle}>{video.title}</h3>
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.modalWatchLink}
          >
            یوٹیوب پر دیکھیں ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video, onPlay, featured }) {
  const thumb =
    video.thumbnail || getYoutubeThumbnail(video.videoId);

  return (
    <button
      type="button"
      className={`${styles.videoCard} ${featured ? styles.videoCardFeatured : ""}`}
      onClick={() => onPlay(video)}
      dir="rtl"
    >
      <div className={styles.videoCardThumb}>
        <Image
          src={thumb}
          alt={video.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.videoCardImg}
        />
        <span className={styles.videoCardOverlay}>
          <PlayIcon />
        </span>
        {featured && <span className={styles.featuredRibbon}>نمایاں</span>}
      </div>
      <div className={styles.videoCardBody}>
        <h3 className={styles.videoCardTitle}>{video.title}</h3>
        {video.category && (
          <span className={styles.videoCardCat}>
            {VIDEO_CATEGORIES.find((c) => c.id === video.category)?.label}
          </span>
        )}
      </div>
    </button>
  );
}

function FeaturedStory({ story }) {
  const embedUrl = getYoutubeEmbedUrl(story.videoId, story.startSeconds);
  const watchUrl = getYoutubeWatchUrl(story.videoId, story.startSeconds);

  return (
    <section className={styles.featured}>
      <div className={styles.featuredBanner} dir="rtl">
        <span className={styles.featuredBadge}>آج کی بڑی خبر</span>
        <h2 className={styles.featuredTitle}>{story.title}</h2>
        <p className={styles.featuredSubtitle}>{story.subtitle}</p>
        <span className={styles.featuredLocation}>{story.location}</span>
      </div>

      <div className={styles.featuredBody}>
        <div className={styles.featuredVideoCol}>
          <div className={styles.featuredVideoWrap}>
            <iframe
              src={embedUrl}
              title={story.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.featuredFrame}
            />
          </div>
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.watchLink}
            dir="rtl"
          >
            یوٹیوب پر دیکھیں ↗
          </a>
        </div>

        <div className={styles.featuredWriteup} dir="rtl">
          <p className={styles.lead}>{story.lead}</p>
          {story.paragraphs.map((para, i) => (
            <p key={i} className={styles.paragraph}>
              {para}
            </p>
          ))}
          <blockquote className={styles.quote}>
            <p>{story.quote}</p>
            <cite>— {story.quoteAttribution}</cite>
          </blockquote>
          {story.tags?.length > 0 && (
            <ul className={styles.tags}>
              {story.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {story.gallery?.length > 0 && (
        <div className={styles.gallery}>
          {story.gallery.map((src) => (
            <div key={src} className={styles.galleryItem}>
              <Image
                src={src}
                alt={story.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className={styles.galleryImg}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default function DailyNewsVideoKhabrain() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeVideo, setActiveVideo] = useState(null);

  const filteredVideos = getVideosByCategory(activeCategory);
  const closeModal = useCallback(() => setActiveVideo(null), []);

  return (
    <div className={styles.page}>
      <header className={styles.hero} dir="rtl">
        <div className={styles.heroInner}>
          <span className={styles.badge}>ویدیو خبریں</span>
          <h1 className={styles.title}>ویدیو خبریں</h1>
          <p className={styles.subtitle}>
            ہیلپ لائن کی میدانی کہانیاں — ویڈیو میں دیکھیں، دل سے محسوس کریں
          </p>
          <div className={styles.heroStats}>
            <span>{VIDEO_KHABRAIN_GRID.length} ویڈیوز</span>
            <span className={styles.heroStatDot} />
            <span>تعلیم · قربانی · راشن · سندھ</span>
          </div>
        </div>
      </header>

      <div className={styles.inner}>
        <FeaturedStory story={VIDEO_KHABRAIN_FEATURED} />

        <section className={styles.gridSection}>
          <div className={styles.gridHeader} dir="rtl">
            <h2 className={styles.gridTitle}>تمام ویڈیوز</h2>
            <p className={styles.gridSubtitle}>
              ہیلپ لائن کے منصوبے، میدانی سرگرمیاں اور اثر انگیز کہانیاں
            </p>
          </div>

          <nav className={styles.filterBar} aria-label="Video categories" dir="rtl">
            {VIDEO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`${styles.filterBtn} ${
                  activeCategory === cat.id ? styles.filterActive : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          <div className={styles.videoGrid}>
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={setActiveVideo}
                featured={video.id === "sindh-bheel-relation"}
              />
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <p className={styles.emptyState} dir="rtl">
              اس زمرے میں کوئی ویڈیو نہیں
            </p>
          )}
        </section>
      </div>

      {activeVideo && (
        <VideoModal video={activeVideo} onClose={closeModal} />
      )}
    </div>
  );
}
