import React from 'react';
import { useRouter } from 'next/router';
import Layout1 from '../../Components/Layout/Layout1';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

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
      endDate: "2025-07-31"
    },
    status: "active",
    longDescription: "Education is the key to breaking the cycle of poverty. Our Education Support Program aims to provide underprivileged students with the necessary tools and resources to continue their education. From basic school supplies to comprehensive scholarships, we ensure that financial constraints don't hinder a child's right to education.",
    impact: [
      { value: "1000+", label: "Students Supported" },
      { value: "85%", label: "Retention Rate" },
      { value: "100%", label: "Pass Rate" }
    ]
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
      endDate: "2025-12-31"
    },
    status: "active",
    longDescription: "Healthcare is a basic human right, yet many cannot afford even basic medical care. Our Medical Support Initiative provides financial assistance for everything from routine checkups to major surgeries. We work with a network of hospitals and healthcare providers to ensure quality care at subsidized rates.",
    impact: [
      { value: "2000+", label: "Patients Helped" },
      { value: "150+", label: "Surgeries Funded" },
      { value: "24/7", label: "Emergency Support" }
    ]
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
      endDate: "2025-06-15"
    },
    status: "upcoming",
    longDescription: "Our Qurbani program ensures that your religious obligation is fulfilled with utmost care and the meat is distributed to those who need it most. We handle everything from selecting healthy animals to proper Islamic slaughter and efficient distribution. Your contribution helps bring joy to underprivileged families during Eid-ul-Adha.",
    impact: [
      { value: "1000+", label: "Families Receiving Meat" },
      { value: "3", label: "Package Options" },
      { value: "100%", label: "Islamic Guidelines" }
    ]
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
      endDate: "2025-03-15"
    },
    status: "upcoming",
    longDescription: "During the holy month of Ramzan, many families struggle to afford basic food items. Our Ramzan Food Package ensures that deserving families can observe their fasts and celebrate Eid with dignity. Each package is carefully designed to provide essential items that will last throughout the month.",
    impact: [
      { value: "750+", label: "Families Supported" },
      { value: "2", label: "Package Options" },
      { value: "8+", label: "Essential Items" }
    ]
  }
];

export default function CampaignDetail() {
  const router = useRouter();
  const { id } = router.query;

  const campaign = campaignsData.find(c => c.id === id);

  if (!campaign) {
    return (
      <Layout1>
        <Container className="py-5 text-center">
          <h1>Campaign Not Found</h1>
          <p>The campaign you're looking for doesn't exist.</p>
          <Button variant="primary" onClick={() => router.push("/campaigns")}>Back to Campaigns</Button>
        </Container>
      </Layout1>
    );
  }

  return (
    <Layout1>
      <Container className="py-5" style={{ marginTop: "250px" }}>
        <Row>
          <Col lg={8}>
            <Card className="mb-4">
              <Card.Img variant="top" src={campaign.image} style={{ height: "400px", objectFit: "cover" }} />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h1 className="h2 mb-0">{campaign.title}</h1>
                  <span className={`badge bg-${campaign.status === 'active' ? 'success' : 'warning'}`}>
                    {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                  </span>
                </div>
                <Card.Text>{campaign.longDescription}</Card.Text>

                <h3 className="h4 mt-4">Our Impact</h3>
                <Row className="text-center g-3 mb-4">
                  {campaign.impact.map((item, index) => (
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
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="mb-4 sticky-top" style={{ top: "20px" }}>
              <Card.Header>
                <h3 className="h4 mb-0">Campaign Progress</h3>
              </Card.Header>
              <Card.Body>
                <div className="mb-3">
                  <div className="progress">
                    <div
                      className="progress-bar"
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
                    <small>Raised: Rs.{campaign.details.raised.toLocaleString()}</small>
                    <small>Goal: Rs.{campaign.details.goal.toLocaleString()}</small>
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
                      <span>Rs.{pkg.price.toLocaleString()}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>

                <Button variant="primary" size="lg" className="w-100">
                  Donate Now
                </Button>

                <div className="text-center mt-3">
                  <small className="text-muted">
                    Campaign ends: {new Date(campaign.details.endDate).toLocaleDateString()}
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout1>
  );
}
