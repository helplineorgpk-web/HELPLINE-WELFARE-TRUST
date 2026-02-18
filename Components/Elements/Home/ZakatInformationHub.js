import React from "react";
import Link from "next/link";

export default function ZakatInformationHub() {
  return (
    <section
      className="zakat_information_hub"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "80px 0",
        zIndex: 1,
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 15px",
        }}
      >
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div className="col-12">
            <span
              style={{
                display: "inline-block",
                color: "#65cabb",
                fontSize: "1rem",
                fontWeight: "700",
                letterSpacing: "3px",
                textTransform: "uppercase",
                padding: "10px 20px",
                background: "rgba(101, 202, 187, 0.1)",
                borderRadius: "50px",
                marginBottom: "20px",
              }}
            >
              <i className="fal fa-hand-holding-heart"></i> Zakat
            </span>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                background:
                  "linear-gradient(135deg, #65cabb 0%, #4a90e2 50%, #65cabb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "25px",
              }}
            >
              Zakat Information Hub
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#555",
                maxWidth: "700px",
                margin: "0 auto 30px",
              }}
            >
              Learn about Zakat, its calculation, and how your Zakat can support
              education, healthcare, and welfare through Helpline.
            </p>
            <Link
              href="/zakat"
              className="g_btn hbtn_1 to_right1 rad-30 nav-donate-btn"
            >
              Learn More<span></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
