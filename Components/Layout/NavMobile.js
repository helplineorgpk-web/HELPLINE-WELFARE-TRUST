import React, { useEffect } from "react";
import Link from "next/link";
import MetisMenu from "metismenujs";

export default function NavMobile() {
  useEffect(() => {
    new MetisMenu("#metismenu");
  }, []);

  return (
    <ul className="metismenu text-muted" id="metismenu">
      <li className="active menu-item-has-children">
        <Link href="/">
          <a className="has-arrow">Home</a>
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="#">
          <a className="has-arrow">About</a>
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
              <a className="has-arrow">Media</a>
            </Link>
            <ul>
              <li>
                <Link href="/images">
                  <a>Images</a>
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
          <a className="has-arrow">Social Welfare</a>
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
              <a className="has-arrow">Islamic Program</a>
            </Link>
            <ul>
              <li>
                <Link href="/islamicactivity">
                  <a>Islamic Activity</a>
                </Link>
              </li>
              <li>
                <Link href="/qurbani">
                  <a>Qurbani Program</a>
                </Link>
              </li>
              <li>
                <Link href="/masjid">
                  <a>Masjid Program</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <Link href="#">
              <a className="has-arrow">Distribution</a>
            </Link>
            <ul>
              <li>
                <Link href="/hasneDistribution">
                  <a>Helpline & Hasne Distribution</a>
                </Link>
              </li>
              <li>
                <Link href="/rajanpur">
                  <a>Rajanpur Gullowali Distribution</a>
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
          <li className="menu-item-has-children">
            <Link href="#">
              <a className="has-arrow">IT Lab</a>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link href="/itlab">
                  <a>IT Labs</a>
                </Link>
              </li>
              <li>
                <Link href="/itform">
                  <a>IT Labs Form</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/event">
          <a>Events</a>
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="#">
          <a className="has-arrow">Legal</a>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link href="/registration">
              <a>Registration Documents</a>
            </Link>
          </li>
          <li>
            <Link href="/certifications">
              <a>Certifications</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </li>
    </ul>
  );
}
