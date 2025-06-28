import React from "react";
import styles from "../../../public/css/Policies.module.css";

const PoliciesContent = () => {
  const policies = [
    {
      title: "Terms of Service",
      description:
        "Our website terms and conditions for users, donors, and visitors.",
      points: [
        "Website usage terms",
        "User responsibilities",
        "Content guidelines",
        "Service limitations"
      ]
    },
    {
      title: "Privacy Policy",
      description:
        "How we collect, use, and protect your personal information.",
      points: [
        "Data collection",
        "Information usage",
        "Data protection",
        "User rights"
      ]
    },
    {
      title: "Donation Policy",
      description:
        "Guidelines for making donations and how your contributions are used.",
      points: [
        "Donation process",
        "Fund allocation",
        "Refund policy",
        "Tax benefits"
      ]
    },
    {
      title: "Cookie Policy",
      description:
        "Information about how we use cookies and similar technologies.",
      points: [
        "Cookie types",
        "Usage tracking",
        "User preferences",
        "Third-party cookies"
      ]
    },
    {
      title: "Payment Policy",
      description:
        "Secure payment processing and transaction guidelines.",
      points: [
        "Payment methods",
        "Transaction security",
        "Processing time",
        "Payment verification"
      ]
    },
    {
      title: "Contact Information",
      description:
        "How to reach us for questions, concerns, or support.",
      points: [
        "Office address",
        "Phone numbers",
        "Email contacts",
        "Response time"
      ]
    }
  ];

  return (
    <section className={styles.policiesSection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <span className={styles.sectionTagline}>
            Transparency & Governance
          </span>
          <h2 className={styles.sectionHeading}>Our Policies</h2>
        </div>

        <div className={styles.policiesGrid}>
          {policies.map((policy, index) => (
            <div key={index} className={styles.policyCard}>
              <h3 className={styles.policyTitle}>{policy.title}</h3>
              <p className={styles.policyDescription}>{policy.description}</p>
              <ul className={styles.policyList}>
                {policy.points.map((point, idx) => (
                  <li key={idx} className={styles.policyListItem}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoliciesContent;
