import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../public/css/AboutHeader.module.css";

export default function OrganizationHeader({
  title = "Our Leadership",
  description = "Meet the dedicated leadership team guiding Helpline's mission with vision, service, and accountability.",
  backgroundImage = "/img/Campaigns/Organization.webp",
}) {
  const heroImage = useMemo(
    () => ({
      src: backgroundImage,
      alt: `${title} banner`,
    }),
    [backgroundImage, title]
  );

  return (
    <section className={styles.aboutHero}>
      <div className={styles.heroBgWrap}>
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          loading="eager"
          fetchPriority="high"
          placeholder="empty"
          sizes="100vw"
          quality={75}
          decoding="async"
          className={styles.heroBgImage}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className={styles.aboutHeroContent}>
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
