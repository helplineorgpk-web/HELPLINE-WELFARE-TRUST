import React, { useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import Layout1 from "../Components/Layout/Layout1";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Campaigns.module.css";
import { buildCampaignsListProps } from "../lib/campaignsList";

const UBLPaymentForm = dynamic(
  () => import("../Components/Elements/Payment/UBLPaymentForm"),
  {
    ssr: false,
    loading: () => (
      <div className={styles.paymentLoading}>Loading secure form…</div>
    ),
  }
);

const YOUTUBE_ID = "Zed6wEaHiag";
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`;
const YOUTUBE_THUMB_URL = `https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`;
const MIN_DONATION = 100;
const PRIORITY_CARDS = 3;
const EAGER_CARDS = 3;

const CATEGORY_FILTERS = [
  { id: "all", label: "All Categories" },
  { id: "education", label: "Education" },
  { id: "sustainability", label: "Sustainability" },
  { id: "social-welfare", label: "Social Welfare" },
  { id: "healthcare", label: "Healthcare" },
  { id: "disaster-relief", label: "Disaster Relief" },
];

const CATEGORY_LABEL_BY_ID = CATEGORY_FILTERS.reduce((acc, c) => {
  acc[c.id] = c.label;
  return acc;
}, {});

const PKR_FORMATTER = new Intl.NumberFormat("en-PK");

function formatPkr(value) {
  return PKR_FORMATTER.format(value);
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

const CampaignCard = React.memo(function CampaignCard({
  campaign,
  amount,
  showDonationError,
  onSetAmount,
  onDonate,
  priority,
  eager,
}) {
  const detailHref = `/campaign/${campaign.id}`;
  const { presets, progressPct, categoryChips } = campaign;

  const handlePresetClick = useCallback(
    (value) => onSetAmount(campaign.id, String(value)),
    [onSetAmount, campaign.id]
  );
  const handleAmountChange = useCallback(
    (e) => {
      const v = e.target.value.replace(/\D/g, "");
      onSetAmount(campaign.id, v);
    },
    [onSetAmount, campaign.id]
  );
  const handleDonateClick = useCallback(
    () => onDonate(campaign.id),
    [onDonate, campaign.id]
  );

  return (
    <Col lg={4} md={6} sm={12} className={`mb-4 mb-lg-5 ${styles.cardCol}`}>
      <Card
        className={`h-100 ${styles.campaignCard} ${
          campaign.featured ? styles.campaignCardFeatured : ""
        }`}
      >
        <div className={styles.imageWrapper}>
          {campaign.featured ? (
            <span className={styles.featuredRibbon}>Featured</span>
          ) : null}
          <Image
            src={campaign.image}
            alt={campaign.title}
            fill
            priority={priority}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            quality={72}
            decoding="async"
            sizes="(max-width: 576px) 92vw, (max-width: 992px) 48vw, 32vw"
            className={styles.image}
            placeholder={campaign.blurDataURL ? "blur" : "empty"}
            blurDataURL={campaign.blurDataURL}
          />
          <div className={styles.imageGradient} aria-hidden />
        </div>
        <Card.Body>
          {categoryChips.length ? (
            <div className={styles.cardCatRow}>
              {categoryChips.map((chip) => (
                <span key={chip.id} className={styles.cardCatChip}>
                  {chip.label}
                </span>
              ))}
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
                style={{ width: `${progressPct}%` }}
                aria-valuenow={progressPct}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
            <div className={styles.statsContainer}>
              <small className="text-muted">
                Raised: Rs.{formatPkr(campaign.raised)}
              </small>
              <small className="text-muted">
                Goal: Rs.{formatPkr(campaign.goal)}
              </small>
            </div>
          </div>

          <div className={styles.paymentSection}>
            <p className={styles.paymentLabel}>Amount (PKR)</p>
            <div className={styles.presetButtons}>
              {presets.map((p) => (
                <button
                  key={p}
                  type="button"
                  className={`${styles.presetBtn} ${
                    amount === String(p) ? styles.presetBtnActive : ""
                  }`}
                  onClick={() => handlePresetClick(p)}
                >
                  Rs.{formatPkr(p)}
                </button>
              ))}
            </div>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Other amount"
              className={styles.amountInput}
              value={
                amount && !presets.includes(Number(amount)) ? amount : ""
              }
              onChange={handleAmountChange}
            />
          </div>

          {showDonationError && (
            <p className={styles.donationError}>
              Please select or enter amount (min Rs.
              {formatPkr(MIN_DONATION)}).
            </p>
          )}

          <div className={styles.cardActions}>
            <a href={detailHref} className={`btn ${styles.detailButton}`}>
              Campaign Detail
            </a>
            <button
              type="button"
              className={`btn ${styles.actionButton}`}
              onClick={handleDonateClick}
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
              {formatCampaignEndDate(campaign.endDate)}
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
});

export default function Campaigns({ campaigns = [] }) {
  const [cardState, setCardState] = useState({});
  const [paymentCampaign, setPaymentCampaign] = useState(null);
  const [donationErrorId, setDonationErrorId] = useState(null);
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [videoPlaying, setVideoPlaying] = useState(false);

  const filteredCampaigns = useMemo(() => {
    if (!activeCategoryId || activeCategoryId === "all") return campaigns;
    return campaigns.filter((c) =>
      (c.categories || []).includes(activeCategoryId)
    );
  }, [campaigns, activeCategoryId]);

  const campaignsById = useMemo(() => {
    const map = new Map();
    for (const c of campaigns) map.set(c.id, c);
    return map;
  }, [campaigns]);

  const selectCategoryFilter = useCallback((id) => {
    setActiveCategoryId(id);
  }, []);

  const setAmount = useCallback((id, value) => {
    setCardState((s) => ({ ...s, [id]: { ...s[id], amount: value } }));
    setDonationErrorId((prev) => (prev === id ? null : prev));
  }, []);

  const openPaymentModal = useCallback(
    (id) => {
      const amt = cardState[id]?.amount ?? "";
      const num = parseInt(amt, 10);
      if (!amt || isNaN(num) || num < MIN_DONATION) {
        setDonationErrorId(id);
        return;
      }
      setDonationErrorId(null);
      const campaign = campaignsById.get(id);
      if (campaign) setPaymentCampaign(campaign);
    },
    [cardState, campaignsById]
  );

  const closePaymentModal = useCallback(() => {
    setPaymentCampaign(null);
  }, []);

  const playVideo = useCallback(() => setVideoPlaying(true), []);

  const activeCategoryLabel =
    activeCategoryId && activeCategoryId !== "all"
      ? CATEGORY_LABEL_BY_ID[activeCategoryId]
      : null;

  return (
    <Layout1>
      {/* Hero banner with YouTube facade */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>HELPLINE WELFARE TRUST</p>
            <h1 className={styles.heroTitle}>OUR CAMPAIGNS</h1>
            <p className={styles.heroSubtitle}>
              Explore active Helpline drives—from food relief and Ramadan
              packages to education, healthcare, and vocational training. Your
              donation funds transparent, community-led programs across
              Pakistan.
            </p>
            <div className={styles.heroCta}>
              <Link href="/ramzanRashan" className={styles.heroBtnPrimary}>
                DONATE NOW
              </Link>
              <Link
                href="/campaigns#featured"
                className={styles.heroBtnSecondary}
              >
                BECOME A FUNDRAISER
              </Link>
            </div>
          </div>
          <div className={styles.heroVideoWrap}>
            <div className={styles.heroVideoInner}>
              {videoPlaying ? (
                <iframe
                  src={YOUTUBE_EMBED_URL}
                  title="Helpline campaigns and field impact"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.heroVideoIframe}
                />
              ) : (
                <button
                  type="button"
                  onClick={playVideo}
                  className={styles.heroVideoFacade}
                  aria-label="Play Helpline campaigns video"
                >
                  <Image
                    src={YOUTUBE_THUMB_URL}
                    alt="Helpline campaigns and field impact"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    unoptimized
                    className={styles.heroVideoThumb}
                  />
                  <span className={styles.heroVideoPlayBtn} aria-hidden>
                    <svg viewBox="0 0 68 48" width="68" height="48">
                      <path
                        d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                        fill="#f00"
                      />
                      <path d="M45 24L27 14v20" fill="#fff" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
            <p className={styles.heroVideoTitle}>
              Helpline campaigns and impact
            </p>
          </div>
        </div>
      </section>

      <div id="featured" className={styles.listingBackdrop}>
        <Container className={`py-5 ${styles.listingContainer}`}>
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
            {activeCategoryLabel ? (
              <p className={styles.filterHint}>
                <span className={styles.filterHintBadge}>
                  {filteredCampaigns.length}{" "}
                  {filteredCampaigns.length === 1 ? "campaign" : "campaigns"}
                </span>
                <span className={styles.filterHintText}>
                  in <strong>{activeCategoryLabel}</strong>
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
                    There are no campaigns in this category right now. Pick
                    another cause above or show all campaigns.
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
            {filteredCampaigns.map((campaign, index) => (
              <CampaignCard
                key={campaign.id}
                campaign={campaign}
                amount={cardState[campaign.id]?.amount ?? ""}
                showDonationError={donationErrorId === campaign.id}
                onSetAmount={setAmount}
                onDonate={openPaymentModal}
                priority={index < PRIORITY_CARDS}
                eager={index < EAGER_CARDS}
              />
            ))}
          </Row>
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
              donationAmount={
                parseInt(cardState[paymentCampaign.id]?.amount ?? "", 10) || 0
              }
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
      campaigns: buildCampaignsListProps(campaignsData),
    },
    revalidate: 3600,
  };
}
