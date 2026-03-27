import React, { useState } from "react";
import styles from "./FloodReliefDetails.module.css";

const floodReliefData = {
  2023: {
    data: [
      { province: "Punjab", families: 1500, amount: "Rs 18,000,000" },
      { province: "Sindh", families: 1200, amount: "Rs 15,000,000" },
      { province: "Balochistan", families: 800, amount: "Rs 10,000,000" },
      { province: "KPK", families: 600, amount: "Rs 8,000,000" },
      { province: "AJK", families: 300, amount: "Rs 4,000,000" },
      { province: "Total", families: 4400, amount: "Rs 55,000,000" },
    ],
  },
  2022: {
    data: [
      { province: "Punjab", families: 2000, amount: "Rs 25,000,000" },
      { province: "Sindh", families: 1800, amount: "Rs 22,000,000" },
      { province: "Balochistan", families: 1000, amount: "Rs 12,000,000" },
      { province: "KPK", families: 800, amount: "Rs 10,000,000" },
      { province: "AJK", families: 400, amount: "Rs 5,000,000" },
      { province: "Total", families: 6000, amount: "Rs 74,000,000" },
    ],
  },
};

function FloodReliefDetails() {
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const sortedYears = Object.keys(floodReliefData).sort((a, b) => b - a);
  const selectedRecord = floodReliefData[selectedYear] || { data: [] };

  return (
    <section className="container">
      <section className={styles.floodReliefDetails}>
        <div className="container">
          <h3>Disaster Relief &amp; Rehabilitation Impact</h3>
          <p>
            When disaster strikes, families can lose safety, shelter, food, health, and stability almost overnight. Helpline Welfare Trust responds with urgent relief and longer-term rehabilitation. In {selectedYear}, we supported{" "}
            {floodReliefData[selectedYear]?.data.find((r) => r.province === "Total")
              ?.families || ""}{" "}
            families with emergency relief packages including food, tents, clean water, medicines, and other essentials needed for survival and safety. In times of disaster, fast help saves lives, and committed recovery support helps communities begin again.
          </p>
        </div>
      </section>

      <div className={styles.floodReliefPage}>
        <h2 className={styles.title}>Flood Relief Distribution Report</h2>
        <div className={styles.buttons}>
          {sortedYears.map((year) => (
            <button
              key={year}
              onClick={() => handleYearChange(year)}
              className={`${styles.button} ${
                selectedYear === year ? styles.active : ""
              }`}
            >
              {year}
            </button>
          ))}
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Province</th>
              <th>Families Helped</th>
              <th>Relief Amount</th>
            </tr>
          </thead>
          <tbody>
            {selectedRecord.data.map((record, index) => (
              <tr key={index}>
                <td>{record.province}</td>
                <td>{record.families}</td>
                <td>{record.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className={styles.reliefPackages}>
        <div className="container">
          <h3>Emergency Relief Packages</h3>
          <div className={styles.packagesGrid}>
            <div className={styles.packageCard}>
              <h4>Emergency Package</h4>
              <div className={styles.packagePrice}>PKR 10,000</div>
              <ul className={styles.packageItems}>
                <li>Food supplies for 1 week</li>
                <li>Clean water (20L)</li>
                <li>Basic medical kit</li>
                <li>Emergency blankets</li>
                <li>Flashlight & batteries</li>
              </ul>
            </div>
            <div className={styles.packageCard}>
              <h4>Family Package</h4>
              <div className={styles.packagePrice}>PKR 25,000</div>
              <ul className={styles.packageItems}>
                <li>Food supplies for 1 month</li>
                <li>Clean water (100L)</li>
                <li>Complete medical kit</li>
                <li>Temporary shelter materials</li>
                <li>Essential household items</li>
                <li>Clothing & blankets</li>
              </ul>
            </div>
            <div className={styles.packageCard}>
              <h4>Community Package</h4>
              <div className={styles.packagePrice}>PKR 50,000</div>
              <ul className={styles.packageItems}>
                <li>Food supplies for 2 months</li>
                <li>Water purification system</li>
                <li>Medical supplies for 10 families</li>
                <li>Rebuilding materials</li>
                <li>Educational supplies</li>
                <li>Livelihood support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default FloodReliefDetails;
