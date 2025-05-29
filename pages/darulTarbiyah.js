import React from "react";
import Layout1 from "../Components/Layout/Layout1";
import DarulTarbiyahHeader from "../Components/Elements/darultarbiyah/DarulTarbiyahHeader";

export default function DarulTarbiyah() {
  return (
    <Layout1>
      <div style={{ marginTop: "240px" }}>
        <DarulTarbiyahHeader />
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
              Our Educational Initiative
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
                Dar ul Tarbiyah is our dedicated educational initiative aimed at
                providing quality education to underprivileged children. We believe
                that education is the most powerful tool for breaking the cycle of
                poverty and creating lasting positive change in our communities.
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
                  Our Programs Include:
                </h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "Primary Education Support",
                    "After-School Tutoring",
                    "Skills Development Workshops",
                    "Character Building Sessions",
                    "Parent-Teacher Engagement",
                    "Educational Resources Distribution",
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
                  "Education is not just about going to school and getting a degree.
                  It's about widening your knowledge and absorbing the truth about
                  life."
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
