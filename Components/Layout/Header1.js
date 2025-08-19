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
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      {/* <div className="header_top_area d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="top_mailing">
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "26px",
                  paddingTop: "10px",
                }}
              >
                HELPLINE WELFARE TRUST
              </p>
            </div>
          </div>
        </div>
      </div> */}
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
                    Donate Now<span></span>
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
      {/* <div className={`${styles.header_top_area} d-none d-lg-block`}>
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
      </div> */}
    </header>
  );
}
