import React from "react";
import { mawakhatVillages } from "../../../data/mawakhatVillages";
import styles from "./MawakhatVillageCards.module.css";

const COLUMNS = [
  "گاؤں کے نام",
  "کل آبادی",
  "معاشی حالت",
  "ٹوٹل سکول",
  "سکول میں جانے والے بچوں کی تعداد",
  "سکول نہ جانے والے بچوں کی تعداد",
  "سرکاری سکول",
  "پرائیویٹ سکول",
  "مساجد میں زیرِ تعلیم بچوں کی تعداد",
];

export default function MawakhatVillageCards() {
  return (
    <section className={styles.section} aria-labelledby="abid-town-heading">
      <div className={styles.container} dir="rtl">
        <header className={styles.placeHeader}>
          <div id="abid-town-heading" className={styles.placeUrdu}>
            عابد ٹاؤن
          </div>
          <div className={styles.placeLocation}>
            رانا ٹاؤن، آدياں روڈ، تحصیل فیروزوالا، ضلع شیخوپورہ، لاہور
          </div>
        </header>

        <div className={styles.listHeading}>عابد ٹاؤن کے گاؤں</div>

        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                {COLUMNS.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mawakhatVillages.map((village) => (
                <tr key={village.id}>
                  <th scope="row">{village.nameUrdu}</th>
                  {COLUMNS.slice(1).map((column) => (
                    <td key={column}></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
