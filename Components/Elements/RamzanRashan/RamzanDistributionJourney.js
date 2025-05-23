import React, { useState } from 'react';
import styles from './RamzanRashan.module.css';
import { records } from '../../../data/rashanData.js';

export default function RamzanDistributionJourney() {
  const [selectedYear, setSelectedYear] = useState("2023");

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const selectedRecord = records[selectedYear];

  return (
    <section className={styles.journeyContainer}>
      <div className={styles.journeyContent}>
        <h2 className={styles.journeyTitle}>Helpline Ramzan Rashan Distribution</h2>
        <div className={styles.yearButtons}>
          {Object.keys(records).map((year) => (
            <button
              key={year}
              onClick={() => handleYearChange(year)}
              className={`${styles.yearButton} ${
                selectedYear === year ? styles.activeYear : ""
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.distributionTable}>
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
      </div>
    </section>
  );
}
