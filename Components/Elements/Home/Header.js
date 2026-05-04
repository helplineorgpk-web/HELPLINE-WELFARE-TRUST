"use client";
import React, { useState, useRef, useCallback, useMemo, useSyncExternalStore } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";
import UBLPaymentForm from "../Payment/UBLPaymentForm";
import { getHeroAsset } from "../../../lib/heroImage";

// Avoid hydration thrash: subscribe to matchMedia once so `isMobile` is
// resolved synchronously on the client's first render instead of toggling
// after useEffect runs (which caused mobile visitors to fetch the heavy
// desktop webp first and then re-fetch the mobile jpg).
const MOBILE_MEDIA_QUERY = "(max-width: 768px)";
function subscribeMobile(cb) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia(MOBILE_MEDIA_QUERY);
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}
function getMobileSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(MOBILE_MEDIA_QUERY).matches;
}
function getServerMobileSnapshot() {
  return false;
}

const MIN_DONATION = 100;

const CAUSE_OPTIONS = [
  {
    id: "Support A Student",
    label: "Support A Student",
    amounts: [
      { value: "2200", label: "Monthly Per Student 2,200 PKR" },
      { value: "24400", label: "Yearly Per Student 24,400 PKR" },
    ],
  },
  {
    id: "Masjid Maktub",
    label: "Masjid Maktub",
    amounts: [
      { value: "10000", label: "Donate For 1 Prayer Musalla 10,000 PKR" },
      { value: "20000", label: "Donate For 2 Prayer Musalla 20,000 PKR" },
    ],
  },
  {
    id: "Rashan Package",
    label: "Rashan Package",
    amounts: [{ value: "6000", label: "Monthly Rashan Package 6,000 PKR" }],
  },
  {
    id: "Vocational Training Center",
    label: "Vocational Training Center",
    amounts: [{ value: "1300000", label: "VTC Monthly PKR 1,300,000" }],
  },
];

const heroSlides = [
  {
    image: "/img/Campaigns/RamadanPackage2.webp",
    title: "RAMADAN FOOD PACKAGE",
    subtitle: "Help us provide essential food supplies to families during the blessed month. Your donation ensures no family goes hungry.",
    link: "/ramzanRashan",
    heroTitleLine1: "HELPING PEOPLE",
    heroTitleLine2: "HELP THEMSELVES",
    heroSubtitle: "This Ramazan be the helping hand that transforms lives and spreads hope.",
    heroStyle: {
      titleHighlightColor: "#f15b43",
      linePrimaryColor: "#f15b43",
      lineSecondaryColor: "#65cabb",
      titleLetterSpacing: "2px",
    },
  },
  {
    image: "/img/Campaigns/HelplineStudentSupport2.webp",
    imageMobile: "/img/Campaigns/Educationmobile.jpg",
    title: "SUPPORT A STUDENT",
    subtitle: "Sponsor students' education and help them build a brighter future. Education is the key to breaking the cycle of poverty.",
    link: "/student-support",
    heroTitleLine1: "EDUCATION",
    heroTitleLine2: "OPENS DOORS",
    heroSubtitle: "Sponsor a student and help children from underserved communities stay in school.",
    heroStyle: {
      titleHighlightColor: "#f15b43",
      linePrimaryColor: "#f15b43",
      lineSecondaryColor: "#65cabb",
      titleLetterSpacing: "2px",
    },
  },
  {
    image: "/img/Campaigns/Vocational.webp",
    imageMobile: "/img/Campaigns/Vocationalmobile.jpg",
    title: "VOCATIONAL TRAINING",
    subtitle: "Equip youth with technical skills for sustainable employment and self-reliance.",
    link: "/vocationalTrainingCenters",
    heroTitleLine1: "SKILLS THAT",
    heroTitleLine2: "CHANGE LIVES",
    heroSubtitle: "Equip youth with practical skills for employment and self-reliance.",
    heroStyle: {
      titleHighlightColor: "#f15b43",
      linePrimaryColor: "#f15b43",
      lineSecondaryColor: "#65cabb",
      titleLetterSpacing: "2px",
    },
  },
  {
    image: "/img/Campaigns/MasjidMaktab.jpg",
    imageMobile: "/img/Campaigns/Masjidmobile.jpg",
    title: "SCHOOL MASJID PROJECT",
    subtitle: "Building integrated school and masjid facilities to uplift communities spiritually and educationally.",
    link: "/masjid",
    heroTitleLine1: "BUILD",
    heroTitleLine2: "TOGETHER",
    heroSubtitle: "Support integrated school and masjid facilities to uplift communities.",
    heroStyle: {
      titleHighlightColor: "#f15b43",
      linePrimaryColor: "#f15b43",
      lineSecondaryColor: "#65cabb",
      titleLetterSpacing: "2px",
    },
  },
  {
    image: "/img/Campaigns/Qurbani3.jpg",
    title: "QURBANI PROGRAM 2026",
    subtitle:
      "Participate in our Qurbani program to help distribute meat to deserving families during Eid ul Adha.",
    link: "/qurbani",
    heroTitleLine1: "QURBANI 2026",
    heroTitleLine2: "SHARE THE BLESSING",
    heroSubtitle:
      "Join our Qurbani program and help deliver meat to families in need this Eid ul Adha.",
    heroStyle: {
      titleHighlightColor: "#f15b43",
      linePrimaryColor: "#f15b43",
      lineSecondaryColor: "#65cabb",
      titleLetterSpacing: "2px",
    },
  },
];

