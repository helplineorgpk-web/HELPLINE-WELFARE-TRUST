import React from "react";
import Link from "next/link";

export default function Footer2() {
  return (
    <footer>
      <div className="footer_top_area footer_top_2">
        <div className="footer_top_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-7 col-sm-7">
                <div className="footer_widget footer_about mb-50">
                  <div className="footer_logo ">
                    <Link href="/" className="animation">
                      <img src="/img/logo/logo.png" alt="img" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-5 col-sm-5">
                <div className="footer_widget mb-50 pl_15">
                  <div className="footer_widget_title mb-25">
                    <h4 className="footer_title footer_title_2">
                      Useful links
                    </h4>
                  </div>
                  <div className="footer_links footer_links_2">
                    <ul>
                      <li>
                        <Link href="/videos" className="text-white">
                          Media
                        </Link>
                      </li>
                      <li>
                        <Link href="/volunteer" className="text-white">
                          Volunteer
                        </Link>
                      </li>
                      <li>
                        <Link href="/mission" className="text-white">
                          Mission
                        </Link>
                      </li>
                      <li>
                        <Link href="/edu" className="text-white">
                          Education
                        </Link>
                      </li>
                      <li>
                        <Link href="/health" className="text-white">
                          Health
                        </Link>
                      </li>
                      <li>
                        <Link href="/qurbani" className="text-white">
                          Qurbani Program
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-7 col-sm-7">
                <div className="footer_widget mb-50 pl_25">
                  <div className="footer_widget_title mb-25">
                    <h4 className="footer_title footer_title_2">Donations</h4>
                  </div>
                  <div className="footer_links footer_links_2">
                    <ul>
                      <li>
                        <Link href="/donation" className="text-white">
                          How to Donate
                        </Link>
                      </li>
                      <li>
                        <Link href="/cause" className="text-white">
                          Recent Causes
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer_btn">
                    <Link href="/donation" className="g_btn hbtn_1 to_right1 rad-30 nav-donate-btn p-40">
                      Get Support<span></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-5">
                <div className="footer_widget footer_news mb-50">
                  <div className="footer_widget_title mb-25">
                    <h4 className="footer_title footer_title_2">
                      Keep In Touch
                    </h4>
                  </div>
                  <div className="footer_info_content">
                    <p>
                      <span>
                        <strong>Address :</strong>HOUSE # 705/A-1, STREET NO.
                        11, GOVT EMPLOYEE CO-OPERATIVE HOUSING SOCIETY,
                        TOWNSHIP,Lahore
                      </span>
                    </p>
                    <p>
                      <Link href="tel:+92-42-35110164" className="text-white">
                        <span>
                          <strong>Phone :</strong>+92-42-35110164
                        </span>
                      </Link>
                    </p>
                    <p>
                      <Link href="mailto:info@helpline.org.pk" className="text-white">
                        <span>
                          <strong>Email :</strong>info@helpline.org.pk
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer_copyright_area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 text-center">
              <p>
                Design by{" "}
                <strong>
                  <Link href="https://www.codeviztech.com/" className="text-white">
                    CodeViz Technology
                  </Link>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
}
