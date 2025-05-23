import React from "react";
import Link from "next/link";

export default function NavFullscreen() {
  return (
    <nav id="mobile-menu">
      <ul>
        <li className="menu-item-has-children">
          <Link href="/">About Us</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/about">Introduction</Link>
            </li>
            <li>
              <Link href="/organization">Organization</Link>
            </li>

            <li>
              <Link href="/ourPresence">Our Presence</Link>
            </li>
            <li>
              <Link href="/supporters">Supporters</Link>
            </li>

            <li>
              <Link href="/ourjourney">Our Journey</Link>
            </li>
            <li>
              <Link href="/registration">Registrations</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/">Projects</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/edu" className="innerli">
                Education <span> ▶</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/ownSchools">Owned Schools</Link>
                </li>
                <li>
                  <Link href="/adoptedSchools">Adopted Schools</Link>
                </li>
                <li>
                  <Link href="/orphanage">Orphanage Home</Link>
                </li>
                <li>
                  <Link href="/taleem-e-Quran">Quran Education</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/digitalSkill" className="innerli">
                Digital Skills
              </Link>
              {/* <ul className="submenu">
                <li>
                  <Link href="/vocationalTrainingCenters">
                    Vocational Centers
                  </Link>
                </li>
              </ul> */}
            </li>
            <li>
              <Link href="/" className="innerli">
                Health <span> ▶</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/health">Medical Projects</Link>
                </li>
                <li>
                  <Link href="/water">Clean Water Program</Link>
                </li>
              </ul>
            </li>

            <li className="menu-item-has-children">
              <Link href="#" className="innerli">
                Welfare
                <span> ▶</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/distribution">Distribution</Link>
                </li>
                <li>
                  <Link href="/rashan">Rashan Program</Link>
                </li>
              </ul>
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
                  <Link href="/masjid">Masjid Maktab</Link>
                </li>
                <li>
                  <Link href="/qurbani">Qurbani Package</Link>
                </li>
                <li>
                  <Link href="/ramzanRashan">Ramzan Package</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/disaster">Rehabilitation</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/">Join us</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/sponsor">Donor/ Sponsor</Link>
            </li>
            <li>
              <Link href="/consultant">Consultant/ Advisor</Link>
            </li>
            <li>
              <Link href="/reformerFriend">Reformer/ Friend</Link>
            </li>
            <li>
              <Link href="/volunteer">Volunteer</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/">Get Registered</Link>
          <ul className="sub-menu">
          <li>
              <Link href="/educationForm">Education Support</Link>
            </li>
            <li>
              <Link href="/needy">Needy support/ Medical</Link>
            </li>
            <li>
              <Link href="/jobSeeker">Job seeker/ Internee</Link>
            </li>
            <li>
              <Link href="/studentSkillWorker">Student/ Skill Worker</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/"> Media</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/videos">Videos</Link>
            </li>
            <li>
              <Link href="/images">Images</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
