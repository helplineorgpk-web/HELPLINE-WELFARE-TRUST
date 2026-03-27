import React from "react";
import Link from "next/link";

export default function FloodReliefHeader() {
  return (
    <section
      className="breadcrumb_area breadcrumb_overlay"
      style={{
        background: `url(/img/Campaigns/Flood.jpg) no-repeat center center/cover`,
      }}
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
                  <span className="active">Flood Relief</span>
                </li>
              </ul>
              <div className="breadcrumb_title">
                <h2>Disaster Relief & Rehabilitation</h2>
              </div>
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "arabic",
                  fontSize: "28px",
                  color: "#65cabb",
                  fontWeight: "bold",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                اور اللہ کی راہ میں خرچ کرو اور اپنے ہاتھوں کو ہلاکت میں نہ ڈالو اور احسان کرو، بیشک اللہ احسان کرنے والوں سے محبت کرتا ہے۔
              </p>
              <p
                style={{
                  fontSize: "12px",
                  backgroundColor: "#fff",
                  width: "315px",
                  borderRadius: "10px",
                  padding: "10px",
                  margin: "20px auto",
                }}
              >
                Quran 2:195 - "And spend in the way of Allah and do not throw yourselves into destruction. And do good; indeed, Allah loves the doers of good."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
