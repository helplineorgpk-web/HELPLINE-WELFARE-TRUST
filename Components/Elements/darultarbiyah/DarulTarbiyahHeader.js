import React from "react";
import Link from "next/link";

export default function DarulTarbiyahHeader() {
  return (
    <section
      className="breadcrumb_area breadcrumb_overlay"
      style={{ background: "url(/img/muwakhat/mawakhat-e-madina.png)" }}
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
                  <span className="active">Darul Tarbiyah</span>
                </li>
              </ul>
              <div className="breadcrumb_title">
                <h2>Muwakhat-e-Madina</h2>
                <p style={{ fontSize: "1.1rem", color: "#FC4C31" }}>
                  Help The Needy: A Commitment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
