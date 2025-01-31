import React from "react";
import Link from "next/link";

export default function Header({ background, Detail, datainfo }) {
  return (
    <section
      className="breadcrumb_area breadcrumb_overlay"
      style={{
        background: `url(${background}) no-repeat center center/cover`,
      }}
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
                  <span className="active">{Detail}</span>
                </li>
              </ul>
              <div className="breadcrumb_title">
                <h2>{datainfo}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
