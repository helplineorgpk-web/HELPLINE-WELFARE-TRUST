import React, { useState, useCallback } from "react";
import styles from "../../../public/css/Zakat.module.css";

const ZAKAT_RATE = 0.025;

const defaultFields = {
  cashInHand: "",
  cashInBank: "",
  goldValue: "",
  silverValue: "",
  investments: "",
  businessInventory: "",
  receivables: "",
  otherAssets: "",
  debts: "",
};

const fieldLabels = {
  cashInHand: "Cash in Hand",
  cashInBank: "Cash in Bank",
  goldValue: "Gold (market value)",
  silverValue: "Silver (market value)",
  investments: "Stocks / Shares / Funds",
  businessInventory: "Business Inventory",
  receivables: "Money Owed to You",
  otherAssets: "Other Zakatable Assets",
  debts: "Immediate Debts / Liabilities",
};

export default function ZakatCalculator() {
  const [fields, setFields] = useState(defaultFields);
  const [result, setResult] = useState(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setFields((prev) => ({ ...prev, [name]: value }));
      setResult(null);
    }
  }, []);

  const numVal = (key) => parseFloat(fields[key]) || 0;

  const calculate = (e) => {
    e.preventDefault();
    const totalAssets =
      numVal("cashInHand") +
      numVal("cashInBank") +
      numVal("goldValue") +
      numVal("silverValue") +
      numVal("investments") +
      numVal("businessInventory") +
      numVal("receivables") +
      numVal("otherAssets");

    const netWealth = Math.max(0, totalAssets - numVal("debts"));
    const zakatDue = netWealth * ZAKAT_RATE;

    setResult({ totalAssets, debts: numVal("debts"), netWealth, zakatDue });
  };

  const reset = () => {
    setFields(defaultFields);
    setResult(null);
  };

  const formatPKR = (amount) =>
    "PKR " +
    amount.toLocaleString("en-PK", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Zakat Calculator (PKR)</h2>
          <p>
            Enter the current value of your assets in Pakistani Rupees. The
            calculator will compute 2.5% Zakat on your net Zakatable wealth
            after deducting debts.
          </p>

          <form onSubmit={calculate} className={styles.calcForm}>
            <div className={styles.calcGrid}>
              {Object.keys(defaultFields).map((key) => (
                <div
                  key={key}
                  className={
                    key === "debts" ? styles.calcFieldDebt : styles.calcField
                  }
                >
                  <label htmlFor={key}>{fieldLabels[key]}</label>
                  <div className={styles.inputWrap}>
                    <span className={styles.currencyTag}>PKR</span>
                    <input
                      id={key}
                      name={key}
                      type="text"
                      inputMode="decimal"
                      placeholder="0.00"
                      value={fields[key]}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.calcActions}>
              <button type="submit" className={styles.calcBtn}>
                Calculate Zakat
              </button>
              <button
                type="button"
                onClick={reset}
                className={styles.calcBtnReset}
              >
                Reset
              </button>
            </div>
          </form>

          {result && (
            <div className={styles.calcResult}>
              <h3>Your Zakat Summary</h3>
              <div className={styles.resultGrid}>
                <div className={styles.resultItem}>
                  <span>Total Assets</span>
                  <strong>{formatPKR(result.totalAssets)}</strong>
                </div>
                <div className={styles.resultItem}>
                  <span>Debts Deducted</span>
                  <strong>- {formatPKR(result.debts)}</strong>
                </div>
                <div className={styles.resultItem}>
                  <span>Net Zakatable Wealth</span>
                  <strong>{formatPKR(result.netWealth)}</strong>
                </div>
                <div className={`${styles.resultItem} ${styles.resultZakat}`}>
                  <span>Zakat Due (2.5%)</span>
                  <strong>{formatPKR(result.zakatDue)}</strong>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
