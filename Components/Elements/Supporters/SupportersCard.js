import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../public/css/Supporter.module.css";

export default function SupportersCard() {
  const supporters = [
    {
      name: "Henkel Pakistan",
      logo: "/img/sponser/Henkel-Logo.png",
      description:
        "Supporting community development through innovative solutions in adhesives, beauty care, and laundry",
      website: "https://www.henkel.com/",
    },
    {
      name: "HP Travel & tour",
      logo: "/img/sponser/hplogo.png",
      description:
        "Empowering communities through quality footwear and sustainable practices",
      website: "https://hptraveltours.com/",
    },
    {
      name: "Asia Poultry Feeds",
      logo: "/img/sponser/asia-poultry-feeds-logo.png",
      description:
        "Contributing to food security through high-quality poultry feed production",
      website: "https://asiafeeds.net/",
    },
    {
      name: "Izhar Group",
      logo: "/img/sponser/izharlogo.png",
      description:
        "Building better communities through sustainable construction and development",
      website: "https://izhar.com/izhar/",
    },
    {
      name: "Mughal Steel",
      logo: "/img/sponser/mughalsteel.png",
      description:
        "Strengthening Pakistan's infrastructure with quality steel products",
      website: "https://mughalsteel.com",
    },
    {
      name: "Nestlé Pakistan",
      logo: "/img/sponser/nestlelogo.png",
      description:
        "Creating shared value through nutrition, water, and rural development initiatives",
      website: "https://www.nestle.pk",
    },
    {
      name: "Shafi Group",
      logo: "/img/sponser/shafilogo.png",
      description:
        "Driving positive change through diverse business initiatives and social responsibility",
      website: "https://www.alshafigroup.com/",
    },
    {
      name: "Bard Foundation",
      logo: "/img/sponser/Bard-Foundation.png",
      description:
        "Empowering communities through education and social development initiatives",
      website: "https://bard-foundation.com/",
    },
    {
      name: "Sidique Renewable Energy",
      logo: "/img/sponser/sidiquerenewableenergy.png",
      description:
        "Promoting sustainable energy solutions for a greener future",
      website: "https://sre.com.pk/",
    },
    {
      name: "Better Deals",
      logo: "/img/sponser/betterDeals.png",
      description:
        "Providing value through quality products and customer satisfaction",
      website: "https://betterdeals.bz/",
    },
    {
      name: "Chughtai Lab",
      logo: "/img/sponser/chughtailab.png",
      description:
        "Delivering reliable healthcare diagnostics and laboratory services",
      website: "https://www.chughtailab.com",
    },
    {
      name: "European Union",
      logo: "/img/sponser/europianuniun.svg",
      description:
        "Supporting development and humanitarian initiatives worldwide",
      website: "https://european-union.europa.eu",
    },
    {
      name: "Hasene",
      logo: "/img/sponser/hasene.png",
      description:
        "International humanitarian aid and social support organization",
      website: "https://hasene.org",
    },
    {
      name: "IHH Humanitarian Foundation",
      logo: "/img/sponser/horizontalIHH.svg",
      description:
        "Providing humanitarian relief and development support globally",
      website: "https://ihh.org.tr",
    },
    {
      name: "Ilaan",
      logo: "/img/sponser/ilaan.png",
      description: "Revolutionizing real estate through digital innovation",
      website: "https://www.ilaan.com",
    },
    {
      name: "Mahir",
      logo: "/img/sponser/mahir.png",
      description:
        "Empowering skilled professionals and creating job opportunities",
      website: "https://mahircompany.com/",
    },
    {
      name: "Motif Textiles",
      logo: "/img/sponser/motifstyletex.png",
      description:
        "Creating quality textiles with innovative designs and sustainable practices",
      website: "https://motif.com.pk/",
    },
    {
      name: "Qarshi Foundation",
      logo: "/img/sponser/qarshifoundition.avif",
      description:
        "Promoting health and wellness through natural healthcare solutions",
      website: "https://qarshi.com",
    },
    {
      name: "Rahat Bakers",
      logo: "/img/sponser/rahatbakers.webp",
      description: "Providing quality baked goods and food products",
      website: "https://rahatbakers.pk/global/",
    },
    {
      name: "RAS Pharma",
      logo: "/img/sponser/ras-pharma-logo.png",
      description:
        "Developing innovative pharmaceutical solutions for better healthcare",
      website: "https://raspharma.com",
    },
    {
      name: "Rasco Industries",
      logo: "/img/sponser/rasco.png",
      description: "Manufacturing quality industrial products and solutions",
      website: "https://www.resco.net/",
    },
    {
      name: "Sethi Motors",
      logo: "/img/sponser/sethimoters.png",
      description: "Providing reliable automotive solutions and services",
      website: "https://www.facebook.com/sethimotorspk/",
    },
    {
      name: "Sidique Leather",
      logo: "/img/sponser/sidiqueleathers.png",
      description:
        "Producing high-quality leather products with sustainable practices",
      website: "https://siddiqleather.com/",
    },
    {
      name: "Sigma Distribution",
      logo: "/img/sponser/sigmadistribution.png",
      description:
        "Efficient distribution solutions for businesses across Pakistan",
      website: "https://sigmadist.com.pk/",
    },
    {
      name: "Transdata",
      logo: "/img/sponser/transdata.png",
      description: "Providing innovative IT and data management solutions",
      website: "https://transdata.biz/",
    },
    {
      name: "Descon",
      logo: "/img/sponser/logo-descon.jpg",
      description: "Providing innovative IT and data management solutions",
      website: "https://www.descon.com/",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Valued Supporters</h2>
          <p className={styles.subtitle}>
            We are proud to partner with these leading organizations who share
            our vision of creating positive social impact and sustainable
            community development across Pakistan
          </p>
        </div>

        <div className={styles.supporterGrid}>
          {supporters.map((supporter, index) => (
            <div key={index} className={styles.supporterCard}>
              <div className={styles.logoContainer}>
                <Image
                  src={supporter.logo}
                  alt={supporter.name}
                  width={200}
                  height={100}
                  className={styles.logo}
                />
              </div>
              <div className={styles.supporterInfo}>
                <h3>{supporter.name}</h3>
                <p>{supporter.description}</p>
                <div className={styles.buttonGroup}>
                  <Link
                    href={supporter.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.visitButt}
                  >
                    Visit Website
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.buttonIcon}
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </Link>
                  <Link
                    href={`/supporters/${supporter.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className={styles.detailsButton}
                  >
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.buttonIcon}
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
