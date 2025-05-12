import React from "react";
import styles from "../../../public/css/OurPrincipal.module.css";

const principles = [
  {
    id: 1,
    icon: "💰",
    title: "Interest-free microfinance",
    description:
      " Helpline Welfare Trust provides loans with zero interest based on the belief that poverty cannot be eradicated by charging interest and doing business with the poor.",
  },
  {
    id: 2,
    icon: "⛪",
    title: "Religious Places",
    description:
      " Helpline Welfare Trust operates in places of worship including, mosques, churches, and temples to organize loan disbursement ceremonies. The use of religious places ensures transparency, participation, and accountability while also minimizing operational costs and generating goodwill.",
  },
  {
    id: 3,
    icon: "🤝",
    title: "Volunteerism",
    description:
      " Helpline Welfare Trust relies upon the passion, dedication, and zeal of its volunteer team who dedicate their time, talent, and resources towards the vision of  Helpline Welfare Trust.",
  },
  {
    id: 4,
    icon: "⚖️",
    title: "Policy of Non-Discrimination",
    description:
      " Helpline Welfare Trust believes in an inclusive society without any discrimination based on caste, color, creed, gender, politics, or faith. Akhuwat is a nonpolitical organization working toward the ultimate objective of a poverty-free Pakistan.",
  },
  {
    id: 5,
    icon: "🔄",
    title: "Cycle of Reciprocity",
    description:
      " Helpline Welfare Trust strives to empower its borrowers with the hope of inspiring a cycle of generosity for the goodwill of all those in need.",
  },
  {
    id: 6,
    icon: "🔄",
    title: "Cycle of Reciprocity",
    description:
      " Helpline Welfare Trust strives to empower its borrowers with the hope of inspiring a cycle of generosity for the goodwill of all those in need.",
  },
];

export default function OurPrincipal() {
  return (
    <div className={styles.principlesContainer}>
      <div className={styles.header}>
        <h2>Our Principles</h2>
        <p>
          Helpline Welfare Trust evolved as an organic entity through a process
          of action research. The following major principles were adopted with
          time.
        </p>
      </div>
      <div className={styles.principlesGrid}>
        {principles.map((principle) => (
          <div key={principle.id} className={styles.principleCard}>
            <div className={styles.icon}>{principle.icon}</div>
            <h3 className={styles.title}>{principle.title}</h3>
            <p className={styles.description}>{principle.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
