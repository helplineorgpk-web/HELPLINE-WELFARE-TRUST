"use client";

import { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import Layout2 from "../Components/Layout/Layout2";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";

const EducationForm = () => {
  const [selectedEducation, setSelectedEducation] = useState({
    school: false,
    college: false,
    university: false,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    city: "",
    country: "",
    currentGrade: "",
    instituteName: "",
    program: "",
    semester: "",
    financialNeed: "",
    familyIncome: "",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleCheckboxChange = (type) => {
    setSelectedEducation({
      school: false,
      college: false,
      university: false,
      [type]: !selectedEducation[type],
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    console.log({ selectedEducation, formData });
    setSubmitted(true);
  };

  const EducationTypeCard = ({ type, label, icon }) => (
    <Card
      onClick={() => handleCheckboxChange(type)}
      className={`text-center p-4 mb-3 cursor-pointer ${
        selectedEducation[type] ? "border-primary bg-light" : ""
      }`}
      style={{ height: "180px" }}
    >
      <div className="d-flex flex-column align-items-center">
        <div className="mb-2" style={{ fontSize: "2rem" }}>
          {icon}
        </div>
        <h5>{label}</h5>
        <Form.Check
          type="checkbox"
          checked={selectedEducation[type]}
          onChange={() => handleCheckboxChange(type)}
          className="mt-2"
          readOnly
        />
      </div>
    </Card>
  );

  return (
    <Layout2>
      <Container className="py-5" style={{ maxWidth: "1200px" }}>
        {submitted ? (
          <Card className="shadow">
            <Card.Body className="text-center p-5">
              <h2 className="mb-3">Application Submitted Successfully!</h2>
              <p className="text-muted mb-4">
                Thank you for your application. We've received your information
                and will review it shortly.
              </p>
              <Alert variant="info">
                <strong>Reference ID:</strong> EDU-
                {Math.random().toString(36).substring(2, 10).toUpperCase()}
              </Alert>
              <Button
                variant="outline-primary"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    age: "",
                    currentGrade: "",
                    instituteName: "",
                    program: "",
                    semester: "",
                    financialNeed: "",
                    familyIncome: "",
                    reason: "",
                  });
                  setSelectedEducation({
                    school: false,
                    college: false,
                    university: false,
                  });
                }}
              >
                Submit Another Application
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <Card className="shadow">
            <Card.Header className="bg-white">
              <h2 className="text-center mb-0 py-3">
                Education Scholarship Program
              </h2>
            </Card.Header>
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h5 className="mb-4 text-center">
                  Select your current education level
                </h5>
                <Row className="mb-4">
                  <Col md={4}>
                    <EducationTypeCard
                      type="school"
                      label="School - Scholership"
                      icon={<FaSchool />}
                    />
                  </Col>
                  <Col md={4}>
                    <EducationTypeCard
                      type="college"
                      label="College - Scholership"
                      icon={<FaGraduationCap />}
                    />
                  </Col>
                  <Col md={4}>
                    <EducationTypeCard
                      type="university"
                      label="University - Scholership"
                      icon={<FaUniversity />}
                    />
                  </Col>
                </Row>

                <h5 className="mb-4">Personal Information</h5>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your full name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        min="5"
                        max="60"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid age (5-60).
                      </Form.Control.Feedback>
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
                        onChange={handleInputChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your city.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your country.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <h5 className="mb-4">Education Details</h5>
                <Row>
                  {selectedEducation.school && (
                    <>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Current Grade</Form.Label>
                          <Form.Control
                            type="text"
                            name="currentGrade"
                            value={formData.currentGrade}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>School Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="instituteName"
                            value={formData.instituteName}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </>
                  )}

                  {(selectedEducation.college ||
                    selectedEducation.university) && (
                    <>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            {selectedEducation.college
                              ? "Program/Course"
                              : "Program/Degree"}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="program"
                            value={formData.program}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            {selectedEducation.college
                              ? "College Name"
                              : "University Name"}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="instituteName"
                            value={formData.instituteName}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      {selectedEducation.university && (
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Current Semester</Form.Label>
                            <Form.Control
                              type="text"
                              name="semester"
                              value={formData.semester}
                              onChange={handleInputChange}
                              required
                            />
                          </Form.Group>
                        </Col>
                      )}
                    </>
                  )}
                </Row>

                <h5 className="mb-4">Financial Information</h5>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Monthly Family Income </Form.Label>
                      <Form.Control
                        type="number"
                        name="familyIncome"
                        value={formData.familyIncome}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Financial Need Amount </Form.Label>
                      <Form.Control
                        type="number"
                        name="financialNeed"
                        value={formData.financialNeed}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Reason for Financial Support</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <div className="text-center mt-4">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={
                      !Object.values(selectedEducation).some((val) => val)
                    }
                  >
                    Submit Application
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        )}
      </Container>
    </Layout2>
  );
};

export default EducationForm;
