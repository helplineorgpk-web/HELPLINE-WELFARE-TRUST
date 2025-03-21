import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import Layout2 from "../Components/Layout/Layout2";
import emailjs from "emailjs-com";

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
    purpose: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalMessage = `
      I Want To Become A Sponsor.\n
      Full Name: ${formData.fullName}\n
      Email: ${formData.email}\n
      Contact: ${formData.contact}\n
      Purpose: ${formData.purpose}\n
      Organization: ${formData.organization || "N/A"}\n
      Sponsorship Type: ${formData.sponsorshipType}\n
      Sponsorship Amount: ${formData.sponsorshipAmount}\n
      Duration: ${formData.duration}\n
      Preferred Area of Impact: ${formData.preferredArea}\n
      Additional Message: ${formData.message || "N/A"}\n
      Supporting Documents: ${
        formData.documents ? formData.documents.name : "None"
      }
    `;

    const templateParams = {
      name: formData.fullName,
      email: formData.email,
      message: finalMessage,
    };

    emailjs
      .send(
        "service_l4b8zlx",
        "template_z92hfde",
        templateParams,
        "TYoPyIR43vGbLqWLE"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            fullName: "",
            email: "",
            contact: "",
            organization: "",
            sponsorshipType: "",
            sponsorshipAmount: "",
            duration: "",
            message: "",
            preferredArea: "",
            purpose: "",
          });
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
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
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Purpose</Form.Label>
            <Form.Control
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
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
            />
          </Form.Group>

          <button type="submit" className="g_btn hbtn_1 to_right1 rad-30">
            Submit Sponsorship Request
          </button>
        </Form>
      </Container>
    </Layout2>
  );
};

export default Sponsor;
