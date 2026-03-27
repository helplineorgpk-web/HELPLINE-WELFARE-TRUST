import React from "react";

export default function VideoSection() {
  return (
    <section style={{ background: "#f9f9f9", padding: "60px 0" }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1 1 400px" }}>
          <h2
            style={{ fontSize: "2rem", color: "#2c3e50", marginBottom: "20px" }}
          >
            Muwakhat-e-Madina
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
            Muwakhat-e-Madina is more than a program title. It is a guiding idea that shapes how Helpline understands service, community, and responsibility. At its heart is the belief that people should not be left alone in hardship, and that stronger members of the community have a duty to support those who are struggling. Helpline&apos;s broader welfare philosophy is built on this spirit of brotherhood, trust, and shared care.
          </p>

          <div style={{ marginTop: "30px" }}>
            <h4 style={{ marginBottom: "10px", color: "#2c3e50" }}>
              Key Pillars
            </h4>
            <ul
              style={{ paddingLeft: "20px", color: "#444", fontSize: "1rem" }}
            >
              <li>Brotherhood</li>
              <li>Sacrifice</li>
              <li>Tolerance</li>
              <li>Patience</li>
              <li>Gratitude</li>
              <li>Trust</li>
            </ul>
          </div>
        </div>

        <div style={{ flex: "1 1 500px", textAlign: "center" }}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/1d4tp4am58A"
            title="An Interview with Mian Akhlaq ur Rehman"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: "8px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
