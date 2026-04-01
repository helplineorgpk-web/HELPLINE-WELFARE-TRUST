import React from "react";
import { useState, useEffect } from "react";
import Header1 from "./Header1";
import Footer1 from "./Footer1";

export default function Layout2({ children }) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header1 />

      {/* back to top Start  */}
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
      {/* back to top end  */}

      {children}

      <Footer1 />
    </>
  );
}
