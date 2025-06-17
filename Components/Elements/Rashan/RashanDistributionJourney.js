import React, { useState } from "react";
import styles from "../../../public/css/RashanPage.module.css";

const records = {
  2023: {
    data: [
      { province: "Punjab", beneficiaries: 6604, amount: "Rs 9,584,100" },
      { province: "Sindh", beneficiaries: 1300, amount: "Rs 3,400,000" },
      { province: "Balochistan", beneficiaries: 1700, amount: "Rs 2,348,100" },
      { province: "KPK", beneficiaries: 1490, amount: "Rs 3,825,000" },
      { province: "AJK", beneficiaries: 550, amount: "Rs 1,625,075" },
      { province: "Total", beneficiaries: 11644, amount: "Rs 20,782,275" },
    ],
  },
  2018: {
    data: [
      { province: "Punjab", beneficiaries: 5000, amount: "Rs 83,66,972" },
      { province: "Sindh", beneficiaries: 2000, amount: "Rs 3,680,000" },
      { province: "Balochistan", beneficiaries: 2750, amount: "Rs 5,500,000" },
      { province: "KPK", beneficiaries: 800, amount: "Rs 1,600,000" },
      { province: "AJK", beneficiaries: 300, amount: "Rs 600,000" },
      { province: "Total", beneficiaries: 10850, amount: "Rs 20,601,305" },
    ],
  },
  2017: {
    data: [
      { province: "Punjab", beneficiaries: 6245, amount: "Rs 11,857,617" },
      { province: "Sindh", beneficiaries: 400, amount: "Rs 759,600" },
      { province: "Balochistan", beneficiaries: 1100, amount: "Rs 5,500,000" },
      { province: "KPK", beneficiaries: 510, amount: "Rs 2,008,900" },
      { province: "AJK", beneficiaries: 0, amount: "Rs 0" },
      { province: "Total", beneficiaries: 8555, amount: "Rs 16,243,702" },
    ],
  },
};

function RashanDistributionJourney() {
  const [selectedYear, setSelectedYear] = useState("2023");

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const sortedYears = Object.keys(records).sort((a, b) => b - a);

  const selectedRecord = records[selectedYear] || { data: [] };

  return (
    <section className="container">
      <section className={styles.rashandetails}>
        <div className="container">
          <h3>Rashan Program in Provinces</h3>
          <p>
            By helping mankind, Pak Helpline distributed{" "}
            {records[selectedYear]?.data.find((r) => r.province === "Total")
              ?.beneficiaries || ""}{" "}
            Ramzan Rashan packages among the needy families and individuals in{" "}
            {selectedYear}. The packages include Atta, Ghee, Rice, Sugar, Daal,
            and tea. In different areas of Pakistan like Punjab (Gojra,
            Bahawalpur, R.Y. Khan, Rajan Pur, Sheikhupura, and Lahore), Sindh,
            Baluchistan, KPK, and Kashmir, the program has been running since
            1992.
          </p>
        </div>
      </section>
      <div className={styles.rashanPage}>
        <h2 className={styles.title}>Helpline Rashan Program Table</h2>
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
              <th>Beneficiaries</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {selectedRecord.data.map((record, index) => (
              <tr key={index}>
                <td>{record.province}</td>
                <td>{record.beneficiaries}</td>
                <td>{record.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RashanDistributionJourney;
