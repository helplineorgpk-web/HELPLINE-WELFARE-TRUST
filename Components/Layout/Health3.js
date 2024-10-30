import React from "react";
import styles from "../../public/css/DonationGrid.module.css";

const donationItems = [
  { id: 1, icon: "🚑", title: "Ambulance", amount: "PKR 2.8 Million" },
  { id: 2, icon: "🏥", title: "Hospital", amount: "PKR 500 Million" },
  { id: 3, icon: "🏬", title: "Poly Clinics", amount: "PKR 25 Million" },
  {
    id: 4,
    icon: "🩺",
    title: "Mega Diagnostic Centers",
    amount: "PKR 35 Million",
  },
  { id: 5, icon: "💉", title: "Blood Banks", amount: "PKR 25 Million" },
  { id: 6, icon: "🩹", title: "Medical Camps", amount: "PKR 70,000" },
];

function Health3() {
  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.mainTitle}>Helpline Health</h2>
        <p className={styles.quote}>
          “Protect yourself from hell-fire even by giving a piece of date as
          charity”
        </p>
      </div>
      <div className={styles.grid}>
        {donationItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.title}>
              {item.title} {item.amount}
            </div>
            <button className={styles.button}>Donate Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Health3;
