import React, { useState } from "react"; // Import useState
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import styles from "../../../public/css/headArea.module.css";

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

  const handleCauseChange = (event) => {
    setSelectedCause(event.target.value);
    setAmount("");
  };

  const handleAmountSelect = (amount) => {
    if (amount === "") {
      setAmount("");
      return;
    }
    const numericAmount = amount.replace(/[^0-9]/g, "");
    setAmount(numericAmount);
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
                        <option value="Masjid Maktub">Masjid Maktub</option>
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
                      <button>Donate</button>
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
