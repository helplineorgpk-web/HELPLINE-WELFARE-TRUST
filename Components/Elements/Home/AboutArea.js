import React from "react";
import Link from "next/link";
import { HelplineData } from "../../../pages/api/data";

export default function AboutArea() {
  const data = HelplineData.aboutSection;

  return (
    <section
      className="about_area"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 0',
        zIndex: 1,
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 15px',
        }}
      >
        <div
          className="row"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >

          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center mb-5">
            <div style={{ width: '100%' }}>
              <div className="row mb-4">
                <div className="col-12">
                  <Link href="/about" className="about_img w_img" style={{ display: 'block', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src="/img/causes/School-1-scaled.jpg"
                      alt="Education Services"
                      style={{
                        width: '100%',
                        height: '350px',
                        objectFit: 'cover',
                        borderRadius: '20px'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '20px',
                        right: '20px',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        padding: '5px',
                        borderRadius: '15px',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <i className="flaticon-doctor"></i>
                      <h6 style={{ color: "#65cabb", margin: 0 }}>Education Services</h6>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row">

                <div className="col-6 mb-4">
                  <Link href="/about" className="about_img w_img" style={{ display: 'block', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src="/img/causes/houseconstruction2.jpeg"
                      alt="Welfare Services"
                      style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        borderRadius: '20px'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '20px',
                        right: '20px',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        padding: '5px',
                        borderRadius: '15px',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <i className="flaticon-water-drop"></i>
                      <h6 style={{ color: "#fecd01", margin: 0 }}>Welfare Services</h6>
                    </div>
                  </Link>
                </div>

                <div className="col-6 mb-4">
                  <Link href="/about" className="about_img w_img" style={{ display: 'block', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src="/img/causes/cause11.jpg"
                      alt="Health Services"
                      style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        borderRadius: '20px'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '20px',
                        right: '20px',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        padding: '5px',
                        borderRadius: '15px',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <i className="flaticon-stethoscope"></i>
                      <h6 style={{ color: "#ffb974", margin: 0 }}>Health Services</h6>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <span
                style={{
                  display: 'inline-block',
                  color: '#65cabb',
                  fontSize: '1rem',
                  fontWeight: '700',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  padding: '10px 20px',
                  background: 'rgba(101, 202, 187, 0.1)',
                  borderRadius: '50px',
                  marginBottom: '20px',
                }}
              >
                <i className="fal fa-heart"></i> About Us
              </span>
              <h3
                style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #65cabb 0%, #4a90e2 50%, #65cabb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '25px',
                }}
              >
                Building Bridges of Compassion
              </h3>
              <p
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#555',
                  marginBottom: '30px',
                }}
              >
                Since 1992, Helpline has been dedicated to fostering a just and
                equitable society inspired by the timeless principle of
                Mawakhath-e-Madina. Guided by unity, compassion, and collective
                responsibility, we work tirelessly to uplift communities, ensure
                equal rights, and build a world where every individual is
                respected and valued.
              </p>
              <ul
                style={{
                  listStyleType: 'none',
                  padding: 0,
                  marginBottom: '20px',
                }}
              >
                <li style={{ marginBottom: '10px' }}>🌍 Global & Local Reach</li>
                <li style={{ marginBottom: '10px' }}>🤝 Service over revenue</li>
                <li style={{ marginBottom: '10px' }}>📜 Legal Registrations</li>
                <li style={{ marginBottom: '10px' }}>🕓 24/7 online support</li>
              </ul>
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(101, 202, 187, 0.1) 0%, rgba(255, 255, 255, 0.9) 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(101, 202, 187, 0.15)',
                  marginBottom: '30px',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#65cabb',
                    marginBottom: '10px',
                    letterSpacing: '1px',
                  }}
                >
                  PROPHET MUHAMMAD(ﷺ)
                </span>
                <h5
                  style={{
                    fontSize: '1.2rem',
                    fontStyle: 'italic',
                    color: '#333',
                    margin: 0,
                  }}
                >
                  "You gain no victory or livelihood except through the poor amongst you."
                </h5>
              </div>
              <Link
                href="/about"
                className="learn_more_btn"
                style={{
                  display: 'inline-block',
                  padding: '16px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#fff',
                  background: 'linear-gradient(135deg, #65cabb, #4a90e2)',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  boxShadow: '0 15px 30px rgba(74, 144, 226, 0.3)',
                }}
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
