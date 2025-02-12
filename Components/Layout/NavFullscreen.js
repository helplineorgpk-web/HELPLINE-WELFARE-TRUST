import React from "react";
import Link from "next/link";

export default function NavFullscreen() {
  return (
    <nav id="mobile-menu">
      <ul>
        <li className="menu-item-has-children">
          <Link href="/about">About Us</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/chairmanMessage">Chairman's Message</Link>
            </li>
            <li>
              <Link href="/ourjourney">Our Journey</Link>
            </li>
            <li>
              <Link href="/volunteer">Volunteer</Link>
            </li>
            <li>
              <Link href="/videos">Media</Link>
            </li>
            <li>
              <Link href="/mission">Mission</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/cause">Our Causes</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/edu" className="innerli">
                Education <span> ▶</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/ownSchools">7 Own School In Punjab</Link>
                </li>
                <li>
                  <Link href="/adoptedSchools">13 adopted Schools</Link>
                </li>
                <li>
                  <Link href="/">Orphanage Abbottabad</Link>
                </li>
                <li>
                  <Link href="/">Vocational Training centers</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/health">Health</Link>
            </li>
            <li className="menu-item-has-children">
              <Link href="#" className="innerli">
                Islamic Program
                <span> ▶</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/islamicactivity">Islamic Activity</Link>
                </li>
                <li>
                  <Link href="/qurbani">Qurbani Program</Link>
                </li>
                <li>
                  <Link href="/masjid">Masjid Program</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="#" className="innerli">
                Distribution
                <span> ▶</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/hasneDistribution">
                    Helpline & Hasne Distribution
                  </Link>
                </li>
                <li>
                  <Link href="/rajanpur">Rajanpur Gullowali Distribution</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/rashan">Rashan Program</Link>
            </li>
            <li>
              <Link href="/disaster">Disaster Management</Link>
            </li>
            <li>
              <Link href="/familyWelfare">Family Welfare</Link>
            </li>
            <li>
              <Link href="/water">Clean Water Program</Link>
            </li>
            <li>
              <Link href="/cataract">Cataract Program</Link>
            </li>
            <li className="menu-item-has-children">
              <Link href="/itlab">IT Labs</Link>
              <ul className="submenu">
                <li>
                  <Link href="/itlab">IT Labs</Link>
                </li>
                <li>
                  <Link href="/itform">IT Labs Form</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/event">Events</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/registration">Registration Documents</Link>
            </li>
            <li>
              <Link href="/certifications">Certications</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/blog">News</Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