function formatAmount(value) {
  if (!value) return "";
  return new Intl.NumberFormat("en-PK").format(value);
}

function parseAmount(value) {
  return value.replace(/[^0-9]/g, "");
}

const defaultHeroStyle = {
  titleHighlightColor: "#f15b43",
  titleLine2Color: "#fff",
  titleFontSize: "clamp(36px, 5vw, 56px)",
  subtitleFontSize: "clamp(16px, 2vw, 20px)",
  subtitleColor: "rgba(255,255,255,0.95)",
  linePrimaryColor: "#f15b43",
  lineSecondaryColor: "#65cabb",
  titleLetterSpacing: "2px",
};

export default function Header({ slides: slidesProp }) {
  const [selectedCause, setSelectedCause] = useState(CAUSE_OPTIONS[0].id);
  const [amount, setAmount] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const isMobile = useSyncExternalStore(
    subscribeMobile,
    getMobileSnapshot,
    getServerMobileSnapshot
  );
  const amountInputRef = useRef(null);

  const slidesSource = slidesProp && slidesProp.length > 0 ? slidesProp : heroSlides;

  const currentCause = useMemo(
    () => CAUSE_OPTIONS.find((c) => c.id === selectedCause),
    [selectedCause]
  );

  const presetValues = useMemo(
    () => currentCause?.amounts.map((a) => a.value) ?? [],
    [currentCause]
  );

  const isPresetAmount = presetValues.includes(amount);
  const isOtherAmount = amount !== "" && !isPresetAmount;

  const memoizedSlides = useMemo(
    () =>
      slidesSource.map((slide, idx) => ({
        ...slide,
        heroTitleLine1: slide.heroTitleLine1 ?? slide.title ?? "HELPING PEOPLE",
        heroTitleLine2: slide.heroTitleLine2 ?? "HELP THEMSELVES",
        heroSubtitle: slide.heroSubtitle ?? slide.subtitle ?? "Your support transforms lives.",
        heroStyle: { ...defaultHeroStyle, ...slide.heroStyle },
        // Only the first slide is the LCP candidate. Marking every slide
        // priority caused the browser to race-download every hero image at
        // page load, starving the first-paint image of bandwidth.
        priority: idx === 0,
      })),
    [slidesSource]
  );

  const activeSlide = memoizedSlides[activeSlideIndex] ?? memoizedSlides[0];
  const heroStyle = activeSlide?.heroStyle ?? defaultHeroStyle;

  const onSlideChange = useCallback((swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  }, []);

  const swiperConfig = useMemo(
    () => ({
      modules: [Autoplay],
      // Use transform-based horizontal sliding for better GPU acceleration.
      speed: 900,
      autoplay: { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true },
      loop: true,
      slidesPerView: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0.85,
      className: "hero-slider",
      onSlideChange,
    }),
    [onSlideChange]
  );

  const causeSelectOptions = useMemo(
    () =>
      CAUSE_OPTIONS.map((opt) => (
        <option key={opt.id} value={opt.id}>
          {opt.label}
        </option>
      )),
    []
  );

  const amountButtons = useMemo(
    () =>
      currentCause?.amounts.map((item) => ({
        value: item.value,
        label: item.label,
      })) ?? [],
    [currentCause]
  );

  const handleCauseChange = useCallback((e) => {
    setSelectedCause(e.target.value);
    setAmount("");
    setValidationError("");
  }, []);

  const handlePresetSelect = useCallback((value) => {
    setAmount(value);
    setValidationError("");
  }, []);

  const handleOtherAmountClick = useCallback(() => {
    setAmount("");
    setValidationError("");
    setTimeout(() => amountInputRef.current?.focus(), 0);
  }, []);

  const handleAmountInputChange = useCallback((e) => {
    const raw = parseAmount(e.target.value);
    setAmount(raw);
    setValidationError("");
  }, []);

  const validateAndOpenPayment = useCallback(() => {
    setValidationError("");
    const num = parseInt(amount, 10);
    if (!amount || isNaN(num)) {
      setValidationError("Please select or enter a donation amount.");
      return;
    }
    if (num < MIN_DONATION) {
      setValidationError(`Minimum donation is ${formatAmount(String(MIN_DONATION))} PKR.`);
      return;
    }
    setShowPaymentForm(true);
  }, [amount]);

  const closeModal = useCallback(() => setShowPaymentForm(false), []);

  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          max-width: 100vw;
          height: 100vh;
          min-height: 100vh;
          min-height: 100dvh;
          min-height: -webkit-fill-available;
          overflow: hidden;
          background: #fff;
        }
        .hero-slider {
          width: 100%;
          height: 100%;
        }
        .hero-slider .swiper-wrapper {
          height: 100%;
        }
        .hero-slider .swiper-slide {
          width: 100% !important;
          max-width: 100%;
          flex-shrink: 0;
          box-sizing: border-box;
        }
        .hero-slide {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }
        .hero-slide .hero-slide-image {
          position: absolute !important;
          inset: 0 !important;
          width: 100% !important;
          height: 100% !important;
          max-width: none !important;
          object-fit: cover;
          object-position: center;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          // background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%);
          z-index: 1;
        }
        .hero-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1400px;
          margin: 0 auto;
          padding: 100px 60px 60px;
          box-sizing: border-box;
        }
        .hero-text {
          flex: 1;
          max-width: 600px;
          min-width: 0;
        }
        .hero-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin: 0 0 24px 0;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        .hero-subtitle-wrap {
          margin: 0 0 32px 0;
          max-width: 520px;
          padding: 20px 24px 20px 28px;
          background: linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(38,59,93,0.6) 100%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 12px;
          border-left: 4px solid #f15b43;
          box-shadow: 0 8px 32px rgba(0,0,0,0.25);
        }
        .hero-subtitle {
          font-size: clamp(16px, 2vw, 20px);
          font-weight: 500;
          color: rgba(255,255,255,0.98);
          line-height: 1.7;
          margin: 0;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        .hero-line {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hero-line-red {
          width: 60px;
          height: 4px;
          background: #f15b43;
        }
        .hero-line-blue {
          width: 40px;
          height: 4px;
          background: #65cabb;
        }
        .donate-card-wrapper {
          position: relative;
          z-index: 10;
        }
        .donate-card {
          background: #fff;
          border-radius: 16px;
          padding: 32px;
          width: 380px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          position: relative;
          overflow: hidden;
        }
        .donate-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #f15b43 0%, #65cabb 50%, #f15b43 100%);
          background-size: 200% 100%;
          animation: gradientSlide 3s ease infinite;
        }
        @keyframes gradientSlide {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .donate-heading {
          font-size: 28px;
          font-weight: 700;
          color: #263b5d;
          margin: 0 0 6px 0;
          text-align: center;
        }
        .donate-subheading {
          font-size: 14px;
          color: #888;
          margin: 0 0 24px 0;
          text-align: center;
        }
        .donate-select {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          font-size: 15px;
          color: #333;
          background: #fff;
          cursor: pointer;
          margin-bottom: 16px;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
        }
        .amount-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 16px;
        }
        .amount-btn {
          padding: 14px 16px;
          border: 1px solid #f0e8e6;
          border-left: 4px solid #f15b43;
          border-radius: 8px;
          background: #fff;
          font-size: 14px;
          color: #333;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s ease;
        }
        .amount-btn:hover {
          background: #fef8f7;
        }
        .amount-btn.selected {
          background: #f15b43;
          color: #fff;
          border-color: #f15b43;
        }
        .amount-input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          font-size: 15px;
          color: #333;
          margin-bottom: 16px;
        }
        .amount-input:focus {
          outline: none;
          border-color: #f15b43;
        }
        .donate-btn {
          width: 100%;
          padding: 16px;
          background: #f15b43;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }
        .donate-btn:hover {
          background: #d94832;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(241,91,67,0.3);
        }
        .error-msg {
          color: #e74c3c;
          font-size: 13px;
          margin-bottom: 12px;
          text-align: center;
        }
        .payment-modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .payment-modal-content {
          background: #fff;
          border-radius: 16px;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }
        .payment-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
          z-index: 1;
        }
        @media (max-width: 1024px) {
          .hero-content {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 100px 32px 48px;
            gap: 32px;
          }
          .hero-text {
            max-width: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-title {
            margin-bottom: 20px;
            text-align: center;
          }
          .hero-subtitle-wrap {
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            max-width: 520px;
            text-align: center;
          }
          .hero-subtitle {
            text-align: center;
          }
          .hero-line {
            justify-content: center;
          }
          .donate-card {
            width: 100%;
            max-width: 400px;
          }
        }
        @media (max-width: 768px) {
          .hero-section {
            height: 100vh;
            height: 100dvh;
            min-height: 100vh;
            min-height: 100dvh;
            min-height: -webkit-fill-available;
          }
          .hero-slider,
          .hero-slider .swiper-wrapper,
          .hero-slide {
            height: 100% !important;
            min-height: 100% !important;
          }
          .hero-content {
            padding: 126px 20px 32px;
            justify-content: flex-start;
            align-items: center;
            text-align: center !important;
            width: 100%;
            max-width: 100%;
            left: 0;
            right: 0;
          }
          .hero-text {
            text-align: center !important;
            align-items: center;
            width: 100%;
            max-width: 100%;
            flex: none;
          }
          .hero-title {
            font-size: clamp(28px, 8vw, 42px);
            margin: 0 0 16px 0;
            letter-spacing: 1px;
            line-height: 1.15;
            text-align: center !important;
            width: 100%;
          }
          .hero-subtitle-wrap {
            margin: 0 auto 24px auto;
            padding: 16px 18px 16px 22px;
            max-width: 100%;
            width: 100%;
            box-sizing: border-box;
            border-radius: 10px;
            text-align: center !important;
          }
          .hero-subtitle {
            font-size: clamp(14px, 3.8vw, 17px);
            line-height: 1.6;
            text-align: center !important;
          }
          .hero-line {
            justify-content: center;
          }
          .hero-line-red {
            width: 48px;
          }
          .hero-line-blue {
            width: 32px;
          }
          .donate-card {
            padding: 24px;
          }
        }
        @media (max-width: 480px) {
          .hero-content {
            padding: 100px 16px 28px;
            text-align: center !important;
            width: 100%;
            max-width: 100%;
            justify-content: flex-start;
          }
          .hero-text {
            text-align: center !important;
            align-items: center;
            width: 100%;
            max-width: 100%;
          }
          .hero-title {
            font-size: clamp(24px, 7vw, 32px);
            margin: 0 0 12px 0;
            letter-spacing: 0.5px;
            text-align: center !important;
            width: 100%;
          }
          .hero-subtitle-wrap {
            padding: 14px 16px 14px 20px;
            margin: 0 auto 20px auto;
            border-left-width: 3px;
            text-align: center !important;
            width: 100%;
          }
          .hero-subtitle {
            font-size: 14px;
            line-height: 1.55;
            text-align: center !important;
          }
          .hero-line {
            gap: 6px;
            justify-content: center;
          }
          .hero-line-red {
            width: 40px;
            height: 3px;
          }
          .hero-line-blue {
            width: 28px;
            height: 3px;
          }
        }
        @media (max-width: 360px) {
          .hero-content {
            padding: 92px 12px 24px;
            text-align: center;
            justify-content: flex-start;
          }
          .hero-title {
            font-size: 22px;
            text-align: center;
          }
          .hero-subtitle-wrap {
            padding: 12px 14px 12px 18px;
            text-align: center;
          }
          .hero-subtitle {
            font-size: 13px;
            text-align: center;
          }
        }
        @media (max-width: 768px) {
          @supports (padding: max(0px)) {
            .hero-content {
              padding-top: max(126px, calc(126px + env(safe-area-inset-top)));
              padding-left: max(16px, env(safe-area-inset-left));
              padding-right: max(16px, env(safe-area-inset-right));
              padding-bottom: max(32px, env(safe-area-inset-bottom));
            }
          }
        }
        @media (max-width: 480px) {
          @supports (padding: max(0px)) {
            .hero-content {
              padding-left: max(12px, env(safe-area-inset-left));
              padding-right: max(12px, env(safe-area-inset-right));
            }
          }
        }
      `}</style>

      <section className="hero-section">
        <Swiper {...swiperConfig}>
          {memoizedSlides.map((slide) => {
            const rawSrc =
              isMobile && slide.imageMobile ? slide.imageMobile : slide.image;
            const asset = getHeroAsset(rawSrc);
            return (
            <SwiperSlide key={slide.image} className="hero-slide">
              <Image
                src={asset.src}
                alt={slide.title}
                fill
                priority={slide.priority}
                loading={slide.priority ? "eager" : "lazy"}
                fetchPriority={slide.priority ? "high" : "low"}
                placeholder="blur"
                blurDataURL={asset.blurDataURL}
                sizes="100vw"
                quality={70}
                className="hero-slide-image"
              />
            </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="hero-overlay" />

        <div className="hero-content" style={isMobile ? { textAlign: "center" } : undefined}>
          <div className="hero-text" style={isMobile ? { textAlign: "center" } : undefined}>
            <h1
              className="hero-title"
              style={{
                letterSpacing: heroStyle.titleLetterSpacing,
                fontSize: heroStyle.titleFontSize,
                ...(isMobile && { textAlign: "center" }),
              }}
            >
              <span style={{ color: heroStyle.titleHighlightColor }}>
                {activeSlide?.heroTitleLine1 ?? "HELPING PEOPLE"}
              </span>
              <br />
              <span style={{ color: heroStyle.titleLine2Color }}>
                {activeSlide?.heroTitleLine2 ?? "HELP THEMSELVES"}
              </span>
            </h1>
            <div
              className="hero-subtitle-wrap"
              style={{
                borderLeftColor: heroStyle.titleHighlightColor ?? heroStyle.linePrimaryColor,
                ...(isMobile && { textAlign: "center" }),
              }}
            >
              <p
                className="hero-subtitle"
                style={{
                  fontSize: heroStyle.subtitleFontSize,
                  color: heroStyle.subtitleColor,
                  ...(isMobile && { textAlign: "center" }),
                }}
              >
                {activeSlide?.heroSubtitle ??
                  "This Ramazan be the helping hand that transforms lives and spreads hope."}
              </p>
            </div>
            <div
              className="hero-line"
              style={isMobile ? { justifyContent: "center" } : undefined}
            >
              <div
                className="hero-line-red"
                style={{ background: heroStyle.linePrimaryColor }}
              />
              <div
                className="hero-line-blue"
                style={{ background: heroStyle.lineSecondaryColor }}
              />
            </div>
          </div>

          {/* <div className="donate-card-wrapper">
            <div className="donate-card">
              <h2 className="donate-heading">Make a Difference</h2>
              <p className="donate-subheading">Your contribution changes lives</p>

              <select
                value={selectedCause}
                onChange={handleCauseChange}
                className="donate-select"
              >
                {causeSelectOptions}
              </select>

              <div className="amount-options">
                {amountButtons.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    className={`amount-btn ${amount === item.value ? "selected" : ""}`}
                    onClick={() => handlePresetSelect(item.value)}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  type="button"
                  className={`amount-btn ${isOtherAmount ? "selected" : ""}`}
                  onClick={handleOtherAmountClick}
                >
                  Other Amount
                </button>
              </div>

              <input
                ref={amountInputRef}
                type="text"
                placeholder="Enter amount (PKR)"
                value={amount ? formatAmount(amount) : ""}
                onChange={handleAmountInputChange}
                className="amount-input"
              />

              {validationError && <p className="error-msg">{validationError}</p>}

              <button
                type="button"
                className="donate-btn"
                onClick={validateAndOpenPayment}
              >
                DONATE
              </button>
            </div>
          </div> */}
        </div>
      </section>

      {showPaymentForm && (
        <div className="payment-modal" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className="payment-modal-content">
            <button className="payment-modal-close" onClick={closeModal}>&times;</button>
            <UBLPaymentForm
              amount={parseInt(amount, 10)}
              cause={selectedCause}
              onPaymentInitiated={() => {}}
              onPaymentCompleted={() => { setShowPaymentForm(false); setAmount(""); }}
              onPaymentFailed={() => {}}
            />
          </div>
        </div>
      )}
    </>
  );
}
