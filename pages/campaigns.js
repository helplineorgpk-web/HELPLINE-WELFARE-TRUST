import React from "react";
import Layout1 from "../Components/Layout/Layout1";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Campaigns.module.css";

const campaignsData = [
  {
    id: "school-masjid-project",
    title: "School Masjid Project",
    href: "/masjid",
    description:
      "Building integrated school and masjid facilities to uplift communities.",
    image: "/img/Campaigns/MASJID.jpg",
    details: {
      goal: 1000000,
      raised: 250000,
      packages: [
        {
          name: "Basic Package",
          price: 5000,
          description: "Support with basic contribution",
        },
      ],
      endDate: "2020-06-30",
    },
    status: "Running ",
  },
  {
    id: "vocational-training-center",
    title: "Vocational Training Center",
    href: "/vocationalTrainingCenters",
    description:
      "Equip youth with technical skills for sustainable employment.",
    image: "/img/Campaigns/Vocational.png",
    details: {
      goal: 1000000,
      raised: 250000,
      packages: [
        {
          name: "Basic Package",
          price: 5000,
          description: "Support with basic contribution",
        },
      ],
      endDate: "2020-01-21",
    },
    status: "Running ",
  },
  {
    id: "rashan-program",
    title: "Rashan Program",
    href: "/rashan",
    description:
      "Provide essential food supplies to struggling families across Pakistan.",
    image: "/img/Campaigns/Grocery.png",
    details: {
      goal: 1000000,
      raised: 250000,
      packages: [
        {
          name: "Basic Package",
          price: 5000,
          description: "Support with basic contribution",
        },
      ],
      endDate: "2020-02-23",
    },
    status: "Running ",
  },
  {
    id: "support-the-student",
    title: "Support the Student",
    href: "/student-support",
    description:
      "Sponsor students' education, ensuring they don't drop out due to financial constraints.",
    image: "/img/Campaigns/student.png",
    details: {
      goal: 1000000,
      raised: 250000,
      packages: [
        {
          name: "Basic Package",
          price: 5000,
          description: "Support with basic contribution",
        },
      ],
      endDate: "2021-08-03",
    },
    status: "Running ",
  },
  {
    id: "qurbani-2025",
    title: "Qurbani Program 2025",
    href: "/qurbani",
    description:
      "Participate in our Qurbani program to help distribute meat to deserving families",
    image: "/img/Campaigns/reallygreatsite.png",
    details: {
      goal: 2000000,
      raised: 800000,
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
      endDate: "2025-06-15",
    },
    status: "Previous",
  },
  {
    id: "ramzan-2025",
    title: "Ramzan Food Package 2025",
    href: "/ramzanRashan",
    description: "Provide essential food items to families during Ramzan",
    image: "/img/rashan/bahawalpurrashan2.jpg",
    details: {
      goal: 1000000,
      raised: 300000,
      packages: [
        {
          name: "Basic Package",
          price: 5000,
          items: [
            "10kg Flour",
            "5kg Rice",
            "3kg Sugar",
            "3L Cooking Oil",
            "1kg Dates",
            "Tea",
            "Spices",
          ],
        },
        {
          name: "Family Package",
          price: 8000,
          items: [
            "20kg Flour",
            "10kg Rice",
            "5kg Sugar",
            "5L Cooking Oil",
            "2kg Dates",
            "Tea",
            "Spices",
            "Lentils",
          ],
        },
      ],
      endDate: "2025-03-15",
    },
    status: "Previous",
  },
];

export default function Campaigns() {
  return (
    <Layout1>
      <Container className="py-5">
        <div style={{ marginTop: "120px" }}>
          <h2 className="text-center mb-5">Our Campaigns</h2>
          <Row className="g-4">
            {campaignsData.map((campaign) => (
              <Col key={campaign.id} lg={4} md={6} className="mb-4">
                <Card className={`h-100 ${styles.campaignCard}`}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      fill
                      priority
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                            (campaign.details.raised / campaign.details.goal) *
                            100
                          }
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                      <div className={styles.statsContainer}>
                        <small className="text-muted">
                          Raised: Rs.{campaign.details.raised.toLocaleString()}
                        </small>
                        <small className="text-muted">
                          Goal: Rs.{campaign.details.goal.toLocaleString()}
                        </small>
                      </div>
                    </div>
                    <Link
                      href={campaign.href || `/campaign/${campaign.id}`}
                      className={`btn w-100 ${styles.actionButton}`}
                    >
                      Learn More
                    </Link>
                  </Card.Body>
                  <Card.Footer className={styles.cardFooter}>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        {campaign.status === "Running " ? "Running " : "Ended "}
                        {new Date(
                          campaign.details.endDate
                        ).toLocaleDateString()}
                      </small>
                      <span
                        className={`${styles.badge} ${styles.badgeUpcoming}`}
                      >
                        {campaign.status}
                      </span>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Layout1>
  );
}
