import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import Layout2 from "../Components/Layout/Layout2";
const StudentSkillWorker = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    category: "",
    currentStatus: "",
    institution: "",
    fieldOfStudy: "",
    skills: "",
    interests: "",
    supportNeeded: "",
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
        <h4 className="text-center mb-4">
          Student / Skill Worker Registration
        </h4>
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
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="student">Student</option>
                  <option value="skillWorker">Skill Worker</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Current Status</Form.Label>
                <Form.Control
                  type="text"
                  name="currentStatus"
                  value={formData.currentStatus}
                  onChange={handleChange}
                  placeholder="e.g., Studying, Working, Looking for opportunities"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Institution/Organization</Form.Label>
                <Form.Control
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Field of Study/Work</Form.Label>
            <Form.Control
              type="text"
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
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
              placeholder="List your skills, separated by commas"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Interests</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              placeholder="What are your interests and career goals?"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Type of Support Needed</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="supportNeeded"
              value={formData.supportNeeded}
              onChange={handleChange}
              placeholder="Describe what kind of support you are looking for"
              required
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
                Submit Registration<span></span>
              </button>
            </div>
          </div>
        </Form>
      </Container>
    </Layout2>
  );
};

export default StudentSkillWorker;
