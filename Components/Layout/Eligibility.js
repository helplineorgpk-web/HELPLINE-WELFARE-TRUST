import React from "react";
import styles from "../../public/css/HelplineCriteria.module.css";
import { HelplineData } from "../../pages/api/data";
import Link from "next/link";
function Eligibility() {
  const data = HelplineData.HelplineCriteriaData;
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>HELPLINE CRITERIA OF WELFARE SERVICES</h1>
      <div className={styles.criteriaContainer}>
        {data.map((item) => (
          <div key={item.id} className={styles.criteriaItem}>
            <div className={styles.icon}>{item.icon}</div>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
      <Link href="/contact">
        <a className="g_btn hbtn_1 to_right1 rad-30">
          CONTACT US<span></span>
        </a>
      </Link>
    </section>
  );
}

export default Eligibility;
