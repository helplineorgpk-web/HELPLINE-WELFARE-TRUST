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
                    <Link href="/">
                      <a className="animation">
                        <img src="/img/logo/logo-white.png" alt="img" />
                      </a>
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
                        <Link href="/videos">
                          <a>Media</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/volunteer">
                          <a>Volunteer</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/mission">
                          <a>Mission</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/edu">
                          <a>Education</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/health">
                          <a>Health</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/qurbani">
                          <a>Qurbani Program</a>
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
                        <Link href="/donation">
                          <a>How to Donate</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/cause">
                          <a>Recent Causes</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer_btn">
                    <Link href="/donation">
                      <a className="g_btn fbtn_2 to_right1 p-40 rad-50">
                        Get Support<span></span>
                      </a>
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
                      <a>
                        <span>
                          <strong>Phone :</strong>+92-42-35110164
                        </span>
                      </a>
                    </p>
                    <p>
                      <a>
                        <span>
                          <strong>Email :</strong>info@helpline.org.pk
                        </span>
                      </a>
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
                  <Link href="https://www.codeviztech.com/">
                    <a target="_blank"> CodeViz Technology</a>
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
