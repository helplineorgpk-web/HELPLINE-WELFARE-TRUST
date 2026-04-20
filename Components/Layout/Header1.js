"use client";
import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import NavFullscreen from "./NavFullscreen";
import { menuData } from "./menuData";
import UBLPaymentForm from "../Elements/Payment/UBLPaymentForm";

export default function Header1() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClosing, setMobileMenuClosing] = useState(false);
  const [mobileExpandedIdx, setMobileExpandedIdx] = useState(null);
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [activePaymentTab, setActivePaymentTab] = useState("online");

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
    }, 150);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    if (mobileMenuOpen) {
      setMobileMenuClosing(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setMobileMenuClosing(false);
        setMobileExpandedIdx(null);
      }, 150);
    } else {
      setMobileMenuOpen(true);
    }
  }, [mobileMenuOpen]);

  const toggleMobileAccordion = useCallback((idx) => {
    setMobileExpandedIdx((prev) => (prev === idx ? null : idx));
  }, []);

  const openDonateModal = useCallback(() => {
    setDonateModalOpen(true);
    setActivePaymentTab("online");
  }, []);

  const closeDonateModal = useCallback(() => {
    setDonateModalOpen(false);
  }, []);

  /** Prevent background page scroll behind the mobile menu (iOS Safari). */
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return undefined;
    }
    const active = mobileMenuOpen || mobileMenuClosing;
    if (!active) return undefined;

    const scrollY = window.scrollY;
    const prev = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      overflow: document.body.style.overflow,
      width: document.body.style.width,
    };

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = prev.position;
      document.body.style.top = prev.top;
      document.body.style.left = prev.left;
      document.body.style.right = prev.right;
      document.body.style.overflow = prev.overflow;
      document.body.style.width = prev.width;
      window.scrollTo(0, scrollY);
    };
  }, [mobileMenuOpen, mobileMenuClosing]);

  useEffect(() => {
    if (!donateModalOpen || typeof document === "undefined") {
      return undefined;
    }
    const onEsc = (event) => {
      if (event.key === "Escape") {
        closeDonateModal();
      }
    };
    document.addEventListener("keydown", onEsc);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = prevOverflow;
    };
  }, [donateModalOpen, closeDonateModal]);

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
          border: none;
          background: #f15b43;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.3s ease;
          white-space: nowrap;
          cursor: pointer;
        }
        .hdf-donate-btn:hover {
          background: #d94832;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(241,91,67,0.3);
        }
        .hdf-donate-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 10010;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }
        .hdf-donate-modal {
          width: min(960px, 100%);
          max-height: 92vh;
          overflow: auto;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.25);
        }
        .hdf-donate-modal-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 18px;
          border-bottom: 1px solid #ececec;
        }
        .hdf-donate-modal-head h3 {
          margin: 0;
          font-size: 20px;
          color: #213047;
        }
        .hdf-donate-modal-close {
          border: none;
          background: transparent;
          color: #444;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
        }
        .hdf-donate-tabs {
          display: flex;
          gap: 8px;
          padding: 12px 18px 0;
          border-bottom: 1px solid #ececec;
        }
        .hdf-donate-tab {
          border: 1px solid #e7e7e7;
          background: #f7f8fb;
          color: #344054;
          padding: 10px 14px;
          border-radius: 8px 8px 0 0;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        .hdf-donate-tab.active {
          background: #fff;
          border-bottom-color: #fff;
          color: #f15b43;
        }
        .hdf-donate-tab-panel {
          padding: 18px;
        }
        .hdf-bank-card {
          border: 1px solid #ececec;
          border-radius: 10px;
          padding: 16px;
          background: #fafcff;
        }
        .hdf-bank-card h4 {
          margin: 0 0 8px;
          font-size: 18px;
          color: #213047;
        }
        .hdf-bank-info {
          margin: 10px 0;
          line-height: 1.7;
          color: #364254;
          font-size: 15px;
        }
        .hdf-bank-note {
          margin-top: 14px;
          background: #fff8f6;
          border: 1px solid #ffe3db;
          color: #733f32;
          padding: 12px;
          border-radius: 8px;
          font-size: 14px;
        }
        .hdf-bank-logos {
          margin-top: 14px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .hdf-bank-logo-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 10px;
          border: 1px solid #e9ecf2;
          border-radius: 8px;
          background: #fff;
          min-width: 108px;
          min-height: 44px;
        }
        .hdf-bank-logo-chip img {
          width: auto !important;
          height: 24px !important;
          max-width: 92px;
          object-fit: contain;
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
          max-height: calc(100svh - 80px);
          max-height: calc(100dvh - 80px);
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          z-index: 9998;
          opacity: 0;
          transform: translateY(-8px);
          visibility: hidden;
          transition: opacity 0.14s ease-out, transform 0.14s ease-out, visibility 0.14s ease-out;
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
          transform: translateY(-8px);
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
          transition: opacity 0.14s ease-out, visibility 0.14s ease-out;
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
          transition: transform 0.12s ease-out;
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
              <button type="button" className="hdf-donate-btn" onClick={openDonateModal}>
                Donate Now
              </button>
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

      {typeof document !== "undefined" &&
        donateModalOpen &&
        createPortal(
          <div
            className="hdf-donate-modal-overlay"
            onClick={(e) => e.target === e.currentTarget && closeDonateModal()}
            role="dialog"
            aria-modal="true"
            aria-label="Donation payment options"
          >
            <div className="hdf-donate-modal">
              <div className="hdf-donate-modal-head">
                <h3>Donate Now</h3>
                <button
                  type="button"
                  className="hdf-donate-modal-close"
                  onClick={closeDonateModal}
                  aria-label="Close donation modal"
                >
                  &times;
                </button>
              </div>
              <div className="hdf-donate-tabs">
                <button
                  type="button"
                  className={`hdf-donate-tab ${activePaymentTab === "online" ? "active" : ""}`}
                  onClick={() => setActivePaymentTab("online")}
                >
                  Online Payment (Merchant Card)
                </button>
                <button
                  type="button"
                  className={`hdf-donate-tab ${activePaymentTab === "bank" ? "active" : ""}`}
                  onClick={() => setActivePaymentTab("bank")}
                >
                  UBL Bank Account
                </button>
              </div>
              <div className="hdf-donate-tab-panel">
                {activePaymentTab === "online" ? (
                  <UBLPaymentForm donationType="General Donation" />
                ) : (
                  <div className="hdf-bank-card">
                    <h4>UBL Bank Transfer Details</h4>
                    <p className="hdf-bank-info">
                      <strong>Account Number:</strong> 063563501118170
                    </p>
                    <p className="hdf-bank-info">
                      <strong>IBAN:</strong> PK69UNIL0112063501118170
                    </p>
                    <p className="hdf-bank-info">
                      <strong>Bank Name:</strong> United Bank Limited
                    </p>
                    <div className="hdf-bank-logos" aria-label="Supported payment channels">
                      <span className="hdf-bank-logo-chip">
                        <Image
                          src="/img/payment/ubl-pay-logo.png"
                          alt="UBL"
                          width={82}
                          height={22}
                        />
                      </span>
                      <span className="hdf-bank-logo-chip">
                        <Image
                          src="/img/payment/jazzcash-logo.svg"
                          alt="JazzCash"
                          width={90}
                          height={24}
                        />
                      </span>
                      <span className="hdf-bank-logo-chip">
                        <Image
                          src="/img/payment/easypaisa-logo.svg"
                          alt="Easypaisa"
                          width={90}
                          height={24}
                        />
                      </span>
                    </div>
                    <div className="hdf-bank-note">
                      We receive donations from any digital account, including JazzCash,
                      Easypaisa, and all banks through transfer/deposit into this UBL account.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
