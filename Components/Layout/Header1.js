import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavFullscreen from "./NavFullscreen";
import styles from "../../public/css/headerTop.module.css";

export default function Header1({ toggleTrueFalseInfo }) {
  return (
    <>
      <style>{`
        .header-logo {
          display: inline-block;
          position: relative;
        }
        .header-logo img,
        .header-area .header-logo img,
        .header-logo span {
          max-width: 60% !important;
          height: auto !important;
          width: auto !important;
          padding: 0 !important;
          margin: 0 !important;
          display: block !important;
          min-width: auto !important;
          object-fit: contain !important;
          -webkit-transform: translateZ(0) !important;
          transform: translateZ(0) !important;
          -webkit-backface-visibility: hidden !important;
          backface-visibility: hidden !important;
        }
        .mobile-title {
          display: none;
        }
        @media (max-width: 768px) {
          .header-logo img,
          .header-area .header-logo img,
          .header-logo span {
            height: auto !important;
            width: auto !important;
            min-width: auto !important;
            max-width: 40% !important;
            max-height: 200px !important;
            object-fit: contain !important;
            -webkit-transform: translateZ(0) !important;
            transform: translateZ(0) !important;
          }
          .row.align-items-center {
            position: relative;
          }
          .header-right {
            justify-content: flex-end !important;
            width: 100%;
          }
          .mobile-title {
            display: block;
            text-align: center;
            font-weight: 600;
            font-size: 14px;
            color: #333;
            margin: 0;
            padding: 0;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 200px;
            z-index: 1;
          }
          .hamburger-menu {
            margin-left: auto;
          }
        }
        /* iOS Safari specific fixes */
        @supports (-webkit-touch-callout: none) {
          .header-logo img,
          .header-area .header-logo img,
          .header-logo span {
            -webkit-transform: translateZ(0) !important;
            transform: translateZ(0) !important;
            will-change: auto !important;
          }
        }
        /* Blogs button - reversed colors */
        .header-sing a[href=/blogs] {
          background-color: var(--clr-theme-1) !important;
        }
        .header-sing a[href=/blogs] span {
          background-color: var(--clr-theme-2) !important;
        }
        .header-sing a[href=/blogs]:hover {
          color: var(--clr-common-white);
        }
        .header-sing a[href=/blogs]:hover span {
          width: 100%;
          height: 100%;
        }
          @keyframes glowing {
      0% {
        background-color: #B20000;
        box-shadow: 0 0 3px #B20000;
      }
      50% {
        background-color: #FF0000;
        box-shadow: 0 0 40px #FF0000;
      }
      100% {
        background-color: #B20000;
        box-shadow: 0 0 3px #B20000;
      }
    }
      `}</style>
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
              <Link href="/" className="logo header-logo">
                <Image 
                  src="/img/logo/logo.png" 
                  alt="Logo" 
                  width={250}
                  height={100}
                  priority
                  sizes="(max-width: 768px) 40vw, 60vw"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                  unoptimized={false}
                />
              </Link>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-8 d-none d-lg-block">
              <div className="main-menu theme-1 text-center">
                <NavFullscreen />
              </div>
            </div>
                <p className="mobile-title">HELPLINE <span style={{ color: "red" }}>WELFARE</span> TRUST</p>
            <div className="col-xxl-3 col-xl-4 col-lg-2 col-md-6 col-6">
              <div className="header-right d-flex align-items-center justify-content-end">
                <div className="header-sing d-inline-block d-none d-md-block mr-15">
                  <Link
                    href="/blogs"
                    className="g_btn hbtn_1 to_right1 rad-30"
                    style={{ fontSize: "14px", padding: "0 25px", minWidth: "auto", height: "60px", lineHeight: "60px" }}
                  >
                    Blogs<span></span>
                  </Link>
                </div>
                <div className="header-sing d-inline-block d-none d-xl-block">
                  <Link
                    href="/donation"
                    className="g_btn hbtn_1 to_right1 rad-30 nav-donate-btn"
                  >
                    Donate Now<span></span>
                  </Link>
                </div>
                <div className="hamburger-menu menu-bar info-bar d-inline-none d-block d-xl-none ml-20">
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
    </>
  );
}
