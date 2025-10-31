import React, { useState, useCallback, useEffect } from "react";

export default function WaterGallary() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetch("/img/water/index.json")
      .then((res) => res.json())
      .then((list) => {
        if (!Array.isArray(list)) return;
        const normalized = list
          .filter((p) => typeof p === "string")
          .map((p) => p.trim())
          .filter(Boolean);
        if (isMounted) setImages(normalized);
      })
      .catch(() => {
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () =>
      setLightboxIndex((idx) =>
        idx === null ? null : (idx - 1 + images.length) % images.length
      ),
    [images.length]
  );
  const showNext = useCallback(
    () =>
      setLightboxIndex((idx) => (idx === null ? null : (idx + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    function onKeyDown(e) {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", margin: "24px 0" }}>Water Gallery</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 12,
          alignItems: "stretch",
        }}
      >
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => setLightboxIndex(index)}
            style={{
              display: "block",
              border: 0,
              padding: 0,
              margin: 0,
              background: "transparent",
              cursor: "pointer",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
            aria-label={`Open image ${index + 1}`}
          >
            <img
              src={src}
              alt={`Water program ${index + 1}`}
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                display: "block",
                transition: "transform 160ms ease-in-out",
              }}
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: 16,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", maxWidth: "96vw", maxHeight: "90vh" }}
          >
            <img
              src={images[lightboxIndex]}
              alt={`Water program large ${lightboxIndex + 1}`}
              style={{
                maxWidth: "96vw",
                maxHeight: "90vh",
                width: "auto",
                height: "auto",
                display: "block",
                borderRadius: 8,
                boxShadow: "0 6px 24px rgba(0,0,0,0.4)",
              }}
            />

            <button
              onClick={closeLightbox}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                border: 0,
                borderRadius: 6,
                padding: "8px 10px",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              ✕
            </button>

            <button
              onClick={showPrev}
              aria-label="Previous image"
              style={{
                position: "absolute",
                top: "50%",
                left: -8,
                transform: "translate(-100%, -50%)",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                border: 0,
                borderRadius: 999,
                padding: "10px 12px",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              ‹
            </button>
            <button
              onClick={showNext}
              aria-label="Next image"
              style={{
                position: "absolute",
                top: "50%",
                right: -8,
                transform: "translate(100%, -50%)",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                border: 0,
                borderRadius: 999,
                padding: "10px 12px",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
