import React from "react";
import Link from "next/link";

export default function HistoryHeader() {
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
                  <Link href="/">Cause Details</Link>
                </li>
                <li>
                  <span className="active">Our History</span>
                </li>
              </ul>
              <div>
                <p
                  style={{
                    fontSize: "40px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  History
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
