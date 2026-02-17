import React, { useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import UBLPaymentForm from "../Payment/UBLPaymentForm";
import styles from "../../../public/css/headArea.module.css";

const BG_IMAGES = [
  "/img/Campaigns/Masjid.jpg",
  "/img/Campaigns/Ramadan.jpg",
  "/img/Campaigns/Rashion.jpg",
  "/img/Campaigns/Student.jpg",
  "/img/Campaigns/Vocational.jpg",
];

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
    amounts: [
      { value: "1300000", label: "VTC Monthly PKR 1,300,000" },
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

export default function HeadArea() {
  const [selectedCause, setSelectedCause] = useState(CAUSE_OPTIONS[0].id);
  const [amount, setAmount] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [validationError, setValidationError] = useState("");
  const amountInputRef = useRef(null);

  const currentCause = CAUSE_OPTIONS.find((c) => c.id === selectedCause);
  const presetValues = currentCause?.amounts.map((a) => a.value) ?? [];
  const isPresetAmount = presetValues.includes(amount);
  const isOtherAmount = amount !== "" && !isPresetAmount;

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

  const handlePaymentInitiated = useCallback((paymentData) => {
    // Payment flow started; optional: analytics or logging
  }, []);

  const handlePaymentCompleted = useCallback((paymentData) => {
    setShowPaymentForm(false);
    setAmount("");
  }, []);

  const handlePaymentFailed = useCallback((error) => {
    // Error already shown by UBLPaymentForm; optional: toast or logging
  }, []);

  const closeModal = useCallback(() => setShowPaymentForm(false), []);

  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const handleModalKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
  };

  return (
    <div className={styles.head_area_wrapper}>
      <Swiper
        className={styles.bg_slider}
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        loop
      >
        {BG_IMAGES.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.head_area}
              style={{
                backgroundImage: `url(${src})`,
                objectFit: "cover",
              }}
            >
              <div className={styles.overlay} aria-hidden="true" />
              <div className={styles.main_container}>
                <div className={styles.text_container}>
                  <div className={styles.text}>
                    <h2 style={{ color: "#f15b43" }}>Donate</h2>

                    <label htmlFor="donate-cause" className={styles.sr_only}>
                      Select cause
                    </label>
                    <select
                      id="donate-cause"
                      name="donate-cause"
                      value={selectedCause}
                      onChange={handleCauseChange}
                      aria-label="Select cause to donate to"
                    >
                      {CAUSE_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>

                    <div className={styles.donation_details} role="group" aria-label="Donation amount options">
                      {currentCause?.amounts.map((item) => (
                        <div
                          key={item.value}
                          className={`${styles.detail_card} ${
                            amount === item.value ? styles.selectedCard : ""
                          }`}
                          onClick={() => handlePresetSelect(item.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              handlePresetSelect(item.value);
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          aria-pressed={amount === item.value}
                          aria-label={item.label}
                        >
                          {item.label}
                        </div>
                      ))}
                      <div
                        className={`${styles.detail_card} ${
                          isOtherAmount ? styles.selectedCard : ""
                        }`}
                        onClick={handleOtherAmountClick}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleOtherAmountClick();
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-pressed={isOtherAmount}
                        aria-label="Enter other amount"
                      >
                        Other Amount
                      </div>
                    </div>

                    <div>
                      <label htmlFor="donate-amount" className={styles.sr_only}>
                        Donation amount (PKR)
                      </label>
                      <input
                        ref={amountInputRef}
                        id="donate-amount"
                        type="text"
                        inputMode="numeric"
                        placeholder="Enter amount (PKR)"
                        value={formatAmount(amount)}
                        onChange={handleAmountInputChange}
                        aria-invalid={!!validationError}
                        aria-describedby={validationError ? "donate-amount-error" : undefined}
                      />
                      {validationError && (
                        <p
                          id="donate-amount-error"
                          className={styles.validationError}
                          role="alert"
                        >
                          {validationError}
                        </p>
                      )}
                      <button
                        type="button"
                        onClick={validateAndOpenPayment}
                      >
                        Donate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.wave} aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                  preserveAspectRatio="none"
                  fill="#fff"
                >
                  <path d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,106.7C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64V320H0Z" />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.wave} aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="#fff"
        >
          <path
            className="elementor-shape-fill"
            d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,106.7C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64V320H0Z"
          />
        </svg>
      </div>

      {showPaymentForm && (
        <div
          className={styles.paymentModal}
          onClick={handleModalBackdropClick}
          onKeyDown={handleModalKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="payment-modal-title"
        >
          <div className={styles.paymentModalContent}>
            <div className={styles.paymentModalHeader}>
              <h3 id="payment-modal-title">Make a Donation</h3>
              <button
                type="button"
                onClick={closeModal}
                className={styles.closeButton}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <UBLPaymentForm
              donationAmount={amount ? parseFloat(amount, 10) : 0}
              donationType={selectedCause}
              onPaymentInitiated={handlePaymentInitiated}
              onPaymentCompleted={handlePaymentCompleted}
              onPaymentFailed={handlePaymentFailed}
            />
          </div>
        </div>
      )}
    </div>
  );
} 
  