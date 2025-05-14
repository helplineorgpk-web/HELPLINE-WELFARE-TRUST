import React from "react";
import Link from "next/link";

export default function EducationHeader() {
  return (
    <section
      className="breadcrumb_area breadcrumb_overlay"
      style={{ backgroundImage: "url(/img/causes/School-1-scaled.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb_section">
              <ul className="breadcrumb-list volunteer_breadcrumb">
                <li className="bhas_border">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="active">Education Details</span>
                </li>
              </ul>
              <div>
                <h2
                  style={{
                    color: "white",
                  }}
                >
                  Al-Kitab Education System
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
