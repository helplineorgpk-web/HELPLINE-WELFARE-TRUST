import React, { useCallback, useEffect } from "react";
import styles from "./CampaignImageLightbox.module.css";

export default function CampaignImageLightbox({
  images = [],
  index = 0,
  alt = "Campaign photo",
  onClose,
  onChangeIndex,
}) {
  const total = images.length;
  const safeIndex = total > 0 ? ((index % total) + total) % total : 0;
  const src = images[safeIndex];

  const showPrev = useCallback(() => {
    if (total < 2) return;
    onChangeIndex((safeIndex - 1 + total) % total);
  }, [onChangeIndex, safeIndex, total]);

  const showNext = useCallback(() => {
    if (total < 2) return;
    onChangeIndex((safeIndex + 1) % total);
  }, [onChangeIndex, safeIndex, total]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, showPrev, showNext]);

  if (!src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full screen image"
      className={styles.overlay}
      onClick={onClose}
    >
      <button
        type="button"
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>

      {total > 1 ? (
        <button
          type="button"
          className={`${styles.navBtn} ${styles.navPrev}`}
          onClick={(e) => {
            e.stopPropagation();
            showPrev();
          }}
          aria-label="Previous image"
        >
          &#10094;
        </button>
      ) : null}

      <div
        className={styles.frame}
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${alt} ${safeIndex + 1}`}
          className={styles.image}
        />
        {total > 1 ? (
          <p className={styles.counter}>
            {safeIndex + 1} / {total}
          </p>
        ) : null}
      </div>

      {total > 1 ? (
        <button
          type="button"
          className={`${styles.navBtn} ${styles.navNext}`}
          onClick={(e) => {
            e.stopPropagation();
            showNext();
          }}
          aria-label="Next image"
        >
          &#10095;
        </button>
      ) : null}
    </div>
  );
}
