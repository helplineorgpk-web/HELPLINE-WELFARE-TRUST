"use client";
import React, { useState, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import UBLPaymentForm from "../Payment/UBLPaymentForm";

const MIN_DONATION = 100;

const SOCIAL_WELFARE_CAUSE_OPTIONS = [
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
];

const HERO_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITETQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEQ/ANlg3O6Kv0yPMuTjkJoBLDJYaAaUc5B4ycgjn5Ugb67S+GlJrSlSOYn/2Q==";

const DONATION_HERO_DEFAULT = "/img/Campaigns/Disaster.webp";
/** Shared default for text-layout pages using this header (videos, gallery, etc.) */
const TEXT_HERO_DEFAULT = "/img/Campaigns/Disaster.webp";

function formatAmount(value) {
  if (!value) return "";
  return new Intl.NumberFormat("en-PK").format(value);
}

function parseAmount(value) {
  return value.replace(/[^0-9]/g, "");
}

export default function SocialCapitalHeader({
  sectionName = "Social Welfare Development",
  heading = "Social Welfare\nDevelopment",
  description = "Helpline Welfare Trust supports communities through social welfare and family-focused programs that improve health, dignity, and resilience. This work connects people with practical support and long-term opportunities for a better quality of life.",
  image,
  layout = "text",
  donationTitle = "Make a Difference",
  donationSubtitle = "Your contribution changes lives",
  donationCauses = SOCIAL_WELFARE_CAUSE_OPTIONS,
}) {
  const defaultHero =
    layout === "donation" ? DONATION_HERO_DEFAULT : TEXT_HERO_DEFAULT;
  const raw =
    image != null && String(image).trim() !== "" ? String(image).trim() : defaultHero;
  const heroImage = raw.startsWith("/") ? raw : `/${raw}`;

  const [selectedCause, setSelectedCause] = useState(donationCauses[0]?.id || "");
  const [amount, setAmount] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [validationError, setValidationError] = useState("");
  const amountInputRef = useRef(null);

  const currentCause = useMemo(
    () => donationCauses.find((c) => c.id === selectedCause),
    [selectedCause, donationCauses]
  );

  const presetValues = useMemo(
    () => currentCause?.amounts.map((a) => a.value) ?? [],
    [currentCause]
  );

  const isPresetAmount = presetValues.includes(amount);
  const isOtherAmount = amount !== "" && !isPresetAmount;

  const causeSelectOptions = useMemo(
    () =>
      donationCauses.map((opt) => (
        <option key={opt.id} value={opt.id}>
          {opt.label}
        </option>
      )),
    [donationCauses]
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
      setValidationError(
        `Minimum donation is ${formatAmount(String(MIN_DONATION))} PKR.`
      );
      return;
    }
    setShowPaymentForm(true);
  }, [amount]);

  const closeModal = useCallback(() => setShowPaymentForm(false), []);

  if (layout === "donation") {
    return (
      <>
        <style>{`
          .sc-donate-hero-section {
            position: relative;
            width: 100%;
            max-width: 100vw;
            height: 100vh;
            min-height: 100vh;
            overflow: hidden;
          }
          .sc-donate-hero-image-wrap {
            position: absolute;
            inset: 0;
          }
          .sc-donate-hero-slide-image {
            object-fit: cover;
            object-position: center;
          }
          .sc-donate-hero-content {
            position: absolute;
            inset: 0;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            max-width: 1400px;
            margin: 0 auto;
            padding: 100px 60px 60px;
          }
          .sc-donate-hero-spacer {
            flex: 1;
          }
          .sc-donate-card-wrapper {
            position: relative;
            z-index: 10;
          }
          .sc-donate-card {
            background: #fff;
            border-radius: 16px;
            padding: 32px;
            width: min(380px, calc(100vw - 40px));
            box-shadow: 0 20px 60px rgba(0,0,0,0.2);
            position: relative;
            overflow: hidden;
          }
          .sc-donate-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, #f15b43 0%, #65cabb 50%, #f15b43 100%);
            background-size: 200% 100%;
            animation: scDonateGradientSlide 3s ease infinite;
          }
          @keyframes scDonateGradientSlide {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .sc-donate-heading {
            font-size: 28px;
            font-weight: 700;
            color: #263b5d;
            margin: 0 0 6px 0;
            text-align: center;
          }
          .sc-donate-subheading {
            font-size: 14px;
            color: #888;
            margin: 0 0 24px 0;
            text-align: center;
          }
          .sc-donate-select {
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
          .sc-donate-amount-options {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 16px;
          }
          .sc-donate-amount-btn {
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
          .sc-donate-amount-btn:hover {
            background: #fef8f7;
          }
          .sc-donate-amount-btn.selected {
            background: #f15b43;
            color: #fff;
            border-color: #f15b43;
          }
          .sc-donate-amount-input {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid #e0e0e0;
            border-radius: 10px;
            font-size: 15px;
            color: #333;
            margin-bottom: 16px;
          }
          .sc-donate-amount-input:focus {
            outline: none;
            border-color: #f15b43;
          }
          .sc-donate-submit-btn {
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
          .sc-donate-submit-btn:hover {
            background: #d94832;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(241,91,67,0.3);
          }
          .sc-donate-error-msg {
            color: #e74c3c;
            font-size: 13px;
            margin-bottom: 12px;
            text-align: center;
          }
          .sc-donate-payment-modal {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.6);
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          .sc-donate-payment-modal-content {
            background: #fff;
            border-radius: 16px;
            max-width: 500px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
          }
          .sc-donate-payment-modal-close {
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
            .sc-donate-hero-content {
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 120px 30px 40px;
              gap: 40px;
            }
            .sc-donate-hero-spacer {
              display: none;
            }
            .sc-donate-card {
              width: 100%;
              max-width: 400px;
            }
          }
          @media (max-width: 768px) {
            .sc-donate-hero-section {
              min-height: 100vh;
              height: auto;
            }
            .sc-donate-hero-content {
              padding-top: 100px;
              padding-bottom: 40px;
            }
            .sc-donate-card {
              padding: 24px;
            }
          }
        `}</style>

        <section className="sc-donate-hero-section">
          <div className="sc-donate-hero-image-wrap">
            <Image
              src={heroImage}
              alt="Social Welfare Development"
              fill
              priority
              loading="eager"
              fetchPriority="high"
              placeholder="blur"
              blurDataURL={HERO_BLUR}
              sizes="100vw"
              quality={75}
              decoding="async"
              className="sc-donate-hero-slide-image"
            />
          </div>

          <div className="sc-donate-hero-content">
            <div className="sc-donate-hero-spacer" />

            <div className="sc-donate-card-wrapper">
              <div className="sc-donate-card">
                <h2 className="sc-donate-heading">{donationTitle}</h2>
                <p className="sc-donate-subheading">
                  {donationSubtitle}
                </p>

                {donationCauses.length > 0 && (
                  <select
                    value={selectedCause}
                    onChange={handleCauseChange}
                    className="sc-donate-select"
                  >
                    {causeSelectOptions}
                  </select>
                )}

                <div className="sc-donate-amount-options">
                  {amountButtons.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      className={`sc-donate-amount-btn ${amount === item.value ? "selected" : ""}`}
                      onClick={() => handlePresetSelect(item.value)}
                    >
                      {item.label}
                    </button>
                  ))}
                  <button
                    type="button"
                    className={`sc-donate-amount-btn ${isOtherAmount ? "selected" : ""}`}
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
                  className="sc-donate-amount-input"
                />

                {validationError && (
                  <p className="sc-donate-error-msg">{validationError}</p>
                )}

                <button
                  type="button"
                  className="sc-donate-submit-btn"
                  onClick={validateAndOpenPayment}
                >
                  DONATE
                </button>
              </div>
            </div>
          </div>
        </section>

        {showPaymentForm && (
          <div
            className="sc-donate-payment-modal"
            onClick={(e) =>
              e.target === e.currentTarget && closeModal()
            }
          >
            <div className="sc-donate-payment-modal-content">
              <button
                type="button"
                className="sc-donate-payment-modal-close"
                onClick={closeModal}
              >
                &times;
              </button>
              <UBLPaymentForm
                donationAmount={parseInt(amount, 10)}
                donationType={selectedCause}
                onPaymentInitiated={() => {}}
                onPaymentCompleted={() => {
                  setShowPaymentForm(false);
                  setAmount("");
                }}
                onPaymentFailed={() => {}}
              />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <style>{`
        .sc-hero-section {
          position: relative;
          width: 100%;
          max-width: 100vw;
          height: 100vh;
          min-height: 100vh;
          overflow: hidden;
        }
        .sc-hero-image-wrap {
          position: absolute;
          inset: 0;
        }
        .sc-hero-slide-image {
          object-fit: cover;
          object-position: center;
        }
        .sc-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.65) 0%,
            rgba(0, 0, 0, 0.35) 50%,
            transparent 100%
          );
          z-index: 1;
        }
        .sc-hero-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          max-width: 1400px;
          margin: 0 auto;
          padding: 100px 60px 60px;
        }
        .sc-hero-text {
          max-width: 620px;
          color: #fff;
        }
        .sc-breadcrumb {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.25rem;
        }
        .sc-breadcrumb a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.2s;
        }
        .sc-breadcrumb a:hover {
          color: #fff;
        }
        .sc-breadcrumb span {
          margin: 0 0.5rem;
        }
        .sc-hero-heading {
          font-size: clamp(2.5rem, 6vw, 3.75rem);
          font-weight: 700;
          line-height: 1.1;
          margin: 0 0 1.5rem 0;
          color: #fff;
          white-space: pre-line;
        }
        .sc-hero-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 2rem 0;
        }
        .sc-hero-bar {
          width: 120px;
          height: 4px;
          background: #f15b43;
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }
        .sc-hero-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          background: #333;
          animation: scBarSlide 2.5s ease-in-out infinite;
        }
        @keyframes scBarSlide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(200%); }
          100% { transform: translateX(-100%); }
        }
        @media (max-width: 1024px) {
          .sc-hero-content {
            justify-content: center;
            align-items: center;
            padding: 120px 30px 40px;
            text-align: center;
          }
          .sc-hero-text {
            text-align: center;
          }
          .sc-hero-bar {
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .sc-hero-section {
            min-height: 80vh;
            height: auto;
          }
          .sc-hero-content {
            padding-top: 100px;
            padding-bottom: 40px;
          }
        }
      `}</style>

      <section className="sc-hero-section">
        <div className="sc-hero-image-wrap">
          <Image
            src={heroImage}
            alt={sectionName}
            fill
            priority
            loading="eager"
            fetchPriority="high"
            placeholder="blur"
            blurDataURL={HERO_BLUR}
            sizes="100vw"
            quality={75}
            decoding="async"
            className="sc-hero-slide-image"
          />
        </div>

        <div className="sc-hero-overlay" />

        <div className="sc-hero-content">
          <div className="sc-hero-text">
            <div className="sc-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              {sectionName}
            </div>
            <h1 className="sc-hero-heading">{heading}</h1>
            <p className="sc-hero-desc">{description}</p>
            <div className="sc-hero-bar" />
          </div>
        </div>
      </section>
    </>
  );
}
