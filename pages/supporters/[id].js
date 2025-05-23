import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../public/css/Supporter.module.css";

const supporterDetails = {
  "henkel-pakistan": {
    name: "Henkel Pakistan",
    logo: "/img/sponser/Henkel-Logo.png",
    description: "Supporting community development through innovative solutions in adhesives, beauty care, and laundry",
    website: "https://www.henkel.com/",
    contributions: [
      "Provided essential hygiene products to underprivileged communities",
      "Supported educational initiatives in rural areas",
      "Conducted skill development workshops for youth",
      "Sponsored community health programs"
    ],
    impact: "Henkel Pakistan has been instrumental in improving the lives of over 10,000 families through their various community support initiatives."
  },
  "service-industries": {
    name: "Service Industries",
    logo: "/img/sponser/Servis_logo.png",
    description: "Empowering communities through quality footwear and sustainable practices",
    website: "https://www.servis.com",
    contributions: [
      "Donated footwear to children in need",
      "Supported vocational training programs",
      "Implemented sustainable manufacturing practices",
      "Created employment opportunities"
    ],
    impact: "Service Industries has helped provide comfortable footwear to over 5,000 children and created numerous job opportunities in local communities."
  },
  "asia-poultry-feeds": {
    name: "Asia Poultry Feeds",
    logo: "/img/sponser/asia-poultry-feeds-logo.png",
    description: "Contributing to food security through high-quality poultry feed production",
    website: "https://asiafeeds.net/",
    contributions: [
      "Supported small-scale poultry farmers",
      "Provided technical training to farmers",
      "Implemented sustainable farming practices",
      "Contributed to food security initiatives"
    ],
    impact: "Asia Poultry Feeds has helped enhance the productivity of over 1,000 small-scale poultry farmers."
  },
  "izhar-group": {
    name: "Izhar Group",
    logo: "/img/sponser/izharlogo.png",
    description: "Building better communities through sustainable construction and development",
    website: "https://izhar.com/izhar/",
    contributions: [
      "Developed affordable housing projects",
      "Created sustainable infrastructure",
      "Provided construction training programs",
      "Supported community development initiatives"
    ],
    impact: "Izhar Group has helped create housing solutions for over 2,000 families and developed crucial infrastructure projects."
  },
  "mughal-steel": {
    name: "Mughal Steel",
    logo: "/img/sponser/mughalsteel.png",
    description: "Strengthening Pakistan's infrastructure with quality steel products",
    website: "https://mughalsteel.com",
    contributions: [
      "Supplied materials for infrastructure projects",
      "Created employment opportunities",
      "Supported technical education",
      "Invested in sustainable production"
    ],
    impact: "Mughal Steel has contributed to numerous infrastructure projects and created over 1,500 direct employment opportunities."
  },
  "nestle-pakistan": {
    name: "Nestlé Pakistan",
    logo: "/img/sponser/nestlelogo.png",
    description: "Creating shared value through nutrition, water, and rural development initiatives",
    website: "https://www.nestle.pk",
    contributions: [
      "Implemented water conservation projects",
      "Supported dairy farmers",
      "Provided nutrition education",
      "Developed rural communities"
    ],
    impact: "Nestlé Pakistan has positively impacted over 100,000 people through their various initiatives."
  },
  "shafi-group": {
    name: "Shafi Group",
    logo: "/img/sponser/shafilogo.png",
    description: "Driving positive change through diverse business initiatives and social responsibility",
    website: "https://www.alshafigroup.com/",
    contributions: [
      "Supported educational institutions",
      "Created employment opportunities",
      "Implemented environmental initiatives",
      "Sponsored community programs"
    ],
    impact: "Shafi Group has contributed to the education of over 5,000 students and created numerous sustainable initiatives."
  },
  "bard-foundation": {
    name: "Bard Foundation",
    logo: "/img/sponser/Bard-Foundation.png",
    description: "Empowering communities through education and social development initiatives",
    website: "https://bard-foundation.com/",
    contributions: [
      "Provided scholarships to deserving students",
      "Supported healthcare initiatives",
      "Implemented community development programs",
      "Sponsored youth development projects"
    ],
    impact: "Bard Foundation has provided educational support to over 3,000 students and implemented various community development projects."
  },
  "descon": {
    name: "Descon",
    logo: "/img/sponser/logo-descon.jpg",
    description: "Empowering communities through education and social development initiatives",
    website: "https://www.descon.com/",
    contributions: [
      "Provided scholarships to deserving students",
      "Supported healthcare initiatives",
      "Implemented community development programs",
      "Sponsored youth development projects"
    ],
    impact: "Bard Foundation has provided educational support to over 3,000 students and implemented various community development projects."
  }
};

export default function SupporterDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Handle loading state
  if (!id) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Loading...</p>
      </div>
    );
  }

  const supporter = supporterDetails[id];

  // Handle 404 state
  if (!supporter) {
    return (
      <div className={styles.errorContainer}>
        <h1>Supporter Not Found</h1>
        <p>The supporter you're looking for doesn't exist.</p>
        <Link href="/supporters" className={styles.backButton}>
          ← Back to Supporters
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailWrapper}>
        <Link href="/supporters" className={styles.backButton}>
          ← Back to Supporters
        </Link>
        
        <div className={styles.detailHeader}>
          <div className={styles.detailLogoContainer}>
            <Image
              src={supporter.logo}
              alt={supporter.name}
              width={300}
              height={150}
              className={styles.detailLogo}
            />
          </div>
          <h1 className={styles.detailTitle}>{supporter.name}</h1>
          <p className={styles.detailDescription}>{supporter.description}</p>
          <a
            href={supporter.website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.detailWebsiteButton}
          >
            Visit Website
          </a>
        </div>

        <div className={styles.contributionSection}>
          <h2>How They Help Us</h2>
          <ul className={styles.contributionList}>
            {supporter.contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
          <div className={styles.impactStatement}>
            <h3>Impact</h3>
            <p>{supporter.impact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
