import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Layout1 from "../../Components/Layout/Layout1";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { campaignsData } from "../campaigns";
import UBLPaymentForm from "../../Components/Elements/Payment/UBLPaymentForm";
import CampaignHeroHeader from "../../Components/Elements/Campaign/CampaignHeroHeader";
import styles from "../../styles/Campaigns.module.css";
import { CAMPAIGN_DETAIL_SECTIONS } from "../../data/campaignDetailSections";
import { CAMPAIGN_DETAIL_HIGHLIGHTS } from "../../data/campaignDetailHighlights";

const EDUCATION_DETAIL_CONTENT = {
  "support-the-student": {
    longDescription:
      "This campaign keeps vulnerable children in school through direct monthly sponsorship. Your support covers fees, learning material, and education continuity for students at risk of dropping out.",
    impact: [
      { value: "10+", label: "Partner Schools" },
      { value: "PKR 2,200", label: "Per Student / Month" },
      { value: "Year-round", label: "Ongoing Support" },
    ],
  },
  "adopt-one-student": {
    longDescription:
      "Adopt One Student connects donors directly with child education support. Contributions are structured so you can sponsor one student or scale support to multiple students each month.",
    impact: [
      { value: "1:1", label: "Student Sponsorship" },
      { value: "PKR 11,000", label: "5 Students / Month" },
      { value: "PKR 22,000", label: "10 Students / Month" },
    ],
  },
  "keep-a-free-school-running": {
    longDescription:
      "This campaign supports daily school operations for tuition-free education. Donations cover teaching, classroom activities, and essential academic resources for enrolled students.",
    impact: [
      { value: "Daily", label: "Operational Coverage" },
      { value: "PKR 5,000+", label: "Classroom Essentials" },
      { value: "Continuity", label: "School Stability" },
    ],
  },
  "sponsor-an-orphan-education": {
    longDescription:
      "Sponsor an orphan's learning journey through structured educational support. This campaign provides school continuity through fees, supplies, and basic student care assistance.",
    impact: [
      { value: "Priority", label: "Orphan Support" },
      { value: "PKR 5,000", label: "Monthly Sponsor Option" },
      { value: "Education", label: "Retention Focus" },
    ],
  },
  "sponsor-one-classroom": {
    longDescription:
      "Sponsor classroom development for safe and productive learning spaces. Donations help with construction, furnishing, and expansion for improved education delivery.",
    impact: [
      { value: "PKR 25,000+", label: "Starter Contribution" },
      { value: "PKR 100,000", label: "Furnishing Tier" },
      { value: "Infrastructure", label: "Long-term Impact" },
    ],
  },
  "build-school-play-area": {
    longDescription:
      "Build School Play Area supports healthy child development through safe, structured play spaces. Contributions fund equipment, safety flooring, and expanded student recreation zones.",
    impact: [
      { value: "Child Safety", label: "Play Infrastructure" },
      { value: "PKR 10,000+", label: "Play Area Donation" },
      { value: "Holistic", label: "Learning Environment" },
    ],
  },
  "build-new-six-story-alkitab-school": {
    longDescription:
      "A major capital initiative to construct a new six-story Alkitab school facility. The campaign enables long-term expansion for education access, classroom capacity, and community uplift.",
    impact: [
      { value: "6 Floors", label: "Planned Facility" },
      { value: "PKR 600M", label: "Capital Goal" },
      { value: "Scale", label: "Future Enrollment Growth" },
    ],
  },
  "sponsor-one-floor-new-school": {
    longDescription:
      "Sponsor One Floor allows focused contribution to a complete floor in the new Alkitab school project. This creates visible infrastructure progress tied to donor support.",
    impact: [
      { value: "1 Floor", label: "Target Sponsorship" },
      { value: "PKR 500,000+", label: "Tiered Contributions" },
      { value: "Build Phase", label: "Construction Support" },
    ],
  },
  "support-adopted-government-school": {
    longDescription:
      "Support adopted government schools with direct resources for classroom quality and continuity. The campaign helps strengthen public education outcomes in underserved communities.",
    impact: [
      { value: "Govt Schools", label: "Adopted Support" },
      { value: "PKR 5,000+", label: "Flexible Donation Tiers" },
      { value: "Quality", label: "Learning Improvement" },
    ],
  },
  "adopt-student-at-alkitab-school": {
    longDescription:
      "Direct student adoption support for Alkitab School with monthly sponsorship tiers. This campaign ensures enrolled children continue learning without financial disruption.",
    impact: [
      { value: "Alkitab", label: "School Focus" },
      { value: "PKR 2,200", label: "Per Student / Month" },
      { value: "PKR 22,000", label: "10 Students / Month" },
    ],
  },
  "adopt-student-at-marawan-school": {
    longDescription:
      "Sponsor students at Marawan School through monthly adoption tiers. Donations directly fund student continuity and reduce dropout risk for vulnerable learners.",
    impact: [
      { value: "Marawan", label: "School Focus" },
      { value: "PKR 2,200", label: "Per Student / Month" },
      { value: "Retention", label: "Education Continuity" },
    ],
  },
  "adopt-student-at-umer-kot-school": {
    longDescription:
      "Umer Kot School student adoption campaign supports direct sponsorship for school-going children. This program maintains access to education through predictable monthly support.",
    impact: [
      { value: "Umer Kot", label: "School Focus" },
      { value: "PKR 11,000", label: "5 Students / Month" },
      { value: "Direct", label: "Student Sponsorship" },
    ],
  },
  "adopt-student-at-ch-rehmat-ali-school": {
    longDescription:
      "Provide direct sponsorship for children at Ch Rehmat Ali School. The campaign helps students stay enrolled and consistently access learning support.",
    impact: [
      { value: "Ch Rehmat Ali", label: "School Focus" },
      { value: "PKR 2,200", label: "Per Student / Month" },
      { value: "Scalable", label: "1, 5, 10 Student Tiers" },
    ],
  },
  "adopt-student-at-imran-maryam-school": {
    longDescription:
      "Direct adoption support for Imran Maryam School students with flexible sponsorship tiers. Donations are used for educational continuity and student welfare needs.",
    impact: [
      { value: "Imran Maryam", label: "School Focus" },
      { value: "PKR 11,000", label: "5 Students / Month" },
      { value: "Monthly", label: "Sponsorship Model" },
    ],
  },
  "adopt-student-at-imam-maryam-smart-school": {
    longDescription:
      "Sponsor learners at Imam Maryam Smart School through direct student adoption. The campaign supports technology-enabled schooling and uninterrupted education.",
    impact: [
      { value: "Smart School", label: "School Focus" },
      { value: "PKR 2,200", label: "Per Student / Month" },
      { value: "Continuity", label: "Student-Centered Support" },
    ],
  },
  "adopt-student-at-chaman-goth-school": {
    longDescription:
      "Chaman Goth School adoption campaign funds direct student sponsorship through monthly donation tiers. Support is structured for transparent and scalable impact.",
    impact: [
      { value: "Chaman Goth", label: "School Focus" },
      { value: "PKR 22,000", label: "10 Students / Month" },
      { value: "Transparent", label: "Tier-based Sponsorship" },
    ],
  },
  "adopt-student-at-helpline-operated-school-bhidotki": {
    longDescription:
      "Direct sponsorship for students in the Helpline-operated Bhidotki school. Contributions sustain core education access and promote long-term student retention.",
    impact: [
      { value: "Bhidotki", label: "School Focus" },
      { value: "Helpline", label: "Operated School" },
      { value: "PKR 2,200+", label: "Monthly Sponsorship Tiers" },
    ],
  },
  "give-name-in-memory-of-loved-one": {
    longDescription:
      "A legacy giving option that allows donors to support school development in memory of a loved one. Contributions help strengthen education infrastructure with meaningful recognition.",
    impact: [
      { value: "Legacy", label: "Naming Opportunity" },
      { value: "PKR 500,000", label: "Contribution Tier" },
      { value: "Infrastructure", label: "Lasting School Impact" },
    ],
  },
};
const MIN_DONATION = 100;

