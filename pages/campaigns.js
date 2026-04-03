import React, { useState, useCallback } from "react";
import Layout1 from "../Components/Layout/Layout1";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import UBLPaymentForm from "../Components/Elements/Payment/UBLPaymentForm";
import styles from "../styles/Campaigns.module.css";

const HERO_VIDEO_URL = "https://www.youtube.com/embed/Zed6wEaHiag";
const MIN_DONATION = 100;

const campaignsData = [
  {
    id: "ramzan-2026",
    title: "Ramadan Food Package 2026",
    href: "/ramzanRashan",
    description:
      "Provide essential food items to families during the blessed month of Ramadan. Help us ensure no family goes hungry.",
    image: "/img/Campaigns/RamadanPackage2.webp",
    details: {
      goal: 2000000,
      raised: 850000,
      packages: [
        {
          name: "Basic Package",
          price: 5000,
          description: "Essential food supplies for one family",
        },
        {
          name: "Family Package",
          price: 8000,
          description: "Complete Ramadan ration for one family",
        },
      ],
      endDate: "2026-04-15",
    },
    status: "Running",
    featured: true,
  },
  {
    id: "rashan-program",
    title: "Rashan Program",
    href: "/rashan",
    description:
      "Provide essential food supplies to struggling families across Pakistan throughout the year.",
    image: "/img/causes/cause25.jpg",
    details: {
      goal: 1500000,
      raised: 650000,
      packages: [
        {
          name: "Monthly Package",
          price: 5000,
          description: "One month food supply for a family",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
  },
  {
    id: "support-the-student",
    title: "Support A Student",
    href: "/student-support",
    description:
      "Sponsor students' education, ensuring they don't drop out due to financial constraints.",
    image: "/img/Campaigns/HelplineStudentSupport2.webp",
    details: {
      goal: 1000000,
      raised: 450000,
      packages: [
        {
          name: "Monthly Sponsorship",
          price: 3000,
          description: "Support one student for a month",
        },
        {
          name: "Annual Sponsorship",
          price: 30000,
          description: "Full year education support",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
  },
  {
    id: "vocational-training-center",
    title: "Vocational Training Center",
    href: "/vocationalTrainingCenters",
    description:
      "Equip youth with technical skills for sustainable employment and self-reliance.",
    image: "/img/Campaigns/Vocational3.webp",
    details: {
      goal: 1200000,
      raised: 380000,
      packages: [
        {
          name: "Training Sponsorship",
          price: 15000,
          description: "Sponsor one student's complete training",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
  },
  {
    id: "school-masjid-project",
    title: "School Masjid Project",
    href: "/masjid",
    description:
      "Building integrated school and masjid facilities to uplift communities spiritually and educationally.",
    image: "/img/Campaigns/MasjidMaktab2.webp",
    details: {
      goal: 2500000,
      raised: 750000,
      packages: [
        {
          name: "Brick Contribution",
          price: 5000,
          description: "Contribute to construction",
        },
        {
          name: "Room Sponsor",
          price: 100000,
          description: "Sponsor a complete classroom",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
  },
  {
    id: "flood-relief-project",
    title: "Flood Relief Project",
    href: "/flood-relief",
    description:
      "Providing immediate relief to flood-affected families across Pakistan.",
    image: "/img/causes/disasterbg.jpg",
    details: {
      goal: 2000000,
      raised: 1250000,
      packages: [
        {
          name: "Emergency Package",
          price: 10000,
          description: "Food, water, medical supplies for 1 week",
        },
        {
          name: "Family Package",
          price: 25000,
          description: "Complete relief package for 1 month",
        },
      ],
      endDate: "2026-12-31",
    },
    status: "Running",
  },
  {
    id: "qurbani-2026",
    title: "Qurbani Program 2026",
    href: "/qurbani",
    description:
      "Participate in our Qurbani program to help distribute meat to deserving families during Eid ul Adha.",
    image: "/img/causes/qurbani1.jpg",
    details: {
      goal: 2000000,
      raised: 200000,
      packages: [
        {
          name: "Goat Share",
          price: 25000,
          description: "1/7th share in a collective sacrifice",
        },
        {
          name: "Full Goat",
          price: 175000,
          description: "Complete sacrifice of one goat",
        },
        {
          name: "Cow Share",
          price: 20000,
          description: "1/7th share in a cow",
        },
      ],
      endDate: "2026-06-15",
    },
    status: "Upcoming",
  },
];

function getPresetAmounts(campaign) {
  const fromPackages = (campaign.details?.packages || []).map((p) => p.price);
  const unique = [...new Set(fromPackages)].sort((a, b) => a - b);
  const extra = [1000, 2500].filter((n) => !unique.includes(n));
  return [...extra, ...unique].slice(0, 6);
}

function formatPkr(value) {
  return new Intl.NumberFormat("en-PK").format(value);
}

export default function Campaigns({ campaigns = campaignsData }) {
  const [cardState, setCardState] = useState({});
  const [paymentCampaign, setPaymentCampaign] = useState(null);
  const [donationErrorId, setDonationErrorId] = useState(null);

  const getAmount = useCallback(
    (id) => cardState[id]?.amount ?? "",
    [cardState]
  );
  const setAmount = useCallback((id, value) => {
    setCardState((s) => ({ ...s, [id]: { ...s[id], amount: value } }));
    setDonationErrorId((prev) => (prev === id ? null : prev));
  }, []);

  const openPaymentModal = useCallback(
    (campaign) => {
      const amt = getAmount(campaign.id);
      const num = parseInt(amt, 10);
      if (!amt || isNaN(num) || num < MIN_DONATION) {
        setDonationErrorId(campaign.id);
        return;
      }
      setDonationErrorId(null);
      setPaymentCampaign(campaign);
    },
    [getAmount]
  );

  const closePaymentModal = useCallback(() => {
    setPaymentCampaign(null);
  }, []);

  return (
    <Layout1>
      {/* Hero banner with YouTube video */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>HELPLINE WELFARE TRUST</p>
            <h1 className={styles.heroTitle}>OUR CAMPAIGNS</h1>
            <p className={styles.heroSubtitle}>
              Explore active Helpline drives—from food relief and Ramadan
              packages to education, healthcare, and vocational training. Your
              donation funds transparent, community-led programs across Pakistan.
            </p>
            <div className={styles.heroCta}>
              <Link href="/ramzanRashan" className={styles.heroBtnPrimary}>
                DONATE NOW
              </Link>
              <Link href="/campaigns#featured" className={styles.heroBtnSecondary}>
                BECOME A FUNDRAISER
              </Link>
            </div>
          </div>
          <div className={styles.heroVideoWrap}>
            <div className={styles.heroVideoInner}>
              <iframe
                src={HERO_VIDEO_URL}
                title="Helpline campaigns and field impact"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.heroVideoIframe}
              />
              <p className={styles.heroVideoTitle}>Helpline campaigns and impact</p>
            </div>
          </div>
        </div>
      </section>

      <Container className="py-5" id="featured">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Campaigns</h2>
          <p className={styles.sectionSubtitle}>
            Your Generosity Changes Lives.
          </p>
        </div>

        <Row className="g-4 g-lg-5">
          {campaigns.map((campaign, index) => {
            const presets = getPresetAmounts(campaign);
            const amount = getAmount(campaign.id);
            const detailHref = campaign.href || `/campaign/${campaign.id}`;
            const showDonationError = donationErrorId === campaign.id;
            const isCampaignWebp = campaign.image.startsWith("/img/Campaigns/") && campaign.image.endsWith(".webp");
            const isPriorityImage = isCampaignWebp || campaign.featured || index < 2;
            const isEagerImage = isCampaignWebp || index < 4;

            return (
              <Col key={campaign.id} lg={6} md={6} sm={12} className="mb-4 mb-lg-5">
                <Card className={`h-100 ${styles.campaignCard}`}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      fill
                      priority={isPriorityImage}
                      loading={isEagerImage ? "eager" : "lazy"}
                      fetchPriority={isPriorityImage ? "high" : "auto"}
                      quality={75}
                      decoding="async"
                      sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                      className={styles.image}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className={styles.cardTitle}>
                      {campaign.title}
                    </Card.Title>
                    <Card.Text className={styles.cardDescription}>
                      {campaign.description}
                    </Card.Text>
                    <div className="mb-3">
                      <div className={styles.progress}>
                        <div
                          className={styles.progressBar}
                          role="progressbar"
                          style={{
                            width: `${
                              (campaign.details.raised /
                                campaign.details.goal) *
                              100
                            }%`,
                          }}
                          aria-valuenow={
                            (campaign.details.raised /
                              campaign.details.goal) *
                            100
                          }
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                      <div className={styles.statsContainer}>
                        <small className="text-muted">
                          Raised: Rs.{formatPkr(campaign.details.raised)}
                        </small>
                        <small className="text-muted">
                          Goal: Rs.{formatPkr(campaign.details.goal)}
                        </small>
                      </div>
                    </div>

                    {/* In-card payment options */}
                    <div className={styles.paymentSection}>
                      <p className={styles.paymentLabel}>Amount (PKR)</p>
                      <div className={styles.presetButtons}>
                        {presets.map((p) => (
                          <button
                            key={p}
                            type="button"
                            className={`${styles.presetBtn} ${amount === String(p) ? styles.presetBtnActive : ""}`}
                            onClick={() => setAmount(campaign.id, String(p))}
                          >
                            Rs.{formatPkr(p)}
                          </button>
                        ))}
                      </div>
                      <input
                        type="text"
                        placeholder="Other amount"
                        className={styles.amountInput}
                        value={
                          amount && !presets.includes(Number(amount))
                            ? amount
                            : ""
                        }
                        onChange={(e) => {
                          const v = e.target.value.replace(/\D/g, "");
                          setAmount(campaign.id, v);
                        }}
                      />
                    </div>

                    {showDonationError && (
                      <p className={styles.donationError}>
                        Please select or enter amount (min Rs.{formatPkr(MIN_DONATION)}).
                      </p>
                    )}

                    <div className={styles.cardActions}>
                      <Link
                        href={detailHref}
                        className={`btn ${styles.detailButton}`}
                      >
                        Campaign Detail
                      </Link>
                      <button
                        type="button"
                        className={`btn ${styles.actionButton}`}
                        onClick={() => openPaymentModal(campaign)}
                      >
                        DONATE NOW
                      </button>
                    </div>
                  </Card.Body>
                  <Card.Footer className={styles.cardFooter}>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        {campaign.status === "Running"
                          ? "Running"
                          : "Ended"}{" "}
                        {new Date(
                          campaign.details.endDate
                        ).toLocaleDateString()}
                      </small>
                      <span
                        className={`${styles.badge} ${
                          campaign.status === "Upcoming"
                            ? styles.badgeUpcoming
                            : styles.badgeActive
                        }`}
                      >
                        {campaign.status}
                      </span>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {paymentCampaign && (
        <div
          className={styles.paymentModal}
          onClick={(e) =>
            e.target === e.currentTarget && closePaymentModal()
          }
        >
          <div className={styles.paymentModalContent}>
            <button
              type="button"
              className={styles.paymentModalClose}
              onClick={closePaymentModal}
              aria-label="Close"
            >
              &times;
            </button>
            <UBLPaymentForm
              donationAmount={parseInt(getAmount(paymentCampaign.id), 10) || 0}
              donationType={paymentCampaign.title}
              onPaymentCompleted={closePaymentModal}
              onPaymentFailed={() => {}}
            />
          </div>
        </div>
      )}
    </Layout1>
  );
}

export async function getStaticProps() {
  return {
    props: {
      campaigns: campaignsData,
    },
    revalidate: 3600,
  };
}
