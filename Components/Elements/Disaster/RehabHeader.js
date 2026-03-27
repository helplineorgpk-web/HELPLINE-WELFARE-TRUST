import React from "react";
import Link from "next/link";

export default function RehabHeader() {
  return (
    <section
      className="breadcrumb_area breadcrumb_overlay"
      style={{ backgroundImage: "url(/img/causes/disasterbg.jpg)" }}
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
                  <span className="active">Rehabilitation</span>
                </li>
              </ul>
              <div className="breadcrumb_title">
                <h3 style={{ color: "white" }}>From Emergency Response to Rebuilding Lives</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
