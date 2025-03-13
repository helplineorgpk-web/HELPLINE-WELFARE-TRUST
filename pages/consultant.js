import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import Layout2 from "../Components/Layout/Layout2";
import Link from "next/link";
const Consultant = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    profession: "",
    expertise: "",
    experience: "",
    availability: "",
    consultationType: "",
    languages: "",
    resume: null,
    additionalInfo: "",
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
      resume: e.target.files[0],
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
        <h4 className="text-center mb-4">Consultant & Friend Registration</h4>
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
                <Form.Label>Current Profession</Form.Label>
                <Form.Control
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Areas of Expertise</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              placeholder="List your areas of expertise, separated by commas"
              required
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Years of Experience</Form.Label>
                <Form.Control
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Availability</Form.Label>
                <Form.Select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="flexible">Flexible</option>
                  <option value="specific">Specific Hours</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Type of Consultation</Form.Label>
            <Form.Select
              name="consultationType"
              value={formData.consultationType}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option value="career">Career Guidance</option>
              <option value="education">Educational Counseling</option>
              <option value="medical">Medical Consultation</option>
              <option value="legal">Legal Advice</option>
              <option value="financial">Financial Planning</option>
              <option value="mental">Mental Health Support</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Languages Spoken</Form.Label>
            <Form.Control
              type="text"
              name="languages"
              value={formData.languages}
              onChange={handleChange}
              placeholder="e.g., English, Urdu, Arabic"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload Resume/CV</Form.Label>
            <Form.Control
              type="file"
              name="resume"
              onChange={handleFileChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label>Additional Information</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Any additional information you'd like to share"
            />
          </Form.Group>

          <div className="header-right d-flex align-items-center justify-content-center">
            <div className="header-sing d-inline-block">
              <button type="submit" className="g_btn hbtn_1 to_right1 rad-30">
                Submit Registration<span></span>
              </button>
            </div>
          </div>
        </Form>
      </Container>
    </Layout2>
  );
};

export default Consultant;
