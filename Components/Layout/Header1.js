"use client";
import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import NavFullscreen from "./NavFullscreen";
import { menuData } from "./menuData";

export default function Header1() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClosing, setMobileMenuClosing] = useState(false);
  const [mobileExpandedIdx, setMobileExpandedIdx] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    if (!mobileMenuOpen) return;
    setMobileMenuClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setMobileMenuClosing(false);
      setMobileExpandedIdx(null);
    }, 280);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    if (mobileMenuOpen) {
      setMobileMenuClosing(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setMobileMenuClosing(false);
        setMobileExpandedIdx(null);
      }, 280);
    } else {
      setMobileMenuOpen(true);
    }
  }, [mobileMenuOpen]);

  const toggleMobileAccordion = useCallback((idx) => {
    setMobileExpandedIdx((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <>
      <style>{`
        .hdf-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: transparent;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .hdf-header.scrolled {
          background: #fff;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }
        .hdf-header.mobile-menu-open {
          background: #fff !important;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }
        .hdf-header-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        .hdf-logo {
          display: flex;
          align-items: center;
        }
        .hdf-logo img {
          height: 65px;
          width: auto;
          object-fit: contain;
        }
        .hdf-nav-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .hdf-donate-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 28px;
          background: #f15b43;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .hdf-donate-btn:hover {
          background: #d94832;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(241,91,67,0.3);
        }
        .hdf-hamburger {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          color: #333;
          cursor: pointer;
          padding: 8px;
        }
        .hdf-mobile-dropdown {
          display: block;
          position: fixed;
          left: 0;
          right: 0;
          top: 80px;
          bottom: auto;
          width: 100%;
          background: #fff;
          box-shadow: 0 16px 40px rgba(0,0,0,0.15);
          max-height: calc(100vh - 80px);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          z-index: 9998;
          opacity: 0;
          transform: translateY(-12px);
          visibility: hidden;
          transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
          pointer-events: none;
        }
        .hdf-mobile-dropdown.open {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
          pointer-events: auto;
        }
        .hdf-mobile-dropdown.closing {
          opacity: 0;
          transform: translateY(-12px);
          visibility: hidden;
          pointer-events: none;
        }
        .hdf-mobile-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.4);
          z-index: 9997;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.25s ease, visibility 0.25s ease;
        }
        .hdf-mobile-backdrop.open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
        .hdf-mobile-backdrop.closing {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }
        .hdf-mobile-nav {
          list-style: none;
          margin: 0;
          padding: 0;
          border-top: 1px solid #e5e5e5;
        }
        .hdf-mobile-nav-item {
          border-bottom: 1px solid #eee;
        }
        .hdf-mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          color: #333;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
        }
        .hdf-mobile-nav-link:hover {
          color: #f15b43;
        }
        .hdf-mobile-nav-link.has-sub i {
          transition: transform 0.2s ease;
        }
        .hdf-mobile-nav-link.has-sub.open i {
          transform: rotate(180deg);
        }
        .hdf-mobile-sub {
          background: #f8f9fa;
          padding: 0;
          overflow: hidden;
        }
        .hdf-mobile-sub-link {
          display: block;
          padding: 12px 20px 12px 32px;
          color: #555;
          font-size: 14px;
          text-decoration: none;
          border-bottom: 1px solid #eee;
        }
        .hdf-mobile-sub-link:last-child {
          border-bottom: none;
        }
        .hdf-mobile-sub-link:hover {
          color: #f15b43;
          background: #fff;
        }
        @media (max-width: 1024px) {
          .hdf-nav-wrapper {
            display: none;
          }
          .hdf-hamburger {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .hdf-header-inner {
            padding: 0 20px;
          }
          .hdf-header-wrap {
            position: relative;
          }
        }
        @media (max-width: 768px) {
          .hdf-donate-btn {
            padding: 10px 20px;
            font-size: 13px;
          }
          .hdf-logo img {
            height: 40px;
          }
        }
        @media (min-width: 1025px) {
          .hdf-mobile-dropdown,
          .hdf-mobile-backdrop {
            display: none !important;
          }
        }
      `}</style>

      <div className="hdf-header-wrap">
        <header
          className={`hdf-header ${scrolled ? "scrolled" : ""} ${(mobileMenuOpen || mobileMenuClosing) ? "mobile-menu-open" : ""}`}
        >
          <div className="hdf-header-inner">
            <Link href="/" className="hdf-logo" onClick={closeMobileMenu}>
              <Image
                src="/img/logo/logo2-removebg-preview.png"
                alt="Helpline Welfare Organization"
                width={180}
                height={50}
                priority
                style={{ height: "65px", width: "auto", objectFit: "contain" }}
              />
            </Link>

            <div className="hdf-nav-wrapper">
              <NavFullscreen scrolled={scrolled} />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <Link href="/donation" className="hdf-donate-btn">
                Donate Now
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="hdf-hamburger"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                <i className={mobileMenuOpen ? "fal fa-times" : "fal fa-bars"}></i>
              </button>
            </div>
          </div>
        </header>

      </div>

      {typeof document !== "undefined" &&
        (mobileMenuOpen || mobileMenuClosing) &&
        createPortal(
          <>
            <div
              className={`hdf-mobile-backdrop ${mobileMenuOpen && !mobileMenuClosing ? "open" : ""} ${mobileMenuClosing ? "closing" : ""}`}
              role="button"
              tabIndex={0}
              aria-label="Close menu"
              onClick={closeMobileMenu}
              onKeyDown={(e) => e.key === "Escape" && closeMobileMenu()}
            />
            <div
              className={`hdf-mobile-dropdown ${mobileMenuOpen && !mobileMenuClosing ? "open" : ""} ${mobileMenuClosing ? "closing" : ""}`}
              aria-hidden={!mobileMenuOpen && !mobileMenuClosing}
            >
              <ul className="hdf-mobile-nav">
                {menuData.map((item, idx) => (
                  <li key={idx} className="hdf-mobile-nav-item">
                    {item.dropdown ? (
                      <>
                        <button
                          type="button"
                          className={`hdf-mobile-nav-link has-sub ${mobileExpandedIdx === idx ? "open" : ""}`}
                          onClick={() => toggleMobileAccordion(idx)}
                        >
                          {item.label}
                          <i className="fal fa-chevron-down"></i>
                        </button>
                        <div
                          className="hdf-mobile-sub"
                          style={{ display: mobileExpandedIdx === idx ? "block" : "none" }}
                        >
                          {item.dropdown.items.map((sub, subIdx) => (
                            <Link
                              key={subIdx}
                              href={sub.href}
                              className="hdf-mobile-sub-link"
                              onClick={closeMobileMenu}
                            >
                              {sub.label}
                            </Link>
                          ))}
                          {item.dropdown.itemsRight?.map((sub, subIdx) => (
                            <Link
                              key={`r-${subIdx}`}
                              href={sub.href}
                              className="hdf-mobile-sub-link"
                              onClick={closeMobileMenu}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="hdf-mobile-nav-link"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </>,
          document.body
        )}
    </>
  );
}
