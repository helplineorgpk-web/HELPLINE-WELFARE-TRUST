"use client";
import React from "react";
import styles from "../../../public/css/DonationSections.module.css";

const LEGEND = [
  {
    color: "#a0522d",
    label: "Programs",
    description:
      "Discover inspiring stories of lives transformed through your support and see the real impact of our work in communities.",
  },
  {
    color: "#1e3a5f",
    label: "Fundraising",
    description:
      "Discover inspiring stories of lives transformed through your support and see the real impact of our work in communities.",
  },
  {
    color: "#9ca3af",
    label: "Admin",
    description:
      "Discover inspiring stories of lives transformed through your support and see the real impact of our work in communities.",
  },
];

export default function DonationExpenseRatios() {
  const size = 220;
  const stroke = 28;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const programs = 0.9;
  const fundraising = 0.04;
  const admin = 0.06;
  const offset2 = programs * circumference;
  const offset3 = (programs + fundraising) * circumference;

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>OUR EXPENSE RATIOS</h2>
        <span className={styles.sectionTitleUnderline} />
        <p className={styles.sectionIntro}>
          We assiduously ensure that your donation dollars are put to the best
          use at the programs. These are based on an independent auditor&apos;s
          report. As per the expense ratio, 90% of the raised funds were
          utilized for the programs & interventions.
        </p>
        <div className={styles.expenseLayout}>
          <div className={styles.donutWrap}>
            <svg
              width={size}
              height={size}
              viewBox={`0 0 ${size} ${size}`}
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke="#a0522d"
                strokeWidth={stroke}
                strokeDasharray={`${programs * circumference} ${circumference}`}
                strokeDashoffset={0}
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke="#1e3a5f"
                strokeWidth={stroke}
                strokeDasharray={`${fundraising * circumference} ${circumference}`}
                strokeDashoffset={-offset2}
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke="#9ca3af"
                strokeWidth={stroke}
                strokeDasharray={`${admin * circumference} ${circumference}`}
                strokeDashoffset={-offset3}
              />
              <text
                x={size / 2}
                y={size / 2 - 8}
                textAnchor="middle"
                fontSize="28"
                fontWeight="700"
                fill="#a0522d"
              >
                90%
              </text>
            </svg>
          </div>
          <ul className={styles.legendList}>
            {LEGEND.map((item, i) => (
              <li key={i} className={styles.legendItem}>
                <span
                  className={styles.legendSwatch}
                  style={{ backgroundColor: item.color }}
                />
                <div className={styles.legendContent}>
                  <h4>{item.label}</h4>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
