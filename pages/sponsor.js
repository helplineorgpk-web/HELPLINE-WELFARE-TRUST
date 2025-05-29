import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import Layout2 from "../Components/Layout/Layout2";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sponsor = () => {
  const [formType, setFormType] = useState("sponsor"); // default
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    city: "",
    country: "",
    organization: "",
    sponsorshipType: "",
    sponsorshipAmount: "",
    duration: "",
    message: "",
    preferredArea: "",
    purpose: "",
    donationAmount: "",
    donationType: "",
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
    const finalMessage =
      `I Want To Become A ${formType === "sponsor" ? "Sponsor" : "Donor"}.\n` +
      `Full Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Contact: ${formData.contact}\n` +
      `City: ${formData.city}\n` +
      `Country: ${formData.country}\n` +
      `Organization: ${formData.organization || "N/A"}\n` +
      (formType === "sponsor"
        ? `Sponsorship Type: ${formData.sponsorshipType}\nSponsorship Amount: ${formData.sponsorshipAmount}\nDuration: ${formData.duration}\nPreferred Area: ${formData.preferredArea}\nPurpose: ${formData.purpose}\n`
        : `Donation Amount: ${formData.donationAmount}\nDonation Type: ${formData.donationType}\n`) +
      `Additional Message: ${formData.message || "N/A"}`;

    const templateParams = {
      name: formData.fullName,
      email: formData.email,
      message: finalMessage,
    };

    emailjs
      .send(
        "service_sn43jtj",
        "template_2m4dd8r",
        templateParams,
        "E2G6lzak44zoyL3Hy"
      )
      .then(() => {
        toast.success("Your request has been submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        setFormData({
          fullName: "",
          email: "",
          contact: "",
          city: "",
          country: "",
          organization: "",
          sponsorshipType: "",
          sponsorshipAmount: "",
          duration: "",
          message: "",
          preferredArea: "",
          purpose: "",
          donationAmount: "",
          donationType: "",
        });
      })
      .catch(() => {
        toast.error("Submission failed. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <Layout2>
      <Container className="py-5">
        <div
          style={{
            textAlign: "center",
            background: "#52FBD9E8",
            padding: "20px",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4 className="text-center mb-4">Become Donor/ Sponsor</h4>
        </div>

        <div
          className="d-flex justify-content-center gap-4 mb-4"
          style={{ marginTop: "40px" }}
        >
          <Form.Check
            inline
            label="Sponsor"
            name="formType"
            type="radio"
            style={{ fontFamily: "Poppins", fontSize: "20px" }}
            id="sponsor-radio"
            checked={formType === "sponsor"}
            onChange={() => setFormType("sponsor")}
          />
          <Form.Check
            inline
            label="Donor"
            name="formType"
            type="radio"
            style={{ fontFamily: "Poppins", fontSize: "20px" }}
            id="donor-radio"
            checked={formType === "donor"}
            onChange={() => setFormType("donor")}
          />
        </div>

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

          {formType === "sponsor" && (
            <>
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
                      <option value="skillDevelopment">
                        Skill Development
                      </option>
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
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
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
            </>
          )}

          {formType === "donor" && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Donation Amount</Form.Label>
                <Form.Control
                  type="text"
                  name="donationAmount"
                  value={formData.donationAmount}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Type of Donation</Form.Label>
                <Form.Select
                  name="donationType"
                  value={formData.donationType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="one-time">One-Time</option>
                  <option value="recurring">Recurring</option>
                  <option value="zakat">Zakat</option>
                  <option value="sadaqah">Sadaqah</option>
                </Form.Select>
              </Form.Group>
            </>
          )}

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
            Submit {formType === "sponsor" ? "Sponsorship" : "Donation"} Request
          </button>
        </Form>
        <ToastContainer />
      </Container>
    </Layout2>
  );
};

export default Sponsor;
