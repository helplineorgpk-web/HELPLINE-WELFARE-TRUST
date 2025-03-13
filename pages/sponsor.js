import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import Layout2 from "../Components/Layout/Layout2";
import Link from "next/link";
const Sponsor = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    organization: "",
    sponsorshipType: "",
    sponsorshipAmount: "",
    duration: "",
    message: "",
    preferredArea: "",
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      documents: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Layout2>
      <Container className="py-5">
        <h4 className="text-center mb-4">Become a Sponsor</h4>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Organization (if applicable)</Form.Label>
                <Form.Control
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Type of Sponsorship</Form.Label>
                <Form.Select
                  name="sponsorshipType"
                  value={formData.sponsorshipType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="education">Education</option>
                  <option value="medical">Medical</option>
                  <option value="skillDevelopment">Skill Development</option>
                  <option value="general">General Support</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Sponsorship Amount (monthly)</Form.Label>
                <Form.Control
                  type="text"
                  name="sponsorshipAmount"
                  value={formData.sponsorshipAmount}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Sponsorship Duration</Form.Label>
            <Form.Select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            >
              <option value="">Select Duration</option>
              <option value="3months">3 Months</option>
              <option value="6months">6 Months</option>
              <option value="1year">1 Year</option>
              <option value="ongoing">Ongoing</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Preferred Area of Impact</Form.Label>
            <Form.Control
              type="text"
              name="preferredArea"
              value={formData.preferredArea}
              onChange={handleChange}
              placeholder="e.g., Local community, specific region, or type of beneficiaries"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Additional Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any specific requirements or message"
            />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label>Supporting Documents (if any)</Form.Label>
            <Form.Control
              type="file"
              name="documents"
              onChange={handleFileChange}
            />
          </Form.Group>

          <div className="header-right d-flex align-items-center justify-content-center">
            <div className="header-sing d-inline-block">
              <button type="submit" className="g_btn hbtn_1 to_right1 rad-30">
                Submit Sponsorship Request<span></span>
              </button>
            </div>
          </div>
        </Form>
      </Container>
    </Layout2>
  );
};

export default Sponsor;
