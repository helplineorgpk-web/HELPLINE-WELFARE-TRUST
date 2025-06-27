import React from "react";
import Link from "next/link";

export default function DonationBreadCrumb() {
  return (
    <section
      className="breadcrumb_area breadcrumb_overlay"
      style={{
        background: "url(/img/causes/donatenow.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "500px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb_section">
              <ul className="breadcrumb-list volunteer_breadcrumb">
                <li className="bhas_border">
                  <Link href="/" className="text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="active">Policies</span>
                </li>
              </ul>
              <div className="breadcrumb_title">
                <h2>Our Policies</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
