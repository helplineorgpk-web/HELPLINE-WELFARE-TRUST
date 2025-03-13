import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import Layout2 from "../Components/Layout/Layout2";
import Link from "next/link";
const JobSeeker = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    education: "",
    experience: "",
    skills: "",
    jobType: "",
    preferredLocation: "",
    resume: null,
    expectedSalary: "",
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
        <h4 className="text-center mb-4">Job Seeker / Internee Registration</h4>
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
                <Form.Label>Highest Education</Form.Label>
                <Form.Control
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Work Experience (in years)</Form.Label>
            <Form.Control
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Skills</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="List your key skills, separated by commas"
              required
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Looking For</Form.Label>
                <Form.Select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="fulltime">Full-time Job</option>
                  <option value="parttime">Part-time Job</option>
                  <option value="internship">Internship</option>
                  <option value="freelance">Freelance Work</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Preferred Location</Form.Label>
                <Form.Control
                  type="text"
                  name="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Expected Salary/Stipend</Form.Label>
            <Form.Control
              type="text"
              name="expectedSalary"
              value={formData.expectedSalary}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label>Upload Resume</Form.Label>
            <Form.Control
              type="file"
              name="resume"
              onChange={handleFileChange}
              required
            />
          </Form.Group>

          <div className="header-right d-flex align-items-center justify-content-center">
            <div className="header-sing d-inline-block">
              <button type="submit" className="g_btn hbtn_1 to_right1 rad-30">
                Submit Application<span></span>
              </button>
            </div>
          </div>
        </Form>
      </Container>
    </Layout2>
  );
};

export default JobSeeker;
