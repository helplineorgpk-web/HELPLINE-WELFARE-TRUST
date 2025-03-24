import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import Layout2 from "../Components/Layout/Layout2";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    const {
      fullName,
      email,
      contact,
      category,
      currentStatus,
      institution,
      fieldOfStudy,
      skills,
      interests,
      supportNeeded,
    } = formData;

    try {
      const finalMessage = `
      🎓 Student / Skill Worker Registration
      
      👤 Full Name: ${fullName}
      📧 Email: ${email}
      📞 Contact: ${contact}
      🏷️ Category: ${category}
      📌 Current Status: ${currentStatus}
      🏫 Institution/Organization: ${institution}
      📚 Field of Study/Work: ${fieldOfStudy}
      🛠️ Skills: ${skills}
      💡 Interests: ${interests}
      🤝 Support Needed: ${supportNeeded}
      `;

      const templateParams = {
        to_name: "Support Team",
        from_name: fullName,
        from_email: email,
        message: finalMessage,
      };
      await emailjs.send(
        "service_l4b8zlx",
        "template_z92hfde",
        templateParams,
        "TYoPyIR43vGbLqWLE"
      );

      toast.success("Registration submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setFormData({
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
      });
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Submission failed. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
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

          <div className="header-right d-flex align-items-center justify-content-center">
            <div className="header-sing d-inline-block">
              <button type="submit" className="g_btn hbtn_1 to_right1 rad-30">
                Submit Registration<span></span>
              </button>
            </div>
          </div>
        </Form>
        <ToastContainer />
      </Container>
    </Layout2>
  );
};

export default StudentSkillWorker;
