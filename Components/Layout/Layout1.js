import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search";
import Header1 from "./Header1";
import Footer1 from "./Footer1";

export default function Layout1({ children }) {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, [scroll]);

  return (
    <>
      <style>{`
        html {
          overflow-x: hidden;
          max-width: 100%;
        }
        body {
          overflow-x: hidden;
          max-width: 100%;
          position: relative;
        }
        *, *::before, *::after {
          box-sizing: border-box;
        }
        .layout-wrapper {
          overflow-x: hidden;
          max-width: 100%;
          width: 100%;
        }
      `}</style>
      <Header1 toggleTrueFalse={toggleTrueFalse} />

      <Search toggleTrueFalse={toggleTrueFalse} isToggled={isToggled} />

      <a
        href="#"
        className={`progress-wrap ${scroll ? "active-progress" : ""}`}
      >
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </a>

      <div className="layout-wrapper">
        {children}
      </div>

      <Footer1 />
    </>
  );
}
