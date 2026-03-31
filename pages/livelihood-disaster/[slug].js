import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout2 from "../../Components/Layout/Layout2";
import LivelihoodHeader from "../../Components/Elements/Livelihood/LivelihoodHeader";
import styles from "../../Components/Elements/Livelihood/LivelihoodDisasterDetail.module.css";
import {
  livelihoodDisasterCards,
  getLivelihoodDisasterBySlug,
} from "../../Components/Elements/Livelihood/livelihoodDisasterData";

export async function getStaticPaths() {
  return {
    paths: livelihoodDisasterCards.map((item) => ({
      params: { slug: item.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const detail = getLivelihoodDisasterBySlug(params.slug);
  return {
    props: { detail },
  };
}

export default function LivelihoodDisasterDetailPage({ detail }) {
  const pageTitle = `${detail.title} | Helpline Welfare Trust`;
  const sections = detail.detailSections ?? [];
  const highlights = detail.impactHighlights ?? [];
  const gallery = detail.imageGallery ?? [];

  return (
    <Layout2>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={detail.description} />
      </Head>
      <LivelihoodHeader image="/img/Campaigns/Food.webp" />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.breadcrumbWrap}>
            <Link href="/livelihood" className={styles.backLink}>
              Back to Livelihood
            </Link>
          </div>

          <h1 className={styles.pageTitle}>{detail.title}</h1>
          {detail.detailTitle ? (
            <p className={styles.pageSubtitle}>{detail.detailTitle}</p>
          ) : null}
          {detail.description ? (
            <p className={styles.pageLead}>{detail.description}</p>
          ) : null}

          <h2 className={styles.sectionHeading}>Program overview</h2>

          <div className={styles.content}>
            {sections.map((block) => (
              <div key={block.title} className={styles.contentBlock}>
                <h3 className={styles.blockTitle}>{block.title}</h3>
                {block.paragraphs.map((paragraph, idx) => (
                  <p
                    key={`${block.title}-${idx}`}
                    className={styles.paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {highlights.length > 0 ? (
            <>
              <h2 className={styles.sectionHeading}>At a glance</h2>
              <ul className={styles.highlightList}>
                {highlights.map((item) => (
                  <li key={item} className={styles.highlightItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {gallery.length > 0 ? (
            <>
              <h2 className={styles.sectionHeading}>In the field</h2>
              <div className={styles.galleryGrid}>
                {gallery.map((item) => {
                  const isCampaignWebp =
                    item.src.startsWith("/img/Campaigns/") &&
                    item.src.endsWith(".webp");
                  return (
                  <figure key={item.src} className={styles.galleryCard}>
                    <div className={styles.galleryImageWrap}>
                      <Image
                        src={item.src}
                        alt={item.caption || detail.title}
                        fill
                        priority={isCampaignWebp}
                        loading={isCampaignWebp ? "eager" : "lazy"}
                        fetchPriority={isCampaignWebp ? "high" : "auto"}
                        quality={75}
                        decoding="async"
                        className={styles.galleryImage}
                        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    {item.caption ? (
                      <figcaption className={styles.galleryCaption}>
                        {item.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                  );
                })}
              </div>
            </>
          ) : null}

          <div className={styles.ctaWrap}>
            <Link href={detail.ctaHref} className={styles.primaryCta}>
              {detail.ctaText}
            </Link>
            <Link href="/volunteer" className={styles.secondaryCta}>
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </Layout2>
  );
}
