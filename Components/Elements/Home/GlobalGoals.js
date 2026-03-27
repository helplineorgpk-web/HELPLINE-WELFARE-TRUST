import React from "react";
import styles from "../../../public/css/GlobalGoals.module.css";

const PovertyIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
  </svg>
);

const FoodIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const HealthIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const WaterIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

const ClimateIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const PartnershipIcon = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export default function GlobalGoals() {
  const goals = [
    {
      Icon: PovertyIcon,
      color: "#c0392b",
      title: "End poverty in all its forms everywhere",
      description:
        "Education, healthcare, livelihoods, and social mobilization programs. Healthy children learn better. Educated women drive change. Skilled families earn and thrive.",
    },
    {
      Icon: FoodIcon,
      color: "#e67e22",
      title: "Achieve food security and improved nutrition",
      description:
        "Vocational training for women and youth. Microenterprise support with livestock, sewing machines, and tools. Climate-smart farming for resilient harvests.",
    },
    {
      Icon: HealthIcon,
      color: "#27ae60",
      title: "Ensure healthy lives and well-being for all",
      description:
        "Community Health Centers, mobile camps, and home visits. Maternal care, child immunizations, and health education for families.",
    },
    {
      Icon: WaterIcon,
      color: "#3498db",
      title: "Safe water and sanitation for all",
      description:
        "Solar-powered filtration plants, hand pumps, and delay action dams. Safe toilets, waste management, and hygiene awareness programs.",
    },
    {
      Icon: ClimateIcon,
      color: "#f39c12",
      title: "Urgent action to combat climate change",
      description:
        "Tree plantations and afforestation drives across communities. Water conservation and drought-mitigation infrastructure for sustainable future.",
    },
    {
      Icon: PartnershipIcon,
      color: "#27ae60",
      title: "Working together for sustainable development",
      description:
        "Collaborations with USAID, UNICEF, Oxfam, and grassroots organizations. Building partnerships for long-term community impact.",
    },
  ];

  return (
    <section className={styles.container} aria-labelledby="global-goals-heading">
      <header className={styles.sectionHeader}>
        <h2 id="global-goals-heading" className={styles.sectionTitle}>
          How Helpline Welfare Trust Brings The Global Goals To Life
        </h2>
        <div className={styles.sectionLine} />
        <p className={styles.sectionSubtitle}>
          We work across five interconnected pillars aligned with the United Nations
          Sustainable Development Goals (SDGs). Below, we show how Helpline Welfare Trust brings
          these goals to life in Pakistan's most underserved communities.
        </p>
      </header>
      <div className={styles.goalsGrid}>
        {goals.map((goal, index) => (
          <div key={index} className={styles.goalCard}>
            <div
              className={styles.iconWrapper}
              style={{ borderColor: goal.color }}
            >
              <goal.Icon color={goal.color} />
            </div>
            <h3 className={styles.goalTitle}>{goal.title}</h3>
            <p className={styles.goalDescription}>{goal.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
