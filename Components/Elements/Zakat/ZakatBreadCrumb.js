import React from "react";
import Link from "next/link";

export default function ZakatBreadCrumb() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: "url(/img/causes/RashanPackage.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.7) 100%)",
          zIndex: 1,
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row">
          <div className="col-xl-12">
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: 0,
                margin: "0 0 16px 0",
                fontSize: "16px",
              }}
            >
              <li>
                <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li style={{ color: "#ffffffaa" }}>/</li>
              <li style={{ color: "#ffae00" }}>Zakat Calculator</li>
            </ul>
            <h1
              style={{
                color: "#fff",
                fontSize: "clamp(40px, 6vw, 80px)",
                fontWeight: 700,
                margin: 0,
                lineHeight: 1.15,
                position: "relative",
                display: "inline-block",
                paddingBottom: "16px",
              }}
            >
              Zakat Calculator
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "80px",
                  height: "4px",
                  background: "#ffae00",
                  borderRadius: "2px",
                }}
              />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
