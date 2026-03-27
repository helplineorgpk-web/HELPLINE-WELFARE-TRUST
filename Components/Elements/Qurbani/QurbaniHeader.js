import React from "react";
import Link from "next/link";

export default function QurbaniHeader() {
  return (
    //breadcrumb area start
    <section
      className="breadcrumb_area breadcrumb_overlay"
      style={{ backgroundImage: "url(/img/Campaigns/HaveaBlessedEid.png)" }}
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
                  <span className="active">Qurbani</span>
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
                  Qurbani Distribution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //breadcrumb area end
  );
}