function formatPkr(value) {
  return new Intl.NumberFormat("en-PK").format(value || 0);
}

function getStatusLabel(status) {
  if (status === "Upcoming") return "Upcoming";
  if (status === "Running") return "Running";
  return "Ended";
}

function getStatusClass(status) {
  if (status === "Upcoming") return "warning";
  if (status === "Running") return "success";
  return "secondary";
}

function buildLongDescription(campaign, supplemental) {
  if (campaign.longDescription) return campaign.longDescription;
  if (supplemental?.longDescription) return supplemental.longDescription;
  return `${campaign.description} Your donations directly support this cause through transparent and impact-focused implementation. Choose any package below and help us expand this campaign's reach.`;
}

function buildImpact(campaign, supplemental) {
  if (Array.isArray(campaign.impact) && campaign.impact.length) return campaign.impact;
  if (Array.isArray(supplemental?.impact) && supplemental.impact.length) {
    return supplemental.impact;
  }

  const raised = campaign?.details?.raised || 0;
  const goal = campaign?.details?.goal || 1;
  const progress = Math.min(100, Math.round((raised / goal) * 100));
  const packages = campaign?.details?.packages?.length || 0;

  return [
    { value: `${progress}%`, label: "Funded Progress" },
    { value: `${packages}`, label: "Donation Options" },
    { value: `PKR ${formatPkr(raised)}`, label: "Current Raised" },
  ];
}

