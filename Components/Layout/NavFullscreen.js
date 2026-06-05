"use client";
import React, { useState } from "react";
import Link from "next/link";
import { menuData } from "./menuData";

export default function NavFullscreen({ scrolled = false, lightNav = false }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      <style>{`
        .hdf-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .hdf-nav-item {
          position: static;
        }
        .hdf-nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          color: #333;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
          cursor: pointer;
          white-space: nowrap;
          border-radius: 8px;
          border: 1px solid transparent;
        }
        .hdf-nav.light .hdf-nav-link {
          color: #fff;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
          border-color: rgba(255, 255, 255, 0.28);
          background: rgba(255, 255, 255, 0.08);
        }
        .hdf-nav.light .hdf-nav-link:hover,
        .hdf-nav.light .hdf-nav-link.active {
          color: #fff;
          background: rgba(255, 255, 255, 0.18);
          border-color: rgba(255, 255, 255, 0.45);
        }
        .hdf-nav-link:hover,
        .hdf-nav-link.active {
          color: #f15b43;
        }
        .hdf-nav-link svg {
          width: 10px;
          height: 10px;
          transition: transform 0.2s ease;
        }
        .hdf-nav-link.active svg {
          transform: rotate(180deg);
        }
        .hdf-mega-dropdown {
          position: fixed;
          left: 0;
          right: 0;
          top: 80px;
          width: 100%;
          background: #fff;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.25s ease;
          overflow-x: hidden;
        }
        .hdf-mega-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .hdf-mega-inner {
          width: 100%;
          max-width: 100%;
          margin: 0;
          padding: 50px 80px;
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 60px;
        }
        .hdf-mega-inner.two-cols {
          grid-template-columns: 340px 1fr 1fr;
        }
        .hdf-mega-left {
          border-right: 1px solid #eee;
          padding-right: 50px;
        }
        .hdf-mega-title {
          font-size: 28px;
          font-weight: 700;
          color: #263b5d;
          margin: 0 0 20px 0;
          line-height: 1.3;
        }
        .hdf-mega-desc {
          font-size: 15px;
          color: #666;
          line-height: 1.8;
          margin: 0;
        }
        .hdf-mega-right {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .hdf-mega-right.split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 80px;
          align-items: start;
        }
        .hdf-menu-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
          border-bottom: 1px solid #f0f0f0;
          text-decoration: none;
          color: #333;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.2s ease;
          min-width: 220px;
        }
        .hdf-menu-item:hover {
          color: #f15b43;
        }
        .hdf-menu-item:last-child {
          border-bottom: none;
        }
        .hdf-menu-arrow {
          color: #999;
          font-size: 20px;
          font-weight: 300;
          transition: transform 0.2s ease, color 0.2s ease;
          margin-left: 20px;
        }
        .hdf-menu-item:hover .hdf-menu-arrow {
          color: #f15b43;
          transform: translateX(4px);
        }
        .hdf-backdrop {
          position: fixed;
          inset: 0;
          top: 80px;
          background: rgba(0,0,0,0.3);
          z-index: 9998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s ease;
        }
        .hdf-backdrop.open {
          opacity: 1;
          visibility: visible;
        }
      `}</style>

      <nav>
        <ul className={`hdf-nav ${lightNav ? "light" : ""}`}>
          {menuData.map((item, idx) => (
            <li
              key={idx}
              className="hdf-nav-item"
              onMouseEnter={() => item.dropdown && setActiveDropdown(idx)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.dropdown ? (
                <span
                  className={`hdf-nav-link ${activeDropdown === idx ? "active" : ""}`}
                >
                  {item.label}
                  <svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              ) : (
                <Link href={item.href} className="hdf-nav-link">
                  {item.label}
                </Link>
              )}

              {item.dropdown && (
                <div className={`hdf-mega-dropdown ${activeDropdown === idx ? "open" : ""}`}>
                  <div className={`hdf-mega-inner ${item.dropdown.itemsRight ? "two-cols" : ""}`}>
                    <div className="hdf-mega-left">
                      <h3 className="hdf-mega-title">{item.dropdown.title}</h3>
                      <p className="hdf-mega-desc">{item.dropdown.description}</p>
                    </div>
                    <div className={`hdf-mega-right ${item.dropdown.itemsRight ? "split" : ""}`}>
                      <div>
                        {item.dropdown.items.map((subItem, subIdx) => (
                          <Link key={subIdx} href={subItem.href} className="hdf-menu-item">
                            <span>{subItem.label}</span>
                            <span className="hdf-menu-arrow">›</span>
                          </Link>
                        ))}
                      </div>
                      {item.dropdown.itemsRight && (
                        <div>
                          {item.dropdown.itemsRight.map((subItem, subIdx) => (
                            <Link key={subIdx} href={subItem.href} className="hdf-menu-item">
                              <span>{subItem.label}</span>
                              <span className="hdf-menu-arrow">›</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`hdf-backdrop ${activeDropdown !== null ? "open" : ""}`}
        onMouseEnter={() => setActiveDropdown(null)}
      />
    </>
  );
}
