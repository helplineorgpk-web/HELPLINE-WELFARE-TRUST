import React from "react";
import Image from "next/image";
import rashan1 from "../../../public/img/causes/rashan1.jpeg";
import styles from "../../../public/css/RashanPage.module.css";

export default function Rashan() {
  return (
    <div className={styles.rashanpage}>
      <section className={styles.rashanintro}>
        <div className={styles.container}>
          <div className="container">
            <div className={styles.row}>
              <div className={styles.colmd6}>
                <h2 className={styles.sectiontitle}>Monthly Rashan Support</h2>
                <div className={styles.line}></div>
                <p>
                  Many families do not need sympathy alone. They need timely, practical help that gets them through the week, the month, or the season with dignity. A food package or essential household support can make the difference between stability and crisis for a widow, a daily wage worker, an elderly person, or a family already living under pressure.
                </p>
                <p>
                  Monthly food support helps deserving families who struggle to meet regular household needs. This kind of support is especially important for single mothers, low-income households, the elderly, and families dealing with ongoing financial pressure. Helpline has been distributing rashan packages across all provinces of Pakistan, including Atta, Ghee, Rice, Sugar, Daal, and tea.
                </p>
              </div>

              <div className={styles.colmd6}>
                <Image
                  src={rashan1}
                  alt="Rashan Program"
                  className={styles.imgfluid}
                  layout="responsive"
                  width={100}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
