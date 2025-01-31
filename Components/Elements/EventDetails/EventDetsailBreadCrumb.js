import React from "react";
import Link from "next/link";

export default function EventDetsailBreadCrumb({ desc }) {
  return (
    <section
      className="breadcrumb_area breadcrumb_overlay"
      style={{ backgroundImage: "url(/img/bg/breadcrumb_bg_4.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb_section">
              <ul className="breadcrumb-list volunteer_breadcrumb">
                <li className="bhas_border">
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="active">Events Details</span>
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
                  {desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
