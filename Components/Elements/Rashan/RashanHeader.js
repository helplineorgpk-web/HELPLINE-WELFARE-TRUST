import React from "react";
import Link from "next/link";

export default function RashanHeader({ background, Detail, datainfo }) {
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
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span className="active">{Detail}</span>
                </li>
              </ul>
              <div className="breadcrumb_title">
                <h2>{datainfo}</h2>
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
                جس نے بھوکے کو کھانا کھلایا یہاں تک کہ وہ سیر ہو گیا، اللہ پاک
                اسے اپنے عرش کے سائے میں جگہ عطا فرمائے گا۔
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
                Makaram ul Ikhlaq Tibrani (page 373) Hadees (164)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
