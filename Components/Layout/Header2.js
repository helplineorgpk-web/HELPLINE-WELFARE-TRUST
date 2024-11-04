import React from "react";
import NavFullscreen from "./NavFullscreen";
import Link from "next/link";

export default function Header2({ toggleTrueFalseInfo }) {
  return (
    <header className="header-area">
      <div className="header_top_area d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-9 col-xl-9 col-lg-8">
              <div className="top_mailing">
                <Link href="#">
                  <a className="theme-1">
                    <i className="fal fa-envelope"></i>
                    info@helpline.org.pk
                  </a>
                </Link>
                <Link href="#">
                  <a className="theme-2">
                    <i className="fal fa-phone"></i>+92-42-3515 7374
                  </a>
                </Link>
                <Link href="#">
                  <a className="theme-3">
                    <i className="fal fa-map-marker-alt"></i>HOUSE # 705/A-1,
                    Township, Lahore Pakistan
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 text-start text-md-end">
              <div className="top_social">
                <Link href="https://www.facebook.com/helpline.org.pk/">
                  <a className="facebook" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                <Link href="https://twitter.com/helpline_swo?s=20">
                  <a className="twitter" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </Link>
                <Link href="https://www.youtube.com/@helpline3532">
                  <a className="pinterest" target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>
                </Link>
                <Link href="https://www.instagram.com/helpline.socialwelfare/">
                  <a className="pinterest" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header" className="header_menu_area header_menu_area_2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
              <div className="">
                <Link href="/">
                  <a>
                    <img src="/img/logo/logo.png" alt="" width={"100%"} />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-9 d-none d-lg-block">
              <div className="main-menu menu_2 text-center">
                <NavFullscreen />
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-1 col-md-6 col-6">
              <div className="header-right d-flex align-items-center justify-content-end">
                <div className="header-sing d-inline-block d-none d-xl-block">
                  <Link href="/donation">
                    <a className="g_btn hbtn_1 to_right1 rad-30">
                      Make Donation<span></span>
                    </a>
                  </Link>
                </div>
                <div className="hamburger-menu menu-bar info-bar d-inline-block ml-20">
                  <button
                    onClick={toggleTrueFalseInfo}
                    className="hamburger-btn open-mobile-menu"
                  >
                    <i className="fal fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
