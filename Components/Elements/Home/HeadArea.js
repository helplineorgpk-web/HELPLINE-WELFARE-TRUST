import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import styles from "../../../public/css/headArea.module.css";
import PaymentModal from "./PaymentModal";

const bgImages = [
  "/img/causes/Masjid.jpg",
  "/img/causes/RashanPackage.jpg",
  "/img/causes/StudentSupportProgram.jpg",
  "/img/causes/VocationalTrainingCenter.jpg",
  "/img/causes/floodappeal.jpg",
];

export default function HeadArea() {
  const [selectedCause, setSelectedCause] = useState("Support A Student");
  const [amount, setAmount] = useState("");
  const router = useRouter();

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentResult, setPaymentResult] = useState(null);

  // EPG user-provided fields (used by register/finalize APIs)
  const [epgCustomer, setEpgCustomer] = useState("");
  const [epgUserName, setEpgUserName] = useState("");
  const [epgPassword, setEpgPassword] = useState("");
  const [epgStore, setEpgStore] = useState("");
  const [epgTerminal, setEpgTerminal] = useState("");
  const [epgChannel, setEpgChannel] = useState("");
  const [epgCurrency, setEpgCurrency] = useState("");
  const [epgOrderName, setEpgOrderName] = useState("");
  const [epgOrderId, setEpgOrderId] = useState("");
  const [epgTransactionHint, setEpgTransactionHint] = useState("");
  const [epgReturnPath, setEpgReturnPath] = useState("");
  const [epgFinalizationUrl, setEpgFinalizationUrl] = useState("");

  const buildEpgRegisterPayload = () => {
    const payload = { amount: String(amount) };
    if (epgCustomer) payload.customer = epgCustomer;
    if (epgUserName) payload.userName = epgUserName;
    if (epgPassword) payload.password = epgPassword;
    if (epgStore) payload.store = epgStore;
    if (epgTerminal) payload.terminal = epgTerminal;
    if (epgChannel) payload.channel = epgChannel;
    if (epgCurrency) payload.currency = epgCurrency;
    if (epgOrderName) payload.orderName = epgOrderName;
    if (epgOrderId) payload.orderId = epgOrderId;
    if (epgTransactionHint) payload.transactionHint = epgTransactionHint;
    if (epgReturnPath) payload.returnPath = epgReturnPath;
    return payload;
  };

  const buildEpgFinalizePayload = (transactionId) => {
    const payload = { transactionId };
    if (epgCustomer) payload.customer = epgCustomer;
    if (epgUserName) payload.userName = epgUserName;
    if (epgPassword) payload.password = epgPassword;
    if (epgFinalizationUrl) payload.finalizationUrl = epgFinalizationUrl;
    return payload;
  };

  const handleCauseChange = (event) => {
    setSelectedCause(event.target.value);
    setAmount("");
  };

  useEffect(() => {
    if (!router || !router.isReady) return;
    const txId = router.query?.transactionId;
    if (!txId || typeof txId !== "string") return;

    const finalize = async () => {
      try {
        setShowPaymentModal(true);
        setPaymentLoading(true);
        setPaymentError(null);
        setPaymentResult(null);
        const res = await fetch("/api/epg/finalize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(buildEpgFinalizePayload(txId)),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Finalization failed");
        setPaymentResult(data);
      } catch (e) {
        setPaymentError(e.message || "Something went wrong");
      } finally {
        setPaymentLoading(false);
      }
    };

    finalize();

    const cleaned = { ...router.query };
    delete cleaned.transactionId;
    router.replace({ pathname: router.pathname, query: cleaned }, undefined, {
      shallow: true,
    });
  }, [router]);

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setPaymentResult(null);
    setPaymentError(null);
  };

  const handleAmountSelect = (amount) => {
    if (amount === "") {
      setAmount("");
      return;
    }
    const numericAmount = amount.replace(/[^0-9]/g, "");
    setAmount(numericAmount);
  };

  const handleDonate = async (e) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    try {
      if (!amount || String(amount).trim() === "") {
        alert("Please enter an amount first.");
        return;
      }
      const regRes = await fetch("/api/epg/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildEpgRegisterPayload()),
      });
      const regData = await regRes.json();
      if (!regRes.ok) {
        console.error("EPG register error:", regData);
        alert(regData?.error || "Failed to initiate payment.");
        return;
      }
      const { paymentPortal, transactionId } = regData;
      if (!paymentPortal || !transactionId) {
        alert("Payment gateway did not return a valid response.");
        return;
      }
      const isLocalReturn =
        typeof paymentPortal === "string" &&
        paymentPortal.startsWith("/api/epg/return");
      if (isLocalReturn) {
        setShowPaymentModal(true);
        setPaymentLoading(true);
        setPaymentError(null);
        setPaymentResult(null);
        try {
          const finRes = await fetch("/api/epg/finalize", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(buildEpgFinalizePayload(transactionId)),
          });
          const finData = await finRes.json();
          if (!finRes.ok)
            throw new Error(finData?.error || "Finalization failed");
          setPaymentResult(finData);
        } catch (e) {
          setPaymentError(e.message || "Something went wrong");
        } finally {
          setPaymentLoading(false);
        }
        return;
      }

      const form = document.createElement("form");
      form.method = "POST";
      form.action = paymentPortal;
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "TransactionID";
      input.value = transactionId;
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
    } catch (err) {
      console.error("Donation API request failed:", err);
      alert("Something went wrong. Please try again.");
    }
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
        {bgImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.head_area}
              style={{
                backgroundImage: `url(${src})`,
                objectFit: "cover",
              }}
            >
              <div className={styles.overlay}></div>
              <div className={styles.main_container}>
                <div className={styles.text_container}>
                  <div className={styles.text}>
                    <div>
                      <h2 style={{ color: "#f15b43" }}>Donate</h2>
                      <select
                        name="donate for cause"
                        id="donate-cause"
                        onChange={handleCauseChange}
                        value={selectedCause}
                      >
                        <option value="Support A Student">
                          Support A Student
                        </option>
                        <option value="Masjid Maktub">Masjid School</option>
                        <option value="Rashan Package">Rashan Package</option>
                        <option value="Vocational Training Center">
                          Vocational Training Center
                        </option>
                      </select>
                    </div>

                    <div className={styles.donation_details}>
                      {selectedCause === "Support A Student" && (
                        <div>
                          <div
                            className={`${styles.detail_card} ${
                              amount === "2200" ? styles.selectedCard : ""
                            }`}
                            onClick={() => handleAmountSelect("2200")}
                          >
                            Monthly Per Student 2,200 PKR
                          </div>
                          <div
                            className={`${styles.detail_card} ${
                              amount === "24400" ? styles.selectedCard : ""
                            }`}
                            onClick={() => handleAmountSelect("24400")}
                          >
                            Yearly Per Student 24,400 PKR
                          </div>
                          <div
                            className={`${styles.detail_card} ${
                              amount && !["2200", "24400"].includes(amount)
                                ? styles.selectedCard
                                : ""
                            }`}
                            onClick={() => handleAmountSelect("")}
                          >
                            Other Amount
                          </div>
                        </div>
                      )}
                      {selectedCause === "Masjid Maktub" && (
                        <div>
                          <div
                            className={`${styles.detail_card} ${
                              amount === "10000" ? styles.selectedCard : ""
                            }`}
                            onClick={() => handleAmountSelect("10000")}
                          >
                            Donate For 1 Prayer Musalla 10,000 PKR
                          </div>
                          <div
                            className={`${styles.detail_card} ${
                              amount === "20000" ? styles.selectedCard : ""
                            }`}
                            onClick={() => handleAmountSelect("20000")}
                          >
                            Donate For 2 Prayer Musalla 20,000 PKR
                          </div>
                          <div
                            className={`${styles.detail_card} ${
                              amount && !["10000", "20000"].includes(amount)
                                ? styles.selectedCard
                                : ""
                            }`}
                            onClick={() => handleAmountSelect("")}
                          >
                            Other Amount
                          </div>
                        </div>
                      )}
                      {selectedCause === "Rashan Package" && (
                        <div>
                          <div
                            className={`${styles.detail_card} ${
                              amount === "6000" ? styles.selectedCard : ""
                            }`}
                            onClick={() => handleAmountSelect("6000")}
                          >
                            Monthly Rashan Package 6,000 PKR
                          </div>
                          <div
                            className={`${styles.detail_card} ${
                              amount && amount !== "6000"
                                ? styles.selectedCard
                                : ""
                            }`}
                            onClick={() => handleAmountSelect("")}
                          >
                            Other Amount
                          </div>
                        </div>
                      )}
                      {selectedCause === "Vocational Training Center" && (
                        <div>
                          <div
                            className={`${styles.detail_card} ${
                              amount === "1300000" ? styles.selectedCard : ""
                            }`}
                            onClick={() => handleAmountSelect("1300000")}
                          >
                            VTC Monthly PKR 1,300,000
                          </div>
                          <div
                            className={`${styles.detail_card} ${
                              amount && amount !== "1300000"
                                ? styles.selectedCard
                                : ""
                            }`}
                            onClick={() => handleAmountSelect("")}
                          >
                            Other Amount
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Enter amount"
                        value={
                          amount ? new Intl.NumberFormat().format(amount) : ""
                        }
                        onChange={(e) =>
                          setAmount(e.target.value.replace(/[^0-9]/g, ""))
                        }
                      />
                      <button type="button" onClick={(e) => handleDonate(e)}>
                        Donate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.wave}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                  preserveAspectRatio="none"
                  fill="#fff"
                >
                  <path d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,106.7C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64V320H0Z"></path>
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <PaymentModal 
        show={showPaymentModal} 
        onClose={closePaymentModal}
        amount={amount || '0'}
        description={`${selectedCause} Donation`}
        onSuccess={(data) => {
          console.log('Payment successful:', data);
          closePaymentModal();
        }}
        onError={(error) => {
          console.error('Payment error:', error);
        }}
      />
      <div className={styles.wave}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="#fff"
        >
          <path
            className="elementor-shape-fill"
            d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,106.7C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64V320H0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
