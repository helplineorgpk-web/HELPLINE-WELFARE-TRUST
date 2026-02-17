import React from "react";
import Link from "next/link";
import styles from "../../../public/css/Zakat.module.css";

export default function ZakatContent() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>What is Zakat?</h2>
          <p>
            Zakat is one of the Five Pillars of Islam—an obligatory act of
            worship that purifies wealth and supports those in need. It is a
            fixed portion (typically 2.5%) of one’s savings and qualifying
            assets that must be given annually to eligible recipients.
          </p>
          <div className={styles.highlightBox}>
            <p>
              <strong>Prophet Muhammad (ﷺ) said:</strong> "Charity does not
              decrease wealth." Your Zakat helps purify your wealth while
              transforming the lives of the poor and deserving.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Zakat Calculation</h2>
          <p>
            Zakat is due at 2.5% (or 1/40) of your Zakatable wealth once it has
            been in your possession for one full lunar year (Hawl) and exceeds
            the Nisab threshold. Nisab is the minimum amount that makes Zakat
            obligatory—often calculated in gold (approx. 87.48 grams) or silver
            (approx. 612.36 grams) or their cash equivalent.
          </p>
          <p>Common Zakatable assets include:</p>
          <ul style={{ marginLeft: "1.25rem", marginBottom: "1rem" }}>
            <li>Cash (in hand or in bank)</li>
            <li>Gold and silver (ornaments or bullion)</li>
            <li>Investments (stocks, shares, business inventory)</li>
            <li>Money lent to others (that you expect to receive back)</li>
          </ul>
          <p>
            Deduct any immediate debts and personal/family needs, then calculate
            2.5% of the remainder. For exact Nisab values and step-by-step
            guides, consult a local scholar or a reliable Zakat calculator.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Who Can Receive Zakat?</h2>
          <p>
            The Quran specifies eight categories of recipients (Surah At-Tawbah,
            9:60). Among them are the poor (Fuqara), the needy (Masakin),
            those in debt, and those working in the cause of Allah—including
            organizations that serve the poor and needy in a Shariah-compliant
            manner.
          </p>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Eligible Recipients</h3>
              <ul>
                <li>The poor (Fuqara)</li>
                <li>The needy (Masakin)</li>
                <li>Zakat administrators</li>
                <li>Those whose hearts are to be reconciled</li>
                <li>Those in bondage (freeing slaves)</li>
                <li>Those in debt</li>
                <li>In the cause of Allah</li>
                <li>Wayfarers (travelers in need)</li>
              </ul>
            </div>
            <div className={styles.infoCard}>
              <h3>Helpline & Your Zakat</h3>
              <p>
                Helpline Welfare Trust uses your Zakat to support education,
                healthcare, shelter, and basic needs for the poor and deserving
                across Pakistan. We ensure Zakat is distributed in line with
                Islamic principles to eligible beneficiaries.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Give Your Zakat Through Helpline</h2>
          <p>
            You can fulfill your Zakat obligation by donating to Helpline. We
            channel Zakat to students, families, and communities in need—
            helping with fees, health expenses, ration, and welfare projects.
            Your Zakat builds lasting change.
          </p>
          <div className={styles.ctaSection}>
            <h3>Ready to give your Zakat?</h3>
            <p>
              Donate your Zakat securely online or via bank transfer. Every
              contribution is used for the poor and deserving in accordance with
              Islamic guidelines.
            </p>
            <Link href="/donation" className={styles.ctaButton}>
              Donate Zakat Now
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
