import React from "react";

export default function MissionSupport() {
  return (
    <div className="support_area gray-bg pt-115 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-12 col-sm-12">
            <div className="section_title mb-55">
              <span className="sub_title">
                <i className="fal fa-heart"></i>Why Choose Us
              </span>
              <h3 className="title">The perfect help</h3>
            </div>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                <div className="choose_single_card theme-2 p-rel mb-30">
                  <div className="choose_abs theme-2">
                    <i className="flaticon-map"></i>
                  </div>
                  <span className="card_number">01</span>
                  <div className="choose_card_content">
                    <h5 className="choose_card_title">Impactful Support</h5>
                    <p>
                      We ensure your contributions directly improve lives with
                      essentials like food, shelter, healthcare, and education.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                <div className="choose_single_card theme-3 p-rel mb-30">
                  <div className="choose_abs theme-3">
                    <i className="flaticon-user"></i>
                  </div>
                  <span className="card_number clr-theme-3">02</span>
                  <div className="choose_card_content">
                    <h5 className="choose_card_title">
                      Transparency & Accountability
                    </h5>
                    <p>
                      We provide clear updates, showing how your donations make
                      a difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-12 col-sm-12 d-flex align-items-center text-center">
            <div
              className="single-support p-rel ml-50 mb-30"
              style={{ background: "url(/img/bg/support_bg.jpg)" }}
            >
              <form action="#">
                <div className="support-wrapper p-rel">
                  <h4 className="support_title">Sponsor a Family</h4>
                  <p className="mb-35 opacity_6">
                    Helpline NGO supports families in need by providing
                    essentials like food, shelter, healthcare, and education.
                    Your sponsorship helps them become self-sufficient through
                    access to vital resources. Connect with the family you
                    sponsor and see the impact of your support. Sponsor today
                    and change a life.
                  </p>
                  <div className="donar_section support_currency d-sm-flex d-inline-block justify-content-center">
                    <a
                      type="submit"
                      href="/donation"
                      className="g_btn curr_btn rad-30 ml-10"
                    >
                      Donate<span></span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
