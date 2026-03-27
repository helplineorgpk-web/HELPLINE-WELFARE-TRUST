import React from "react";
import styles from "./LivelihoodContent.module.css";

export default function LivelihoodContent() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          Not every form of support should end with short-term relief. In many cases, the most meaningful help is the kind that equips a person to support themselves and their family with confidence. That is why Helpline&rsquo;s skills and livelihood work focuses on training, practical learning, and opportunities that can lead to income generation.
        </p>

        <p className={styles.paragraph}>
          Poverty is not only a shortage of money. It is also a shortage of opportunity. Many young people and women have the ability and motivation to work, but they do not have access to the training, tools, guidance, or start-up support needed to begin. Without these opportunities, families can remain trapped in dependency even when they are ready to move forward.
        </p>

        <h3 className={styles.sectionHeading}>Programs &amp; Activities</h3>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Vocational Training Centres</strong>
            <br />
            Helpline&rsquo;s vocational training work creates structured learning opportunities for people who need practical skills rather than academic pathways alone. These centres help participants gain the confidence and hands-on ability needed to begin earning or contributing to household income.
          </li>
          <li className={styles.listItem}>
            <strong>Women&rsquo;s Skills &amp; Earning Support</strong>
            <br />
            For many women, access to skill training can become the first real opening toward financial participation and household stability. Supporting a woman&rsquo;s livelihood also strengthens children, homes, and community resilience.
          </li>
          <li className={styles.listItem}>
            <strong>Digital Skills</strong>
            <br />
            Digital literacy and digital work opportunities are increasingly important for the next generation. Helpline supports digital skills as future-focused learning that helps young people connect with modern opportunity in a changing economy.
          </li>
          <li className={styles.listItem}>
            <strong>Livelihood Support</strong>
            <br />
            Some families are ready to move toward self-reliance with direct livelihood tools such as livestock or other practical earning support. These interventions help turn one donation into an ongoing source of benefit.
          </li>
        </ul>

        <h3 className={styles.sectionHeading}>The Impact</h3>

        <p className={styles.paragraph}>
          This focus area changes the pattern of need. Instead of supporting a family only for one moment, livelihoods and skills can help build a path toward longer-term stability. A trained person is more prepared. A skilled person has more choices. A family with income potential has more room to breathe.
        </p>

        <ul className={styles.impactList}>
          <li>Increased household income and self-reliance</li>
          <li>Reduced dependency on aid</li>
          <li>Empowered women and youth with practical skills</li>
          <li>Stronger, self-reliant communities</li>
          <li>Measurable and dignified outcomes</li>
        </ul>
      </div>
    </section>
  );
}
