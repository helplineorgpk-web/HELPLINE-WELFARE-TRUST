import React from "react";
import Link from "next/link";
import styles from "./FieldMapDetail.module.css";
import {
  FIELD_MAP_IMAGE,
  FIELD_MAP_INTRO,
  FIELD_MAP_LANDMARKS,
  FIELD_MAP_LOCALITIES,
  FIELD_MAP_ROUTE,
  FIELD_MAP_TAGLINE,
  FIELD_MAP_TITLE,
} from "./fieldMapContent";

export default function FieldMapDetail() {
  return (
    <>
      <header className={styles.hero}>
        <img src={FIELD_MAP_IMAGE} alt={FIELD_MAP_TITLE} className={styles.heroImage} />
      </header>

      <section className={styles.page}>
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <p className={styles.kicker}>Mawakhat-e-Madina</p>
            <h1 className={styles.title}>{FIELD_MAP_TITLE}</h1>
            <p className={styles.subtitle}>{FIELD_MAP_TAGLINE}</p>
            <p className={styles.lead}>{FIELD_MAP_INTRO}</p>
          </div>

          <ul className={styles.stats}>
            <li className={styles.stat}>
              <span className={styles.statValue}>{FIELD_MAP_LOCALITIES.length}</span>
              <span className={styles.statLabel}>Villages &amp; towns marked</span>
            </li>
            <li className={styles.stat}>
              <span className={styles.statValue}>{FIELD_MAP_ROUTE.length}</span>
              <span className={styles.statLabel}>Stops on the route</span>
            </li>
            <li className={styles.stat}>
              <span className={styles.statValue}>{FIELD_MAP_LANDMARKS.length}</span>
              <span className={styles.statLabel}>Landmarks</span>
            </li>
          </ul>

          <div className={styles.card}>
            <h2 className={styles.sectionHeading}>The route</h2>
            <ol className={styles.route}>
              {FIELD_MAP_ROUTE.map((stop) => (
                <li key={stop.title} className={styles.routeStop}>
                  <h3 className={styles.routeTitle}>{stop.title}</h3>
                  <p className={styles.routeText}>{stop.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.card}>
            <h2 className={styles.sectionHeading}>Villages and towns on the map</h2>
            <div className={styles.tableScroll}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col" className={styles.numCol}>#</th>
                    <th scope="col">Village / Town</th>
                    <th scope="col">Location on the map</th>
                    <th scope="col">School survey</th>
                  </tr>
                </thead>
                <tbody>
                  {FIELD_MAP_LOCALITIES.map((place, index) => (
                    <tr key={place.name}>
                      <td className={styles.numCol}>{index + 1}</td>
                      <th scope="row">{place.name}</th>
                      <td>{place.area}</td>
                      <td>
                        {place.uc23 ? (
                          <Link href={`/union-council-23#${place.uc23}`} className={styles.tableLink}>
                            View schools
                          </Link>
                        ) : (
                          <span className={styles.muted}>—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.sectionHeading}>Landmarks</h2>
            <div className={styles.tableScroll}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col" className={styles.numCol}>#</th>
                    <th scope="col">Landmark</th>
                    <th scope="col">Type</th>
                    <th scope="col">Where</th>
                  </tr>
                </thead>
                <tbody>
                  {FIELD_MAP_LANDMARKS.map((landmark, index) => (
                    <tr key={landmark.name}>
                      <td className={styles.numCol}>{index + 1}</td>
                      <th scope="row">{landmark.name}</th>
                      <td>{landmark.type}</td>
                      <td>{landmark.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.cta}>
            <p>See the government and private schools, and the children out of school, in each village.</p>
            <Link href="/union-council-23" className={styles.ctaButton}>
              Union Council 23 school survey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
