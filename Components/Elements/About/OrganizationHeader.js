import React from "react";
import Link from "next/link";

export default function OrganizationHeader({ content }) {
  return (
    <section
      className="breadcrumb_area breadcrumb_overlay"
      style={{
        backgroundImage: "url(/img/causes/ORAGIZATION.png)",

      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb_section">
              <ul
                className="breadcrumb-list volunteer_breadcrumb"
                style={{ paddingTop: "45px" }}
              >
                <li className="bhas_border">
                  <Link href="/" className="text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="active">Organization</span>
                </li>
              </ul>
              <div className="breadcrumb_title">
                <h2 style={{ color: "white", fontSize: "45px" }}>
                  {content ? content : "Our Organization And Team"}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
