import React from "react";
import Link from "next/link";

export default function MissionIconBox() {
  const iconBoxStyle = {
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
    boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
    margin: "15px",
    maxWidth: "250px",
  };

  const iconStyle = {
    fontSize: "40px",
    color: "#007bff",
    marginBottom: "10px",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "5px",
  };

  const paragraphStyle = {
    fontSize: "14px",
    color: "#555",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "40px 10px",
    backgroundColor: "#ffffff",
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div style={containerStyle}>
      <div
        style={iconBoxStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Link href="/cause">
          <div>
            <i className="flaticon-graduation-cap" style={iconStyle}></i>
            <h5 style={titleStyle}>Family & Education</h5>
            <p style={paragraphStyle}>
              Empowering families and children with access to quality education,
              mentorship, and career guidance.
            </p>
          </div>
        </Link>
      </div>

      <div
        style={iconBoxStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Link href="/cause">
          <div>
            <i className="flaticon-care" style={iconStyle}></i>
            <h5 style={titleStyle}>Charity & Causes</h5>
            <p style={paragraphStyle}>
              Supporting underprivileged communities through food drives,
              medical aid, and essential resources.
            </p>
          </div>
        </Link>
      </div>

      <div
        style={iconBoxStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Link href="/contact">
          <div>
            <i className="flaticon-creativity" style={iconStyle}></i>
            <h5 style={titleStyle}>Conference & Ideas</h5>
            <p style={paragraphStyle}>
              Organizing global summits, workshops, and networking events to
              foster innovation and community impact.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
