import React from "react";
import Layout1 from "../Components/Layout/Layout1";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";

const campaignsData = [
  {
    id: "education-support",
    title: "Education Support Program",
    description: "Support underprivileged students with education expenses and supplies",
    image: "/img/causes/School-1-scaled.jpg",
    details: {
      goal: 1500000,
      raised: 750000,
      packages: [
        {
          name: "School Supplies Kit",
          price: 3000,
          items: ["Textbooks", "Notebooks", "Stationery Set", "School Bag", "Uniform"]
        },
        {
          name: "Annual Scholarship",
          price: 25000,
          items: ["School Fees", "Books", "Uniform", "Transportation", "Supplies"]
        }
      ],
      endDate: "2025-07-31",
    },
    status: "active",
  },
  {
    id: "medical-aid",
    title: "Medical Support Initiative",
    description: "Help provide medical care and support to those who cannot afford it",
    image: "/img/causes/PHOTO-2025-02-19-11-40-10.jpg",
    details: {
      goal: 2000000,
      raised: 1200000,
      packages: [
        {
          name: "Basic Health Package",
          price: 5000,
          description: "Basic medical checkup and medicine support"
        },
        {
          name: "Surgery Support",
          price: 50000,
          description: "Support for major medical procedures"
        }
      ],
      endDate: "2025-12-31",
    },
    status: "active",
  },
  {
    id: "qurbani-2025",
    title: "Qurbani Program 2025",
    description: "Participate in our Qurbani program to help distribute meat to deserving families",
    image: "/img/causes/PHOTO-2025-02-19-11-45-30.jpg",
    details: {
      goal: 2000000,
      raised: 800000,
      packages: [
        {
          name: "Goat Share",
          price: 25000,
          description: "1/7th share in a collective sacrifice"
        },
        {
          name: "Full Goat",
          price: 175000,
          description: "Complete sacrifice of one goat"
        },
        {
          name: "Cow Share",
          price: 20000,
          description: "1/7th share in a cow"
        }
      ],
      endDate: "2025-06-15",
    },
    status: "upcoming",
  },
  {
    id: "ramzan-2025",
    title: "Ramzan Food Package 2025",
    description: "Provide essential food items to families during Ramzan",
    image: "/img/causes/PHOTO-2025-02-19-11-45-31.jpg",
    details: {
      goal: 1000000,
      raised: 300000,
      packages: [
        {
          name: "Basic Package",
          price: 5000,
          items: ["10kg Flour", "5kg Rice", "3kg Sugar", "3L Cooking Oil", "1kg Dates", "Tea", "Spices"]
        },
        {
          name: "Family Package",
          price: 8000,
          items: ["20kg Flour", "10kg Rice", "5kg Sugar", "5L Cooking Oil", "2kg Dates", "Tea", "Spices", "Lentils"]
        }
      ],
      endDate: "2025-03-15",
    },
    status: "upcoming",
  }
];

export default function campaigns() {
  return (
    <Layout1>
      <Container className="py-5 mt-5">
        <Row className="g-4" style={{ marginTop: "200px" }}>
          <h2 className="text-center mb-4">Campaigns</h2>
          {campaignsData.map((campaign) => (
            <Col key={campaign.id} md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={campaign.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{campaign.title}</Card.Title>
                  <Card.Text>{campaign.description}</Card.Text>
                  <div className="mb-3">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${
                            (campaign.details.raised / campaign.details.goal) *
                            100
                          }%`,
                        }}
                        aria-valuenow={
                          (campaign.details.raised / campaign.details.goal) *
                          100
                        }
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small className="text-muted">
                      Raised: Rs.{campaign.details.raised.toLocaleString()} of
                      Rs.
                      {campaign.details.goal.toLocaleString()}
                    </small>
                  </div>
                  <Link
                    href={`/campaign/${campaign.id}`}
                    className="btn btn-primary w-100"
                  >
                    View Details
                  </Link>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    End Date:{" "}
                    {new Date(campaign.details.endDate).toLocaleDateString()}
                  </small>
                  <span className="ms-2 badge bg-success">
                    {campaign.status}
                  </span>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout1>
  );
}
