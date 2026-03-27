"use client";
import React, { useState } from "react";
import styles from "../../../public/css/DonationSections.module.css";

const FAQ_ITEMS = [
  {
    question: "How to Donate by Mail?",
    answer:
      "Make checks payable to 'Human Development Foundation' and mail all checks to: 2625 Butterfield Rd, Suite 101W Oak Brook, IL 60523",
  },
  {
    question: "How to Donate by Wire Transfer or Auto Debit from Bank Account",
    answer:
      "Contact our office for wire transfer instructions or to set up automatic monthly debits from your bank account. We will provide our bank details and a simple authorization form.",
  },
  {
    question: "How do I make a Stock Donation",
    answer:
      "We accept stock donations. Please contact our office with the name of the stock and quantity you wish to donate. We will provide our brokerage account details and any required forms.",
  },
  {
    question: "What's a Dollar a Day?",
    answer:
      "A Dollar a Day is a recurring giving program where your donation of one dollar per day (or $30/month) is automatically charged to your card. This steady support helps us plan and sustain programs throughout the year.",
  },
];

export default function DonationFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.faqInner}>
          <h2 className={styles.sectionTitle}>FREQUENTLY ASKED QUESTIONS</h2>
          <span className={styles.sectionTitleUnderline} />
          <p className={styles.sectionIntro}>
            Find answers to the most common questions about supporting Helpline Welfare Trust and
            making donations.
          </p>
          <div className={styles.faqList}>
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  aria-expanded={openIndex === index}
                >
                  {item.question}
                  <span className={styles.faqIcon} aria-hidden>
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className={styles.faqAnswer}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
