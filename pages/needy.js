import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import Layout2 from "../Components/Layout/Layout2";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NeedySupport = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    address: "",
    supportType: "",
    medicalCondition: "",
    description: "",
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
      contact,
      email,
      address,
      supportType,
      medicalCondition,
      description,
    } = formData;

    const finalMessage = `
    🆘 Needy Support / Medical Assistance Request 🆘
  
    👤 Full Name: ${fullName}
    📞 Contact: ${contact}
    📧 Email: ${email}
    📍 Address: ${address}
    🛠️ Type of Support Needed: ${supportType}
    🩺 Medical Condition: ${medicalCondition || "N/A"}
    📝 Description of Need:
    ${description}
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
          toast.success("Your request has been submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
          });

          setFormData({
            fullName: "",
            contact: "",
            email: "",
            address: "",
            supportType: "",
            medicalCondition: "",
            description: "",
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
        <h4 className="text-center mb-4">Needy Support / Medical Assistance</h4>
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

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Type of Support Needed</Form.Label>
            <Form.Select
              name="supportType"
              value={formData.supportType}
              onChange={handleChange}
              required
            >
              <option value="">Select Support Type</option>
              <option value="medical">Medical</option>
              <option value="financial">Financial</option>
              <option value="both">Both Medical and Financial</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Medical Condition (if applicable)</Form.Label>
            <Form.Control
              type="text"
              name="medicalCondition"
              value={formData.medicalCondition}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description of Need</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="header-right d-flex align-items-center justify-content-center">
            <div className="header-sing d-inline-block">
              <button type="submit" className="g_btn hbtn_1 to_right1 rad-30">
                Submit Request<span></span>
              </button>
            </div>
          </div>
        </Form>
        <ToastContainer />
      </Container>
    </Layout2>
  );
};

export default NeedySupport;
