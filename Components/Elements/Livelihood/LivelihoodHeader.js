"use client";
import React, { useState, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import UBLPaymentForm from "../Payment/UBLPaymentForm";
import { getHeroAsset } from "../../../lib/heroImage";

const MIN_DONATION = 100;

const CAUSE_OPTIONS = [
  {
    id: "Livelihood",
    label: "Livelihood & Food Security",
    amounts: [
      { value: "5000", label: "Support Livelihood Program 5,000 PKR" },
      { value: "10000", label: "Support Livelihood Program 10,000 PKR" },
    ],
  },
];

function formatAmount(value) {
  if (!value) return "";
  return new Intl.NumberFormat("en-PK").format(value);
}

function parseAmount(value) {
  return value.replace(/[^0-9]/g, "");
}

export default function LivelihoodHeader({ image }) {
  const HERO_IMAGE = image && image.startsWith("/") ? image : image ? `/${image}` : "/img/causes/karbathheader.png";
  const HERO_ASSET = useMemo(() => getHeroAsset(HERO_IMAGE), [HERO_IMAGE]);

  const [selectedCause, setSelectedCause] = useState(CAUSE_OPTIONS[0].id);
  const [amount, setAmount] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [validationError, setValidationError] = useState("");
  const amountInputRef = useRef(null);

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

  const amountButtons = useMemo(
    () =>
      currentCause?.amounts.map((item) => ({
        value: item.value,
        label: item.label,
      })) ?? [],
    [currentCause]
  );

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

  return (
    <>
      <style>{`
        .livelihood-hero-section {
          position: relative;
          width: 100%;
          max-width: 100vw;
          height: 100vh;
          min-height: 100vh;
          overflow: hidden;
          background: #fff;
        }
        .livelihood-hero-image-wrap {
          position: absolute;
          inset: 0;
        }
        .livelihood-hero-slide-image {
          object-fit: cover;
          object-position: center;
        }
        .livelihood-hero-overlay {
          display: none;
        }
        .livelihood-hero-content {
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
        .livelihood-hero-spacer {
          flex: 1;
        }
        .livelihood-donate-card-wrapper {
          position: relative;
          z-index: 10;
        }
        .livelihood-donate-card {
          background: #fff;
          border-radius: 16px;
          padding: 32px;
          width: 380px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          position: relative;
          overflow: hidden;
        }
        .livelihood-donate-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #f15b43 0%, #65cabb 50%, #f15b43 100%);
          background-size: 200% 100%;
          animation: livelihoodGradientSlide 3s ease infinite;
        }
        @keyframes livelihoodGradientSlide {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .livelihood-donate-heading {
          font-size: 24px;
          font-weight: 700;
          color: #263b5d;
          margin: 0 0 6px 0;
          text-align: center;
        }
        .livelihood-donate-subheading {
          font-size: 14px;
          color: #888;
          margin: 0 0 24px 0;
          text-align: center;
        }
        .livelihood-donate-select {
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
        .livelihood-amount-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 16px;
        }
        .livelihood-amount-btn {
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
        .livelihood-amount-btn:hover {
          background: #fef8f7;
        }
        .livelihood-amount-btn.selected {
          background: #f15b43;
          color: #fff;
          border-color: #f15b43;
        }
        .livelihood-amount-input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          font-size: 15px;
          color: #333;
          margin-bottom: 16px;
        }
        .livelihood-amount-input:focus {
          outline: none;
          border-color: #f15b43;
        }
        .livelihood-donate-btn {
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
        .livelihood-donate-btn:hover {
          background: #d94832;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(241,91,67,0.3);
        }
        .livelihood-error-msg {
          color: #e74c3c;
          font-size: 13px;
          margin-bottom: 12px;
          text-align: center;
        }
        .livelihood-payment-modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .livelihood-payment-modal-content {
          background: #fff;
          border-radius: 16px;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }
        .livelihood-payment-modal-close {
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
          .livelihood-hero-content {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 120px 30px 40px;
            gap: 40px;
          }
          .livelihood-hero-spacer {
            display: none;
          }
          .livelihood-donate-card {
            width: 100%;
            max-width: 400px;
          }
        }
        @media (max-width: 768px) {
          .livelihood-hero-section {
            min-height: 100vh;
            height: auto;
          }
          .livelihood-hero-content {
            padding-top: 100px;
            padding-bottom: 40px;
          }
          .livelihood-donate-card {
            padding: 24px;
          }
        }
      `}</style>

      <section className="livelihood-hero-section">
        <div className="livelihood-hero-image-wrap">
          <Image
            src={HERO_ASSET.src}
            alt="Livelihood & Food Security"
            fill
            priority
            placeholder="blur"
            blurDataURL={HERO_ASSET.blurDataURL}
            sizes="100vw"
            quality={70}
            className="livelihood-hero-slide-image"
          />
        </div>

        <div className="livelihood-hero-content">
          <div className="livelihood-hero-spacer" />

          <div className="livelihood-donate-card-wrapper">
            <div className="livelihood-donate-card">
              <h2 className="livelihood-donate-heading">Donate Now</h2>
              <p className="livelihood-donate-subheading">
                Your contribution changes lives
              </p>

              <select
                value={selectedCause}
                onChange={(e) => {
                  setSelectedCause(e.target.value);
                  setAmount("");
                  setValidationError("");
                }}
                className="livelihood-donate-select"
              >
                {CAUSE_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>

              <div className="livelihood-amount-options">
                {amountButtons.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    className={`livelihood-amount-btn ${amount === item.value ? "selected" : ""}`}
                    onClick={() => handlePresetSelect(item.value)}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  type="button"
                  className={`livelihood-amount-btn ${isOtherAmount ? "selected" : ""}`}
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
                className="livelihood-amount-input"
              />

              {validationError && (
                <p className="livelihood-error-msg">{validationError}</p>
              )}

              <button
                type="button"
                className="livelihood-donate-btn"
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
          className="livelihood-payment-modal"
          onClick={(e) =>
            e.target === e.currentTarget && closeModal()
          }
        >
          <div className="livelihood-payment-modal-content">
            <button
              className="livelihood-payment-modal-close"
              onClick={closeModal}
            >
              &times;
            </button>
            <UBLPaymentForm
              amount={parseInt(amount, 10)}
              cause={selectedCause}
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
