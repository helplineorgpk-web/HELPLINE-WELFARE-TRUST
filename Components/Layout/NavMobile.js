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
        <li>
          <Link href="/">Home</Link>
        </li>

        <li className="menu-item-has-children">
          <Link href="#" className="has-arrow">
            Who We Are
          </Link>
          <ul className="sub-menu">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/organization">Our Leadership</Link></li>
            <li><Link href="/registration">Registration</Link></li>
            <li><Link href="/ourjourney">Our Journey</Link></li>
            <li><Link href="/ourPresence">Our Presence</Link></li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="#" className="has-arrow">
            What We Do
          </Link>
          <ul className="sub-menu">
            <li><Link href="/edu">Education &amp; Literacy</Link></li>
            <li><Link href="/health">Primary Healthcare</Link></li>
            <li><Link href="/disaster">Disaster Relief</Link></li>
            <li><Link href="/social-capital-development">Social Welfare Development</Link></li>
            <li><Link href="/sustainable-environment-wash">Sustainability &amp; Endowment</Link></li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="#" className="has-arrow">
            Our Impact
          </Link>
          <ul className="sub-menu">
            <li><Link href="/our-impact">Our Impact</Link></li>
            <li><Link href="/blogs">Success Stories</Link></li>
            <li><Link href="/annual-reports">Annual Reports</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link href="#" className="has-arrow">
            Campaign
          </Link>
          <ul className="sub-menu">
            <li><Link href="/campaigns">All Campaigns</Link></li>
            <li><Link href="/volunteer">Volunteer</Link></li>
            <li><Link href="/images">Images Gallery</Link></li>
            <li><Link href="/videos">Videos</Link></li>
            <li><Link href="/mawakhat-e-Madina">Daily News</Link></li>
            <li><Link href="/zakat">Zakat Calculator</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
