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
        <Link href="/" className="has-arrow">
          Home
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="#" className="has-arrow">
          About
        </Link>
        <ul className="sub-menu">
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/organization">Organization</Link>
          </li>
          <li>
            <Link href="/ourjourney">Our Journey</Link>
          </li>
          <li>
            <Link href="/ourPresence">Our Presence</Link>
          </li>
          <li>
            <Link href="/supporters">Supporters</Link>
          </li>
          <li>
            <Link href="/volunteer">Volunteer</Link>
          </li>
          <li className="menu-item-has-children">
            <Link href="/videos" className="has-arrow">
              Media
            </Link>
          </li>
          <li>
            <Link href="/mission">Mission</Link>
          </li>
          <li>
            <Link href="/registration">Registration Documents</Link>
          </li>
          <li>
            <Link href="/certifications">Certifications</Link>
          </li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <Link href="#" className="has-arrow">
          Our Causes
        </Link>
        <ul className="sub-menu">
          <li>
            <Link href="/edu" className="has-arrow">
              Education
            </Link>
            <ul>
              <li>
                <Link href="/ownSchools">8 Own School In Punjab</Link>
              </li>
              <li>
                <Link href="/adoptedSchools">15 adopted Schools</Link>
              </li>
              <li>
                <Link href="/orphanage">Orphanage Abbottabad</Link>
              </li>
              <li>
                <Link href="/vocationalTrainingCenters">
                  Vocational Training centers
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/health">Health</Link>
          </li>
          <li className="menu-item-has-children">
            <Link href="#" className="has-arrow">
              Islamic Program
            </Link>
            <ul>
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
            <Link href="#" className="has-arrow">
              Distribution
            </Link>
            <ul>
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
            <Link href="#" className="has-arrow">
              IT Lab
            </Link>
            <ul className="sub-menu">
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
        <Link href="#" className="has-arrow">
          Get Registered As
        </Link>
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
        <Link href="#" className="has-arrow">
          Join us As
        </Link>
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
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>
    </ul>
  );
}
