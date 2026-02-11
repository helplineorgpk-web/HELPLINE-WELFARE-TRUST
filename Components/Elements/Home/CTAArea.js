import React from "react";
import Link from "next/link";

export default function CTAArea() {
  return (
    <section
      style={styles.ctaArea}
      className="cta_area cta-bg text-white pt-90 pb-60 lin"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 text-center">
            <div className="section_title_2 mb-30">
              <span className="sub_title_2">Make Donation</span>
              <h3 className="section_title_2 mb-0">Become a Donar</h3>
            </div>
          </div>
          <div className="col-12">
            <div className="donar_section d-lg-flex justify-content-center text-center">
              <div className="donar_form d-inline-block mb-30">
                <input
                  type="text"
                  placeholder="Your name"
                  className="donar_input mr-15"
                />
                <input
                  type="text"
                  placeholder="Enter email"
                  className="donar_input mr-15"
                />
              </div>
              <div className="donar_currency d-inline-block mb-30">
                <button className="currency mr-15">50</button>
                <button className="currency mr-15">100</button>
                <button className="currency custom_padd mr-15">Custom</button>
              </div>
              <div className="donnar_button text-center">
                <Link href="/donation" className="g_btn hbtn_1 to_right1 rad-30 nav-donate-btn p-60 mb-30">
                  Make a Donation<span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const styles = {
  ctaArea: {
    background: "linear-gradient(135deg, #4ca1af, #304158)",
  },
};
