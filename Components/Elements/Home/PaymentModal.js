import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import epgConfig from '../../../config/epg-config';

// Helper function to format amount to 2 decimal places
const formatAmount = (amount) => {
  return parseFloat(amount).toFixed(2);
};

// Helper function to generate a unique order ID
const generateOrderId = () => {
  return `ORD-${Date.now()}-${Math.random()
    .toString(36)
    .substr(2, 6)
    .toUpperCase()}`;
};

export default function PaymentModal({
  show = true,
  onClose = () => {},
  amount = "0.00",
  description = "Donation",
  onSuccess = () => {},
  onError = () => {},
}) {
  const [cardName, setCardName] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [expiryMonth, setExpiryMonth] = React.useState("");
  const [expiryYear, setExpiryYear] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [isTouched, setIsTouched] = React.useState({});
  const [paymentStatus, setPaymentStatus] = React.useState("");
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [transactionId, setTransactionId] = React.useState("");
  const [isCardExpired, setIsCardExpired] = React.useState(false);
  const router = useRouter();

  const primary = "#f15b43";

  useEffect(() => {
    if (!show) {
      setErrors({});
      setIsTouched({});
    }
  }, [show]);

  const getCardType = (num) => {
    const n = (num || "").replace(/\s+/g, "");
    if (/^4\d{0,}$/.test(n)) return "visa";
    if (/^(5[1-5])\d{0,}$/.test(n)) return "mastercard";
    if (/^(2(2[2-9]|[3-6]\d|7[01])|27[0-1])\d{0,}$/.test(n))
      return "mastercard";
    if (/^3[47]\d{0,}$/.test(n)) return "amex";
    return "unknown";
  };

  const activeBrand = React.useMemo(
    () => getCardType(cardNumber),
    [cardNumber]
  );

  const resetForm = () => {
    setCardName("");
    setCardNumber("");
    setExpiryMonth("");
    setExpiryYear("");
    setCvv("");
    setErrors({});
    setIsTouched({});
    setShowSuccess(false);
    setTransactionId("");
    setIsCardExpired(false);
  };

  const handleClose = () => {
    setSent(false);
    setShowSuccess(false);
    resetForm();
    onClose();
  };

  const isValidCardNumber = (cardNumber) => {
    const digits = cardNumber.replace(/\s+/g, "");
    if (!/^\d+$/.test(digits)) return false;

    let sum = 0;
    let isEven = false;

    for (let i = digits.length - 1; i >= 0; i--) {
      let digit = parseInt(digits[i], 10);

      if (isEven) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 === 0;
  };

  const validateField = (name, value) => {
    const validateExpiryDate = (month, year) => {
      if (!month || !year) return null;

      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;

      const enteredYear = parseInt(year, 10);
      const enteredMonth = parseInt(month, 10);

      if (isNaN(enteredYear) || isNaN(enteredMonth)) return null;

      if (
        enteredYear < currentYear ||
        (enteredYear === currentYear && enteredMonth < currentMonth)
      ) {
        return "Card has expired";
      }

      if (enteredYear > currentYear + 10) {
        return "Invalid expiry year";
      }

      return null;
    };

    switch (name) {
      case "cardNumber": {
        const digits = value.replace(/\s+/g, "");
        if (!digits) return "Card number is required";
        if (digits.length < 13 || digits.length > 19)
          return "Invalid card number length";
        if (!/^\d+$/.test(digits))
          return "Card number must contain only numbers";
        if (!isValidCardNumber(value)) return "Invalid card number";
        return "";
      }
      case "cardName":
        if (!value.trim()) return "Cardholder name is required";
        if (value.trim().length < 3)
          return "Name must be at least 3 characters";
        if (!/^[a-zA-Z\s]+$/.test(value.trim()))
          return "Name can only contain letters and spaces";
        return "";
      case "expiryMonth": {
        if (!value) return "Month is required";
        if (!/^\d{1,2}$/.test(value)) return "Invalid month format";
        const month = parseInt(value, 10);
        if (month < 1 || month > 12) return "Month must be between 01-12";
        return "";
      }
      case "expiryYear": {
        if (!value) return "Year is required";
        if (!/^\d{2}$/.test(value)) return "Year must be 2 digits (YY)";
        return "";
      }
      case "cvv": {
        if (!value) return "CVV is required";
        if (!/^\d+$/.test(value)) return "CVV must contain only numbers";
        const expectedLength = activeBrand === "amex" ? 4 : 3;
        if (value.length !== expectedLength) {
          return `CVV must be ${expectedLength} digits for ${
            activeBrand === "amex" ? "American Express" : "this card type"
          }`;
        }
        return "";
      }
      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const fields = [
      { name: "cardNumber", value: cardNumber },
      { name: "cardName", value: cardName },
      { name: "expiryMonth", value: expiryMonth },
      { name: "expiryYear", value: expiryYear },
      { name: "cvv", value: cvv },
    ];

    fields.forEach(({ name, value }) => {
      const error = validateField(name, value);
      if (error) {
        newErrors[name] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field) => {
    setIsTouched((prev) => ({ ...prev, [field]: true }));
    const fieldValue = { cardNumber, cardName, expiryMonth, expiryYear, cvv }[
      field
    ];
    const error = validateField(field, fieldValue);
    setErrors((prev) => ({
      ...prev,
      [field]: error || undefined,
    }));
  };

  const processPayment = React.useCallback(async () => {
    try {
      setIsLoading(true);
      setPaymentStatus("processing");

      const paymentData = {
        amount: amount,
        orderName: description || "Donation",
        orderId: generateOrderId(),
        currency: epgConfig.currency,
        returnPath: `${epgConfig.baseUrl}/api/epg/return`,
        cardNumber: cardNumber.replace(/\s+/g, ""),
        cardName: cardName,
        expiryMonth: expiryMonth,
        expiryYear: expiryYear,
        cvv: cvv,
        customer: epgConfig.customer,
        userName: epgConfig.username,
        password: epgConfig.password,
        store: epgConfig.store,
        terminal: epgConfig.terminal,
        channel: epgConfig.channel,
        transactionHint: epgConfig.transactionHint,
        orderInfo: `Donation for ${description || "charity"}`,
      };

      console.log("Sending payment request to /api/epg/register:", {
        ...paymentData,
        cardNumber:
          "••••" +
          (paymentData.cardNumber ? paymentData.cardNumber.slice(-4) : ""),
      });

      const response = await fetch("/api/epg/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
        body: JSON.stringify(paymentData),
      });

      console.log("Received response with status:", response.status);

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error("Payment failed:", responseData);
        throw new Error(
          responseData.message ||
            responseData.error ||
            `Payment failed with status ${response.status}`
        );
      }

      if (responseData.success) {
        console.log("Payment successful:", responseData);
        setPaymentStatus("success");
        setSent(true);
        setShowSuccess(true);
        onSuccess(responseData);
      } else if (responseData.paymentPortal) {
        console.log(
          "Payment requires external processing:",
          responseData.paymentPortal
        );
        window.open(responseData.paymentPortal, "_blank");
        setErrors({
          form: "Please complete the payment in the new window and return here.",
        });
      } else {
        throw new Error(responseData.message || "Unknown payment status");
      }
    } catch (error) {
      console.error("Payment processing error:", error);
      setPaymentStatus("error");
      setErrors((prev) => ({
        ...prev,
        form: error.message || "Payment processing failed. Please try again.",
      }));
      onError(error);
    } finally {
      setIsLoading(false);
    }
  }, [
    amount,
    description,
    cardNumber,
    cardName,
    expiryMonth,
    expiryYear,
    cvv,
    onSuccess,
    onError,
  ]);

  const handlePayment = async (e) => {
    e.preventDefault();

    // Mark all fields as touched to show errors
    setIsTouched({
      cardNumber: true,
      cardName: true,
      expiryMonth: true,
      expiryYear: true,
      cvv: true,
    });

    // First validate all fields
    const isFormValid = validateForm();
    let cardExpired = false;

    // Check expiry date specifically
    if (expiryMonth && expiryYear) {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;
      const enteredYear = parseInt(expiryYear, 10);
      const enteredMonth = parseInt(expiryMonth, 10);

      if (
        enteredYear < currentYear ||
        (enteredYear === currentYear && enteredMonth < currentMonth)
      ) {
        cardExpired = true;
        setIsCardExpired(true);
      }
    }

    // If card is expired, show error in the success modal
    if (cardExpired) {
      setPaymentStatus("success");
      setTransactionId(
        "FAIL-" + Math.random().toString(36).substr(2, 8).toUpperCase()
      );
      setShowSuccess(true);
      return;
    }

    // If all validations pass, proceed with payment
    if (isFormValid) {
      await processPayment();
    }
  };

  const isFormValid = React.useCallback(() => {
    const hasAllValues =
      cardNumber.trim() && cardName.trim() && expiryMonth && expiryYear && cvv;
    const hasNoErrors = Object.values(errors).every(
      (error) => !error || error === ""
    );

    return hasAllValues && hasNoErrors && !isLoading;
  }, [cardNumber, cardName, expiryMonth, expiryYear, cvv, errors, isLoading]);

  if (!show) return null;

  const getFieldStyle = (fieldName) => ({
    width: "100%",
    padding: "12px",
    border: `2px solid ${
      errors[fieldName] && isTouched[fieldName] ? "#ef4444" : "#e5e7eb"
    }`,
    borderRadius: 8,
    outline: "none",
    transition: "all 0.2s ease",
    fontSize: "14px",
    backgroundColor:
      errors[fieldName] && isTouched[fieldName] ? "#fef2f2" : "#ffffff",
  });

  const labelStyle = {
    fontSize: 13,
    color: "#374151",
    marginBottom: 6,
    fontWeight: "600",
  };

  const sectionCard = {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 20,
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={handleClose}
    >
      <div
        style={{
          width: "95%",
          maxWidth: 500,
          background: "#f9fafb",
          borderRadius: 16,
          padding: 0,
          boxShadow: "0 12px 34px rgba(0,0,0,0.18)",
          border: "1px solid #e5e7eb",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
            borderBottom: "1px solid #e5e7eb",
            background: "#fff",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 12,
                height: 12,
                background: primary,
                borderRadius: "50%",
              }}
            />
            <div>
              <div style={{ fontWeight: 700, fontSize: "16px" }}>
                Card Information
              </div>
              <div style={{ fontSize: 12, color: "#6b7280" }}>
                {description} - {formatAmount(amount)} PKR
              </div>
            </div>
          </div>
          <button
            onClick={handleClose}
            style={{
              border: "none",
              background: "transparent",
              fontSize: 24,
              cursor: "pointer",
              color: "#374151",
              padding: "4px",
            }}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div style={{ padding: 20 }}>
          <div style={sectionCard}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <div style={{ fontWeight: 700 }}>Payment Details</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg
                  width="42"
                  height="26"
                  viewBox="0 0 42 26"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ opacity: activeBrand === "visa" ? 1 : 0.35 }}
                >
                  <rect width="42" height="26" rx="4" fill="#1a1f71" />
                  <text
                    x="50%"
                    y="56%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontSize="12"
                    fontWeight="700"
                    fill="#fff"
                  >
                    VISA
                  </text>
                </svg>
                <svg
                  width="42"
                  height="26"
                  viewBox="0 0 42 26"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ opacity: activeBrand === "mastercard" ? 1 : 0.35 }}
                >
                  <rect
                    width="42"
                    height="26"
                    rx="4"
                    fill="#fff"
                    stroke="#e5e7eb"
                  />
                  <circle cx="18" cy="13" r="7" fill="#eb001b" />
                  <circle cx="24" cy="13" r="7" fill="#f79e1b" />
                </svg>
                <svg
                  width="42"
                  height="26"
                  viewBox="0 0 42 26"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ opacity: activeBrand === "amex" ? 1 : 0.35 }}
                >
                  <rect width="42" height="26" rx="4" fill="#2e77bb" />
                  <text
                    x="50%"
                    y="56%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontSize="10"
                    fontWeight="700"
                    fill="#fff"
                  >
                    AMEX
                  </text>
                </svg>
              </div>
            </div>

            {errors.form && (
              <div
                style={{
                  padding: "12px",
                  background: "#fef2f2",
                  border: "1px solid #ef4444",
                  borderRadius: "8px",
                  color: "#dc2626",
                  fontSize: "14px",
                  marginBottom: "16px",
                }}
              >
                {errors.form}
              </div>
            )}

            {!showSuccess ? (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 6,
                    }}
                  >
                    <label style={labelStyle}>Card Number *</label>
                    {errors.cardNumber && isTouched.cardNumber && (
                      <span style={{ color: "#ef4444", fontSize: 12 }}>
                        {errors.cardNumber}
                      </span>
                    )}
                  </div>
                  <input
                    style={getFieldStyle("cardNumber")}
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter Card Number"
                    value={cardNumber}
                    onChange={(e) => {
                      let value = e.target.value.replace(/[^0-9]/g, "");
                      if (value.length > 19) value = value.slice(0, 19);
                      value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
                      setCardNumber(value);

                      if (isTouched.cardNumber) {
                        const error = validateField("cardNumber", value);
                        setErrors((prev) => ({
                          ...prev,
                          cardNumber: error || undefined,
                        }));
                      }
                    }}
                    onBlur={() => handleBlur("cardNumber")}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 6,
                    }}
                  >
                    <label style={labelStyle}>Cardholder Name *</label>
                    {errors.cardName && isTouched.cardName && (
                      <span style={{ color: "#ef4444", fontSize: 12 }}>
                        {errors.cardName}
                      </span>
                    )}
                  </div>
                  <input
                    style={getFieldStyle("cardName")}
                    type="text"
                    placeholder="Please Enter Your Name"
                    value={cardName}
                    onChange={(e) => {
                      setCardName(e.target.value);
                      if (isTouched.cardName) {
                        const error = validateField("cardName", e.target.value);
                        setErrors((prev) => ({
                          ...prev,
                          cardName: error || undefined,
                        }));
                      }
                    }}
                    onBlur={() => handleBlur("cardName")}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6,
                      }}
                    >
                      <label style={labelStyle}>Month *</label>
                      {errors.expiryMonth && isTouched.expiryMonth && (
                        <span style={{ color: "#ef4444", fontSize: 12 }}>
                          {errors.expiryMonth}
                        </span>
                      )}
                    </div>
                    <input
                      style={getFieldStyle("expiryMonth")}
                      type="text"
                      inputMode="numeric"
                      placeholder="MM"
                      maxLength={2}
                      value={expiryMonth}
                      onChange={(e) => {
                        let value = e.target.value.replace(/[^0-9]/g, "");
                        if (value.length === 1 && parseInt(value) > 1) {
                          value = "0" + value;
                        }
                        setExpiryMonth(value);
                        if (isTouched.expiryMonth) {
                          const error = validateField("expiryMonth", value);
                          setErrors((prev) => ({
                            ...prev,
                            expiryMonth: error || undefined,
                          }));
                        }
                      }}
                      onBlur={() => handleBlur("expiryMonth")}
                    />
                    {errors.expiryMonth && isTouched.expiryMonth && (
                      <span
                        style={{ color: "#ef4444", fontSize: 11, marginTop: 4 }}
                      >
                        {errors.expiryMonth}
                      </span>
                    )}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6,
                      }}
                    >
                      <label style={labelStyle}>Year *</label>
                      {errors.expiryYear && isTouched.expiryYear && (
                        <span style={{ color: "#ef4444", fontSize: 12 }}>
                          {errors.expiryYear}
                        </span>
                      )}
                    </div>
                    <input
                      style={getFieldStyle("expiryYear")}
                      type="text"
                      inputMode="numeric"
                      placeholder="YY"
                      maxLength={2}
                      value={expiryYear}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, "");
                        setExpiryYear(value);
                        if (isTouched.expiryYear) {
                          const error = validateField("expiryYear", value);
                          setErrors((prev) => ({
                            ...prev,
                            expiryYear: error || undefined,
                          }));
                        }
                      }}
                      onBlur={() => handleBlur("expiryYear")}
                    />
                    {errors.expiryYear && isTouched.expiryYear && (
                      <span
                        style={{ color: "#ef4444", fontSize: 11, marginTop: 4 }}
                      >
                        {errors.expiryYear}
                      </span>
                    )}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6,
                      }}
                    >
                      <label style={labelStyle}>CVV *</label>
                    </div>
                    <input
                      style={getFieldStyle("cvv")}
                      type="password"
                      inputMode="numeric"
                      placeholder={
                        activeBrand === "amex" ? "4 digits" : "3 digits"
                      }
                      maxLength={activeBrand === "amex" ? 4 : 3}
                      value={cvv}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, "");
                        setCvv(value);
                        if (isTouched.cvv) {
                          const error = validateField("cvv", value);
                          setErrors((prev) => ({
                            ...prev,
                            cvv: error || undefined,
                          }));
                        }
                      }}
                      onBlur={() => handleBlur("cvv")}
                    />
                    {errors.cvv && isTouched.cvv && (
                      <span
                        style={{ color: "#ef4444", fontSize: 11, marginTop: 4 }}
                      >
                        {errors.cvv}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "30px 20px" }}>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "#e6f7ee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    position: "relative",
                    animation: "bounce 0.6s ease-in-out",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "#10b981",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                    }}
                  >
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12L11 14L15 10M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {isCardExpired ? (
                  <>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "#dc2626",
                        marginBottom: "12px",
                        lineHeight: "1.3",
                      }}
                    >
                      Payment Failed
                    </h3>
                    <p
                      style={{
                        color: "#dc2626",
                        fontSize: "16px",
                        lineHeight: "1.5",
                        marginBottom: "24px",
                        maxWidth: "400px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      The card's expiration date is invalid. Please check your
                      card details and try again. (ID: {transactionId})
                    </p>
                  </>
                ) : (
                  <>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "#065f46",
                        marginBottom: "12px",
                        lineHeight: "1.3",
                      }}
                    >
                      Payment Successful!
                    </h3>
                    <p
                      style={{
                        color: "#047857",
                        fontSize: "16px",
                        lineHeight: "1.5",
                        marginBottom: "24px",
                        maxWidth: "400px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Thank you for your generous donation of{" "}
                      {formatAmount(amount)} PKR. A confirmation has been sent
                      to your email.
                    </p>
                  </>
                )}

                <div
                  style={{
                    background: "#f3f4f6",
                    borderRadius: "8px",
                    padding: "16px",
                    margin: "20px 0",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                      fontSize: "14px",
                      color: "#4b5563",
                    }}
                  >
                    <span>Transaction ID:</span>
                    <span style={{ fontWeight: "600", color: "#111827" }}>
                      {transactionId || "N/A"}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "14px",
                      color: "#4b5563",
                    }}
                  >
                    <span>Date:</span>
                    <span style={{ fontWeight: "500" }}>
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <button
                    onClick={handleClose}
                    style={{
                      background: "#f3f4f6",
                      color: "#4b5563",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      padding: "12px 24px",
                      fontSize: "16px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    }}
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      handleClose();
                    }}
                    style={{
                      background: primary,
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding: "12px 28px",
                      fontSize: "16px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      ":hover": {
                        opacity: 0.9,
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
                    View Details
                  </button>
                </div>

                <style jsx global>{`
                  @keyframes bounce {
                    0%,
                    100% {
                      transform: translateY(0);
                    }
                    50% {
                      transform: translateY(-10px);
                    }
                  }
                `}</style>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
            padding: 16,
            borderTop: "1px solid #e5e7eb",
            background: "#fff",
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          }}
        >
          <button
            onClick={handleClose}
            style={{
              padding: "12px 20px",
              background: "transparent",
              color: "#6b7280",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
              transition: "all 0.2s ease",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            disabled={!isFormValid() || sent || isLoading}
            style={{
              padding: "12px 24px",
              background:
                isFormValid() && !sent && !isLoading ? primary : "#9ca3af",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor:
                isFormValid() && !sent && !isLoading
                  ? "pointer"
                  : "not-allowed",
              fontWeight: 700,
              transition: "all 0.2s ease",
              opacity: isFormValid() && !sent && !isLoading ? 1 : 0.6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              minWidth: "100px",
            }}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : sent ? (
              "Payment Complete"
            ) : (
              `Pay ${formatAmount(amount)} PKR`
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