function buildCampaignHighlights(campaign) {
  const story = CAMPAIGN_DETAIL_HIGHLIGHTS[campaign.id];
  if (story?.length) return story;

  const custom = CAMPAIGN_DETAIL_SECTIONS[campaign.id];
  if (custom?.highlights?.length) return custom.highlights;

  const topPackages = (campaign?.details?.packages || [])
    .slice(0, 3)
    .map((pkg) => `${pkg.name} (Rs.${formatPkr(pkg.price)})`);

  return [
    `Campaign status: ${campaign.status}`,
    `Funding progress: Rs.${formatPkr(campaign.details?.raised || 0)} raised out of Rs.${formatPkr(
      campaign.details?.goal || 0
    )}`,
    ...(topPackages.length ? [`Top donation options: ${topPackages.join(", ")}`] : []),
  ];
}

function buildBeneficiarySection(campaign) {
  const custom = CAMPAIGN_DETAIL_SECTIONS[campaign.id];
  if (custom?.beneficiaries?.length) return custom.beneficiaries;

  if ((campaign.categories || []).includes("education")) {
    return [
      "Students from low-income families",
      "Schools requiring operations, infrastructure, and learning resources",
      "Communities where education continuity reduces dropout risk",
    ];
  }
  if ((campaign.categories || []).includes("sustainability")) {
    return [
      "Women and youth in skills training, workshops, and vocational programs",
      "Families building livelihoods through structured support (including small livestock)",
      "Communities where employability and self-sufficiency are strengthened",
    ];
  }
  if ((campaign.categories || []).includes("disaster-relief")) {
    return [
      "Families affected by emergencies and natural disasters",
      "Communities requiring food, water, shelter, and medical support",
      "Vulnerable households needing immediate relief",
    ];
  }
  if ((campaign.categories || []).includes("healthcare")) {
    return [
      "Patients who need free or subsidized medicines, surgery, and outpatient care",
      "Communities served by hospital outreach, mobile units, and field medical teams",
      "Individuals eligible for sight-restoring procedures and emergency transport support",
    ];
  }
  if ((campaign.categories || []).includes("social-welfare")) {
    return [
      "Underprivileged families requiring urgent support",
      "Children and elders in need of welfare assistance",
      "Communities facing financial hardship",
    ];
  }
  return [
    "Underserved families in target communities",
    "Individuals requiring direct support through this campaign",
    "Beneficiaries selected through verified community needs",
  ];
}

function buildDonationUsage(campaign) {
  const custom = CAMPAIGN_DETAIL_SECTIONS[campaign.id];
  if (custom?.donationUsage?.length) return custom.donationUsage;

  const packageNames = (campaign?.details?.packages || []).map((pkg) => pkg.name);
  return [
    "Direct beneficiary support and field implementation",
    "Program delivery, logistics, and impact tracking",
    packageNames.length
      ? `Package deployment across: ${packageNames.join(", ")}`
      : "Flexible deployment based on campaign priorities",
  ];
}

function getPresetAmounts(campaign) {
  const prices = (campaign?.details?.packages || []).map((pkg) => pkg.price);
  const unique = [...new Set(prices)].sort((a, b) => a - b);
  const baseline = [1000, 2500].filter((n) => !unique.includes(n));
  return [...baseline, ...unique].slice(0, 6);
}

function buildCampaignObjectives(campaign) {
  const custom = CAMPAIGN_DETAIL_SECTIONS[campaign.id];
  if (custom?.objectives?.length) return custom.objectives;

  if ((campaign.categories || []).includes("education")) {
    return [
      "Increase student enrollment and retention through direct sponsorship.",
      "Improve school delivery quality with better resources and infrastructure.",
      "Reduce dropout risk in vulnerable communities through consistent funding.",
    ];
  }
  if ((campaign.categories || []).includes("sustainability")) {
    return [
      "Expand access to skills training, workshop materials, and equipment.",
      "Support trainees and families through clear sponsorship and donation tiers.",
      "Strengthen long-term self-reliance through vocational and livelihood programs.",
    ];
  }
  if (
    (campaign.categories || []).includes("healthcare") &&
    !(campaign.categories || []).includes("disaster-relief")
  ) {
    return [
      "Increase access to essential medicines, checkups, and clinic-day services.",
      "Fund capital upgrades and outreach capacity such as ambulance and mobile care.",
      "Restore vision and quality of life through structured surgical sponsorship.",
    ];
  }
  if ((campaign.categories || []).includes("disaster-relief")) {
    return [
      "Accelerate rescue, relief, and early stabilization for affected households.",
      "Fund preparedness, rehabilitation, and recovery—not only the first days of a crisis.",
      "Support safer shelter and dignified rebuilding where disasters destroy homes.",
    ];
  }
  return [
    "Deliver timely and transparent support to target beneficiaries.",
    "Improve measurable campaign outcomes through structured implementation.",
    "Scale impact through recurring and one-time donor participation.",
  ];
}

