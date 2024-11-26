import React from "react";
import Link from "next/link";
export default function NavFullscreen() {
  return (
    <nav id="mobile-menu">
      <ul>
        <li className="menu-item-has-children">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className=" menu-item-has-children">
          <Link href="#">
            <a>About</a>
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/chairmanMessage">
                <a>Chairman's Message</a>
              </Link>
            </li>
            <li>
              <Link href="/ourjourney">
                <a>Our Journey</a>
              </Link>
            </li>
            <li>
              <Link href="/volunteer">
                <a>Volunteer</a>
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link href="#">
                <a className="innerli">
                  media
                  <span> ▶</span>
                </a>
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/images">
                    <a>images</a>
                  </Link>
                </li>
                <li>
                  <Link href="/videos">
                    <a>Videos</a>
                  </Link>
                </li>
              </ul>
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
            <li className="menu-item-has-children">
              <Link href="#">
                <a className="innerli">
                  Islamic Program
                  <span> ▶</span>
                </a>
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/islamicactivity">
                    <a className="sub-dis">Islamic Activity</a>
                  </Link>
                </li>
                <li>
                  <Link href="/qurbani">
                    <a className="sub-dis">Qurbani Program</a>
                  </Link>
                </li>
                <li>
                  <Link href="/masjid">
                    <a className="sub-dis">Masjid Program</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="#">
                <a className="innerli">
                  Distribution
                  <span> ▶</span>
                </a>
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/hasneDistribution">
                    <a className="sub-dis">Helpline & Hasne Distribution</a>
                  </Link>
                </li>
                <li>
                  <Link href="/rajanpur">
                    <a className="sub-dis">Rajanpur Gullowali Distribution</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/rashan">
                <a>Rashan Program</a>
              </Link>
            </li>
            <li>
              <Link href="/disaster">
                <a>Disaster Management</a>
              </Link>
            </li>
            <li>
              <Link href="/familyWelfare">
                <a>Family Welfare</a>
              </Link>
            </li>
            <li>
              <Link href="/water">
                <a>Clean Water Program</a>
              </Link>
            </li>
            <li>
              <Link href="/cataract">
                <a>Cataract Program</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/itlab">
                <a>IT Labs</a>
              </Link>
            </li> */}
            <li className="menu-item-has-children">
              <Link href="#">
                <a className="innerli">
                  IT Labs
                  <span> ▶</span>
                </a>
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/itlab">
                    <a className="sub-dis">IT Labs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/itform">
                    <a className="sub-dis">IT Labs Form</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/event">
            <a>Events</a>
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">
            <a>Legal</a>
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="/registration">
                <a>Registration Documents</a>
              </Link>
            </li>
            <li>
              <Link href="/certifications">
                <a>Certications</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/contact">
            <a>Contact us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
