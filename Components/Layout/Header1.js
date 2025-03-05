import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/img/logo/logo.png";
import NavFullscreen from "./NavFullscreen";
import styles from "../../public/css/headerTop.module.css";

export default function Header1({ toggleTrueFalseInfo }) {
  return (
    <header
      className="header-area header-transparent"
      style={{
        background: "white",
      }}
    >
      <div className={`${styles.header_top_area} d-none d-lg-block`}>
        <div className="container">
          <div className="row align-items-center">
            <div>
              <div className={styles.marqueeContainer}>
                <div className={styles.marquee}>
                  1: This Ramzan, Helpline Welfare Trust is distributing Ramzan
                  Rations to 4000 destitute and deserving families. Join us in
                  spreading hope and blessings to those in need. Together, we
                  can make a difference and bring joy to countless lives this
                  holy month. This Ramzan, Helpline Welfare Trust is
                  distributing 2 tons of dates to destitute and deserving
                  families. Dates, a symbol of blessings and sustenance, will
                  bring joy and nourishment to countless lives. Helpline is
                  organizing a Sports Gala at Al-Kitab Higher Secondary School,
                  Rana Town, to promote extracurricular activities and foster a
                  spirit of healthy competition among students. The event aims
                  to encourage teamwork, sportsmanship, and physical well-being.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header" className="header_menu_area res_padd">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
              <Link href="/" className="logo">
                <Image src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-8 d-none d-lg-block">
              <div className="main-menu theme-1 text-center">
                <NavFullscreen />
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-2 col-md-6 col-6">
              <div className="header-right d-flex align-items-center justify-content-end">
                <div className="header-sing d-inline-block ml-20 d-none d-xl-block">
                  <Link
                    href="/donation"
                    className="g_btn hbtn_1 to_right1 rad-30"
                  >
                    Make Donation<span></span>
                  </Link>
                </div>
                <div className="hamburger-menu menu-bar info-bar d-d-block ml-20">
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
