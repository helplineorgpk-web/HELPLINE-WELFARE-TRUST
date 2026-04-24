import React, { useMemo } from "react";
import Image from "next/image";
import styles from "../../../public/css/Edu.module.css";
import { getHeroAsset } from "../../../lib/heroImage";

function DisasterHeader({ content, image, fullHeight = false }) {
  const heroImage = useMemo(() => {
    const rawSrc = image?.startsWith("/") ? image : `/${image || ""}`;
    const asset = getHeroAsset(rawSrc);
    return {
      src: asset.src,
      blurDataURL: asset.blurDataURL,
      alt: content?.title ? `${content.title} banner` : "Registration banner",
    };
  }, [image, content?.title]);

  return (
    <section className={styles.container}>
      <div className={`${styles.banner} ${fullHeight ? styles.bannerFullHeight : ""}`}>
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          placeholder="blur"
          blurDataURL={heroImage.blurDataURL}
          sizes="100vw"
          quality={70}
          className={styles.bannerImage}
        />
        <div className={styles.overlay}>
          <h1 className={styles.title}>{content.title}</h1>
        </div>
      </div>
    </section>
  );
}

export default DisasterHeader;