function buildImplementationProcess(campaign) {
  const custom = CAMPAIGN_DETAIL_SECTIONS[campaign.id];
  if (custom?.implementation?.length) return custom.implementation;

  return [
    `Needs assessment is performed for ${campaign.title} beneficiaries.`,
    "Funds are allocated to approved campaign packages and field activities.",
    "Execution is monitored through on-ground teams and partner stakeholders.",
    "Impact snapshots are reviewed against campaign goals and progress.",
  ];
}

export default function CampaignDetail({ campaign }) {
  if (!campaign) {
    return (
      <Layout1>
        <Container className="py-5 text-center">
          <h1>Campaign Not Found</h1>
          <p>The campaign you're looking for doesn't exist.</p>
          <Button variant="primary" href="/campaigns">
            Back to Campaigns
          </Button>
        </Container>
      </Layout1>
    );
  }

  const educationDetails = EDUCATION_DETAIL_CONTENT[campaign.id];
  const impactData = buildImpact(campaign, educationDetails);
  const statusLabel = getStatusLabel(campaign.status);
  const campaignHighlights = buildCampaignHighlights(campaign);
  const beneficiaryPoints = buildBeneficiarySection(campaign);
  const donationUsagePoints = buildDonationUsage(campaign);
  const objectivePoints = buildCampaignObjectives(campaign);
  const implementationSteps = buildImplementationProcess(campaign);
  const presetAmounts = useMemo(() => getPresetAmounts(campaign), [campaign]);
  const [selectedAmount, setSelectedAmount] = useState(
    String(campaign?.details?.packages?.[0]?.price || 1000)
  );
  const [showDonationError, setShowDonationError] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const openDonationFlow = useCallback(() => {
    const amountNum = parseInt(selectedAmount, 10);
    if (!selectedAmount || Number.isNaN(amountNum) || amountNum < MIN_DONATION) {
      setShowDonationError(true);
      return;
    }
    setShowDonationError(false);
    setIsPaymentOpen(true);
  }, [selectedAmount]);

  const closeDonationFlow = useCallback(() => {
    setIsPaymentOpen(false);
  }, []);

  return (
    <Layout1>
      <CampaignHeroHeader
        title={campaign.title}
        subtitle={campaign.description}
        primaryCta={{ href: "/campaigns", label: "VIEW ALL CAMPAIGNS" }}
        secondaryCta={{ href: "#campaign-detail", label: "CAMPAIGN DETAILS" }}
        videoTitle={`${campaign.title} - Campaign Overview`}
      />
      <Container className={`py-5 ${styles.detailContainer}`}>
        <Row id="campaign-detail">
          <Col lg={8}>
            <Card className={`mb-4 ${styles.detailMainCard}`}>
              <div className={styles.detailHeroImageWrap}>
                <Image
                  src={campaign.image}
                  alt={campaign.title}
                  fill
                  priority
                  fetchPriority="high"
                  quality={75}
                  sizes="(max-width: 992px) 100vw, 66vw"
                  className={styles.detailHeroImage}
                />
              </div>
              <Card.Body className={styles.detailMainBody}>
                <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                  <h1 className={`h2 mb-0 ${styles.detailTitle}`}>{campaign.title}</h1>
                  <span className={`${styles.badge} ${campaign.status === "Upcoming" ? styles.badgeUpcoming : styles.badgeActive}`}>
                    {statusLabel}
                  </span>
                </div>
                <Card.Text className={styles.detailIntroText}>
                  {buildLongDescription(campaign, educationDetails)}
                </Card.Text>

                <h3 className="h4 mt-4">Our Impact</h3>
                <Row className="text-center g-3 mb-4">
                  {impactData.map((item, index) => (
                    <Col key={index} md={4}>
                      <Card className="h-100">
                        <Card.Body>
                          <h4 className="h2 mb-2">{item.value}</h4>
                          <p className="mb-0">{item.label}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>

                <h3 className="h4 mt-4">Campaign Highlights</h3>
                <ListGroup className="mb-4">
                  {campaignHighlights.map((point, index) => (
                    <ListGroup.Item key={`highlight-${index}`}>{point}</ListGroup.Item>
                  ))}
                </ListGroup>

                <h3 className="h4 mt-4">Who Benefits</h3>
                <ListGroup className="mb-4">
                  {beneficiaryPoints.map((point, index) => (
                    <ListGroup.Item key={`beneficiary-${index}`}>{point}</ListGroup.Item>
                  ))}
                </ListGroup>

                <h3 className="h4 mt-4">How Your Donation Is Used</h3>
                <ListGroup className="mb-0">
                  {donationUsagePoints.map((point, index) => (
                    <ListGroup.Item key={`usage-${index}`}>{point}</ListGroup.Item>
                  ))}
                </ListGroup>

                <h3 className="h4 mt-4">Campaign Objectives</h3>
                <ListGroup className="mb-4">
                  {objectivePoints.map((point, index) => (
                    <ListGroup.Item key={`objective-${index}`}>{point}</ListGroup.Item>
                  ))}
                </ListGroup>

                <h3 className="h4 mt-4">Implementation Process</h3>
                <ListGroup className="mb-0">
                  {implementationSteps.map((point, index) => (
                    <ListGroup.Item key={`process-${index}`}>{point}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className={`mb-4 sticky-top ${styles.detailSideCard}`} style={{ top: "20px" }}>
              <Card.Header className={styles.detailSideHeader}>
                <h3 className="h4 mb-0">Campaign Progress</h3>
              </Card.Header>
              <Card.Body className={styles.detailSideBody}>
                <div className="mb-3">
                  <div className={styles.progress}>
                    <div
                      className={styles.progressBar}
                      role="progressbar"
                      style={{
                        width: `${(campaign.details.raised / campaign.details.goal) * 100}%`,
                      }}
                      aria-valuenow={(campaign.details.raised / campaign.details.goal) * 100}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <small>Raised: Rs.{formatPkr(campaign.details.raised)}</small>
                    <small>Goal: Rs.{formatPkr(campaign.details.goal)}</small>
                  </div>
                </div>

                <h4 className="h5 mb-3">Available Packages</h4>
                <ListGroup className="mb-4">
                  {campaign.details.packages.map((pkg, index) => (
                    <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="h6 mb-1">{pkg.name}</h5>
                        {pkg.description && <small className="text-muted">{pkg.description}</small>}
                        {pkg.items && (
                          <small className="d-block text-muted">
                            {pkg.items.join(', ')}
                          </small>
                        )}
                      </div>
                      <span>Rs.{formatPkr(pkg.price)}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>

                <h4 className="h5 mb-2">Select Donation Amount</h4>
                <div className={styles.presetButtons}>
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`${styles.presetBtn} ${
                        selectedAmount === String(amount) ? styles.presetBtnActive : ""
                      }`}
                      onClick={() => {
                        setSelectedAmount(String(amount));
                        setShowDonationError(false);
                      }}
                    >
                      Rs.{formatPkr(amount)}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={
                    selectedAmount && !presetAmounts.includes(Number(selectedAmount))
                      ? selectedAmount
                      : ""
                  }
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setSelectedAmount(value);
                    setShowDonationError(false);
                  }}
                  placeholder="Other amount"
                  className={styles.amountInput}
                />
                {showDonationError ? (
                  <small className={styles.donationError}>
                    Please select or enter a valid amount (min Rs.{formatPkr(MIN_DONATION)}).
                  </small>
                ) : null}

                <Button className={`btn ${styles.actionButton}`} onClick={openDonationFlow}>
                  Donate Now
                </Button>

                <div className="text-center mt-3">
                  <small className="text-muted">
                    Campaign ends: {campaign.details.endDate}
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {isPaymentOpen ? (
        <div
          className={styles.paymentModal}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeDonationFlow();
          }}
        >
          <div className={styles.paymentModalContent}>
            <button
              type="button"
              onClick={closeDonationFlow}
              aria-label="Close"
              className={styles.paymentModalClose}
            >
              &times;
            </button>
            <UBLPaymentForm
              donationAmount={parseInt(selectedAmount, 10) || 0}
              donationType={campaign.title}
              onPaymentCompleted={closeDonationFlow}
              onPaymentFailed={() => {}}
            />
          </div>
        </div>
      ) : null}
    </Layout1>
  );
}

export async function getStaticPaths() {
  return {
    paths: campaignsData.map((campaign) => ({
      params: { id: campaign.id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const campaign = campaignsData.find((item) => item.id === params.id) ?? null;

  return {
    props: { campaign },
    revalidate: 3600,
  };
}
