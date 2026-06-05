import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout2 from "../../../Components/Layout/Layout2";
import HealthHeader from "../../../Components/Elements/Health/HealthHeader";
import styles from "../../../Components/Elements/Health/DispensaryProjectDetail.module.css";
import {
  dispensaryProjects,
  getDispensaryProjectBySlug,
  formatPkr,
  DISPENSARY_DETAIL_HERO_IMAGE,
} from "../../../Components/Elements/Health/dispensaryProjectsData";

function CostTable({ rows, total, totalLabel }) {
  if (!rows?.length) return null;

  return (
    <table className={styles.costTable}>
      <thead>
        <tr>
          <th>Item</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.item}>
            <td>{row.item}</td>
            <td>{formatPkr(row.cost)}</td>
          </tr>
        ))}
      </tbody>
      {total != null ? (
        <tfoot>
          <tr>
            <td>{totalLabel}</td>
            <td>{formatPkr(total)}</td>
          </tr>
        </tfoot>
      ) : null}
    </table>
  );
}

export async function getStaticPaths() {
  return {
    paths: dispensaryProjects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getDispensaryProjectBySlug(params.slug);
  return {
    props: { project },
  };
}

export default function DispensaryProjectDetailPage({ project }) {
  const pageTitle = `${project.title} Dispensary | Helpline Welfare Trust`;
  const leadParagraph = project.detailSections[0]?.paragraphs[0] ?? project.cardDescription;

  return (
    <Layout2>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={`Support the ${project.title} tele-medicine dispensary — free medicines, doctor checkups, and patient welfare for underserved families.`}
        />
      </Head>

      <HealthHeader
        content={{ title: project.title }}
        subheading={project.tagline}
        image={DISPENSARY_DETAIL_HERO_IMAGE}
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.emotionalLead}>{leadParagraph}</p>

          <h2 className={styles.sectionHeading}>Our story in this community</h2>
          <div className={styles.content}>
            {project.detailSections.map((block) => (
              <div key={block.title} className={styles.contentBlock}>
                <h3 className={styles.blockTitle}>{block.title}</h3>
                {block.paragraphs.map((paragraph, idx) => (
                  <p key={`${block.title}-${idx}`} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {project.recommendation ? (
            <>
              <h2 className={styles.sectionHeading}>Recommendation letter</h2>
              <div className={styles.recommendationBox}>
                <div className={styles.recommendationMeta}>
                  <div>
                    <strong>From</strong>
                    {project.recommendation.from}
                  </div>
                  <div>
                    <strong>Date</strong>
                    {project.recommendation.date}
                  </div>
                  <div>
                    <strong>To</strong>
                    {project.recommendation.to}
                  </div>
                </div>
                <p className={styles.recommendationSubject}>
                  Subject: {project.recommendation.subject}
                </p>
                <p className={styles.paragraph} style={{ marginBottom: "0.75rem" }}>
                  Team visit:
                </p>
                <ul className={styles.teamList}>
                  {project.recommendation.team.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
                <p className={styles.paragraph}>
                  The team inspected the infrastructure and discussed the possibility of
                  establishing a tele-medicine medical unit.
                </p>
                <h3 className={styles.blockTitle}>Location assessment</h3>
                <ul className={styles.requirementList}>
                  {project.recommendation.locationNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
                <div className={styles.noteBox}>{project.recommendation.additionalNote}</div>
              </div>
            </>
          ) : null}

          <h2 className={styles.sectionHeading}>Services provided</h2>
          <ul className={styles.highlightList}>
            {project.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>

          <h2 className={styles.sectionHeading}>Monthly cost breakdown</h2>
          <div className={styles.twoCol}>
            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>Medical services</h3>
              <CostTable
                rows={project.medicalCosts}
                total={project.monthlyMedicalTotal}
                totalLabel="Medical total"
              />
            </div>

            {project.teleMedicineCosts.length > 0 ? (
              <div className={styles.panel}>
                <h3 className={styles.panelTitle}>Tele-medicine setup</h3>
                <CostTable
                  rows={project.teleMedicineCosts}
                  total={project.monthlyTeleMedicineTotal}
                  totalLabel="Tele-medicine total"
                />
              </div>
            ) : project.teleMedicineRequirements.length > 0 ? (
              <div className={styles.panel}>
                <h3 className={styles.panelTitle}>Tele-medicine requirements</h3>
                <ul className={styles.requirementList}>
                  {project.teleMedicineRequirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {project.teleMedicineRequirements.length > 0 &&
          project.teleMedicineCosts.length > 0 ? (
            <div className={styles.panel} style={{ marginTop: "1.25rem" }}>
              <h3 className={styles.panelTitle}>Additional equipment recommended</h3>
              <ul className={styles.requirementList}>
                {project.teleMedicineRequirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className={styles.twoCol} style={{ marginTop: "1.25rem" }}>
            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>Patient welfare requirements</h3>
              <ul className={styles.welfareList}>
                {project.patientWelfare.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.panel}>
              <h3 className={styles.panelTitle}>Impact at a glance</h3>
              <ul className={styles.highlightList} style={{ border: "none", padding: 0 }}>
                {project.impactHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.grandTotalBar}>
            <span className={styles.grandTotalLabel}>Estimated monthly project cost</span>
            <span className={styles.grandTotalAmount}>
              {formatPkr(project.monthlyGrandTotal)}
            </span>
            {project.monthlyGrandTotalNote ? (
              <span className={styles.grandTotalNote}>{project.monthlyGrandTotalNote}</span>
            ) : null}
          </div>

          <div className={styles.ctaWrap}>
            <Link href={project.ctaHref} className={styles.primaryCta}>
              {project.ctaText}
            </Link>
            <Link href="/health" className={styles.secondaryCta}>
              View All Dispensary Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout2>
  );
}
