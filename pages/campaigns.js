import React, { useState, useCallback, useMemo, useEffect } from "react";
import Layout1 from "../Components/Layout/Layout1";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import UBLPaymentForm from "../Components/Elements/Payment/UBLPaymentForm";
import styles from "../styles/Campaigns.module.css";

const HERO_VIDEO_URL = "https://www.youtube.com/embed/Zed6wEaHiag";
const MIN_DONATION = 100;

const CATEGORY_FILTERS = [
  { id: "all", label: "All Categories" },
  { id: "education", label: "Education" },
  { id: "sustainability", label: "Sustainability" },
  { id: "social-welfare", label: "Social Welfare" },
  { id: "healthcare", label: "Healthcare" },
  { id: "disaster-relief", label: "Disaster Relief" },
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

/** ISO date only (YYYY-MM-DD); avoid toLocaleDateString — server vs browser locale breaks hydration. */
function formatCampaignEndDate(isoDate) {
  if (!isoDate || typeof isoDate !== "string") return "";
  const parts = isoDate.trim().split("-");
  if (parts.length !== 3) return isoDate;
  const [y, mo, da] = parts;
  const month = Number(mo);
  const day = Number(da);
  if (!y || Number.isNaN(month) || Number.isNaN(day)) return isoDate;
  return `${month}/${day}/${y}`;
}

function campaignMatchesCategory(campaign, categoryId) {
  const cats = campaign.categories || [];
  return cats.includes(categoryId);
}

export default function Campaigns({ campaigns = [] }) {
  const [cardState, setCardState] = useState({});
  const [paymentCampaign, setPaymentCampaign] = useState(null);
  const [donationErrorId, setDonationErrorId] = useState(null);
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [listingHydrated, setListingHydrated] = useState(false);

  useEffect(() => {
    setListingHydrated(true);
  }, []);

  const filteredCampaigns = useMemo(() => {
    if (!activeCategoryId || activeCategoryId === "all") return campaigns;
    return campaigns.filter((c) => campaignMatchesCategory(c, activeCategoryId));
  }, [campaigns, activeCategoryId]);

  const selectCategoryFilter = useCallback((id) => {
    setActiveCategoryId(id);
  }, []);

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

      <div
        id="featured"
        className={styles.listingBackdrop}
        suppressHydrationWarning
      >
        <Container className={`py-5 ${styles.listingContainer}`}>
          {!listingHydrated ? (
            <div className={styles.listingHydrationShell} aria-hidden>
              <div className={styles.listingHydrationTitle} />
              <div className={styles.listingHydrationPills} />
              <div className={styles.listingHydrationCards} />
            </div>
          ) : (
            <>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Campaigns</h2>
            <p className={styles.sectionSubtitle}>
              Your Generosity Changes Lives.
            </p>
          </div>

          <div className={styles.filterPanel}>
            <p className={styles.filterPanelEyebrow}>Find your cause</p>
            <div className={styles.filterScroll}>
              <div
                className={styles.filterBar}
                role="group"
                aria-label="Filter campaigns by category"
              >
                {CATEGORY_FILTERS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    className={
                      activeCategoryId === f.id
                        ? `${styles.filterBtn} ${styles.filterBtnActive}`
                        : styles.filterBtn
                    }
                    aria-pressed={activeCategoryId === f.id}
                    onClick={() => selectCategoryFilter(f.id)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
            {activeCategoryId && activeCategoryId !== "all" ? (
              <p className={styles.filterHint}>
                <span className={styles.filterHintBadge}>
                  {filteredCampaigns.length}{" "}
                  {filteredCampaigns.length === 1 ? "campaign" : "campaigns"}
                </span>
                <span className={styles.filterHintText}>
                  in{" "}
                  <strong>
                    {
                      CATEGORY_FILTERS.find((x) => x.id === activeCategoryId)
                        ?.label
                    }
                  </strong>
                  <button
                    type="button"
                    className={styles.filterClearLink}
                    onClick={() => setActiveCategoryId("all")}
                  >
                    All categories
                  </button>
                </span>
              </p>
            ) : (
              <p className={styles.filterAllHint}>
                Tap a category to narrow the list, or browse everything below.
              </p>
            )}
          </div>

          <Row className="g-4 g-lg-5">
          {filteredCampaigns.length === 0 ? (
            <Col xs={12}>
              <div className={styles.filterEmpty}>
                <div className={styles.filterEmptyVisual} aria-hidden />
                <p className={styles.filterEmptyTitle}>Nothing here yet</p>
                <p className={styles.filterEmptyText}>
                  There are no campaigns in this category right now. Pick another
                  cause above or show all campaigns.
                </p>
                <button
                  type="button"
                  className={styles.filterEmptyBtn}
                  onClick={() => setActiveCategoryId("all")}
                >
                  View all campaigns
                </button>
              </div>
            </Col>
          ) : null}
          {filteredCampaigns.map((campaign, index) => {
            const presets = getPresetAmounts(campaign);
            const amount = getAmount(campaign.id);
            const detailHref = `/campaign/${campaign.id}`;
            const showDonationError = donationErrorId === campaign.id;
            const isCampaignWebp = campaign.image.startsWith("/img/Campaigns/") && campaign.image.endsWith(".webp");
            const isPriorityImage = isCampaignWebp || campaign.featured || index < 2;
            const isEagerImage = isCampaignWebp || index < 4;

            return (
              <Col key={campaign.id} lg={4} md={6} sm={12} className="mb-4 mb-lg-5">
                <Card
                  className={`h-100 ${styles.campaignCard} ${campaign.featured ? styles.campaignCardFeatured : ""}`}
                >
                  <div className={styles.imageWrapper}>
                    {campaign.featured ? (
                      <span className={styles.featuredRibbon}>Featured</span>
                    ) : null}
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
                    <div className={styles.imageGradient} aria-hidden />
                  </div>
                  <Card.Body>
                    {campaign.categories?.length ? (
                      <div className={styles.cardCatRow}>
                        {campaign.categories.map((catId) => {
                          const label = CATEGORY_FILTERS.find(
                            (f) => f.id === catId
                          )?.label;
                          if (!label) return null;
                          return (
                            <span key={catId} className={styles.cardCatChip}>
                              {label}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
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
                      <a href={detailHref} className={`btn ${styles.detailButton}`}>
                        Campaign Detail
                      </a>
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
                          : campaign.status === "Upcoming"
                            ? "Upcoming"
                            : "Ended"}{" "}
                        {formatCampaignEndDate(campaign.details.endDate)}
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
            </>
          )}
        </Container>
      </div>

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
  const { campaignsData } = await import("../data/campaignsData");
  return {
    props: {
      campaigns: campaignsData,
    },
    revalidate: 3600,
  };
}
