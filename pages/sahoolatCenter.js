import React from "react";
import Layout1 from "../Components/Layout/Layout1";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaHandHoldingHeart,
  FaGraduationCap,
  FaHandHoldingMedical,
  FaHandsHelping,
  FaHeart,
  FaUsers,
  FaBookOpen,
  FaAmbulance,
} from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "../public/css/SahoolatCenter.module.css";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SahoolatCenter = () => {
  const services = [
    {
      title: "Basic Necessities",
      description:
        "Providing essential items including food, clothing, and basic household items to families in need.",
      icon: <FaHandHoldingHeart size={40} />,
      color: "#FF6B6B",
    },
    {
      title: "Medical Assistance",
      description:
        "Supporting healthcare needs through medical camps, medicine distribution, and health awareness programs.",
      icon: <FaHandHoldingMedical size={40} />,
      color: "#4ECDC4",
    },
    {
      title: "Education Support",
      description:
        "Offering educational assistance through scholarships, books, and learning materials.",
      icon: <FaGraduationCap size={40} />,
      color: "#45B7D1",
    },
    {
      title: "Emergency Relief",
      description:
        "Immediate assistance during crisis situations and natural disasters.",
      icon: <FaHandsHelping size={40} />,
      color: "#FFA07A",
    },
  ];

  const stats = [
    { value: "5,000+", label: "Families Helped", icon: <FaHeart /> },
    { value: "200+", label: "Volunteers", icon: <FaUsers /> },
    { value: "1,200+", label: "Students Supported", icon: <FaBookOpen /> },
    { value: "50+", label: "Emergency Responses", icon: <FaAmbulance /> },
  ];

  return (
    <Layout1>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "linear-gradient(135deg, #FC4C31 0%, #FF8C66 100%)",
          minHeight: "100vh",
          marginTop: "0",
          paddingTop: "8%",
          position: "relative",
          overflow: "hidden",
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
          marginBottom: "-5%",
          zIndex: 1,
        }}
      >
        {/* Animated floating shapes */}
        <div className={styles.floatingShapes}>
          <div className={styles.circle}></div>
          <div className={styles.triangle}></div>
          <div className={styles.square}></div>
        </div>

        {/* Decorative elements */}
        <div className={styles.heroParticles}></div>
        <div className={styles.heroGlow}></div>

        <Container
          className="position-relative"
          style={{ zIndex: 3, height: "100%" }}
        >
          <Row
            className="align-items-center"
            style={{ minHeight: "100vh", paddingTop: { xs: "120px", md: "80px" } }}
          >
            <Col lg={6} className="text-white pe-lg-5">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{ maxWidth: "600px" }}
              >
                {/* Tagline badge */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className={`mb-4 ${styles.taglineBadge}`}
                >
                  <span>Compassion in Action</span>
                </motion.div>

                <h1
                  className="display-3 fw-bold mb-4"
                  style={{ lineHeight: 1.2 }}
                >
                  <span className={styles.gradientText}>Sahoolat</span> Center
                </h1>

                {/* Animated typing effect for subtitle */}
                <motion.p
                  className={`lead mb-5 ${styles.heroSubtitle}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Empowering communities through comprehensive support and
                  resources, ensuring dignity and hope for all.
                </motion.p>

                {/* CTA Buttons with animation */}
                <motion.div
                  className="d-flex flex-column flex-sm-row gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.ctaButtonWrapper}
                  >
                    <Button
                      variant="light"
                      size="lg"
                      className={`fw-bold ${styles.ctaButtonPrimary}`}
                    >
                      Get Support
                      <span className={styles.buttonIcon}>→</span>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.ctaButtonWrapper}
                  >
                    <Button
                      variant="outline-light"
                      size="lg"
                      className={`fw-bold ${styles.ctaButtonSecondary}`}
                    >
                      Learn More
                      <span className={styles.buttonIcon}>↓</span>
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div
                  className={`mt-5 ${styles.trustIndicators}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div className="d-flex align-items-center gap-3">
                  
                    <div>
                      <div className={styles.trustText}>
                        Trusted by 5,000+ families
                      </div>
                      <div className={styles.trustRating}>
                        <span className="text-warning">★★★★★</span> 4.9/5
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className={`text-center ${styles.heroImageContainer}`}
              >
                <img
                  src="/img/muwakhat/SAHOLATCENTER.png"
                  alt="Sahoolat Center"
                  className={`img-fluid ${styles.heroImage}`}
                />
                {/* Decorative frame around image */}
                <div className={styles.imageFrame}></div>
                {/* Floating badges around image */}
                <div className={`${styles.imageBadge} ${styles.badge1}`}>
                  <FaHandHoldingHeart /> 1,200+ Helped
                </div>
                <div className={`${styles.imageBadge} ${styles.badge2}`}>
                  <FaUsers /> 200 Volunteers
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      {/* Mission Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-5 py-md-6"
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8} className="text-center">
              <motion.div variants={itemVariants}>
                <h6 className={`text-uppercase mb-3 ${styles.sectionSubtitle}`}>
                  Our Purpose
                </h6>
                <h2 className={`display-5 fw-bold mb-4 ${styles.sectionTitle}`}>
                  <span className={styles.underline}>Our Mission</span>
                </h2>
                <p className="lead mb-0" style={{ lineHeight: 1.7 }}>
                  The Sahoolat Center is dedicated to providing comprehensive
                  support and resources to those in need, ensuring dignity and
                  respect while fostering community well-being and
                  self-sufficiency.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Stats Section */}
      <section className={`py-4 py-md-5 ${styles.statsSection}`}>
        <Container>
          <Row className="g-3 g-md-4">
            {stats.map((stat, index) => (
              <Col md={3} sm={6} key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className={`text-center p-4 ${styles.statCard}`}
                >
                  <div className={`mb-3 ${styles.statIcon}`}>{stat.icon}</div>
                  <h3 className={`fw-bold mb-2 ${styles.statValue}`}>
                    {stat.value}
                  </h3>
                  <p className={`mb-0 ${styles.statLabel}`}>{stat.label}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className={`py-4 py-md-6 ${styles.servicesSection}`}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col md={10} lg={8} className="text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <h6 className={`text-uppercase mb-3 ${styles.sectionSubtitle}`}>
                  What We Offer
                </h6>
                <h2 className={`display-5 fw-bold mb-4 ${styles.sectionTitle}`}>
                  <span className={styles.underline}>Our Services</span>
                </h2>
              </motion.div>
            </Col>
          </Row>
          <Row className="g-4">
            {services.map((service, index) => (
              <Col lg={3} md={6} key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className={`h-100 border-0 ${styles.serviceCard}`}>
                    <Card.Body className="text-center p-4">
                      <div
                        className={`mb-4 ${styles.serviceIcon}`}
                        style={{
                          backgroundColor: `${service.color}20`,
                          color: service.color,
                        }}
                      >
                        {service.icon}
                      </div>
                      <Card.Title className={`mb-3 ${styles.serviceTitle}`}>
                        {service.title}
                      </Card.Title>
                      <Card.Text className={styles.serviceText}>
                        {service.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Impact Section */}
      <section className={`py-4 py-md-6 ${styles.impactSection}`}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h6 className={`text-uppercase mb-3 ${styles.sectionSubtitle}`}>
                  Making a Difference
                </h6>
                <h2 className={`display-5 fw-bold mb-4 ${styles.sectionTitle}`}>
                  <span className={styles.underline}>Our Impact</span>
                </h2>
                <p className="mb-4">
                  Through our dedicated efforts and the support of our
                  community, we have made significant progress:
                </p>
                <ul className={styles.impactList}>
                  <li>
                    <span className={styles.impactIcon}>✓</span>
                    Assisted thousands of families with basic necessities
                  </li>
                  <li>
                    <span className={styles.impactIcon}>✓</span>
                    Provided medical support to countless individuals
                  </li>
                  <li>
                    <span className={styles.impactIcon}>✓</span>
                    Supported education for underprivileged students
                  </li>
                  <li>
                    <span className={styles.impactIcon}>✓</span>
                    Responded to numerous emergency situations
                  </li>
                </ul>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className={styles.involvementCard}
              >
                <div className="p-5">
                  <h3 className="mb-4 fw-bold">Get Involved</h3>
                  <p className="mb-4">
                    Join us in our mission to serve the community. There are
                    many ways to contribute and make a difference:
                  </p>
                  <ul className={`mb-4 ${styles.involvementList}`}>
                    <li>Volunteer your time and skills</li>
                    <li>Donate resources to support our programs</li>
                    <li>Spread awareness about our initiatives</li>
                    <li>Partner with us for greater impact</li>
                  </ul>
                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="primary"
                        size="lg"
                        className={`fw-bold ${styles.actionButton}`}
                      >
                        Contact Us
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline-primary"
                        size="lg"
                        className={`fw-bold ${styles.actionButtonOutline}`}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section className={`py-4 py-md-6 ${styles.testimonialSection}`}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col md={10} lg={8} className="text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <h6 className={`text-uppercase mb-3 ${styles.sectionSubtitle}`}>
                  Community Voices
                </h6>
                <h2 className={`display-5 fw-bold mb-4 ${styles.sectionTitle}`}>
                  <span className={styles.underline}>Success Stories</span>
                </h2>
              </motion.div>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.testimonialCard}
              >
                <div className={styles.testimonialContent}>
                  <div className={styles.testimonialQuote}>"</div>
                  <p className={styles.testimonialText}>
                    The Sahoolat Center provided my family with essential food
                    supplies when we needed it most. Their kindness gave us hope
                    during difficult times.
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAuthorName}>
                      Amina Khan
                    </div>
                    <div className={styles.testimonialAuthorRole}>
                      Beneficiary
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className={styles.testimonialCard}
              >
                <div className={styles.testimonialContent}>
                  <div className={styles.testimonialQuote}>"</div>
                  <p className={styles.testimonialText}>
                    Volunteering with Sahoolat Center has been one of the most
                    rewarding experiences of my life. The team is dedicated and
                    the impact is real.
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAuthorName}>
                      Rahim Ahmed
                    </div>
                    <div className={styles.testimonialAuthorRole}>
                      Volunteer
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className={styles.testimonialCard}
              >
                <div className={styles.testimonialContent}>
                  <div className={styles.testimonialQuote}>"</div>
                  <p className={styles.testimonialText}>
                    Thanks to their educational support program, my daughter can
                    continue her studies. We're forever grateful for this
                    opportunity.
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAuthorName}>
                      Fatima Begum
                    </div>
                    <div className={styles.testimonialAuthorRole}>Parent</div>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout1>
  );
};

export default SahoolatCenter;
