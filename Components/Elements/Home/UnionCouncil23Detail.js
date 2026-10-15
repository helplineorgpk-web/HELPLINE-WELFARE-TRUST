import React from "react";
import styles from "./UnionCouncil23Detail.module.css";
import {
  UC23_INTRO,
  UC23_LOCATION,
  UC23_SUBTITLE,
  UC23_TITLE,
  UC23_VILLAGES,
} from "./unionCouncil23Content";

const sumStudents = (schools) =>
  schools.reduce((total, school) => total + (school.students || 0), 0);

const formatCount = (value) => (value === null || value === undefined ? "—" : value);

const TOTALS = UC23_VILLAGES.reduce(
  (totals, village) => ({
    governmentSchools: totals.governmentSchools + village.government.length,
    privateSchools: totals.privateSchools + village.private.length,
    governmentStudents: totals.governmentStudents + sumStudents(village.government),
    privateStudents: totals.privateStudents + sumStudents(village.private),
    outOfSchool: totals.outOfSchool + (village.outOfSchool || 0),
  }),
  {
    governmentSchools: 0,
    privateSchools: 0,
    governmentStudents: 0,
    privateStudents: 0,
    outOfSchool: 0,
  }
);

const STATS = [
  { label: "گاؤں", value: UC23_VILLAGES.length },
  { label: "سرکاری سکول", value: TOTALS.governmentSchools },
  { label: "پرائیویٹ سکول", value: TOTALS.privateSchools },
  {
    label: "زیرِ تعلیم طلبہ",
    value: TOTALS.governmentStudents + TOTALS.privateStudents,
  },
  { label: "سکول نہ جانے والے بچے", value: TOTALS.outOfSchool },
];

function SchoolTable({ caption, schools }) {
  return (
    <div className={styles.tableScroll}>
      <table className={styles.table}>
        <caption className={styles.caption}>{caption}</caption>
        <thead>
          <tr>
            <th scope="col" className={styles.numCol}>نمبر شمار</th>
            <th scope="col">نام</th>
            <th scope="col" className={styles.countCol}>تعدادِ طلبہ</th>
          </tr>
        </thead>
        <tbody>
          {schools.length === 0 ? (
            <tr>
              <td colSpan={3} className={styles.empty}>
                کوئی تفصیل دستیاب نہیں
              </td>
            </tr>
          ) : (
            schools.map((school, index) => (
              <tr key={school.name}>
                <td className={styles.numCol}>{index + 1}</td>
                <td>{school.name}</td>
                <td className={styles.countCol}>{formatCount(school.students)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default function UnionCouncil23Detail() {
  return (
    <section className={styles.page} dir="rtl">
      <div className={styles.wrap}>
        <header className={styles.intro}>
          <h1 className={styles.title}>{UC23_TITLE}</h1>
          <p className={styles.subtitle}>{UC23_SUBTITLE}</p>
          <p className={styles.location}>{UC23_LOCATION}</p>
          <p className={styles.lead}>{UC23_INTRO}</p>
        </header>

        <ul className={styles.stats}>
          {STATS.map((stat) => (
            <li key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </li>
          ))}
        </ul>

        <h2 className={styles.sectionHeading}>خلاصہ</h2>
        <div className={styles.tableScroll}>
          <table className={`${styles.table} ${styles.summaryTable}`}>
            <thead>
              <tr>
                <th scope="col">گاؤں</th>
                <th scope="col">سرکاری سکول</th>
                <th scope="col">سرکاری سکولوں میں طلبہ</th>
                <th scope="col">پرائیویٹ سکول</th>
                <th scope="col">پرائیویٹ سکولوں میں طلبہ</th>
                <th scope="col">سکول نہ جانے والے بچے</th>
              </tr>
            </thead>
            <tbody>
              {UC23_VILLAGES.map((village) => (
                <tr key={village.id}>
                  <th scope="row">
                    <a href={`#${village.id}`}>{village.name}</a>
                  </th>
                  <td>{village.government.length}</td>
                  <td>{sumStudents(village.government)}</td>
                  <td>{village.private.length}</td>
                  <td>{sumStudents(village.private)}</td>
                  <td>{formatCount(village.outOfSchool)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">کل</th>
                <td>{TOTALS.governmentSchools}</td>
                <td>{TOTALS.governmentStudents}</td>
                <td>{TOTALS.privateSchools}</td>
                <td>{TOTALS.privateStudents}</td>
                <td>{TOTALS.outOfSchool}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h2 className={styles.sectionHeading}>گاؤں کی تفصیل</h2>
        <div className={styles.villages}>
          {UC23_VILLAGES.map((village) => (
            <article key={village.id} id={village.id} className={styles.village}>
              <h3 className={styles.villageName}>{village.name}</h3>
              <p className={styles.villageText}>
                {village.name} میں {village.government.length} سرکاری اور{" "}
                {village.private.length} پرائیویٹ سکول ہیں۔
                {village.outOfSchool !== null
                  ? ` سکول نہ جانے والے بچوں کی تعداد ${village.outOfSchool} ہے۔`
                  : ""}
              </p>
              <div className={styles.villageTables}>
                <SchoolTable caption="گورنمنٹ سکولز کی تفصیل" schools={village.government} />
                <SchoolTable caption="پرائیویٹ سکولز کی تفصیل" schools={village.private} />
              </div>
              <div className={styles.outOfSchool}>
                <span>سکول نہ جانے والے بچوں کی تعداد</span>
                <strong>{formatCount(village.outOfSchool)}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
