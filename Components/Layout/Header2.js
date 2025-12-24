import React from "react";
import NavFullscreen from "./NavFullscreen";
import Link from "next/link";
import Image from "next/image";
import styles from "../../public/css/headerTop.module.css";

export default function Header2({ toggleTrueFalseInfo }) {
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
                  href="https://www.instagram.com/helplineorg/?utm_source=qr"
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
              <Link href="/" className="logo header-logo mt-2">
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
                    objectFit: 'contain',
                  }}
                  unoptimized={false}
                />
              </Link>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-9 d-none d-lg-block">
              <div className="main-menu menu_2 text-center">
                <NavFullscreen />
              </div>
            </div>
            <p className="mobile-title">HELPLINE <span style={{ color: "red" }}>WELFARE</span> TRUST</p>
            <div className="col-xxl-3 col-xl-3 col-lg-1 col-md-6 col-6">
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
                    className="g_btn hbtn_1 to_right1 rad-30"
                    style={ {
                        backgroundColor:"#004A7F",
                        borderRadius:"100px",
                        border:"none",
                        color:"#FFFFFF",
                        cursor:"pointer",
                        display:"inline-block",
                        fontFamily:"Arial",
                        fontSize:"15px",
                        textAlign:"center",
                        textDecoration:"none",
                        height:"60px",
                        lineHeight:"60px",
                        animation:"glowing 1500ms infinite",
                       } }
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
    </>
  );
}
