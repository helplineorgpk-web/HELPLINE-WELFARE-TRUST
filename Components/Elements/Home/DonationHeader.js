"use client";
import React, { useState, useRef, useCallback, useMemo, useEffect } from "react";
import Image from "next/image";
import UBLPaymentForm from "../Payment/UBLPaymentForm";
import { getHeroAsset } from "../../../lib/heroImage";

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

const HERO_IMAGES = [
  "/img/Campaigns/Education.webp",
  "/img/Campaigns/Medical.webp",
  "/img/Campaigns/Food.webp",
  "/img/Campaigns/Disaster.webp",
  "/img/Campaigns/Environment.webp",
];

const HERO_ASSETS = HERO_IMAGES.map((src) => getHeroAsset(src));

function formatAmount(value) {
  if (!value) return "";
  return new Intl.NumberFormat("en-PK").format(value);
}

function parseAmount(value) {
  return value.replace(/[^0-9]/g, "");
}

export default function DonationHeader() {
  const [selectedCause, setSelectedCause] = useState(CAUSE_OPTIONS[0].id);
  const [amount, setAmount] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);
  const amountInputRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, []);

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
          overflow: hidden;
          background: #fff;
        }
        .hero-image-wrap {
          position: absolute;
          inset: 0;
        }
        .hero-slide-image {
          object-fit: cover;
          object-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .hero-slide-image.active {
          opacity: 1;
        }
        .hero-overlay {
          display: none;
        }
        .hero-content {
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
        .hero-spacer {
          flex: 1;
        }
        .hero-text {
          flex: 1;
          max-width: 600px;
        }
        .hero-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 300;
          color: #1a2332;
          line-height: 1.2;
          margin: 0 0 24px 0;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .hero-subtitle {
          font-size: clamp(16px, 2vw, 20px);
          color: #333;
          line-height: 1.7;
          margin: 0 0 32px 0;
          max-width: 480px;
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
            padding: 120px 30px 40px;
            gap: 40px;
          }
          .hero-spacer {
            display: none;
          }
          .hero-text {
            max-width: 100%;
            text-align: center;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
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
            min-height: 100vh;
            height: auto;
          }
          .hero-content {
            padding-top: 100px;
            padding-bottom: 40px;
          }
          .donate-card {
            padding: 24px;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-image-wrap">
          {HERO_ASSETS.map((asset, index) => {
            const isFirst = index === 0;
            return (
              <Image
                key={asset.src}
                src={asset.src}
                alt="Donate"
                fill
                priority={isFirst}
                loading={isFirst ? "eager" : "lazy"}
                fetchPriority={isFirst ? "high" : "low"}
                placeholder="blur"
                blurDataURL={asset.blurDataURL}
                sizes="100vw"
                quality={70}
                className={`hero-slide-image ${index === activeSlide ? "active" : ""}`}
              />
            );
          })}
        </div>

        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-spacer" />

          <div className="donate-card-wrapper">
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
          </div>
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
