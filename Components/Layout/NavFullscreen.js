import React from "react";
import Link from "next/link";
export default function NavFullscreen() {
  return (
    <nav id="mobile-menu">
      <ul>
        <li className="active menu-item-has-children">
          <Link href="/">
            <a>Home</a>
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="/">
                <a>Home 1</a>
              </Link>
            </li>
            <li>
              <Link href="/index-2">
                <a>Home 2</a>
              </Link>
            </li>
            <li>
              <Link href="/index-3">
                <a>Home 3</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="active menu-item-has-children">
          <Link href="/">
            <a>About</a>
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/ourjourney">
                <a>Our Journey</a>
              </Link>
            </li>
            <li>
              <Link href="/chairmanMessage">
                <a>Chairman's Message</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/cause">
            <a>Projects</a>
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="/cause">
                <a>Causes</a>
              </Link>
            </li>
            <li>
              <Link href="/eligibilty-criteria">
                <a>Eligibility Critera</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="">
            <a>Social Welfare</a>
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="/edu">
                <a>Education</a>
              </Link>
            </li>
            <li>
              <Link href="/health">
                <a>Health</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">
            <a>Pages</a>
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="/event">
                <a>Events</a>
              </Link>
            </li>
            <li>
              <Link href="/volunteer">
                <a>Volunteer</a>
              </Link>
            </li>
            <li>
              <Link href="/donation">
                <a>Donation</a>
              </Link>
            </li>
            <li>
              <Link href="/mission">
                <a>Mission</a>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <a>Faq</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">
            <a>media</a>
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="#">
                <a>images</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Videos</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">
            <a>Legal</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/contact">
            <a>donation</a>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}