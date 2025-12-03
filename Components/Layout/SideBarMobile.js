import React from "react";
import NavMobile from "./NavMobile";
import Link from "next/link";

export default function SideBarMobile({ isToggledInfo, toggleTrueFalseInfo }) {
  return (
    <>
      <div className="fix d-lg-none">
        <div className={`side-info ${isToggledInfo ? "info-open" : ""}`}>
          <div className="offset-widget offset-logo mb-30 pb-20">
            <div className="row align-items-center">
              <div className="col-8">
                <Link href="/" className="logo">
                  <img src="/img/logo/logo.png" alt="Logo" />
                </Link>
              </div>
              <div className="col-4 text-end">
                <button
                  onClick={toggleTrueFalseInfo}
                  className="side-info-close"
                >
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="offset-widget offset_searchbar mb-30">
            <form method="get" action="#">
              <div className="offset_search_content">
                <input
                  type="search"
                  placeholder="What are you searching for?"
                />
                <button type="submit" className="offset_search_button">
                  <i className="fal fa-search"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="offset-widget mb-30">
            <Link
              href="/blogs"
              className="g_btn theme1_bg to_right1 rad-30"
              style={{ width: "100%", textAlign: "center", display: "block" }}
            >
              Blogs<span></span>
            </Link>
          </div>

          <div className="mobile-menu mean-menu">
            <NavMobile />
          </div>

          <div className="contact-infos mt-30 mb-30">
            <div className="contact-list mobile_contact mb-30">
              <h4>Contact Info</h4>
              <Link href="#" className="theme-1">
                <i className="fal fa-map-marker-alt"></i>
                <span>
                  HOUSE # 705/A-1, STREET NO. 11, GOVT EMPLOYEE CO-OPERATIVE
                  HOUSING SOCIETY, Township, Lahore
                </span>
              </Link>
              <Link href="/tel:+92-42-3515 7374" className="theme-2">
                <i className="fal fa-phone"></i>
                <span>+92-42-3515 7374</span>
              </Link>
              <Link href="/mailto:info@helpline.org.pk" className="theme-3">
                <i className="far fa-envelope"></i>
                <span>info@helpline.org.pk</span>
              </Link>
            </div>

            <div className="top_social offset_social mt-20 mb-30">
              <Link href="#" target="_blank" className="facebook">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" target="_blank" className="twitter">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" target="_blank" className="linkedin">
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link href="#" target="_blank" className="youtube">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
