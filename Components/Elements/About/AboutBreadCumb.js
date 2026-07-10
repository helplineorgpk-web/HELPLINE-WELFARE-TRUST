import React, { useMemo } from "react";
import Link from "next/link";
import styles from "../../../public/css/AboutHeader.module.css";

const DEFAULT_DESCRIPTION =
  "Helpline is a movement of hope and transformation. Since 2000, we have partnered with communities across Pakistan to break the cycle of poverty through education, healthcare, economic empowerment, and social development.";

export default function AboutBreadCumb({
  title = "About Us",
  description = DEFAULT_DESCRIPTION,
  backgroundImage = "/img/about/aboutus.jpg",
  backgroundImageMobile,
  variant = "default",
  textTheme = "dark",
}) {
  const isCampaignHero = variant === "campaign";
  const isLightText = textTheme === "light";

  const heroImage = useMemo(
    () => ({
      src: backgroundImage,
      alt: `${title} banner`,
    }),
    [backgroundImage, title]
  );

  const mobileSrc = backgroundImageMobile ?? heroImage.src;

  return (
    <section
      suppressHydrationWarning
      className={[
        styles.aboutHero,
        isCampaignHero && styles.aboutHeroMobileAsset,
        isLightText && styles.aboutHeroLightText,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.heroBgWrap}>
        <picture className={styles.heroPicture}>
          <source media="(max-width: 767px)" srcSet={mobileSrc} />
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            sizes="100vw"
            decoding="async"
            className={styles.heroBgImage}
          />
        </picture>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div
              className={
                isCampaignHero
                  ? `${styles.aboutHeroContent} ${styles.aboutHeroContentShiftUp}`
                  : styles.aboutHeroContent
              }
            >
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span className={styles.breadcrumbSeparator}>/</span>
                <span className={styles.breadcrumbCurrent}>{title}</span>
              </nav>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{description}</p>
              <div className={styles.accentBar}>
                <span className={styles.accentBarLeft} />
                <span className={styles.accentBarRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
