import React from "react";
import NavFullscreen from "./NavFullscreen";
import Link from "next/link";
import styles from "../../public/css/headerTop.module.css";
export default function Header2({ toggleTrueFalseInfo }) {
  return (
    <header className="header-area">
      <div className="header_top_area d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-9 col-xl-9 col-lg-8">
              <div className="top_mailing">
                <Link href="#" className="theme-1">
                  <i className="fal fa-envelope"></i>
                  info@helpline.org.pk
                </Link>
                <Link href="#" className="theme-2">
                  <i className="fal fa-phone"></i>+92-42-3515 7374
                </Link>
                <Link href="#" className="theme-3">
                  <i className="fal fa-map-marker-alt"></i>HOUSE # 705/A-1,
                  Township, Lahore Pakistan
                </Link>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 text-start text-md-end">
              <div className="top_social">
                <Link
                  href="https://www.facebook.com/helpline.org.pk/"
                  target="_blank"
                  className="facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  href="https://twitter.com/helpline_swo?s=20"
                  target="_blank"
                  className="twitter"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  href="https://www.youtube.com/@helpline3532"
                  target="_blank"
                  className="pinterest"
                >
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/helpline.socialwelfare/"
                  target="_blank"
                  className="pinterest"
                >
                  <i className="fab fa-instagram"></i>
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
                <Link href="/" className="logo">
                  <img src="/img/logo/logo.png" alt="Logo" />
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
                  <Link
                    href="/donation"
                    className="g_btn hbtn_1 to_right1 rad-30"
                  >
                    Make Donation<span></span>
                  </Link>
                </div>
                <div className="menu-bar d-inline-none d-block d-xl-none">
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
      <div className={`${styles.header_top_area} d-none d-lg-block`}>
        <div className="container">
          <div className="row align-items-center">
            <div>
              <div className={styles.marqueeContainer}>
                <div className={styles.marquee}>
                  <span>EDUCATION </span>- <span>HEALTH </span>-{" "}
                  <span>WELFARE </span>- <span>REHABILITATION </span>-
                  <span>CAPACITY BUILDING </span>-{" "}
                  <span>SKILL DEVELOPMENT </span>-{" "}
                  <span>COMMUNITY DEVELOPMENT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
