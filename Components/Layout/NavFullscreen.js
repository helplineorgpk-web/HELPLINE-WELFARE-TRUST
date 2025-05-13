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
              <Link href="/registration">Registration Documents</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="/cause">Projects</Link>
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
                  <Link href="/vocationalTrainingCenters">
                    Skills Development
                  </Link>
                </li>
                <li>
                  <Link href="/vocationalTrainingCenters">
                    Vocational Centers
                  </Link>
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
                  <Link href="/taleem-e-Quran">Taleem e Quran</Link>
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
              <Link href="/itlab">Digital Skills</Link>
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
          <Link href="/event">Get Registered</Link>
          <ul className="sub-menu">
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
          <Link href="/event">Join us</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/donation">Donor</Link>
            </li>
            <li>
              <Link href="/sponsor">Sponsor</Link>
            </li>
            <li>
              <Link href="/volunteer">Volunteer</Link>
            </li>
            <li>
              <Link href="/consultant">Consultant & Friend</Link>
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
