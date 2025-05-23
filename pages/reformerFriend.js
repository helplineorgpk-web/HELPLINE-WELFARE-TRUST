import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import Layout2 from "../Components/Layout/Layout2";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReformerFriend = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    city: "",
    country: "",
    occupation: "",
    organization: "",
    areaOfInterest: "",
    expertise: "",
    availability: "",
    supportType: "",
    languages: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      fullName,
      email,
      contact,
      occupation,
      organization,
      areaOfInterest,
      expertise,
      availability,
      supportType,
      languages,
      additionalInfo,
    } = formData;

    const finalMessage = `
  I want to register as a Reformer & Friend.
  
  👤 Full Name: ${fullName}
  📧 Email: ${email}
  📞 Contact Number: ${contact}
  🌆 City: ${city}
  🌍 Country: ${country}
  💼 Occupation: ${occupation}
  🏢 Organization: ${organization}
  🎯 Area of Interest: ${areaOfInterest}
  🧠 Expertise: ${expertise}
  ⏰ Availability: ${availability}
  🤝 Type of Support: ${supportType}
  🗣️ Languages: ${languages}
  📝 Additional Information:
  ${additionalInfo || "N/A"}
    `;

    const templateParams = {
      to_name: "Help Line",
      from_name: fullName,
      from_email: email,
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
          toast.success("Your registration has been submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
          });

          setFormData({
            fullName: "",
            email: "",
            contact: "",
            city: "",
            country: "",
            occupation: "",
            organization: "",
            areaOfInterest: "",
            expertise: "",
            availability: "",
            supportType: "",
            languages: "",
            additionalInfo: "",
          });
        },
        (err) => {
          console.error("FAILED...", err);
          toast.error("Submission failed. Please try again later.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
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
          <h4 className="text-center mb-4">Reformer & Friend Registration</h4>
        </div>

        <Form onSubmit={handleSubmit} style={{ marginTop: "40px" }}>
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
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
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
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Occupation</Form.Label>
                <Form.Control
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
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
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Organization</Form.Label>
                <Form.Control
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Area of Interest</Form.Label>
                <Form.Select
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Area</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="social">Social Work</option>
                  <option value="environment">Environment</option>
                  <option value="technology">Technology</option>
                  <option value="youth">Youth Development</option>
                  <option value="women">Women Empowerment</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Expertise/Skills</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              placeholder="List your skills and expertise"
              required
            />
          </Form.Group>

          <Row>
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
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Type of Support</Form.Label>
                <Form.Select
                  name="supportType"
                  value={formData.supportType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="mentoring">Mentoring</option>
                  <option value="teaching">Teaching</option>
                  <option value="counseling">Counseling</option>
                  <option value="skillTraining">Skill Training</option>
                  <option value="projectSupport">Project Support</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Languages</Form.Label>
            <Form.Control
              type="text"
              name="languages"
              value={formData.languages}
              onChange={handleChange}
              placeholder="e.g., English, Urdu, Arabic"
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
        <ToastContainer />
      </Container>
    </Layout2>
  );
};

export default ReformerFriend;
