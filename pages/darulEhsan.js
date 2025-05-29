import React from "react";
import Layout1 from "../Components/Layout/Layout1";
import DarulEhsanHeader from "../Components/Elements/darulehsan/DarulEhsanHeader";

export default function DarulEhsan() {
  return (
    <Layout1>
      <div style={{ marginTop: "240px" }}>
        <DarulEhsanHeader />
      <section style={{ background: "#f9f9f9", padding: "60px 0" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "2rem",
                color: "#2c3e50",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              Serving Humanity with Compassion
            </h2>
            <div
              style={{
                display: "grid",
                gap: "40px",
                fontSize: "1.1rem",
                lineHeight: "1.6",
                color: "#555",
              }}
            >
              <p>
                Dar ul Ehsan represents our commitment to serving humanity through
                various welfare initiatives. We believe in creating a positive
                impact in the lives of those who need it most, fostering hope and
                dignity through our programs.
              </p>

              <div
                style={{
                  background: "white",
                  padding: "30px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                <h3
                  style={{
                    color: "#2c3e50",
                    marginBottom: "20px",
                    fontSize: "1.5rem",
                  }}
                >
                  Our Key Initiatives:
                </h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "Food Distribution Programs",
                    "Healthcare Support Services",
                    "Emergency Relief Operations",
                    "Widow Support Program",
                    "Clean Water Projects",
                    "Community Development",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        padding: "10px 0",
                        borderBottom: "1px solid #eee",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span
                        style={{
                          color: "#FC4C31",
                          fontWeight: "bold",
                        }}
                      >
                        ●
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <p style={{ fontStyle: "italic", color: "#666" }}>
                  "The best among you are those who bring greatest benefits to
                  others."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout1>
  );
}
