"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import MetisMenu from "metismenujs";
import "metismenujs/dist/metismenujs.css";

export default function NavMobile() {
  useEffect(() => {
    const menu = new MetisMenu("#metismenu");
    return () => {
      if (menu) {
        menu.dispose();
      }
    };
  }, []);

  return (
    <nav className="mobile-nav">
      <ul className="metismenu text-muted" id="metismenu">
        <li className="menu-item-has-children">
          <Link href="#" className="has-arrow">
            About Us
          </Link>
          <ul className="sub-menu">
            <li><Link href="/about">Introduction</Link></li>
            <li><Link href="/organization">Organization</Link></li>
            <li><Link href="/ourPresence">Our Presence</Link></li>
            <li><Link href="/supporters">Supporters</Link></li>
            <li><Link href="/ourjourney">Our Journey</Link></li>
            <li><Link href="/registration">Registrations</Link></li>
            <li><Link href="/policies">Our Policies</Link></li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="#" className="has-arrow">
            Projects
          </Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link href="#" className="has-arrow">Education</Link>
              <ul className="sub-menu">
                <li><Link href="/ownSchools">Owned Schools</Link></li>
                <li><Link href="/adoptedSchools">Adopted Schools</Link></li>
                <li><Link href="/orphanage">Orphanage Home</Link></li>
                <li><Link href="/taleem-e-Quran">Quran Education</Link></li>
              </ul>
            </li>

            <li><Link href="/vocationalTrainingCenters">Vocational Centers</Link></li>
            <li><Link href="/itlab">Digital Skills</Link></li>

            <li className="menu-item-has-children">
              <Link href="#" className="has-arrow">Health</Link>
              <ul className="sub-menu">
                <li><Link href="/water">Clean Water Program</Link></li>
                <li><Link href="/cataract">Cataract Program</Link></li>
                <li><Link href="/familyWelfare">Medicine Service</Link></li>
              </ul>
            </li>

            <li className="menu-item-has-children">
              <Link href="#" className="has-arrow">Welfare</Link>
              <ul className="sub-menu">
                <li><Link href="/distribution">Distribution</Link></li>
                <li><Link href="/rashan">Rashan Program</Link></li>
                <li><Link href="/communityCenter">Community Center</Link></li>
              </ul>
            </li>

            <li className="menu-item-has-children">
              <Link href="#" className="has-arrow">Islamic Program</Link>
              <ul className="sub-menu">
                <li><Link href="/islamicactivity">Islamic Activity</Link></li>
                <li><Link href="/masjid">Masjid Maktab</Link></li>
                <li><Link href="/qurbani">Qurbani Package</Link></li>
                <li><Link href="/ramzanprogram">Ramzan Package</Link></li>
              </ul>
            </li>

            <li><Link href="/disaster">Rehabilitation</Link></li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="#" className="has-arrow">Muwakhat</Link>
          <ul className="sub-menu">
            <li><Link href="/mawakhat-e-Madina">Muwakhat-e-Madina</Link></li>
            <li><Link href="/darulTarbiyah">Dar Ul Tarbiyah</Link></li>
            <li><Link href="/darulEhsan">Dar Ul Ehsan</Link></li>
            <li><Link href="/sahoolatCenter">Sahoolat Center</Link></li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="#" className="has-arrow">Get Registered</Link>
          <ul className="sub-menu">
            <li><Link href="/needy">Needy Support / Medical</Link></li>
            <li><Link href="/jobSeeker">Job Seeker / Internee</Link></li>
            <li><Link href="/studentSkillWorker">Student / Skill Worker</Link></li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="#" className="has-arrow">Join Us</Link>
          <ul className="sub-menu">
            <li><Link href="/donation">Donor</Link></li>
            <li><Link href="/sponsor">Sponsor</Link></li>
            <li><Link href="/volunteer">Volunteer</Link></li>
            <li><Link href="/consultant">Consultant & Friend</Link></li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="#" className="has-arrow">Media</Link>
          <ul className="sub-menu">
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/videos">Videos</Link></li>
            <li><Link href="/images">Images</Link></li>
          </ul>
        </li>

        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}
