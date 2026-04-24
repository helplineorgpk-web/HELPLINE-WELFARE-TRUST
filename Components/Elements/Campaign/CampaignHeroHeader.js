import React, { memo, useMemo } from "react";
import Link from "next/link";
import styles from "../../../styles/Campaigns.module.css";

const HERO_VIDEO_URL = "https://www.youtube.com/embed/Zed6wEaHiag";
const DEFAULT_PRIMARY_CTA = { href: "/ramzanRashan", label: "DONATE NOW" };
const DEFAULT_SECONDARY_CTA = {
  href: "/become-a-fundraiser",
  label: "BECOME A FUNDRAISER",
};

function CampaignHeroHeader({
  label = "HELPLINE WELFARE TRUST",
  title = "OUR CAMPAIGNS",
  subtitle =
    "Explore active Helpline drives—from food relief and Ramadan packages to education, healthcare, and vocational training. Your donation funds transparent, community-led programs across Pakistan.",
  primaryCta = DEFAULT_PRIMARY_CTA,
  secondaryCta = DEFAULT_SECONDARY_CTA,
  videoUrl = HERO_VIDEO_URL,
  videoTitle = "Helpline campaigns and field impact",
}) {
  const resolvedPrimaryCta = useMemo(() => primaryCta, [primaryCta]);
  const resolvedSecondaryCta = useMemo(() => secondaryCta, [secondaryCta]);
  const iframeTitle = useMemo(() => videoTitle, [videoTitle]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.heroLabel}>{label}</p>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
          <div className={styles.heroCta}>
            {resolvedPrimaryCta ? (
              <Link href={resolvedPrimaryCta.href} className={styles.heroBtnPrimary}>
                {resolvedPrimaryCta.label}
              </Link>
            ) : null}
            {resolvedSecondaryCta ? (
              <Link href={resolvedSecondaryCta.href} className={styles.heroBtnSecondary}>
                {resolvedSecondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
        <div className={styles.heroVideoWrap}>
          <div className={styles.heroVideoInner}>
            <iframe
              src={videoUrl}
              title={iframeTitle}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.heroVideoIframe}
            />
            <p className={styles.heroVideoTitle}>{iframeTitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(CampaignHeroHeader);
