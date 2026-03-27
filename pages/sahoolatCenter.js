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
        "A place where people can access help, guidance, and essential support in a structured and respectful way, covering food, clothing, and household essentials.",
      icon: <FaHandHoldingHeart size={40} />,
      color: "#FF6B6B",
    },
    {
      title: "Medical Assistance",
      description:
        "Connecting families with healthcare support, medicine access, and organized medical help when professional care is needed most.",
      icon: <FaHandHoldingMedical size={40} />,
      color: "#4ECDC4",
    },
    {
      title: "Education Support",
      description:
        "Helping children continue their education through resource connection, guidance, and essential learning support for deserving families.",
      icon: <FaGraduationCap size={40} />,
      color: "#45B7D1",
    },
    {
      title: "Emergency Relief",
      description:
        "Organized and compassionate support during crisis situations, ensuring people receive timely assistance with dignity and care.",
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

                <motion.p
                  className={`lead mb-5 ${styles.heroSubtitle}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  One of the clearest examples of organized community support, where people can access help, guidance, and essential support in a structured and respectful way.
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
                  The Sahoolat Center brings together support, guidance, resource connection, and service delivery under one values-based umbrella. It is where compassion becomes organized action, ensuring people feel seen and families feel supported.
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
                  The impact of this work is often relational as well as practical. People feel seen. Families feel supported. Communities experience service that is organized and compassionate rather than distant and impersonal.
                </p>
                <ul className={styles.impactList}>
                  <li>
                    <span className={styles.impactIcon}>✓</span>
                    5,000+ families helped with essential support and guidance
                  </li>
                  <li>
                    <span className={styles.impactIcon}>✓</span>
                    1,200+ students supported through education assistance
                  </li>
                  <li>
                    <span className={styles.impactIcon}>✓</span>
                    200+ volunteers serving their communities with care
                  </li>
                  <li>
                    <span className={styles.impactIcon}>✓</span>
                    50+ emergency responses delivered with urgency and dignity
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
                    Support can help sustain community-facing service spaces, improve support systems, connect families with the help they need, and strengthen programs built around dignity and brotherhood.
                  </p>
                  <ul className={`mb-4 ${styles.involvementList}`}>
                    <li>Volunteer your time and skills for community service</li>
                    <li>Donate resources to strengthen support programs</li>
                    <li>Help connect families with guidance and assistance</li>
                    <li>Partner with Helpline for lasting community impact</li>
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
