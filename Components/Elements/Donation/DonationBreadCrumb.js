import React from "react";
import Link from "next/link";

export default function DonationBreadCrumb() {
  return (
    <section
      className="breadcrumb_area"
      style={{
        backgroundImage: "url(/img/causes/donatenow.png) object-fit: cover",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "500px",
        padding: "80px 0",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        boxShadow: "inset 0 0 60px rgba(0,0,0,0.6)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb_section">
              <ul className="breadcrumb-list volunteer_breadcrumb">
                <li className="bhas_border">
                  <Link href="/" className="text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="active">Donation</span>
                </li>
              </ul>
              <div className="breadcrumb_title">
                <h2>Make Donation</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
